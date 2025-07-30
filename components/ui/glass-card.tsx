import type React from "react"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  variant?: "default" | "brand" | "minimal" | "premium"
}

export function GlassCard({ children, className, style, variant = "default" }: GlassCardProps) {
  const variants = {
    default: "glass-card glass-card-hover",
    brand:
      "glass-brand hover:bg-gradient-to-br hover:from-brand-teal/10 hover:via-brand-purple/5 hover:to-brand-magenta/10",
    minimal: "backdrop-blur-sm bg-white/[0.02] border border-white/5 hover:bg-white/[0.04]",
    premium: "modern-card brand-shadow",
  }

  return (
    <div className={cn("rounded-2xl transition-all duration-500", variants[variant], className)} style={style}>
      {children}
    </div>
  )
}
