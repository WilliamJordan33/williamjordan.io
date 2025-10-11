import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SimpleHero() {
  const scrollToConsultation = () => {
    const element = document.getElementById("consultation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-20 pb-16 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Create Custom Lead Magnets That
              <br />
              <span className="text-primary">Attract Quality Leads</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              I show businesses how to create custom Organic Marketing Lead Magnets (OMLM's)—free value propositions that capture prospect information and integrate with your CRM. Attract quality leads, boost your reputation, and grow organically. Free consultations, pay what you think it's worth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToConsultation}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={scrollToServices}
                variant="outline"
                size="lg"
              >
                View Services
              </Button>
            </div>
          </motion.div>

          {/* Professional Photo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src="/images/william-jordan-exact.jpeg"
              alt="William Jordan - OMLM Consultant"
              className="max-w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}