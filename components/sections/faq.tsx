"use client"

import { useState } from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "How does ADmyBRAND AI Suite work?",
    answer:
      "ADmyBRAND AI Suite uses advanced machine learning algorithms to analyze your brand, target audience, and market trends. It then generates personalized marketing content, optimizes campaigns in real-time, and provides actionable insights to improve your ROI. The AI learns from your preferences and performance data to continuously improve results.",
  },
  {
    question: "Can I integrate ADmyBRAND with my existing marketing tools?",
    answer:
      "Yes! ADmyBRAND integrates seamlessly with over 100+ popular marketing tools including Google Ads, Facebook Ads, HubSpot, Salesforce, Mailchimp, and many more. Our API also allows for custom integrations with your proprietary systems.",
  },
  {
    question: "How accurate is the AI-generated content?",
    answer:
      "Our AI generates content with 95%+ accuracy that matches your brand voice and style. The system is trained on millions of high-performing marketing campaigns and continuously learns from your feedback. You always have full control to review and edit content before publishing.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer comprehensive support including 24/7 chat support, video tutorials, webinars, and dedicated account managers for Enterprise plans. Our team of marketing experts is always ready to help you maximize your results with personalized guidance and best practices.",
  },
  {
    question: "Is my data secure with ADmyBRAND?",
    answer:
      "Absolutely. We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and GDPR compliance. Your data is never shared with third parties and you maintain full ownership. We also offer on-premise deployment options for Enterprise customers.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time with no penalties or hidden fees. Your account will remain active until the end of your current billing period, and you can export all your data before cancellation.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Most customers see improvements within the first week of using ADmyBRAND. Typical results include 40-60% improvement in engagement rates, 25-40% increase in conversion rates, and 30-50% reduction in content creation time. Full optimization usually occurs within 30-60 days.",
  },
  {
    question: "Do you offer custom AI model training?",
    answer:
      "Yes, our Professional and Enterprise plans include custom AI model training. We can train the AI specifically on your brand guidelines, historical campaign data, and industry-specific requirements to deliver even more personalized and effective results.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 backdrop-blur-sm mb-6">
            <HelpCircle className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">FAQ</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6">
            Frequently Asked
            <br />
            Questions
          </h2>

          <p className="text-xl text-gray-300">Everything you need to know about ADmyBRAND AI Suite</p>
        </div>

        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <GlassCard
              key={index}
              className="overflow-hidden animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-4 md:p-6 text-left flex items-center justify-between hover:bg-white/10 transition-colors duration-200 touch-manipulation"
              >
                <h3 className="text-base md:text-lg font-semibold text-white pr-3 md:pr-4">{faq.question}</h3>
                <ChevronDown
                  className={`w-4 h-4 md:w-5 md:h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
