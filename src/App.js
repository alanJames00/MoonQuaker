import React from "react";
import { Canvas } from '@react-three/fiber'
import Experience from "./Experience";

import ControlPanel from "./ContolPanel";






export default function App() {
  



  return (
    <>
      <div style={{ backgroundColor: 'black', display: 'flex' }}>
        
      <ControlPanel />

      </div>
      <Canvas style={{ backgroundColor: 'black' }}>
        
        <Experience />

      </Canvas>
    </>

  );
}