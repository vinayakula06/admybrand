"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { openModal } from "@/utils/modal"
import {
  Play,
  Sparkles,
  Mic,
  Calendar,
  MapPin,
  Tag,
  Smartphone,
  TrendingUp,
  Target,
  BarChart3,
  Users,
  BarChart,
  Building,
  Car,
  Plane,
  Train,
  ShoppingBag,
  Coffee,
  Gamepad2,
  Monitor,
} from "lucide-react"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"

const navigationTabs = [
  {
    name: "Search Ad Spaces",
    active: true,
    color: "text-brand-magenta",
    buttonText: "Search Ad Spaces",
    icon: Target,
    description: "Find the perfect advertising spaces for your brand",
  },
  {
    name: "Search Ad Agency",
    active: false,
    color: "text-gray-600",
    buttonText: "Find Ad Agency",
    icon: Users,
    description: "Connect with top advertising agencies worldwide",
  },
  {
    name: "Search Ad Analytics",
    active: false,
    color: "text-gray-600",
    buttonText: "View Analytics",
    icon: BarChart,
    description: "Analyze your advertising performance and ROI",
  },
]

const adLocations = [
  {
    name: "Times Square Billboard",
    location: "New York, NY",
    price: "$15,000/month",
    type: "Billboard",
    icon: Building,
  },
  { name: "Metro Station Display", location: "London, UK", price: "$8,500/month", type: "Transit", icon: Train },
  { name: "Airport Terminal Screen", location: "Dubai, UAE", price: "$12,000/month", type: "Airport", icon: Plane },
  { name: "Shopping Mall LED", location: "Tokyo, Japan", price: "$6,800/month", type: "Retail", icon: ShoppingBag },
  { name: "Bus Stop Digital", location: "Los Angeles, CA", price: "$3,200/month", type: "Transit", icon: Car },
  { name: "Coffee Shop Network", location: "Seattle, WA", price: "$2,100/month", type: "Lifestyle", icon: Coffee },
  {
    name: "Gaming Arena Screen",
    location: "Seoul, South Korea",
    price: "$9,500/month",
    type: "Entertainment",
    icon: Gamepad2,
  },
  { name: "Digital Highway Sign", location: "Mumbai, India", price: "$4,700/month", type: "Highway", icon: Monitor },
]

const agencyList = [
  {
    name: "BrandBoost Media",
    location: "New York, NY",
    type: "Full-Service Agency",
    icon: Users,
    description: "Award-winning agency specializing in omnichannel campaigns for global brands.",
  },
  {
    name: "Digital Dynamo",
    location: "London, UK",
    type: "Digital Marketing",
    icon: Smartphone,
    description: "Experts in digital strategy, SEO, and social media marketing.",
  },
  {
    name: "Creative Spark",
    location: "Mumbai, India",
    type: "Creative Agency",
    icon: Sparkles,
    description: "Innovative creatives and branding for startups and enterprises.",
  },
  {
    name: "MediaMinds",
    location: "Dubai, UAE",
    type: "Media Planning",
    icon: BarChart3,
    description: "Data-driven media planning and buying for maximum ROI.",
  },
]

const analyticsData = [
  {
    title: "Impressions",
    value: "1,200,000",
    change: "+8%",
    icon: BarChart,
    color: "text-brand-teal",
  },
  {
    title: "Clicks",
    value: "85,000",
    change: "+5%",
    icon: TrendingUp,
    color: "text-brand-magenta",
  },
  {
    title: "Conversions",
    value: "12,300",
    change: "+2%",
    icon: Target,
    color: "text-brand-purple",
  },
  {
    title: "ROI",
    value: "320%",
    change: "+12%",
    icon: BarChart3,
    color: "text-green-400",
  },
]

export function Hero() {
  const [activeTab, setActiveTab] = useState(0)
  const [searchData, setSearchData] = useState({
    category: "",
    location: "",
    startDate: "",
    endDate: "",
  })
  const [showAdLocations, setShowAdLocations] = useState(false)
  const [showAgencies, setShowAgencies] = useState(false)
  const [showAnalytics, setShowAnalytics] = useState(false)

  const handleAppDownload = (platform: "android" | "ios") => {
    // In a real app, these would be actual store URLs
    const urls = {
      android: "https://play.google.com/store/apps/details?id=com.admybrand.app",
      ios: "https://apps.apple.com/app/admybrand/id123456789",
    }

    // For demo purposes, show contact modal
    openModal("contact")

    // In production, you would use:
    // window.open(urls[platform], '_blank')
  }

  const handleSearchAd = () => {
    if (activeTab === 0) {
      setShowAdLocations(true)
    } else if (activeTab === 1) {
      setShowAgencies(true)
    } else if (activeTab === 2) {
      setShowAnalytics(true)
    } else {
      openModal("contact")
    }
  }

  const currentTab = navigationTabs[activeTab]

  // Filtered lists based on searchData
  const filteredAdLocations = adLocations.filter((location) => {
    const locationMatch = searchData.location === "none" || !searchData.location ||
      location.location.toLowerCase().includes(searchData.location.replace(/-/g, " ").toLowerCase());
    const categoryMatch = !searchData.category ||
      location.type.toLowerCase().includes(searchData.category.toLowerCase());
    return locationMatch && categoryMatch;
  });

  const filteredAgencies = agencyList.filter((agency) => {
    const locationMatch = searchData.location === "none" || !searchData.location ||
      agency.location.toLowerCase().includes(searchData.location.replace(/-/g, " ").toLowerCase());
    const typeMatch = !searchData.category ||
      agency.type.toLowerCase().includes(searchData.category.toLowerCase());
    return locationMatch && typeMatch;
  });

  const filteredAnalytics = analyticsData.filter((item) => {
    // For demo, filter by category (metric type)
    return !searchData.category || item.title.toLowerCase().includes(searchData.category.toLowerCase());
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center px-3 sm:px-4 lg:px-6 py-20 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full blur-3xl opacity-40"
          style={{
            background: "radial-gradient(circle, rgba(0,180,216,0.6) 0%, rgba(0,119,182,0.3) 50%, transparent 100%)",
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-60 sm:h-60 lg:w-80 lg:h-80 rounded-full blur-3xl opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(114,9,183,0.6) 0%, rgba(233,30,99,0.3) 50%, transparent 100%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Brand Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full glass-brand mb-6 sm:mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-brand-teal rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-white/90 tracking-wide">AI-POWERED MARKETING REVOLUTION</span>
            <Sparkles className="w-4 h-4 text-brand-teal" />
          </motion.div>

          {/* Native SVG Logo */}
          <motion.div
            className="flex justify-center mb-8 sm:mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative">
              <svg
                width="280"
                height="42"
                viewBox="0 0 170 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-48 h-auto sm:w-56 md:w-64 lg:w-72 xl:w-80 transition-all duration-300"
              >
                <defs>
                  <linearGradient
                    id="paint0_hero"
                    x1="0.390625"
                    y1="9.07198"
                    x2="36.4854"
                    y2="9.07198"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00B4D8" />
                    <stop offset="1" stopColor="#0077B6" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_hero"
                    x1="40.3887"
                    y1="12.9869"
                    x2="74.0665"
                    y2="12.9869"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0077B6" />
                    <stop offset="1" stopColor="#7209B7" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_hero"
                    x1="78.899"
                    y1="9.39659"
                    x2="169.57"
                    y2="9.39659"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E91E63" />
                    <stop offset="1" stopColor="#E91E63" />
                  </linearGradient>
                </defs>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.5284 18.2H15.1636L10.4631 4.225L10.1274 3.9C9.79163 3.9 9.79163 4.225 9.45588 4.225L4.75538 18.2H0.390625C0.726375 16.9 1.39788 15.275 2.06938 13C2.74088 10.4 3.74813 8.125 4.41963 5.85C5.42688 3.25 5.76263 1.95 6.09838 1.625C6.43413 0.975 7.10563 0.65 7.77713 0.325C8.44863 0 9.12013 0 10.1274 0C10.7989 0 11.4704 0 12.1419 0.325C12.8134 0.65 13.4849 0.975 13.8206 1.625C14.1564 1.95 14.4921 3.25 15.4994 5.85C16.1709 7.475 16.8424 10.075 17.8496 13C18.5211 14.625 19.1926 16.575 19.5284 18.2ZM29.6009 18.2H20.5356V0H29.6009C31.6154 0 33.6299 0.975 34.6371 2.925C35.9801 4.55 36.6516 6.825 36.6516 9.425C36.6516 11.7 35.9801 13.65 34.6371 15.275C33.6299 17.225 31.9511 18.2 29.6009 18.2ZM28.9294 14.3C29.9366 14.3 30.6081 13.65 31.2796 12.675C31.9511 11.7 31.9511 10.4 31.9511 8.775C31.9511 7.475 31.9511 6.5 31.2796 5.525C30.6081 4.55 29.9366 3.9 28.9294 3.9H24.5646V14.3H28.9294Z"
                  fill="url(#paint0_hero)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M65.526 9.75L62.5042 0H57.1322L54.4462 9.425L51.4245 0H46.0525L40.3447 18.2H45.7167L48.7385 8.775L51.7602 18.2H51.4245H57.1322L59.8182 8.775L62.84 18.2L60.4897 26H66.1975L71.9052 6.825L72.241 6.175L73.9197 0H68.5477L66.5332 6.825L65.526 9.75Z"
                  fill="url(#paint1_hero)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M151.814 14.625C151.814 15.925 151.478 16.9 150.471 17.55C149.464 18.2 148.456 18.525 147.113 18.525C146.106 18.525 145.099 18.2 144.092 17.875C143.084 17.225 142.413 16.25 142.077 14.95C142.077 14.95 141.741 13.65 141.07 11.375C140.398 9.1 139.727 7.475 139.391 6.175C138.72 4.55 138.384 3.9 137.712 3.9L137.377 4.225C137.377 4.55 137.041 4.55 137.041 4.875V18.525H133.012V3.9C133.012 2.6 133.683 1.625 134.691 0.975C135.362 0.325 136.705 0 138.048 0C139.727 0 141.406 0.975 142.413 2.6C143.084 3.9 143.756 5.85 144.427 8.45C145.099 11.375 145.77 13.325 146.106 13.975C146.106 14.3 146.442 14.3 146.442 14.3C146.778 14.625 146.778 14.625 147.113 14.625C147.113 14.625 147.449 14.625 147.449 14.3C147.785 14.3 147.785 13.975 147.785 13.65V0.325H151.814V14.625ZM132.34 18.525H127.64L122.939 4.55C122.939 4.225 122.604 4.225 122.604 4.225C122.268 4.225 122.268 4.225 122.268 4.55L117.567 18.525H112.867C113.203 17.225 113.874 15.6 114.546 13.325C115.553 10.725 116.224 8.45 116.896 6.175C117.903 3.575 118.575 1.95 118.575 1.95C118.91 1.3 119.582 0.975 120.253 0.65C120.925 0.325 121.596 0.325 122.604 0.325C123.275 0.325 124.282 0.325 124.954 0.65C125.625 0.975 125.961 1.3 126.297 1.95C126.633 1.95 127.304 3.575 127.976 5.85C128.647 7.8 129.654 10.075 130.662 13.325C130.997 14.95 131.669 16.575 132.34 18.525ZM162.558 18.525H153.493V0.325H162.558C164.908 0.325 166.587 1.3 167.93 3.25C168.937 4.875 169.609 7.15 169.609 9.425C169.609 12.025 168.937 13.975 167.93 15.6C166.587 17.55 164.908 18.525 162.558 18.525ZM161.886 14.625C162.894 14.625 163.901 13.975 164.237 12.675C164.908 11.7 165.244 10.725 165.244 9.1C165.244 7.8 164.908 6.5 164.237 5.85C163.901 4.55 162.894 4.225 161.886 4.225H157.857V14.625H161.886ZM112.195 18.85L100.444 13.975V18.525H96.4151V12.35C96.4151 11.05 96.7508 9.75 97.4223 8.775C98.4296 7.8 99.4368 7.475 101.116 7.475H106.152C106.823 7.475 107.159 7.15 107.495 6.825C107.495 6.5 107.831 6.175 107.831 5.85C107.831 5.2 107.495 4.875 107.495 4.55C107.159 4.225 106.823 4.225 106.152 4.225H96.4151V0.325H106.823C108.502 0.325 109.845 0.975 110.852 1.95C111.524 2.925 111.86 4.225 111.86 5.85C111.86 7.15 111.524 8.45 110.852 9.425C109.845 10.725 108.502 11.375 106.823 11.375H104.473L112.195 14.625V18.85ZM93.3933 9.425C93.7291 9.75 94.0648 10.4 94.4006 11.05C94.4006 11.7 94.7363 12.35 94.7363 13C94.7363 14.3 94.0648 15.6 93.3933 16.575C92.3861 17.875 91.0431 18.525 89.3643 18.525H78.9561V14.625H88.6928C89.3643 14.625 89.7001 14.3 90.0358 13.975C90.0358 13.65 90.3716 13.325 90.3716 13C90.3716 12.675 90.0358 12.025 90.0358 12.025C89.7001 11.7 89.3643 11.375 88.6928 11.375H78.9561V7.475H88.6928C89.3643 7.475 89.7001 7.15 90.0358 6.825C90.0358 6.5 90.3716 6.175 90.3716 5.85C90.3716 5.2 90.0358 4.875 90.0358 4.55C89.7001 4.225 89.3643 4.225 88.6928 4.225H78.9561V0.325H89.3643C91.0431 0.325 92.3861 0.975 93.3933 1.95C94.0648 3.25 94.7363 4.55 94.7363 5.85C94.7363 6.5 94.4006 7.15 94.4006 7.8C94.0648 8.45 93.7291 9.1 93.3933 9.425Z"
                  fill="url(#paint2_hero)"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Platform Interface */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <GlassCard className="p-6 sm:p-8 lg:p-10 mb-8">
            {/* Navigation Tabs */}
            <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
              <div className="flex flex-wrap gap-2 sm:gap-6">
                {navigationTabs.map((tab, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-4 py-2 text-sm sm:text-base font-semibold transition-all duration-300 relative ${
                      activeTab === index ? "text-brand-magenta" : "text-gray-400 hover:text-white"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tab.name}
                    {activeTab === index && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-magenta"
                        layoutId="activeTab"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Dynamic Main Headline */}
            <motion.h1
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              key={activeTab}
            >
              {activeTab === 0 && (
                <>
                  Plan your marketing campaigns, Search right Ad space for your brand from{" "}
                  <span className="text-brand-gradient">10M+ Ad options</span>
                </>
              )}
              {activeTab === 1 && (
                <>
                  Connect with top-rated advertising agencies and{" "}
                  <span className="text-brand-gradient">5000+ Expert Partners</span>
                </>
              )}
              {activeTab === 2 && (
                <>
                  Track, analyze and optimize your campaigns with{" "}
                  <span className="text-brand-gradient">Real-time Analytics</span>
                </>
              )}
            </motion.h1>

            {/* Dynamic Description */}
            <motion.p
              className="text-center text-gray-300 mb-8 sm:mb-12 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              key={`desc-${activeTab}`}
            >
              {currentTab.description}
            </motion.p>

            {/* Search Interface */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {/* Category */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white flex items-center gap-2">
                  <Tag className="w-4 h-4 text-brand-teal" />
                  {activeTab === 0 ? "Category" : activeTab === 1 ? "Agency Type" : "Metric Type"}
                </label>
                <Select
                  value={searchData.category}
                  onValueChange={(value) => setSearchData({ ...searchData, category: value })}
                >
                  <SelectTrigger className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all duration-300">
                    <SelectValue placeholder={
                      activeTab === 0
                        ? "Select Category"
                        : activeTab === 1
                        ? "Select Agency Type"
                        : "Select Metric"
                    } />
                  </SelectTrigger>
                  <SelectContent>
                  {activeTab === 0 && (
                    <>
                        <SelectItem value="none">Select Category</SelectItem>
                        <SelectItem value="billboard">Billboard</SelectItem>
                        <SelectItem value="transit">Transit</SelectItem>
                        <SelectItem value="digital">Digital Screens</SelectItem>
                        <SelectItem value="retail">Retail Spaces</SelectItem>
                        <SelectItem value="airport">Airport</SelectItem>
                        <SelectItem value="lifestyle">Lifestyle</SelectItem>
                    </>
                  )}
                  {activeTab === 1 && (
                    <>
                        <SelectItem value="none">Select Agency Type</SelectItem>
                        <SelectItem value="digital">Digital Marketing</SelectItem>
                        <SelectItem value="creative">Creative Agency</SelectItem>
                        <SelectItem value="media">Media Planning</SelectItem>
                        <SelectItem value="social">Social Media</SelectItem>
                    </>
                  )}
                  {activeTab === 2 && (
                    <>
                        <SelectItem value="none">Select Metric</SelectItem>
                        <SelectItem value="impressions">Impressions</SelectItem>
                        <SelectItem value="clicks">Click-through Rate</SelectItem>
                        <SelectItem value="conversions">Conversions</SelectItem>
                        <SelectItem value="roi">Return on Investment</SelectItem>
                    </>
                  )}
                  </SelectContent>
                </Select>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-purple" />
                  Location
                </label>
                <Select
                  value={searchData.location}
                  onValueChange={(value) => setSearchData({ ...searchData, location: value })}
                >
                  <SelectTrigger className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all duration-300">
                    <SelectValue placeholder={
                    activeTab === 0
                      ? "Where do you want to advertise?"
                      : activeTab === 1
                        ? "Agency location preference?"
                        : "Campaign location?"
                    } />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Select a location</SelectItem>
                    <SelectItem value="new-york">New York, NY</SelectItem>
                    <SelectItem value="london">London, UK</SelectItem>
                    <SelectItem value="dubai">Dubai, UAE</SelectItem>
                    <SelectItem value="tokyo">Tokyo, Japan</SelectItem>
                    <SelectItem value="los-angeles">Los Angeles, CA</SelectItem>
                    <SelectItem value="seattle">Seattle, WA</SelectItem>
                    <SelectItem value="seoul">Seoul, South Korea</SelectItem>
                    <SelectItem value="mumbai">Mumbai, India</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Start Date */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-magenta" />
                  {activeTab === 2 ? "From Date" : "Start Date"}
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-magenta focus:border-transparent transition-all duration-300"
                  value={searchData.startDate}
                  onChange={(e) => setSearchData({ ...searchData, startDate: e.target.value })}
                />
              </div>

              {/* End Date */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-white flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-teal" />
                  {activeTab === 2 ? "To Date" : "End Date"}
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all duration-300"
                  value={searchData.endDate}
                  onChange={(e) => setSearchData({ ...searchData, endDate: e.target.value })}
                />
              </div>
            </motion.div>

            {/* Dynamic Search Actions */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="flex items-center gap-3">
                {/* Removed Mic Button */}
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-brand-magenta to-brand-purple hover:from-brand-magenta/80 hover:to-brand-purple/80 text-white px-8 py-3 font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                  onClick={handleSearchAd}
                >
                  <currentTab.icon className="w-5 h-5 mr-2" />
                  {currentTab.buttonText}
                </Button>
              </div>
            </motion.div>
          </GlassCard>

          {/* Ad Locations Results */}
          {showAdLocations && activeTab === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <GlassCard className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Available Ad Spaces</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowAdLocations(false)}
                    className="border-gray-600 hover:border-brand-teal text-gray-300 hover:text-white"
                  >
                    Close
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {filteredAdLocations.length === 0 ? (
                    <div className="col-span-full text-center text-gray-400">No ad spaces found for your selection.</div>
                  ) : (
                    filteredAdLocations.map((location, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-brand-teal/50 transition-all duration-300 cursor-pointer group"
                      whileHover={{ scale: 1.02, y: -2 }}
                      onClick={() => openModal("contact")}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-brand-teal to-brand-purple flex items-center justify-center">
                          <location.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-brand-teal font-semibold">{location.type}</div>
                          <div className="text-sm font-bold text-white group-hover:text-brand-teal transition-colors">
                            {location.name}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-300">
                          <MapPin className="w-3 h-3" />
                          <span className="text-xs">{location.location}</span>
                        </div>
                        <div className="text-lg font-bold text-brand-magenta">{location.price}</div>
                      </div>
                      <Button
                        size="sm"
                        className="w-full mt-3 bg-gradient-to-r from-brand-magenta to-brand-purple hover:from-brand-magenta/80 hover:to-brand-purple/80"
                          onClick={e => {
                          e.stopPropagation()
                          openModal("contact")
                        }}
                      >
                        Book Now
                      </Button>
                    </motion.div>
                    ))
                  )}
                </div>
              </GlassCard>
            </motion.div>
          )}

          {/* Agency Results */}
          {showAgencies && activeTab === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <GlassCard className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Top Agencies</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowAgencies(false)}
                    className="border-gray-600 hover:border-brand-teal text-gray-300 hover:text-white"
                  >
                    Close
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {filteredAgencies.length === 0 ? (
                    <div className="col-span-full text-center text-gray-400">No agencies found for your selection.</div>
                  ) : (
                    filteredAgencies.map((agency, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-brand-teal/50 transition-all duration-300 cursor-pointer group"
                        whileHover={{ scale: 1.02, y: -2 }}
                        onClick={() => openModal("contact")}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-brand-teal to-brand-purple flex items-center justify-center">
                            <agency.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-xs text-brand-teal font-semibold">{agency.type}</div>
                            <div className="text-sm font-bold text-white group-hover:text-brand-teal transition-colors">
                              {agency.name}
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-gray-300">
                            <MapPin className="w-3 h-3" />
                            <span className="text-xs">{agency.location}</span>
                          </div>
                          <div className="text-xs text-gray-400">{agency.description}</div>
                        </div>
                        <Button
                          size="sm"
                          className="w-full mt-3 bg-gradient-to-r from-brand-magenta to-brand-purple hover:from-brand-magenta/80 hover:to-brand-purple/80"
                          onClick={e => {
                            e.stopPropagation()
                            openModal("contact")
                          }}
                        >
                          Contact Agency
                        </Button>
                      </motion.div>
                    ))
                  )}
                </div>
              </GlassCard>
            </motion.div>
          )}

          {/* Analytics Results */}
          {showAnalytics && activeTab === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <GlassCard className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Campaign Analytics</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowAnalytics(false)}
                    className="border-gray-600 hover:border-brand-teal text-gray-300 hover:text-white"
                  >
                    Close
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {filteredAnalytics.length === 0 ? (
                    <div className="col-span-full text-center text-gray-400">No analytics found for your selection.</div>
                  ) : (
                    filteredAnalytics.map((item, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-brand-teal/50 transition-all duration-300 group"
                        whileHover={{ scale: 1.02, y: -2 }}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-r from-brand-teal to-brand-purple flex items-center justify-center ${item.color}`}>
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-semibold text-gray-400">{item.title}</div>
                            <div className="text-lg font-bold text-white group-hover:text-brand-teal transition-colors">
                              {item.value}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <span className="font-semibold text-green-400">{item.change}</span>
                          <span className="text-gray-400">vs last period</span>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>
              </GlassCard>
            </motion.div>
          )}

          {/* App Download Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center"
          >
            <GlassCard className="p-6 sm:p-8">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Smartphone className="w-6 h-6 text-brand-teal" />
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  Manage end-to-end Marketing on your App. Download the ADmyBRAND App
                </h2>
              </div>

              <div className="flex flex-col items-center justify-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer"
                  href="https://play.google.com/store/apps/details?id=com.admybrand.adify&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-black rounded-xl p-3 flex items-center gap-3 min-w-[200px]">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Play className="w-4 h-4 text-white fill-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-gray-300">GET IT ON</div>
                      <div className="text-lg font-bold text-white">Google Play</div>
                    </div>
                  </div>
                </motion.a>
              </div>
            </GlassCard>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            className="grid grid-cols-3 gap-6 sm:gap-8 pt-8 mt-8 border-t border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            {[
              { value: "10M+", label: "AD SPACES", icon: Target, color: "text-brand-teal" },
              { value: "98%", label: "SUCCESS RATE", icon: TrendingUp, color: "text-brand-purple" },
              { value: "24/7", label: "AI SUPPORT", icon: BarChart3, color: "text-brand-magenta" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-center mb-2">
                  <stat.icon
                    className={`w-6 h-6 ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                </div>
                <div className={`text-2xl sm:text-3xl lg:text-4xl font-black ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-xs sm:text-sm font-semibold text-gray-400 tracking-wider leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
