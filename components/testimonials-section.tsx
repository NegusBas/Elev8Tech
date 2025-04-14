"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedText } from "@/components/animated-text"
import { usePageTheme } from "@/components/page-theme-provider"

const testimonials = [
  {
    quote:
      "Elev8Tech has provided tremendous development for our Agree Me software. Their expertise in secure data handling and user-friendly interfaces has been crucial to our growth. The platform's security features and intuitive design have received outstanding feedback from our community.",
    name: "Donald Hockenhull Tolliver",
    company: "AGREE ME inc.",
    position: "CEO",
    image: "/confident-professional.png",
  },
  {
    quote:
      "Elev8Tech transformed our e-commerce platform. Their team integrated our inventory management seamlessly, and our online sales have increased by 65%. The real-time inventory updates have eliminated customer disappointment from out-of-stock items.",
    name: "Yewoubdar Mamo",
    company: "EVE Catering",
    position: "COO",
    image: "/confident-professional.png",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  // Set autoplay to false by default to disable auto-scrolling
  const [autoplay, setAutoplay] = useState(false)
  const { colors } = usePageTheme()

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // We'll keep this effect but since autoplay is false by default, it won't run
  // This allows us to easily re-enable autoplay in the future if needed
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, currentIndex])

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #b79c87 0%, #8c7a6a 100%)" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full"
          style={{ background: "rgba(183, 156, 135, 0.3)" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full"
          style={{ background: "rgba(183, 156, 135, 0.3)" }}
        ></div>
      </div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <AnimatedText
              text="What Our Clients Say"
              tag="h2"
              className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 dark:text-white"
            />
            <AnimatedText
              text="Don't just take our word for it. Here's what our clients have to say about working with Elev8Tech."
              className="max-w-[700px] text-gray-800/90 dark:text-gray-100/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              delay={0.2}
            />
          </div>
        </div>

        <div className="mx-auto max-w-4xl mt-16 relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full px-4"
              >
                <Card className="border-amber-200 dark:border-amber-700/50 shadow-lg bg-gray-800 dark:bg-gray-900">
                  <CardContent className="p-8 bg-gray-800 dark:bg-gray-900">
                    <div className="flex flex-col items-center gap-6">
                      <div className="flex-1">
                        <Quote className="h-10 w-10 mb-4 text-amber-400" />
                        <p className="text-lg text-gray-200 dark:text-gray-200 mb-6 italic">
                          "{testimonials[currentIndex].quote}"
                        </p>
                        <div>
                          <h4 className="font-semibold text-white dark:text-white">
                            {testimonials[currentIndex].name}
                          </h4>
                          <p className="text-sm text-gray-300 dark:text-gray-300">
                            {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-white/20 bg-white/20 hover:bg-white/30 backdrop-blur-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4 text-gray-900 dark:text-white" />
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 p-0 rounded-full ${
                  currentIndex === index ? "bg-gray-900 dark:bg-white" : "bg-gray-900/30 dark:bg-white/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-white/20 bg-white/20 hover:bg-white/30 backdrop-blur-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4 text-gray-900 dark:text-white" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
