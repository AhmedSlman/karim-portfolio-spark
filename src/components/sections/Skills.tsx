
import { Code, Database, Layers, GitBranch } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Code className="h-5 w-5 mr-2 text-accent" />
                Programming & Frameworks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  <span>Dart</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  <span>Flutter (BloC, Provider)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  <span>Firebase Integration</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  <span>API Integration</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  <span>Local Database</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Layers className="h-5 w-5 mr-2 text-accent" />
                Software Development Concepts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  <span>OOP, Data Structures</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  <span>SOLID Principles</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  <span>Design Patterns (MVVM, Clean Architecture)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  <span>UI/UX Implementation</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <GitBranch className="h-5 w-5 mr-2 text-accent" />
                Tools & Workflow
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  <span>Git, GitHub</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  <span>Jira</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  <span>Agile Methodology</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  <span>CI/CD</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  <span>App Deployment (Google Play)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
