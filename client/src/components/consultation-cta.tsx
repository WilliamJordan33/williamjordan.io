import { motion } from "framer-motion";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ConsultationCTA() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const benefits = [
    "Learn how to create custom Organic Marketing Lead Magnets (OMLM's)",
    "Design compelling value propositions that attract quality leads", 
    "Seamlessly integrate lead capture with your existing CRM",
    "Build reputation while growing your customer base organically"
  ];

  return (
    <section id="consultation" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Free <span className="text-primary">OMLM Consultation</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              I show businesses how to create custom Organic Marketing Lead Magnets—free value propositions that capture prospect information and integrate with your CRM. Consultations are completely free, and you can pay me on the backend based on the value you think I've provided.
            </p>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <CheckCircle className="text-primary h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-secondary/20">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Calendar className="text-primary h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">What to Expect</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Clock className="text-primary h-5 w-5 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Custom OMLM Strategy</h4>
                      <p className="text-sm text-muted-foreground">Learn to create lead magnets tailored to your business</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="text-primary h-5 w-5 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">100% Free Consultation</h4>
                      <p className="text-sm text-muted-foreground">No upfront cost—pay what you think it's worth after</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="text-primary h-5 w-5 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">CRM Integration Guidance</h4>
                      <p className="text-sm text-muted-foreground">Connect your lead magnets to your existing systems</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="https://calendar.app.google/qpKKjgdFy9uif3Pt7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl font-semibold"
            >
              Book Your Free OMLM Consultation
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}