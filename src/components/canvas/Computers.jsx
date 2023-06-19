import React from 'react';
import { Suspense, useEffect, useState } from 'react';
import {Canvas} from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
// import {Loader} from '../'

// import { HemisphereLight } from 'three';

const Computers = () => {
  const computer = useGLTF('../../../public/desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor= 'black'/>
      <pointLight intensity={1} />
      <primitive object={computer.scene} position={[0, -3.25 , -1.5]} 
      rotation={[- 0.01, -0.2, -0.1]}/>
    </mesh>
  )
}

const ComputerCanvas =() => {
  return(
    <Canvas frameloop='demand' shadows camera={{ position: [20,3,5] , fov:25}} gl={{ preserveDrawingBuffer:true}}>
      <Suspense >
        <OrbitControls 
        enableZoom = {false}
        maxPolarAngle = {Math.PI /2}
        minPolarAngle = {Math.PI /2}
        />
        <Computers />
      </Suspense>

      <Preload all/>
    </Canvas>
  )
}

export default ComputerCanvas