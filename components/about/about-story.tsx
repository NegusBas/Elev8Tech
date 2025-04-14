"use client"

import { motion } from "framer-motion"
import { usePageTheme } from "@/components/page-theme-provider"
import { AnimatedText } from "@/components/animated-text"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export function AboutStory() {
  const { colors } = usePageTheme()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="our-story" className="py-24 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <AnimatedText
            text="Our Story"
            tag="h2"
            className="mb-4 text-3xl font-bold md:text-4xl"
            style={{ color: colors.secondary }}
          />
          <AnimatedText
            text="From humble beginnings to where we are today"
            className="text-lg text-gray-600 dark:text-gray-400"
            delay={0.2}
          />
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="rounded-xl border p-6"
                style={{ borderColor: `${colors.primary}20`, backgroundColor: `${colors.primary}05` }}
              >
                <h3 className="mb-4 text-xl font-bold" style={{ color: colors.secondary }}>
                  Our Beginning
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    Elev8Tech was born from a profound belief that technology should be accessible to businesses of all
                    sizes. Our founder, Basleal Ayinalem, experienced firsthand the challenges small businesses face
                    when trying to establish their digital presence. After working for tech corporations, he saw how
                    smaller companies were often priced out of quality digital solutions.
                  </p>
                  <p>
                    In 2021, Basleal gathered a small team of like-minded developers who shared his vision: to
                    democratize technology and provide affordable, high-quality digital solutions that could truly
                    elevate businesses to new heights. The name "Elev8Tech" emerged from our core mission – to elevate
                    companies beyond what they thought possible.
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
                <h3 className="mb-4 text-xl font-bold" style={{ color: colors.secondary }}>
                  Our Mission
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    What drives us is seeing the transformation in our clients' businesses. We believe that with the
                    right digital tools and strategy, any company can reach remarkable heights. Our approach isn't just
                    about building websites or apps; it's about understanding your business challenges and crafting
                    solutions that propel you forward.
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

          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.7 }}
              className="relative h-full"
            >
              <div className="sticky top-24">
                <div className="relative">
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
                      src="/placeholder.svg?height=600&width=800"
                      alt="Our journey"
                      width={800}
                      height={600}
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-tr from-black/60 via-black/40 to-transparent p-8 text-center text-white">
                      <h3 className="mb-4 text-2xl font-bold">Our Journey</h3>
                      <p className="mb-6 max-w-md">
                        Founded in 2021, Elev8Tech began with a simple mission: to help businesses leverage technology
                        to grow and succeed. What started as a small team of passionate developers has grown into a
                        full-service digital agency with expertise across web development, mobile applications, and
                        custom software solutions.
                      </p>
                      <div className="h-1 w-16 rounded" style={{ backgroundColor: colors.primary }}></div>
                    </div>
                  </div>

                  <div className="mt-8 rounded-xl border p-6" style={{ borderColor: `${colors.primary}20` }}>
                    <h3 className="mb-4 text-xl font-bold" style={{ color: colors.secondary }}>
                      Today
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Today, Elev8Tech is recognized for its technical excellence, creative approach, and commitment to
                      client success. We continue to evolve and adapt to the ever-changing digital landscape, always
                      staying at the forefront of technology trends and best practices.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
