import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/jaizek-logo.webp";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Get a Quote", href: "/quote" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "House Removals", href: "/services#house-removals" },
    { name: "Man & Van", href: "/services#man-van" },
    { name: "Office Relocations", href: "/services#office-relocations" },
    { name: "Packing Services", href: "/services#packing-services" },
  ];

  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src={logo}
              alt="Jaizek Removals"
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your trusted moving partner. Professional removals services across the UK with care and reliability.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/JaizekRemovals/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center text-teal hover:bg-teal hover:text-primary-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/jaizekremovals/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center text-teal hover:bg-teal hover:text-primary-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-teal transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-primary-foreground/70 hover:text-teal transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+447775328922"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-teal transition-colors duration-300"
                >
                  <Phone className="h-4 w-4 text-teal flex-shrink-0" />
                  <span>+44 7775 328922</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@jaizekremovals.co.uk"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-teal transition-colors duration-300"
                >
                  <Mail className="h-4 w-4 text-teal flex-shrink-0" />
                  <span>info@jaizekremovals.co.uk</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="h-4 w-4 text-teal flex-shrink-0 mt-1" />
                <span>Serving all of Greater London and surrounding areas</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Jaizek Removals. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <Link to="/privacy" className="hover:text-teal transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-teal transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
