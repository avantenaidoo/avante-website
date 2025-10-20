'use client'
import { useState, useEffect } from 'react'

export default function PhotoSphere() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 1)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="absolute inset-0"
      style={{
        background: 'radial-gradient(circle at 50% 50%, #3b82f6 0%, #1e40af 100%)',
        transform: `rotateY(${rotation}deg)`
      }}
    />
  )
}