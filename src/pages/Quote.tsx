import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FileText, Zap, BadgePoundSterling, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address").max(255),
  phone: z.string().min(10, "Please enter a valid phone number").max(20),
  moveDate: z.string().min(1, "Please select a move date"),
  moveFrom: z.string().min(3, "Please enter your current address or postcode").max(200),
  moveTo: z.string().min(3, "Please enter your destination address or postcode").max(200),
  propertyType: z.string().min(1, "Please select a property type"),
  items: z.string().max(2000).optional(),
  specialRequirements: z.string().max(2000).optional(),
});

type FormValues = z.infer<typeof formSchema>;

const propertyTypes = [
  "Studio",
  "1 Bedroom",
  "2 Bedrooms",
  "3 Bedrooms",
  "4+ Bedrooms",
  "Office",
  "Other",
];

const whyQuote = [
  {
    icon: FileText,
    title: "No Obligation",
    description: "Free quotes with no commitment",
    variant: "teal",
  },
  {
    icon: Zap,
    title: "Fast Response",
    description: "We respond within 24 hours",
    variant: "coral",
  },
  {
    icon: BadgePoundSterling,
    title: "Competitive Rates",
    description: "Best value for professional service",
    variant: "teal",
  },
];

const Quote = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      moveDate: "",
      moveFrom: "",
      moveTo: "",
      propertyType: "",
      items: "",
      specialRequirements: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Quote Request Received!",
      description:
        "Thank you for your request. We'll get back to you within 24 hours.",
    });

    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-teal pt-32 pb-16">
        <div className="container-custom text-center">
          <ScrollReveal animation="fadeUp">
            <h1 className="heading-1 text-primary-foreground mb-4">
              Get Your Free Quote
            </h1>
            <p className="text-body-large text-primary-foreground/90 max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="bg-card section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal animation="fadeUp">
              <div className="bg-card rounded-2xl shadow-card-hover p-6 md:p-10">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    {/* Your Details */}
                    <div className="space-y-4">
                      <h2 className="font-heading font-semibold text-xl text-navy border-b border-border pb-2">
                        Your Details
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name *</FormLabel>
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
                            <FormLabel>Phone Number *</FormLabel>
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
                    </div>

                    {/* Move Details */}
                    <div className="space-y-4">
                      <h2 className="font-heading font-semibold text-xl text-navy border-b border-border pb-2">
                        Move Details
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="moveDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Move Date *</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="propertyType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Property Type *</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select property type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {propertyTypes.map((type) => (
                                    <SelectItem key={type} value={type}>
                                      {type}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="moveFrom"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Moving From *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Full address or postcode"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="moveTo"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Moving To *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Full address or postcode"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-4">
                      <h2 className="font-heading font-semibold text-xl text-navy border-b border-border pb-2">
                        Additional Information
                      </h2>
                      <FormField
                        control={form.control}
                        name="items"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>List of Items (Optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="E.g., 2-seater sofa, dining table, 10 boxes..."
                                className="min-h-[100px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="specialRequirements"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Special Requirements (Optional)
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Parking restrictions, fragile items, packing needed, etc."
                                className="min-h-[100px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="teal"
                      size="xl"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Sending Request...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Get My Free Quote
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

      {/* Why Quote With Us */}
      <section className="bg-secondary section-padding">
        <div className="container-custom">
          <ScrollReveal animation="fadeUp">
            <h2 className="heading-3 text-navy text-center mb-12">
              Why Get a Quote From Us?
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {whyQuote.map((item, index) => (
              <ScrollReveal
                key={item.title}
                animation="fadeUp"
                delay={index * 0.1}
              >
                <div className="text-center">
                  <div
                    className={`w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center ${
                      item.variant === "teal"
                        ? "bg-teal/10 text-teal"
                        : "bg-coral/10 text-coral"
                    }`}
                  >
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-charcoal/70">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quote;
