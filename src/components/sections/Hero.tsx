
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="font-mono text-accent mb-5 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Hi, my name is
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Karim Elsayed Abd Elkader.
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-dark mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            I build exceptional mobile experiences.
          </h3>
          <p className="text-lg text-slate mb-8 max-w-xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Flutter Developer with one year of experience in mobile app development. 
            My expertise includes UI implementation, state management, and API integration, 
            with a strong foundation in Clean Architecture and app deployment on Google Play.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Button asChild size="lg">
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
