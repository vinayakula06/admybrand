"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { openModal } from "@/utils/modal"
import {
  BookOpen,
  Download,
  Eye,
  ExternalLink,
  Calendar,
  Clock,
  User,
  TrendingUp,
  FileText,
  Video,
  Headphones,
  ArrowRight,
  Lightbulb,
  Target,
  BarChart3,
  Users,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI-Powered Advertising",
    excerpt:
      "Discover how artificial intelligence is revolutionizing the advertising landscape and what it means for your marketing strategy.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Industry Insights",
    image: "https://media.istockphoto.com/id/1480239160/photo/an-analyst-uses-a-computer-and-dashboard-for-data-business-analysis-and-data-management.jpg?s=612x612&w=0&k=20&c=Zng3q0-BD8rEl0r6ZYZY0fbt2AWO9q_gC8lSrwCIgdk=",
    trending: true,
  },
  {
    id: 2,
    title: "Maximizing ROI with Data-Driven Campaigns",
    excerpt:
      "Learn proven strategies to optimize your advertising spend and achieve better returns on your marketing investments.",
    author: "Michael Chen",
    date: "2024-01-12",
    readTime: "12 min read",
    category: "Strategy",
    image: "https://media.istockphoto.com/id/1473164518/photo/woman-with-back-pain-working-at-standing-desk-home-office.jpg?s=612x612&w=0&k=20&c=DGy7c9NOuacvc166b72X28Oi25ZP7vg_Eti0JoAO3rs=",
    trending: false,
  },
  {
    id: 3,
    title: "Creative Best Practices for 2024",
    excerpt:
      "Explore the latest creative trends and design principles that drive engagement and conversions in modern advertising.",
    author: "Emily Rodriguez",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Creative",
    image: "https://media.istockphoto.com/id/1366444151/photo/marketing-automation-tools-marketing-automation-software-marketing-technology-martech.jpg?s=612x612&w=0&k=20&c=3Ls6kRvJwShY1YrIpBtepYGPlV-y8DsU8gVkvSoGoGw=",
    trending: true,
  },
]

const resources = [
  {
    id: 1,
    title: "Complete Guide to Programmatic Advertising",
    description: "A comprehensive 50-page guide covering everything you need to know about programmatic advertising.",
    type: "PDF Guide",
    icon: FileText,
    size: "2.3 MB",
    downloads: 1247,
    color: "text-brand-teal",
  },
  {
    id: 2,
    title: "Video Marketing Masterclass",
    description: "Learn how to create compelling video ads that convert with this 2-hour masterclass.",
    type: "Video Course",
    icon: Video,
    size: "1.2 GB",
    downloads: 892,
    color: "text-brand-purple",
  },
  {
    id: 3,
    title: "Attribution Modeling Podcast Series",
    description: "Deep dive into attribution modeling with industry experts in this 6-episode podcast series.",
    type: "Podcast",
    icon: Headphones,
    size: "Audio",
    downloads: 634,
    color: "text-brand-magenta",
  },
  {
    id: 4,
    title: "Campaign Optimization Checklist",
    description: "A practical checklist to ensure your campaigns are optimized for maximum performance.",
    type: "Checklist",
    icon: FileText,
    size: "1.1 MB",
    downloads: 2156,
    color: "text-brand-teal",
  },
]

const categories = [
  { name: "All", icon: BookOpen, count: 24, active: true },
  { name: "Strategy", icon: Target, count: 8, active: false },
  { name: "Analytics", icon: BarChart3, count: 6, active: false },
  { name: "Creative", icon: Lightbulb, count: 5, active: false },
  { name: "Industry", icon: Users, count: 5, active: false },
]

export function BlogResources() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSignup = () => {
    if (email) {
      setIsSubscribed(true)
      setEmail("")
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(114,9,183,0.4) 0%, rgba(233,30,99,0.2) 50%, transparent 100%)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-brand mb-6">
            <BookOpen className="w-5 h-5 text-brand-teal" />
            <span className="text-sm font-semibold text-white/90 tracking-wide">KNOWLEDGE CENTER</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Blog & <span className="text-brand-gradient">Resources</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay ahead of the curve with expert insights, industry trends, and actionable resources
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? "bg-brand-magenta text-white shadow-lg"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white"
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.name} ({category.count})
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Blog Posts Section */}
          <div>
            <motion.div
              className="flex items-center justify-between mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-brand-teal" />
                Latest Articles
              </h3>
              <Link href="/blog">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 hover:border-brand-teal text-gray-300 hover:text-white bg-transparent"
                >
                  View All Posts
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>

            <div className="space-y-6">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                    <div className="flex flex-col sm:flex-row">
                      <div className="relative sm:w-1/3">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-48 sm:h-full object-cover"
                        />
                        {post.trending && (
                          <div className="absolute top-3 left-3">
                            <span className="px-2 py-1 bg-brand-magenta text-white text-xs font-semibold rounded-full">
                              Trending
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex-1 p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 bg-brand-teal/20 text-brand-teal text-xs font-semibold rounded-full">
                            {post.category}
                          </span>
                        </div>

                        <h4 className="text-lg font-bold mb-3 group-hover:text-brand-teal transition-colors duration-300">
                          {post.title}
                        </h4>

                        <p className="text-gray-300 mb-4 text-sm line-clamp-2">{post.excerpt}</p>

                        <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </div>
                        </div>

                        <Link href="/blog">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-gray-600 hover:border-brand-teal text-gray-300 hover:text-white bg-transparent"
                          >
                            Read More
                            <ExternalLink className="w-3 h-3 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Resources Section */}
          <div>
            <motion.div
              className="flex items-center justify-between mb-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <Download className="w-6 h-6 text-brand-purple" />
                Free Resources
              </h3>
              <Button
                variant="outline"
                size="sm"
                className="border-gray-600 hover:border-brand-purple text-gray-300 hover:text-white bg-transparent"
                onClick={() => openModal("contact")}
              >
                Browse Library
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>

            <div className="space-y-4">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="p-6 group cursor-pointer hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gray-800/50 ${resource.color}`}>
                        <resource.icon className="w-6 h-6" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-bold group-hover:text-brand-purple transition-colors duration-300">
                            {resource.title}
                          </h4>
                          <span className="px-2 py-1 bg-brand-purple/20 text-brand-purple text-xs font-semibold rounded-full">
                            {resource.type}
                          </span>
                        </div>

                        <p className="text-gray-300 text-sm mb-3">{resource.description}</p>

                        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                          <span className="flex items-center gap-2">
                            <span>{resource.size}</span>
                            <span>•</span>
                            <span>{resource.downloads} views</span>
                          </span>
                        </div>

                        <Button
                          size="sm"
                          className="bg-brand-teal hover:bg-brand-teal/80 text-white"
                          onClick={() => openModal("contact")}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View
                        </Button>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated with <span className="text-brand-gradient">Industry Insights</span>
            </h3>
            <p className="text-gray-300 mb-6">Get weekly insights, tips, and resources delivered to your inbox</p>

            {!isSubscribed ? (
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all duration-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  className="bg-gradient-to-r from-brand-teal to-brand-purple hover:from-brand-teal/80 hover:to-brand-purple/80 text-white px-6 py-3 font-bold"
                  onClick={handleNewsletterSignup}
                >
                  Subscribe
                </Button>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-3 text-green-400">
                <CheckCircle className="w-6 h-6" />
                <span className="text-lg font-semibold">You are subscribed to our newsletter!</span>
              </div>
            )}
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
