"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

type AnimatedTextProps = {
  text: string
  className?: string
  once?: boolean
  delay?: number
  speed?: number
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
  marginBottom?: string
  style?: React.CSSProperties
}

export function AnimatedText({
  text,
  className = "",
  once = true,
  delay = 0,
  speed = 0.05,
  tag = "p",
  marginBottom = "",
  style,
}: AnimatedTextProps) {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: 0.1,
  })

  const words = text.split(" ")

  // Variants for the container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: speed, delayChildren: delay * i },
    }),
  }

  // Variants for each word
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  const Tag = tag

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden text-base md:text-lg ${className} ${marginBottom}`}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      style={style}
    >
      {words.map((word, index) => (
        <motion.span key={index} className="inline-block mr-1" variants={child}>
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  )
}
