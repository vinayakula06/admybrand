"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { scrollToSection, scrollToTop } from "@/utils/scroll"
import { openModal } from "@/utils/modal"

const footerLinks = {
  product: [
    { name: "Features", action: () => scrollToSection("features") },
    { name: "Pricing", action: () => scrollToSection("pricing") },
    { name: "Demo", action: () => scrollToSection("demo") },
    { name: "API", action: () => openModal("contact") },
  ],
  company: [
    { name: "About", action: () => scrollToSection("about") },
    { name: "Blog", action: () => scrollToSection("blog") },
    { name: "Careers", action: () => openModal("contact") },
    { name: "Contact", action: () => openModal("contact") },
  ],
  resources: [
    { name: "Documentation", action: () => openModal("contact") },
    { name: "Help Center", action: () => openModal("contact") },
    { name: "Community", action: () => openModal("contact") },
    { name: "Status", action: () => openModal("contact") },
  ],
  legal: [
    { name: "Privacy Policy", action: () => openModal("contact") },
    { name: "Terms of Service", action: () => openModal("contact") },
    { name: "Cookie Policy", action: () => openModal("contact") },
    { name: "GDPR", action: () => openModal("contact") },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/admybrand/", label: "Facebook" },
  { icon: Twitter, href: "https://x.com/admybrand?lang=en", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/Admybrand/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/admybrand?originalSubdomain=in", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="relative bg-gray-900 border-t border-gray-800">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-purple-900/10 to-blue-900/10"
          animate={{
            background: [
              "linear-gradient(135deg, rgba(127,29,29,0.1) 0%, rgba(88,28,135,0.1) 50%, rgba(30,58,138,0.1) 100%)",
              "linear-gradient(135deg, rgba(30,58,138,0.1) 0%, rgba(127,29,29,0.1) 50%, rgba(88,28,135,0.1) 100%)",
              "linear-gradient(135deg, rgba(88,28,135,0.1) 0%, rgba(30,58,138,0.1) 50%, rgba(127,29,29,0.1) 100%)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center gap-3 mb-6 cursor-pointer"
              onClick={() => scrollToSection("home")}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {/* ADmyBRAND Logo */}
              <motion.img
                src="/images/admybrand-logo.svg"
                alt="ADmyBRAND"
                className="h-10 w-auto"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                onError={(e) => {
                  // Fallback to JPEG if SVG fails
                  e.currentTarget.src = "/images/admybrand-logo.jpeg"
                }}
              />
              <div>
                <p className="text-gray-400 text-sm">AI-Powered Marketing</p>
              </div>
            </motion.div>

            <motion.p
              className="text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Transform your marketing with AI-powered campaigns that deliver real results. Join thousands of brands
              already growing with ADmyBRAND.
            </motion.p>

            {/* Contact Info */}
            <div className="space-y-3">
              <motion.div
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors cursor-pointer"
                onClick={() => openModal("contact")}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="w-4 h-4 text-red-400" />
                <span className="text-sm">hello@admybrand.com</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors cursor-pointer"
                onClick={() => openModal("contact")}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="w-4 h-4 text-red-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors cursor-pointer"
                onClick={() => openModal("contact")}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-4 h-4 text-red-400" />
                <span className="text-sm">San Francisco, CA</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <button
                    onClick={link.action}
                    className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <button
                    onClick={link.action}
                    className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <button
                    onClick={link.action}
                    className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <button
                    onClick={link.action}
                    className="text-gray-300 hover:text-white transition-colors text-sm text-left"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="border-t border-gray-800 pt-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-white font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-300 text-sm">Get the latest marketing insights and product updates.</p>
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={() => openModal("contact")}
                className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Free Trial
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <motion.p
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              © 2025 ADmyBRAND. All rights reserved. Built with ❤️ for marketers worldwide.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-red-600 hover:to-pink-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>

            {/* Scroll to Top */}
            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-red-600 hover:to-pink-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
