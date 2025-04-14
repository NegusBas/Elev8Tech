"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Zap, DollarSign, Users } from "lucide-react"
import { usePageTheme } from "@/components/page-theme-provider"

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Faster Turnaround",
    description: "Delivering quality websites swiftly to keep your business ahead of the competition.",
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: "Competitive Pricing",
    description: "Maximizing value with cost-effective digital solutions tailored to your budget.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Experienced Team",
    description: "Over 30 years of collective industry experience ensuring excellence in every project.",
  },
]

export function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { colors } = usePageTheme()

  return (
    <section ref={ref} className="py-24" style={{ backgroundColor: "#b79c87" }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose Elev8Tech?</h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Our commitment to excellence and client satisfaction sets us apart in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-white/90 dark:bg-gray-800/90 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full mb-4"
                style={{ backgroundColor: `${colors.primary}20`, color: colors.primary }}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
