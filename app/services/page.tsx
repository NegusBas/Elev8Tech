import type { Metadata } from "next"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { ServiceProcess } from "@/components/services/service-process"
import { ServicesFAQ } from "@/components/services/services-faq"
import { ServicesCTA } from "@/components/services/services-cta"
import { AnimatedSection } from "@/components/animated-section"
import { WaveDivider } from "@/components/wave-divider"

export const metadata: Metadata = {
  title: "Services | Elev8Tech - Web & Mobile Development Solutions",
  description:
    "Explore our comprehensive range of web and mobile development services designed to help your business grow.",
}

export default function ServicesPage() {
  return (
    <>
      <div className="relative">
        <ServicesHero />
        <WaveDivider />
      </div>
      <AnimatedSection delay={0.2}>
        <ServicesGrid />
      </AnimatedSection>
      <AnimatedSection delay={0.3} direction="right">
        <ServiceProcess />
      </AnimatedSection>
      <AnimatedSection delay={0.4} direction="left">
        <ServicesFAQ />
      </AnimatedSection>
      <AnimatedSection delay={0.5}>
        <ServicesCTA />
      </AnimatedSection>
    </>
  )
}
