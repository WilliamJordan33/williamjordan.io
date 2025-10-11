import { motion } from "framer-motion";
import { 
  Shield, 
  Lock, 
  Eye, 
  FileCheck, 
  Globe, 
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Database,
  Fingerprint,
  UserCheck,
  ShieldCheck
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DataSovereigntyPillarSection() {
  const features = [
    {
      icon: Database,
      title: "Complete Data Control",
      description: "100% data ownership",
      color: "text-blue-500",
      metric: "100% Ownership"
    },
    {
      icon: FileCheck,
      title: "Global Compliance",
      description: "GDPR/CCPA automated",
      color: "text-green-500",
      metric: "Multi-Regulatory"
    },
    {
      icon: Shield,
      title: "AI Threat Detection",
      description: "Real-time protection",
      color: "text-purple-500",
      metric: "Real-Time Protection"
    }
  ];

  const complianceRegulations = [
    {
      name: "GDPR",
      description: "European General Data Protection Regulation",
      coverage: "EU & Global",
      icon: Globe
    },
    {
      name: "CCPA",
      description: "California Consumer Privacy Act",
      coverage: "California & US",
      icon: Shield
    },
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act",
      coverage: "Healthcare",
      icon: FileCheck
    },
    {
      name: "SOC 2",
      description: "Service Organization Control 2",
      coverage: "Enterprise",
      icon: ShieldCheck
    }
  ];

  const securityThreats = [
    {
      threat: "Data breaches costing $4.45M on average",
      solution: "AI-powered breach prevention and instant response",
      prevention: "99.9% threat prevention",
      icon: AlertTriangle
    },
    {
      threat: "Privacy violations leading to regulatory fines",
      solution: "Automated compliance monitoring and reporting",
      prevention: "Zero compliance violations",
      icon: FileCheck
    },
    {
      threat: "Unauthorized data access and misuse",
      solution: "Zero-trust architecture with behavioral monitoring",
      prevention: "Complete access control",
      icon: Lock
    }
  ];

  const capabilities = [
    "End-to-end encryption",
    "Behavioral analytics",
    "Automated compliance reporting",
    "Real-time threat monitoring",
    "Data loss prevention",
    "Privacy impact assessments"
  ];

  const scrollToConsultation = () => {
    const element = document.getElementById("consultation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="data-sovereignty-pillar" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-6">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Data Sovereignty & <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">AI Security</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete data control with GDPR/CCPA compliance and AI-powered threat detection.
          </p>
        </motion.div>

        {/* Compliance Regulations */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Global Regulatory Compliance</h3>
            <p className="text-lg text-muted-foreground">Automatically maintain compliance with international data protection standards</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceRegulations.map((regulation, index) => (
              <motion.div
                key={regulation.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-green-200/30 h-full text-center hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full w-fit mx-auto mb-4">
                      <regulation.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{regulation.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{regulation.description}</p>
                    <span className="text-xs font-semibold text-green-400 bg-green-50/10 px-3 py-1 rounded-full">
                      {regulation.coverage}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-green-200/30 h-full hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-green-400 bg-green-50/10 px-3 py-1 rounded-full">
                      {feature.metric}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Capabilities Section */}
        <motion.div 
          className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-8 border border-green-200/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <Lock className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Advanced Security Capabilities</h3>
            <p className="text-lg text-muted-foreground">Comprehensive data sovereignty and AI security solutions for enterprise protection</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div 
                key={capability}
                className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg border border-green-200/20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="text-green-500 h-5 w-5 flex-shrink-0" />
                <span className="font-medium">{capability}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button 
              onClick={scrollToConsultation}
              size="lg"
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Secure Your Data Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}