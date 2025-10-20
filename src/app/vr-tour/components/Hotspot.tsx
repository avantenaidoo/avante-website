'use client'
import { useState } from 'react'

interface HotspotProps {
  position: [number, number, number]
  title: string
  onClick: () => void
}

export default function Hotspot({ 
  position, 
  title, 
  onClick 
}: HotspotProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`absolute w-12 h-12 rounded-full cursor-pointer transition-all duration-200 ${
        hovered ? 'bg-red-500 scale-110' : 'bg-gray-500 hover:bg-red-400'
      }`}
      style={{
        left: `${position[0] + 50}%`,
        top: `${position[1] + 50}%`,
        transform: `translate(-50%, -50%) translate3d(${position[2]}px, 0, 0)`
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <span className="text-white text-xs flex items-center justify-center h-full">
        {title}
      </span>
    </div>
  )
}