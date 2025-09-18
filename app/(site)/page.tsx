import { Hero } from "@/components/hero";
import { Highlights } from "@/components/highlights";
import { WhyUbuntu } from "@/components/why-ubuntu";
import { ImpactCounter } from "@/components/impact-counter";
import { LogoCloud } from "@/components/logo-cloud";
import { CTAButtons } from "@/components/cta-buttons";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <WhyUbuntu />
      <ImpactCounter />
      <LogoCloud />
      <CTAButtons
        title="Talk to our team today!"
        description="we're here to support your journey"
        primaryText="Get Started"
        primaryHref="/contact"
        secondaryText="Partner with us"
        secondaryHref="/contact"
      />
    </>
  );
}

