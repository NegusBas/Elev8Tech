import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="text-white border-t border-border" style={{ backgroundColor: "#b79c87" }}>
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.png"
                alt="Elev8Tech Logo"
                width={200}
                height={200}
                className="h-16 w-auto brightness-150"
              />
            </Link>
            <p className="mb-6 text-white/80">
              Elevating businesses through innovative web and mobile solutions. We build digital experiences that drive
              growth.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/works" className="text-white/80 hover:text-white transition-colors">
                  Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-white/80">
                  16839 Ramona Avenue, Suite 256
                  <br />
                  Fontana, CA 92336
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-white" />
                <a href="tel:+16266202783" className="text-white/80 hover:text-white transition-colors">
                  (626) 620-2783
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-white" />
                <a href="mailto:info@elev8tech.co" className="text-white/80 hover:text-white transition-colors">
                  info@elev8tech.co
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/80">&copy; {new Date().getFullYear()} Elev8Tech. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-white/80 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-white/80 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-sm text-white/80 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
