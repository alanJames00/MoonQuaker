// Import necessary dependencies and components
import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

// Import Quake data collection
import quakeData from './data/QuakeDB.json'

// Import custom store
import useStore from "./Store";

export default function Model({ camRef }) {

  // Define empty object for props
  const props = {}
  
  // Access context from custom store
  const selectedYear = useStore((state) => state.year);
  const isPlaying = useStore((state) => state.isPlaying);
  const selectedDay = useStore((state) => state.day);


  // Find earthquake data based on selectedYear and selectedDa
  const quake = quakeData.find((item) => item.year == selectedYear && item.day == selectedDay);


  // Create ref for the group
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/assets/wave.glb');  // Destructure nodes, materials, and animations from the glTF model
  const { actions } = useAnimations(animations, group); // Destructure actions from useAnimations

  // Run the KeyAction animation when the component mounts
  useEffect(() => {
    actions.KeyAction.play();
  });


  // Use useFrame to update the scene on each frame
  useFrame(() => {
    group.current.lookAt(0, 0, 0); // Set group to look at origin (0, 0, 0)
    camRef.current.position.set(quake.longitude*0.02,quake.latitude*0.023,1.7)
  }, []);


  // Calculate the radius based on earthquake magnitude and convert radians
  let r = quake.magnitude < 1 ? 1.99 : 1.97;
  r = r * 0.50;
  const degToRad = (deg) => (deg * Math.PI) / 180.0;

  // Render the Wave Component
  return (
    <group
      {...props}
      dispose={null}
    >
      <group
        name='Scene'
        ref={group}
        position={[
          /*  Calculate the x, y, z - coordinates of the position based on latitude and longitude considering
              Spherical coordinates
          */
          r * Math.sin(Math.PI / 2 - degToRad(quake.latitude)) * Math.sin(degToRad(quake.longitude)),
          r * Math.cos(Math.PI / 2 - degToRad(quake.latitude)),
          r * Math.sin(Math.PI / 2 - degToRad(quake.latitude)) * Math.cos(degToRad(quake.longitude)),
        ]}
      >
        {/* Create the mesh to render as Wave of moonquake */}
        <mesh
          name='Icosphere'
          geometry={nodes.Icosphere.geometry}
          material={materials['Material.003']}
          morphTargetDictionary={nodes.Icosphere.morphTargetDictionary}
          morphTargetInfluences={nodes.Icosphere.morphTargetInfluences}
          scale={(quake.magnitude < 1.5 ? 0.15 : 0.1) * quake.magnitude * 0.5}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}


// Preload the wave glTF model
useGLTF.preload('/assets/wave.glb');
