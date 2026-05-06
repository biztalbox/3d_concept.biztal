"use client";

import { Float, useAnimations, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Camera, Group, LoopOnce } from "three";
import { OrbitControls } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroScene = () => {
  const botRef = useRef<Group>(null!);

  const model = useGLTF('/assets/botwithoutwalk.glb');

  const { actions } = useAnimations(model.animations, model.scene);

  useGSAP(() => {
    const botTl = gsap.timeline({
      defaults: { duration: 3.2, ease: "back.inOut(0.8)" },
    });

    botTl.from(botRef.current.scale, { scale: 3 }, 0)
    botTl.from(botRef.current.position, { x: "+=20", z: "-=20" }, 0)

    const action = actions["Animation"];
    if (action) {
      action.reset();
      action.setLoop(LoopOnce, 1);
      action.clampWhenFinished = true;
      botTl.call(() => action.play(), undefined, 0);
    }

  }, { dependencies: [actions] })


  useEffect(() => {
    // console.log(actions)
    // actions['Animation']?.play()
  }, []);
  return (
    <group ref={botRef} >
      <Float floatIntensity={2} rotationIntensity={0.2} speed={4}>
        <mesh>
          <primitive object={model.scene} scale={4.3} rotation={[0, 0, 0]} position={[0, -2, 0]} />
        </mesh>
      </Float>
    </group>
  )
}

export default HeroScene