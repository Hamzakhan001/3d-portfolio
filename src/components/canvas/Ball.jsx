import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';



const Ball = (props) => {
  const [decal] = useTexture([props.imageUrl]);

  return (
    <Float>Ball</Float>
  )
}

const BallCanvas = ({icon}) =>{
  return(
    <Canvas
    frameloop='demand'
    gl={{ preserveDrawingBuffer: true }}
  >
    <Suspense>
      <OrbitControls
        enableZoom={false}
      />
      <Ball imageUrl={icon} />
    </Suspense>

    <Preload all />
  </Canvas> 
  )

}

export default BallCanvas;