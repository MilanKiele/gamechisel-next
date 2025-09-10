"use client"

import React, { useRef, useMemo, Suspense, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Environment, Float, Trail, Sphere } from '@react-three/drei'
import { Group, Vector3, Material } from 'three'
import * as THREE from 'three'
import { gsap } from 'gsap'

interface MaterialWithOpacity extends Material {
  opacity: number
}

// Dust particle component
function DustParticle({ position, velocity }: { position: [number, number, number], velocity: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const lifeRef = useRef(1)
  const originalPosition = useRef(new Vector3(...position))
  
  useFrame((state, delta) => {
    if (!meshRef.current) return
    
    // Update position
    meshRef.current.position.x += velocity[0] * delta
    meshRef.current.position.y += velocity[1] * delta
    meshRef.current.position.z += velocity[2] * delta
    
    // Fade out over time
    lifeRef.current -= delta * 0.3
    if (Array.isArray(meshRef.current.material)) {
      meshRef.current.material.forEach(mat => {
        if ('opacity' in mat) {
          (mat as MaterialWithOpacity).opacity = lifeRef.current
        }
      })
    } else if ('opacity' in meshRef.current.material) {
      (meshRef.current.material as MaterialWithOpacity).opacity = lifeRef.current
    }
    
    // Reset if dead
    if (lifeRef.current <= 0) {
      lifeRef.current = 1
      meshRef.current.position.copy(originalPosition.current)
      if (Array.isArray(meshRef.current.material)) {
        meshRef.current.material.forEach(mat => {
          if ('opacity' in mat) {
            (mat as MaterialWithOpacity).opacity = 1
          }
        })
      } else if ('opacity' in meshRef.current.material) {
        (meshRef.current.material as MaterialWithOpacity).opacity = 1
      }
    }
  })
  
  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.015, 6, 6]} />
      <meshBasicMaterial color="#f1c643" transparent opacity={1} />
    </mesh>
  )
}

// Dust particle system
function DustSystem() {
  const [isVisible, setIsVisible] = useState(false)
  const [particles, setParticles] = useState<Array<{
    id: number;
    position: [number, number, number];
    velocity: [number, number, number];
  }>>([])
  
  useEffect(() => {
    // Generate particles only on client side to prevent hydration mismatch
    const generatedParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 2,
        Math.random() * 0.8 - 0.4,
        (Math.random() - 0.5) * 2
      ] as [number, number, number],
      velocity: [
        (Math.random() - 0.5) * 0.6,
        Math.random() * 0.2 + 0.1,
        (Math.random() - 0.5) * 0.6
      ] as [number, number, number]
    }))
    setParticles(generatedParticles)
    
    // Delay dust particles to appear after model
    const timer = setTimeout(() => setIsVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])
  
  if (!isVisible || particles.length === 0) return null
  
  return (
    <>
      {particles.map((particle) => (
        <DustParticle
          key={particle.id}
          position={particle.position}
          velocity={particle.velocity}
        />
      ))}
    </>
  )
}

// Model state tracker
function ModelStateTracker() {
  const { scene } = useGLTF('/model/model.glb')
  
  useFrame(() => {
    // This will run every frame, so we can track state changes
    if (scene) {
      console.log('Model scene is available')
    } else {
      console.log('Model still loading...')
    }
  })
  
  return null // This component doesn't render anything
}

// Ultra-simple model component with context loss recovery
function Model() {
  const { scene } = useGLTF('/model/model.glb')
  const modelRef = useRef<Group>(null)
  const hoverRef = useRef(0)
  const [contextLost, setContextLost] = useState(false)
  
  // Monitor for context loss
  useFrame((state) => {
    if (!modelRef.current) return
    
    // Check if WebGL context is lost
    const canvas = state.gl.domElement
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (gl && 'isContextLost' in gl && typeof gl.isContextLost === 'function' && gl.isContextLost()) {
      if (!contextLost) {
        console.warn('WebGL context lost detected in Model component')
        setContextLost(true)
      }
      return
    } else if (contextLost) {
      console.log('WebGL context recovered in Model component')
      setContextLost(false)
    }
    
    // Subtle rotation with 90-degree left offset
    modelRef.current.rotation.y = Math.PI * 0.1 - Math.PI * 0.5 + Math.sin(state.clock.elapsedTime * 0.15) * 0.1
    
    // Hover effect
    hoverRef.current += 0.006
    modelRef.current.position.y = Math.sin(hoverRef.current) * 0.1
    
    // Slight tilt to look more dynamic
    modelRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05
    modelRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.08) * 0.02
  })
  
  // If there's no scene or context lost, show fallback
  if (!scene || contextLost) {
    console.log('Model fallback:', { hasScene: !!scene, contextLost })
    return <FallbackModel />
  }
  
  console.log('Rendering main model')
  
  return (
    <group ref={modelRef} position={[0, 0, 0]} scale={[1.5, 1.5, 1.5]} rotation={[0, Math.PI * 0.1 - Math.PI * 0.5, 0]}>
      <primitive object={scene} />
      {/* Always visible debug indicator */}
      <mesh position={[0, 0, 2]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshBasicMaterial color="red" />
      </mesh>
    </group>
  )
}

// Fallback model component in case GLB doesn't load
function FallbackModel() {
  const meshRef = useRef<THREE.Mesh>(null)
  const hoverRef = useRef(0)
  
  useEffect(() => {
    console.log('Fallback model is being used')
  }, [])
  
  useFrame((state) => {
    if (!meshRef.current) return
    
    // Subtle rotation
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.15
    
    // Hover effect
    hoverRef.current += 0.008
    meshRef.current.position.y = Math.sin(hoverRef.current) * 0.15
    
    // Slight tilt to look more dynamic
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.08
    meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.03
  })
  
  return (
    <group position={[0, 0, 0]} rotation={[0, Math.PI * 0.15 - Math.PI * 0.5, 0]}>
      <mesh ref={meshRef}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color="#f1c643" metalness={0.3} roughness={0.4} />
      </mesh>
      {/* Add some additional geometry to make it more interesting */}
      <mesh position={[0, 0, 2.25]}>
        <sphereGeometry args={[0.45, 16, 16]} />
        <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Debug indicator for fallback */}
      <mesh position={[0, 0, 3]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshBasicMaterial color="blue" />
      </mesh>
    </group>
  )
}

// Delayed trail component
function DelayedTrail() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    // Delay trail to appear after model
    const timer = setTimeout(() => setIsVisible(true), 1200)
    return () => clearTimeout(timer)
  }, [])
  
  if (!isVisible) return null
  
  return (
    <Trail
      width={0.3}
      length={6}
      color="#f1c643"
      attenuation={(t) => t * t}
    >
      <Sphere args={[0.05]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#f1c643" transparent opacity={0} />
      </Sphere>
    </Trail>
  )
}


// Client-only 3D scene component
export function ClientOnly3DScene() {
  const [isCanvasReady, setIsCanvasReady] = useState(false)
  
  useEffect(() => {
    console.log('3D Scene component mounted')
    setIsCanvasReady(true)
  }, [])
  
  console.log('ClientOnly3DScene render, isCanvasReady:', isCanvasReady)
  console.log('Canvas import:', Canvas)
  
  // Test if Canvas is available
  if (!Canvas) {
    console.error('Canvas is not available!')
    return (
      <div className="absolute inset-0 w-full h-full bg-red-500 flex items-center justify-center">
        <div className="text-white">Canvas not available</div>
      </div>
    )
  }
  
  return (
    <div className="absolute inset-0 w-full h-full" style={{ background: 'transparent' }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ 
          background: 'transparent',
          width: '100%',
          height: '100%'
        }}
        gl={{ 
          alpha: true, 
          antialias: true,
          preserveDrawingBuffer: true,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: false
        }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        onCreated={({ gl, scene, camera }) => {
          console.log('Canvas created, WebGL context:', gl.getContextAttributes())
          
          // Handle context loss
          const canvas = gl.domElement
          canvas.addEventListener('webglcontextlost', (event) => {
            console.warn('WebGL context lost!')
            event.preventDefault()
          })
          
          canvas.addEventListener('webglcontextrestored', () => {
            console.log('WebGL context restored!')
            // Force re-render
            gl.render(scene, camera)
          })
        }}
      >
        {/* Enhanced Lighting Setup */}
        <ambientLight intensity={0.6} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1.2}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight position={[-5, 5, -5]} intensity={0.4} />
        <pointLight position={[0, 0, 3]} intensity={0.8} color="#f1c643" />
        <pointLight position={[2, 2, 2]} intensity={0.3} color="#ffffff" />
        
        {/* Environment for reflections */}
        <Environment preset="studio" />
        
        {/* Model with floating animation */}
        <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.2}>
          <Suspense fallback={<FallbackModel />}>
            <Model />
          </Suspense>
        </Float>
        
        {/* Model state tracker */}
        <ModelStateTracker />
        
        {/* Dust particle system */}
        <DustSystem />
        
        {/* Trail effect behind model - delayed */}
        <Suspense fallback={null}>
          <DelayedTrail />
        </Suspense>
        
        {/* Persistent debug indicators - always visible */}
        <mesh position={[2, 2, 0]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color="green" />
        </mesh>
        
        {/* Model state indicator */}
        <mesh position={[2, 1.8, 0]}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshBasicMaterial color="yellow" />
        </mesh>
        
        {/* Context loss indicator */}
        <mesh position={[2, 1.6, 0]}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial color="orange" />
        </mesh>
      </Canvas>
    </div>
  )
}

// Legacy export for backward compatibility
export function Hero3DScene() {
  return <ClientOnly3DScene />
}