import type { Metadata } from "next"
import { WorksHero } from "@/components/works/works-hero"
import { PortfolioGrid } from "@/components/works/portfolio-grid"
import { WorksProcess } from "@/components/works/works-process"
import { WorksCTA } from "@/components/works/works-cta"
import { AnimatedSection } from "@/components/animated-section"
import { WaveDivider } from "@/components/wave-divider"

export const metadata: Metadata = {
  title: "Our Work | Elev8Tech - Web & Mobile Development Solutions",
  description:
    "Explore our portfolio of web and mobile development projects. See how we've helped businesses achieve their digital goals.",
}

export default function WorksPage() {
  return (
    <>
      <div className="relative">
        <WorksHero />
        <WaveDivider />
      </div>
      <AnimatedSection delay={0.2}>
        <PortfolioGrid />
      </AnimatedSection>
      <AnimatedSection delay={0.3} direction="right">
        <WorksProcess />
      </AnimatedSection>
      <AnimatedSection delay={0.4}>
        <WorksCTA />
      </AnimatedSection>
    </>
  )
}
