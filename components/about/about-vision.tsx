"use client"

import { motion } from "framer-motion"
import { usePageTheme } from "@/components/page-theme-provider"
import { AnimatedText } from "@/components/animated-text"
import { useInView } from "react-intersection-observer"

export function AboutVision() {
  const { colors } = usePageTheme()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      className="py-24"
      ref={ref}
      style={{
        backgroundColor: colors.accent,
      }}
    >
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <AnimatedText
            text="Our Vision for the Future"
            tag="h2"
            className="mb-4 text-3xl font-bold md:text-4xl text-white"
          />
          <AnimatedText
            text="We envision a world where technology elevates humanity, connecting businesses with their customers in meaningful ways."
            className="text-lg font-medium text-white"
            delay={0.2}
          />
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div
              className="rounded-xl border p-6"
              style={{ borderColor: `${colors.primary}20`, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <h3 className="mb-4 text-xl font-bold text-white">Beyond the Horizon</h3>
              <div className="space-y-4 text-white">
                <p>
                  At Elev8Tech, we don't just build websites and applications; we create digital experiences that
                  transcend the ordinary. Our vision extends beyond current technological limitations, reaching for
                  possibilities that elevate businesses to new heights.
                </p>
                <p>
                  We believe that technology should be both beautiful and functional, creating seamless connections
                  between businesses and their audiences. Like the ancient architects who built wonders that stood the
                  test of time, we craft digital solutions designed to evolve and endure.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl border p-6"
              style={{ borderColor: `${colors.primary}20`, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <h3 className="mb-4 text-xl font-bold text-white">Building Digital Wonders</h3>
              <div className="space-y-4 text-white">
                <p>
                  Just as ancient civilizations built structures that inspired awe, we create digital experiences that
                  captivate and engage. Our approach combines cutting-edge technology with timeless design principles to
                  build solutions that stand out in today's crowded digital landscape.
                </p>
                <p>
                  We see a future where technology enhances human connection rather than replacing it, where digital
                  tools empower businesses to tell their stories more effectively and reach their audiences more
                  authentically.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              className="relative rounded-xl overflow-hidden shadow-2xl border h-full flex items-center justify-center p-8"
              style={{
                borderColor: `${colors.primary}30`,
                backgroundColor: colors.primary,
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent}80 100%)`,
              }}
            >
              <div className="text-center">
                <div className="w-16 h-1 mb-4 mx-auto rounded" style={{ backgroundColor: colors.primary }}></div>
                <h3 className="text-2xl font-bold mb-2 text-white">Elevating Digital Experiences</h3>
                <p className="text-white font-medium">
                  Where imagination meets innovation, creating digital landscapes that inspire and transform.
                </p>
              </div>
            </div>

            <div
              className="absolute -bottom-4 -right-4 w-2/3 h-2/3 -z-10 rounded-xl"
              style={{ backgroundColor: `${colors.primary}15` }}
            ></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
