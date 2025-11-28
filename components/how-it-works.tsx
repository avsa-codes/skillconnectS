"use client"

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Apply & Get Verified",
      description: "Create your profile with your skills, availability, and basic details. Our team quickly screens and verifies you so companies can fully trust your profile.",
    },
    {
      number: "2",
      title: "Get Matched to Paid Tasks & Internships",
      description: "Get curated paid tasks and internship-focused micro projects that match your skills and come from verified companies.",
    },
    {
      number: "3",
      title: "Work, Earn & Build Your Experience",
      description: "Complete tasks, earn securely, and gain experience that strengthens your portfolio and improves your internship prospects.",
    },
  ]

  return (
    <section className="px-6 lg:px-16 py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-16 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              <div className="w-12 h-12 rounded-full border-2 border-orange-500 flex items-center justify-center">
                <span className="text-lg font-bold text-orange-500">{step.number}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
