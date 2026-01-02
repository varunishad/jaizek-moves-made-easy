import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home,
  Truck,
  Building2,
  Package,
  Users,
  Shield,
  BadgePoundSterling,
  ClipboardList,
  Calendar,
  CheckCircle,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";

import heroImage from "@/assets/hero-home.jpg";
import ctaFamilyImage from "@/assets/cta-family.jpg";

const Index = () => {
  const services = [
    {
      icon: Home,
      title: "House Removals",
      description:
        "Full-service home moving for all property sizes across the UK.",
      href: "/services#house-removals",
      variant: "teal" as const,
    },
    {
      icon: Truck,
      title: "Man & Van Services",
      description:
        "Flexible, affordable solutions for smaller moves and deliveries.",
      href: "/services#man-van",
      variant: "teal" as const,
    },
    {
      icon: Building2,
      title: "Office Relocations",
      description:
        "Minimize downtime with professional commercial moving services.",
      href: "/services#office-relocations",
      variant: "teal" as const,
    },
    {
      icon: Package,
      title: "Packing Services",
      description:
        "Expert packing and materials to protect your belongings.",
      href: "/services#packing-services",
      variant: "coral" as const,
    },
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "Experienced Team",
      description: "10+ years serving families and businesses across the UK",
      variant: "teal",
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Comprehensive insurance for complete peace of mind",
      variant: "teal",
    },
    {
      icon: BadgePoundSterling,
      title: "Competitive Pricing",
      description: "Transparent quotes with no hidden fees",
      variant: "coral",
    },
  ];

  const howItWorks = [
    {
      icon: ClipboardList,
      title: "Get a Quote",
      description: "Fill out our simple form or call us",
      step: 1,
    },
    {
      icon: Calendar,
      title: "Schedule Your Move",
      description: "Pick a date that works for you",
      step: 2,
    },
    {
      icon: CheckCircle,
      title: "Relax & Move",
      description: "We handle everything, you enjoy your new space",
      step: 3,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <PageHero
        title="Stress-Free Removals Across the UK"
        subtitle="Professional house removals, man & van services, and more. Your trusted moving partner."
        backgroundImage={heroImage}
        fullHeight
        ctaButtons={[
          { text: "Get Instant Quote", href: "/quote", variant: "hero" },
          { text: "Call Us Now", href: "tel:+447775328922", variant: "heroOutline" },
        ]}
      />

      {/* Why Choose Us Section */}
      <section className="bg-secondary section-padding">
        <div className="container-custom">
          <ScrollReveal animation="fadeUp">
            <h2 className="heading-2 text-navy text-center mb-12">
              Why Choose Jaizek Removals?
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <ScrollReveal
                key={item.title}
                animation="fadeUp"
                delay={index * 0.15}
              >
                <div className="text-center">
                  <div
                    className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                      item.variant === "teal"
                        ? "bg-teal/10 text-teal"
                        : "bg-coral/10 text-coral"
                    }`}
                  >
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-charcoal/70">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="bg-card section-padding">
        <div className="container-custom">
          <ScrollReveal animation="fadeUp">
            <h2 className="heading-2 text-navy text-center mb-12">
              Our Services
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
                variant={service.variant}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gradient-section section-padding">
        <div className="container-custom">
          <ScrollReveal animation="fadeUp">
            <h2 className="heading-2 text-navy text-center mb-16">
              How It Works
            </h2>
          </ScrollReveal>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line (Desktop) */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-teal/30" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
              {howItWorks.map((step, index) => (
                <ScrollReveal
                  key={step.title}
                  animation={
                    index === 0
                      ? "slideLeft"
                      : index === 2
                      ? "slideRight"
                      : "fadeUp"
                  }
                  delay={index * 0.2}
                >
                  <div className="relative text-center">
                    {/* Step Number */}
                    <div className="relative z-10 w-20 h-20 rounded-full bg-teal mx-auto mb-4 flex items-center justify-center shadow-button">
                      <step.icon className="h-8 w-8 text-primary-foreground" />
                    </div>

                    {/* Step Number Badge */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-7 h-7 rounded-full bg-navy text-primary-foreground text-sm font-bold flex items-center justify-center">
                      {step.step}
                    </div>

                    <h3 className="font-heading font-semibold text-xl text-navy mb-2">
                      {step.title}
                    </h3>
                    <p className="text-charcoal/70">{step.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* CTA Section */}
      <CTASection
        title="Ready to Move? Get Your Free Quote Today"
        backgroundImage={ctaFamilyImage}
      />

      <Footer />
    </div>
  );
};

export default Index;
