// Importing necessary React components and hooks from external libraries (drei)
import { useLoader } from '@react-three/fiber';
import { OrbitControls, TransformControls, PerspectiveCamera } from '@react-three/drei'
import React, { useRef } from 'react';

// Import quake wave model
import Model from './QuakeWave';

// Import the custom store  
import useStore from "./Store";

// Define Experience component
export default function Experience({ hasStarted }) {
    const groupRef = useRef();


    // Access the contexts and functions from the custom store
    const view = useStore((state) => state.view)
    const year = useStore((state) => (state.year))
    const day = useStore((state) => (state.day))
    
    // Access the play control from store
    const isPlaying = useStore((state) => state.isPlaying);


    // create Camera reference with useRef Hook
    const cameraRef = useRef();

    // Loading textures using useLoader
    const moonTexture = useLoader(TextureLoader, '/assets/moonTexture.jpg');
    const heightMapTexture = useLoader(TextureLoader, '/assets/height.jpg');

    // Render the Experience component
    return (

        <>
            {/* PerspectiveCamera with default settings */}
            <PerspectiveCamera
                makeDefault
                position={[0, 0, 4]}
                ref={cameraRef}
            />

            {/* OrbitControls for camera control */}
            <OrbitControls enableZoom={true}
                minDistance={1.2}
                maxDistance={7}
                enablePan={true}
                autoRotate={false} />

        {/* Group containing the 3D elements */}
        <group ref={groupRef}>
            <mesh>

                {/* Ambient and directional light for the scene */}
                <ambientLight intensity={0.2} />
                <directionalLight />

                {/* Sphere geometry for Lunar body */}
                <sphereGeometry args={[1, 32, 32]} />

                {/* MeshStandardMaterial with dynamic texture based on the 'view' state */}
                <meshStandardMaterial map={view ? moonTexture : heightMapTexture} />
                {
                    /* Conditional rendering of the Model component when animation is playing */
                    isPlaying && <Model camRef={cameraRef} />
                }
               
            </mesh>
            </group>
        </>
    );
}