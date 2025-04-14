"use client"

import { motion } from "framer-motion"
import { usePageTheme } from "@/components/page-theme-provider"
import { AnimatedText } from "@/components/animated-text"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Github, Linkedin } from "lucide-react"

const team = [
  {
    name: "Basleal Ayinalem",
    role: "Founder & Lead Engineer",
    bio: "With over 7 years of experience in software development and business leadership, Basleal founded Elev8Tech to help businesses leverage technology for growth.",
    image: "/images/basleal-new.jpg", // Updated image path
    social: {
      linkedin: "https://www.linkedin.com/in/basleal-ayinalem-aab3162b4/",
      github: "https://github.com/negusbas",
    },
  },
  {
    name: "Josiah Orozco",
    role: "Lead Developer",
    bio: "Josiah brings extensive full-stack development expertise, specializing in creating scalable web applications and mentoring junior developers.",
    image: "/images/josiah.jpg", // Updated to use the new image with simpler filename
    social: {
      linkedin: "#",
      github: "#",
    },
  },
]

export function AboutTeam() {
  const { colors } = usePageTheme()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="our-team" className="py-24 bg-card" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <AnimatedText
            text="Meet Our Team"
            tag="h2"
            className="mb-4 text-3xl font-bold md:text-4xl"
            style={{ color: colors.secondary }}
          />
          <AnimatedText
            text="The talented professionals behind Elev8Tech's success. We're passionate about technology and committed to your success."
            className="text-lg text-foreground font-medium"
            delay={0.2}
          />
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-xl bg-background shadow-lg text-center"
            >
              <div className="p-6">
                <div
                  className="relative mx-auto mb-6 h-48 w-48 overflow-hidden rounded-full border-4 shadow-md"
                  style={{ borderColor: colors.primary }}
                >
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized={true}
                    priority={index === 0 || index === 1}
                  />
                </div>

                <h3 className="mb-1 text-xl font-bold text-black">{member.name}</h3>
                <p className="mb-4 text-sm font-medium" style={{ color: colors.primary }}>
                  {member.role}
                </p>
                <p className="mb-6 text-foreground">{member.bio}</p>

                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full p-2 transition-colors"
                    style={{ backgroundColor: `${colors.primary}15`, color: colors.primary }}
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full p-2 transition-colors"
                    style={{ backgroundColor: `${colors.primary}15`, color: colors.primary }}
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="h-1 w-full transition-all" style={{ backgroundColor: colors.primary }}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
