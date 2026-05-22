"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Base from "./Base";

function HomeCanvasScene() {
    return (
        <Canvas
            camera={{ fov: 60, position: [0, 20, 20], rotation: [0,0,0]}}
            gl={{ antialias: true }}
            style={{ height: "100vh", width: "100vw" }}
            className="w-full cursor-pointer"
        >
            <Base />
            <Environment preset="city" />
            <OrbitControls />
        </Canvas>
    );
}

export default function HomeScene() {
    return (
        <div className="">
            <Suspense fallback={null}>
                <HomeCanvasScene />
            </Suspense>
        </div>
    );
}
