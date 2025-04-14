"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedText } from "@/components/animated-text"
import { usePageTheme } from "@/components/page-theme-provider"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  const { colors } = usePageTheme()

  return (
    <section className="py-24" style={{ backgroundColor: "#b79c87" }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto rounded-xl p-8 md:p-12 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primary}90 100%)`,
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

          <div className="relative z-10 text-white">
            <AnimatedText
              text="Ready to Elevate Your Digital Presence?"
              tag="h2"
              className="text-3xl md:text-4xl font-bold mb-4"
            />

            <AnimatedText
              text="Let's discuss how our expertise in web and mobile development can help bring your ideas to life and drive your business forward."
              className="text-lg mb-8 opacity-90"
              delay={0.2}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button
                asChild
                className="bg-accent text-white hover:bg-accent/90 rounded-md px-8 py-6 text-lg"
                style={{ backgroundColor: colors.accent }}
              >
                <Link href="/contact">Start Your Digital Transformation Today</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white/10 rounded-md px-8 py-6 text-lg"
              >
                <Link href="/services">
                  Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
