"use client"

import { X } from "lucide-react"

interface PrivacyModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] p-6 relative overflow-y-auto">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy</h2>

        <div className="text-gray-700 leading-relaxed text-sm space-y-4">
          <p>
            InstaTask SkillConnect (“we”, “our”, or “us”) values your privacy and 
            is committed to protecting your personal information. This Privacy Policy 
            explains how we collect, use, and safeguard your data when you use our platform.
          </p>

          <p>
            <strong>Information We Collect:</strong> We may collect your name, email, contact 
            details, and any information you provide while creating an account or using our services.
          </p>

          <p>
            <strong>How We Use Your Information:</strong> Your data helps us provide and improve 
            our services, communicate important updates, and ensure a safe experience on our platform.
          </p>

          <p>
            <strong>Data Sharing:</strong> We do not sell your personal information. We may share 
            data with trusted service providers who assist us in delivering our services.
          </p>

          <p>
            <strong>Security:</strong> We implement appropriate measures to protect your information, 
            but please note that no system is completely secure.
          </p>

          <p>
            <strong>Consent:</strong> By using InstaTask SkillConnect, you agree to the collection 
            and use of your information as described in this policy.
          </p>

          <p>
            For any questions about this Privacy Policy, you can contact us at 
            <a href="mailto:contact@instatask.com" className="text-blue-600 underline">contact@instatask.com</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
