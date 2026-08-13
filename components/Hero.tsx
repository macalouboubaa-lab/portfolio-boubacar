// ============================================================
// 1. DIRECTIVES ET IMPORTS
// ============================================================

"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/data/portfolio";
import Image from "next/image";
// ============================================================
// 2. COMPOSANT PRINCIPAL - HERO
// ============================================================

export default function Hero() {
  // ============================================================
  // 3. ÉTATS DU COMPOSANT
  // ============================================================

  const [isMounted, setIsMounted] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const titles = [
    "Développeur Full-Stack Junior",
    "Génie Logiciel",
    "Formateur & Entrepreneur",
  ];

  // ============================================================
  // 4. EFFETS SECONDAIRES
  // ============================================================

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    let currentIndex = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      const fullText = titles[textIndex];
      if (isDeleting) {
        setDisplayText(fullText.substring(0, currentIndex - 1));
        currentIndex--;
      } else {
        setDisplayText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      }

      let speed = isDeleting ? 50 : 100;

      if (!isDeleting && currentIndex === fullText.length) {
        speed = 2000;
        isDeleting = true;
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false;
        setTextIndex((prev) => (prev + 1) % titles.length);
        speed = 500;
      }

      timeoutId = setTimeout(type, speed);
    };

    type();
    return () => clearTimeout(timeoutId);
  }, [textIndex, isMounted]);

  // ============================================================
  // 5. RENDU DU COMPOSANT
  // ============================================================

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* ===== SECTION GAUCHE : TEXTE ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              {personalInfo.status}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-space-grotesk leading-tight">
              <span className="text-zinc-300">Bonjour, je suis</span>
              <br />
              <span className="text-white">{personalInfo.name}</span>
            </h1>

            <div className="mt-2 text-lg sm:text-xl text-indigo-400 min-h-[2.5rem]">
              {isMounted ? displayText : titles[0]}
              {isMounted && <span className="inline-block w-0.5 h-6 ml-1 bg-indigo-400 animate-pulse" />}
            </div>

            <p className="mt-6 text-zinc-400 max-w-lg">
              {personalInfo.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition shadow-lg shadow-indigo-600/20"
              >
                <Download size={18} />
                Télécharger le CV
              </a>
              <Link
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 border border-zinc-700 hover:border-indigo-500 text-zinc-300 hover:text-white rounded-lg transition"
              >
                Me contacter
              </Link>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition group"
              >
                <Github size={20} className="text-zinc-400 group-hover:text-white transition" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition group"
              >
                <Linkedin size={20} className="text-zinc-400 group-hover:text-white transition" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition group"
              >
                <Mail size={20} className="text-zinc-400 group-hover:text-white transition" />
              </a>
            </div>
          </motion.div>

          {/* ===== SECTION DROITE : IMAGE ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-emerald-500/20 rounded-3xl blur-2xl" />
              <div className="relative w-full h-full rounded-3xl border border-zinc-800 bg-zinc-900/50 flex items-center justify-center overflow-hidden">
                <span className="text-8xl sm:text-9xl">
                  // Puis remplacez l'emoji par :
<Image
  src="/public/profile.jpeg"
  alt={personalInfo.name}
  width={400}
  height={400}
  className="object-cover w-full h-full"
  priority
/>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}