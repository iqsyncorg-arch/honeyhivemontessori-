import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Share2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#3B2A1A] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <Link to="/" className="inline-block group">
              <span className="text-3xl font-heading font-bold text-[#FFD22F]">
                Honey Hive<span className="text-white"> Montessori</span>
              </span>
            </Link>
            <p className="text-white/70 font-body text-sm leading-relaxed italic border-l-2 border-[#FFD22F] pl-4">
              “The greatest gifts we can give our children are the roots of responsibility and the wings of independence.”
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.facebook.com/Honeyhivechennai/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#FFD22F] hover:text-[#3B2A1A] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/honeyhive_chennai/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#FFD22F] hover:text-[#3B2A1A] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://in.pinterest.com/honeyhivemontessorihouse/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#FFD22F] hover:text-[#3B2A1A] transition-all"
                aria-label="Pinterest"
              >
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6 text-[#FFD22F]">Explore</h3>
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
                    className="text-white/60 hover:text-[#FFD22F] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#FFD22F] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6 text-[#FFD22F]">Our Programs</h3>
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
                    className="text-white/60 hover:text-[#FFD22F] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#FFD22F] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {program}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6 text-[#FFD22F]">Get in Touch</h3>
            <ul className="space-y-4 font-body">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FFD22F] shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm leading-relaxed">
                  Raama associates, 1 A, Vinayaganagar, MCN Nagar Ext, Thoraipakkam, Chennai 600097
                </span>
              </li>
              <li className="flex flex-col gap-3">
                <div className="flex items-center gap-3 group">
                  <Phone className="w-5 h-5 text-[#FFD22F] shrink-0" />
                  <a href="tel:+919952900051" className="text-white/70 hover:text-[#FFD22F] transition-colors text-sm font-bold">
                    +91 99529 00051
                  </a>
                </div>
                <div className="pl-8 flex flex-col gap-1 border-l border-[#FFD22F]/20 ml-2.5">
                    <a href="tel:+919790730051" className="text-white/70 hover:text-[#FFD22F] transition-colors text-sm">
                        +91 97907 30051
                    </a>
                    <span className="text-white/30 text-xs">044 - 48502661</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FFD22F] shrink-0" />
                <a
                  href="mailto:honeyhivechennai@gmail.com"
                  className="text-white/70 hover:text-[#FFD22F] transition-colors text-sm"
                >
                  honeyhivechennai@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs font-body">
            © {new Date().getFullYear()} Honey Hive Montessori House. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs font-body">
            <Link to="/privacy" className="text-white/40 hover:text-[#FFD22F] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/40 hover:text-[#FFD22F] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;