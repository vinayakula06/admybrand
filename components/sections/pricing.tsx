"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { SuccessAnimation } from "@/components/ui/success-animation"
import { openModal } from "@/utils/modal"
import { Check, Sparkles, Crown, Rocket, Zap, X, Mail, User, Building, Send, CreditCard } from "lucide-react"

// Buy Now Modal Component
function BuyNowModal({ isOpen, onClose, onSuccess, selectedPlan }: { isOpen: boolean; onClose: () => void; onSuccess: () => void; selectedPlan: string }) {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", plan: selectedPlan })
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
    setFormData({ name: "", email: "", company: "", plan: selectedPlan })
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
            <CreditCard className="w-6 h-6 text-purple-400" />
            <h2 className="text-2xl font-bold text-white">Purchase {selectedPlan} Plan</h2>
          </div>
          <p className="text-gray-300">
            Complete your purchase and start boosting your marketing today
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
              <User className="w-5 h-5 text-purple-400" />
            </div>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
              <Mail className="w-5 h-5 text-purple-400" />
            </div>
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Company Field */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
              <Building className="w-5 h-5 text-purple-400" />
            </div>
            <input
              type="text"
              placeholder="Company Name"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Selected Plan Display */}
          <div className="bg-purple-500/20 border border-purple-400/30 rounded-xl p-4">
            <div className="text-center">
              <h4 className="text-white font-semibold mb-1">Selected Plan</h4>
              <p className="text-purple-300 text-lg font-bold">{selectedPlan} Plan</p>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                Processing Purchase...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                Complete Purchase
              </div>
            )}
          </Button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            💳 Secure payment processing - We'll contact you to finalize payment
          </p>
        </div>
      </motion.div>
    </div>
  )
}

const plans = [
  {
    name: "Starter",
    price: 29,
    annualPrice: 290,
    annualSavings: 58,
    description: "Perfect for small businesses getting started with AI marketing",
    icon: Sparkles,
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "AI Content Generation (100 pieces/month)",
      "Basic Analytics Dashboard",
      "Email Marketing Automation",
      "2 Social Media Channels",
      "Standard Support",
      "Brand Guidelines Setup",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: 79,
    annualPrice: 758,
    annualSavings: 190,
    description: "Ideal for growing businesses that need advanced AI capabilities",
    icon: Crown,
    gradient: "from-purple-500 to-pink-500",
    features: [
      "Advanced AI Content",
      "Multi-Channel Automation",
      "10 Social Channels",
      "Priority Support",
      "A/B Testing",
      "Custom Brand Voice Training",
      "ROI Optimization Tools",
      "Advanced Analytics & Insights",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: 199,
    annualPrice: 1990,
    annualSavings: 398,
    description: "Complete AI marketing solution for large organizations",
    icon: Rocket,
    gradient: "from-green-500 to-emerald-500",
    features: [
      "Unlimited AI Content Generation",
      "Enterprise Analytics Suite",
      "Full Marketing Automation",
      "Unlimited Channels",
      "Advanced A/B Testing",
      "Dedicated Account Manager",
      "Custom AI Model Training",
      "White-label Solutions",
      "API Access",
      "Custom Integrations",
    ],
    popular: false,
  },
]

export function Pricing() {
  const [showBuyNowModal, setShowBuyNowModal] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)
  const [purchasedPlans, setPurchasedPlans] = useState<string[]>([])

  const handleBuyNow = (planName: string) => {
    setSelectedPlan(planName)
    setShowBuyNowModal(true)
  }

  const handleBuyNowSuccess = () => {
    setShowSuccess(true)
    setPurchasedPlans(prev => [...prev, selectedPlan])
  }

  const handleSuccessComplete = () => {
    setShowSuccess(false)
  }

  return (
    <>
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 backdrop-blur-sm mb-6">
              <Crown className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Simple Pricing</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6">
              Choose Your
              <br />
              Success Plan
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start free and scale as you grow. All plans include our core AI features with no hidden fees or long-term
              commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <GlassCard
                key={index}
                className={`p-6 md:p-8 relative hover:scale-105 transition-all duration-300 animate-on-scroll touch-manipulation ${
                  plan.popular ? "ring-2 ring-purple-500/50 scale-105" : ""
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6 md:mb-8">
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-r ${plan.gradient} p-3 md:p-4 mx-auto mb-3 md:mb-4`}
                  >
                    <plan.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-sm md:text-base text-gray-300 mb-4">{plan.description}</p>

                  <div className="flex items-baseline justify-center gap-1 mb-4 md:mb-6">
                    <span className="text-4xl md:text-5xl font-bold text-white">${plan.price}</span>
                    <span className="text-sm md:text-base text-gray-400">/month</span>
                  </div>

                  {/* Annual Savings Section */}
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-xl p-4 mb-6">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Zap className="w-4 h-4 text-green-400" />
                        <span className="text-sm font-semibold text-green-400">Annual Savings</span>
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">Save ${plan.annualSavings} per year</div>
                      <div className="text-sm text-gray-300">Annual price: ${plan.annualPrice} (20% off)</div>
                    </div>
                  )}
                </div>

                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
                      </div>
                      <span className="text-sm md:text-base text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <Button
                    className={`w-full py-3 md:py-4 font-semibold transition-all duration-300 min-h-[48px] touch-manipulation ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl"
                        : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl"
                    }`}
                    onClick={() => openModal("contact")}
                  >
                    {plan.popular ? "Start Free Trial" : "Get Started"}
                  </Button>
                  
                  {!purchasedPlans.includes(plan.name) ? (
                    <Button
                      variant="outline"
                      className="w-full py-3 md:py-4 font-semibold transition-all duration-300 min-h-[48px] touch-manipulation border-2 border-gray-600 hover:border-purple-400 text-white hover:bg-purple-500/20 bg-transparent"
                      onClick={() => handleBuyNow(plan.name)}
                    >
                      Buy Now
                    </Button>
                  ) : (
                    <div className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-green-500/20 border border-green-400/30">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, type: "spring" }}
                      >
                        <Check className="w-5 h-5 text-green-400" />
                      </motion.div>
                      <span className="text-green-300 font-medium">Purchase Submitted!</span>
                    </div>
                  )}
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <p className="text-gray-300 mb-4">All plans include a 14-day free trial. No credit card required.</p>
            <Button
              variant="outline"
              className="border-2 border-gray-600 hover:border-blue-400 backdrop-blur-sm bg-gray-800/50 hover:bg-gray-700/80 text-white"
              onClick={() => openModal("contact")}
            >
              Compare All Features
            </Button>
          </div>
        </div>
      </section>

      {/* Buy Now Modal */}
      <BuyNowModal
        isOpen={showBuyNowModal}
        onClose={() => setShowBuyNowModal(false)}
        onSuccess={handleBuyNowSuccess}
        selectedPlan={selectedPlan}
      />

      {/* Success Animation */}
      <SuccessAnimation
        show={showSuccess}
        message="Purchase request submitted! We'll contact you within 24 hours to process your order."
        onComplete={handleSuccessComplete}
      />
    </>
  )
}
