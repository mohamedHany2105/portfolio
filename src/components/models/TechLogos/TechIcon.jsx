// import React from 'react'



// - load a ".glb " model (GLTF format)
// -adds basic lighting
// - applies environment reflections for realism
// -wraps teh model in a floating animation 
// - Optionally tweaks the material (like setting a white color on a specific mesh)
// - Disbales zooom using orbitContorls

import { Environment, useGLTF, Float, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from 'three'



const TechIcon = ({ model }) => {

    const scene = useGLTF(model.modelPath);


    useEffect(() => {
        if (model.name == 'Interactive Developer') {
scene.scene.traverse((child)=>{
    if(child.isMesh && child.name == 'Object_5'){
        child.material =new THREE.MeshStandardMaterial({color:'white'})

    }
})
        }
    }, [])



    return (
        <Canvas>
            <ambientLight intensity={0.3} />


            <directionalLight position={[5, 5, 5]} intensity={1} />

            <Environment preset="city" />

            <OrbitControls enableZoom={false} />

            <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
                <group scale={model.scale} rotation={model.rotation}>
                    <primitive object={scene.scene} />
                </group>
            </Float>


        </Canvas>
    )
}

export default TechIcon