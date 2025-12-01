import { motion } from "framer-motion";
import { Building2, Heart, ShoppingCart, Factory, Cpu, Zap } from "lucide-react";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const sectors = [
  {
    icon: Building2,
    title: "Financial Services",
    description: "Transform banking and financial operations with cutting-edge digital solutions, compliance frameworks, and customer experience optimization.",
    capabilities: [
      "Digital banking transformation",
      "Risk management systems",
      "Regulatory compliance",
      "Payment processing optimization"
    ]
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Modernize healthcare delivery through innovative technology solutions, patient care optimization, and data-driven insights.",
    capabilities: [
      "Electronic health records",
      "Telemedicine platforms",
      "Healthcare analytics",
      "Patient engagement solutions"
    ]
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    description: "Drive retail innovation with omnichannel strategies, customer analytics, and seamless digital shopping experiences.",
    capabilities: [
      "E-commerce platforms",
      "Customer personalization",
      "Inventory optimization",
      "Omnichannel integration"
    ]
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Optimize production processes with Industry 4.0 solutions, IoT integration, and intelligent supply chain management.",
    capabilities: [
      "Smart factory solutions",
      "Supply chain optimization",
      "Quality management systems",
      "Predictive maintenance"
    ]
  },
  {
    icon: Cpu,
    title: "Technology",
    description: "Accelerate tech innovation with advanced software development, cloud architecture, and digital product strategies.",
    capabilities: [
      "Product development",
      "Cloud architecture",
      "DevOps implementation",
      "Technical scaling"
    ]
  },
  {
    icon: Zap,
    title: "Energy & Utilities",
    description: "Transform energy operations with smart grid technologies, sustainability initiatives, and operational efficiency.",
    capabilities: [
      "Smart grid systems",
      "Energy management",
      "Sustainability solutions",
      "Infrastructure modernization"
    ]
  }
];

export default function Sectors() {
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
              Our Sectors
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Delivering specialized expertise across diverse industries to drive transformation and innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-24 bg-background relative">
        <div className="absolute inset-0 tech-lines-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
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
                    <sector.icon className="h-7 w-7 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{sector.title}</h3>
                  <p className="text-muted-foreground mb-6">{sector.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Capabilities:</h4>
                    <ul className="space-y-2">
                      {sector.capabilities.map((capability, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Experience CTA */}
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
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Whatever your industry, we have the expertise to drive meaningful transformation
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
