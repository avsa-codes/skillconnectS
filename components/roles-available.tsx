"use client"

import {
  PenTool,
  Megaphone,
  FileText,
  CalendarDays,
  Settings,
  Grid3x3
} from "lucide-react"

export default function RolesAvailable() {
  const roles = [
    { name: "Design", icon: PenTool },
    { name: "Marketing", icon: Megaphone },
    { name: "Content Writing", icon: FileText },
    { name: "Events & Promotions", icon: CalendarDays },
    { name: "Operations", icon: Settings },
    { name: "More roles", icon: Grid3x3 }
  ]

  return (
    <section className="px-6 lg:px-16 py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-16 text-center">
          Roles Available
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, idx) => {
            const Icon = role.icon
            return (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:shadow-md hover:border-orange-400 transition-all cursor-pointer min-h-48"
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-center">
                  {role.name}
                </h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
