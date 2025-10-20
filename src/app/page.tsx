import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Welcome to My VR CV
        </h1>
        <p className="text-xl text-gray-300 max-w-md mx-auto">
          Step into my professional world
        </p>
        <Link
          href="/vr-tour"
          className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all"
        >
          START THE TOUR →
        </Link>
      </div>
    </div>
  )
}