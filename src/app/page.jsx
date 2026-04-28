import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <div className="pt-20">
        <Hero />
        <AboutMe />
        <Skills />
        <TechStack />
        <Education />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
