"use client"

import { useRef, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function VRModel() {
  const { scene } = useGLTF('/model/vr.glb')
  const modelRef = useRef<THREE.Group>(null)
  const [modelLoaded, setModelLoaded] = useState(false)

  useEffect(() => {
    if (scene) {
      setModelLoaded(true)
    }
  }, [scene])

  if (!modelLoaded) {
    return null
  }

  return (
    <group ref={modelRef} scale={[4, 4, 4]} position={[0, -2.5, 0]}>
      <primitive object={scene} />
    </group>
  )
}

export default function VRModelComponent() {
  const containerClass = "w-full h-full absolute inset-0"

  return (
    <div className={containerClass}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ 
          alpha: true, 
          antialias: true,
          preserveDrawingBuffer: true
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <VRModel />
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          minDistance={3}
          maxDistance={8}
          autoRotate={false}
        />
      </Canvas>
    </div>
  )
}