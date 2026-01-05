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
} from "lucide-react";

const homePrograms = [
  {
    name: "Grub (Playgroup)",
    age: "2 – 3 years",
    description:
      "A gentle introduction to school life through play, routine, and motor skill development.",
    color: "bg-accent/20",
  },
  {
    name: "Brood (Pre-Kg)",
    age: "3 – 4 years",
    description:
      "Focused on independence and sensorial exploration through early Montessori activities.",
    color: "bg-primary/10",
  },
  {
    name: "Junior Bees (LKG)",
    age: "4 – 5 years",
    description:
      "Building a strong foundation in language, numeracy, and practical life skills.",
    color: "bg-highlight/20",
  },
  {
    name: "Senior Bees (UKG)",
    age: "5 – 6 years",
    description:
      "Advanced readiness for primary school with a focus on leadership and academics.",
    color: "bg-accent/20",
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
    description: "A proven child-centered method that fosters independence and curiosity.",
  },
  {
    title: "Qualified & Caring Teachers",
    icon: Heart,
    description: "Dedicated educators who nurture every child with warmth and expertise.",
  },
  {
    title: "Low Student-Teacher Ratio",
    icon: Users,
    description: "Ensuring every child receives the guidance they deserve.",
  },
  {
    title: "Safe & Child-Friendly Campus",
    icon: ShieldCheck,
    description: "A clean, secure, and stimulating environment built for little learners.",
  },
  {
    title: "Individual Attention",
    icon: CheckCircle2,
    description: "We respect and follow each child's unique developmental pace.",
  },
  {
    title: "Strong Parent Partnership",
    icon: School,
    description: "Open communication and collaboration between home and school.",
  },
  {
    title: "Zero Screen Time",
    icon: MonitorOff,
    description: "Purely hands-on learning without digital distractions.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Honey Hive <span className="text-gradient">Preschool</span>
                <br />& <span className="text-highlight">Daycare</span>
              </h1>
              <p className="text-xl md:text-2xl font-heading italic text-foreground/80">
                Curious Today, Confident Tomorrow.
              </p>
              <p className="text-muted-foreground font-body text-lg max-w-lg">
                At Honey Hive Montessori House, we believe every child is born
                curious. We nurture that curiosity with love, play, and learning
                that inspires confidence for life.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/admissions">Admission Open</Link>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
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
              <div className="relative rounded-3xl overflow-hidden shadow-card">
                <video
                  src={heroImage}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-highlight/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee text="Curious Today – Confident Tomorrow | We Inspire to Create Curiosity" />

      {/* What is Early Childhood Education */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
                What is Early Childhood Education?
              </h2>
              <p className="text-muted-foreground font-body text-lg">
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
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <span className="font-body text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Button variant="accent" size="lg" asChild>
                <Link to="/admissions">Book A Tour</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={artImage}
                alt="Children doing creative art activities"
                className="rounded-3xl shadow-card w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Summary Icons */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why choose Honey Hive Montessori House?"
            subtitle="We provide the best environment for your child's growth and development"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-soft text-center hover:shadow-card transition-shadow duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="font-body font-semibold text-foreground text-sm">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={classroomImage}
                alt="Teacher with children in classroom"
                className="rounded-3xl shadow-lg w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-primary-foreground space-y-6"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
                Curriculum Overview
              </h2>
              <p className="text-primary-foreground/80 font-body text-lg">
                Our curriculum integrates play, inquiry, and discovery through
                thoughtfully designed experiences — laying a strong and lasting
                foundation for your child’s future.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-heading font-semibold text-accent">
                  Learner's First Approach
                </h3>
                <p className="text-primary-foreground/80 font-body">
                  At Honey Hive Montessori House, everything begins with the
                  learner your child. We believe every child is unique, curious,
                  and naturally capable of growth when nurtured in the right
                  environment. Our role is to guide, observe, and support rather
                  than instruct allowing children to discover, explore, and
                  build confidence at their own pace. Growth, One Small Step at
                  a Time We celebrate every tiny milestone a new word, a solved
                  puzzle, a shared toy, a kind gesture. These moments may seem
                  small, but together they build a strong foundation for
                  lifelong learning. Our calm, engaging classrooms encourage
                  independence, self-discipline, and joyful discovery.
                </p>
              </div>
              <Button variant="accent" size="lg" className="mt-4" asChild>
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`${program.color} p-6 rounded-3xl hover:shadow-card transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-body font-semibold rounded-full">
                      {program.age}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    {program.name}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm">
                    {program.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/programs">Explore All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Honey Hive? (Replaces Signature Programs) */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Why Choose Honey Hive?" 
            subtitle="The Hive difference: Where quality education meets heartfelt care"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group bg-card p-6 rounded-3xl shadow-soft hover:shadow-card transition-all duration-300 border border-transparent hover:border-primary/20"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* Meal Planner */}
<section className="py-20 bg-[#FDFCFB]">
  <div className="container mx-auto px-4">
    <SectionHeading
      title="Meal Planner"
      subtitle="Nutritious & fun weekly snack guidance for our little learners"
    />

    <div className="grid lg:grid-cols-2 gap-10">
      
      {/* LEFT SIDE BLOCKS */}
      <div className="space-y-10">

        {/* Millet Monday */}
        <div className="group bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8 relative overflow-hidden transition-all hover:shadow-md">
          <div className="absolute top-0 left-0 w-2 h-full bg-teal-500" />
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-teal-600 text-xs font-bold uppercase tracking-widest">Energy Grains</span>
              <h3 className="text-3xl font-heading font-bold text-slate-800">Millet Monday</h3>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Poridge", "Dosa", "Cookies", "Idli", "Millet Veg Balls", "Kichidi", "Millet Salad", "Upma", "Millet Cutlets", "Pongal", "Millet Ladoo", "Kheer"].map((item) => (
              <span key={item} className="px-4 py-1.5 bg-teal-50 text-teal-700 rounded-full text-sm font-medium border border-teal-100/50">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Tasty Thursday */}
        <div className="group bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8 relative overflow-hidden transition-all hover:shadow-md">
          <div className="absolute top-0 left-0 w-2 h-full bg-blue-500" />
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">Power Protein</span>
              <h3 className="text-3xl font-heading font-bold text-slate-800">Tasty Thursday</h3>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Dates", "Peanuts", "Milk Shakes", "Makhana", "Smoothies", "Yogurt", "Nuts", "Granola Bars", "Raisins", "Mac N Cheese", "Sweet Corn", "Fig Bar"].map((item) => (
              <span key={item} className="px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100/50">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE BLOCKS */}
      <div className="space-y-10">

        {/* Treats Tuesday */}
        <div className="group bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8 relative overflow-hidden transition-all hover:shadow-md">
          <div className="absolute top-0 left-0 w-2 h-full bg-orange-500" />
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-orange-600 text-xs font-bold uppercase tracking-widest">Little Delights</span>
              <h3 className="text-3xl font-heading font-bold text-slate-800">Treats Tuesday</h3>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Tart / Pie", "Cakes", "Pancake", "Popcorn", "Donut", "Sandwich", "Fries", "Muffins", "Cookies", "Savory", "Biscuits", "Waffle"].map((item) => (
              <span key={item} className="px-4 py-1.5 bg-orange-50 text-orange-700 rounded-full text-sm font-medium border border-orange-100/50">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Wrap-up Wednesday */}
        <div className="group bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8 relative overflow-hidden transition-all hover:shadow-md">
          <div className="absolute top-0 left-0 w-2 h-full bg-amber-500" />
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-amber-600 text-xs font-bold uppercase tracking-widest">Creative Rolls</span>
              <h3 className="text-3xl font-heading font-bold text-slate-800">Wrap-up Wednesday</h3>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {["DIY Veg Wrap", "Nugget Roll", "DIY Tortilla", "DIY Pizza", "DIY Frankie", "Paneer Roll", "DIY Burritos", "Cheese Roll", "Chocolate Roll", "Paratha Roll", "Nutella Roll", "Spinach Roll"].map((item) => (
              <span key={item} className="px-4 py-1.5 bg-amber-50 text-amber-700 rounded-full text-sm font-medium border border-amber-100/50">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Fruits Friday */}
        <div className="group bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8 relative overflow-hidden transition-all hover:shadow-md">
          <div className="absolute top-0 left-0 w-2 h-full bg-green-500" />
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-green-600 text-xs font-bold uppercase tracking-widest">Fresh Vitamins</span>
              <h3 className="text-3xl font-heading font-bold text-slate-800">Fruits Friday</h3>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Apple", "Kiwi", "Orange", "Banana", "Guava", "Mango", "Berries", "Fruit Cups", "Pineapple", "Dried Fruit", "Watermelon", "Grapes"].map((item) => (
              <span key={item} className="px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-100/50">
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What Parents Say About Us"
            subtitle="Real stories from families who trust Honey Hive Montessori House"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Gayatri Dash",
                avatar: "/avatars/gayatri.jpg",
                message:
                  "This school offers a truly nurturing and positive environment where children thrive both academically and emotionally. The students are incredibly warm, well-mannered, and full of enthusiasm, which speaks volumes about the values being instilled in them. The overall atmosphere is filled with positivity, making it a wonderful place for young minds to grow and flourish.",
              },
              {
                name: "Nithya Malli",
                avatar: "/avatars/nithya.jpg",
                message:
                  "I highly recommend Honey Hive Montessori House, as it is a safe and apt place for my kid’s growth and development. Teachers are so talented and down-to-earth. My child loves going to school because learning happens through joyful activities and loving care.",
              },
              {
                name: "Deebiga Karunakaran",
                avatar: "/avatars/deebiga.jpg",
                message:
                  "This Montessori house is the best place for tiny hearts to grow, play, and mingle with friends. Both mam’s are so dedicated and caring. My son feels at home here — he is always excited to go to school!",
              },
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground">
                      {review.name}
                    </p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, index) => (
                        <Star key={index} className="text-yellow-500 fill-yellow-500 w-4 h-4" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground font-body leading-relaxed text-sm">
                  "{review.message}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-teal">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground">
              Ready to Join the Honey Hive Montessori House Family?
            </h2>
            <p className="text-primary-foreground/80 font-body text-lg">
              Give your child the gift of a nurturing, inspiring start. Schedule
              a tour today and see why Honey Hive Montessori House is the
              perfect place for your little one to learn, grow, and shine.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button variant="accent" size="xl" className="shadow-lg" asChild>
                <Link to="/admissions">Apply Now</Link>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;