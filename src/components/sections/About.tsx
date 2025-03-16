
import { MapPin, Mail, Phone, Linkedin, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Karim Elsayed Abd Elkader</h3>
                <p className="text-muted-foreground mb-6">
                  Flutter Developer with one year of experience in mobile app development using Flutter. 
                  My expertise includes UI implementation, state management, and API integration, 
                  with a strong foundation in Clean Architecture and app deployment on Google Play. 
                  Currently, I work at The Fourth Pyramid, aiming to advance to a Mid-Level Flutter Developer soon.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-accent mr-3" />
                    <a href="mailto:karimelsayed2422@gmail.com" className="text-foreground hover:text-accent">
                      karimelsayed2422@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-accent mr-3" />
                    <a href="tel:+2001070423719" className="text-foreground hover:text-accent">
                      +20 01070423719
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-accent mr-3" />
                    <span>Mansoura, Egypt</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Linkedin className="h-5 w-5 text-accent mr-3" />
                    <a 
                      href="https://linkedin.com/in/karim-elsayed-468475221" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-accent"
                    >
                      linkedin.com/in/karim-elsayed-468475221
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Github className="h-5 w-5 text-accent mr-3" />
                    <a 
                      href="https://github.com/karimelsayed24" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-accent"
                    >
                      github.com/karimelsayed24
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="h-full flex items-center justify-center bg-primary/5 border-dashed">
              <CardContent className="p-6 text-center">
                <div className="w-48 h-48 rounded-full bg-muted mx-auto mb-4 overflow-hidden">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <span className="text-6xl font-bold">KE</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  Profile Picture
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
