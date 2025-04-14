"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePageTheme } from "@/components/page-theme-provider"
import { AnimatedText } from "@/components/animated-text"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is the typical timeline for a web development project?",
    answer:
      "The timeline varies depending on the complexity of the project. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. During our initial consultation, we'll provide a more accurate timeline based on your specific requirements.",
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer:
      "Yes, we offer various maintenance and support packages to ensure your website or application continues to run smoothly after launch. These can include regular updates, security monitoring, performance optimization, and content updates.",
  },
  {
    question: "How much does a typical project cost?",
    answer:
      "Project costs vary widely based on requirements, complexity, and scope. We provide detailed quotes after understanding your specific needs. Our pricing is transparent, with no hidden fees, and we work with clients to find solutions that fit their budget.",
  },
  {
    question: "What information do you need to provide a quote?",
    answer:
      "To provide an accurate quote, we typically need to understand your project goals, target audience, desired features and functionality, design preferences, timeline, and budget constraints. The more details you can provide, the more accurate our estimate will be.",
  },
  {
    question: "Do you work with clients internationally?",
    answer:
      "Yes, we work with clients from around the world. Our team is experienced in remote collaboration and we use various tools to ensure smooth communication regardless of time zones or geographical locations.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in a wide range of technologies including React, Next.js, Node.js, React Native, Flutter, PHP, Laravel, WordPress, and various database systems. We select the most appropriate technology stack based on your project requirements and business goals.",
  },
]

export function ServicesFAQ() {
  const { colors } = usePageTheme()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <AnimatedText
            text="Frequently Asked Questions"
            tag="h2"
            className="mb-4 text-3xl font-bold md:text-4xl"
            style={{ color: colors.secondary }}
          />
          <AnimatedText
            text="Find answers to common questions about our services and processes."
            className="text-lg text-gray-600 dark:text-gray-400"
            delay={0.2}
          />
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-lg border"
                style={{ borderColor: `${colors.primary}20` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-4 text-left font-medium transition-colors"
                  style={{
                    color: openIndex === index ? colors.primary : "#1e293b",
                    backgroundColor: openIndex === index ? `${colors.primary}10` : "transparent",
                  }}
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className="border-t p-4 text-gray-600 dark:text-gray-400"
                        style={{ borderColor: `${colors.primary}20` }}
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
