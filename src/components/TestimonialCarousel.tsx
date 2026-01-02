import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

interface Testimonial {
  quote: string;
  name: string;
  location: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Jaizek Removals made our house move completely stress-free. Professional, punctual, and careful with our belongings. Highly recommend!",
    name: "Sarah M.",
    location: "Manchester",
    rating: 5,
  },
  {
    quote:
      "Best removals company we've used. Great value and fantastic service. The team was friendly and efficient throughout the entire process.",
    name: "James T.",
    location: "London",
    rating: 5,
  },
  {
    quote:
      "Moved our 4-bedroom house without a single issue. Thank you Jaizek team! They handled everything with such care and professionalism.",
    name: "Emma R.",
    location: "Surrey",
    rating: 5,
  },
  {
    quote:
      "Outstanding service from start to finish. The quote was accurate, the team arrived on time, and they worked tirelessly to get everything done.",
    name: "David L.",
    location: "Kent",
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="bg-navy section-padding overflow-hidden">
      <div className="container-custom">
        <ScrollReveal animation="fadeUp">
          <h2 className="heading-2 text-primary-foreground text-center mb-12">
            What Our Customers Say
          </h2>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 rounded-full bg-teal/20 text-teal flex items-center justify-center hover:bg-teal hover:text-primary-foreground transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 rounded-full bg-teal/20 text-teal flex items-center justify-center hover:bg-teal hover:text-primary-foreground transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-2xl p-8 md:p-10 shadow-lg"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-coral text-coral"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-accent text-lg md:text-xl text-charcoal italic mb-6 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Author */}
              <div>
                <p className="font-heading font-semibold text-navy">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-muted-foreground text-sm">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-teal w-8"
                    : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
