
import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Experience</h2>
        
        <div className="space-y-8">
          <Card className="animate-on-scroll fade-in-left card-hover">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <CardTitle className="text-xl text-foreground">Mobile Application Developer (Flutter Developer)</CardTitle>
                  <CardDescription className="text-primary font-medium">Fourth Pyramid</CardDescription>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Mansoura, Egypt</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>06/2024 – Present</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 list-disc pl-5">
                <li className="transition-all duration-300 hover:translate-x-1">
                  <strong>Gomltak:</strong> Developed an e-commerce app selling products at wholesale prices, integrating payment and delivery solutions.
                </li>
                <li className="transition-all duration-300 hover:translate-x-1">
                  <strong>HR Insight:</strong> Improved UI and added features for an employee attendance tracking app.
                </li>
                <li className="transition-all duration-300 hover:translate-x-1">
                  <strong>Charlotte Sweets:</strong> Created an administrative system for order management, with separate apps for managers and delivery personnel.
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary" className="transition-all duration-300 hover:bg-accent hover:text-accent-foreground">Flutter</Badge>
                <Badge variant="secondary" className="transition-all duration-300 hover:bg-accent hover:text-accent-foreground">Dart</Badge>
                <Badge variant="secondary" className="transition-all duration-300 hover:bg-accent hover:text-accent-foreground">BLoC</Badge>
                <Badge variant="secondary" className="transition-all duration-300 hover:bg-accent hover:text-accent-foreground">API Integration</Badge>
                <Badge variant="secondary" className="transition-all duration-300 hover:bg-accent hover:text-accent-foreground">Firebase</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="animate-on-scroll fade-in-right card-hover" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <CardTitle className="text-xl text-foreground">Freelance Flutter Developer</CardTitle>
                  <CardDescription className="text-primary font-medium">Self-employed</CardDescription>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Remote</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>05/2024 – Present</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 list-disc pl-5">
                <li className="transition-all duration-300 hover:translate-x-1">
                  <strong>Accountrix:</strong> A platform connecting companies with accountants, featuring real-time chat, job postings, and secure payments.
                </li>
                <li className="transition-all duration-300 hover:translate-x-1">
                  <strong>PickChance:</strong> A B2B multi-vendor marketplace helping SMEs trade raw materials and production waste efficiently.
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary" className="transition-all duration-300 hover:bg-accent hover:text-accent-foreground">Flutter</Badge>
                <Badge variant="secondary" className="transition-all duration-300 hover:bg-accent hover:text-accent-foreground">Dart</Badge>
                <Badge variant="secondary" className="transition-all duration-300 hover:bg-accent hover:text-accent-foreground">Provider</Badge>
                <Badge variant="secondary" className="transition-all duration-300 hover:bg-accent hover:text-accent-foreground">Firebase</Badge>
                <Badge variant="secondary" className="transition-all duration-300 hover:bg-accent hover:text-accent-foreground">Real-time Chat</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
