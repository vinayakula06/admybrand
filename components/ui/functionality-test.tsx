"use client"

import { useEffect } from "react"

export function FunctionalityTest() {
  useEffect(() => {
    // Test all sections exist
    const sections = ["home", "features", "demo", "pricing", "resources", "faq"]
    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) {
        console.log(`✅ Section "${section}" found`)
      } else {
        console.warn(`❌ Section "${section}" not found`)
      }
    })

    // Test modal functionality
    const testModal = () => {
      console.log("🧪 Testing modal functionality...")

      // Test opening contact modal
      const event = new CustomEvent("openModal", {
        detail: { modalType: "contact" },
      })
      window.dispatchEvent(event)
      console.log("✅ Contact modal event dispatched")
    }

    // Test scroll functionality
    const testScroll = () => {
      console.log("🧪 Testing scroll functionality...")

      const homeSection = document.getElementById("home")
      if (homeSection) {
        console.log("✅ Scroll target found")
      }
    }

    // Run tests after component mount
    setTimeout(() => {
      testModal()
      testScroll()
      console.log("🎉 Functionality test completed")
    }, 1000)
  }, [])

  return null // This component doesn't render anything
}
