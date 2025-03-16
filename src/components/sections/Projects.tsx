
import { ExternalLink, Github, Smartphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Gomltak",
    description: "An e-commerce app selling products at wholesale prices, integrating payment and delivery solutions.",
    image: "/placeholder.svg",
    techStack: ["Flutter", "Dart", "BLoC", "RESTful API", "Firebase"],
    appStoreLink: "#",
    playStoreLink: "#",
    githubLink: "#"
  },
  {
    title: "HR Insight",
    description: "Employee attendance tracking app with advanced features for HR management and employee data analysis.",
    image: "/placeholder.svg",
    techStack: ["Flutter", "Dart", "Provider", "Local Database", "Biometrics"],
    appStoreLink: "#",
    playStoreLink: "#",
    githubLink: "#"
  },
  {
    title: "Accountrix",
    description: "A platform connecting companies with accountants, featuring real-time chat, job postings, and secure payments.",
    image: "/placeholder.svg",
    techStack: ["Flutter", "Dart", "Firebase", "Real-time Database", "Authentication"],
    appStoreLink: "#",
    playStoreLink: "#",
    githubLink: "#"
  },
  {
    title: "PickChance",
    description: "A B2B multi-vendor marketplace helping SMEs trade raw materials and production waste efficiently.",
    image: "/placeholder.svg",
    techStack: ["Flutter", "Dart", "BLoC", "RESTful API", "Payment Integration"],
    appStoreLink: "#",
    playStoreLink: "#",
    githubLink: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Projects & Portfolio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full">
              <div className="h-48 bg-muted flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <Badge key={i} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex flex-wrap gap-2">
                {project.playStoreLink && (
                  <Button asChild variant="outline" size="sm">
                    <a href={project.playStoreLink} target="_blank" rel="noopener noreferrer">
                      <Smartphone className="mr-1.5 h-3.5 w-3.5" />
                      Play Store
                    </a>
                  </Button>
                )}
                
                {project.appStoreLink && (
                  <Button asChild variant="outline" size="sm">
                    <a href={project.appStoreLink} target="_blank" rel="noopener noreferrer">
                      <Smartphone className="mr-1.5 h-3.5 w-3.5" />
                      App Store
                    </a>
                  </Button>
                )}
                
                {project.githubLink && (
                  <Button asChild variant="outline" size="sm">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1.5 h-3.5 w-3.5" />
                      Code
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
