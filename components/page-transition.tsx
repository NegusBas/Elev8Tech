"use client"

import type React from "react"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <motion.main
      key={pathname}
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "ease-in-out", duration: 0.5 }}
      onAnimationComplete={() => {
        window.scrollTo(0, 0)
      }}
    >
      {children}
    </motion.main>
  )
}
