import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, MapPin, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/william-jordan-97981a118/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/WilliamJordan33", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/Chosen_One_1234", label: "Twitter" }
  ];

  const quickLinks = [
    { label: "Home", action: () => scrollToSection("hero") },
    { label: "Services", action: () => scrollToSection("services") }, 
    { label: "Consultation", action: () => scrollToSection("consultation") },
    { label: "Contact", action: () => scrollToSection("contact") }
  ];

  const services = [
    "Custom Lead Magnet Creation",
    "Value Proposition Development", 
    "CRM Integration Strategy",
    "Organic Marketing Guidance"
  ];

  const contactInfo = [
    { icon: Mail, text: "williamjordan@williamjordan.io", href: "mailto:williamjordan@williamjordan.io" },
    { icon: MapPin, text: "San Francisco, CA", href: "#" }
  ];

  return (
    <footer className="bg-secondary/30 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4">
                  <span className="text-primary">William</span> Jordan
                </h3>
                <p className="text-muted-foreground">
                  OMLM Consultant helping businesses create custom Organic Marketing Lead Magnets that attract quality leads and integrate with your CRM. Free consultations—pay what you think it's worth.
                </p>
              </div>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="bg-secondary p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={link.action}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="text-muted-foreground">
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <info.icon className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">{info.text}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div 
          className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground text-sm">
              &copy; 2025 William Jordan. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </button>
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
