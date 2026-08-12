"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import Link from "next/link";
import Typewriter from "react-typewriter-effect";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texte */}
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

            <div className="mt-2 text-lg sm:text-xl text-zinc-400">
              <Typewriter
                textStyle={{ color: "#818cf8" }}
                startDelay={1000}
                cursorColor="#818cf8"
                multiText={[
                  "Développeur Full-Stack Junior",
                  "Génie Logiciel",
                  "Formateur & Entrepreneur",
                ]}
                multiTextDelay={3000}
                typeSpeed={50}
                loop
              />
            </div>

            <p className="mt-6 text-zinc-400 max-w-lg">
              {personalInfo.subtitle}. Passionné par le web, la formation et les nouvelles technologies.
            </p>

            {/* Actions */}
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

            {/* Socials */}
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

          {/* Avatar / Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-emerald-500/20 rounded-3xl blur-2xl" />
              <div className="relative w-full h-full rounded-3xl border border-zinc-800 bg-zinc-900/50 flex items-center justify-center overflow-hidden">
                <span className="text-8xl sm:text-9xl">👨‍💻</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}