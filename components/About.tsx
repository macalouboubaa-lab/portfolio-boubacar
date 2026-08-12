"use client";
import { motion } from "framer-motion";
import { personalInfo, about, experiences, education, languages, interests } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-20 bg-zinc-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-space-grotesk mb-4">
            À propos de <span className="text-indigo-400">moi</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mb-12">
            {about.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experiences & Formation */}
          <div>
            <h3 className="text-xl font-semibold mb-6">🗂️ Expériences</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-6 border-l border-indigo-500/30"
                >
                  <div className="absolute left-0 top-1.5 w-3 h-3 bg-indigo-500 rounded-full" />
                  <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                  <p className="text-indigo-400 text-sm">{exp.company}</p>
                  <p className="text-zinc-500 text-xs">{exp.date}</p>
                  <p className="text-zinc-400 text-sm mt-1">{exp.description}</p>
                </motion.div>
              ))}
            </div>

            <h3 className="text-xl font-semibold mt-12 mb-6">🎓 Formation</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex justify-between items-start border-b border-zinc-800 pb-3"
                >
                  <div>
                    <h4 className="text-white font-medium">{edu.degree}</h4>
                    <p className="text-zinc-400 text-sm">{edu.school}</p>
                  </div>
                  <span className="text-zinc-500 text-xs whitespace-nowrap ml-4">{edu.date}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Langues & Centres d'intérêt */}
          <div>
            <h3 className="text-xl font-semibold mb-6">🌍 Langues</h3>
            <div className="space-y-2 mb-8">
              {languages.map((lang, index) => (
                <div key={index} className="flex justify-between border-b border-zinc-800 py-2">
                  <span className="text-white">{lang.name}</span>
                  <span className="text-zinc-400 text-sm">{lang.level}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-6">🎯 Centres d'intérêt</h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-zinc-800 border border-zinc-700 rounded-full text-sm text-zinc-300"
                >
                  {interest}
                </span>
              ))}
            </div>

            <div className="mt-8 p-6 bg-zinc-800/50 rounded-xl border border-zinc-700">
              <p className="text-zinc-300 text-sm italic">"{about.mission}"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}