'use client'
import { useState } from 'react'
import PhotoSphere from './PhotoSphere'
import Hotspot from './Hotspot'
import CVModal from './CVModal'
import { HOTSPOTS } from '../data/cv-data'

export default function Scene() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null)

  return (
    <div className="w-full h-screen relative bg-blue-900 overflow-hidden">
      {/* 3D Blue Sphere Background */}
      <PhotoSphere />
      
      {/* 4 Clickable Hotspots */}
      {HOTSPOTS.map((hotspot) => (
        <Hotspot
          key={hotspot.id}
          position={hotspot.position}
          title={hotspot.title}
          onClick={() => setActiveHotspot(hotspot.id)}
        />
      ))}
      
      {/* CV Modal */}
      {activeHotspot && (
        <CVModal 
          section={activeHotspot} 
          onClose={() => setActiveHotspot(null)} 
        />
      )}
    </div>
  )
}