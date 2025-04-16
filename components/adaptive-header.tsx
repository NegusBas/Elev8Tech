"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePageTheme } from "@/components/page-theme-provider"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Works", href: "/works" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

const socialLinks = [{ name: "Facebook", href: "#", icon: "facebook" }]

export function AdaptiveHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { colors } = usePageTheme()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main Navigation */}
      <div
        className="transition-all duration-300"
        style={{
          backgroundColor: scrolled ? `rgba(18, 20, 24, 0.8)` : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          boxShadow: scrolled ? "0 4px 20px rgba(0, 0, 0, 0.1)" : "none",
          borderBottom: scrolled ? `1px solid ${colors.primary}20` : "none",
        }}
      >
        <div className="container mx-auto overflow-visible">
          <div className="flex items-center justify-between py-0">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="Elev8Tech Logo"
                  width={320}
                  height={120}
                  className="h-24 w-auto brightness-150 -my-4"
                  priority
                />
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium transition-colors"
                  style={{
                    color: "white",
                    opacity: isActive(item.href) ? 1 : 0.8,
                    borderBottom: isActive(item.href) ? `2px solid ${colors.primary}` : "none",
                    paddingBottom: "2px",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(item.href)) {
                      e.currentTarget.style.opacity = "1"
                      e.currentTarget.style.color = colors.primary
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(item.href)) {
                      e.currentTarget.style.opacity = "0.8"
                      e.currentTarget.style.color = "white"
                    }
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <button
                className="p-1 transition-colors"
                style={{ color: "white", opacity: 0.8 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1"
                  e.currentTarget.style.color = colors.primary
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.8"
                  e.currentTarget.style.color = "white"
                }}
              >
                <Search className="h-5 w-5" />
              </button>
              <Button className="text-white rounded-md" style={{ backgroundColor: colors.accent }}>
                Text Us: +1 (626) 620-2783
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
                    className="text-gray-400 hover:text-primary transition-colors"
                    aria-label={link.name}
                  >
                    <i className={`fab fa-${link.icon} text-sm`}></i>
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden md:block">
              <a
                href="#"
                className="flex items-center text-sm group"
                style={{ color: "white", opacity: 0.9 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.9"
                }}
              >
                <span>Build your online presence today...</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
            <div className="hidden md:block">
              <a
                href="mailto:info@elev8tech.co"
                className="text-sm flex items-center"
                style={{ color: "white", opacity: 0.9 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.9"
                }}
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
        <div
          className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto px-6 py-6"
          style={{ backgroundColor: `rgb(18, 20, 24)` }}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Elev8Tech Logo"
                width={320}
                height={120}
                className="h-24 w-auto brightness-150 -my-4"
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
                  className="block py-2 text-base font-medium transition-colors"
                  style={{
                    color: "white",
                    opacity: isActive(item.href) ? 1 : 0.8,
                    borderLeft: isActive(item.href) ? `2px solid ${colors.primary}` : "none",
                    paddingLeft: isActive(item.href) ? "8px" : "0",
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="py-6">
              <Button className="w-full text-white rounded-md" style={{ backgroundColor: colors.accent }}>
                Text Us: +1 (626) 620-2783
              </Button>
              <div className="mt-6">
                <a
                  href="mailto:info@elev8tech.co"
                  className="text-sm flex items-center justify-center"
                  style={{ color: "white", opacity: 0.9 }}
                >
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
