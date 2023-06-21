import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Preload, useGLTF } from '@react-three/drei';

const Earth = () => {
  return (
    <div>Earth</div>
  )
}

const EarthCanvas = () => {
  return(
    <Canvas shadows frameloop='demand'
    gl={{preserveDrawingBuffer:true}}
  )
}

export default Earth