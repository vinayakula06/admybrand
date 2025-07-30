"use client"

import { useEffect, useState } from "react"
import { CheckCircle, Sparkles } from "lucide-react"

interface SuccessAnimationProps {
  show: boolean
  message: string
  onComplete: () => void
}

export function SuccessAnimation({ show, message, onComplete }: SuccessAnimationProps) {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    if (!show) return

    const timer1 = setTimeout(() => setStage(1), 100)
    const timer2 = setTimeout(() => setStage(2), 800)
    const timer3 = setTimeout(() => {
      setStage(0)
      onComplete()
    }, 3000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [show, onComplete])

  if (!show) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="text-center">
        <div className={`transition-all duration-500 ${stage >= 1 ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
          <div className="relative">
            <CheckCircle className="w-24 h-24 text-green-400 mx-auto animate-bounce" />
            <div className="absolute inset-0 w-24 h-24 mx-auto">
              {[...Array(6)].map((_, i) => (
                <Sparkles
                  key={i}
                  className={`absolute w-4 h-4 text-yellow-400 animate-ping`}
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${i * 200}ms`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div
          className={`mt-6 transition-all duration-500 delay-300 ${stage >= 2 ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <h3 className="text-2xl font-bold text-white mb-2">Success!</h3>
          <p className="text-gray-300">{message}</p>
        </div>
      </div>
    </div>
  )
}
