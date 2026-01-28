import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export function SectionHeading({ 
  title, 
  subtitle, 
  align = "center", 
  className = "",
  light = false
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 ${light ? "text-white" : "text-secondary"}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-lg md:text-xl leading-relaxed ${light ? "text-white/80" : "text-muted-foreground"}`}>
            {subtitle}
          </p>
        )}
        <div className={`h-1 w-20 bg-primary mt-6 rounded-full ${align === "center" ? "mx-auto" : ""}`} />
      </motion.div>
    </div>
  );
}
