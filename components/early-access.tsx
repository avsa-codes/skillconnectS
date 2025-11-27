"use client"

import { Button } from "@/components/ui/button"

interface EarlyAccessProps {
  onRegister: () => void
}

export default function EarlyAccess({ onRegister }: EarlyAccessProps) {
  return (
    <section className="px-6 lg:px-16 py-20 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 rounded-3xl p-12 lg:p-16 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Early access registration for SkillConnect.
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Be among the first to access curated projects, verified companies, and paid tasks tailored to your skills.
        </p>
        <Button
          onClick={onRegister}
          className="bg-orange-500 hover:bg-orange-600 text-white text-base font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Register Now
        </Button>
      </div>
    </section>
  )
}
