"use client"

import { motion } from "framer-motion"
import { usePageTheme } from "@/components/page-theme-provider"
import { AnimatedText } from "@/components/animated-text"
import { useInView } from "react-intersection-observer"
import { Award, Lightbulb, Shield, Users, Target, BookOpen } from "lucide-react"

const values = [
  {
    title: "Excellence",
    description: "We strive for excellence in everything we do, from code quality to client communication.",
    icon: Award,
  },
  {
    title: "Innovation",
    description: "We embrace new technologies and approaches to solve complex problems in creative ways.",
    icon: Lightbulb,
  },
  {
    title: "Integrity",
    description: "We operate with honesty, transparency, and ethical standards in all our interactions.",
    icon: Shield,
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork, both within our team and with our clients.",
    icon: Users,
  },
  {
    title: "Client Success",
    description: "We measure our success by the success of our clients and the value we bring to their businesses.",
    icon: Target,
  },
  {
    title: "Continuous Learning",
    description:
      "We are committed to ongoing learning and professional development to stay at the forefront of our field.",
    icon: BookOpen,
  },
]

export function AboutValues() {
  const { colors } = usePageTheme()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 bg-card/80" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <AnimatedText
            text="Our Core Values"
            tag="h2"
            className="mb-4 text-3xl font-bold md:text-4xl"
            style={{ color: colors.secondary }}
          />
          <AnimatedText
            text="These principles guide everything we do at Elev8Tech, from how we work with clients to how we develop our solutions."
            className="text-lg text-foreground font-medium"
            delay={0.2}
          />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl border bg-background p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md text-center"
              style={{ borderColor: `${colors.primary}20` }}
            >
              <div
                className="absolute -right-16 -top-16 h-32 w-32 rounded-full opacity-10 transition-all group-hover:scale-150 group-hover:opacity-20"
                style={{ backgroundColor: colors.primary }}
              ></div>

              <motion.div
                className="mb-6 mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full"
                style={{ backgroundColor: `${colors.primary}15`, color: colors.primary }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <value.icon className="h-8 w-8" />
              </motion.div>

              <h3 className="mb-3 text-xl font-bold" style={{ color: colors.secondary }}>
                {value.title}
              </h3>

              <p className="text-foreground">{value.description}</p>

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
