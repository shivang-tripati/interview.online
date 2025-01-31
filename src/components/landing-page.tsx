import Hero from "@/components/hero";
import Features from "@/components/features";
import HowItWorks from "@/components/how-it-works";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import FAQ from "@/components/faq";
import Navbar from "./navbar";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      {/* <Footer /> */}
    </div>
  );
}
