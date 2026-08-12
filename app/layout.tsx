import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Boubacar Cissé | Développeur Full-Stack Junior",
  description: "Portfolio de Boubacar Cissé, développeur web passionné et créatif.",
  keywords: "développeur, full-stack, portfolio, web, React, Next.js",
  authors: [{ name: "Boubacar Cissé" }],
  openGraph: {
    title: "Boubacar Cissé | Développeur Full-Stack Junior",
    description: "Découvrez mon portfolio et mes projets.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-zinc-950 text-zinc-50`}>
        <Header />
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}