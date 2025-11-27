"use client"

import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  onRegister: () => void
}

export default function HeroSection({ onRegister }: HeroSectionProps) {
  return (
    <section className="px-6 lg:px-16 py-20 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
        {/* Left Side */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Work on real projects. Get paid. Build your career.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Join a curated network of students completing short-term, skill-based projects for trusted companies. Earn
              income, gain experience, and build a portfolio that opens doors.
            </p>
          </div>
          <Button
            onClick={onRegister}
            className="bg-orange-500 hover:bg-orange-600 text-white text-base font-semibold px-8 py-3 rounded-lg w-fit transition-colors"
          >
            Register as a Student
          </Button>
        </div>

        {/* Right Side - Stats Card */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">Why join SkillConnect</h3>
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Student profile strength</p>
                <p className="text-xs text-gray-600 mt-1">92% average completion rate</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Verified companies</p>
                <p className="text-xs text-gray-600 mt-1">84 trusted partners</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Average task payout</p>
                <p className="text-xs text-gray-600 mt-1">₹3000 - ₹12000 per project</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Portfolio-ready certificates</p>
                <p className="text-xs text-gray-600 mt-1">Yes, always included</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
