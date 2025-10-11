import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ProfessionalServices() {
  const scrollToConsultation = () => {
    const element = document.getElementById("consultation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Profile Section */}
      <section className="pt-20 pb-12 bg-background">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-3xl font-bold text-primary mb-8">WILLIAMJORDAN.IO</h2>
                <div className="flex justify-center">
                  <img 
                    src="/william-jordan.jpeg" 
                    alt="William Jordan" 
                    className="max-w-sm w-full h-auto rounded-lg border-4 border-primary/20 shadow-xl"
                  />
                </div>
              </motion.div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-16"
              >
                <div className="text-center pb-8 border-b-2 border-primary/20">
                  <h1 className="text-5xl font-bold text-primary">Independent Marketing Consultant</h1>
                </div>

                <Card className="p-10 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30">
                  <h2 className="text-3xl font-bold mb-6 text-center text-primary">What I Do</h2>
                  <p className="text-xl text-center leading-relaxed mb-6">
                    I show businesses how to create custom <span className="font-bold text-primary">Organic Marketing Lead Magnets (OMLM's)</span>.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto mb-12">
                    This is where a company creates its own lead magnet—a free value proposition in exchange for the prospect's information—which we integrate into the company's CRM. The company markets out the free value proposition which attracts leads and boosts their reputation.
                  </p>

                  <div className="border-t-2 border-primary/20 pt-10">
                    <h3 className="text-2xl font-bold mb-8 text-center text-primary">OMLM Process Flow</h3>
                    
                    <div className="flex justify-center items-center mb-8">
                      <div className="max-w-4xl w-full space-y-4">
                        {/* Step 1 */}
                        <div className="flex justify-center">
                          <div className="bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-primary/30 rounded-lg p-4 text-center w-80">
                            <p className="font-semibold text-primary">1. Create New Free Value Prop</p>
                            <p className="text-sm text-muted-foreground">(Custom Lead Magnet)</p>
                          </div>
                        </div>
                        
                        {/* Arrow */}
                        <div className="flex justify-center">
                          <div className="w-0.5 h-8 bg-primary/30"></div>
                        </div>
                        
                        {/* Step 2 */}
                        <div className="flex justify-center">
                          <div className="bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-primary/30 rounded-lg p-4 text-center w-80">
                            <p className="font-semibold text-primary">2. Introduce to Market</p>
                            <p className="text-sm text-muted-foreground">(Organic Promotion via Channels)</p>
                          </div>
                        </div>
                        
                        {/* Arrow */}
                        <div className="flex justify-center">
                          <div className="w-0.5 h-8 bg-primary/30"></div>
                        </div>
                        
                        {/* Step 3 */}
                        <div className="flex justify-center">
                          <div className="bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-primary/30 rounded-lg p-4 text-center w-80">
                            <p className="font-semibold text-primary">3. Gain Leads</p>
                            <p className="text-sm text-muted-foreground">(Prospects Opt-In for Value Exchange & Provide Info)</p>
                          </div>
                        </div>
                        
                        {/* Arrow */}
                        <div className="flex justify-center">
                          <div className="w-0.5 h-8 bg-primary/30"></div>
                        </div>
                        
                        {/* Step 4 */}
                        <div className="flex justify-center">
                          <div className="bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-primary/30 rounded-lg p-4 text-center w-80">
                            <p className="font-semibold text-primary">4. Build Marketing Campaign</p>
                            <p className="text-sm text-muted-foreground">(Based on Leads & Value Prop - e.g., Value-Rich Emails)</p>
                          </div>
                        </div>
                        
                        {/* Side branches */}
                        <div className="flex justify-center gap-8 pt-4">
                          <div className="bg-gradient-to-r from-secondary/30 to-secondary/20 border-2 border-secondary/40 rounded-lg p-4 text-center w-64">
                            <p className="font-semibold text-foreground">Side Benefit: Boost Reputation</p>
                            <p className="text-sm text-muted-foreground">(From Value-Driven Exposure)</p>
                          </div>
                          
                          <div className="bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-primary/30 rounded-lg p-4 text-center w-64">
                            <p className="font-semibold text-primary">5. Nurture & Convert Leads</p>
                            <p className="text-sm text-muted-foreground">(To Customers)</p>
                          </div>
                        </div>
                        
                        {/* Arrow */}
                        <div className="flex justify-center">
                          <div className="w-0.5 h-8 bg-primary/30"></div>
                        </div>
                        
                        {/* Feedback Loop */}
                        <div className="flex justify-center">
                          <div className="bg-gradient-to-r from-secondary/30 to-secondary/20 border-2 border-secondary/40 rounded-lg p-4 text-center w-80">
                            <p className="font-semibold text-foreground">Feedback Loop: Refine Value Prop & Campaign</p>
                            <p className="text-sm text-muted-foreground">(Optional)</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 max-w-4xl mx-auto">
                      <h4 className="text-xl font-bold text-primary mb-4">Step-by-Step Process:</h4>
                      
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <span className="font-bold text-primary flex-shrink-0">1.</span>
                          <p className="text-muted-foreground"><span className="font-semibold text-foreground">Create New Free Value Proposition:</span> Develop a fresh, custom lead magnet (e.g., guide, tool, or resource) tailored to your audience's needs.</p>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <span className="font-bold text-primary flex-shrink-0">2.</span>
                          <p className="text-muted-foreground"><span className="font-semibold text-foreground">Introduce to Market:</span> Promote the value prop organically (e.g., via content, social media, SEO) to attract attention without heavy ads.</p>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <span className="font-bold text-primary flex-shrink-0">3.</span>
                          <p className="text-muted-foreground"><span className="font-semibold text-foreground">Gain Leads:</span> Prospects exchange their contact info for the free value, populating your CRM with qualified leads.</p>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <span className="font-bold text-primary flex-shrink-0">4.</span>
                          <p className="text-muted-foreground"><span className="font-semibold text-foreground">Build Marketing Campaign:</span> Using insights from the leads and the value prop itself, construct targeted campaigns (e.g., email sequences rich in value to nurture relationships).</p>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <span className="font-bold text-primary flex-shrink-0">5.</span>
                          <p className="text-muted-foreground"><span className="font-semibold text-foreground">Nurture & Convert Leads:</span> Deliver ongoing value through the campaign to build trust, leading to conversions into customers.</p>
                        </div>
                        
                        <div className="flex items-start space-x-3">
                          <span className="font-bold text-primary flex-shrink-0">6.</span>
                          <p className="text-muted-foreground"><span className="font-semibold text-foreground">Feedback Loop (Optional Cycle):</span> Analyze results to refine the value prop or campaign for better future performance, creating a sustainable loop.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="p-8 bg-gradient-to-br from-primary/5 to-transparent">
                    <h2 className="text-2xl font-bold mb-4 text-primary">Free Consultations</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      I give these consultations free of charge and the company can pay me on the back end based on the amount of value that they think I have provided them.
                    </p>
                  </Card>

                  <Card className="p-8 bg-gradient-to-br from-primary/5 to-transparent">
                    <h2 className="text-2xl font-bold mb-4 text-primary">Why It Matters</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      In today's competitive market, effective marketing isn't optional, but it shouldn't steal your time or add more stress. That's where I come in: I'll teach you how to create sustainable lead generation systems that work 24/7 to attract quality prospects—without ongoing costs or dependence on external agencies.
                    </p>
                  </Card>
                </div>

                <div className="bg-secondary/30 rounded-xl p-10">
                  <h2 className="text-3xl font-bold mb-6 text-center">The Challenge You're Facing</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
                    You're running a successful business, but marketing feels like a constant battle. You know you need to attract more clients, build your brand, and optimize campaigns, but who has the time? Between daily operations, client work, and everything else, marketing often falls to the bottom of the list—or gets ignored altogether.
                  </p>
                </div>

                <div className="bg-secondary/30 rounded-xl p-10">
                  <h2 className="text-3xl font-bold mb-6 text-center">Why It's Holding You Back</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
                    This gap means missed opportunities: potential customers slipping away to competitors, stalled growth, and the frustration of knowing your business could be thriving more if only marketing wasn't such a drain. It's exhausting trying to juggle it all, and DIY efforts often lead to wasted budget and underwhelming results.
                  </p>
                </div>

                <Card className="p-10 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
                  <h2 className="text-3xl font-bold mb-6 text-center text-primary">How I Help You</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
                    I teach you how to create your own Organic Marketing Lead Magnets that work for your specific business. Through personalized consultation, you'll learn to design compelling lead magnets, integrate them with your CRM, and market them effectively to attract quality leads organically. You keep all the knowledge and tools—I'm just here to show you the way, with completely free consultations and optional pay-on-value.
                  </p>
                </Card>

                <div className="pt-8">
                  <h2 className="text-3xl font-bold mb-10 text-center">What You'll Learn</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="h-3 w-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h3 className="font-bold text-xl mb-2">Lead Magnet Design:</h3>
                          <p className="text-muted-foreground text-lg">Create compelling free value propositions that attract your ideal prospects.</p>
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="h-3 w-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h3 className="font-bold text-xl mb-2">CRM Integration:</h3>
                          <p className="text-muted-foreground text-lg">Seamlessly connect lead capture to your existing customer management systems.</p>
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="h-3 w-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h3 className="font-bold text-xl mb-2">Marketing Strategy:</h3>
                          <p className="text-muted-foreground text-lg">Learn how to market your lead magnets to boost reputation and attract quality leads.</p>
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="h-3 w-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h3 className="font-bold text-xl mb-2">Organic Growth:</h3>
                          <p className="text-muted-foreground text-lg">Build sustainable lead generation without relying on paid advertising.</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

                <div className="pt-16 text-center">
                  <h3 className="text-5xl font-bold text-primary mb-6">Free E-Book: NO-CODE MASTERY</h3>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                    This e-book is a complete guide to mastering no-code web development using AI tools like VS Code and GitHub Copilot. It walks readers through every stage of building a full-stack web application—from cloning repositories and analyzing documentation to designing databases, frontends, and deployment pipelines—all without writing traditional code. Combining the power of AI automation with modern development workflows, it empowers creators to launch professional-grade, scalable applications quickly and efficiently. Ultimately, it's a roadmap for turning ideas into fully functional digital products through the power of AI-assisted, no-code development.
                  </p>
                  <img 
                    src="/no-code-mastery-ebook.png" 
                    alt="No-Code Mastery E-book Cover" 
                    className="max-w-md w-full h-auto mx-auto mb-16 rounded-lg shadow-2xl"
                  />
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeC7FOqd7RO9S9agCV91SU4R3nCIFtdyrS7z9LrtrlaAl4vmw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('https://docs.google.com/forms/d/e/1FAIpQLSeC7FOqd7RO9S9agCV91SU4R3nCIFtdyrS7z9LrtrlaAl4vmw/viewform', '_blank');
                    }}
                  >
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-12 py-6 text-xl font-semibold"
                    >
                      Claim Free E-Book Now
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
    </div>
  );
}
