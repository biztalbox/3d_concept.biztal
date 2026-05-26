"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { AdaptiveDpr, Environment, OrbitControls } from "@react-three/drei";
import {
  Suspense,
  useRef,
  useState,
  useEffect,
  useCallback,
  createElement,
} from "react";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { LinearToneMapping, PerspectiveCamera } from "three";
// import type {OrbitControls as OrbitControlsImpl} from "@react-three/drei"

import Base from "./Base";
import { ExitButton } from "./ExitButton";
import { ZoomedPanel } from "./ZoomedPanel";
import {
  CameraDebuggerScene,
  CameraDebuggerOverlay,
  type DebugLiveState,
} from "./CameraDebugger";
import { useCameraMove } from "./hooks/useCameraMove";
import { MODEL_REGISTRY, getRegistryEntries, type ModelId } from "./registry";
import {
  BlenderCameraSource,
  type BlenderCameraResult,
} from "./shared/BlenderCameraSource";
import { SCENE_ROOT, SCENE_CENTER_LOCAL } from "./shared/scene-root";
import { FadeGroup } from "./shared/FadeGroup";
import { SCENE_INTRO_CONFIG } from "./shared/scene-intro-config";
import { preloadRegistryModels } from "./shared/preload-registry-models";
import { useBackgroundAudio } from "./shared/useBackgroundAudio";
import type { CameraTarget } from "./shared/types";
import { LoaderContent } from "../page-loader";
import * as THREE from "three";
import { EffectComposer, Bloom, ToneMapping } from '@react-three/postprocessing'
import { BlendFunction, ToneMappingMode } from 'postprocessing'

// Start downloading registry GLBs as soon as this module loads (~170 MB total).
preloadRegistryModels();

/**
 * Fallback initial camera, used ONLY for the brief moment between Canvas
 * mount and `BlenderCameraSource` resolving (which happens synchronously
 * inside the Suspense boundary, so the user shouldn't actually see this).
 *
 * Once `camera.glb` is loaded, this is replaced via state by the
 * Blender-authored pose — both for initial framing AND as the exit
 * target the camera flies back to when leaving a focused model.
 */
const FALLBACK_INITIAL_CAMERA: CameraTarget = {
  position: [1, 10, 14],
  lookAt: [1, 0, 0],
  duration: 1.5,
};

/** Path to the Blender-exported camera GLB (must include camera object). */
const BLENDER_CAMERA_URL = "/model5/camera.glb";

/**
 * Optional fine-tuning AFTER `lookAtMode="sceneCenter"` is applied.
 * Most users won't need these — only touch if the center is close but
 * still a few degrees off.
 */
const BLENDER_CAMERA_TUNING = {
  azimuthOffsetDeg: 0,
  positionOffset: [0, 0, 0] as [number, number, number],
  lookAtOffset: [0, 0, 0] as [number, number, number],
  /**
   * Vertical FOV in degrees. `null` = use Blender export (~10.5°).
   * Smaller → zoom IN (e.g. 8). Larger → wider view (e.g. 35, 58).
   */
  fovDeg: 9.5 as number | null,
  /**
   * Move camera toward / away from lookAt without changing FOV.
   * 1 = Blender distance · 0.85 = 15% closer (zoom in) · 1.15 = zoom out
   */
  dollyFactor: 1,
};

/**
 * Mouse-driven parallax rotation. Disabled while:
 *   - a model is selected (we don't want mouse to fight the focused camera)
 *   - OR a GSAP camera tween is in progress (would cause jitter)
 *
 * Both gates are AND-ed in the parent (`enabled` prop).
 */
function MouseOrbit({ enabled }: { enabled: boolean }) {
  const controlsRef = useRef<OrbitControlsImpl>(null);

  useFrame((state) => {
    if (!enabled) return;
    const controls = controlsRef.current;
    if (!controls) return;
    controls.setAzimuthalAngle(state.mouse.x * 0.05);
    controls.update();
  });

  return (
    <OrbitControls
      ref={controlsRef}
      makeDefault
      enableZoom={false}
      enablePan={false}
      enableRotate={false}
      enableDamping
      dampingFactor={0.08}
    />
  );
}

/**
 * Camera path orchestrator. Lives inside <Canvas> so it can use `useThree`
 * via `useCameraMove`.
 *
 * On entry  (selectedId became non-null): plays [...waypoints, cameraTarget]
 * On exit   (selectedId became null):     plays [...waypoints.reverse(), initialCamera]
 *
 * Tracks which model we WERE on (via ref) so on exit we know which
 * waypoints to traverse back through.
 *
 * `initialCamera` is the idle/default pose — it's a STATE prop because
 * `BlenderCameraSource` updates it once `camera.glb` is loaded (so the
 * exit animation always returns to the latest Blender-authored pose).
 * We deliberately do NOT animate on `initialCamera` changes — those are
 * handled synchronously by `BlenderCameraSource` snapping the live
 * camera before the first frame.
 */
function CameraDirector({
  selectedId,
  initialCamera,
  onAnimateEnd,
}: {
  selectedId: ModelId | null;
  initialCamera: CameraTarget;
  onAnimateEnd: () => void;
}) {
  const moveCamera = useCameraMove();
  const controls = useThree((s) => s.controls);

  const prevSelectedRef = useRef<ModelId | null>(null);
  const isFirstRunRef = useRef(true);

  useEffect(() => {
    // Wait until OrbitControls has registered itself via makeDefault.
    if (!controls) return;

    // Skip the very first effect call — camera is already at the right
    // pose (either fallback or just-snapped Blender pose by
    // BlenderCameraSource); no animation needed on mount.
    if (isFirstRunRef.current) {
      isFirstRunRef.current = false;
      prevSelectedRef.current = selectedId;
      return;
    }

    // Only animate when SELECTION changes. `initialCamera` updates from
    // BlenderCameraSource are snapped directly to the camera; tweening
    // here would re-fly an already-correct pose.
    if (prevSelectedRef.current === selectedId) return;

    let path: CameraTarget[];

    if (selectedId) {
      // ENTERING — traverse waypoints (if any), end at cameraTarget.
      const cfg = MODEL_REGISTRY[selectedId].config;
      path = [...(cfg.waypoints ?? []), cfg.cameraTarget];
    } else {
      // EXITING — reverse the waypoints of the model we were on, end at
      // the (possibly Blender-supplied) initialCamera.
      const prev = prevSelectedRef.current;
      const prevWaypoints = prev
        ? (MODEL_REGISTRY[prev].config.waypoints ?? [])
        : [];
      path = [...[...prevWaypoints].reverse(), initialCamera];
    }

    // NOTE: `isAnimating` is already true at this point — set synchronously
    // by the click handler BEFORE `selectedId` changed (see `handleSelect`).
    // This eliminates the 1-frame gap where MouseOrbit would otherwise grab
    // the camera between state-change and effect-run.
    moveCamera(path, { onComplete: onAnimateEnd });

    prevSelectedRef.current = selectedId;
  }, [selectedId, initialCamera, controls, moveCamera, onAnimateEnd]);

  return null;
}

/** Re-applies idle FOV after exiting a focused model (position is tweened, FOV is not). */
function IdleCameraFov({
  fov,
  active,
}: {
  fov: number | null;
  active: boolean;
}) {
  const camera = useThree((s) => s.camera);

  useEffect(() => {
    if (!active || fov == null || !(camera instanceof PerspectiveCamera)) return;
    camera.fov = fov;
    camera.updateProjectionMatrix();
  }, [active, fov, camera]);

  return null;
}

function RegistryModels({
  introComplete,
  selectedId,
  debugMode,
  onSelect,
}: {
  introComplete: boolean;
  selectedId: ModelId | null;
  debugMode: boolean;
  onSelect: (id: ModelId) => void;
}) {
  return (
    <FadeGroup
      visible={introComplete}
      preloadWhileHidden
      fadeInDuration={SCENE_INTRO_CONFIG.modelsFadeInDuration}
      fadeInDelay={
        SCENE_INTRO_CONFIG.modelsFadeInDelay +
        SCENE_INTRO_CONFIG.modelsRevealDelayMs / 1000
      }
    >
      {getRegistryEntries().map(([id, { Model }]) => (
        <Suspense key={id} fallback={null}>
          <Model
            isSelected={selectedId === id}
            isHidden={!debugMode && selectedId !== null && selectedId !== id}
            onSelect={() => onSelect(id)}
          />
        </Suspense>
      ))}
    </FadeGroup>
  );
}

function SceneIntroCore({
  startIntro,
  onBaseReady,
  onOpeningComplete,
  debugMode,
  onBlenderCameraResolved,
}: {
  startIntro: boolean;
  onBaseReady: () => void;
  onOpeningComplete: () => void;
  debugMode: boolean;
  onBlenderCameraResolved: (result: BlenderCameraResult) => void;
}) {
  const [cameraReady, setCameraReady] = useState(false);
  const baseReadyRef = useRef(false);
  const notifiedRef = useRef(false);

  const tryNotifyReady = useCallback(() => {
    if (notifiedRef.current || !baseReadyRef.current) return;
    if (!debugMode && !cameraReady) return;
    notifiedRef.current = true;
    onBaseReady();
  }, [cameraReady, debugMode, onBaseReady]);

  const handleBaseReady = useCallback(() => {
    baseReadyRef.current = true;
    tryNotifyReady();
  }, [tryNotifyReady]);

  const handleCameraResolved = useCallback(
    (result: BlenderCameraResult) => {
      setCameraReady(true);
      onBlenderCameraResolved(result);
      tryNotifyReady();
    },
    [onBlenderCameraResolved, tryNotifyReady],
  );

  useEffect(() => {
    if (debugMode) {
      baseReadyRef.current = true;
      setCameraReady(true);
      tryNotifyReady();
    }
  }, [debugMode, tryNotifyReady]);

  return (
    <>
      <Environment
        files="/assets/bg.hdr"
        environmentIntensity={1}
        environmentRotation={[0, -0.45, -265]}
      />
      <group rotation={SCENE_ROOT.rotation} position={SCENE_ROOT.position}>
        <Base
          startIntro={startIntro}
          onReady={handleBaseReady}
          onOpeningComplete={onOpeningComplete}
        />
        {debugMode ? null : (
          <BlenderCameraSource
            url={BLENDER_CAMERA_URL}
            lookAtMode="sceneCenter"
            sceneCenterLocal={SCENE_CENTER_LOCAL}
            azimuthOffsetDeg={BLENDER_CAMERA_TUNING.azimuthOffsetDeg}
            positionOffset={BLENDER_CAMERA_TUNING.positionOffset}
            lookAtOffset={BLENDER_CAMERA_TUNING.lookAtOffset}
            fovDeg={BLENDER_CAMERA_TUNING.fovDeg}
            dollyFactor={BLENDER_CAMERA_TUNING.dollyFactor}
            onResolved={handleCameraResolved}
          />
        )}
      </group>
    </>
  );
}

function HomeCanvasScene({
  selectedId,
  onSelect,
  isAnimating,
  onAnimateEnd,
  debugMode,
  debugLiveStateRef,
  initialCamera,
  idleFov,
  onBlenderCameraResolved,
  startIntro,
  onCoreReady,
}: {
  selectedId: ModelId | null;
  onSelect: (id: ModelId) => void;
  isAnimating: boolean;
  onAnimateEnd: () => void;
  debugMode: boolean;
  debugLiveStateRef: React.MutableRefObject<DebugLiveState>;
  initialCamera: CameraTarget;
  idleFov: number | null;
  onBlenderCameraResolved: (result: BlenderCameraResult) => void;
  startIntro: boolean;
  onCoreReady: () => void;
}) {
  const [introComplete, setIntroComplete] = useState(debugMode);

  useEffect(() => {
    if (debugMode) setIntroComplete(true);
  }, [debugMode]);

  const handleOpeningComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  return (
    <Canvas
      camera={{
        fov: BLENDER_CAMERA_TUNING.fovDeg ?? 58,
        position: FALLBACK_INITIAL_CAMERA.position,
      }}
      gl={{
        toneMapping: THREE.NoToneMapping,
        outputColorSpace: THREE.SRGBColorSpace,
        antialias: true,
      }}
      shadows="soft"
      style={{ height: "100vh", width: "100vw" }}
      className="w-full cursor-pointer"
    >
      <Suspense fallback={null}>
        <SceneIntroCore
          startIntro={startIntro}
          onBaseReady={onCoreReady}
          onOpeningComplete={handleOpeningComplete}
          debugMode={debugMode}
          onBlenderCameraResolved={onBlenderCameraResolved}
        />
      </Suspense>

      <group rotation={SCENE_ROOT.rotation} position={SCENE_ROOT.position}>
        <RegistryModels
          introComplete={introComplete}
          selectedId={selectedId}
          debugMode={debugMode}
          onSelect={onSelect}
        />
      </group>
      <EffectComposer multisampling={8}>
        <Bloom
          luminanceThreshold={5}
          luminanceSmoothing={0.3}
          intensity={0.5}
          radius={0.4}
          mipmapBlur={true}
          blendFunction={BlendFunction.ADD}
        />
        <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
      </EffectComposer>
      <AdaptiveDpr />
      {/* <OrbitControls /> */}
      {debugMode ? null : <MouseOrbit enabled={selectedId === null && !isAnimating} />}

      {/*
        Debug mode replaces the normal MouseOrbit + CameraDirector pair with
        a fully-interactive OrbitControls (orbit/zoom/pan) so the user can
        manually frame the perfect camera position.
      */}
      {debugMode ? (
        <CameraDebuggerScene liveStateRef={debugLiveStateRef} />
      ) : (
        <>
          <IdleCameraFov
            fov={idleFov}
            active={selectedId === null && !isAnimating}
          />
          {/* <MouseOrbit enabled={selectedId === null && !isAnimating} /> */}
          <CameraDirector
            selectedId={selectedId}
            initialCamera={initialCamera}
            onAnimateEnd={onAnimateEnd}
          />
        </>
      )}
    </Canvas>
  );
}

export default function HomeScene() {
  useBackgroundAudio({ src: "/assets/bg_audio.mpeg" });

  const [selectedId, setSelectedId] = useState<ModelId | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [debugMode, setDebugMode] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [startIntro, setStartIntro] = useState(false);

  // Idle/exit camera target. Starts as a hardcoded fallback for the brief
  // moment between Canvas mount and `BlenderCameraSource` resolving inside
  // the Suspense boundary; once `camera.glb` is loaded this is replaced
  // with the Blender-authored world-space pose.
  const [initialCamera, setInitialCamera] = useState<CameraTarget>(
    FALLBACK_INITIAL_CAMERA,
  );
  const [idleFov, setIdleFov] = useState<number | null>(
    BLENDER_CAMERA_TUNING.fovDeg,
  );

  const handleBlenderCameraResolved = useCallback(
    (result: BlenderCameraResult) => {
      setInitialCamera(result.cameraTarget);
      setIdleFov(result.fov);
    },
    [],
  );

  // Ref shared between the in-Canvas debug controls and the HTML overlay.
  // The Scene writes position/lookAt + wires action callbacks; the Overlay
  // reads the values and triggers actions (Forward/Back/Up/Down buttons).
  const debugLiveStateRef = useRef<DebugLiveState>({
    position: [0, 20, 20],
    lookAt: [0, 0, 0],
    moveAlongView: () => { },
    moveVertical: () => { },
  });

  /**
   * IMPORTANT — `setIsAnimating(true)` MUST be batched with `setSelectedId`
   * in the SAME event so MouseOrbit's `enabled` gate flips off in the same
   * render as the selection change. Otherwise there's a 1-frame window
   * where MouseOrbit briefly takes control of the camera (visible jitter).
   *
   * React 18 auto-batches state updates inside event handlers — both
   * `setIsAnimating` and `setSelectedId` will commit together.
   */
  const handleSelect = useCallback((id: ModelId | null) => {
    setIsAnimating(true);
    setSelectedId(id);
  }, []);

  const handleExit = useCallback(() => handleSelect(null), [handleSelect]);
  const handleAnimateEnd = useCallback(() => setIsAnimating(false), []);

  const handleCoreReady = useCallback(() => {
    setShowLoader(false);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setStartIntro(true));
    });
  }, []);

  useEffect(() => {
    if (debugMode) {
      setShowLoader(false);
      setStartIntro(true);
    }
  }, [debugMode]);

  // ESC exits zoomed view; Ctrl+Shift+D toggles camera debug mode (dev only).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (debugMode) setDebugMode(false);
        else if (selectedId) handleExit();
      }
      if (
        process.env.NODE_ENV !== "production" &&
        e.ctrlKey &&
        e.shiftKey &&
        (e.key === "D" || e.key === "d")
      ) {
        e.preventDefault();
        setDebugMode((d) => !d);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedId, debugMode, handleExit]);

  const ContentComponent =
    selectedId && !debugMode ? MODEL_REGISTRY[selectedId].Content : null;

  return (
    <div className="relative bg-black! min-h-screen">
      {showLoader && !debugMode ? <LoaderContent /> : null}

      <HomeCanvasScene
        selectedId={selectedId}
        onSelect={handleSelect}
        isAnimating={isAnimating}
        onAnimateEnd={handleAnimateEnd}
        debugMode={debugMode}
        debugLiveStateRef={debugLiveStateRef}
        initialCamera={initialCamera}
        idleFov={idleFov}
        onBlenderCameraResolved={handleBlenderCameraResolved}
        startIntro={startIntro || debugMode}
        onCoreReady={handleCoreReady}
      />

      <ZoomedPanel open={selectedId !== null && !debugMode}>
        {ContentComponent ? createElement(ContentComponent) : null}
      </ZoomedPanel>

      {selectedId !== null && !debugMode ? (
        <ExitButton onClick={handleExit} />
      ) : null}

      {debugMode ? (
        <CameraDebuggerOverlay
          liveStateRef={debugLiveStateRef}
          onClose={() => setDebugMode(false)}
        />
      ) : null}
    </div>
  );
}
