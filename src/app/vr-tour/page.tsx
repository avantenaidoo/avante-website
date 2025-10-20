import { Suspense } from 'react'
import Scene from './components/Scene'

export default function VRTourPage() {
  return (
    <main className="w-full h-screen">
      <Suspense fallback={<div className="w-full h-screen bg-black flex items-center justify-center"><p className="text-white">Loading VR...</p></div>}>
        <Scene />
      </Suspense>
    </main>
  )
}