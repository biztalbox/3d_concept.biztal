"use client";

import HeroScene from "@/component/HeroScene";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function MouseOrbit() {
    const controlsRef = useRef<any>(null);

    useFrame((state) => {
        const controls = controlsRef.current;
        if (!controls) return;

        // movement x-axis
        const targetAzimuth = state.mouse.x * -0.5;
        controls.setAzimuthalAngle(targetAzimuth);

        // movement y-axis
        // const targetPolar = 1.25 - state.mouse.y * -0.2;
        // controls.setPolarAngle(targetPolar);
        controls.update();
    });

    return (
        <OrbitControls
            ref={controlsRef}
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
            enableDamping
            dampingFactor={0.08}
        />
    );
}

const HeroCanvas = () => {



    return (
        <div className="relative order-1 md:order-2 overflow-hidden min-h-96">
            <Canvas camera={{ fov: 50 }} gl={{ antialias: true }} className="w-full h-full cursor-pointer" >
                <HeroScene />

                <Environment preset="city" />
                <MouseOrbit />
            </Canvas>
            {/* <div className="absolute top-52 right-[28rem] w-fit p-2 rounded-xl bg-foreground shadow text-background text-xl font-bold">
              <span>Click here</span>
            </div> */}
        </div>
    )
}

export default HeroCanvas