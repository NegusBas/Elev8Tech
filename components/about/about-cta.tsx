"use client"

import { motion } from "framer-motion"
import { usePageTheme } from "@/components/page-theme-provider"
import { AnimatedText } from "@/components/animated-text"
import Link from "next/link"

export function AboutCTA() {
  const { colors } = usePageTheme()

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl rounded-3xl p-8 md:p-12 relative overflow-hidden">
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

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white md:text-left text-center">
              <AnimatedText text="Ready to Work With Us?" tag="h2" className="mb-4 text-3xl font-bold md:text-4xl" />

              <AnimatedText
                text="Let's discuss how our team can help bring your digital vision to life."
                className="text-lg opacity-90"
                delay={0.2}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-medium transition-colors hover:bg-opacity-90"
                style={{ color: colors.primary }}
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
