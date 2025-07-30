"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function InteractiveCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMoving, setIsMoving] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsMoving(true)

      clearTimeout(timeout)
      timeout = setTimeout(() => setIsMoving(false), 150)
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      {/* Subtle primary background effect */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(0,180,216,${isMoving ? 0.06 : 0.03}) 0%, 
            rgba(0,119,182,${isMoving ? 0.04 : 0.02}) 40%, 
            transparent 70%)`,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.4 }}
      />

      {/* Secondary subtle layer */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0 opacity-50"
        animate={{
          background: `radial-gradient(400px circle at ${mousePosition.x * 0.8}px ${mousePosition.y * 0.8}px, 
            rgba(114,9,183,${isMoving ? 0.04 : 0.02}) 0%, 
            rgba(233,30,99,${isMoving ? 0.03 : 0.015}) 50%, 
            transparent 70%)`,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.6 }}
      />

      {/* Gentle center glow on movement */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        animate={{
          background: isMoving
            ? `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, 
                rgba(0,180,216,0.08) 0%, 
                rgba(114,9,183,0.05) 40%, 
                transparent 70%)`
            : "transparent",
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
      />
    </>
  )
}
