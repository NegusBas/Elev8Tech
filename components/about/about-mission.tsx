"use client"

import { motion } from "framer-motion"
import { usePageTheme } from "@/components/page-theme-provider"
import { AnimatedText } from "@/components/animated-text"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export function AboutMission() {
  const { colors } = usePageTheme()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="our-mission" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <AnimatedText
            text="Our Mission & Story"
            tag="h2"
            className="mb-4 text-3xl font-bold md:text-4xl text-black"
            style={{ color: "black" }}
          />
          <AnimatedText
            text="Empowering businesses through innovative technology solutions that drive growth and success."
            className="text-lg text-foreground font-medium"
            delay={0.2}
          />
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              className="absolute -left-4 -top-4 h-24 w-24 rounded-full"
              style={{ backgroundColor: `${colors.primary}20` }}
            ></div>
            <div
              className="absolute -right-4 -bottom-4 h-32 w-32 rounded-full"
              style={{ backgroundColor: `${colors.primary}15` }}
            ></div>

            <div
              className="relative overflow-hidden rounded-xl border shadow-lg"
              style={{ borderColor: `${colors.primary}20` }}
            >
              <Image
                src="/images/newage.jpeg"
                alt="Our vision of elevating technology"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-tr from-black/80 via-black/60 to-black/30 p-8 text-center text-white">
                <h3 className="mb-4 text-3xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-wide">
                  <span className="bg-black/40 px-4 py-1 rounded-md backdrop-blur-sm">Our Journey</span>
                </h3>
                <p className="mb-6 max-w-md font-medium text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)] bg-black/30 p-3 rounded-md backdrop-blur-sm">
                  Founded in 2021, Elev8Tech began with a simple mission: to help businesses leverage technology to grow
                  and succeed. What started as a small team of passionate developers has grown into a full-service
                  digital agency with expertise across web development, mobile applications, and custom software
                  solutions.
                </p>
                <div className="h-1 w-16 rounded" style={{ backgroundColor: colors.primary }}></div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border p-6"
              style={{ borderColor: `${colors.primary}20`, backgroundColor: `${colors.primary}05` }}
            >
              <h3 className="mb-4 text-xl font-bold text-black">Our Beginning</h3>
              <div className="space-y-4 text-foreground">
                <p>
                  Elev8Tech was born from a profound belief that technology should be accessible to businesses of all
                  sizes. Our founder, Basleal Ayinalem, experienced firsthand the challenges small businesses face when
                  trying to establish their digital presence. After working for tech corporations, he saw how smaller
                  companies were often priced out of quality digital solutions.
                </p>
                <p>
                  In 2021, Basleal gathered a small team of like-minded developers who shared his vision: to democratize
                  technology and provide affordable, high-quality digital solutions that could truly elevate businesses
                  to new heights. The name "Elev8Tech" emerged from our core mission – to elevate companies beyond what
                  they thought possible.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl border p-6"
              style={{ borderColor: `${colors.primary}20` }}
            >
              <h3 className="mb-4 text-xl font-bold text-black">Our Vision</h3>
              <div className="space-y-4 text-foreground">
                <p>
                  What drives us is seeing the transformation in our clients' businesses. We believe that with the right
                  digital tools and strategy, any company can reach remarkable heights. Our approach isn't just about
                  building websites or apps; it's about understanding your business challenges and crafting solutions
                  that propel you forward.
                </p>
                <p>
                  The "8" in our name represents our commitment to going above and beyond – exceeding expectations and
                  pushing boundaries. We don't just aim to meet industry standards; we strive to elevate them, just as
                  we elevate our clients' digital presence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
