"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePageTheme } from "@/components/page-theme-provider"

// Update the navigation array to remove the Blog link
const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Works", href: "/works" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

const socialLinks = [
  { name: "Facebook", href: "#", icon: "facebook" },
  { name: "Twitter", href: "#", icon: "twitter" },
  { name: "YouTube", href: "#", icon: "youtube" },
  { name: "Pinterest", href: "#", icon: "pinterest" },
  { name: "Instagram", href: "#", icon: "instagram" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { colors } = usePageTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="relative z-50">
      {/* Main Navigation */}
      <div
        className={`transition-all duration-300 ${scrolled ? "backdrop-blur-sm shadow-md" : "bg-transparent"}`}
        style={{
          backgroundColor: scrolled ? `${colors.primary}10` : "transparent",
          borderBottom: scrolled ? `1px solid ${colors.primary}20` : "none",
        }}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="Elev8Tech Logo"
                  width={180}
                  height={60}
                  className="h-12 w-auto brightness-150"
                  priority
                />
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="transition-colors text-sm font-medium"
                  style={{ color: "white", opacity: 0.9 }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.9")}
                >
                  {item.name}
                </Link>
              ))}
              <button
                className="p-1 transition-colors"
                style={{ color: "white", opacity: 0.9 }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.9")}
              >
                <Search className="h-5 w-5" />
              </button>
              <Button
                className="bg-accent hover:bg-accent/90 text-white rounded-md"
                style={{ backgroundColor: colors.accent }}
              >
                Call Us: +1 (626) 620-2783
              </Button>
            </div>

            <div className="md:hidden flex items-center">
              <button type="button" style={{ color: "white" }} onClick={() => setMobileMenuOpen(true)}>
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Bar - Social Links & CTA */}
      <div
        style={{
          backgroundColor: `${colors.primary}15`,
          borderTop: `1px solid ${colors.primary}20`,
          borderBottom: `1px solid ${colors.primary}20`,
          color: "white",
        }}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-4">
              <span className="text-sm" style={{ color: "white", opacity: 0.9 }}>
                Follow us on
              </span>
              <div className="flex space-x-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="transition-colors"
                    aria-label={link.name}
                    style={{ color: "white', opacity: 0.9" }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.9")}
                  >
                    <span className={`fab fa-${link.icon} text-sm`}></span>
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden md:block">
              <a href="#" className="flex items-center text-sm group" style={{ color: "white', opacity: 0.9" }}>
                <span>Build your online presence today...</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
            <div className="hidden md:block">
              <a
                href="mailto:info@elev8tech.co"
                className="text-sm flex items-center"
                style={{ color: "white", opacity: 0.9 }}
              >
                <span className="mr-2">Email us:</span>
                <span>info@elev8tech.co</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? "fixed inset-0 z-50" : "hidden"}`}>
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-card px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Elev8Tech Logo"
                width={180}
                height={60}
                className="h-12 w-auto brightness-150"
              />
            </Link>
            <button type="button" style={{ color: "white" }} onClick={() => setMobileMenuOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-base font-medium text-foreground hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="py-6">
              <Button
                className="w-full bg-accent hover:bg-accent/90 text-white rounded-md"
                style={{ backgroundColor: colors.accent }}
              >
                Call Us: +1 (626) 620-2783
              </Button>
              <div className="mt-6">
                <a href="mailto:info@elev8tech.co" className="text-foreground text-sm flex items-center justify-center">
                  <span className="mr-2">Email us:</span>
                  <span>info@elev8tech.co</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
