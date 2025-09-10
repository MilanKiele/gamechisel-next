"use client"

import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'

// Dynamically import the 3D scene with no SSR
const Dynamic3DScene = dynamic(() => import('./hero-3d-scene').then(mod => ({ default: mod.ClientOnly3DScene })), {
  ssr: false,
  loading: () => null // No loading state to prevent white covers
})

export function ClientOnly3DScene() {
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  if (!isMounted) {
    return null // No loading state to prevent white covers
  }
  
  return <Dynamic3DScene />
}