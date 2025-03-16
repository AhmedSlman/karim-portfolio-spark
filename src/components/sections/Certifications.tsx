
import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Certifications() {
  const certifications = [
    {
      title: "Mobile Application Development Using Flutter",
      issuer: "CCIC",
      date: "2023",
      link: "#"
    },
    {
      title: "Digital Egypt Pioneers Initiative - DEPI Mobile Development Using Android - Flutter",
      issuer: "Ministry of Communications and Information Technology",
      date: "2022",
      link: "#"
    },
    {
      title: "Career Essentials in Software Development",
      issuer: "Microsoft & LinkedIn",
      date: "2023",
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Certifications & Courses</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="flex flex-col h-full card-hover animate-on-scroll fade-in-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <CardContent className="pt-6 flex-1">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 flex-shrink-0 animate-pulse-soft">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground mt-1">{cert.date}</p>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button asChild variant="ghost" size="sm" className="w-full btn-animated">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <span>View Certificate</span>
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
