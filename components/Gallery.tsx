"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// ============================================================
// VOS IMAGES — URLs directes depuis Supabase Storage
// ============================================================
const galleryItems = [
  // ==========================================================
  // GROUPE 1 : Freelance Informatique
  // ==========================================================
  {
    id: 1,
    src: "https://jsmjrrmkcufzanpkbcuc.supabase.co/storage/v1/object/public/portfolio-assets/affiche_info.jfif",
    title: "Freelance Informatique",
    category: "Services numériques",
    description: "Affiche promotionnelle de mes services freelance : formation informatique, création de sites web, design graphique, et assistance numérique.",
  },
  
  // ==========================================================
  // GROUPE 2 : Entrepreneuriat (Vente de chemises)
  // ==========================================================
  {
    id: 2,
    src: "https://jsmjrrmkcufzanpkbcuc.supabase.co/storage/v1/object/public/portfolio-assets/chemise.jfif",
    title: "Entrepreneuriat — Vente de chemises",
    category: "Commerce",
    description: "Collection de chemises haut de gamme dans le cadre de mon activité entrepreneuriale. Vente de vêtements, parfums et équipements sportifs.",
  },
  
  // ==========================================================
  // GROUPE 3 : Concours d'éloquence (THE BEST)
  // ==========================================================
  {
    id: 3,
    src: "https://jsmjrrmkcufzanpkbcuc.supabase.co/storage/v1/object/public/portfolio-assets/thebest.jfif",
    title: "Concours THE BEST — Éloquence",
    category: "Débat & Leadership",
    description: "Débatteur au concours THE BEST sur le thème : L'IA et la souveraineté numérique. Une expérience enrichissante sur l'importance de l'intelligence artificielle en Afrique.",
  },
  
  // ==========================================================
  // GROUPE 4 : Football Américain (Quarterback)
  // ==========================================================
  {
    id: 4,
    src: "https://jsmjrrmkcufzanpkbcuc.supabase.co/storage/v1/object/public/portfolio-assets/me.jfif",
    title: "Football Américain — Quarterback",
    category: "Sport & Leadership",
    description: "En action en tant que quarterback. Le football américain m'a appris la discipline, la stratégie et le leadership d'équipe.",
  },
  {
    id: 5,
    src: "https://jsmjrrmkcufzanpkbcuc.supabase.co/storage/v1/object/public/portfolio-assets/me1.jfif",
    title: "Football Américain — Match",
    category: "Sport & Leadership",
    description: "Moment clé d'un match de football américain. Le rôle de quarterback est essentiel pour coordonner l'attaque et prendre des décisions rapides.",
  },
  
  // ==========================================================
  // GROUPE 5 : Flag Football — Tournoi Régional (UGB)
  // ==========================================================
  {
    id: 6,
    src: "https://jsmjrrmkcufzanpkbcuc.supabase.co/storage/v1/object/public/portfolio-assets/afas0.jfif",
    title: "Tournoi Régional Flag Football — AFAS",
    category: "Sport & Compétition",
    description: "Tournoi régional de flag football. Je joue en tant que quarterback pour l'équipe USC FLAG. Un moment de compétition intense et d'esprit d'équipe.",
  },
  {
    id: 7,
    src: "https://jsmjrrmkcufzanpkbcuc.supabase.co/storage/v1/object/public/portfolio-assets/afas1.png",
    title: "USC FLAG — Match de compétition",
    category: "Sport & Compétition",
    description: "L'équipe USC FLAG en pleine action lors du tournoi régional.",
  },
  {
    id: 8,
    src: "https://jsmjrrmkcufzanpkbcuc.supabase.co/storage/v1/object/public/portfolio-assets/afas2.png",
    title: "USC FLAG — Action de jeu",
    category: "Sport & Compétition",
    description: "Moment de jeu stratégique avec l'équipe USC FLAG. Le flag football est une discipline qui demande agilité et coordination.",
  },
  {
    id: 9,
    src: "https://jsmjrrmkcufzanpkbcuc.supabase.co/storage/v1/object/public/portfolio-assets/usc_flag.jfif",
    title: "USC FLAG — L'équipe",
    category: "Sport & Compétition",
    description: "L'équipe USC FLAG, représentant l'UGB au tournoi régional. Une fierté de porter les couleurs de l'université.",
  },
];

export default function Gallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");

  // Extraire les catégories uniques pour les filtres
  const categories = ["all", ...new Set(galleryItems.map((item) => item.category))];
  
  // Filtrer les éléments
  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter((item) => item.category === filter);

  const selectedItem = galleryItems.find((item) => item.id === selectedId);

  return (
    <section id="gallery" className="py-20 bg-[#0A1628]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ===== EN-TÊTE ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair">
            Galerie <span className="text-[#D4AF37]">photos</span>
          </h2>
          <p className="text-[#8A9BA8] max-w-2xl mx-auto mt-2">
            Découvrez mon parcours à travers mes passions : entrepreneuriat, sport, débats et services numériques.
          </p>
        </motion.div>

        {/* ===== FILTRES PAR CATÉGORIE ===== */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm transition duration-300 ${
                filter === cat
                  ? "bg-[#D4AF37] text-[#0A1628] font-semibold"
                  : "bg-[#1A2A3A] text-[#8A9BA8] hover:text-[#F5F5F5] border border-[#243447]"
              }`}
            >
              {cat === "all" ? "📸 Toutes" : cat}
            </button>
          ))}
        </div>

        {/* ===== GRILLE DE PHOTOS ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedId(item.id)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-[#1A2A3A] border border-[#243447] hover:border-[#D4AF37]/30 transition duration-300 h-full">
                {/* Image */}
                <div className="aspect-[4/3] relative bg-[#1A2A3A]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized // Important pour les images distantes
                    onError={(e) => {
                      // En cas d'erreur, afficher un fallback
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const fallback = document.createElement('div');
                        fallback.className = 'w-full h-full flex items-center justify-center text-6xl';
                        fallback.textContent = '🖼️';
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
                
                {/* Informations */}
                <div className="p-4">
                  <span className="text-xs text-[#D4AF37] font-medium">
                    {item.category}
                  </span>
                  <h3 className="text-[#F5F5F5] font-semibold group-hover:text-[#D4AF37] transition mt-1">
                    {item.title}
                  </h3>
                  <p className="text-[#8A9BA8] text-sm mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== MODALE ===== */}
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A1628]/90 backdrop-blur-md p-4"
            onClick={() => setSelectedId(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#1A2A3A] rounded-2xl border border-[#243447] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#0A1628] border border-[#243447] rounded-full flex items-center justify-center text-[#F5F5F5] hover:text-[#D4AF37] transition"
              >
                ✕
              </button>
              
              <div className="relative w-full aspect-[4/3] bg-[#1A2A3A]">
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  fill
                  className="object-contain"
                  unoptimized
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = 'w-full h-full flex items-center justify-center text-8xl';
                      fallback.textContent = '🖼️';
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
              
              <div className="p-6">
                <span className="text-sm text-[#D4AF37] font-medium">
                  {selectedItem.category}
                </span>
                <h3 className="text-xl font-bold font-playfair text-[#F5F5F5] mt-1">
                  {selectedItem.title}
                </h3>
                <p className="text-[#8A9BA8] mt-2">
                  {selectedItem.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
