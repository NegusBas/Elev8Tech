"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { ArrowRight, Globe, Smartphone, Code, ShoppingCart, Palette, BarChart } from "lucide-react"
import { AnimatedText } from "@/components/animated-text"
import { usePageTheme } from "@/components/page-theme-provider"

const services = [
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Web Development",
    description:
      "Custom websites built with the latest technologies to deliver exceptional user experiences and drive business growth.",
    href: "/services/web-development",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications for iOS and Android devices that engage users and extend your brand reach.",
    href: "/services/mobile-apps",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Custom Software",
    description:
      "Tailored software solutions designed to address your specific business needs and streamline operations.",
    href: "/services/custom-software",
  },
  {
    icon: <ShoppingCart className="h-6 w-6" />,
    title: "E-commerce Solutions",
    description:
      "Online stores and marketplaces built to drive sales, enhance customer experience, and grow your digital revenue.",
    href: "/services/ecommerce",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "UI/UX Design",
    description:
      "User-centered design that creates intuitive and engaging digital experiences that convert visitors into customers.",
    href: "/services/ui-ux-design",
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Digital Marketing",
    description:
      "Strategic marketing services to increase your online presence, drive qualified traffic, and boost conversions.",
    href: "/services/digital-marketing",
  },
]

export function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { colors } = usePageTheme()

  return (
    <section ref={ref} className="py-24 relative">
      {/* Add an overlay to ensure text readability */}
      <div
        className="absolute inset-0 bg-black/50 dark:bg-black/70 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/vision-background.jpg')",
        }}
      ></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimatedText text="Our Services" tag="h2" className="text-3xl md:text-4xl font-bold mb-4 text-white" />
          <AnimatedText
            text="We offer a comprehensive range of digital services to help your business grow and succeed in the digital landscape."
            className="text-lg text-white/90"
            delay={0.2}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all hover:shadow-md hover:-translate-y-1"
            >
              <div
                className="w-12 h-12 flex items-center justify-center rounded-full mb-4"
                style={{ backgroundColor: `${colors.primary}20`, color: "white" }}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
              <p className="text-white/80 mb-4">{service.description}</p>
              <Link
                href="/contact"
                className="inline-flex items-center font-medium hover:underline text-white group-hover:text-primary-foreground"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-md bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 text-white font-medium transition-all"
          >
            View All Services <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
