"use client"

import { motion } from "framer-motion"
import { AnimatedText } from "@/components/animated-text"
import Link from "next/link"
import { usePageTheme } from "@/components/page-theme-provider"

export function WorksCTA() {
  const { colors } = usePageTheme()

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient - matching works hero section */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
        }}
      />

      {/* Animated background elements */}
      <motion.div
        className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white opacity-5"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
        }}
      />

      <motion.div
        className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-white opacity-5"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 18,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          delay: 1,
        }}
      />

      <motion.div
        className="absolute right-1/4 top-1/3 h-32 w-32 rounded-full bg-white opacity-5"
        animate={{
          scale: [1, 1.5, 1],
          x: [0, 40, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          delay: 2,
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mx-auto max-w-4xl rounded-xl p-8 md:p-12 relative overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
            }}
          />

          <motion.div
            className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white opacity-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 8,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
            }}
          />

          <motion.div
            className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white opacity-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              delay: 1,
            }}
          />

          <div className="relative z-10 text-center text-white">
            <AnimatedText
              text="Ready to Start Your Project?"
              tag="h2"
              className="mb-4 text-3xl font-bold md:text-4xl"
            />

            <AnimatedText
              text="Let's discuss how we can help bring your vision to life with our expertise in web and mobile development."
              className="mb-8 text-lg opacity-90"
              delay={0.2}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-medium transition-colors hover:bg-opacity-90"
                style={{ color: colors.primary }}
              >
                Get in Touch
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md border border-white px-8 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                Explore Our Services
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
