"use client"

import React, { useRef, useEffect, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

// Star Wars-like particle system
function StarWarsParticles() {
  const meshRef = useRef<THREE.Points>(null)
  const timeRef = useRef(0)
  const [isDarkMode, setIsDarkMode] = useState(true)
  
  // Detect theme
  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains('dark') || 
                     (!document.documentElement.classList.contains('light') && 
                      window.matchMedia('(prefers-color-scheme: dark)').matches)
      setIsDarkMode(isDark)
    }
    
    checkTheme()
    
    // Listen for theme changes
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    })
    
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', checkTheme)
    
    return () => {
      observer.disconnect()
      mediaQuery.removeEventListener('change', checkTheme)
    }
  }, [])
  
  // Create particle geometry and material
  const { positions, colors } = useMemo(() => {
    const particleCount = 500
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    
    for (let i = 0; i < particleCount; i++) {
      // Random positions in a circular field
      // Create a large circular distribution that covers the full viewport
      const radius = Math.sqrt(Math.random()) * 10 // 0 to 10 (circular distribution)
      const angle = Math.random() * Math.PI * 2 // 0 to 2π
      const height = (Math.random() - 0.5) * 12 // -6 to +6 (height variation)
      
      const x = radius * Math.cos(angle)
      const y = height
      const z = radius * Math.sin(angle)
      
      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
      
      // Theme-aware colors
      const colorChoice = Math.random()
      if (isDarkMode) {
        // Dark mode: Light particles (white, blue, cyan)
        if (colorChoice < 0.6) {
          // White stars
          colors[i * 3] = 1
          colors[i * 3 + 1] = 1
          colors[i * 3 + 2] = 1
        } else if (colorChoice < 0.8) {
          // Blue stars
          colors[i * 3] = 0.5
          colors[i * 3 + 1] = 0.8
          colors[i * 3 + 2] = 1
        } else {
          // Cyan stars
          colors[i * 3] = 0
          colors[i * 3 + 1] = 1
          colors[i * 3 + 2] = 1
        }
      } else {
        // Light mode: Much darker particles for better visibility
        if (colorChoice < 0.6) {
          // Very dark gray stars
          colors[i * 3] = 0.05
          colors[i * 3 + 1] = 0.05
          colors[i * 3 + 2] = 0.05
        } else if (colorChoice < 0.8) {
          // Very dark blue stars
          colors[i * 3] = 0.02
          colors[i * 3 + 1] = 0.05
          colors[i * 3 + 2] = 0.15
        } else {
          // Very dark purple stars
          colors[i * 3] = 0.05
          colors[i * 3 + 1] = 0.02
          colors[i * 3 + 2] = 0.1
        }
      }
    }
    
    return { positions, colors }
  }, [isDarkMode])
  
  useFrame((state) => {
    if (!meshRef.current) return
    
    timeRef.current += 0.003
    
    // Gentle rotation for full-section effect
    meshRef.current.rotation.y = timeRef.current * 0.1
    meshRef.current.rotation.x = Math.sin(timeRef.current * 0.05) * 0.05 + Math.PI / 4.5 // ~40 degrees for top view
    
    // Make particles twinkle across the entire field
    const positions = meshRef.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < positions.length; i += 3) {
      const twinkle = Math.sin(timeRef.current * 1.5 + i * 0.05) * 0.15 + 0.85
      positions[i + 1] *= twinkle
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true
  })
  
  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={isDarkMode ? 0.02 : 0.025}
        vertexColors
        transparent
        opacity={isDarkMode ? 0.8 : 0.95}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Simple model component - no complex state management
function SimpleModel() {
  const gltf = useGLTF('/model/model.glb')
  const meshRef = useRef<THREE.Group>(null)
  const timeRef = useRef(0)
  const [screenSize, setScreenSize] = useState('medium')
  
  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth >= 1024) {
        setScreenSize('large')
      } else {
        setScreenSize('medium')
      }
    }
    
    updateScreenSize()
    window.addEventListener('resize', updateScreenSize)
    return () => window.removeEventListener('resize', updateScreenSize)
  }, [])
  
  useFrame((state) => {
    if (!meshRef.current) return
    
    timeRef.current += 0.01
    
    // Subtle hover effect only - no rotation
    meshRef.current.position.y = Math.sin(timeRef.current * 1.5) * 0.03
  })
  
  if (!gltf || !gltf.scene) {
    console.log('Model loading or error, showing fallback')
    return <FallbackCube />
  }
  
  console.log('Rendering model')
  
  // Responsive scale and positioning
  const scale = screenSize === 'large' ? 2.5 * 1.25 : 2.0 * 1.25 // 1.25x bigger on all screens
  const xPosition = screenSize === 'large' ? 1.8 : 0.2 // Right on large, center on medium/small
  const yPosition = screenSize === 'large' ? 0.4 : -0.2 // Higher on large, lower on medium/small
  
  return (
    <group 
      ref={meshRef} 
      scale={scale} 
      position={[xPosition, yPosition, 0]}
      rotation={[Math.PI / 4, Math.PI / 4 + Math.PI / 2 + Math.PI, 0]}
    >
      <primitive object={gltf.scene} />
    </group>
  )
}

// Simple fallback cube
function FallbackCube() {
  const meshRef = useRef<THREE.Mesh>(null)
  const timeRef = useRef(0)
  const [screenSize, setScreenSize] = useState('medium')
  
  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth >= 1024) {
        setScreenSize('large')
      } else {
        setScreenSize('medium')
      }
    }
    
    updateScreenSize()
    window.addEventListener('resize', updateScreenSize)
    return () => window.removeEventListener('resize', updateScreenSize)
  }, [])
  
  useFrame(() => {
    if (!meshRef.current) return
    
    timeRef.current += 0.01
    
    // Subtle hover effect only - no rotation
    meshRef.current.position.y = Math.sin(timeRef.current * 1.5) * 0.03
  })
  
  // Responsive scale and positioning
  const scale = screenSize === 'large' ? 2.5 * 1.25 : 2.0 * 1.25 // 1.25x bigger on all screens
  const xPosition = screenSize === 'large' ? 1.8 : 0.2 // Right on large, center on medium/small
  const yPosition = screenSize === 'large' ? 0.4 : -0.2 // Higher on large, lower on medium/small
  
  return (
    <mesh 
      ref={meshRef} 
      scale={scale} 
      position={[xPosition, yPosition, 0]}
      rotation={[Math.PI / 4, Math.PI / 4 + Math.PI / 2 + Math.PI, 0]}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#f1c643" />
    </mesh>
  )
}

// Main 3D scene component
export function Simple3DScene() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    return (
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900" />
    )
  }
  
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Separate viewport for 3D model - completely aligned with hero background */}
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ 
          background: 'transparent',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0
        }}
        gl={{ 
          alpha: true, 
          antialias: true,
          preserveDrawingBuffer: true
        }}
      >
        {/* Enhanced lighting for brighter model */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <directionalLight position={[-5, 5, 5]} intensity={0.8} />
        
        {/* Star Wars-like particle effects */}
        <StarWarsParticles />
        
        {/* Model with responsive positioning */}
        <SimpleModel />
      </Canvas>
    </div>
  )
}