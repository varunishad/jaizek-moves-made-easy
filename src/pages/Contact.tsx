import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Loader2,
  Facebook,
  Instagram,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address").max(255),
  phone: z.string().max(20).optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const faqs = [
  {
    question: "How much does a removals service cost?",
    answer:
      "Costs vary based on distance, property size, and services needed. Request a free quote for accurate pricing tailored to your specific requirements.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking 2-4 weeks in advance, especially during peak moving season (summer). However, we can often accommodate last-minute moves subject to availability.",
  },
  {
    question: "Are my belongings insured?",
    answer:
      "Yes, we carry comprehensive goods-in-transit insurance for your peace of mind. We can also arrange additional coverage for high-value items upon request.",
  },
  {
    question: "Do you provide packing materials?",
    answer:
      "Yes, we can supply boxes, tape, bubble wrap, and other materials. Ask about our full packing service if you'd like us to handle everything.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We serve Greater London, Kent, Surrey, and surrounding areas. Contact us for long-distance moves within the UK or international relocations.",
  },
  {
    question: "Can you move on weekends?",
    answer:
      "Yes, we offer weekend and evening moves for your convenience. Weekend slots are popular, so we recommend booking early.",
  },
  {
    question: "What if I need to reschedule?",
    answer:
      "We understand plans change. Contact us as soon as possible to reschedule. We offer flexible rescheduling with no penalty when given adequate notice.",
  },
  {
    question: "Do you disassemble and reassemble furniture?",
    answer:
      "Yes, our team can disassemble and reassemble furniture as needed. This service is included in our full house removal packages.",
  },
  {
    question: "How long does a typical move take?",
    answer:
      "A 2-3 bedroom house typically takes 4-6 hours, but timing varies by distance, volume, and any special requirements. We'll give you an estimate during your quote.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, bank transfer, and card payments. Payment is typically required on completion of the move.",
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });

    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-navy pt-32 pb-16">
        <div className="container-custom text-center">
          <ScrollReveal animation="fadeUp">
            <h1 className="heading-1 text-primary-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-body-large text-primary-foreground/90 max-w-2xl mx-auto">
              We're here to help with any questions about your move
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info & Map Section */}
      <section className="bg-card section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <ScrollReveal animation="slideLeft">
              <div className="space-y-8">
                <h2 className="heading-3 text-navy">Get In Touch</h2>

                <div className="space-y-6">
                  <a
                    href="tel:+447775328922"
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-teal/10 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-teal/10 text-teal flex items-center justify-center group-hover:bg-teal group-hover:text-primary-foreground transition-colors">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-semibold text-navy">+44 7775 328922</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@jaizekremovals.co.uk"
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary hover:bg-teal/10 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-teal/10 text-teal flex items-center justify-center group-hover:bg-teal group-hover:text-primary-foreground transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-semibold text-navy">
                        info@jaizekremovals.co.uk
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary">
                    <div className="w-12 h-12 rounded-full bg-teal/10 text-teal flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Service Areas
                      </p>
                      <p className="font-semibold text-navy">
                        Greater London, Kent, Surrey, and surrounding areas
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary">
                    <div className="w-12 h-12 rounded-full bg-coral/10 text-coral flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Business Hours
                      </p>
                      <div className="font-semibold text-navy space-y-1">
                        <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 4:00 PM</p>
                        <p>Sunday: By Appointment</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/JaizekRemovals/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-teal/10 text-teal hover:bg-teal hover:text-primary-foreground transition-all"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="font-medium">Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/jaizekremovals/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-teal/10 text-teal hover:bg-teal hover:text-primary-foreground transition-all"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="font-medium">Instagram</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Map */}
            <ScrollReveal animation="slideRight">
              <div className="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.7281068818!2d-0.24168120641476828!3d51.52877184053824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1699900000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jaizek Removals Service Area"
                ></iframe>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-secondary section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal animation="fadeUp">
              <h2 className="heading-3 text-navy text-center mb-8">
                Send Us a Message
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.1}>
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John Smith" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="john@example.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number (Optional)</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+44 7XXX XXXXXX"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Message *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="How can we help you?"
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      variant="teal"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-card section-padding">
        <div className="container-custom">
          <ScrollReveal animation="fadeUp">
            <h2 className="heading-2 text-navy text-center mb-12">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-secondary rounded-lg px-6 border-none"
                  >
                    <AccordionTrigger className="text-left font-heading font-semibold text-navy hover:text-teal hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-charcoal/80 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
