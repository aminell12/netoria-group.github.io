import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, TrendingUp, Cpu, Target, Award, Lightbulb, Users, Database, Brain, Shield, Cloud, GitBranch, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { ValueCard } from "@/components/ValueCard";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import heroLogo from "@/assets/logo-hero.png";

const services = [
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Modernize your organization with cutting-edge digital solutions and cloud technologies.",
    features: [
      "Cloud migration and optimization",
      "Digital workflow automation",
      "Data analytics and insights",
      "Legacy system modernization",
    ],
  },
  {
    icon: Target,
    title: "Business Strategy",
    description: "Strategic insights and roadmaps to drive sustainable growth and competitive advantage.",
    features: [
      "Strategic vision development",
      "Market analysis and positioning",
      "Growth strategy planning",
      "Performance optimization",
    ],
  },
  {
    icon: Cpu,
    title: "Process Automation",
    description: "Streamline operations and boost efficiency through intelligent automation.",
    features: [
      "Workflow automation design",
      "System integration",
      "Efficiency optimization",
      "Custom automation solutions",
    ],
  },
  {
    icon: Lightbulb,
    title: "Innovation & Technology",
    description: "Leverage AI, analytics, and emerging technologies to stay ahead of the curve.",
    features: [
      "AI and machine learning solutions",
      "Advanced analytics implementation",
      "Emerging technology adoption",
      "Innovation workshops",
    ],
  },
];

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering exceptional results that exceed expectations",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Embracing cutting-edge technologies and creative solutions",
  },
  {
    icon: Target,
    title: "Strategic Thinking",
    description: "Data-driven insights combined with visionary planning",
  },
  {
    icon: Zap,
    title: "Execution",
    description: "Turning strategy into reality with precision and agility",
  },
];

const industries = [
  "Financial Services",
  "Healthcare",
  "Retail & E-commerce",
  "Manufacturing",
  "Technology",
  "Energy & Utilities",
];

const expertise = [
  {
    icon: Database,
    title: "Data & Analytics",
    description: "Transform data into actionable insights with advanced analytics and business intelligence solutions.",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Leverage AI and machine learning to automate processes and unlock new possibilities.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your digital assets with comprehensive security strategies and solutions.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Migrate and optimize your infrastructure with scalable cloud technologies.",
  },
  {
    icon: GitBranch,
    title: "Digital Transformation",
    description: "Modernize your operations with cutting-edge digital technologies and methodologies.",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Streamline workflows and boost efficiency through intelligent automation.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <img
              src={heroLogo}
              alt="Netoria Group"
              className="mx-auto w-full max-w-3xl h-auto animate-fade-in"
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            >
              We help organizations transform, innovate, and scale by delivering modern digital
              solutions, strategic insights, and automated processes.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">Discover Our Services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Discover Us Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Discover Netoria Group
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We are a forward-thinking consulting firm dedicated to helping organizations navigate 
                the complexities of digital transformation. Our team of experts combines strategic thinking 
                with technical excellence to deliver solutions that drive real business impact.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                With a proven track record across multiple industries, we partner with our clients to 
                unlock innovation, optimize operations, and accelerate growth in an ever-evolving digital landscape.
              </p>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-gradient-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <p className="text-muted-foreground">Years of Experience</p>
              </div>
              <div className="bg-gradient-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <p className="text-muted-foreground">Projects Delivered</p>
              </div>
              <div className="bg-gradient-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Expert Consultants</p>
              </div>
              <div className="bg-gradient-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-24 bg-background relative">
        <div className="absolute inset-0 tech-lines-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Our Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized capabilities across key technology domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gradient-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-card relative">
        <div className="absolute inset-0 tech-lines-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive consulting services to drive your digital transformation journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Netoria Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Why Netoria Group?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our core values drive everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 bg-background relative">
        <div className="absolute inset-0 tech-lines-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Our Approach
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology for digital transformation success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discover & Analyze",
                description: "Deep dive into your business challenges, opportunities, and objectives",
              },
              {
                step: "02",
                title: "Strategy & Design",
                description: "Develop comprehensive roadmaps and innovative solutions tailored to your needs",
              },
              {
                step: "03",
                title: "Execute & Optimize",
                description: "Implement solutions with precision and continuously optimize for maximum impact",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative bg-gradient-card border border-border rounded-2xl p-8 group hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-6xl font-bold text-primary/20 mb-4">{step.step}</div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Sectors Section */}
      <section className="py-24 bg-card relative">
        <div className="absolute inset-0 tech-grid-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Our Sectors
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Delivering expertise across diverse industries
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-gradient-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-glow group cursor-default"
              >
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {industry}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <AnimatedBackground />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can help you achieve your digital transformation goals
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
