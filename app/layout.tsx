import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Boubacar Cissé | Développeur Full-Stack",
  description: "Portfolio de Boubacar Cissé - Développeur web passionné",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-inter antialiased bg-[#0A1628] text-[#F5F5F5]`}>
        <Header />
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
