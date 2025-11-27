"use client"

export default function WhySkillConnect() {
  const benefits = [
    "Paid tasks",
    "Safe payments",
    "Verified opportunities",
    "Completion certificates",
    "Build a real portfolio",
  ]

  return (
    <section className="px-6 lg:px-16 py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">Why SkillConnect</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-full px-6 py-3 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              {benefit}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
