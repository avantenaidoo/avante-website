'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { CV_SECTIONS } from '../data/cv-data'

interface CVModalProps {
  section: string
  onClose: () => void
}

export default function CVModal({ section, onClose }: CVModalProps) {
  const data = CV_SECTIONS[section as keyof typeof CV_SECTIONS]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-gray-900/95 backdrop-blur-md rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">{data.title}</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-800 rounded-lg">
              <X size={24} />
            </button>
          </div>
          
          <div className="space-y-4">
            {Array.isArray(data.content) ? (
              <ul className="grid grid-cols-2 gap-4">
                {data.content.map((item, i) => (
                  <li key={i} className="bg-blue-500/20 p-3 rounded-lg">{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-300 leading-relaxed">{data.content}</p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}