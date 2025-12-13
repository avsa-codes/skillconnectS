"use client"

import {
  GraduationCap,
  BookOpen,
  Briefcase,
  Clock,
} from "lucide-react"

export default function WhoCanApply() {
  const categories = [
    {
      label: "University students",
      icon: GraduationCap,
    },
    {
      label: "Recent graduates",
      icon: BookOpen,
    },
    {
      label: "Interns & trainees",
      icon: Briefcase,
    },
    {
      label: "Part-time professionals",
      icon: Clock,
    },
  ]

  return (
    <section className="px-6 lg:px-16 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Who Can Apply
          </h2>
          <p className="mt-3 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            SkillConnect is built for individuals looking to gain real-world
            experience while earning through flexible, outcome-based projects
            with trusted companies.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {categories.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="
                  flex items-center gap-4
                  bg-gray-50 border border-gray-200
                  rounded-2xl p-5
                  transition-all duration-300
                  hover:border-orange-400 hover:bg-orange-50
                "
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-orange-600" />
                </div>

                {/* Text */}
                <p className="text-lg font-medium text-gray-900">
                  {item.label}
                </p>
              </div>
            )
          })}
        </div>

        {/* Footer reassurance */}
        <p className="mt-8 text-center text-sm text-gray-500">
          No prior full-time experience required
        </p>
      </div>
    </section>
  )
}
