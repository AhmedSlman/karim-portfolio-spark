
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('dark');
  const isMobile = useIsMobile();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    // Set dark theme by default
    document.documentElement.classList.add('dark');
    
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY - 100;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId || 'home');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        <a href="#home" className="font-mono text-lg font-semibold text-accent">
          karim<span className="text-foreground">.dev</span>
        </a>

        {!isMobile ? (
          <nav className="flex items-center space-x-1">
            <ul className="flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="ml-4 flex items-center space-x-2">
              <Button asChild variant="outline" size="sm">
                <a href="/resume.pdf" download>
                  <Download className="mr-1.5 h-3.5 w-3.5" />
                  Resume
                </a>
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
            </div>
          </nav>
        ) : (
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col h-full">
                  <div className="flex justify-end mb-6">
                    <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  <nav className="flex-1">
                    <ul className="flex flex-col space-y-4">
                      {navLinks.map((link, index) => (
                        <li key={index}>
                          <a 
                            href={link.href} 
                            className={`text-lg ${activeSection === link.href.substring(1) ? 'text-accent font-medium' : 'text-foreground'}`}
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="py-4">
                    <Button asChild className="w-full">
                      <a href="/resume.pdf" download>
                        <Download className="mr-2 h-4 w-4" />
                        Download Resume
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        )}
      </div>
    </header>
  );
}
