import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { AnimatedSection } from "@/components/animated-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AnimatedSection delay={0.2}>
        <FeaturesSection />
      </AnimatedSection>
      <AnimatedSection delay={0.3} direction="right">
        <ServicesSection />
      </AnimatedSection>
      <AnimatedSection delay={0.4} direction="left">
        <TestimonialsSection />
      </AnimatedSection>
      <AnimatedSection delay={0.5}>
        <CTASection />
      </AnimatedSection>
    </>
  )
}
