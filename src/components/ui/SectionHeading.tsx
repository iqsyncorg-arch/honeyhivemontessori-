import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  align?: "left" | "center" | "right";
}

const SectionHeading = ({
  title,
  subtitle,
  className,
  titleClassName,
  align = "center",
}: SectionHeadingProps) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("mb-12", alignmentClasses[align], className)}
    >
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#3B2A1A]",
          titleClassName
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-[#3B2A1A]/80 font-body text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
