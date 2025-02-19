import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import TechShowcase from "@/components/sections/tech-showcase";
import HowItWorks from "@/components/sections/how-it-works";
import SuccessMetrics from "@/components/sections/success-metrics";
import UseCases from "@/components/sections/use-cases";
import Testimonials from "@/components/sections/testimonials";
import Guarantee from "@/components/sections/guarantee";
import LiveActivity from "@/components/sections/live-activity";
import Pricing from "@/components/sections/pricing";
import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <TechShowcase />
      <HowItWorks />
      <SuccessMetrics />
      <UseCases />
      <LiveActivity />
      <Testimonials />
      <Guarantee />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}