import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-cyan-500/30">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
