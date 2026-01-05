import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Gallery", path: "/gallery" },
  { name: "Admissions", path: "/admissions" },
  { name: "Contact Us", path: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-[#FFD22F]/20">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex items-center gap-2">
              <img
                src="/src/assets/logo.png"
                alt="Honey Hive Montessori House Logo"
                className="h-14 w-14 object-contain transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col justify-center">
                <span className="text-xl md:text-2xl font-heading font-bold leading-tight text-[#FFD22F]">
                  Honey Hive
                </span>
                <span className="text-sm md:text-base font-heading font-semibold leading-tight text-[#3B2A1A]">
                   Montessori House
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full font-body font-bold text-sm transition-all duration-300 ${
                  location.pathname === link.path
                    ? "bg-[#FFD22F] text-[#3B2A1A]"
                    : "text-[#3B2A1A] hover:bg-[#FFD22F]/10 hover:text-[#FFD22F]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              style={{ backgroundColor: "#3B2A1A", color: "#FFFFFF" }}
              className="font-bold rounded-full hover:opacity-90 transition-all border-none"
              size="lg" 
              asChild
            >
              <Link to="/admissions">Book a Tour</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-[#FFD22F]/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-7 h-7 text-[#3B2A1A]" />
            ) : (
              <Menu className="w-7 h-7 text-[#3B2A1A]" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-[#FFD22F]/20 shadow-xl"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-6 py-4 rounded-2xl font-body font-bold text-lg transition-all duration-300 ${
                    location.pathname === link.path
                      ? "bg-[#FFD22F] text-[#3B2A1A]"
                      : "text-[#3B2A1A] hover:bg-[#FFD22F]/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-[#FFD22F]/10 mt-2">
                <Button 
                  style={{ backgroundColor: "#3B2A1A", color: "#FFFFFF" }}
                  size="xl" 
                  className="w-full font-bold rounded-2xl py-7" 
                  asChild
                >
                  <Link to="/admissions" onClick={() => setIsMenuOpen(false)}>
                    Book a Tour
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;