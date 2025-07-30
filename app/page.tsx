"use client"

import { useEffect, useState } from "react"
import { ResponsiveNav } from "@/components/ui/responsive-nav"
import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { PricingCalculator } from "@/components/ui/pricing-calculator"
import { DemoVideo } from "@/components/sections/demo-video"
import { BlogResources } from "@/components/sections/blog-resources"
import { Pricing } from "@/components/sections/pricing"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { Footer } from "@/components/sections/footer"
import { ContactModal } from "@/components/ui/contact-modal"
import { FloatingElements } from "@/components/ui/floating-elements"
import { NotificationPopup } from "@/components/ui/notification-popup"
import { FeatureShowcaseModal } from "@/components/ui/feature-showcase-modal"
import { LatestFeatures } from "@/components/sections/latest-features"
import { ScrollProgress, ParallaxText } from "@/components/ui/advanced-animations"
import { InteractiveCursor } from "@/components/ui/interactive-cursor"
import { FunctionalityTest } from "@/components/ui/functionality-test"

export default function HomePage() {
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [featureModalOpen, setFeatureModalOpen] = useState(false)
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    // Enhanced smooth scrolling animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    // Handle modal events
    const handleOpenModal = (event: CustomEvent) => {
      const { modalType } = event.detail
      if (modalType === "contact") {
        setContactModalOpen(true)
      } else if (modalType === "feature-showcase") {
        setFeatureModalOpen(true)
      }
    }

    const handleCloseModal = () => {
      setContactModalOpen(false)
      setFeatureModalOpen(false)
    }

    // Add event listeners
    window.addEventListener("openModal", handleOpenModal as EventListener)
    window.addEventListener("closeModal", handleCloseModal)

    // Show notification after 3 seconds
    const notificationTimer = setTimeout(() => {
      setShowNotification(true)
    }, 3000)

    return () => {
      observer.disconnect()
      window.removeEventListener("openModal", handleOpenModal as EventListener)
      window.removeEventListener("closeModal", handleCloseModal)
      clearTimeout(notificationTimer)
    }
  }, [])

  return (
    <main className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <InteractiveCursor />
      <ScrollProgress />
      <ResponsiveNav />
      <FloatingElements />
      <FunctionalityTest />

      {/* Enhanced Geometric Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,rgba(255,255,255,0.03)_50%,transparent_51%)] bg-[length:100px_100px] sm:bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_49%,rgba(255,255,255,0.03)_50%,transparent_51%)] bg-[length:100px_100px] sm:bg-[length:50px_50px]" />
      </div>

      {/* Main Content Sections with proper IDs */}
      <div className="relative">
        <section id="home">
          <Hero />
        </section>

        <section id="features">
          <Features />
        </section>

        <section id="latest-features">
          <LatestFeatures />
        </section>

        <section id="demo">
          <DemoVideo />
        </section>

        <section id="pricing">
          <PricingCalculator />
          <Pricing />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="resources">
          <BlogResources />
        </section>

        <section id="faq">
          <FAQ />
        </section>
      </div>

      {/* Enhanced Modern Parallax Text */}
      <div className="py-8 sm:py-12 lg:py-16 text-white/5 overflow-hidden border-y border-white/10">
        <ParallaxText baseVelocity={-2}>TRANSFORM • INNOVATE • DOMINATE • SCALE •</ParallaxText>
      </div>

      <Footer />
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
      <FeatureShowcaseModal isOpen={featureModalOpen} onClose={() => setFeatureModalOpen(false)} />
      <NotificationPopup isVisible={showNotification} onClose={() => setShowNotification(false)} />
    </main>
  )
}
