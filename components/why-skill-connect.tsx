"use client"

import {
  IndianRupee,
  ShieldCheck,
  BadgeCheck,
  Award,
  Briefcase,
} from "lucide-react"

export default function WhySkillConnect() {
  const benefits = [
    {
      label: "Paid tasks",
      description: "Earn for every task you complete",
      icon: IndianRupee,
    },
    {
      label: "Safe payments",
      description: "Payments handled securely by us",
      icon: ShieldCheck,
    },
    {
      label: "Verified opportunities",
      description: "Only trusted organizations onboarded",
      icon: BadgeCheck,
    },
    {
      label: "Completion certificates",
      description: "Proof of work you can share",
      icon: Award,
    },
    {
      label: "Build a real portfolio",
      description: "Showcase real-world experience",
      icon: Briefcase,
    },
  ]

  return (
    <section className="px-6 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Why SkillConnect
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Designed to help you gain experience, earn fairly, and grow with confidence
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="
                  bg-white border border-gray-200 rounded-2xl p-6
                  transition-all duration-300
                  hover:border-orange-400 hover:shadow-sm
                "
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-orange-600" />
                </div>

                {/* Text */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.label}
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
