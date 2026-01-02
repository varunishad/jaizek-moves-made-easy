import { Link } from "react-router-dom";
import {
  Home,
  Truck,
  Building2,
  Package,
  Check,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";

import heroServicesImage from "@/assets/hero-services.jpg";
import ctaFamilyImage from "@/assets/cta-family.jpg";
import serviceHouseImage from "@/assets/service-house.jpg";
import serviceManVanImage from "@/assets/service-manvan.jpg";
import serviceOfficeImage from "@/assets/service-office.jpg";
import servicePackingImage from "@/assets/service-packing.jpg";

const servicesData = [
  {
    id: "house-removals",
    title: "House Removals",
    icon: Home,
    description:
      "Whether you're moving a studio flat or a 5-bedroom house, we handle every detail with care. Our experienced team packs, loads, transports, and unpacks your belongings safely and efficiently.",
    features: [
      "Full packing and unpacking services",
      "Secure transportation",
      "Furniture disassembly and reassembly",
      "Short and long-distance moves",
    ],
    image: serviceHouseImage,
    imagePosition: "left",
    ctaText: "Get Quote for House Move",
  },
  {
    id: "man-van",
    title: "Man & Van Services",
    icon: Truck,
    description:
      "Perfect for smaller moves, single items, or students. Flexible, affordable, and professional service tailored to your specific needs.",
    features: [
      "Same-day availability",
      "Hourly or fixed rates",
      "Ideal for students, single items, or small flats",
      "Friendly, professional drivers",
    ],
    image: serviceManVanImage,
    imagePosition: "right",
    ctaText: "Book Man & Van",
  },
  {
    id: "office-relocations",
    title: "Office Relocations",
    icon: Building2,
    description:
      "Minimize business disruption with our efficient office moving services. We work around your schedule to ensure a seamless transition.",
    features: [
      "Weekend and evening moves",
      "IT equipment handling",
      "Secure document transport",
      "Minimal downtime",
    ],
    image: serviceOfficeImage,
    imagePosition: "left",
    ctaText: "Request Office Move Quote",
  },
  {
    id: "packing-services",
    title: "Professional Packing",
    icon: Package,
    description:
      "Don't have time to pack? We provide full or partial packing services with quality materials to ensure your items arrive safely.",
    features: [
      "Quality packing materials included",
      "Fragile item specialists",
      "Labeling and inventory",
      "Unpacking services available",
    ],
    image: servicePackingImage,
    imagePosition: "right",
    ctaText: "Add Packing Service",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <PageHero
        title="Our Removals Services"
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
        backgroundImage={heroServicesImage}
        overlay="navy"
      />

      {/* Service Sections */}
      {servicesData.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${
            index % 2 === 0 ? "bg-card" : "bg-secondary"
          }`}
        >
          <div className="container-custom">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                service.imagePosition === "right" ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <ScrollReveal
                animation={
                  service.imagePosition === "left" ? "slideLeft" : "slideRight"
                }
                className={service.imagePosition === "right" ? "lg:order-2" : ""}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
                </div>
              </ScrollReveal>

              {/* Content */}
              <ScrollReveal
                animation={
                  service.imagePosition === "left" ? "slideRight" : "slideLeft"
                }
                className={service.imagePosition === "right" ? "lg:order-1" : ""}
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-teal/10 text-teal flex items-center justify-center">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h2 className="heading-3 text-navy">{service.title}</h2>
                  </div>

                  <p className="text-body text-charcoal/80">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-charcoal"
                      >
                        <Check className="h-5 w-5 text-teal flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="teal" size="lg" asChild>
                    <Link to="/quote" className="inline-flex items-center gap-2">
                      {service.ctaText}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <CTASection
        title="Need a Custom Quote? We're Here to Help"
        buttonText="Get Your Free Quote"
        backgroundImage={ctaFamilyImage}
      />

      <Footer />
    </div>
  );
};

export default Services;
