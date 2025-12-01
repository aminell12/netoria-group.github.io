import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export const ValueCard = ({ icon: Icon, title, description, index }: ValueCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center group"
    >
      <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-card border border-border flex items-center justify-center group-hover:border-primary/50 transition-all duration-300 group-hover:shadow-glow">
        <Icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </motion.div>
  );
};
