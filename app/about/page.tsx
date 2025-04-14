import type { Metadata } from "next"
import Image from "next/image"
import { AboutHero } from "@/components/about/about-hero"
import { AboutMission } from "@/components/about/about-mission"
import { AboutValues } from "@/components/about/about-values"
import { AboutStats } from "@/components/about/about-stats"
import { AboutTeam } from "@/components/about/about-team"
import { AboutCTA } from "@/components/about/about-cta"
import { AnimatedSection } from "@/components/animated-section"
import { WaveDivider } from "@/components/wave-divider"
import { AboutVision } from "@/components/about/about-vision"

export const metadata: Metadata = {
  title: "About Us | Elev8Tech - Web & Mobile Development Solutions",
  description:
    "Learn about Elev8Tech's mission, values, and the talented team behind our web and mobile development solutions.",
}

export default function AboutPage() {
  return (
    <>
      <div className="relative">
        <AboutHero />
        <WaveDivider />
      </div>

      {/* Background wrapper for most sections */}
      <div className="relative">
        {/* Background image that spans multiple sections */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <Image
            src="/images/vision-background.jpg"
            alt="Background"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/95"></div>
        </div>

        <AnimatedSection delay={0.2}>
          <AboutMission />
        </AnimatedSection>
        <AnimatedSection delay={0.3} direction="right">
          <AboutVision />
        </AnimatedSection>
        <AnimatedSection delay={0.4} direction="right">
          <AboutValues />
        </AnimatedSection>
        <AnimatedSection delay={0.4} direction="left">
          <AboutStats />
        </AnimatedSection>
      </div>

      {/* Team section with original background */}
      <AnimatedSection delay={0.5}>
        <AboutTeam />
      </AnimatedSection>

      {/* CTA section with background image */}
      <div className="relative">
        <div className="absolute inset-0 -z-10 opacity-10">
          <Image
            src="/images/vision-background.jpg"
            alt="Background"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/95"></div>
        </div>
        <AnimatedSection delay={0.6}>
          <AboutCTA />
        </AnimatedSection>
      </div>
    </>
  )
}
