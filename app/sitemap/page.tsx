import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sitemap | Elev8Tech - Web & Mobile Development Solutions",
  description: "Navigate through all pages of the Elev8Tech website.",
}

export default function SitemapPage() {
  const pages = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Works", href: "/works" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ]

  return (
    <div className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Sitemap</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-4 text-foreground">Main Pages</h2>
              <ul className="space-y-2">
                {pages.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      className="text-primary hover:underline hover:text-primary/80 transition-colors"
                    >
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4 text-foreground">Contact Information</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>Elev8Tech</p>
                <p>16839 Ramona Avenue, Suite 256</p>
                <p>Fontana, CA 92336</p>
                <p>
                  Email:{" "}
                  <a href="mailto:info@elev8tech.co" className="text-primary hover:underline">
                    info@elev8tech.co
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a href="tel:+16266202783" className="text-primary hover:underline">
                    (626) 620-2783
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
