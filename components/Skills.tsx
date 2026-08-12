"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { skillsCategories } from "@/data/portfolio";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "Toutes" },
    ...skillsCategories.map((cat) => ({ id: cat.id, label: cat.label })),
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skillsCategories
      : skillsCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-space-grotesk mb-4">
            Compétences <span className="text-indigo-400">techniques</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mb-8">
            Voici les technologies et outils que j'utilise au quotidien.
          </p>
        </motion.div>

        {/* Filtres */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm transition ${
                activeCategory === cat.id
                  ? "bg-indigo-600 text-white"
                  : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredSkills.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800"
            >
              <h3 className="text-lg font-semibold mb-4 text-indigo-400">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-zinc-800 border border-zinc-700 rounded-full text-sm text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}