"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Données de la galerie (à personnaliser)
const galleryImages = [
  { id: 1, src: "/images/gallery/photo1.jpg", alt: "Photo 1", title: "Mon projet" },
  { id: 2, src: "/images/gallery/photo2.jpg", alt: "Photo 2", title: "Mon équipe" },
  { id: 3, src: "/images/gallery/photo3.jpg", alt: "Photo 3", title: "Mon bureau" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-zinc-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-space-grotesk mb-4">
            Galerie <span className="text-indigo-400">photos</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mb-8">
            Quelques moments en images.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 hover:border-indigo-500/30 transition"
            >
              <div className="aspect-video relative bg-zinc-800 flex items-center justify-center">
                <span className="text-6xl">📸</span>
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold">{photo.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
