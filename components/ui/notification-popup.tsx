"use client"

import { useState, useEffect } from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { X, Sparkles, Users, TrendingUp } from "lucide-react"

const notifications = [
  {
    id: 1,
    icon: Users,
    title: "Sarah from TechCorp just signed up!",
    subtitle: "Join 500+ marketers using ADmyBRAND",
    time: "2 minutes ago",
  },
  {
    id: 2,
    icon: TrendingUp,
    title: "New: AI Video Generation is live!",
    subtitle: "Create stunning video ads in seconds",
    time: "5 minutes ago",
  },
  {
    id: 3,
    icon: Sparkles,
    title: "Marcus increased ROI by 340%",
    subtitle: "See how AI transformed his campaigns",
    time: "8 minutes ago",
  },
]

export function NotificationPopup() {
  const [currentNotification, setCurrentNotification] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const showNotification = () => {
      setIsVisible(true)
      setTimeout(() => setIsVisible(false), 5000)
    }

    const interval = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length)
      showNotification()
    }, 8000)

    // Show first notification after 3 seconds
    setTimeout(showNotification, 3000)

    return () => clearInterval(interval)
  }, [])

  const notification = notifications[currentNotification]
  const Icon = notification.icon

  if (!isVisible) return null

  return (
    <div className="fixed bottom-2 left-2 md:bottom-4 md:left-4 z-50 animate-slide-in-left">
      <GlassCard className="p-2 md:p-3 max-w-[280px] md:max-w-sm shadow-2xl border border-blue-400/30">
        <div className="flex items-start gap-2 md:gap-3">
          <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1 md:p-1.5 lg:p-2 flex-shrink-0">
            <Icon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs md:text-sm font-semibold text-white mb-0.5 md:mb-1 leading-tight">{notification.title}</p>
            <p className="text-[10px] md:text-xs text-gray-300 mb-1 md:mb-2 leading-tight">{notification.subtitle}</p>
            <p className="text-[9px] md:text-xs text-gray-400">{notification.time}</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsVisible(false)}
            className="h-5 w-5 md:h-6 md:w-6 p-0 text-gray-400 hover:text-white"
          >
            <X className="w-3 h-3 md:w-4 md:h-4" />
          </Button>
        </div>
      </GlassCard>
    </div>
  )
}
