"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { usePathname } from "next/navigation"

type ThemeColors = {
  primary: string
  secondary: string
  accent: string
  background: string
  cardBg: string
}

type PageThemeContextType = {
  colors: ThemeColors
  setPageTheme: (theme: string) => void
  currentTheme: string
}

const defaultColors: ThemeColors = {
  primary: "#3563E9", // SpringHive blue
  secondary: "#ffffff", // White text for dark theme for maximum contrast
  accent: "#B39B80", // Elev8Tech accent color (beige/tan)
  background: "#121418", // Darker background
  cardBg: "#1a1d24", // Darker card background
}

const themeMap: Record<string, ThemeColors> = {
  home: {
    primary: "#3563E9", // SpringHive blue
    secondary: "#ffffff", // White text for dark theme for maximum contrast
    accent: "#B39B80", // Elev8Tech accent color (beige/tan)
    background: "#121418", // Darker background
    cardBg: "#1a1d24", // Darker card background
  },
  services: {
    primary: "#9E1E3C", // Burgundy/maroon color
    secondary: "#ffffff", // White text for dark theme for maximum contrast
    accent: "#B39B80", // Elev8Tech accent color (beige/tan)
    background: "#121418", // Darker background
    cardBg: "#1e1620", // Darker burgundy-tinted card background
  },
  works: {
    primary: "#6200EA", // Violet purple
    secondary: "#ffffff", // White text for dark theme for maximum contrast
    accent: "#B39B80", // Elev8Tech accent color (beige/tan)
    background: "#121418", // Darker background
    cardBg: "#17142a", // Darker purple-tinted card background
  },
  about: {
    primary: "#3563E9", // SpringHive blue
    secondary: "#ffffff", // White text for dark theme for maximum contrast
    accent: "#B39B80", // Elev8Tech accent color (beige/tan)
    background: "#121418", // Darker background
    cardBg: "#151a29", // Darker blue-tinted card background
  },
  contact: {
    primary: "#3563E9", // SpringHive blue
    secondary: "#ffffff", // White text for dark theme for maximum contrast
    accent: "#B39B80", // Elev8Tech accent color (beige/tan)
    background: "#0f1114", // Even darker background for contact page
    cardBg: "#161a1f", // Darker card background for contact page
  },
  team: {
    primary: "#3563E9", // SpringHive blue
    secondary: "#ffffff", // White text for dark theme for maximum contrast
    accent: "#B39B80", // Elev8Tech accent color (beige/tan)
    background: "#121418", // Darker background
    cardBg: "#1a1d24", // Darker card background
  },
}

const PageThemeContext = createContext<PageThemeContextType>({
  colors: defaultColors,
  setPageTheme: () => {},
  currentTheme: "home",
})

export function PageThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState("home")
  const [colors, setColors] = useState<ThemeColors>(defaultColors)
  const pathname = usePathname()

  const setPageTheme = (theme: string) => {
    setCurrentTheme(theme)
    setColors(themeMap[theme] || defaultColors)

    // Update CSS variables
    document.documentElement.style.setProperty("--theme-primary", themeMap[theme]?.primary || defaultColors.primary)
    document.documentElement.style.setProperty(
      "--theme-secondary",
      themeMap[theme]?.secondary || defaultColors.secondary,
    )
    document.documentElement.style.setProperty("--theme-accent", themeMap[theme]?.accent || defaultColors.accent)
    document.documentElement.style.setProperty("--theme-card-bg", themeMap[theme]?.cardBg || defaultColors.cardBg)
  }

  useEffect(() => {
    // Determine theme based on pathname
    if (pathname === "/") {
      setPageTheme("home")
    } else if (pathname.includes("/services")) {
      setPageTheme("services")
    } else if (pathname.includes("/works") || pathname.includes("/portfolio")) {
      setPageTheme("works")
    } else if (pathname.includes("/about")) {
      setPageTheme("about")
    } else if (pathname.includes("/contact")) {
      setPageTheme("contact")
    } else if (pathname.includes("/team")) {
      setPageTheme("team")
    } else {
      setPageTheme("home")
    }
  }, [pathname])

  return (
    <PageThemeContext.Provider value={{ colors, setPageTheme, currentTheme }}>{children}</PageThemeContext.Provider>
  )
}

export const usePageTheme = () => useContext(PageThemeContext)
