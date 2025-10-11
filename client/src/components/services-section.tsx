import { motion } from "framer-motion";
import { Magnet, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesSection() {
  const services = [
    {
      icon: Magnet,
      title: "Custom Lead Magnets",
      description: "Create compelling free value propositions that capture prospect information and attract quality leads to your business.",
      benefits: [
        "Custom value propositions",
        "Lead capture strategy", 
        "Audience-specific design"
      ]
    },
    {
      icon: Users,
      title: "CRM Integration",
      description: "Seamlessly connect your lead magnets with your existing CRM systems to manage and nurture prospects effectively.",
      benefits: [
        "System integration",
        "Data flow automation",
        "Lead management setup"
      ]
    },
    {
      icon: TrendingUp,
      title: "Marketing Strategy",
      description: "Learn how to market your lead magnets organically to boost your reputation while attracting your ideal customers.",
      benefits: [
        "Organic marketing tactics",
        "Reputation building",
        "Growth optimization"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            OMLM <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three core services that help you create, integrate, and market custom Organic Marketing Lead Magnets to grow your business organically.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-6">
                    <service.icon className="text-primary h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}