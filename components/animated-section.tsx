"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { usePageTheme } from "./page-theme-provider"

type AnimatedSectionProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  bgColor?: string
  useThemeColor?: boolean
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  bgColor,
  useThemeColor = false,
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { colors, currentTheme } = usePageTheme()

  // Set the initial and animate properties based on the direction
  let initial = {}
  switch (direction) {
    case "up":
      initial = { opacity: 0, y: 50 }
      break
    case "down":
      initial = { opacity: 0, y: -50 }
      break
    case "left":
      initial = { opacity: 0, x: 50 }
      break
    case "right":
      initial = { opacity: 0, x: -50 }
      break
  }

  // Determine background color
  let bgColorClass = bgColor || ""
  if (useThemeColor) {
    bgColorClass = `bg-gradient-to-br ${colors.background} dark:from-gray-900 dark:to-gray-800`
  }

  return (
    <motion.section
      ref={ref}
      className={`${className} ${bgColorClass}`}
      initial={initial}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.section>
  )
}
