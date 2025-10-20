'use client'
import { useState } from 'react'
import { Html, Float } from '@react-three/drei'
import { motion } from 'framer-motion'
import { User, Code, Briefcase, Folder } from 'lucide-react'

interface HotspotProps {
  id: string
  position: [number, number, number]
  title: string
  icon: string
  onClick: (id: string) => void
}

const icons = { 
  user: User, 
  code: Code, 
  briefcase: Briefcase, 
  folder: Folder 
}

export default function Hotspot({ 
  id, 
  position, 
  title, 
  icon, 
  onClick 
}: HotspotProps) {
  const [hovered, setHovered] = useState(false)
  const IconComponent = icons[icon as keyof typeof icons]

  return (
    <group position={position}>
      <Float>
        <mesh 
          onPointerEnter={() => setHovered(true)} 
          onPointerLeave={() => setHovered(false)}
          onClick={() => onClick(id)}
        >
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial 
            color={hovered ? '#3b82f6' : '#6b7280'} 
            emissive={hovered ? '#3b82f6' : '#000'} 
          />
        </mesh>
        
        <Html 
          position={[0, 0.5, 0]}
          center
          style={{ 
            opacity: hovered ? 1 : 0, 
            transform: hovered ? 'scale(1.2)' : 'scale(1)',
            pointerEvents: 'none'
          }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-2 p-2 bg-black/50 backdrop-blur-sm rounded-lg"
          >
            <IconComponent size={20} />
            <span className="text-sm font-medium">{title}</span>
          </motion.div>
        </Html>
      </Float>
    </group>
  )
}