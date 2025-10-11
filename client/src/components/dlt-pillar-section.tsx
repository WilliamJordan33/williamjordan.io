import { motion } from "framer-motion";
import { 
  Zap, 
  Shield, 
  Globe, 
  TrendingDown, 
  CheckCircle, 
  Lock,
  ArrowRight,
  Network,
  Clock,
  DollarSign,
  Scale,
  FileCheck
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DLTPillarSection() {
  const features = [
    {
      icon: Zap,
      title: "High-Speed Transactions",
      description: "10,000+ TPS processing",
      color: "text-blue-500",
      metric: "10,000+ TPS"
    },
    {
      icon: DollarSign,
      title: "Low-Cost Operations",
      description: "90% fee reduction",
      color: "text-green-500",
      metric: "90% Cost Reduction"
    },
    {
      icon: Shield,
      title: "Immutable Security",
      description: "Military-grade protection",
      color: "text-blue-500",
      metric: "Military-Grade"
    }
  ];

  const painPointsSolutions = [
    {
      problem: "Slow supply chain processes taking weeks",
      painPoint: "Supply Chain Delays",
      solution: "Real-time tracking with instant verification",
      impact: "Hours instead of weeks",
      icon: Clock
    },
    {
      problem: "High intermediary fees eating profits",
      painPoint: "Transaction Costs",
      solution: "Direct peer-to-peer transactions",
      impact: "Up to 90% fee reduction",
      icon: DollarSign
    },
    {
      problem: "Fraud and lack of transparency",
      painPoint: "Security & Trust",
      solution: "Immutable ledger with full traceability",
      impact: "Zero fraud tolerance",
      icon: Shield
    },
    {
      problem: "Complex regulatory compliance",
      painPoint: "Regulatory Hurdles",
      solution: "Built-in compliance automation",
      impact: "Automatic compliance",
      icon: FileCheck
    }
  ];

  const capabilities = [
    "Smart contract automation",
    "Cross-chain interoperability",
    "Real-time settlement",
    "Decentralized governance",
    "Transparent audit trails",
    "Multi-signature security"
  ];

  const scrollToConsultation = () => {
    const element = document.getElementById("consultation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="dlt-pillar" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6">
            <Network className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            DLT <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Innovation</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Achieve 10,000+ TPS with 90% cost reduction through distributed ledger technology.
          </p>
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
              <Card className="bg-white/5 border-purple-200/30 h-full hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full">
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

        {/* Key Metrics Section */}
        <motion.div 
          className="grid md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { number: "10,000+", label: "Transactions Per Second", color: "text-blue-500" },
            { number: "90%", label: "Cost Reduction", color: "text-green-500" },
            { number: "99%", label: "Energy Efficiency", color: "text-purple-500" },
            { number: "100%", label: "Transparency", color: "text-blue-500" }
          ].map((metric, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white/5 border border-purple-200/30 rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                {metric.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Capabilities Section */}
        <motion.div 
          className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8 border border-purple-200/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <Globe className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Advanced DLT Capabilities</h3>
            <p className="text-lg text-muted-foreground">Comprehensive blockchain solutions engineered for enterprise-scale performance</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div 
                key={capability}
                className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg border border-purple-200/20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="text-purple-500 h-5 w-5 flex-shrink-0" />
                <span className="font-medium">{capability}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button 
              onClick={scrollToConsultation}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Explore DLT Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}