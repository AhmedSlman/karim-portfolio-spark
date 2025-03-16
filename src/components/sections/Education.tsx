
import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Education() {
  return (
    <section id="education" className="bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Education</h2>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 flex-shrink-0">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">Bachelor of Computer Science</h3>
                    <p className="text-primary">Faculty of Computer & Information Sciences, Mansoura University</p>
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>2018 – 2024</span>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center">
                  <span className="font-medium">Grade:</span>
                  <span className="ml-2 text-muted-foreground">Very Good</span>
                </div>
                
                <p className="mt-4 text-muted-foreground">
                  Studied Computer Science with a focus on software development, algorithms, data structures, 
                  and mobile application development.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
