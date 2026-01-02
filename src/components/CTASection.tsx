import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

interface CTASectionProps {
  title: string;
  buttonText?: string;
  buttonHref?: string;
  backgroundImage: string;
  overlay?: "teal" | "navy";
}

const CTASection = ({
  title,
  buttonText = "Get Free Quote",
  buttonHref = "/quote",
  backgroundImage,
  overlay = "teal",
}: CTASectionProps) => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 ${
          overlay === "teal"
            ? "bg-gradient-to-br from-teal/92 via-teal/88 to-teal-bright/85"
            : "bg-gradient-to-br from-navy/92 via-navy/88 to-navy-deep/85"
        }`}
      />

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <ScrollReveal animation="scaleIn">
          <h2 className="heading-2 text-primary-foreground mb-8 max-w-3xl mx-auto">
            {title}
          </h2>
          <Button variant="ctaWhite" size="xl" asChild>
            <Link to={buttonHref}>{buttonText}</Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
