import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { PageThemeProvider } from "@/components/page-theme-provider"
import { AdaptiveHeader } from "@/components/adaptive-header"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { CursorFollower } from "@/components/cursor-follower"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Elev8Tech - Web & Mobile Development Solutions",
  description:
    "Elev8Tech provides custom web and mobile development solutions to help businesses grow and succeed in the digital landscape.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: { url: "/apple-icon.png", type: "image/png" },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <PageThemeProvider>
            <ScrollToTop />
            <CursorFollower />
            <AdaptiveHeader />
            <PageTransition>{children}</PageTransition>
            <Footer />
          </PageThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'