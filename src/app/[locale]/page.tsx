import { HeroSection } from "@/components/home/HeroSection";
import { ServicesCarousel } from "@/components/home/ServicesCarousel";
import { AboutSection } from "@/components/home/AboutSection";
import { TechnologiesSection } from "@/components/home/TechnologiesSection";
import { EngagementSection } from "@/components/home/EngagementSection";
import { ApproachSection } from "@/components/home/ApproachSection";
import { StatsSection } from "@/components/home/StatsSection";
import { PromiseSection } from "@/components/home/PromiseSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { QuoteSection } from "@/components/home/QuoteSection";
import { CareersSection } from "@/components/home/CareersSection";
import { ContactSection } from "@/components/home/ContactSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesCarousel />
      <AboutSection />
      <TechnologiesSection />
      <EngagementSection />
      <ApproachSection />
      <StatsSection />
      <PromiseSection />
      <ProjectsSection />
      <QuoteSection />
      <CareersSection />
      <ContactSection />
      <FinalCtaSection />
    </>
  );
}
