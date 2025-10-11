import { motion } from "framer-motion";
import { 
  Brain, 
  Palette, 
  Languages, 
  Clock, 
  Database, 
  TrendingUp,
  CheckCircle,
  BarChart3,
  PieChart
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import marketShareChart from "@assets/image_1747989931646.png";
import marketGrowthChart from "@assets/image_1747989909113.png";

export default function AISupportSection() {
  const features = [
    {
      icon: Brain,
      title: "Real-Time Intelligence",
      description: "Powered by OpenAI's GPT-4o API for instant, accurate responses with advanced natural language processing capabilities.",
      color: "text-primary"
    },
    {
      icon: Palette,
      title: "Brand Alignment",
      description: "Fully customizable agents that match your brand voice, tone, and standards while adapting to customer context.",
      color: "text-success"
    },
    {
      icon: Languages,
      title: "Global Reach",
      description: "Support for 10+ major languages enabling businesses to serve diverse global audiences effectively.",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "24/7 Operations",
      description: "Handle unlimited inquiries simultaneously with no wait times, providing scalable solutions around the clock.",
      color: "text-success"
    },
    {
      icon: Database,
      title: "CRM Integration",
      description: "Seamless integration with Airtable, Calendly, and other business platforms for streamlined workflows.",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "Agents learn from interactions and performance metrics to enhance engagement and response quality over time.",
      color: "text-success"
    }
  ];

  const capabilities = [
    "Real-time GPT-4o responses",
    "Personalized interactions",
    "Lead capture & CRM sync",
    "Appointment scheduling",
    "Cost-effective automation",
    "Voice recognition ready"
  ];

  return (
    <section id="ai-support" className="py-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            AI Customer Support <span className="text-primary">Agents</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leveraging advanced GPT-4o technology to create intelligent, multilingual customer support agents that operate 24/7 and integrate seamlessly with your business systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-secondary hover:bg-secondary/80 transition-colors border border-primary/10 h-full">
                <CardContent className="p-8">
                  <feature.icon className={`${feature.color} h-8 w-8 mb-4`} />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-primary/10 rounded-2xl p-8 border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Key Agent Capabilities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div 
                key={capability}
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="text-success h-5 w-5 flex-shrink-0" />
                <span>{capability}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Market Data Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">The AI Revolution is Here</h3>
            <p className="text-xl text-muted-foreground">
              Join the $7.5+ billion chatbot market that's transforming customer service across every industry
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Market Share Chart */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-secondary border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <PieChart className="text-primary h-8 w-8 mr-3" />
                    <h4 className="text-xl font-bold">Global Market Share by Industry</h4>
                  </div>
                  
                  <img 
                    src={marketShareChart} 
                    alt="Global Chatbot Market Share by Vertical 2022"
                    className="w-full rounded-lg mb-6"
                  />
                  
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>Global Chatbot Market Share by Vertical (2022)</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Overview: The chart shows the chatbot market distribution by industry in 2022, with a total value of <strong>$5.1 billion</strong>.
                    </p>
                    
                    <div className="space-y-3">
                      <h5 className="text-sm font-semibold">Key Verticals:</h5>
                      
                      <div className="space-y-2 text-sm">
                        <div><strong>Retail & E-commerce (25%):</strong> Largest segment, focused on customer engagement and sales automation.</div>
                        <div><strong>Healthcare (20%):</strong> Used for telehealth, scheduling, and patient support.</div>
                        <div><strong>BFSI (15%):</strong> Aids in banking queries and fraud detection.</div>
                        <div><strong>Media & Entertainment (10%):</strong> Supports content recommendations and engagement.</div>
                        <div><strong>Travel & Tourism (10%):</strong> Streamlines booking and itinerary management.</div>
                        <div><strong>Transportation & Logistics (10%):</strong> Enhances tracking and delivery updates.</div>
                        <div><strong>Others (10%):</strong> Includes education and government services.</div>
                      </div>
                    </div>
                    
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="text-sm font-semibold">
                        <strong>Insights:</strong> Retail leads due to its focus on customer experience, while BFSI and Healthcare see strong adoption for automation and cost reduction. Chatbots' adaptability fuels their growth across sectors.
                      </p>
                    </div>
                    
                    <p className="text-xs text-muted-foreground">
                      Source: Grand View Research. Chatbot Market Size, Share & Trends Analysis Report By Type (Rule Based, AI Based), By Application, By Vertical (Retail, BFSI, Healthcare), By Region, And Segment Forecasts, 2023 - 2030. www.grandviewresearch.com/industry-analysis/chatbot-market. Accessed 24 Nov. 2024.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Growth Projections Chart */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-secondary border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <BarChart3 className="text-primary h-8 w-8 mr-3" />
                    <h4 className="text-xl font-bold">North America Growth Trajectory</h4>
                  </div>
                  
                  <img 
                    src={marketGrowthChart} 
                    alt="North America Chatbot Market Size 2020-2030"
                    className="w-full rounded-lg mb-6"
                  />
                  
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>North America Chatbot Market Size and Market Projections (2020 - 2030)</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      The chart illustrates rapid growth in North America from 2020 to 2030. Key factors driving this growth include:
                    </p>
                    
                    <div className="space-y-3">
                      <div className="text-sm">
                        <strong>Increased Demand for Automation:</strong> Businesses adopt chatbots for 24/7 customer service and reduced operational costs, meeting customer demand for self-service options.
                      </div>
                      
                      <div className="text-sm">
                        <strong>Preference for Messaging Applications:</strong> Individuals increasingly prefer messaging platforms over social networking sites, enhancing integration opportunities.
                      </div>
                      
                      <div className="text-sm">
                        <strong>Advancements in NLP and AI:</strong> Developments in natural language processing enable smoother human-bot interactions, improving user experience and expanding use cases.
                      </div>
                      
                      <div className="text-sm">
                        <strong>Pandemic Acceleration:</strong> COVID-19 accelerated chatbot adoption in healthcare, financial services, and retail for managing queries and supporting essential services.
                      </div>
                      
                      <div className="text-sm">
                        <strong>Diverse Applications:</strong> Chatbots operate across websites, standalone apps, and third-party platforms, handling customer complaints, sales automation, and personalized assistance.
                      </div>
                    </div>
                    
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="text-sm font-semibold">
                        The market is further boosted by voice recognition and analytics integration, providing deeper insights into customer behavior. Chatbot adoption continues growing due to their ability to deliver timely, cost-effective, and scalable solutions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
