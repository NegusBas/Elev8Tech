"use client"

import { motion } from "framer-motion"
import { AnimatedText } from "@/components/animated-text"
import { usePageTheme } from "@/components/page-theme-provider"

export function ServicesHero() {
  const { colors } = usePageTheme()

  return (
    <section className="relative overflow-hidden pt-40 pb-20">
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

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white"
          >
            Our Services
          </motion.div>

          <AnimatedText
            text="Comprehensive Digital Solutions"
            tag="h1"
            className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
          />

          <AnimatedText
            text="We offer a wide range of web and mobile development services to help your business grow and succeed in the digital landscape."
            className="mb-8 max-w-2xl mx-auto text-lg text-white/90"
            delay={0.2}
            speed={0.01}
          />
        </div>
      </div>
    </section>
  )
}
