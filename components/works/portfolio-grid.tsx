"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "FoodDelivery Mobile App",
    category: "Mobile Apps",
    description:
      "A food delivery application connecting local restaurants with customers, featuring real-time order tracking and secure payment processing.",
    image: "/images/fooddelivery-app.png",
    slug: "fooddelivery-mobile-app",
    hasDetailedCaseStudy: true,
  },
  {
    title: "TaskFlow Project Management",
    category: "SaaS",
    description:
      "A SaaS project management tool designed for remote teams, featuring task tracking, time management, and collaborative document editing. Coming in June 2025.",
    image: "/images/taskflow-app.png",
    slug: "taskflow-project-management",
    hasDetailedCaseStudy: true,
    comingSoon: true,
  },
  {
    title: "ShopSmart E-commerce Platform",
    category: "E-commerce",
    description:
      "A fully-featured e-commerce platform for a remote business selling nationwide, integrating inventory management, online ordering, and digital marketing.",
    image: "/images/shopsmart-ecommerce.jpeg",
    slug: "shopsmart-ecommerce-platform",
    hasDetailedCaseStudy: false,
  },
  {
    title: "Vlee",
    category: "Mobile Apps",
    description:
      "A video sharing mobile application that allows users to create and share content, follow creators, and engage with a community of content creators.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8433%202.jpg-sB1XTreN2u4fDFx3LqwmqDvdY1abal.jpeg",
    slug: "vlee-mobile-app",
    hasDetailedCaseStudy: false,
  },
]

export function PortfolioGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto p-8 rounded-xl bg-white">
      {projects.map((project, index) => (
        <div
          key={index}
          className="group relative"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="relative aspect-video overflow-hidden rounded-lg mb-4 shadow-md">
            {project.title === "Vlee" ? (
              // Use regular img tag for Vlee
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8433%202.jpg-sB1XTreN2u4fDFx3LqwmqDvdY1abal.jpeg"
                alt={project.title}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  hoveredIndex === index ? "scale-105" : "scale-100"
                }`}
              />
            ) : (
              // Use Next.js Image for other projects
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={600}
                className={`object-cover w-full h-full transition-transform duration-500 ${
                  hoveredIndex === index ? "scale-105" : "scale-100"
                }`}
                unoptimized={true}
              />
            )}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}
            ></div>
            {project.hasDetailedCaseStudy && (
              <div
                className={`absolute bottom-0 left-0 w-full p-6 transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <Link
                  href={`/works/${project.slug}`}
                  className="inline-flex items-center text-white font-medium hover:underline"
                >
                  View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
          <div>
            <div className="mb-2">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                {project.category}
              </span>
              {project.comingSoon && (
                <span className="inline-block ml-2 px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
                  Coming Soon
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
            {project.hasDetailedCaseStudy ? (
              <Link
                href={`/works/${project.slug}`}
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                View Details <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            ) : (
              <Link href="/contact" className="inline-flex items-center text-primary font-medium hover:underline">
                Request Information <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
