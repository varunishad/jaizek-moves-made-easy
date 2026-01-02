import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  variant?: "teal" | "coral";
  delay?: number;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  href,
  variant = "teal",
  delay = 0,
}: ServiceCardProps) => {
  return (
    <ScrollReveal animation="scaleIn" delay={delay}>
      <Link
        to={href}
        className="group block bg-card rounded-xl p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-2"
      >
        <div
          className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 ${
            variant === "teal"
              ? "bg-teal/10 text-teal group-hover:bg-teal group-hover:text-primary-foreground"
              : "bg-coral/10 text-coral group-hover:bg-coral group-hover:text-primary-foreground"
          }`}
        >
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="font-heading font-semibold text-xl text-navy mb-2">
          {title}
        </h3>
        <p className="text-charcoal/70 text-sm mb-4 leading-relaxed">
          {description}
        </p>
        <span className="inline-flex items-center gap-2 text-teal font-medium text-sm group-hover:gap-3 transition-all duration-300">
          Learn More
          <ArrowRight className="h-4 w-4" />
        </span>
      </Link>
    </ScrollReveal>
  );
};

export default ServiceCard;
