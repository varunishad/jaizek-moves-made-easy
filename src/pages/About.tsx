import { Clock, Heart, Handshake, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";

import heroAboutImage from "@/assets/hero-about.jpg";
import ctaFamilyImage from "@/assets/cta-family.jpg";

const values = [
  {
    icon: Clock,
    title: "Reliability",
    description: "On time, every time. We understand the importance of punctuality when it comes to your move.",
    variant: "teal",
  },
  {
    icon: Heart,
    title: "Care",
    description: "Your belongings are safe with us. We treat every item as if it were our own.",
    variant: "coral",
  },
  {
    icon: Handshake,
    title: "Transparency",
    description: "No hidden fees, clear communication. You'll always know exactly what to expect.",
    variant: "teal",
  },
];

const team = [
  {
    name: "James Wilson",
    role: "Founder & Director",
    description: "Over 15 years of experience in the removals industry.",
  },
  {
    name: "Sarah Thompson",
    role: "Operations Manager",
    description: "Ensures every move runs smoothly from start to finish.",
  },
  {
    name: "Michael Chen",
    role: "Lead Removals Specialist",
    description: "Expert in handling delicate and valuable items.",
  },
  {
    name: "Emma Roberts",
    role: "Customer Relations",
    description: "Your first point of contact for all enquiries.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <PageHero
        title="About Jaizek Removals"
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "About Us", href: "/about" },
        ]}
        backgroundImage={heroAboutImage}
        overlay="navy"
      />

      {/* Our Story Section */}
      <section className="bg-card section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal animation="fadeUp">
              <h2 className="heading-2 text-navy mb-8">Our Story</h2>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <p className="text-body text-charcoal/80 mb-6">
                Founded in 2014, Jaizek Removals has grown from a single van operation
                to one of the most trusted removals companies in Greater London and
                the surrounding areas. We're a family-run business that treats every
                move with the care and attention it deserves.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <p className="text-body text-charcoal/80 mb-6">
                Our mission is simple: make moving stress-free. We understand that
                moving home or office can be one of life's most challenging
                experiences. That's why we've dedicated ourselves to providing a
                service that takes the burden off your shoulders.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.3}>
              <p className="text-body text-charcoal/80">
                Over the years, we've helped thousands of families and businesses
                relocate smoothly. Our commitment to excellence, combined with our
                passion for customer service, has earned us countless five-star
                reviews and loyal customers who recommend us time and time again.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-secondary section-padding">
        <div className="container-custom">
          <ScrollReveal animation="fadeUp">
            <h2 className="heading-2 text-navy text-center mb-12">
              What We Stand For
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ScrollReveal
                key={value.title}
                animation="scaleIn"
                delay={index * 0.15}
              >
                <div className="text-center bg-card rounded-xl p-8 shadow-card">
                  <div
                    className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                      value.variant === "teal"
                        ? "bg-teal/10 text-teal"
                        : "bg-coral/10 text-coral"
                    }`}
                  >
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-navy mb-3">
                    {value.title}
                  </h3>
                  <p className="text-charcoal/70">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="bg-card section-padding">
        <div className="container-custom">
          <ScrollReveal animation="fadeUp">
            <h2 className="heading-2 text-navy text-center mb-4">
              Meet the Team
            </h2>
            <p className="text-center text-charcoal/70 mb-12 max-w-2xl mx-auto">
              Our dedicated team of professionals is committed to making your move
              as smooth as possible.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <ScrollReveal
                key={member.name}
                animation="fadeUp"
                delay={index * 0.1}
              >
                <div className="bg-secondary rounded-xl p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-teal/20 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-teal" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-navy mb-1">
                    {member.name}
                  </h3>
                  <p className="text-teal text-sm font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-charcoal/70 text-sm">{member.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-navy section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "5000+", label: "Happy Customers" },
              { number: "15,000+", label: "Moves Completed" },
              { number: "4.9★", label: "Average Rating" },
            ].map((stat, index) => (
              <ScrollReveal key={stat.label} animation="scaleIn" delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-heading font-bold text-teal mb-2">
                    {stat.number}
                  </div>
                  <div className="text-primary-foreground/70">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Experience the Jaizek Difference?"
        buttonText="Get Your Free Quote"
        backgroundImage={ctaFamilyImage}
      />

      <Footer />
    </div>
  );
};

export default About;
