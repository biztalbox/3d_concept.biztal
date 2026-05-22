"use client"
import { useGLTF } from "@react-three/drei";


const Base = () => {

    const base = useGLTF("/models/base.glb");
    const center = useGLTF("/models/center.glb");
    const healing = useGLTF("/models/healing.glb");
    const server = useGLTF("/models/server.glb");
    const shooting = useGLTF("/models/shooting.glb");
    const testimonial = useGLTF("/models/testimonial.glb");
    const upgrade = useGLTF("/models/upgrade.glb");
    const workstation = useGLTF("/models/workstation.glb");
    return (
        <group rotation={[0, 1.6, 0]} position={[0, 0, 0]}>
            <mesh>
                <primitive object={base.scene} />
            </mesh>
            <mesh>
                <primitive object={center.scene} />
            </mesh>
            <mesh>
                <primitive object={healing.scene} />
            </mesh>
            <mesh>
                <primitive object={server.scene} />
            </mesh>
            <mesh>
                <primitive object={shooting.scene} />
            </mesh>
            <mesh>
                <primitive object={testimonial.scene} />
            </mesh>
            {/* <mesh>
                <primitive object={upgrade.scene} />
            </mesh> */}
            <mesh>
                <primitive object={workstation.scene} />
            </mesh>

        </group>
    )
}

export default Base