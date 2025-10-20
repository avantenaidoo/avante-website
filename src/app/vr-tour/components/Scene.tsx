'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { useState } from 'react'
import PhotoSphere from './PhotoSphere'
import Hotspot from './Hotspot'
import CVModal from './CVModal'
import { HOTSPOTS } from '../data/cv-data'

export default function Scene() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null)
  const [currentPhoto, setCurrentPhoto] = useState('/photos/lobby.jpg')

  return (
    <>
      <Canvas className="w-full h-screen fixed inset-0 z-0">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <PhotoSphere imageUrl={currentPhoto} />
        
        {HOTSPOTS.map((hotspot) => (
          <Hotspot
            key={hotspot.id}
            {...hotspot}
            onClick={(id) => {
              setActiveHotspot(id)
              setCurrentPhoto(hotspot.photoUrl)
            }}
          />
        ))}
        
        <Stars radius={100} depth={60} count={5000} factor={4} saturation={0} fade />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
      
      {activeHotspot && (
        <CVModal 
          section={activeHotspot} 
          onClose={() => setActiveHotspot(null)} 
        />
      )}
    </>
  )
}