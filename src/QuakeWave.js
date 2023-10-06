import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

// Import Quake data collection
import quakeData from './data/QuakeDB.json'

// Import Context
import useStore from "./Store";

export default function Model({ camRef }) {

  const props = {}

  const selectedYear = useStore((state) => state.year);
  const isPlaying = useStore((state) => state.isPlaying);
  const selectedDay = useStore((state) => state.day);


  const quake = quakeData.find((item) => item.year == selectedYear && item.day == selectedDay);


  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/assets/wave.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.KeyAction.play();
  });

  useFrame(() => {
    group.current.lookAt(0, 0, 0);
    camRef.current.position.set(quake.longitude*0.02,quake.latitude*0.023,1.7)
  }, []);


  let r = quake.magnitude < 1 ? 1.99 : 1.97;
  r = r * 0.50
  const degToRad = (deg) => (deg * Math.PI) / 180.0;

  return (
    <group
      {...props}
      dispose={null}
    >
      <group
        name='Scene'
        ref={group}
        position={[
          r * Math.sin(Math.PI / 2 - degToRad(quake.latitude)) * Math.sin(degToRad(quake.longitude)),
          r * Math.cos(Math.PI / 2 - degToRad(quake.latitude)),
          r * Math.sin(Math.PI / 2 - degToRad(quake.latitude)) * Math.cos(degToRad(quake.longitude)),
        ]}
      >
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

useGLTF.preload('/assets/wave.glb');
