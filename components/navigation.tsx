"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  onRegister: () => void
  onHowItWorks: () => void
  onRoles: () => void
}

export default function Navigation({ onRegister, onHowItWorks, onRoles }: NavigationProps) {
  const [isSticky, setIsSticky] = useState(false)

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0)
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll)
  }

  return (
    <nav
      className={`w-full flex items-center justify-between px-6 lg:px-16 py-4 transition-all ${
        isSticky ? "sticky top-0 bg-white shadow-sm" : "bg-white"
      }`}
    >
      <div className="text-xl font-semibold text-gray-900 tracking-tight">
        InstaTask <span className="text-orange-500">| SkillConnect</span>
      </div>

      <div className="flex items-center gap-8 lg:gap-12">
        <button
          onClick={onHowItWorks}
          className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors hidden md:block"
        >
          How it works
        </button>
        <button
          onClick={onRoles}
          className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors hidden md:block"
        >
          Roles
        </button>
        <button
  onClick={() => window.location.href = "https://skillconnect-o.vercel.app/"}
  className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors hidden md:block"
>
  For companies
</button>

        <Button
          onClick={onRegister}
          className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-6 py-2 rounded-lg transition-colors"
        >
          Register
        </Button>
      </div>
    </nav>
  )
}
