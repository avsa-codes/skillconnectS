"use client"

export default function WhoCanApply() {
  const categories = ["University students", "Recent graduates", "Interns & trainees", "Part-time professionals"]

  return (
    <section className="px-6 lg:px-16 py-20 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">Who Can Apply</h2>
        <p className="text-lg text-gray-600 text-center mb-12 leading-relaxed">
          SkillConnect is designed for students, interns, and part-time professionals who want to gain real-world
          experience while earning on flexible, outcome-based projects with trusted companies.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, idx) => (
            <button
              key={idx}
              className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-full px-6 py-3 text-gray-700 font-medium transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
