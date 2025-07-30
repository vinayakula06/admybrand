"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { X, Play, Video, ImageIcon, FileText, BarChart3, ExternalLink } from "lucide-react"
import { openModal } from "@/utils/modal"

const features = [
  {
    id: "ai-video",
    title: "AI Video Generation",
    description: "Create stunning marketing videos with AI in seconds",
    icon: Video,
    gradient: "from-red-500 to-pink-500",
    isNew: true,
    demo: "Generate professional video ads from just a text prompt",
  },
  {
    id: "smart-creative",
    title: "Smart Creative Optimization",
    description: "AI automatically optimizes your creatives for maximum performance",
    icon: ImageIcon,
    gradient: "from-blue-500 to-cyan-500",
    isNew: true,
    demo: "Watch AI improve your ad performance in real-time",
  },
  {
    id: "voice-cloning",
    title: "AI Voice Cloning",
    description: "Clone your brand voice for consistent messaging",
    icon: FileText,
    gradient: "from-purple-500 to-pink-500",
    isNew: true,
    demo: "Hear how AI maintains your unique brand voice",
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics 2.0",
    description: "Predict campaign performance before you launch",
    icon: BarChart3,
    gradient: "from-green-500 to-emerald-500",
    isNew: false,
    demo: "See future performance predictions with 95% accuracy",
  },
]

interface FeatureShowcaseModalProps {
  isOpen: boolean
  onClose: () => void
}

export function FeatureShowcaseModal({ isOpen, onClose }: FeatureShowcaseModalProps) {
  const [selectedFeature, setSelectedFeature] = useState(features[0])

  if (!isOpen) return null

  const handleTryFeature = () => {
    onClose()
    openModal("contact")
  }

  // YouTube video configuration
  const youtubeVideoId = "x6s0OZD49Bw"
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1`

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <GlassCard className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-in fade-in-0 zoom-in-95 duration-300">
        <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
          <h2 className="text-2xl font-bold text-white">Latest AI Features</h2>
          <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0 hover:bg-gray-700 text-white">
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Feature List */}
          <div className="space-y-3">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <button
                  key={feature.id}
                  onClick={() => setSelectedFeature(feature)}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                    selectedFeature.id === feature.id
                      ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30"
                      : "bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${feature.gradient} p-2`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-white">{feature.title}</h3>
                        {feature.isNew && (
                          <span className="px-2 py-0.5 text-xs bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full">
                            NEW
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Feature Demo - YouTube Video */}
          <div className="space-y-4">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl relative overflow-hidden group">
              {/* YouTube Video Embed */}
              <iframe
                src={youtubeEmbedUrl}
                title="ADmyBRAND Features Demo"
                className="absolute inset-0 w-full h-full rounded-xl"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              
              {/* Video Overlay with Link to YouTube */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="https://www.youtube.com/watch?v=x6s0OZD49Bw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-black/80 backdrop-blur-sm text-white text-sm rounded-lg hover:bg-black/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Watch on YouTube
                </a>
              </div>
            </div>

            <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
              <h4 className="font-semibold text-white mb-2">{selectedFeature.title}</h4>
              <p className="text-gray-300 text-sm mb-3">{selectedFeature.demo}</p>
              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={handleTryFeature}
              >
                Try This Feature
              </Button>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  )
}
