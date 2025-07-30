"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, Maximize, Clock, Users, TrendingUp, Sparkles, Zap, ExternalLink } from "lucide-react"
import { openModal } from "@/utils/modal"

const demoFeatures = [
  {
    title: "Omni-Channel ATL Advertising",
    description: "Manage campaigns across outdoor media, hoardings, mobile, radio, TV and newspapers",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Analytics-Driven Ad Exchange",
    description: "Big data analytics solution for programmatic advertising placement",
    icon: Users,
    color: "from-purple-500 to-pink-500",
  },
  {
    
    title: "Virtual Marketing Assistant",
    description: "Manage ATL marketing campaigns in just a few clicks within minutes",
    icon: Clock,
    color: "from-green-500 to-emerald-500",
  },
]

const floatingElements = [
  { icon: Sparkles, delay: 0, duration: 3 },
  { icon: Zap, delay: 1, duration: 4 },
  { icon: TrendingUp, delay: 2, duration: 3.5 },
]

export function DemoVideo() {
  const [selectedFeature, setSelectedFeature] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // YouTube video URL
  const youtubeVideoId = "x6s0OZD49Bw"
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1`

  return (
    <section id="demo" ref={sectionRef} className="py-24 px-4 relative overflow-hidden">
      {/* Advanced Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-blue-900/30 to-purple-900/50"
          animate={{
            background: [
              "linear-gradient(135deg, rgba(17,24,39,0.5) 0%, rgba(30,58,138,0.3) 50%, rgba(88,28,135,0.5) 100%)",
              "linear-gradient(135deg, rgba(88,28,135,0.5) 0%, rgba(17,24,39,0.5) 50%, rgba(30,58,138,0.3) 100%)",
              "linear-gradient(135deg, rgba(30,58,138,0.3) 0%, rgba(88,28,135,0.5) 50%, rgba(17,24,39,0.5) 100%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Floating Elements */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute opacity-10 ${index > 1 ? 'hidden md:block' : ''}`}
            style={{
              left: `${20 + index * 30}%`,
              top: `${30 + index * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: element.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: element.delay,
            }}
          >
            <element.icon className="w-4 h-4 md:w-6 lg:w-8 md:h-6 lg:h-8 text-white" />
          </motion.div>
        ))}
      </div>

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-400/30 backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Play className="w-4 h-4 text-red-400" />
            </motion.div>
            <span className="text-sm font-medium text-red-300">Live Demo</span>
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-red-200 to-pink-200 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            What is ADmyBRAND?
            <br />
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              style={{ backgroundSize: "200% 200%" }}
              className="bg-gradient-to-r from-red-400 via-pink-400 to-red-400 bg-clip-text text-transparent"
            >
              Tech-Age Solution
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            ADmyBRAND is the tech-age solution for omni-channel ATL advertising. An analytics-driven ad-exchange for outdoor media, hoardings, mobile, radio, TV and newspapers - disrupting traditional media placement with programmatic advertising and big data analytics.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* YouTube Video Player */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <GlassCard className="p-2 relative overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl relative overflow-hidden group">
                  {/* YouTube Video Embed */}
                  <iframe
                    src={youtubeEmbedUrl}
                    title="ADmyBRAND Demo Video"
                    className="absolute inset-0 w-full h-full rounded-xl"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                  
                  {/* Video Overlay with Link to YouTube */}
                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <a
                      href="https://www.youtube.com/watch?v=x6s0OZD49Bw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-black/80 backdrop-blur-sm text-white text-sm rounded-lg hover:bg-black/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Watch on YouTube
                    </a>
                  </motion.div>
                </div>

                {/* Video Info */}
                <motion.div
                  className="mt-4 p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    ADmyBRAND Platform Demo
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Experience the power of AI-driven marketing automation and see how ADmyBRAND transforms your campaigns.
                  </p>
                </motion.div>
              </GlassCard>
            </motion.div>
          </motion.div>

          {/* Demo Features Sidebar */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {demoFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  selectedFeature === index
                    ? "bg-gradient-to-r from-white/10 to-white/5 border-white/20 shadow-xl"
                    : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                }`}
                onClick={() => setSelectedFeature(index)}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center`}
                    animate={selectedFeature === index ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-gray-400 bg-gray-800 px-2 py-1 rounded">
                       
                      </span>
                    </div>
                    <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Call to Action */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button
                onClick={() => openModal("contact")}
                className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white py-4 font-semibold rounded-xl transition-all duration-300"
              >
                Start Your Free Trial
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
