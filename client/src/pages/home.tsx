import SimpleNavigation from "@/components/simple-navigation";
import ProfessionalServices from "@/components/professional-services";
import ConsultationCTA from "@/components/consultation-cta";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SimpleNavigation />
      <ProfessionalServices />
      <ConsultationCTA />
      <ContactSection />
      <Footer />
    </div>
  );
}
