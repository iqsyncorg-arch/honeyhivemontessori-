import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { X } from "lucide-react";
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
const categories = [
  "All",
  "Classrooms",
  "Activities",
  "Events",
  "Facilities",
];

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
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

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
              Our <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-muted-foreground font-body text-lg">
              A glimpse into the joyful learning experiences at CogniKids.
              See our children explore, create, and grow every day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-body font-medium text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-primary/10"
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
                  className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square"
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <h3 className="font-heading font-bold text-primary-foreground">
                        {item.title}
                      </h3>
                      <span className="text-primary-foreground/70 font-body text-sm">
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
            className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
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
                className="absolute -top-12 right-0 text-primary-foreground hover:text-accent transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full rounded-2xl"
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl font-heading font-bold text-primary-foreground">
                  {selectedImage.title}
                </h3>
                <span className="text-primary-foreground/70 font-body">
                  {selectedImage.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Life at CogniKids"
            subtitle="Experience the joy and learning that happens every day"
          />

          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-primary/10 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-accent-foreground ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="font-body text-muted-foreground">
                  Video coming soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Partnership */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Parent Partnership Events"
            subtitle="We believe in building strong connections with our families"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Coffee with Principal", description: "Regular informal meetings with our school leadership" },
              { name: "Parent Workshops", description: "Educational sessions on child development topics" },
              { name: "Open Days", description: "Experience our classrooms and meet the teachers" },
              { name: "Family Learning Days", description: "Interactive learning activities for the whole family" },
              { name: "Cultural Celebrations", description: "Celebrating diversity through festivals and traditions" },
              { name: "Orientation Sessions", description: "Helping new families transition smoothly" },
            ].map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-soft"
              >
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                  {event.name}
                </h3>
                <p className="text-muted-foreground font-body text-sm">
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
