
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="order-2 md:order-1 max-w-3xl">
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
              <Button asChild size="lg" className="btn-animated group">
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce-subtle" />
                  Download CV
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-animated group">
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4 group-hover:animate-bounce-subtle" />
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-accent/20 animate-pulse-soft blur-xl"></div>
              <Avatar className="h-64 w-64 border-4 border-accent shadow-xl animate-float">
                <AvatarImage src="/profile-picture.png" alt="Karim Elsayed" />
                <AvatarFallback className="text-4xl bg-secondary">KE</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
