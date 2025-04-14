"use client"

import { motion } from "framer-motion"
import { usePageTheme } from "@/components/page-theme-provider"
import { AnimatedText } from "@/components/animated-text"
import { useInView } from "react-intersection-observer"
import { CheckCircle } from "lucide-react"

const processSteps = [
  {
    title: "Client-Focused Approach",
    description:
      "We begin every project by understanding your business goals, target audience, and specific requirements to ensure our solution aligns perfectly with your needs.",
  },
  {
    title: "Collaborative Development",
    description:
      "Our development process is transparent and collaborative, with regular updates and opportunities for feedback to ensure the final product exceeds your expectations.",
  },
  {
    title: "Quality Assurance",
    description:
      "We rigorously test all our solutions across devices and browsers to ensure optimal performance, security, and user experience.",
  },
  {
    title: "Ongoing Support",
    description:
      "Our relationship doesn't end at launch. We provide ongoing support and maintenance to ensure your digital solution continues to perform at its best.",
  },
]

export function WorksProcess() {
  const { colors } = usePageTheme()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
      }}
    >
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

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <AnimatedText
            text="Our Approach to Excellence"
            tag="h2"
            className="mb-4 text-3xl font-bold md:text-4xl text-white"
          />
          <AnimatedText
            text="What sets our work apart is our commitment to quality, collaboration, and client satisfaction."
            className="text-lg text-white/90"
            delay={0.2}
          />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-start gap-4 rounded-xl bg-white/10 p-6 backdrop-blur-sm border border-white/10 shadow-lg"
            >
              <div className="mt-1 flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-white">{step.title}</h3>
                <p className="text-white/90">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
