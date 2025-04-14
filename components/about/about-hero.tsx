"use client"

import { motion } from "framer-motion"
import { usePageTheme } from "@/components/page-theme-provider"
import { AnimatedText } from "@/components/animated-text"

export function AboutHero() {
  const { colors } = usePageTheme()

  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
        }}
      />

      {/* Animated background elements */}
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

      <div className="container relative z-10 mx-auto px-4 md:px-6 -mt-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white"
          >
            About Us
          </motion.div>

          <AnimatedText
            text="Elevating Businesses Through Technology"
            tag="h1"
            className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
          />

          <AnimatedText
            text="We are a team of passionate developers, designers, and digital strategists dedicated to helping businesses succeed in the digital world through affordable, scalable tech solutions."
            className="mb-8 max-w-2xl mx-auto text-lg text-white font-medium"
            delay={0.2}
            speed={0.01}
          />

          <AnimatedText
            text="Elevating your digital presence to new heights - where innovation meets imagination."
            className="mb-4 max-w-2xl mx-auto text-lg text-white font-medium"
            delay={0.3}
            speed={0.01}
          />
        </div>
      </div>
    </section>
  )
}
