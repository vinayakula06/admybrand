"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { SuccessAnimation } from "@/components/ui/success-animation"
import { openModal } from "@/utils/modal"
import { Calculator, Users, FileText, BarChart3, Zap, CheckCircle, X, Mail, User, Phone, Send, Calendar } from "lucide-react"

// Demo Scheduling Modal Component
function DemoSchedulingModal({ isOpen, onClose, onSuccess }: { isOpen: boolean; onClose: () => void; onSuccess: () => void }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" })
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
    setFormData({ name: "", email: "", phone: "" })
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
            <Calendar className="w-6 h-6 text-indigo-400" />
            <h2 className="text-2xl font-bold text-white">Schedule Demo</h2>
          </div>
          <p className="text-gray-300">
            Get a personalized demo of ADmyBRAND platform
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
              <User className="w-5 h-5 text-indigo-400" />
            </div>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
              <Mail className="w-5 h-5 text-indigo-400" />
            </div>
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Phone Field */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
              <Phone className="w-5 h-5 text-indigo-400" />
            </div>
            <input
              type="tel"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                Scheduling Demo...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                Schedule Demo
              </div>
            )}
          </Button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            📅 We'll contact you within 24 hours to schedule your demo
          </p>
        </div>
      </motion.div>
    </div>
  )
}

interface PricingTier {
  name: string
  basePrice: number
  features: string[]
  color: string
  popular?: boolean
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    basePrice: 29,
    features: ["Basic AI Content", "Email Marketing", "2 Social Channels", "Standard Support"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Professional",
    basePrice: 79,
    features: [
      "Advanced AI Content",
      "Multi-Channel Automation",
      "10 Social Channels",
      "Priority Support",
      "A/B Testing",
    ],
    color: "from-purple-500 to-pink-500",
    popular: true,
  },
  {
    name: "Enterprise",
    basePrice: 199,
    features: ["Unlimited AI Content", "Full Automation", "Unlimited Channels", "Dedicated Manager", "Custom Training"],
    color: "from-green-500 to-emerald-500",
  },
]

export function PricingCalculator() {
  const [teamSize, setTeamSize] = useState([5])
  const [contentVolume, setContentVolume] = useState([100])
  const [channels, setChannels] = useState([3])
  const [selectedTier, setSelectedTier] = useState(1)
  const [savings, setSavings] = useState(0)
  const [showDemoModal, setShowDemoModal] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [demoScheduled, setDemoScheduled] = useState(false)

  const calculatePrice = (tier: PricingTier, teamSize: number, contentVolume: number, channels: number) => {
    let price = tier.basePrice

    // Team size multiplier
    if (teamSize > 5) {
      price += (teamSize - 5) * 10
    }

    // Content volume multiplier
    if (contentVolume > 100) {
      price += Math.floor((contentVolume - 100) / 50) * 15
    }

    // Channels multiplier
    if (channels > 5) {
      price += (channels - 5) * 8
    }

    return price
  }

  const currentPrice = calculatePrice(pricingTiers[selectedTier], teamSize[0], contentVolume[0], channels[0])
  const annualPrice = currentPrice * 12 * 0.8 // 20% discount for annual

  useEffect(() => {
    const monthlySavings = currentPrice * 0.2 * 12
    setSavings(monthlySavings)
  }, [currentPrice])

  const handleScheduleDemo = () => {
    setShowDemoModal(true)
  }

  const handleDemoSuccess = () => {
    setShowSuccess(true)
    setDemoScheduled(true)
  }

  const handleSuccessComplete = () => {
    setShowSuccess(false)
  }

  return (
    <>
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 backdrop-blur-sm mb-6">
              <Calculator className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-medium text-indigo-300">Pricing Calculator</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent mb-6">
              Calculate Your
              <br />
              Perfect Plan
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get a personalized quote based on your team size, content needs, and marketing channels.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Calculator Controls */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8">
                <h3 className="text-2xl font-bold text-white mb-8">Customize Your Plan</h3>

                <div className="space-y-8">
                  {/* Team Size */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-400" />
                        <label className="text-white font-semibold">Team Size</label>
                      </div>
                      <span className="text-blue-400 font-bold">{teamSize[0]} members</span>
                    </div>
                    <Slider value={teamSize} onValueChange={setTeamSize} max={50} min={1} step={1} className="w-full" />
                  </div>

                  {/* Content Volume */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-purple-400" />
                        <label className="text-white font-semibold">Monthly Content</label>
                      </div>
                      <span className="text-purple-400 font-bold">{contentVolume[0]} pieces</span>
                    </div>
                    <Slider
                      value={contentVolume}
                      onValueChange={setContentVolume}
                      max={1000}
                      min={10}
                      step={10}
                      className="w-full"
                    />
                  </div>

                  {/* Marketing Channels */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-green-400" />
                        <label className="text-white font-semibold">Marketing Channels</label>
                      </div>
                      <span className="text-green-400 font-bold">{channels[0]} channels</span>
                    </div>
                    <Slider value={channels} onValueChange={setChannels} max={20} min={1} step={1} className="w-full" />
                  </div>

                  {/* Plan Selection */}
                  <div>
                    <label className="text-white font-semibold mb-4 block">Select Plan Type</label>
                    <div className="grid grid-cols-3 gap-2">
                      {pricingTiers.map((tier, index) => (
                        <motion.button
                          key={index}
                          onClick={() => setSelectedTier(index)}
                          className={`p-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                            selectedTier === index
                              ? `bg-gradient-to-r ${tier.color} text-white`
                              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {tier.name}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Price Display */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <GlassCard className={`p-8 relative overflow-visible ${pricingTiers[selectedTier].popular ? 'pt-12' : ''}`}>
                {pricingTiers[selectedTier].popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{pricingTiers[selectedTier].name} Plan</h3>
                  <div className="flex items-baseline justify-center gap-2 mb-4">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentPrice}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="text-5xl font-bold text-white"
                      >
                        ${currentPrice}
                      </motion.span>
                    </AnimatePresence>
                    <span className="text-gray-400">/month</span>
                  </div>

                  {/* Annual Savings */}
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-xl p-4 mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-green-400" />
                      <span className="text-green-300 text-sm font-semibold">Annual Savings</span>
                    </div>
                    <div className="text-white text-xl font-bold">Save ${Math.round(savings)} per year</div>
                    <div className="text-gray-300 text-sm">Annual price: ${Math.round(annualPrice)} (20% off)</div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {pricingTiers[selectedTier].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-3">
                  <Button
                    onClick={() => openModal("contact")}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-4 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Start Free Trial
                  </Button>
                  {!demoScheduled ? (
                    <Button
                      variant="outline"
                      className="w-full border-2 border-gray-600 hover:border-indigo-400 text-white hover:bg-indigo-500/20 bg-transparent"
                      onClick={handleScheduleDemo}
                    >
                      Schedule Demo
                    </Button>
                  ) : (
                    <div className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-green-500/20 border border-green-400/30">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, type: "spring" }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      </motion.div>
                      <span className="text-green-300 font-medium">Demo Scheduled!</span>
                    </div>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo Scheduling Modal */}
      <DemoSchedulingModal
        isOpen={showDemoModal}
        onClose={() => setShowDemoModal(false)}
        onSuccess={handleDemoSuccess}
      />

      {/* Success Animation */}
      <SuccessAnimation
        show={showSuccess}
        message="Demo scheduled successfully! We'll contact you within 24 hours to confirm the time."
        onComplete={handleSuccessComplete}
      />
    </>
  )
}
