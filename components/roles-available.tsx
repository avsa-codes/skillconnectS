"use client"

export default function RolesAvailable() {
  const roles = ["Design", "Marketing", "Content", "Events", "Operations", "More roles"]

  return (
    <section className="px-6 lg:px-16 py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-16 text-center">Roles Available</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:shadow-md transition-shadow cursor-pointer min-h-48"
            >
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-gray-300 rounded"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">{role}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
