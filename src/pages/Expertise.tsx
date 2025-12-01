import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Database, Brain, Shield, Cloud, GitBranch, Workflow, LineChart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const expertise = [
  {
    icon: Database,
    title: "Data & Analytics",
    description: "Transform raw data into strategic insights with advanced analytics, business intelligence, and data visualization solutions.",
    capabilities: [
      "Data warehousing & lakes",
      "Business intelligence dashboards",
      "Advanced analytics & reporting",
      "Data governance frameworks"
    ],
    technologies: ["Power BI", "Tableau", "Snowflake", "Apache Spark"]
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Harness the power of AI and machine learning to automate processes, predict outcomes, and unlock new business opportunities.",
    capabilities: [
      "Machine learning models",
      "Natural language processing",
      "Computer vision solutions",
      "Predictive analytics"
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "Azure AI"]
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your digital assets with comprehensive security strategies, threat detection, and compliance frameworks.",
    capabilities: [
      "Security architecture design",
      "Threat detection & response",
      "Compliance & governance",
      "Security audits & testing"
    ],
    technologies: ["Zero Trust", "SIEM", "IAM", "Cloud Security"]
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Migrate, optimize, and scale your infrastructure with modern cloud technologies and best practices.",
    capabilities: [
      "Cloud migration strategies",
      "Multi-cloud architecture",
      "Cloud cost optimization",
      "Infrastructure as code"
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes"]
  },
  {
    icon: GitBranch,
    title: "Digital Transformation",
    description: "Modernize your entire organization with cutting-edge digital technologies, methodologies, and cultural change.",
    capabilities: [
      "Digital strategy roadmaps",
      "Legacy system modernization",
      "Agile transformation",
      "Change management"
    ],
    technologies: ["Microservices", "API Management", "DevOps", "Agile"]
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Streamline operations and boost efficiency through intelligent automation and workflow optimization.",
    capabilities: [
      "Robotic process automation",
      "Workflow orchestration",
      "Integration platforms",
      "Low-code solutions"
    ],
    technologies: ["UiPath", "Power Automate", "Zapier", "MuleSoft"]
  },
  {
    icon: LineChart,
    title: "Enterprise Architecture",
    description: "Design scalable and resilient enterprise systems that align technology with business strategy.",
    capabilities: [
      "Architecture frameworks",
      "System integration design",
      "Technology roadmaps",
      "Enterprise governance"
    ],
    technologies: ["TOGAF", "Microservices", "ESB", "API Gateway"]
  },
  {
    icon: Globe,
    title: "Digital Experience",
    description: "Create exceptional digital experiences across all customer touchpoints with modern UX/UI design and development.",
    capabilities: [
      "User experience design",
      "Web & mobile applications",
      "Customer journey mapping",
      "Digital accessibility"
    ],
    technologies: ["React", "React Native", "Next.js", "Figma"]
  }
];

export default function Expertise() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <AnimatedBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              Our Expertise
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Deep technical capabilities across critical technology domains to power your digital transformation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-24 bg-background relative">
        <div className="absolute inset-0 tech-lines-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  <p className="text-muted-foreground mb-6">{item.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3">Key Capabilities:</h4>
                      <ul className="space-y-2">
                        {item.capabilities.map((capability, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <AnimatedBackground />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Transform Your Technology?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how our expertise can accelerate your digital transformation journey
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
