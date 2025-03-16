
import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Experience</h2>
        
        <div className="space-y-8">
          <Card>
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
                <li>
                  <strong>Gomltak:</strong> Developed an e-commerce app selling products at wholesale prices, integrating payment and delivery solutions.
                </li>
                <li>
                  <strong>HR Insight:</strong> Improved UI and added features for an employee attendance tracking app.
                </li>
                <li>
                  <strong>Charlotte Sweets:</strong> Created an administrative system for order management, with separate apps for managers and delivery personnel.
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary">Flutter</Badge>
                <Badge variant="secondary">Dart</Badge>
                <Badge variant="secondary">BLoC</Badge>
                <Badge variant="secondary">API Integration</Badge>
                <Badge variant="secondary">Firebase</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card>
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
                <li>
                  <strong>Accountrix:</strong> A platform connecting companies with accountants, featuring real-time chat, job postings, and secure payments.
                </li>
                <li>
                  <strong>PickChance:</strong> A B2B multi-vendor marketplace helping SMEs trade raw materials and production waste efficiently.
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary">Flutter</Badge>
                <Badge variant="secondary">Dart</Badge>
                <Badge variant="secondary">Provider</Badge>
                <Badge variant="secondary">Firebase</Badge>
                <Badge variant="secondary">Real-time Chat</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
