"use client";
import { useState, useEffect } from "react";
import { Menu, X, Download, Mail } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Accueil", href: "#home" },
  { name: "À propos", href: "#about" },
  { name: "Compétences", href: "#skills" },
  { name: "Projets", href: "#projects" },
  { name: "Démo", href: "#demo" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="#home" className="text-xl font-bold text-white hover:text-indigo-400 transition">
            BC<span className="text-indigo-400">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition ${
                  activeSection === link.href.replace("#", "")
                    ? "text-indigo-400"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 text-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition"
            >
              <Download size={16} />
              CV
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 text-sm border border-zinc-700 hover:border-indigo-500 text-zinc-300 hover:text-white rounded-lg transition"
            >
              <Mail size={16} />
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-zinc-400 hover:text-white transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-zinc-800">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm transition ${
                    activeSection === link.href.replace("#", "")
                      ? "text-indigo-400"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-zinc-800">
                <a
                  href="/cv.pdf"
                  download
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition"
                >
                  <Download size={16} />
                  Télécharger le CV
                </a>
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 px-4 py-2 border border-zinc-700 hover:border-indigo-500 text-zinc-300 hover:text-white rounded-lg transition"
                >
                  <Mail size={16} />
                  Me contacter
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}