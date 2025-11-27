"use client"

import type React from "react"

import { useRef, useState } from "react"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import HowItWorks from "@/components/how-it-works"
import WhySkillConnect from "@/components/why-skill-connect"
import WhoCanApply from "@/components/who-can-apply"
import RolesAvailable from "@/components/roles-available"
import EarlyAccess from "@/components/early-access"
import Footer from "@/components/footer"
import RegistrationModal from "@/components/registration-modal"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const howItWorksRef = useRef<HTMLDivElement>(null)
  const rolesRef = useRef<HTMLDivElement>(null)

const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
  ref.current?.scrollIntoView({ behavior: "smooth" })
}

  return (
    <main className="min-h-screen bg-white">
      <Navigation
        onRegister={() => setIsModalOpen(true)}
        onHowItWorks={() => scrollToSection(howItWorksRef)}
        onRoles={() => scrollToSection(rolesRef)}
      />
      <HeroSection onRegister={() => setIsModalOpen(true)} />
      <div ref={howItWorksRef}>
        <HowItWorks />
      </div>
      <WhySkillConnect />
      <WhoCanApply />
      <div ref={rolesRef}>
        <RolesAvailable />
      </div>
      <EarlyAccess onRegister={() => setIsModalOpen(true)} />
      <Footer />
      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  )
}
