import HeroSection from "@/components/sections/hero-section";
import CertificationsSection from "@/components/sections/certifications-section";
import SolutionsSection from "@/components/sections/solutions-section";
import ProductsSection from "@/components/sections/products-section";
import PricingSection from "@/components/sections/pricing-section";
import ContactUsSection from "@/components/sections/contact-us-section";

export default function LandingPage() {
  return (
    <main>
      <HeroSection />
      <CertificationsSection />
      <SolutionsSection />
      <ProductsSection />
      <PricingSection />
      <ContactUsSection />
    </main>
  );
}
