import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Wind } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Mission */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-3xl font-heading font-bold">
                Honey Hive<span className="text-accent"> Montessori</span>
              </span>
            </Link>
            <p className="text-primary-foreground/80 font-body text-sm leading-relaxed">
              “The greatest gifts we can give our children are the roots of responsibility and the wings of independence.”
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.facebook.com/Honeyhivechennai/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/honeyhive_chennai/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://in.pinterest.com/honeyhivemontessorihouse/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Pinterest"
              >
                <Wind className="w-5 h-5" /> {/* Using Wind as a placeholder for Pinterest if Pinterest icon isn't in lucide-react, or import { Pinterest } if available */}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Explore</h3>
            <ul className="space-y-3 font-body">
              {[
                { name: "About Our House", path: "/about" },
                { name: "Learning Programs", path: "/programs" },
                { name: "Our Gallery", path: "/gallery" },
                { name: "Admissions", path: "/admissions" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Real Programs from your agePrograms list */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Our Programs</h3>
            <ul className="space-y-3 font-body">
              {[
                "Grub (Playgroup)",
                "Brood (Pre-KG)",
                "Junior Bees (LKG)",
                "Senior Bees (UKG)",
                "Daycare Facility",
              ].map((program) => (
                <li key={program}>
                  <Link
                    to="/programs"
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {program}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Local Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Get in Touch</h3>
            <ul className="space-y-4 font-body">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  Raama associates, 1 A, Vinayaganagar, MCN Nagar Ext, Thoraipakkam, Chennai 600097
                </span>
              </li>
              <li className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <a href="tel:+919952900051" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                    +91 99529 00051
                  </a>
                </div>
                <div className="pl-8 flex flex-col">
                    <a href="tel:+919790730051" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                        +91 97907 30051
                    </a>
                    <span className="text-primary-foreground/40 text-xs">044 - 48502661</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="mailto:honeyhivechennai@gmail.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  honeyhivechennai@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-xs font-body">
            © {new Date().getFullYear()} Honey Hive Montessori House. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs font-body">
            <Link to="/privacy" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;