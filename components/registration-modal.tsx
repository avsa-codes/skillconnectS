"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"

interface RegistrationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    college: "",
    skills: [] as string[],
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const skillOptions = [
    "Design",
    "Graphic Design",
    "UI/UX",
    "Content Writing",
    "Video Editing",
    "Sales",
    "Marketing",
    "Operations",
    "Data Entry",
    "Event Support",
    "Campus Ambassador Work",
    "Social Media",
  ]

  const handleSkillChange = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill) ? prev.skills.filter((s) => s !== skill) : [...prev.skills, skill],
    }))
  }

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   if (formData.fullName && formData.phoneNumber && formData.email && formData.college && formData.skills.length > 0) {
  //     setSubmitted(true)
  //     setTimeout(() => {
  //       onClose()
  //       setSubmitted(false)
  //       setFormData({ fullName: "", phoneNumber: "", email: "", college: "", skills: [] })
  //     }, 3000)
  //   }
  // }
  //Old one is up

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  if (
    !formData.fullName ||
    !formData.phoneNumber ||
    !formData.email ||
    !formData.college ||
    formData.skills.length === 0
  ) {
    alert("Please fill all fields and select at least one skill.")
    return
  }

  setLoading(true)

  const { data, error } = await supabase
    .from("registrations-s") // your table
    .insert([
      {
        full_name: formData.fullName,
        phone_number: formData.phoneNumber,
        email: formData.email,
        college: formData.college,
        skills: formData.skills, // JSONB column
      },
    ])

  setLoading(false)

  if (error) {
    console.error("Something went wrong:", error)
    alert("Something went wrong. Please try again.")
  } else {
    setSubmitted(true)
    setTimeout(() => {
      onClose()
      setSubmitted(false)
      setFormData({ fullName: "", phoneNumber: "", email: "", college: "", skills: [] })
    }, 3000)
  }
}






  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {submitted ? (
          <div className="p-8 text-center flex flex-col items-center justify-center min-h-96">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">✓</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank you!</h3>
            <p className="text-gray-600">Our team will contact you within 24 hours.</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Register as Student</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData((prev) => ({ ...prev, phoneNumber: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">College/University *</label>
                <input
                  type="text"
                  required
                  value={formData.college}
                  onChange={(e) => setFormData((prev) => ({ ...prev, college: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  placeholder="Your college/university"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-3">Primary Skills *</label>
                <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                  {skillOptions.map((skill) => (
                    <label key={skill} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.skills.includes(skill)}
                        onChange={() => handleSkillChange(skill)}
                        className="w-4 h-4 accent-orange-500 rounded"
                      />
                      <span className="text-sm text-gray-700">{skill}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition-colors mt-6"
              >
                Submit Application
              </Button> */}
              <Button type="submit" disabled={loading} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition-colors mt-6">
  {loading ? "Submitting..." : "Submit Application"}
</Button>

            </form>
          </>
        )}
      </div>
    </div>
  )
}
