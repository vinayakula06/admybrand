"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group touch-manipulation",
  {
    variants: {
      variant: {
        default: "btn-brand text-white shadow-2xl hover:shadow-brand",
        destructive: "bg-red-500 text-white hover:bg-red-600 shadow-lg",
        outline: "glass-card border-2 border-white/20 text-white hover:bg-white/10 hover:border-brand-teal/50",
        secondary: "glass-card text-white hover:bg-white/20",
        ghost: "text-white hover:bg-white/10 rounded-xl",
        link: "text-brand-teal underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-3 text-sm sm:text-base",
        sm: "h-9 px-4 py-2 text-xs sm:text-sm rounded-lg",
        lg: "h-14 px-8 py-4 text-base sm:text-lg rounded-xl",
        icon: "h-11 w-11 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : motion.button

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        {...props}
      >
        {/* Enhanced animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        <span className="relative z-10 flex items-center justify-center gap-2 font-bold tracking-wide">{children}</span>
      </Comp>
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
