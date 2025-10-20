'use client'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

interface PhotoSphereProps {
  imageUrl: string
  radius?: number
}

export default function PhotoSphere({ imageUrl, radius = 10 }: PhotoSphereProps) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[radius, 64, 64]} />
      <meshBasicMaterial 
        map={imageUrl}
        side={2}
      />
    </mesh>
  )
}