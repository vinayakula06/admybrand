"use client"

import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { Brain, BarChart3, Target, Zap, Users, Shield, Sparkles, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI Content Generation",
    description: "Create compelling ad copy, social media posts, and email campaigns with our advanced AI engine.",
    number: "01",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description: "Get deep insights into campaign performance with AI-powered analytics and predictive modeling.",
    number: "02",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Reach the right audience at the right time with our intelligent targeting algorithms.",
    number: "03",
  },
  {
    icon: Zap,
    title: "Automation Engine",
    description: "Automate your entire marketing workflow from lead generation to conversion optimization.",
    number: "04",
  },
  {
    icon: Users,
    title: "Multi-Channel Management",
    description: "Manage all your marketing channels from one unified dashboard with seamless integration.",
    number: "05",
  },
  {
    icon: Shield,
    title: "Brand Protection",
    description: "Ensure brand consistency and compliance across all marketing materials with AI monitoring.",
    number: "06",
  },
  {
    icon: Sparkles,
    title: "Creative Optimization",
    description: "Continuously optimize your creative assets using machine learning and A/B testing.",
    number: "07",
  },
  {
    icon: TrendingUp,
    title: "ROI Maximization",
    description: "Maximize your return on investment with intelligent budget allocation and bid optimization.",
    number: "08",
  },
]

export function Features() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-3 sm:px-4 lg:px-6 relative">
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl mb-4 sm:mb-6 lg:mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-white/90">POWERFUL FEATURES</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 lg:mb-8 leading-tight px-2 sm:px-0">
            EVERYTHING YOU NEED
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">TO DOMINATE</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
            Our comprehensive AI suite provides all the tools you need to create, manage, and optimize marketing
            campaigns that drive real results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard
                className="p-4 sm:p-6 lg:p-8 h-full group hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden touch-manipulation"
                data-cursor="hover"
              >
                {/* Number - Responsive */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-4xl sm:text-5xl lg:text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-500">
                  {feature.number}
                </div>

                <div className="relative z-10">
                  <motion.div
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-white/20 transition-all duration-500"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </motion.div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Interactive Line */}
                  <motion.div
                    className="w-0 h-0.5 bg-white mt-4 sm:mt-6 group-hover:w-full transition-all duration-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
