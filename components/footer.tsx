"use client"

import { useState } from "react"
import AboutModal from "@/components/AboutModal"
import PrivacyModal from "@/components/PrivacyModal"


export default function Footer() {
  const [aboutOpen, setAboutOpen] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)


  return (
    <>
      <footer className="px-6 lg:px-16 py-12 bg-gray-950 text-gray-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-sm font-medium">
            InstaTask <span className="text-orange-500">| SkillConnect</span>
          </div>
          <div className="flex items-center gap-8 flex-wrap justify-center md:justify-end">

            <button
              onClick={() => setAboutOpen(true)}
              className="text-sm hover:text-white transition-colors"
            >
              About
            </button>

            <a 
              href="https://wa.me/918296193469"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-white transition-colors"
            >
              Contact
            </a>

          <button
  onClick={() => setPrivacyOpen(true)}
  className="text-sm hover:text-white transition-colors"
>
  Privacy Policy
</button>

            <div className="flex gap-4">
              <button className="w-8 h-8 rounded-full border border-gray-600 hover:border-white transition-colors flex items-center justify-center text-xs">
                f
              </button>
              <button className="w-8 h-8 rounded-full border border-gray-600 hover:border-white transition-colors flex items-center justify-center text-xs">
                𝕏
              </button>
              <button className="w-8 h-8 rounded-full border border-gray-600 hover:border-white transition-colors flex items-center justify-center text-xs">
                in
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL */}
      <AboutModal isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
        <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />

    </>
  )
}
