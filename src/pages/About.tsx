import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import schoolImage from "@/assets/student.png";
import classroomImage from "@/assets/classroom-learning.jpg";
import awardImage from "@/assets/tamil.png";
import awardImage1 from "@/assets/certificate.png";
import founder from "@/assets/founder.png";
import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  Users,
  Award,
  BookOpen,
  Shield,
  Star,
  Trophy,
  Medal,
  Phone, // Added for call button
} from "lucide-react";

// Brand Colors Configuration
const COLORS = {
  primaryYellow: "#FFD22F",
  secondaryBrown: "#3B2A1A",
  accentLightYellow: "#FFE873",
};

const values = [
  {
    icon: Heart,
    title: "Respect",
    description:
      "We respect each child's unique pace of development and individual personality.",
  },
  {
    icon: Star,
    title: "Independence",
    description:
      "Empowering children to do things for themselves, building confidence and self-reliance.",
  },
  {
    icon: Lightbulb,
    title: "Passion for Learning",
    description:
      "Sparking a lifelong curiosity through the proven Montessori method of discovery.",
  },
  {
    icon: Shield,
    title: "Self-Discipline",
    description:
      "Fostering an internal sense of order and responsibility within a safe, joyful environment.",
  },
];

const achievements = [
  {
    year: "2022",
    icon: Trophy,
    title: "National Excellence Recognition",
    description:
      "Recognized as an exemplary contributor in the education sector among 250 National Schools in Tamil Nadu by CIAA and American International Accreditation Association of Schools and Colleges, awarded by Mr. AVM K. Shanmugam (Managing Director AVM Production).",
  },
  {
    year: "2025",
    icon: Medal,
    title: "Emerging Edupreneur Award",
    description:
      "Received the prestigious KG Award as an Emerging Edupreneur from the Hon’ble Former Governor Dr. Tamilisai Soundararajan.",
  },
];

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Founder & Director",
    experience: "20+ years in Early Childhood Education",
  },
  {
    name: "Priya Sharma",
    role: "Head of Curriculum",
    experience: "15+ years developing child-centered programs",
  },
  {
    name: "Michael Chen",
    role: "Lead Educator",
    experience: "10+ years in play-based learning",
  },
  {
    name: "Emily Roberts",
    role: "Child Psychologist",
    experience: "12+ years supporting child development",
  },
];

const About = () => {
  const phoneNumber = "+919952900051";
  return (
    <Layout>
      {/* Hero Section - Yellowish background with Brown Text */}
      <section className="relative py-20 bg-[#FFD22F]/10 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-[#3B2A1A]">
                About{" "}
                <span className="text-[#FFD22F]">
                  Honey Hive Montessori House
                </span>
              </h1>
              <div className="space-y-4 text-[#3B2A1A]/70 font-body text-lg max-w-lg">
                <p>
                  Established in 2019 in Thoraipakkam, Chennai, Honey Hive has
                  grown into a trusted Montessori preschool where children’s
                  holistic development is at the heart of everything we do.
                </p>
                <p>
                  Our name perfectly reflects our philosophy: like a hive
                  buzzing with energy and growth, we create a warm, safe, and
                  stimulating environment where every child feels nurtured and
                  excited to learn.
                </p>
              </div>
              <Button
                style={{ backgroundColor: "#3B2A1A", color: "#FFFFFF" }}
                size="lg"
                asChild
              >
                <Link to="/admissions">Plan Your Visit</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={schoolImage}
                alt="Honey Hive Montessori House"
                className="rounded-3xl shadow-xl w-full border-4 border-[#FFD22F]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Brown and Yellow Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#3B2A1A] text-white p-8 md:p-12 rounded-3xl"
            >
              <div className="w-16 h-16 bg-[#FFD22F] rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#3B2A1A]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-[#FFD22F]">
                Our Mission
              </h2>
              <p className="text-white/90 font-body text-lg">
                To create a safe, joyful, and stimulating environment where
                children develop essential life skills, strong values, and a
                love for learning through Montessori methods.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#FFD22F] text-[#3B2A1A] p-8 md:p-12 rounded-3xl"
            >
              <div className="w-16 h-16 bg-[#3B2A1A] rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Our Vision
              </h2>
              <p className="text-[#3B2A1A]/90 font-body text-lg">
                To nurture confident, compassionate, and curious learners who
                are well prepared for school and life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* School Philosophy */}
      <section className="py-20 bg-[#FFD22F]/5">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Philosophy"
            subtitle="Inspired by Dr. Maria Montessori’s Principles"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-[#FFD22F]/20 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-[#FFD22F]/20 rounded-2xl flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-[#3B2A1A]" />
                </div>
                <h3 className="text-lg font-heading font-bold text-[#3B2A1A] mb-2">
                  {value.title}
                </h3>
                <p className="text-[#3B2A1A]/70 font-body text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Key Achievements"
            subtitle="Recognizing our commitment to excellence in early childhood education"
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {achievements.map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-[#FFD22F]/20 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-8 h-8 text-[#3B2A1A]" />
                  </div>
                  <div>
                    <span className="text-[#3B2A1A] font-bold text-sm tracking-wider uppercase">
                      Year {item.year}
                    </span>
                    <h3 className="text-xl font-heading font-bold text-[#3B2A1A] mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#3B2A1A]/60 font-body leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-[#FFD22F]/10 rounded-3xl blur-2xl -z-10" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <img
                  src={awardImage}
                  alt="Award One"
                  className="rounded-3xl shadow-card w-full h-auto block border-2 border-[#FFD22F]"
                />
                <img
                  src={awardImage1}
                  alt="Award Two"
                  className="rounded-3xl shadow-card w-full h-auto block border-2 border-[#FFD22F]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-[#3B2A1A]/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={classroomImage}
                alt="Montessori learning approach"
                className="rounded-3xl shadow-card w-full grayscale-[10%] hover:grayscale-0 transition-all"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#3B2A1A]">
                We Focus On
              </h2>
              <p className="text-[#3B2A1A]/70 font-body text-lg">
                At Honey Hive, we believe every child is unique. Our
                child-centered environment encourages growth across all
                dimensions.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: BookOpen,
                    text: "Hands-on Experiences: Learning through tactile engagement",
                  },
                  {
                    icon: Users,
                    text: "Individual Pace: Respecting each child's unique timeline",
                  },
                  {
                    icon: Heart,
                    text: "Strong Foundations: Academic, social, and emotional growth",
                  },
                  {
                    icon: Award,
                    text: "Essential Life Skills: Preparing children for the world beyond",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#FFD22F] rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-[#3B2A1A]" />
                    </div>
                    <p className="font-body text-[#3B2A1A]">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team/Founder Section - Brown Background with Yellow Details */}
      <section className="py-20 bg-[#3B2A1A]">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Founder"
            subtitle="The visionary behind our educational approach"
            titleClassName="text-[#FFD22F]"
          />

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <div className="flex flex-col md:flex-row items-center">
                {/* Founder Image Area */}
                <div className="w-full md:w-2/5 p-8">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-[#FFD22F] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <div className="relative rounded-2xl overflow-hidden border-2 border-[#FFD22F]/30 bg-[#2A1D12]">
                      <img
                        src={founder}
                        alt="Dr. Maria Montessori"
                        className="w-full h-auto object-contain block mx-auto"
                      />
                    </div>
                  </div>
                </div>

                {/* Founder Text Area */}
                <div className="w-full md:w-3/5 p-8 md:pl-0 text-center md:text-left">
                  <div className="inline-block px-3 py-1 rounded-full bg-[#FFD22F]/10 border border-[#FFD22F]/20 text-[#FFD22F] text-xs font-bold uppercase tracking-widest mb-4">
                    Pioneer & Visionary
                  </div>
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">
                    Dr. Maria Montessori
                  </h3>
                  <p className="text-[#FFD22F] font-body font-bold text-lg mb-6">
                    MD, Educator, and Innovator
                  </p>

                  <div className="space-y-4 text-white/80 font-body text-base leading-relaxed">
                    <p>
                      "The greatest sign of success for a teacher is to be able
                      to say, 'The children are now working as if I did not
                      exist.'"
                    </p>
                    <p className="text-white/60 text-sm italic">
                      Dr. Montessori was Italy's first female physician and a
                      three-time Nobel Peace Prize nominee. Her legacy continues
                      through our commitment to fostering independence and
                      natural development in every child.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Final White/Secondary section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#3B2A1A]">
              Experience the Honey Hive
            </h2>
            <p className="text-[#3B2A1A]/70 font-body text-lg">
              Plan Your Visit to see our Montessori environment in action and
              discover how we nurture a lifelong passion for learning.
            </p>
            <Button
              style={{ backgroundColor: "#FFD22F", color: "#3B2A1A" }}
              size="xl"
              className="font-bold rounded-full px-10"
              asChild
            >
              <Link to="/admissions">Plan Your Visit</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* WhatsApp Button */}
        <motion.a
          href={`https://wa.me/${phoneNumber.replace("+", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors hover:bg-[#20ba5a]"
        >
          <svg
            viewBox="0 0 24 24"
            width="28"
            height="28"
            stroke="currentColor"
            strokeWidth="0"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </motion.a>

        {/* Call Button */}
        <motion.a
          href={`tel:${phoneNumber}`}
          whileHover={{ scale: 1.1, backgroundColor: COLORS.secondaryBrown }}
          whileTap={{ scale: 0.9 }}
          className="bg-[#FFD22F] text-[#3B2A1A] p-4 rounded-full shadow-lg flex items-center justify-center transition-colors hover:text-white"
        >
          <Phone className="w-7 h-7 fill-current" />
        </motion.a>
      </div>
    </Layout>
  );
};

export default About;
