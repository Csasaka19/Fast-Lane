import Hero from "@/components/sections/Hero";
import HighROIGrowth from "@/components/sections/HighROIGrowth";
import Services from "@/components/sections/Services";
import WhyChoose from "@/components/sections/WhyChoose";
import AboutPreview from "@/components/sections/AboutPreview";
import Testimonials from "@/components/sections/Testimonials";
import WhoWeWorkWith from "@/components/sections/WhoWeWorkWith";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <HighROIGrowth />
      <Services />
      <WhyChoose />
      <AboutPreview />
      <Testimonials />
      <WhoWeWorkWith />
      <CTASection />
    </>
  );
}
