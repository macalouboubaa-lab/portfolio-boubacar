"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const titles = [
    "Développeur Full-Stack Junior",
    "Génie Logiciel",
    "Formateur & Entrepreneur",
  ];

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

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="badge-roven mb-6">
              <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
              {personalInfo.status}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-playfair leading-tight">
              <span className="text-[#8A9BA8]">Bonjour, je suis</span>
              <br />
              <span className="text-[#F5F5F5]">{personalInfo.name}</span>
            </h1>

            <div className="mt-2 text-lg sm:text-xl text-[#D4AF37] min-h-[2.5rem]">
              {isMounted ? displayText : titles[0]}
              {isMounted && <span className="inline-block w-0.5 h-6 ml-1 bg-[#D4AF37] animate-pulse" />}
            </div>

            <p className="mt-6 text-[#8A9BA8] max-w-lg">
              {personalInfo.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/cv.pdf"
                download
                className="btn-roven"
              >
                <Download size={18} className="inline mr-2" />
                Télécharger le CV
              </a>
              <Link
                href="#contact"
                className="btn-roven-outline"
              >
                Me contacter
              </Link>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#1A2A3A] hover:bg-[#243447] rounded-lg transition group"
              >
                <Github size={20} className="text-[#8A9BA8] group-hover:text-[#D4AF37] transition" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#1A2A3A] hover:bg-[#243447] rounded-lg transition group"
              >
                <Linkedin size={20} className="text-[#8A9BA8] group-hover:text-[#D4AF37] transition" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 bg-[#1A2A3A] hover:bg-[#243447] rounded-lg transition group"
              >
                <Mail size={20} className="text-[#8A9BA8] group-hover:text-[#D4AF37] transition" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 to-[#0A1628] rounded-3xl blur-2xl" />
              <div className="relative w-full h-full rounded-3xl border border-[#243447] bg-[#1A2A3A] flex items-center justify-center overflow-hidden">
                <Image
                  src="https://jsmjrrmkcufzanpkbcuc.supabase.co/storage/v1/object/public/portfolio-assets/profile.jpeg"
                  alt={personalInfo.name}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
