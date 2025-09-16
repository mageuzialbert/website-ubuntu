import { Hero } from "@/components/hero";
import { Highlights } from "@/components/highlights";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { ImpactCounter } from "@/components/impact-counter";
import { LogoCloud } from "@/components/logo-cloud";
import { CTAButtons } from "@/components/cta-buttons";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <TestimonialSlider />
      <ImpactCounter />
      <LogoCloud />
      <CTAButtons
        title="Join Our Network Today"
        description="Transform your healthcare facility with our comprehensive solutions"
        primaryText="Get Started"
        primaryHref="/contact"
        secondaryText="Partner with us"
        secondaryHref="/contact"
      />
    </>
  );
}

