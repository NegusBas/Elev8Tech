"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { usePageTheme } from "./page-theme-provider"

export function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { colors } = usePageTheme()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-50 hidden md:block"
        style={{
          backgroundColor: `${colors.primary}30`,
          mixBlendMode: "difference",
        }}
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          mass: 0.5,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 rounded-full pointer-events-none z-40 hidden md:block"
        style={{
          backgroundColor: `${colors.primary}10`,
          mixBlendMode: "difference",
        }}
        animate={{
          x: mousePosition.x - 64,
          y: mousePosition.y - 64,
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 150,
          mass: 1,
        }}
      />
    </>
  )
}
