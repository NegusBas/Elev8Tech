"use client"

import { motion } from "framer-motion"
import { usePageTheme } from "@/components/page-theme-provider"
import { useInView } from "react-intersection-observer"
import { Clock, Award, Users, Code } from "lucide-react"

const stats = [
  { icon: Clock, value: "3+", label: "Years of Experience" },
  { icon: Award, value: "55+", label: "Projects Completed" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: Code, value: "100K+", label: "Lines of Code" },
]

export function AboutStats() {
  const { colors } = usePageTheme()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-24 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl" style={{ color: colors.secondary }}>
            Our Impact
          </h2>
          <p className="text-lg text-foreground font-medium">
            Numbers that reflect our commitment to excellence and client satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-xl border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md text-center"
              style={{ borderColor: `${colors.primary}20` }}
            >
              <motion.div
                className="mb-6 mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full"
                style={{ backgroundColor: `${colors.primary}15`, color: colors.primary }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <stat.icon className="h-8 w-8" />
              </motion.div>

              <motion.div
                className="text-4xl font-bold mb-2"
                style={{ color: colors.primary }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
              >
                {stat.value}
              </motion.div>

              <div className="text-lg text-foreground">{stat.label}</div>

              <div
                className="mt-6 h-1 w-12 mx-auto rounded transition-all group-hover:w-16"
                style={{ backgroundColor: colors.primary }}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
