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
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Join the <span className="text-gradient">Honey Hive</span>
            </h1>
            <p className="text-muted-foreground font-body text-lg mb-8">
              Admissions are open throughout the year, subject to seat availability. 
              Start your child's Montessori journey today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="#inquiry-form">Enroll Now</a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="tel:9952900051">Call to Schedule Visit</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Steps to Enroll"
            subtitle="A simple three-step process to secure your child's future"
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {admissionSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative"
              >
                <div className="bg-card p-8 rounded-3xl shadow-soft text-center h-full border border-border hover:border-primary/20 transition-all">
                  <div className="w-16 h-16 mx-auto mb-6 bg-accent rounded-2xl flex items-center justify-center text-accent-foreground">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form & Contact Info */}
      <section id="inquiry-form" className="py-20 bg-secondary scroll-mt-20">
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
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                  Experience Honey Hive
                </h2>
                <p className="text-muted-foreground font-body text-lg">
                  Contact us today to schedule a visit and see how we celebrate 
                  childhood through discovery and joyful learning.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-card p-4 rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Call Us</p>
                    <p className="text-lg font-heading font-bold">9952900051 / 9790730051</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-card p-4 rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Us</p>
                    <p className="text-lg font-heading font-bold">honeyhivechennai@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-card p-4 rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Visit Hours</p>
                    <p className="text-lg font-heading font-bold">Mon - Sat: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent p-6 rounded-2xl text-accent-foreground">
                <h3 className="text-lg font-heading font-bold mb-2 flex items-center gap-2">
                   <MapPin className="w-5 h-5" /> Our Location
                </h3>
                <p className="font-body opacity-90">
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
                className="bg-card p-8 rounded-3xl shadow-card border border-border space-y-6"
              >
                <h3 className="text-2xl font-heading font-bold text-foreground">
                  Admission Inquiry
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="parentName">Parent Name</Label>
                    <Input id="parentName" placeholder="Full Name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="10-digit number" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="childName">Child's Name</Label>
                  <Input id="childName" placeholder="Child's Name" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="program">Program of Interest</Label>
                  <Select>
                    <SelectTrigger>
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
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your child or ask a question..."
                    rows={4}
                  />
                </div>

                <Button variant="accent" size="lg" type="submit" className="w-full">
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