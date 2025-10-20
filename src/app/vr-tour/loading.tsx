export default function Loading() {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="w-20 h-20 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white">Loading 3D Scene...</p>
      </div>
    </div>
  )
}