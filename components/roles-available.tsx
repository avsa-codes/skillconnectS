"use client"

import {
  PenTool,
  Megaphone,
  FileText,
  CalendarDays,
  Settings,
  Grid3x3,
} from "lucide-react"

export default function RolesAvailable() {
  const roles = [
    {
      name: "Design",
      icon: PenTool,
      description: "UI, posters, social creatives",
    },
    {
      name: "Marketing",
      icon: Megaphone,
      description: "Campaigns, outreach, growth",
    },
    {
      name: "Content Writing",
      icon: FileText,
      description: "Blogs, captions, copies",
    },
    {
      name: "Events & Promotions",
      icon: CalendarDays,
      description: "On-ground & online events",
    },
    {
      name: "Operations",
      icon: Settings,
      description: "Coordination & execution",
    },
    {
      name: "More roles",
      icon: Grid3x3,
      description: "And many more coming",
    },
  ]

  return (
    <section className="px-6 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Roles Available
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Short-term, paid roles across events, startups, and campus teams
          </p>
        </div>

        {/* Roles grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, idx) => {
            const Icon = role.icon
            return (
              <div
                key={idx}
                className="
                  group bg-white border border-gray-200 rounded-2xl p-8
                  flex flex-col items-center text-center gap-4
                  transition-all duration-300
                  hover:shadow-lg hover:border-orange-400
                  cursor-pointer
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-14 h-14 rounded-2xl
                    bg-orange-50
                    flex items-center justify-center
                    group-hover:bg-orange-100
                    transition
                  "
                >
                  <Icon className="w-7 h-7 text-orange-600" />
                </div>

                {/* Role name */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {role.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500">
                  {role.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Footer hint */}
        <p className="mt-8 text-center text-sm text-gray-500">
          Roles are matched based on skills and availability
        </p>
      </div>
    </section>
  )
}

