import { motion } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  CheckCircle, 
  Star,
  Users,
  ArrowRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ConsultationSection() {
  const consultationBenefits = [
    {
      icon: Users,
      title: "OMLM Strategy",
      description: "Create compelling lead magnets"
    },
    {
      icon: Star,
      title: "CRM Integration",
      description: "Connect to your systems"
    }
  ];

  const consultationTypes = [
    {
      name: "OMLM Discovery Call",
      duration: "30 minutes",
      description: "Learn the fundamentals of creating Organic Marketing Lead Magnets for your business",
      value: "FREE - Pay what you think it's worth",
      features: [
        "Introduction to OMLM methodology",
        "Identify your ideal lead magnet type",
        "Basic CRM integration overview"
      ]
    },
    {
      name: "OMLM Strategy Session",
      duration: "60 minutes", 
      description: "Complete walkthrough to design, implement, and integrate your custom lead magnet",
      value: "FREE - Pay based on value received",
      features: [
        "Custom lead magnet design strategy",
        "Value proposition development",
        "CRM integration implementation plan",
        "Marketing & reputation boost tactics"
      ]
    }
  ];

  return (
    <section id="consultation" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
            <Calendar className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Book Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Free OMLM Consultation</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            I show businesses how to create custom lead magnets that attract quality leads and integrate with your CRM. Free consultations—pay what you think it's worth on the backend.
          </p>
        </motion.div>

        {/* Consultation Benefits */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {consultationBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-gray-200 h-full text-center hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-fit mx-auto mb-6">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Consultation Types */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Choose Your Consultation Type</h3>
            <p className="text-lg text-muted-foreground">Select the consultation format that best fits your needs</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {consultationTypes.map((consultation, index) => (
              <motion.div
                key={consultation.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-white/10 to-white/5 border-blue-200/30 h-full hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h4 className="text-2xl font-bold mb-2">{consultation.name}</h4>
                        <div className="flex items-center text-muted-foreground mb-4">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{consultation.duration}</span>
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-green-400 bg-green-50/10 px-3 py-1 rounded-full">
                        {consultation.value}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">{consultation.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {consultation.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 font-semibold transition-all duration-300"
                      onClick={() => {
                        // Temporary placeholder - will integrate calendar booking
                        window.alert('Calendar booking system will be integrated here. Please contact us directly for now.');
                      }}
                    >
                      Schedule {consultation.name}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Booking Placeholder */}
        <motion.div 
          className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-200/30 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Calendar className="h-16 w-16 text-blue-500 mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-4">Ready to Attract Quality Leads?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule your free OMLM consultation and learn how to create custom lead magnets—free value propositions that capture prospect information, integrate with your CRM, and boost your reputation. You can pay me on the backend based on the value you think I've provided.
          </p>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Free consultations—pay what you think it's worth!</strong> For immediate booking, contact us directly.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contact Us Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}