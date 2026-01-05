import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import {
  School,
  Users,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

const admissionSteps = [
  {
    icon: School,
    title: "Visit our Campus",
    description: "Experience our Montessori environment firsthand. Walk through our classrooms and see our 'Honey Hive' in action.",
  },
  {
    icon: Users,
    title: "Interaction",
    description: "A friendly interaction with parents and the child to understand your needs and our philosophy.",
  },
  {
    icon: CheckCircle,
    title: "Admission Confirmation",
    description: "Once the interaction is complete, we proceed with the final enrollment and welcome you to the family.",
  },
];

const Admissions = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We have received your inquiry and will contact you shortly.");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-[#FFD22F]/10 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#3B2A1A] mb-6">
              Join the <span className="text-[#FFD22F]">Honey Hive</span>
            </h1>
            <p className="text-[#3B2A1A]/70 font-body text-lg mb-8">
              Admissions are open throughout the year, subject to seat availability. 
              Start your child's Montessori journey today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                style={{ backgroundColor: "#FFD22F", color: "#3B2A1A" }}
                className="font-bold px-8 py-6 rounded-full hover:opacity-90 shadow-lg"
                size="xl" 
                asChild
              >
                <a href="#inquiry-form">Enroll Now</a>
              </Button>
              <Button 
                variant="outline" 
                style={{ borderColor: "#3B2A1A", color: "#3B2A1A" }}
                className="px-8 py-6 rounded-full hover:bg-[#3B2A1A] hover:text-white transition-all"
                size="xl" 
                asChild
              >
                <a href="tel:9952900051">Call to Schedule Visit</a>
              </Button>
            </div>
          </motion.div>
        </div>
        {/* Decorative Hive Circles */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#FFD22F]/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#FFE873]/30 rounded-full blur-3xl" />
      </section>

      {/* HIGHLIGHTED Admission Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#FFD22F]/5 border-2 border-dashed border-[#3B2A1A]/20 rounded-[3rem] p-8 md:p-16"
          >
            <SectionHeading
              title="Steps to Enroll"
              subtitle="A simple three-step process to secure your child's future"
            />

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
              {admissionSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative group"
                >
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#FFD22F]/30 group-hover:border-[#3B2A1A] group-hover:shadow-xl transition-all duration-300 text-center h-full flex flex-col items-center">
                    
                    {/* Icon Container */}
                    <div className="w-20 h-20 mb-6 bg-[#FFD22F] rounded-2xl flex items-center justify-center text-[#3B2A1A] group-hover:rotate-6 transition-transform">
                      <step.icon className="w-10 h-10" />
                    </div>

                    {/* Step Number Badge */}
                    <div className="absolute top-6 right-6 w-10 h-10 bg-[#3B2A1A] rounded-full flex items-center justify-center shadow-md">
                      <span className="text-[#FFD22F] font-bold text-lg">
                        {i + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl font-heading font-bold text-[#3B2A1A] mb-4">
                      {step.title}
                    </h3>
                    <p className="text-[#3B2A1A]/60 font-body text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-[#3B2A1A] font-body font-semibold italic">
                Need help? <a href="tel:9952900051" className="underline decoration-[#FFD22F] decoration-4 underline-offset-4">Give us a buzz!</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Inquiry Form & Contact Info */}
      <section id="inquiry-form" className="py-20 bg-[#FDFCFB] scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#3B2A1A] mb-4">
                  Experience Honey Hive
                </h2>
                <p className="text-[#3B2A1A]/60 font-body text-lg">
                  Contact us today to schedule a visit and see how we celebrate 
                  childhood through discovery and joyful learning.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-[#FFD22F]/10 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[#FFD22F]/20 rounded-xl flex items-center justify-center text-[#3B2A1A]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#3B2A1A]/40">Call Us</p>
                    <p className="text-lg font-heading font-bold text-[#3B2A1A]">9952900051 / 9790730051</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-[#FFD22F]/10 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[#FFD22F]/20 rounded-xl flex items-center justify-center text-[#3B2A1A]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#3B2A1A]/40">Email Us</p>
                    <p className="text-lg font-heading font-bold text-[#3B2A1A]">honeyhivechennai@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-[#FFD22F]/10 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[#FFD22F]/20 rounded-xl flex items-center justify-center text-[#3B2A1A]">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#3B2A1A]/40">Visit Hours</p>
                    <p className="text-lg font-heading font-bold text-[#3B2A1A]">Mon - Sat: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#3B2A1A] p-6 rounded-2xl text-white shadow-xl">
                <h3 className="text-lg font-heading font-bold mb-2 flex items-center gap-2 text-[#FFD22F]">
                   <MapPin className="w-5 h-5" /> Our Location
                </h3>
                <p className="font-body text-[#FFE873]">
                  Thoraipakkam, Chennai, Tamil Nadu.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-[#FFD22F]/20 space-y-6"
              >
                <h3 className="text-2xl font-heading font-bold text-[#3B2A1A]">
                  Admission Inquiry
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="parentName" className="text-[#3B2A1A] font-semibold">Parent Name</Label>
                    <Input id="parentName" placeholder="Full Name" required className="rounded-xl border-[#3B2A1A]/10 focus:ring-[#FFD22F] focus:border-[#FFD22F]" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#3B2A1A] font-semibold">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="10-digit number" required className="rounded-xl border-[#3B2A1A]/10 focus:ring-[#FFD22F] focus:border-[#FFD22F]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="childName" className="text-[#3B2A1A] font-semibold">Child's Name</Label>
                  <Input id="childName" placeholder="Child's Name" required className="rounded-xl border-[#3B2A1A]/10 focus:ring-[#FFD22F] focus:border-[#FFD22F]" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="program" className="text-[#3B2A1A] font-semibold">Program of Interest</Label>
                  <Select>
                    <SelectTrigger className="rounded-xl border-[#3B2A1A]/10">
                      <SelectValue placeholder="Select Program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="grub">Grub (Playgroup)</SelectItem>
                      <SelectItem value="brood">Brood (Pre-Kg)</SelectItem>
                      <SelectItem value="junior-bees">Junior Bees (LKG)</SelectItem>
                      <SelectItem value="senior-bees">Senior Bees (UKG)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#3B2A1A] font-semibold">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your child or ask a question..."
                    rows={4}
                    className="rounded-xl border-[#3B2A1A]/10 focus:ring-[#FFD22F] focus:border-[#FFD22F]"
                  />
                </div>

                <Button 
                  style={{ backgroundColor: "#FFD22F", color: "#3B2A1A" }} 
                  size="lg" 
                  type="submit" 
                  className="w-full font-bold rounded-xl py-6 hover:shadow-lg transition-all"
                >
                  Send Inquiry
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admissions;