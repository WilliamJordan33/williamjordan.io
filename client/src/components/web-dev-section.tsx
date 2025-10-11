import { motion } from "framer-motion";
import { 
  Code, 
  Smartphone, 
  Server, 
  Cloud, 
  Shield,
  GitBranch 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import devFlowDiagram from "@assets/image_1747992945180.png";
import ideScreenshot from "@assets/image_1748027534996.png";

export default function WebDevSection() {
  const techStacks = [
    {
      category: "Frontend Development",
      color: "text-primary",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"]
    },
    {
      category: "Backend Development", 
      color: "text-success",
      technologies: ["Node.js", "Python", "Express.js", "FastAPI", "PostgreSQL"]
    },
    {
      category: "Development Tools",
      color: "text-primary",
      technologies: ["VS Code", "GitHub", "Replit", "Docker", "Vercel"]
    }
  ];

  const services = [
    {
      icon: Code,
      title: "Custom Web Applications",
      description: "Scalable, high-performance applications tailored to business requirements",
      color: "text-primary"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first, cross-platform compatible designs and implementations",
      color: "text-success"
    },
    {
      icon: Server,
      title: "API Development",
      description: "RESTful and GraphQL APIs with comprehensive documentation",
      color: "text-primary"
    },
    {
      icon: Cloud,
      title: "Cloud Deployment",
      description: "Scalable cloud infrastructure and DevOps implementation",
      color: "text-success"
    },
    {
      icon: Shield,
      title: "Security & Performance",
      description: "Advanced security measures and performance optimization",
      color: "text-primary"
    }
  ];



  return (
    <section id="web-dev" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Full-Stack Web <span className="text-primary">Development</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building robust, scalable web applications and websites using cutting-edge technologies and modern development practices.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Technical Expertise */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Technical Expertise</h3>
            
            <div className="space-y-6">
              {techStacks.map((stack, index) => (
                <motion.div 
                  key={stack.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-secondary p-6">
                    <CardContent className="p-0">
                      <h4 className={`text-lg font-semibold mb-3 ${stack.color}`}>
                        {stack.category}
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {stack.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="secondary" 
                            className="bg-background text-foreground"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Development Services */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Development Services</h3>
            
            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div 
                  key={service.title}
                  className="flex items-start space-x-4 p-4 bg-secondary/50 rounded-lg"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <service.icon className={`${service.color} h-6 w-6 mt-1 flex-shrink-0`} />
                  <div>
                    <h4 className="font-semibold mb-2">{service.title}</h4>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Development in Action */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Development in Action</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real full-stack development using modern tools and frameworks - from backend controllers to frontend components
            </p>
          </div>

          <div className="bg-secondary/30 rounded-lg p-6 border border-gray-800 mb-16">
            <img 
              src={ideScreenshot} 
              alt="Full-Stack Development IDE Screenshot showing real development workflow"
              className="w-full rounded-lg shadow-2xl border border-gray-700"
            />
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                <span className="text-white font-semibold">Live Development Environment:</span> Professional IDE with backend controllers, frontend components, and seamless full-stack integration
              </p>
            </div>
          </div>
        </motion.div>

        {/* Development Flow Diagram */}
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Complete Development Workflow</h3>
            <p className="text-xl text-muted-foreground">
              From concept to deployment - see how I build scalable, high-performance applications
            </p>
          </div>

          <div className="bg-secondary/30 rounded-lg p-8">
            <img 
              src={devFlowDiagram} 
              alt="Complete Full-Stack Development Workflow Diagram"
              className="w-full rounded-lg mb-6"
            />
            
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-lg text-muted-foreground">
                  <span className="text-white font-semibold">Comprehensive Development Pipeline:</span> Complete full-stack development process showcasing integration across frontend, backend, cloud deployment, and security optimization.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                  <h5 className="text-white font-semibold mb-3 text-center">Frontend</h5>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• React.js with TypeScript</li>
                    <li>• Vue.js responsive design</li>
                    <li>• Tailwind CSS styling</li>
                    <li>• Seamless API integration</li>
                  </ul>
                </div>
                
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                  <h5 className="text-white font-semibold mb-3 text-center">Backend</h5>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Node.js & Express.js</li>
                    <li>• Python with FastAPI</li>
                    <li>• PostgreSQL databases</li>
                    <li>• Docker containerization</li>
                  </ul>
                </div>
                
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                  <h5 className="text-white font-semibold mb-3 text-center">Development</h5>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• GitHub version control</li>
                    <li>• VS Code development</li>
                    <li>• Replit prototyping</li>
                    <li>• CI/CD workflows</li>
                  </ul>
                </div>
                
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                  <h5 className="text-white font-semibold mb-3 text-center">Deployment</h5>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Vercel cloud hosting</li>
                    <li>• Security optimization</li>
                    <li>• RESTful & GraphQL APIs</li>
                    <li>• Scalable environments</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-primary/10 p-4 rounded-lg text-center">
                <p className="text-lg">
                  <span className="text-white font-semibold">End-to-End Excellence:</span> Delivering scalable, high-performance web applications through modern development practices with advanced security and performance optimization.
                </p>
              </div>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
}
