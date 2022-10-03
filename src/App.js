import * as THREE from 'three';
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { Html, Loader } from '@react-three/drei';

import ListItems from "./ListItems";

function Rig({ children }) {
    const outer = useRef();
    const inner = useRef();
    useFrame(({ clock }) => {
        outer.current.position.y = THREE.MathUtils.lerp(outer.current.position.y, 0, 0.05);
        inner.current.rotation.y = Math.sin(clock.getElapsedTime() / 8) * Math.PI;
    })
    return (
        <group position={[0, -100, 0]} ref={outer}>
            <group ref={inner}>{children}</group>
        </group>
    )
}

export default function App() {
    return (
        <Canvas
            concurrent="true"
            gl={{ alpha: false }}
            camera={{ position: [0, 15, 30], fov: 70 }}
            onCreated={({ gl, camera }) => {
                camera.lookAt(0, 0, 0)
            }}>
            <color attach="background" args={['#fff0ea']} />
            <ambientLight intensity={1} />

            <Suspense
                fallback={
                    <Html center>
                        <Loader />
                    </Html>
                }>
                <Rig>
                    <ListItems/>
                </Rig>
            </Suspense>
        </Canvas>
    )
}