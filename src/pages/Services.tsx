import { motion } from "framer-motion";
import { Zap, Target, Cpu, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const services = [
  {
    icon: Zap,
    title: "Digital Transformation",
    description:
      "Modernize your organization with cutting-edge digital solutions, cloud technologies, and data-driven strategies that position you for the future.",
    points: [
      "Cloud migration and optimization strategies",
      "Digital workflow automation and optimization",
      "Advanced data analytics and business intelligence",
      "Legacy system modernization and integration",
      "Digital maturity assessment and roadmapping",
    ],
  },
  {
    icon: Target,
    title: "Business Strategy",
    description:
      "Strategic insights and comprehensive roadmaps to drive sustainable growth, enhance competitive advantage, and achieve your business objectives.",
    points: [
      "Strategic vision development and alignment",
      "Market analysis and competitive positioning",
      "Growth strategy planning and execution",
      "Performance optimization and KPI management",
      "Change management and organizational transformation",
    ],
  },
  {
    icon: Cpu,
    title: "Process Automation",
    description:
      "Streamline operations and boost efficiency through intelligent automation, reducing costs while improving quality and speed.",
    points: [
      "Workflow automation design and implementation",
      "System integration and API development",
      "Robotic Process Automation (RPA)",
      "Business process reengineering",
      "Custom automation solution development",
    ],
  },
  {
    icon: Lightbulb,
    title: "Innovation & Technology",
    description:
      "Leverage AI, machine learning, and emerging technologies to stay ahead of the curve and unlock new opportunities for growth.",
    points: [
      "AI and machine learning solution design",
      "Advanced analytics and predictive modeling",
      "Emerging technology evaluation and adoption",
      "Innovation workshops and ideation sessions",
      "Technology stack optimization",
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <AnimatedBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive consulting solutions to drive your digital transformation and business growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Icon & Title Column */}
                  <div className={`${!isEven ? "lg:col-start-2" : ""}`}>
                    <div className="w-20 h-20 rounded-2xl bg-gradient-card border border-primary/30 flex items-center justify-center mb-6 shadow-glow">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <h2 className="text-4xl font-bold mb-4 text-foreground">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                    <Button variant="premium" asChild>
                      <Link to="/contact">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  {/* Details Column */}
                  <div className={`${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <div className="bg-gradient-card border border-border rounded-2xl p-8 space-y-4">
                      {service.points.map((point, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          className="flex items-start gap-3 group"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform" />
                          <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                            {point}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Let's Build Your Future Together
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to take the next step? Contact us for a consultation
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
