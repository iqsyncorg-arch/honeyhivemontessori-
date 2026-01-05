import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import schoolImage from "@/assets/student.png";
import classroomImage from "@/assets/classroom-learning.jpg";
// Note: Ensure you have an image for achievements or use a placeholder
import awardImage from "@/assets/tamil.png"; 
import awardImage1 from "@/assets/certificate.png"; 
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
} from "lucide-react";

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
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-foreground">
                About{" "}
                <span className="text-gradient">
                  Honey Hive Montessori House
                </span>
              </h1>
              <div className="space-y-4 text-muted-foreground font-body text-lg max-w-lg">
                <p>
                  Established in 2019 in Thoraipakkam, Chennai, Honey Hive has
                  grown into a trusted Montessori preschool where children’s
                  holistic development is at the heart of everything we do.
                </p>
                <p>
                  Our name perfectly reflects our philosophy: like a hive buzzing
                  with energy and growth, we create a warm, safe, and stimulating
                  environment where every child feels nurtured and excited to learn.
                </p>
              </div>
              <Button variant="accent" size="lg" asChild>
                <Link to="/admissions">Schedule a Visit</Link>
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
                className="rounded-3xl shadow-card w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary text-primary-foreground p-8 md:p-12 rounded-3xl"
            >
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-accent-foreground" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Our Mission
              </h2>
              <p className="text-primary-foreground/90 font-body text-lg">
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
              className="bg-accent text-accent-foreground p-8 md:p-12 rounded-3xl"
            >
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Our Vision
              </h2>
              <p className="text-accent-foreground/90 font-body text-lg">
                To nurture confident, compassionate, and curious learners who
                are well prepared for school and life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* School Philosophy */}
      <section className="py-20 bg-secondary">
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
                className="bg-card p-6 rounded-2xl shadow-soft text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements Section - NEW */}
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
                  <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <span className="text-primary font-bold text-sm tracking-wider uppercase">
                      Year {item.year}
                    </span>
                    <h3 className="text-xl font-heading font-bold text-foreground mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground font-body leading-relaxed">
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
  {/* The decorative glow background */}
  <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl -z-10" />
  
  {/* items-center keeps images aligned if their heights differ slightly */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
    <img
      src={awardImage}
      alt="Award One"
      /* h-auto allows the image to scale its height naturally */
      className="rounded-3xl shadow-card w-full h-auto block"
    />
    <img
      src={awardImage1}
      alt="Award Two"
      className="rounded-3xl shadow-card w-full h-auto block"
    />
  </div>
</motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-secondary/30">
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
                className="rounded-3xl shadow-card w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                We Focus On
              </h2>
              <p className="text-muted-foreground font-body text-lg">
                At Honey Hive, we believe every child is unique. Our child-centered
                environment encourages growth across all dimensions.
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
                    <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <p className="font-body text-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Meet Our Team"
            subtitle="Dedicated professionals passionate about Montessori education"
            titleClassName="text-primary-foreground"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-2xl text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-2xl font-heading font-bold text-accent-foreground">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-lg font-heading font-bold text-primary-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-accent font-body font-semibold text-sm mb-2">
                  {member.role}
                </p>
                <p className="text-primary-foreground/70 font-body text-xs">
                  {member.experience}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Experience the Honey Hive
            </h2>
            <p className="text-muted-foreground font-body text-lg">
              Schedule a visit to see our Montessori environment in action and 
              discover how we nurture a lifelong passion for learning.
            </p>
            <Button variant="accent" size="xl" asChild>
              <Link to="/admissions">Book A Tour</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;