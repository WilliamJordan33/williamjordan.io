import { motion } from "framer-motion";
import { 
  Brain, 
  Target, 
  Zap, 
  BarChart3, 
  Users, 
  TrendingUp,
  CheckCircle,
  Lightbulb,
  Activity,
  ArrowRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AIPillarSection() {
  const features = [
    {
      icon: Brain,
      title: "Predictive Analytics",
      description: "95% accuracy forecasting",
      color: "text-blue-500"
    },
    {
      icon: Zap,
      title: "Intelligent Automation",
      description: "Real-time adaptive workflows",
      color: "text-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Resource Optimization", 
      description: "Maximize operational efficiency",
      color: "text-blue-500"
    }
  ];

  const capabilities = [
    "Advanced machine learning models",
    "Real-time data processing",
    "Predictive business analytics",
    "Automated decision systems",
    "Customer behavior analysis",
    "Operational efficiency optimization"
  ];

  const painPoints = [
    {
      problem: "Manual processes consuming 40+ hours weekly",
      solution: "AI automation reducing manual work by 75%",
      impact: "30+ hours saved per week"
    },
    {
      problem: "Difficulty predicting market changes",
      solution: "Predictive analytics with 95%+ accuracy",
      impact: "Proactive strategic decisions"
    },
    {
      problem: "Inconsistent customer experiences",
      solution: "AI-driven personalization engine",
      impact: "40% increase in satisfaction"
    }
  ];

  const scrollToConsultation = () => {
    const element = document.getElementById("consultation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="ai-pillar" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
            <Brain className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            AI-Driven <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Intelligence</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reduce manual work by 75% with predictive analytics and intelligent automation.
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
              <Card className="bg-white border-gray-200 h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-fit mb-6">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Capabilities Section */}
        <motion.div 
          className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <Lightbulb className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Core AI Capabilities</h3>
            <p className="text-lg text-muted-foreground">Comprehensive AI solutions designed to solve your most pressing business challenges</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div 
                key={capability}
                className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg border border-blue-200/20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="text-blue-500 h-5 w-5 flex-shrink-0" />
                <span className="font-medium">{capability}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button 
              onClick={scrollToConsultation}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Discover Your AI Potential
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}