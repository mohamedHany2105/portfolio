import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive';
import { Room } from './HeroModels/room';
import HeroLights from './HeroModels/HeroLights';
import Particles from './HeroModels/Particles';

const HeroExperience = () => {
    const isTable = useMediaQuery({ query: '(max-width:1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width:768px)' });
    return (
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
 <HeroLights/>
 <Particles count={1000}/>
            <OrbitControls
                enablePan={false}
                enableZoom={!isTable}
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}

            />

            <group
                scale={isMobile ? 0.7 : 1}
                position={[0, -3.5, 0]}
                rotation={[0, (-Math.PI / 4 ), 0]}
            >

                <Room />
            </group>
        </Canvas>
    )
}

export default HeroExperience