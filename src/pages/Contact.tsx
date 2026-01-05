import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Send,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: [
      "Raama associates, 1 A, Vinayaganagar",
      "MCN Nagar Extension, Thoraipakkam",
      "Chennai, Tamil Nadu 600097",
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 99529 00051", "+91 97907 30051", "044 - 48502661"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["honeyhivechennai@gmail.com"],
  },
  {
    icon: Clock,
    title: "School Hours",
    details: ["Mon - Fri: 9:00 AM - 1:30 PM", "Saturday: Office Only"],
  },
];

const faqs = [
  {
    q: "What makes the Montessori method different?",
    a: "Unlike traditional classrooms, Montessori focuses on self-directed activity, hands-on learning, and collaborative play. At Honey Hive, children make creative choices in their learning while the teacher offers age-appropriate activities to guide the process.",
  },
  {
    q: "At what age can a child join Honey Hive?",
    a: "We welcome children into our Toddler and Primary programs. Typically, children can start as early as 1.5 to 2 years old, depending on their readiness for a prepared environment.",
  },
  {
    q: "How do you track a child's progress without exams?",
    a: "We use detailed observation and portfolio tracking. Montessori guides observe how a child interacts with materials and peers, documenting their developmental milestones in practical life, sensorial, math, and language.",
  },
  {
    q: "What are the school timings for the children?",
    a: "Our regular Montessori sessions run from 9:00 AM to 1:30 PM. For office inquiries, we are available until late afternoon on weekdays.",
  },
  {
    q: "Is there a specific uniform for the students?",
    a: "In the spirit of Montessori, we encourage comfortable clothing that allows children to move freely and manage their own dressing (independence). Please contact us for specific dress code guidelines.",
  },
  {
    q: "Do you offer transportation services?",
    a: "Yes, we provide safe and reliable transportation for children within a specific radius of Thoraipakkam. Please reach out to us to check if your area is covered.",
  },
  {
    q: "How can I schedule a visit to the school?",
    a: "We highly recommend parents visit us to see the 'Prepared Environment' in action. You can call us at +91 99529 00051 to book an appointment during office hours.",
  },
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! The Honey Hive team will contact you soon.");
  };

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
              Connect with <span className="text-[#FFD22F]">Honey Hive</span>
            </h1>
            <blockquote className="text-lg italic text-[#3B2A1A]/70 border-l-4 border-[#FFD22F] pl-4 py-2 mb-6 text-left">
              “The greatest gifts we can give our children are the roots of responsibility and the wings of independence.”
              <span className="block font-bold mt-2 text-[#3B2A1A]">— Dr. Maria Montessori</span>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm text-center border border-[#FFD22F]/20"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-[#FFD22F]/20 rounded-2xl flex items-center justify-center text-[#3B2A1A]">
                  <info.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-heading font-bold text-[#3B2A1A] mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, j) => (
                  <p key={j} className="text-[#3B2A1A]/60 font-body text-sm leading-relaxed">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#FFD22F]/10 h-full">
                <h2 className="text-2xl font-heading font-bold text-[#3B2A1A] mb-6">
                  Inquiry Form
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[#3B2A1A]">Parent's Name</Label>
                      <Input id="name" placeholder="Full Name" required className="border-[#3B2A1A]/10 focus:border-[#FFD22F] focus:ring-[#FFD22F]" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#3B2A1A]">Email Address</Label>
                      <Input id="email" type="email" placeholder="example@mail.com" required className="border-[#3B2A1A]/10 focus:border-[#FFD22F] focus:ring-[#FFD22F]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#3B2A1A]">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+91 99529 00051" className="border-[#3B2A1A]/10 focus:border-[#FFD22F] focus:ring-[#FFD22F]" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#3B2A1A]">How can we help you?</Label>
                    <Textarea id="message" placeholder="Tell us about your child..." rows={5} required className="border-[#3B2A1A]/10 focus:border-[#FFD22F] focus:ring-[#FFD22F]" />
                  </div>
                  <Button 
                    style={{ backgroundColor: "#FFD22F", color: "#3B2A1A" }} 
                    size="lg" 
                    type="submit" 
                    className="w-full font-bold hover:opacity-90"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Inquiry
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Live Google Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <div className="bg-white rounded-3xl shadow-xl border border-[#FFD22F]/20 overflow-hidden h-[400px]">
                <iframe
                  title="Honey Hive Montessori Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.75037130283!2d80.2294157745458!3d12.923744615938887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d0032f3f987%3A0x6796472855160b73!2sHoney%20Hive%20Montessori%20House!5e0!3m2!1sen!2sin!4v1715600000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Social Media & Follow */}
              <div className="bg-[#3B2A1A] p-8 rounded-3xl text-white shadow-lg">
                <h3 className="text-xl font-heading font-bold mb-4 text-[#FFD22F]">Follow Our Journey</h3>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/Honeyhivechennai/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#FFD22F] hover:text-[#3B2A1A] transition-all">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="https://www.instagram.com/honeyhive_chennai/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#FFD22F] hover:text-[#3B2A1A] transition-all">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#FDFCFB]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-[#3B2A1A] mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-[#FFD22F]/10 hover:border-[#FFD22F]/40 transition-colors"
                >
                  <h3 className="font-heading font-bold text-[#3B2A1A] mb-2 flex items-start">
                    <span className="text-[#FFD22F] font-black mr-3">Q.</span> {faq.q}
                  </h3>
                  <div className="font-body text-sm text-[#3B2A1A]/60 pl-7 border-l-2 border-[#FFD22F]/30 ml-2">
                    {faq.a}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;