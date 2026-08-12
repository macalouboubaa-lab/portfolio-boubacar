"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { personalInfo, contact } from "@/data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simuler l'envoi
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-zinc-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-space-grotesk mb-4">
            Me <span className="text-indigo-400">contacter</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Une question, un projet, une collaboration ? N'hésitez pas à m'écrire.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Informations */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 p-4 bg-zinc-900 rounded-xl border border-zinc-800">
              <Mail className="text-indigo-400" size={24} />
              <div>
                <p className="text-zinc-500 text-sm">Email</p>
                <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-indigo-400 transition">
                  {personalInfo.email}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-zinc-900 rounded-xl border border-zinc-800">
              <Phone className="text-indigo-400" size={24} />
              <div>
                <p className="text-zinc-500 text-sm">Téléphone</p>
                <span className="text-white">{personalInfo.phone}</span>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-zinc-900 rounded-xl border border-zinc-800">
              <MapPin className="text-indigo-400" size={24} />
              <div>
                <p className="text-zinc-500 text-sm">Localisation</p>
                <span className="text-white">{personalInfo.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm text-zinc-400 mb-1">Nom</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-indigo-500 transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-1">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-indigo-500 transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-1">Message</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-indigo-500 transition"
                required
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition ${
                status === "sending"
                  ? "bg-zinc-700 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700 text-white"
              }`}
            >
              {status === "sending" ? "Envoi..." : status === "success" ? "✅ Message envoyé !" : (
                <>
                  <Send size={18} /> Envoyer
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}