"use client"

import type React from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValue, useVelocity } from "framer-motion"
import { useRef, useEffect, useState } from "react"

// Enhanced Parallax Text with Velocity
export function ParallaxText({ children, baseVelocity = 100 }: { children: string; baseVelocity?: number }) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  const directionFactor = useRef<number>(1)
  useEffect(() => {
    const unsubscribe = velocityFactor.on("change", (latest) => {
      if (latest < 0) {
        directionFactor.current = -1
      } else if (latest > 0) {
        directionFactor.current = 1
      }
    })
    return unsubscribe
  }, [velocityFactor])

  useEffect(() => {
    const controls = baseX.set(0)
    const interval = setInterval(() => {
      baseX.set(baseX.get() + directionFactor.current * baseVelocity * 0.01)
    }, 16)
    return () => clearInterval(interval)
  }, [baseX, baseVelocity])

  return (
    <div className="overflow-hidden whitespace-nowrap flex">
      <motion.div className="flex whitespace-nowrap" style={{ x }}>
        <span className="block mr-16 font-black tracking-wider text-6xl lg:text-8xl">{children}</span>
        <span className="block mr-16 font-black tracking-wider text-6xl lg:text-8xl">{children}</span>
        <span className="block mr-16 font-black tracking-wider text-6xl lg:text-8xl">{children}</span>
        <span className="block mr-16 font-black tracking-wider text-6xl lg:text-8xl">{children}</span>
      </motion.div>
    </div>
  )
}

// Enhanced Scroll Progress with Gradient
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal via-brand-purple to-brand-magenta z-50 origin-left"
      style={{ scaleX }}
    />
  )
}

// Advanced Magnetic Button with Multiple Effects
export function MagneticButton({
  children,
  className = "",
  intensity = 0.3,
}: {
  children: React.ReactNode
  className?: string
  intensity?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const deltaX = (e.clientX - centerX) * intensity
      const deltaY = (e.clientY - centerY) * intensity

      setPosition({ x: deltaX, y: deltaY })
    }

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 })
      setIsHovered(false)
    }

    const element = ref.current
    if (element) {
      element.addEventListener("mousemove", handleMouseMove)
      element.addEventListener("mouseenter", handleMouseEnter)
      element.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        element.removeEventListener("mousemove", handleMouseMove)
        element.removeEventListener("mouseenter", handleMouseEnter)
        element.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [intensity])

  return (
    <div ref={ref} className={className}>
      <motion.div
        animate={{
          x: position.x,
          y: position.y,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        <motion.div
          animate={{
            boxShadow: isHovered
              ? "0 20px 60px rgba(0,180,216,0.4), 0 0 40px rgba(0,180,216,0.2)"
              : "0 4px 20px rgba(0,180,216,0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  )
}

// Morphing Shape Animation
export function MorphingShape({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      animate={{
        borderRadius: ["50%", "30% 70% 70% 30%", "70% 30% 30% 70%", "50%"],
        scale: [1, 1.2, 0.8, 1],
        rotate: [0, 90, 180, 360],
      }}
      transition={{
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
  )
}

// Text Reveal Animation
export function TextReveal({ children, className = "" }: { children: string; className?: string }) {
  const words = children.split(" ")

  return (
    <div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}

// Stagger Container for Child Animations
export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  className = "",
}: {
  children: React.ReactNode
  staggerDelay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

// Individual Stagger Item
export function StaggerItem({
  children,
  className = "",
  direction = "up",
}: {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
}) {
  const directions = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 },
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          ...directions[direction],
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

// Utility function for wrapping values
function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

// Floating Animation Hook
export function useFloatingAnimation(duration = 6, delay = 0) {
  return {
    animate: {
      y: [-10, 10, -10],
      x: [-5, 5, -5],
      rotate: [-2, 2, -2],
    },
    transition: {
      duration,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
      delay,
    },
  }
}

// Pulse Animation Hook
export function usePulseAnimation(scale = 1.05, duration = 2) {
  return {
    animate: {
      scale: [1, scale, 1],
      opacity: [0.8, 1, 0.8],
    },
    transition: {
      duration,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }
}
