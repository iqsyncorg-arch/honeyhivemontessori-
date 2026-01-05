import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Baby,
  Sprout,
  Milestone,
  GraduationCap,
  BookOpen,
  Heart,
  Lightbulb,
  Palette,
  Calculator,
  Music,
  Users,
  Trees,
} from "lucide-react";

const agePrograms = [
  {
    id: "grub",
    name: "Grub (Playgroup)",
    age: "2 – 3 years",
    ratio: "1:10",
    icon: Baby,
    color: "bg-[#FFD22F]/10",
    description:
      "A gentle introduction to school life where toddlers explore, socialize, and develop basic motor and language skills through play and routine. Our environment is designed to feel like a second home, easing the transition into the world of learning.",
    highlights: [
      "Social interaction and play",
      "Basic motor skill development",
      "Language through songs and stories",
      "Routine building and comfort",
      "Sensory exploration",
    ],
  },
  {
    id: "brood",
    name: "Brood (Pre-Kg)",
    age: "3 – 4 years",
    ratio: "1:10",
    icon: Sprout,
    color: "bg-[#3B2A1A]/5",
    description:
      "Children begin structured Montessori activities focusing on independence, communication, sensorial exploration, and early concepts. This stage bridges the gap between free play and guided discovery.",
    highlights: [
      "Independence in daily tasks",
      "Enhanced communication skills",
      "Introduction to Montessori materials",
      "Early sensorial concepts",
      "Confidence building activities",
    ],
  },
  {
    id: "junior-bees",
    name: "Junior Bees (LKG)",
    age: "4 – 5 years",
    ratio: "1:15",
    icon: Milestone,
    color: "bg-[#FFD22F]/10",
    description:
      "A strong foundation in language, numeracy, practical life skills, and social development through guided Montessori Learning. Children start to make connections between abstract concepts and the real world.",
    highlights: [
      "Foundational language & phonics",
      "Early numeracy and logic",
      "Practical life skill mastery",
      "Social-emotional development",
      "Curiosity-driven learning",
    ],
  },
  {
    id: "senior-bees",
    name: "Senior Bees (UKG)",
    age: "5 – 6 years",
    ratio: "1:15",
    icon: GraduationCap,
    color: "bg-[#3B2A1A]/5",
    description:
      "Advanced readiness for primary school with confidence in academics, problem-solving, leadership, and self-expression. We prepare our 'Senior Bees' to take flight into formal schooling with a robust set of skills.",
    highlights: [
      "Primary school readiness",
      "Advanced literacy and math",
      "Leadership and self-expression",
      "Critical thinking and problem solving",
      "Collaborative project work",
    ],
  },
];

const curriculumHighlights = [
  { icon: Heart, name: "Montessori Practical Life Activities" },
  { icon: Lightbulb, name: "Sensorial Development" },
  { icon: BookOpen, name: "Phonics-based Language Learning" },
  { icon: Calculator, name: "Early Math Concepts" },
  { icon: Palette, name: "Art, Music & Movement" },
  { icon: Users, name: "Life Skills & Value Education" },
  { icon: Trees, name: "Outdoor Play & Physical Development" },
  { icon: Music, name: "Creative Expression" },
];

const Programs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-[#FFD22F]/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#3B2A1A] mb-6">
              Our <span className="text-[#FFD22F]">Programs</span>
            </h1>
            <p className="text-[#3B2A1A]/70 font-body text-lg">
              Nurturing curiosity from the first buzz. Explore our age-specific Montessori 
              environments designed to build confidence and independence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Age-Based Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Classes"
            subtitle="Thoughtfully tailored programs with focused teacher-student ratios"
          />

          <Tabs defaultValue="grub" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 h-auto bg-transparent mb-12">
              {agePrograms.map((program) => (
                <TabsTrigger
                  key={program.id}
                  value={program.id}
                  // Custom styling for active state to use Honey Hive Yellow and Brown
                  className="data-[state=active]:bg-[#FFD22F] data-[state=active]:text-[#3B2A1A] flex flex-col items-center gap-2 p-4 rounded-2xl border-2 border-[#3B2A1A]/10 data-[state=active]:border-[#3B2A1A] transition-all bg-white text-[#3B2A1A]/60"
                >
                  <program.icon className="w-8 h-8" />
                  <span className="font-heading font-bold">{program.name.split(' ')[0]}</span>
                  <span className="text-xs opacity-70">{program.age}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {agePrograms.map((program) => (
              <TabsContent key={program.id} value={program.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`${program.color} p-8 md:p-12 rounded-[2.5rem] border border-[#FFD22F]/20`}
                >
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-[#3B2A1A] rounded-2xl flex items-center justify-center shadow-lg">
                          <program.icon className="w-8 h-8 text-[#FFD22F]" />
                        </div>
                        <div>
                          <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#3B2A1A]">
                            {program.name}
                          </h2>
                          <div className="flex gap-4 mt-1">
                            <span className="text-[#3B2A1A] font-body font-semibold">
                              {program.age}
                            </span>
                            <span className="text-[#3B2A1A]/50 font-body text-sm border-l pl-4 border-[#3B2A1A]/20">
                              Ratio: {program.ratio}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-[#3B2A1A]/80 font-body text-lg leading-relaxed">
                        {program.description}
                      </p>
                      <Button 
                        style={{ backgroundColor: "#3B2A1A", color: "#FFFFFF" }} 
                        size="lg" 
                        className="rounded-full px-8"
                        asChild
                      >
                        <Link to="/admissions">Enroll in {program.name.split(' ')[0]}</Link>
                      </Button>
                    </div>

                    <div className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-white/40">
                      <h3 className="text-xl font-heading font-bold text-[#3B2A1A] mb-6 flex items-center gap-2">
                        <span className="w-2 h-6 bg-[#FFD22F] rounded-full" />
                        Learning Focus
                      </h3>
                      <ul className="space-y-4">
                        {program.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-[#FFD22F] rounded-full shrink-0" />
                            <span className="font-body text-[#3B2A1A]/90">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="py-20 bg-[#FDFCFB]">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Curriculum Highlights"
            subtitle="A holistic Montessori approach covering all areas of early childhood development"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {curriculumHighlights.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-[#FFD22F]/10 text-center hover:border-[#FFD22F] hover:shadow-md transition-all flex flex-col items-center justify-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-[#FFD22F]/10 rounded-2xl flex items-center justify-center">
                  <area.icon className="w-7 h-7 text-[#3B2A1A]" />
                </div>
                <h3 className="font-body font-bold text-[#3B2A1A] text-sm leading-tight">
                  {area.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Chocolate Brown Background */}
      <section className="py-20 bg-[#3B2A1A]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#FFD22F]">
              Ready to Join the Hive?
            </h2>
            <p className="text-white/80 font-body text-lg">
              Admissions are open! Give your child the foundation they deserve with our 
              child-centered Montessori programs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button 
                style={{ backgroundColor: "#FFD22F", color: "#3B2A1A" }} 
                size="xl" 
                className="font-bold rounded-full px-10"
                asChild
              >
                <Link to="/admissions">Start Admission</Link>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-[#FFD22F]/50 text-[#FFD22F] hover:bg-[#FFD22F] hover:text-[#3B2A1A] rounded-full px-10"
                asChild
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;