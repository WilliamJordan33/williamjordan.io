import { motion } from "framer-motion";
import { 
  Quote, 
  Star,
  TrendingUp,
  Shield,
  Zap
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "75% time reduction first quarter.",
      author: "Sarah Chen",
      position: "CTO",
      company: "Manufacturing",
      result: "75% faster",
      icon: TrendingUp,
      rating: 5
    },
    {
      quote: "60% cost reduction immediately.",
      author: "Marcus Rodriguez", 
      position: "Operations Director", 
      company: "Supply Chain",
      result: "60% savings",
      icon: Zap,
      rating: 5
    }
  ];

  const stats = [
    { number: "50+", label: "Successful Implementations" },
    { number: "99.9%", label: "Client Satisfaction" },
    { number: "$2.5M+", label: "Average Cost Savings" },
    { number: "45%", label: "Avg. Efficiency Gain" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
            <Star className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Client <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Real client results.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-gray-200 h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <Quote className="h-8 w-8 text-blue-500/40" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <blockquote className="text-lg leading-relaxed mb-8 text-foreground">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Result Badge */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="flex items-center space-x-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-200/30 px-4 py-2 rounded-full">
                      <testimonial.icon className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-semibold text-green-400">
                        {testimonial.result}
                      </span>
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="text-center border-t border-gray-200/20 pt-6">
                    <div className="font-semibold text-foreground mb-1">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground mb-1">
                      {testimonial.position}
                    </div>
                    <div className="text-xs text-blue-400 font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl p-8 border border-blue-200/20">
            <h3 className="text-2xl font-bold mb-4">Trusted by Industry Leaders</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From Fortune 500 companies to innovative startups, our solutions consistently deliver measurable results and lasting transformation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}