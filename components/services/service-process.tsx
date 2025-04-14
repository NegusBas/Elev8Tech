"use client"

import { motion } from "framer-motion"
import { usePageTheme } from "@/components/page-theme-provider"
import { AnimatedText } from "@/components/animated-text"
import { useInView } from "react-intersection-observer"

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "We start by understanding your business goals, target audience, and project requirements to create a detailed roadmap.",
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description:
      "Our designers create wireframes and interactive prototypes to visualize the user experience before development begins.",
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "Our developers build your solution using the latest technologies, with rigorous testing at every stage.",
  },
  {
    step: "04",
    title: "Deployment & Support",
    description: "We launch your solution and provide ongoing support and maintenance to ensure its continued success.",
  },
]

export function ServiceProcess() {
  const { colors } = usePageTheme()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden" style={{ backgroundColor: `${colors.primary}05` }}>
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute left-0 top-0 h-full w-1/2 -translate-x-1/3 transform opacity-10"
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="400"
            cy="400"
            r="200"
            fill="none"
            stroke={colors.primary}
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.circle
            cx="400"
            cy="400"
            r="300"
            fill="none"
            stroke={colors.primary}
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.circle
            cx="400"
            cy="400"
            r="400"
            fill="none"
            stroke={colors.primary}
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
          />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <AnimatedText
            text="Our Development Process"
            tag="h2"
            className="mb-4 text-3xl font-bold md:text-4xl"
            style={{ color: colors.secondary }}
          />
          <AnimatedText
            text="We follow a structured approach to ensure that every project is delivered on time, within budget, and to the highest standards of quality."
            className="text-lg text-gray-600 dark:text-gray-400"
            delay={0.2}
          />
        </div>

        <div className="relative">
          <div
            className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 transform"
            style={{ backgroundColor: `${colors.primary}30` }}
          ></div>

          <div className="space-y-24">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col items-center gap-8`}
              >
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold text-white z-10"
                  style={{ backgroundColor: colors.primary }}
                >
                  {step.step}
                </div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-left" : "md:text-right"} text-center`}>
                  <h3 className="mb-3 text-2xl font-bold" style={{ color: colors.secondary }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
