import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { WhatIBuildSection } from "@/components/what-i-build-section"
import { CaseStudySection } from "@/components/case-study-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Navigation />

      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <WhatIBuildSection />
        <CaseStudySection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}
