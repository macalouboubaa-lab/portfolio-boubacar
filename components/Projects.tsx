"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const categories = ["all", ...new Set(projects.map((p) => p.category))];
  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-zinc-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-space-grotesk mb-4">
            Projets <span className="text-cyan-400">récents</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mb-8">
            Découvrez quelques-uns des projets que j'ai réalisés.
          </p>
        </motion.div>

        {/* Filtres */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm transition ${
                filter === cat
                  ? "bg-cyan-600 text-white"
                  : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
              }`}
            >
              {cat === "all" ? "Tous" : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#161b22] rounded-xl overflow-hidden border border-[#30363d] hover:border-cyan-500/50 transition"
            >
              <div className="h-48 bg-[#0d1117] relative overflow-hidden border-b border-[#30363d]">
                <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-[#30363d]">
                  <span className="w-2.5 h-2.5 bg-red-500 rounded-full" />
                  <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full" />
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                  <span className="ml-2 flex-1 truncate rounded bg-[#0d1117] px-3 py-1 text-xs text-zinc-500 font-mono">
                    {project.demo ? "live preview" : "project preview"}
                  </span>
                </div>
                <div className="p-5 font-mono text-sm">
                  <p className="text-cyan-400">$ open {project.title.toLowerCase()}</p>
                  <p className="mt-2 text-zinc-400">&gt; {project.tags.join(" · ") || "à découvrir"}</p>
                  <span className="mt-3 inline-block h-4 w-2 bg-cyan-400 animate-pulse" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-xs text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-6">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition"
                    >
                      <Github size={16} /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition"
                    >
                      <ExternalLink size={16} /> Démo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}