'use client'
import { useState } from 'react'
import { User, Code, Briefcase, Folder } from 'lucide-react'

interface HotspotProps {
  position: [number, number, number]
  title: string
  icon: string
  onClick: () => void
}

const icons = { user: User, code: Code, briefcase: Briefcase, folder: Folder }

export default function Hotspot({ 
  position, 
  title, 
  icon, 
  onClick 
}: HotspotProps) {
  const [hovered, setHovered] = useState(false)
  const IconComponent = icons[icon as keyof typeof icons]

  return (
    <mesh 
      position={position}
      onPointerEnter={() => setHovered(true)} 
      onPointerLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <sphereGeometry args={[0.3, 8, 8]} />
      <meshBasicMaterial color={hovered ? "#ef4444" : "#6b7280"} />
    </mesh>
  )
}