"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AnimatedText } from "@/components/animated-text"
import { usePageTheme } from "@/components/page-theme-provider"

export function HeroSection() {
  const { colors } = usePageTheme()

  return (
    <section className="relative overflow-hidden pt-32 pb-20 bg-gradient-springhive">
      {/* Decorative circles */}
      <div className="absolute inset-0 z-0">
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
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Image
            src="/images/logo.png"
            alt="Elev8Tech Logo"
            width={80}
            height={80}
            className="mx-auto mb-8 brightness-150"
          />

          <AnimatedText
            text="Elevate Your Business with Cutting-Edge Web and Mobile Solutions"
            tag="h1"
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white"
          />

          <AnimatedText
            text="Empowering businesses through innovative web development, mobile applications, and custom software designed to drive growth and success in today's competitive landscape."
            className="text-lg text-white/90 mb-8 max-w-3xl mx-auto"
            delay={0.2}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-white rounded-md px-8 py-6 text-lg"
              style={{ backgroundColor: colors.accent }}
            >
              <Link href="/contact">Start Your Digital Transformation Today</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-white text-white bg-black/30 hover:bg-black/50 rounded-md px-8 py-6 text-lg"
            >
              <Link href="/works">View Our Portfolio</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
