import dynamic from 'next/dynamic';
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Charger Hero dynamiquement sans SSR
const Hero = dynamic(
  () => import('@/components/Hero'),
  { ssr: false }
);

const TerminalDemo = dynamic(
  () => import('@/components/TerminalDemo'),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <TerminalDemo />
      <Contact />
      <Footer />
    </>
  );
}
