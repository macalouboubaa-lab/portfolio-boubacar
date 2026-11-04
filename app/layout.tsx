// ============================================================
// 1. IMPORTS DES POLICES ET COMPOSANTS
// ============================================================

import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

// ============================================================
// 2. CONFIGURATION DES POLICES
// ============================================================

// Police Inter pour le texte courant
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Police Playfair Display pour les titres (élégante)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

// ============================================================
// 3. MÉTADONNÉES DE LA PAGE (SEO + FAVICON)
// ============================================================

export const metadata: Metadata = {
  title: "Boubacar Cissé | Développeur Full-Stack & Superviseur IT",
  description: "Portfolio de Boubacar Cissé - Développeur Full-Stack et Superviseur IT",
  
  // ============================================================
  // ICÔNES (FAVICON) — AJOUTÉ ICI
  // ============================================================
  icons: {
    // Favicon principal (format ICO pour compatibilité)
    icon: [
      { url: "public/favicon.ico", sizes: "any" },
      { url: "public/favicon.png", type: "image/png" },
    ],
    // Icône pour les appareils Apple (iPhone, iPad)
    apple: "/apple-touch-icon.png",
  },
};

// ============================================================
// 4. COMPOSANT LAYOUT PRINCIPAL
// ============================================================

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} font-inter antialiased bg-[#0d1117] text-[#e6edf3]`}>
        {/* Menu de navigation fixe */}
        <Header />
        
        {/* Contenu principal de la page */}
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}