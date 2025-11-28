"use client"

import { X } from "lucide-react"

interface AboutModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">About SkillConnect</h2>

        <p className="text-gray-700 leading-relaxed">
          InstaTask SkillConnect is a platform designed to help students gain 
          real-world experience by taking up short-term tasks, projects, and 
          micro-internships from companies, startups, and individual creators.
          <br /><br />
          It allows students to build their skills, earn money, and gain 
          professional exposure while balancing academics.
          <br /><br />
          We aim to connect talent with opportunity in the simplest, fastest, 
          and most reliable way possible.
        </p>

      </div>
    </div>
  )
}
