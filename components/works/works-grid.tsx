"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { usePageTheme } from "@/components/page-theme-provider"

const categories = ["All", "E-commerce", "Mobile Apps", "SaaS"]

const projects = [
  {
    title: "ShopSmart E-commerce Platform",
    category: "E-commerce",
    description:
      "A fully-featured e-commerce platform for a remote business selling nationwide, integrating inventory management, online ordering, and digital marketing.",
    image: "/images/shopsmart-ecommerce.jpeg",
    techStack: ["Helium 10", "Jungle Scout", "Alibaba", "Adobe Illustrator"],
    slug: "shopsmart-ecommerce-platform",
    results: [
      "65% increase in online sales within the first quarter",
      "38% reduction in inventory management costs",
      "72% increase in customer satisfaction ratings",
    ],
  },
  {
    title: "TaskFlow Project Management",
    category: "SaaS",
    description:
      "A SaaS project management tool designed for remote teams, featuring task tracking, time management, and collaborative document editing.",
    image: "/images/taskflow-app.png",
    techStack: ["Vue.js", "Firebase", "Node.js", "Socket.io"],
    slug: "taskflow-project-management",
    results: [
      "Team productivity increased by 32%",
      "Project delivery times reduced by 40%",
      "Seamless integration with existing tools",
    ],
  },
  {
    title: "Vlee",
    category: "Mobile Apps",
    description:
      "A video sharing mobile application that allows users to create and share content, follow creators, and engage with a community of content creators.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8433%202.jpg-sB1XTreN2u4fDFx3LqwmqDvdY1abal.jpeg",
    techStack: ["React Native", "GraphQL", "AWS Amplify", "Swift"],
    slug: "vlee-mobile-app",
    results: [
      "App reached 50,000 downloads in first quarter",
      "78% user retention rate",
      "Featured in App Store's 'New Apps We Love'",
    ],
  },
]

export function WorksGrid() {
  const [activeCategory, setActiveCategory] = useState("All")
  const { colors } = usePageTheme()

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-md px-6 py-2 text-sm font-medium transition-all ${
                activeCategory === category ? "bg-primary text-white" : "bg-card text-foreground hover:bg-muted"
              }`}
              style={{
                backgroundColor: activeCategory === category ? colors.primary : undefined,
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-lg border border-border bg-card shadow-md transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative aspect-video overflow-hidden">
                {project.title === "Vlee" ? (
                  // Use regular img tag for Vlee
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8433%202.jpg-sB1XTreN2u4fDFx3LqwmqDvdY1abal.jpeg"
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  // Use Next.js Image for other projects
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={450}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized={true}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <span
                    className="inline-block rounded-full px-2.5 py-0.5 text-xs font-medium"
                    style={{ backgroundColor: `${colors.primary}20`, color: colors.primary }}
                  >
                    {project.category}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">{project.title}</h3>
                <p className="mb-4 text-muted-foreground">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-foreground">Key Results:</h4>
                  <ul className="space-y-1">
                    {project.results.map((result, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/works/${project.slug}`}
                  className="inline-flex items-center font-medium hover:underline"
                  style={{ color: colors.primary }}
                >
                  View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
