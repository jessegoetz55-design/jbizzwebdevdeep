import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import PortfolioGrid from "@/components/PortfolioGrid";
import AIFeature from "@/components/AIFeature";
import Testimonials from "@/components/Testimonials";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <Services />
      <PortfolioGrid />
      <AIFeature />
      <Testimonials />
      <LeadForm />
      <Footer />
    </main>
  );
}