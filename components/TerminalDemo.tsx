"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo, skills, about, projects } from "@/data/portfolio";

export default function TerminalDemo() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([
    "Bienvenue dans mon terminal interactif !",
    "Tapez 'help' pour voir la liste des commandes disponibles.",
  ]);

  const commands: Record<string, () => string> = {
    help: () => `
      ╔═══════════════════════════════════════════╗
      ║  📋 Commandes disponibles :              ║
      ║  help       → Affiche cette aide          ║
      ║  skills     → Liste des compétences       ║
      ║  projects   → Liste des projets           ║
      ║  about      → Présentation                ║
      ║  contact    → Coordonnées                 ║
      ║  clear      → Efface le terminal          ║
      ╚═══════════════════════════════════════════╝
    `,
    skills: () => `
      ╔═══════════════════════════════════════════╗
      ║  🛠️ Compétences techniques :              ║
      ║  Langages : ${skills.languages.join(", ")}     ║
      ║  SGBD      : ${skills.databases.join(", ")}  ║
      ║  Outils    : ${skills.tools.join(", ")}        ║
      ╚═══════════════════════════════════════════╝
    `,
    projects: () => `
      ╔═══════════════════════════════════════════╗
      ║  📦 Projets :                            ║
      ${projects
        .map((p) => `║  • ${p.title} → ${p.demo || "🔒 Privé"}`)
        .join("\n")}
      ╚═══════════════════════════════════════════╝
    `,
    about: () => `
      ╔═══════════════════════════════════════════╗
      ║  👋 ${personalInfo.name}                                      ║
      ║  ${personalInfo.title}                             ║
      ║  ${about.description.substring(0, 80)}...          ║
      ╚═══════════════════════════════════════════╝
    `,
    contact: () => `
      ╔═══════════════════════════════════════════╗
      ║  📬 Contact :                            ║
      ║  Email  : ${personalInfo.email}          ║
      ║  Tél    : ${personalInfo.phone}          ║
      ║  GitHub : ${personalInfo.github}         ║
      ╚═══════════════════════════════════════════╝
    `,
    clear: () => {
      setOutput([]);
      return "";
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim().toLowerCase();

    if (trimmed === "clear") {
      setOutput([]);
      setInput("");
      return;
    }

    const response = commands[trimmed]?.() || `❓ Commande inconnue : "${trimmed}". Tapez 'help'.`;

    if (response) {
      setOutput((prev) => [...prev, `$ ${input}`, response]);
    }
    setInput("");
  };

  return (
    <section id="demo" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-space-grotesk mb-4">
            Terminal <span className="text-indigo-400">interactif</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mb-8">
            Testez mes compétences en direct ! Tapez une commande ci-dessous.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-3 bg-zinc-950 border-b border-zinc-800">
            <span className="w-3 h-3 bg-red-500 rounded-full" />
            <span className="w-3 h-3 bg-yellow-500 rounded-full" />
            <span className="w-3 h-3 bg-green-500 rounded-full" />
            <span className="text-xs text-zinc-500 ml-2 font-mono">terminal@portfolio:~$</span>
          </div>

          <div className="p-4 font-mono text-sm min-h-[200px] max-h-[400px] overflow-y-auto">
            {output.map((line, index) => (
              <pre key={index} className="whitespace-pre-wrap text-zinc-300 leading-relaxed">
                {line}
              </pre>
            ))}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2">
              <span className="text-indigo-400">$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-white outline-none font-mono"
                placeholder="Tapez une commande..."
                autoFocus
              />
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}