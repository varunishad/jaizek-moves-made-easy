import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { name: string; href: string }[];
  backgroundImage: string;
  ctaButtons?: { text: string; href: string; variant: "hero" | "heroOutline" }[];
  overlay?: "navy" | "teal";
  fullHeight?: boolean;
  children?: ReactNode;
}

const PageHero = ({
  title,
  subtitle,
  breadcrumb,
  backgroundImage,
  ctaButtons,
  overlay = "navy",
  fullHeight = false,
  children,
}: PageHeroProps) => {
  return (
    <section
      className={`relative ${fullHeight ? "min-h-screen" : "min-h-[50vh]"} flex items-center justify-center overflow-hidden`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 ${
          overlay === "navy"
            ? "bg-gradient-to-br from-navy/90 via-navy/80 to-navy-deep/70"
            : "bg-gradient-to-br from-teal/90 via-teal/85 to-teal-bright/80"
        }`}
      />

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-primary-foreground py-20">
        {/* Breadcrumb */}
        {breadcrumb && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <ol className="flex items-center justify-center gap-2 text-sm text-primary-foreground/70">
              {breadcrumb.map((item, index) => (
                <li key={item.name} className="flex items-center gap-2">
                  <Link
                    to={item.href}
                    className="hover:text-teal transition-colors"
                  >
                    {item.name}
                  </Link>
                  {index < breadcrumb.length - 1 && <span>/</span>}
                </li>
              ))}
            </ol>
          </motion.nav>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="heading-1 max-w-4xl mx-auto mb-6"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-large text-primary-foreground/90 max-w-2xl mx-auto mb-8"
          >
            {subtitle}
          </motion.p>
        )}

        {/* CTA Buttons */}
        {ctaButtons && ctaButtons.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {ctaButtons.map((button) => (
              <Button
                key={button.text}
                variant={button.variant}
                size="xl"
                asChild
              >
                <Link to={button.href}>{button.text}</Link>
              </Button>
            ))}
          </motion.div>
        )}

        {/* Custom Children */}
        {children}
      </div>
    </section>
  );
};

export default PageHero;
