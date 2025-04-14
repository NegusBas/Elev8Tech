"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

// Remove framer-motion dependency
const featuredProjects = [
  {
    title: "FoodDelivery Mobile App",
    category: "Mobile Apps",
    description:
      "A food delivery application connecting local restaurants with customers, featuring real-time order tracking and secure payment processing.",
    image: "/images/fooddelivery-app.png",
    slug: "fooddelivery-mobile-app",
  },
  {
    title: "TaskFlow Project Management",
    category: "SaaS",
    description:
      "A SaaS project management tool designed for remote teams, featuring task tracking, time management, and collaborative document editing. Coming in June 2025.",
    image: "/images/taskflow-app.png",
    slug: "taskflow-project-management",
  },
]

const otherProjects = [
  {
    title: "ShopSmart E-commerce Platform",
    category: "E-commerce",
    image: "/images/elevate-product.png",
    externalLink: "https://elevate-seamoss.com",
  },
  {
    title: "Vlee",
    category: "Mobile Apps",
    image: "/images/vlee-app.png",
    externalLink: "https://vlee.app",
  },
  {
    title: "Elev8Tech Corporate Website",
    category: "Web Development",
    image: "/images/elev8tech-website.jpeg",
    externalLink: "https://elev8tech.co",
  },
]

export default function WorksPageClient() {
  // Add animation states without framer-motion
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#4a0080] to-[#8a2be2] pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Background image */}
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Diverse team of professionals collaborating"
            fill
            className="object-cover"
            priority
          />

          {/* Semi-transparent gradient overlay */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: `linear-gradient(135deg, rgba(74, 0, 128, 0.85) 0%, rgba(138, 43, 226, 0.85) 100%)`,
            }}
          />

          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white opacity-10"></div>
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
              Digital Solutions Portfolio
            </h1>
            <p
              className={`text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto transition-opacity duration-1000 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
              Our portfolio features various types of websites and applications that we have designed and built for
              clients. We have either built these solutions from scratch or heavily customized them for specific needs.
            </p>
            <Link
              href="/contact"
              className={`inline-block bg-white text-[#4a0080] hover:bg-white/90 rounded-full px-8 py-3 font-medium transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              Get Your Company's Website Today
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Featured Projects</h2>
            <p className="text-lg text-gray-600">
              Explore our highlighted projects that showcase our expertise in web and mobile development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {featuredProjects.map((project, index) => (
              <div key={index} className="group">
                <div className="relative aspect-video overflow-hidden rounded-lg mb-6 shadow-lg">
                  <Image
                    src={project.image || "/placeholder.svg?height=600&width=800"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      href={`/works/${project.slug}`}
                      className="inline-flex items-center text-white font-medium hover:underline"
                    >
                      View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-[#4a0080]/20 text-[#4a0080] rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link
                    href={`/works/${project.slug}`}
                    className="inline-flex items-center text-[#4a0080] font-medium hover:underline"
                  >
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#4a0080]/30"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#8a2be2]/30"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">More Projects</h2>
            <p className="text-lg text-gray-300">
              Browse through our additional work showcasing our versatility and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {otherProjects.map((project, index) => (
              <div key={index} className="group">
                <div className="relative aspect-video overflow-hidden rounded-lg mb-4 shadow-md">
                  <Image
                    src={project.image || "/placeholder.svg?height=600&width=800"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div>
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-[#4a0080]/20 text-[#4a0080] rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  {project.externalLink ? (
                    <a
                      href={project.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#8a2be2] font-medium hover:underline"
                    >
                      Visit Website <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  ) : (
                    <p className="text-gray-400 text-sm italic">Project details available upon request</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Purple gradient background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(135deg, #4a0080 0%, #8a2be2 100%)",
          }}
        />

        {/* Decorative elements */}
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white opacity-10"></div>
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white opacity-10"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-md">
              We firmly believe that everyone should own an eye-catching website
            </h2>
            <p className="text-xl mb-8 text-white opacity-90">
              Let's discuss how we can help bring your vision to life with our expertise in web and mobile development.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white hover:bg-white/90 rounded-full px-8 py-3 font-medium shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ color: "#6200EA" }}
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
