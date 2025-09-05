import { useState } from 'react';
import { ExternalLink, Calendar, Users, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ResearchPage = () => {
  const [activeCategory, setActiveCategory] = useState('ongoing');

  const ongoingProjects = [
    {
      id: 1,
      title: "Phage Therapy for MRSA Infections",
      description: "Developing targeted bacteriophage treatments for methicillin-resistant Staphylococcus aureus infections in clinical settings.",
      status: "Phase II Clinical Trial",
      team: "Dr. Sarah Johnson, Dr. Michael Chen",
      duration: "2022-2025",
      funding: "$2.5M NIH Grant",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d2810?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Personalized Phage Cocktails",
      description: "Creating customized phage cocktail treatments based on individual patient bacterial isolate susceptibility testing.",
      status: "Preclinical Research",
      team: "Dr. Emily Rodriguez, Dr. James Park",
      duration: "2023-2026",
      funding: "$1.8M Private Foundation",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Phage-Antibiotic Synergy",
      description: "Investigating combined phage and antibiotic treatments to overcome bacterial resistance and reduce treatment time.",
      status: "Laboratory Phase",
      team: "Dr. Lisa Wang, Dr. Robert Garcia",
      duration: "2023-2025",
      funding: "$900K University Grant",
      image: "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const completedProjects = [
    {
      id: 4,
      title: "Phage Stability in Oral Formulations",
      description: "Completed study on maintaining bacteriophage viability in oral pharmaceutical preparations for gastrointestinal infections.",
      status: "Published 2023",
      team: "Dr. Amanda Foster, Dr. Kevin Liu",
      duration: "2020-2023",
      funding: "$1.2M Industry Partnership",
      outcomes: "Published in Nature Biotechnology, 3 patents filed",
      image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Phage Resistance Mechanisms",
      description: "Comprehensive analysis of bacterial resistance development to phage therapy and prevention strategies.",
      status: "Published 2022",
      team: "Dr. Thomas Anderson, Dr. Maria Gonzalez",
      duration: "2019-2022",
      funding: "$800K NIH Grant",
      outcomes: "15 peer-reviewed publications, international recognition",
      image: "https://images.unsplash.com/photo-1559757175-7c498cc9db7c?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const publications = [
    {
      title: "Personalized Phage Therapy: From Laboratory to Clinic",
      authors: "Johnson, S., Chen, M., Rodriguez, E.",
      journal: "Nature Medicine",
      year: "2023",
      doi: "10.1038/s41591-023-02387-z",
      impact: "High Impact"
    },
    {
      title: "Overcoming Bacterial Resistance through Phage-Antibiotic Synergy",
      authors: "Wang, L., Garcia, R., Park, J.",
      journal: "Science Translational Medicine",
      year: "2023",
      doi: "10.1126/scitranslmed.abo2847",
      impact: "High Impact"
    },
    {
      title: "Stability and Efficacy of Oral Phage Formulations",
      authors: "Foster, A., Liu, K., Anderson, T.",
      journal: "Nature Biotechnology",
      year: "2023",
      doi: "10.1038/s41587-023-01692-x",
      impact: "High Impact"
    },
    {
      title: "Mechanisms of Phage Resistance in Clinical Bacterial Isolates",
      authors: "Anderson, T., Gonzalez, M., Johnson, S.",
      journal: "Cell Host & Microbe",
      year: "2022",
      doi: "10.1016/j.chom.2022.08.015",
      impact: "High Impact"
    },
    {
      title: "Clinical Trial Design for Phage Therapy Applications",
      authors: "Rodriguez, E., Park, J., Chen, M.",
      journal: "The Lancet Infectious Diseases",
      year: "2022",
      doi: "10.1016/S1473-3099(22)00421-8",
      impact: "High Impact"
    }
  ];

  const ProjectCard = ({ project, isCompleted = false }) => (
    <Card className="shadow-card hover:shadow-hover transition-smooth">
      <div className="aspect-video w-full overflow-hidden rounded-t-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
          <Badge variant={isCompleted ? "secondary" : "default"} className="ml-2 flex-shrink-0">
            {project.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-base leading-relaxed">
          {project.description}
        </CardDescription>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center text-muted-foreground">
            <Users className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>{project.team}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>{project.duration}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Award className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>{project.funding}</span>
          </div>
          {isCompleted && project.outcomes && (
            <div className="mt-3 p-3 bg-muted rounded-lg">
              <p className="text-sm font-medium text-foreground">Outcomes:</p>
              <p className="text-sm text-muted-foreground">{project.outcomes}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Research
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Advancing the science of bacteriophage therapy through innovative research 
            projects and collaborative scientific investigations.
          </p>
        </div>

        {/* Research Projects */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-16">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="ongoing">Ongoing Projects</TabsTrigger>
            <TabsTrigger value="completed">Completed Projects</TabsTrigger>
          </TabsList>
          
          <TabsContent value="ongoing" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ongoingProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="completed" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} isCompleted />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Publications Section */}
        <section className="bg-muted rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recent Publications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our research findings published in leading scientific journals and medical publications.
            </p>
          </div>

          <div className="space-y-4">
            {publications.map((pub, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {pub.title}
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        {pub.authors}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="font-medium">{pub.journal}</span>
                        <span>{pub.year}</span>
                        <Badge variant="outline" className="text-xs">
                          {pub.impact}
                        </Badge>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="ml-4 flex-shrink-0">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              View All Publications
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResearchPage;