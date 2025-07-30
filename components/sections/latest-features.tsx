"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { SuccessAnimation } from "@/components/ui/success-animation"
import { openModal } from "@/utils/modal"
import {
  Video,
  Brain,
  Mic,
  BarChart3,
  Sparkles,
  ArrowRight,
  Zap,
  Target,
  Users,
  Globe,
  Shield,
  TrendingUp,
  Bot,
  MessageSquare,
  Clock,
  X,
  Mail,
  User,
  Send,
} from "lucide-react"

const latestFeatures = [
  {
    title: "AI Video Generation",
    description: "Create stunning video ads automatically from your text prompts using advanced AI",
    icon: Video,
    gradient: "from-blue-500 to-purple-600",
    stats: "85% faster creation",
    isNew: true,
  },
  {
    title: "Neural Content Engine",
    description: "Advanced AI writes compelling ad copy that converts 3x better than human-written content",
    icon: Brain,
    gradient: "from-green-500 to-teal-600",
    stats: "300% better CTR",
    isNew: true,
  },
  {
    title: "Voice-to-Campaign AI",
    description: "Speak your campaign ideas and watch AI transform them into complete marketing strategies",
    icon: Mic,
    gradient: "from-orange-500 to-red-600",
    stats: "5min setup time",
    isNew: false,
  },
  {
    title: "Predictive Analytics 2.0",
    description: "See the future performance of your campaigns before you launch them",
    icon: BarChart3,
    gradient: "from-purple-500 to-pink-600",
    stats: "94% accuracy rate",
    isNew: true,
  },
]

// Waitlist Modal Component
function WaitlistModal({ isOpen, onClose, onSuccess }: { isOpen: boolean; onClose: () => void; onSuccess: () => void }) {
  const [formData, setFormData] = useState({ name: "", email: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    onClose()
    onSuccess()
    
    // Reset form
    setFormData({ name: "", email: "" })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-md bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-700"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-gray-700"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <h2 className="text-2xl font-bold text-white">Join the Waitlist</h2>
          </div>
          <p className="text-gray-300">
            Be the first to access AI-Powered Campaign Autopilot
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
              <User className="w-5 h-5 text-yellow-400" />
            </div>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
              <Mail className="w-5 h-5 text-yellow-400" />
            </div>
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                Joining Waitlist...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                Join Waitlist
              </div>
            )}
          </Button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            🚀 We'll notify you as soon as it's ready!
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export function LatestFeatures() {
  const [showSuccess, setShowSuccess] = useState(false)
  const [hasJoined, setHasJoined] = useState(false)
  const [showWaitlistModal, setShowWaitlistModal] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const handleJoinWaitlist = () => {
    setShowWaitlistModal(true)
  }

  const handleWaitlistSuccess = () => {
    setShowSuccess(true)
    setHasJoined(true)
  }

  const handleSuccessComplete = () => {
    setShowSuccess(false)
  }

  return (
    <>
      <section ref={sectionRef} className="py-24 px-4 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-purple-900/30 to-blue-900/50"
            animate={{
              background: [
                "linear-gradient(135deg, rgba(17,24,39,0.5) 0%, rgba(88,28,135,0.3) 50%, rgba(30,58,138,0.5) 100%)",
                "linear-gradient(135deg, rgba(30,58,138,0.5) 0%, rgba(17,24,39,0.5) 50%, rgba(88,28,135,0.3) 100%)",
                "linear-gradient(135deg, rgba(88,28,135,0.3) 0%, rgba(30,58,138,0.5) 50%, rgba(17,24,39,0.5) 100%)",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            style={{ opacity, y }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 backdrop-blur-sm mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Zap className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-green-300">Latest Updates</span>
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-green-200 to-emerald-200 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Cutting-Edge AI
              <br />
              <motion.span
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                style={{ backgroundSize: "200% 200%" }}
                className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 bg-clip-text text-transparent"
              >
                Features Just Launched
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Experience the future of marketing with our latest AI innovations. These features are revolutionizing how
              businesses create and optimize campaigns.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button
                onClick={() => openModal("feature-showcase")}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Explore All Features
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {latestFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <GlassCard className="p-6 h-full relative overflow-hidden group cursor-pointer">
                    {/* Animated Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    {feature.isNew && (
                      <div className="absolute top-4 right-4">
                        <div className="px-2 py-1 text-xs bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full animate-pulse">
                          NEW
                        </div>
                      </div>
                    )}

                    <div className="relative z-10">
                      <motion.div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} p-3 mb-4`}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <feature.icon className="w-6 h-6 text-white" />
                      </motion.div>

                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-300 transition-colors duration-300">
                        {feature.title}
                      </h3>

                      <p className="text-gray-300 leading-relaxed mb-4 text-sm">{feature.description}</p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-green-400 font-semibold">{feature.stats}</span>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-400 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Feature Highlight Banner */}
          <div className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
                <div className="relative z-10">
                  <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-4 animate-spin-slow" />
                  <h3 className="text-2xl font-bold text-white mb-4">🚀 Coming Soon: AI-Powered Campaign Autopilot</h3>
                  <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    Let AI completely manage your campaigns from creation to optimization. Join the waitlist for early
                    access to our most advanced feature yet.
                  </p>
                  {!hasJoined ? (
                    <Button
                      variant="outline"
                      className="border-2 border-yellow-400 hover:border-yellow-300 text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10 bg-transparent"
                      onClick={handleJoinWaitlist}
                    >
                      Join Waitlist
                    </Button>
                  ) : (
                    <div className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-green-500/20 border border-green-400/30">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, type: "spring" }}
                      >
                        <Sparkles className="w-5 h-5 text-green-400" />
                      </motion.div>
                      <span className="text-green-300 font-medium">You're on the waitlist!</span>
                    </div>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={showWaitlistModal}
        onClose={() => setShowWaitlistModal(false)}
        onSuccess={handleWaitlistSuccess}
      />

      {/* Success Animation */}
      <SuccessAnimation
        show={showSuccess}
        message="You've been added to the waitlist! We'll notify you when Campaign Autopilot is ready."
        onComplete={handleSuccessComplete}
      />
    </>
  )
}
