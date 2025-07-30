"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { ResponsiveNav } from "@/components/ui/responsive-nav"
import { Footer } from "@/components/sections/footer"
import { ContactModal } from "@/components/ui/contact-modal"
import { openModal } from "@/utils/modal"
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Search,
  Filter,
  TrendingUp,
  Eye,
  MessageCircle,
  Share2,
  BookOpen,
  Zap,
} from "lucide-react"
import Link from "next/link"

const blogCategories = [
  { name: "All", count: 48, active: true },
  { name: "Marketing Tips", count: 15, active: false },
  { name: "Industry News", count: 12, active: false },
  { name: "Case Studies", count: 8, active: false },
  { name: "Analytics", count: 7, active: false },
  { name: "Tutorials", count: 6, active: false },
]

const featuredPosts = [
  {
    id: 1,
    title: "The Future of AI-Powered Advertising: Trends to Watch in 2024",
    excerpt:
      "Discover how artificial intelligence is revolutionizing the advertising landscape and what it means for your marketing strategy.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Industry News",
    image: "/placeholder.svg?height=400&width=600",
    views: 2847,
    comments: 23,
    featured: true,
    tags: ["AI", "Advertising", "Trends", "2024"],
  },
  {
    id: 2,
    title: "How to Optimize Your Ad Spend: A Complete ROI Guide",
    excerpt: "Learn proven strategies to maximize your advertising return on investment and reduce wasted ad spend.",
    author: "Michael Chen",
    date: "2024-01-12",
    readTime: "12 min read",
    category: "Marketing Tips",
    image: "/placeholder.svg?height=400&width=600",
    views: 1923,
    comments: 18,
    featured: true,
    tags: ["ROI", "Optimization", "Ad Spend", "Strategy"],
  },
  {
    id: 3,
    title: "Case Study: How Brand X Increased Conversions by 340%",
    excerpt: "A detailed breakdown of the strategies and tactics that led to exceptional campaign performance.",
    author: "Emily Rodriguez",
    date: "2024-01-10",
    readTime: "15 min read",
    category: "Case Studies",
    image: "/placeholder.svg?height=400&width=600",
    views: 3156,
    comments: 31,
    featured: true,
    tags: ["Case Study", "Conversions", "Growth", "Success"],
  },
]

const recentPosts = [
  {
    id: 4,
    title: "Understanding Programmatic Advertising in 2024",
    excerpt: "A comprehensive guide to programmatic advertising and how to leverage it for your campaigns.",
    author: "David Kim",
    date: "2024-01-08",
    readTime: "10 min read",
    category: "Tutorials",
    image: "/placeholder.svg?height=300&width=400",
    views: 1456,
    comments: 12,
    tags: ["Programmatic", "Automation", "Tutorial"],
  },
  {
    id: 5,
    title: "The Rise of Connected TV Advertising",
    excerpt: "Explore the growing opportunities in connected TV advertising and how to get started.",
    author: "Lisa Wang",
    date: "2024-01-05",
    readTime: "7 min read",
    category: "Industry News",
    image: "/placeholder.svg?height=300&width=400",
    views: 987,
    comments: 8,
    tags: ["CTV", "Streaming", "Video Ads"],
  },
  {
    id: 6,
    title: "Analytics Deep Dive: Attribution Modeling",
    excerpt: "Master attribution modeling to understand the true impact of your marketing channels.",
    author: "Robert Taylor",
    date: "2024-01-03",
    readTime: "14 min read",
    category: "Analytics",
    image: "/placeholder.svg?height=300&width=400",
    views: 1234,
    comments: 15,
    tags: ["Analytics", "Attribution", "Data"],
  },
  {
    id: 7,
    title: "Creative Best Practices for Display Advertising",
    excerpt: "Design principles and creative strategies that drive higher engagement and conversions.",
    author: "Amanda Foster",
    date: "2024-01-01",
    readTime: "9 min read",
    category: "Marketing Tips",
    image: "/placeholder.svg?height=300&width=400",
    views: 1678,
    comments: 19,
    tags: ["Creative", "Display Ads", "Design"],
  },
  {
    id: 8,
    title: "Mobile-First Advertising Strategies",
    excerpt: "Optimize your campaigns for mobile users and capture the growing mobile audience.",
    author: "James Wilson",
    date: "2023-12-28",
    readTime: "11 min read",
    category: "Marketing Tips",
    image: "/placeholder.svg?height=300&width=400",
    views: 2103,
    comments: 24,
    tags: ["Mobile", "Strategy", "Optimization"],
  },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const [contactModalOpen, setContactModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <ResponsiveNav />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(0,180,216,0.4) 0%, rgba(0,119,182,0.2) 50%, transparent 100%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-600 hover:border-brand-teal text-gray-300 hover:text-white bg-transparent"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>

          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              ADmyBRAND <span className="text-brand-gradient">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead of the curve with insights, tips, and strategies from the world of digital advertising
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all duration-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button
              variant="outline"
              className="border-gray-600 hover:border-brand-teal text-gray-300 hover:text-white bg-transparent px-6"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </motion.div>

          {/* Categories */}
          <motion.div
            className="flex flex-wrap gap-2 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {blogCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === index
                    ? "bg-brand-magenta text-white"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <TrendingUp className="w-8 h-8 text-brand-teal" />
            Featured Articles
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <GlassCard className="h-full overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                  <div className="relative">
                    <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-brand-magenta text-white text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-brand-teal transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {post.views.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {post.comments}
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gray-600 hover:border-brand-teal text-gray-300 hover:text-white bg-transparent"
                        onClick={() => openModal("contact")}
                      >
                        Read More
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-md">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <BookOpen className="w-8 h-8 text-brand-purple" />
            Recent Articles
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recentPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <GlassCard className="h-full overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                  <div className="relative">
                    <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-40 object-cover" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-brand-purple text-white text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-brand-purple transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-3 text-sm line-clamp-2">{post.excerpt}</p>

                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {post.views.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          {post.comments}
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-brand-purple hover:text-white hover:bg-brand-purple/20 p-1"
                        onClick={() => openModal("contact")}
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-1 mt-3">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-md">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-brand-magenta to-brand-purple hover:from-brand-magenta/80 hover:to-brand-purple/80 text-white px-8 py-3 font-bold"
              onClick={() => openModal("contact")}
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <GlassCard className="p-8 text-center">
              <div className="flex items-center justify-center mb-6">
                <Zap className="w-12 h-12 text-brand-teal" />
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Stay Updated with <span className="text-brand-gradient">ADmyBRAND</span>
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Get the latest insights, tips, and industry news delivered straight to your inbox
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all duration-300"
                />
                <Button
                  className="bg-gradient-to-r from-brand-teal to-brand-purple hover:from-brand-teal/80 hover:to-brand-purple/80 text-white px-6 py-3 font-bold"
                  onClick={() => openModal("contact")}
                >
                  Subscribe
                </Button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </main>
  )
}
