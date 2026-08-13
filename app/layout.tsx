// ============================================================
// 1. IMPORTS DES POLICES ET COMPOSANTS
// ============================================================

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
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

// ============================================================
// 3. MÉTADONNÉES DE LA PAGE (SEO + FAVICON)
// ============================================================

export const metadata: Metadata = {
  title: "Boubacar Cissé | Développeur Full-Stack",
  description: "Portfolio de Boubacar Cissé - Développeur web passionné",
  
  // ============================================================
  // ICÔNES (FAVICON) — AJOUTÉ ICI
  // ============================================================
  icons: {
    // Favicon principal (format ICO pour compatibilité)
    icon: [
      { url: "public/favicom.ico", sizes: "any" },
      { url: "public/favicom.png", type: "image/png" },
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
      <body className={`${inter.variable} ${playfair.variable} font-inter antialiased bg-[#0A1628] text-[#F5F5F5]`}>
        {/* Menu de navigation fixe */}
        <Header />
        
        {/* Contenu principal de la page */}
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}