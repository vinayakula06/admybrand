"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Sparkles, Zap, Target, Brain, TrendingUp } from "lucide-react"

const floatingIcons = [
  { icon: Sparkles, size: "w-4 h-4" },
  { icon: Zap, size: "w-3 h-3" },
  { icon: Target, size: "w-5 h-5" },
  { icon: Brain, size: "w-4 h-4" },
  { icon: TrendingUp, size: "w-3 h-3" },
]

export function FloatingElements() {
  const [elements, setElements] = useState<
    Array<{
      id: number
      x: number
      y: number
      icon: any
      size: string
      delay: number
    }>
  >([])

  useEffect(() => {
    const newElements = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      icon: floatingIcons[Math.floor(Math.random() * floatingIcons.length)].icon,
      size: floatingIcons[Math.floor(Math.random() * floatingIcons.length)].size,
      delay: Math.random() * 5,
    }))
    setElements(newElements)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element) => {
        const Icon = element.icon
        return (
          <motion.div
            key={element.id}
            className="absolute opacity-10"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 360],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: element.delay,
            }}
          >
            <Icon className={`${element.size} text-white`} />
          </motion.div>
        )
      })}
    </div>
  )
}
