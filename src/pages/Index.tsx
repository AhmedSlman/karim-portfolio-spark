
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import useAnimateOnScroll from "@/hooks/useAnimateOnScroll";

const Index = () => {
  // Update document title and set dark theme
  useEffect(() => {
    document.title = "Karim Elsayed | Flutter Developer";
    // Ensure dark mode is applied
    document.documentElement.classList.add('dark');
  }, []);

  // Initialize scroll animations
  useAnimateOnScroll();

  return (
    <div className="min-h-screen flex flex-col dark:bg-navy dark:text-slate-light">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
