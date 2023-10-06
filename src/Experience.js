import { useLoader } from '@react-three/fiber';
import { OrbitControls, TransformControls, PerspectiveCamera } from '@react-three/drei'
import React, { useRef } from 'react';




import Model from './QuakeWave';

// Extend the button component
import useStore from "./Store";




export default function Experience({ hasStarted }) {
    const groupRef = useRef();


    // All Store Value Import Goes Here
    const view = useStore((state) => state.view)
    const year = useStore((state) => (state.year))
    const day = useStore((state) => (state.day))
    


    // Main playing control
    const isPlaying = useStore((state) => state.isPlaying);



    // // const quake = quakeData[0];
    // const quake = quakeData.find((item) => item.year == selectedYear && item.day == selectedDay);
    // console.log(quake)



    // Camera reference 
    const cameraRef = useRef();



    console.log(year);
    console.log(day)

    const moonTexture = useLoader(TextureLoader, '/assets/moonTexture.jpg')
    const heightMapTexture = useLoader(TextureLoader, '/assets/height.jpg');

    console.log(heightMapTexture)

    console.log(hasStarted)

   

    return (

        <>
            <PerspectiveCamera
                makeDefault
                position={[0, 0, 4]}
                ref={cameraRef}
            />
            <OrbitControls enableZoom={true}
                minDistance={1.2}
                maxDistance={7}
                enablePan={true}
                autoRotate={false} />

        <group ref={groupRef}>
            <mesh>
                <ambientLight intensity={0.2} />
                <directionalLight />
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial map={view ? moonTexture : heightMapTexture} />
                {
                    isPlaying && <Model camRef={cameraRef} />
                }
               
            </mesh>
            </group>
        </>
    );
}