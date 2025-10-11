import { motion } from "framer-motion";
import { Brain, Shield, Zap, ArrowRight, TrendingUp, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToConsultation = () => {
    const element = document.getElementById("consultation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("ai-pillar");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-gradient-to-b from-gray-50/50 to-white">
      {/* Professional background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-100/20 via-transparent to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-gray-900">Revolutionize</span>
              <br />
              <span className="text-gray-900">Your</span> <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Business</span>
            </h1>
            <motion.p 
              className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              AI, DLT & Data Sovereignty Solutions
            </motion.p>
          </motion.div>

          {/* Key Benefits - Horizontal Layout */}
          <motion.div 
            className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">30%</div>
              <div className="text-sm lg:text-base text-gray-600 font-medium">Cost Reduction</div>
            </div>
            <div className="hidden lg:block w-px h-16 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">10,000+</div>
              <div className="text-sm lg:text-base text-gray-600 font-medium">TPS Capability</div>
            </div>
            <div className="hidden lg:block w-px h-16 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-sm lg:text-base text-gray-600 font-medium">Data Control</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button 
              onClick={scrollToConsultation}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              onClick={scrollToServices}
              size="lg"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-10 py-4 text-lg font-semibold transition-all duration-300"
            >
              View Solutions
            </Button>
          </motion.div>

          {/* Service Preview Cards - Clean Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Intelligence</h3>
              <p className="text-gray-600 leading-relaxed">Predictive analytics and automation</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">DLT Innovation</h3>
              <p className="text-gray-600 leading-relaxed">High-speed secure transactions</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Sovereignty</h3>
              <p className="text-gray-600 leading-relaxed">Complete control and compliance</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}