import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import Marquee from "@/components/ui/Marquee";
import heroImage from "@/assets/honeyhive.mp4";
import artImage from "@/assets/student2.jpeg";
import classroomImage from "@/assets/girtstudent.png";
import {
  BookOpen,
  Heart,
  Users,
  Shield,
  Palette,
  Brain,
  Star,
  Sparkles,
  GraduationCap,
  CheckCircle2,
  MonitorOff,
  ShieldCheck,
  School,
  Phone, 
} from "lucide-react";

// Brand Colors Configuration
const COLORS = {
  primaryYellow: "#FFD22F",
  secondaryBrown: "#3B2A1A",
  accentLightYellow: "#FFE873",
};

const homePrograms = [
  {
    name: "Grub (Playgroup)",
    age: "2 – 3 years",
    description:
      "A gentle introduction to school life through play, routine, and motor skill development.",
    color: "bg-[#FFD22F]/10",
  },
  {
    name: "Brood (Pre-Kg)",
    age: "3 – 4 years",
    description:
      "Focused on independence and sensorial exploration through early Montessori activities.",
    color: "bg-[#FFE873]/20",
  },
  {
    name: "Junior Bees (LKG)",
    age: "4 – 5 years",
    description:
      "Building a strong foundation in language, numeracy, and practical life skills.",
    color: "bg-[#FFD22F]/10",
  },
  {
    name: "Senior Bees (UKG)",
    age: "5 – 6 years",
    description:
      "Advanced readiness for primary school with a focus on leadership and academics.",
    color: "bg-[#FFE873]/20",
  },
];

const whyChooseUs = [
  { icon: BookOpen, text: "Activity Based Learning" },
  { icon: Shield, text: "Safe & Nurturing Environment" },
  { icon: Palette, text: "Diverse Teaching Approach" },
  { icon: GraduationCap, text: "Trained Educators" },
  { icon: Heart, text: "Focus on Social & Emotional Growth" },
  { icon: Sparkles, text: "Stimulating Learning Spaces" },
  { icon: Users, text: "Strong Parent Partnership" },
  { icon: Star, text: "Early Skills for Lifelong Success" },
];

const reasons = [
  {
    title: "Montessori Approach",
    icon: Sparkles,
    description:
      "A proven child-centered method that fosters independence and curiosity.",
  },
  {
    title: "Qualified & Caring Teachers",
    icon: Heart,
    description:
      "Dedicated educators who nurture every child with warmth and expertise.",
  },
  {
    title: "Low Student-Teacher Ratio",
    icon: Users,
    description: "Ensuring every child receives the guidance they deserve.",
  },
  {
    title: "Safe & Child-Friendly Campus",
    icon: ShieldCheck,
    description:
      "A clean, secure, and stimulating environment built for little learners.",
  },
  {
    title: "Individual Attention",
    icon: CheckCircle2,
    description:
      "We respect and follow each child's unique developmental pace.",
  },
  {
    title: "Strong Parent Partnership",
    icon: School,
    description:
      "Open communication and collaboration between home and school.",
  },
  {
    title: "Zero Screen Time",
    icon: MonitorOff,
    description: "Purely hands-on learning without digital distractions.",
  },
];

const Index = () => {
  const phoneNumber = "+919952900051";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#FFD22F]/5">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-[#3B2A1A]">
                Honey Hive{" "}
                <span className="text-[#FFD22F]"> Montessori House</span>
              </h1>
              <p className="text-xl md:text-2xl font-heading italic text-[#3B2A1A]/70">
                Curious Today, Confident Tomorrow.
              </p>
              <p className="text-[#3B2A1A]/60 font-body text-lg max-w-lg">
                At Honey Hive Montessori House, we believe every child is born
                curious. We nurture that curiosity with love, play, and learning
                that inspires confidence for life.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  style={{
                    backgroundColor: COLORS.primaryYellow,
                    color: COLORS.secondaryBrown,
                  }}
                  className="font-bold px-8 py-6 rounded-full hover:opacity-90 transition-all"
                  asChild
                >
                  <Link to="/admissions">Admission Open</Link>
                </Button>
                <Button
                  variant="outline"
                  style={{
                    borderColor: COLORS.secondaryBrown,
                    color: COLORS.secondaryBrown,
                  }}
                  className="px-8 py-6 rounded-full hover:bg-[#3B2A1A] hover:text-white transition-all"
                  asChild
                >
                  <Link to="/admissions">Book A School Tour</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFD22F]">
                <video
                  src={heroImage}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FFD22F]/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#3B2A1A]/10 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee - Primary Yellow with Brown Text */}
      <div className="bg-[#FFD22F] py-2">
        <Marquee
          text="Curious Today – Confident Tomorrow | We Inspire to Create Curiosity"
          className="text-[#3B2A1A] font-bold"
        />
      </div>

      {/* What is Early Childhood Education */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#3B2A1A]">
                What is Early Childhood Education?
              </h2>
              <p className="text-[#3B2A1A]/70 font-body text-lg">
                With us, childhood is celebrated, imagination takes flight, and
                little sparks grow into bright futures.
              </p>
              <ul className="space-y-4">
                {[
                  "Builds a strong foundation for children aged 2 to 6 years",
                  "Combines play, exploration, social interaction, and guided learning",
                  "Nurtures cognitive, emotional, social, and motor skills",
                  "Supports brain development milestones and ensures school readiness",
                ].map((item, i) => (
                  <motion.li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#FFD22F] shrink-0 mt-0.5" />
                    <span className="font-body text-[#3B2A1A]">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Button
                style={{
                  backgroundColor: COLORS.secondaryBrown,
                  color: "#FFFFFF",
                }}
                className="px-8 py-4 rounded-xl"
                asChild
              >
                <Link to="/admissions">Book A Tour</Link>
              </Button>
            </motion.div>

            <motion.div className="relative">
              <img
                src={artImage}
                alt="Children doing creative art activities"
                className="rounded-3xl shadow-xl w-full border-b-8 border-r-8 border-[#FFD22F]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Summary Icons */}
      <section className="py-20 bg-[#FFD22F]/5">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why choose Honey Hive Montessori House?"
            subtitle="We provide the best environment for your child's growth and development"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-sm text-center border border-[#FFD22F]/20 hover:border-[#FFD22F] transition-all"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-[#FFD22F]/20 rounded-2xl flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-[#3B2A1A]" />
                </div>
                <p className="font-body font-bold text-[#3B2A1A] text-sm">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Overview - Brown Background Section */}
      <section className="py-20 bg-[#3B2A1A] text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div>
              <img
                src={classroomImage}
                alt="Teacher with children in classroom"
                className="rounded-3xl shadow-2xl w-full grayscale-[20%] hover:grayscale-0 transition-all border-4 border-[#FFD22F]"
              />
            </motion.div>

            <motion.div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#FFD22F]">
                Curriculum Overview
              </h2>
              <div className="space-y-4">
                <h3 className="text-xl font-heading font-semibold text-[#FFE873]">
                  Learner's First Approach
                </h3>
                <p className="text-white/80 font-body leading-relaxed">
                  At Honey Hive Montessori House, everything begins with the
                  learner—your child. We believe every child is unique, curious,
                  and naturally capable of growth when nurtured in the right
                  environment. Our role is to guide, observe, and support...
                </p>
              </div>
              <Button
                style={{
                  backgroundColor: COLORS.primaryYellow,
                  color: COLORS.secondaryBrown,
                }}
                className="font-bold px-8 py-4"
                asChild
              >
                <Link to="/programs">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Programs"
            subtitle="Age-appropriate Montessori environments designed for every stage of development"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homePrograms.map((program, i) => (
              <motion.div
                key={i}
                className={`${program.color} p-6 rounded-3xl border-2 border-[#FFD22F]/10 hover:border-[#FFD22F] transition-all flex flex-col justify-between h-full`}
              >
                <div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-[#3B2A1A] text-white text-xs font-bold rounded-full">
                      {program.age}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-[#3B2A1A] mb-3">
                    {program.name}
                  </h3>
                  <p className="text-[#3B2A1A]/70 font-body text-sm">
                    {program.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meal Planner - Color Themed to Honey/Hive */}
      <section className="py-20 bg-[#FDFCFB] border-y border-[#FFD22F]/20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="The Honey Pot Meal Planner"
            subtitle="Nutritious & fun weekly snack guidance to keep our bees buzzing"
          />

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left Side: Monday & Thursday */}
            <div className="space-y-10">
              {/* Monday */}
              <div className="group bg-white rounded-[2rem] shadow-sm border-l-8 border-[#3B2A1A] p-8 transition-all hover:shadow-md">
                <span className="text-[#3B2A1A] text-xs font-bold uppercase tracking-widest">
                  Energy Grains
                </span>
                <h3 className="text-3xl font-heading font-bold text-[#3B2A1A] mb-4">
                  Millet Monday
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Poridge",
                    "Dosa",
                    "Cookies",
                    "Idli",
                    "Millet Veg Balls",
                    "Kichidi",
                    "Millet Salad",
                    "Upma",
                    "Millet Cutlets",
                    "Pongal",
                    "Millet Ladoo",
                    "Kheer",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-[#FFD22F]/10 text-[#3B2A1A] rounded-full text-sm font-medium border border-[#FFD22F]/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Thursday */}
              <div className="group bg-white rounded-[2rem] shadow-sm border-l-8 border-[#FFD22F] p-8 transition-all hover:shadow-md">
                <span className="text-[#3B2A1A]/60 text-xs font-bold uppercase tracking-widest">
                  Power Protein
                </span>
                <h3 className="text-3xl font-heading font-bold text-[#3B2A1A] mb-4">
                  Tasty Thursday
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Dates",
                    "Peanuts",
                    "Milk Shakes",
                    "Makhana",
                    "Smoothies",
                    "Yogurt",
                    "Nuts",
                    "Granola Bars",
                    "Raisins",
                    "Mac N Cheese",
                    "Sweet Corn",
                    "Fig Bar",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-[#3B2A1A]/5 text-[#3B2A1A] rounded-full text-sm font-medium border border-[#3B2A1A]/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Tuesday, Wednesday, Friday */}
            <div className="space-y-6">
              <div className="bg-[#FFE873]/20 rounded-3xl p-6 border border-[#FFD22F]/30">
                <h4 className="font-bold text-[#3B2A1A] mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4 fill-[#3B2A1A]" /> Tuesday: Treats
                </h4>
                <p className="text-sm text-[#3B2A1A]/80">
                  Pancakes, Muffins, Waffles, and Savory Biscuits.
                </p>
              </div>
              <div className="bg-[#FFD22F]/10 rounded-3xl p-6 border border-[#FFD22F]/30">
                <h4 className="font-bold text-[#3B2A1A] mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4 fill-[#3B2A1A]" /> Wednesday: Wraps
                </h4>
                <p className="text-sm text-[#3B2A1A]/80">
                  DIY Veg Wraps, Paneer Rolls, and Cheese Frankie.
                </p>
              </div>
              <div className="bg-[#3B2A1A]/5 rounded-3xl p-6 border border-[#3B2A1A]/10">
                <h4 className="font-bold text-[#3B2A1A] mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4 fill-[#3B2A1A]" /> Friday: Fruits
                </h4>
                <p className="text-sm text-[#3B2A1A]/80">
                  Fresh seasonal fruits, Fruit Cups, and Dried Berries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What Parents Say"
            subtitle="Voices from the Hive"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Gayatri Dash",
                message:
                  "This school offers a truly nurturing and positive environment where children thrive both academically and emotionally.",
              },
              {
                name: "Nithya Malli",
                message:
                  "I highly recommend Honey Hive Montessori House. My child loves going to school because learning happens through joyful activities.",
              },
              {
                name: "Deebiga Karunakaran",
                message:
                  "Best place for tiny hearts to grow. Both mam’s are so dedicated and caring. My son feels at home here.",
              },
            ].map((review, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-[#FFD22F]"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className="text-[#FFD22F] fill-[#FFD22F] w-4 h-4"
                    />
                  ))}
                </div>
                <p className="text-[#3B2A1A]/80 italic mb-4">
                  "{review.message}"
                </p>
                <p className="font-bold text-[#3B2A1A]">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Primary Yellow */}
      <section className="py-20 bg-[#FFD22F]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#3B2A1A] mb-6">
            Ready to Join the Family?
          </h2>
          <p className="text-[#3B2A1A]/80 font-body text-lg max-w-2xl mx-auto mb-10">
            Give your child the gift of a nurturing start. Schedule a tour today
            and see why Honey Hive is the perfect place for your little one.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              style={{
                backgroundColor: COLORS.secondaryBrown,
                color: "#FFFFFF",
              }}
              className="px-10 py-7 text-lg rounded-full"
              asChild
            >
              <Link to="/admissions">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* --- FLOATING ACTION BUTTONS (WHATSAPP & CALL) --- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* WhatsApp Button */}
        <motion.a
          href={`https://wa.me/${phoneNumber.replace('+', '')}`}
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

export default Index;