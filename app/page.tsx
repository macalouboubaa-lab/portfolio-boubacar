import dynamic from 'next/dynamic';
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const TerminalDemo = dynamic(() => import('@/components/TerminalDemo'), { ssr: false });

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Gallery />
      <TerminalDemo />
      <Contact />
      <Footer />
    </>
  );
}
