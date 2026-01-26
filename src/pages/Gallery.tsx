import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import SEO from "@/components/SEO";
import { Helmet } from "react-helmet-async";

import { X, PlayCircle } from "lucide-react";

import heroImage from "@/assets/hh.png";
import artImage from "@/assets/handshake.jpeg";
import classroomImage from "@/assets/child1.png";
import schoolImage from "@/assets/outdoor.jpeg";
import redday from "@/assets/redday.png";
import group from "@/assets/group.png";
import gr from "@/assets/gr.jpeg";
import selling from "@/assets/selling.jpeg";
import event from "@/assets/event.jpeg";
import yellow from "@/assets/yellowday.png";

const categories = ["All", "Classrooms", "Activities", "Events", "Facilities"];

const galleryItems = [
  { id: 1, src: heroImage, title: "Learning Through Play", category: "Activities" },
  { id: 2, src: gr, title: "Creative Art Session", category: "Activities" },
  { id: 3, src: classroomImage, title: "Classroom Learning", category: "Classrooms" },
  { id: 4, src: schoolImage, title: "Our Beautiful Campus", category: "Facilities" },
  { id: 5, src: event, title: "Building Blocks Fun", category: "Activities" },
  { id: 6, src: group, title: "Painting Time", category: "Activities" },
  { id: 7, src: yellow, title: "Teacher-Led Activity", category: "Classrooms" },
  { id: 8, src: redday, title: "Outdoor Play Area", category: "Facilities" },
  { id: 9, src: heroImage, title: "Group Learning", category: "Classrooms" },
  { id: 10, src: artImage, title: "Art & Craft", category: "Events" },
  { id: 11, src: selling, title: "Storytime", category: "Activities" },
  { id: 12, src: schoolImage, title: "School Entrance", category: "Facilities" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] =
    useState<(typeof galleryItems)[0] | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <Layout>
      {/* ✅ STEP 4 FIX: SEO */}
      <SEO
        title="Gallery | Honey Hive Montessori House (Thoraipakkam, Chennai)"
        description="Explore the Honey Hive Montessori House gallery. See classrooms, activities, events, and facilities in our Montessori preschool in Thoraipakkam, Chennai."
        canonical="/gallery"
      />

      {/* ✅ STEP 4 FIX: Schema for Gallery */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "ImageGallery",
              name: "Honey Hive Montessori House Gallery",
              url: "https://honeyhivemontessorihouse.com/gallery",
              description:
                "Photos from Honey Hive Montessori House including classrooms, activities, events, and facilities.",
              isPartOf: {
                "@type": "WebSite",
                name: "Honey Hive Montessori House",
                url: "https://honeyhivemontessorihouse.com/",
              },
            },
            null,
            2
          )}
        </script>
      </Helmet>

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
              Our <span className="text-[#FFD22F]">Gallery</span>
            </h1>
            <p className="text-[#3B2A1A]/70 font-body text-lg">
              A glimpse into the joyful learning experiences at Honey Hive. See our
              children explore, create, and grow every day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-body font-bold text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#3B2A1A] text-[#FFD22F]"
                    : "bg-[#FFD22F]/10 text-[#3B2A1A] hover:bg-[#FFD22F]/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative group cursor-pointer overflow-hidden rounded-3xl aspect-square border-2 border-transparent hover:border-[#FFD22F] transition-all"
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B2A1A]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="font-heading font-bold text-[#FFD22F]">
                        {item.title}
                      </h3>
                      <span className="text-white/70 font-body text-sm">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#3B2A1A]/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-[#FFD22F] hover:text-white transition-colors"
              >
                <X className="w-10 h-10" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full rounded-[2rem] border-4 border-[#FFD22F]/20 shadow-2xl"
              />
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-heading font-bold text-[#FFD22F]">
                  {selectedImage.title}
                </h3>
                <span className="text-white/60 font-body">
                  {selectedImage.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Section */}
      <section className="py-20 bg-[#FDFCFB]">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Life at Honey Hive"
            subtitle="Experience the joy and learning that happens every day"
          />

          <div className="max-w-4xl mx-auto mt-12">
            <div className="aspect-video bg-[#3B2A1A]/5 rounded-[3rem] border-2 border-dashed border-[#FFD22F] flex items-center justify-center group cursor-pointer hover:bg-[#FFD22F]/5 transition-all">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-[#FFD22F] rounded-full flex items-center justify-center text-[#3B2A1A] group-hover:scale-110 transition-transform shadow-lg">
                  <PlayCircle className="w-12 h-12 fill-current" />
                </div>
                <p className="font-heading font-bold text-[#3B2A1A] text-xl">
                  Video coming soon
                </p>
                <p className="font-body text-[#3B2A1A]/50">
                  Capturing the buzz of our daily activities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Partnership */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Parent Partnership Events"
            subtitle="We believe in building strong connections with our families"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              {
                name: "Coffee with Principal",
                description: "Regular informal meetings with our school leadership",
              },
              {
                name: "Parent Workshops",
                description: "Educational sessions on child development topics",
              },
              {
                name: "Open Days",
                description: "Experience our classrooms and meet the teachers",
              },
              {
                name: "Family Learning Days",
                description: "Interactive learning activities for the whole family",
              },
              {
                name: "Cultural Celebrations",
                description: "Celebrating diversity through festivals and traditions",
              },
              {
                name: "Orientation Sessions",
                description: "Helping new families transition smoothly",
              },
            ].map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-[#FFD22F]/20 hover:border-[#3B2A1A] hover:shadow-xl transition-all group"
              >
                <div className="w-2 h-12 bg-[#FFD22F] mb-4 rounded-full group-hover:h-16 transition-all" />
                <h3 className="text-xl font-heading font-bold text-[#3B2A1A] mb-3">
                  {event.name}
                </h3>
                <p className="text-[#3B2A1A]/60 font-body text-sm leading-relaxed">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
