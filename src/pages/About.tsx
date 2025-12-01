import { motion } from "framer-motion";
import { Target, Eye, Lightbulb, Users, Zap, Award } from "lucide-react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We are committed to delivering exceptional results that exceed expectations. Quality and precision are at the heart of everything we do.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace cutting-edge technologies and creative solutions to solve complex challenges and unlock new opportunities.",
  },
  {
    icon: Target,
    title: "Strategic Thinking",
    description:
      "We combine data-driven insights with visionary planning to create strategies that drive sustainable growth.",
  },
  {
    icon: Zap,
    title: "Execution",
    description:
      "We turn strategy into reality with precision and agility, ensuring seamless implementation and measurable results.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work as trusted partners with our clients, fostering open communication and shared success.",
  },
];

export default function About() {
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
              About Netoria Group
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              A forward-thinking consulting firm helping organizations evolve in the digital age
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Who We Are</h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Netoria Group is a forward-thinking consulting firm specializing in digital
                  transformation, innovation, and strategic business consulting. We partner with
                  organizations across industries to navigate the complexities of the modern
                  business landscape.
                </p>
                <p>
                  Our team of experienced consultants brings deep expertise in technology,
                  strategy, and process optimization. We don't just provide recommendations – we
                  roll up our sleeves and work alongside you to implement lasting change.
                </p>
                <p>
                  From startups to enterprise organizations, we've helped hundreds of clients
                  transform their operations, embrace innovation, and achieve sustainable growth.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-card border border-border p-12 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 tech-grid-bg" />
                <div className="relative z-10 text-center">
                  <div className="text-6xl md:text-8xl font-bold text-primary mb-4">10+</div>
                  <p className="text-xl text-muted-foreground">Years of Excellence</p>
                  <div className="mt-8 grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-bold text-foreground">200+</div>
                      <p className="text-sm text-muted-foreground">Projects Delivered</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-foreground">50+</div>
                      <p className="text-sm text-muted-foreground">Expert Consultants</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 tech-lines-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-card border border-border rounded-2xl p-10"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To empower organizations with innovative digital solutions and strategic insights
                that drive transformation, foster innovation, and create lasting value in an
                ever-evolving business landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-card border border-border rounded-2xl p-10"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To be the trusted partner of choice for organizations seeking to navigate digital
                transformation, becoming recognized globally as leaders in innovation, strategic
                consulting, and business evolution.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground text-center">
              Our Philosophy
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="leading-relaxed">
                At Netoria Group, we believe that successful transformation requires more than just
                technology – it demands a holistic approach that combines innovation, strategic
                insight, and flawless execution.
              </p>
              <p className="leading-relaxed">
                We don't believe in one-size-fits-all solutions. Every organization is unique, with
                its own challenges, opportunities, and culture. That's why we take the time to
                deeply understand your business before crafting tailored strategies that align with
                your goals.
              </p>
              <p className="leading-relaxed">
                Our commitment goes beyond delivering projects – we're invested in your long-term
                success. We build lasting partnerships based on trust, transparency, and shared
                objectives, working alongside you every step of the way.
              </p>
            </div>
          </motion.div>
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
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Discover how Netoria Group can help transform your organization
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
