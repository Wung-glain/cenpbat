import { Target, Eye, Award, Users, FlaskConical, HeartHandshake } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AboutPage = () => {
  const values = [
    {
      icon: FlaskConical,
      title: "Scientific Excellence",
      description: "We maintain the highest standards of scientific rigor and research integrity in all our work."
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "We foster collaboration between researchers, clinicians, and industry partners worldwide."
    },
    {
      icon: HeartHandshake,
      title: "Patient-Centered Care",
      description: "Our research is driven by the goal of improving patient outcomes and quality of life."
    },
    {
      icon: Award,
      title: "Innovation Leadership",
      description: "We pioneer breakthrough technologies and methodologies in bacteriophage research."
    }
  ];

  const milestones = [
    {
      year: "2010",
      title: "Center Established",
      description: "Founded with a mission to advance bacteriophage research and combat antibiotic resistance."
    },
    {
      year: "2015",
      title: "First Clinical Trial",
      description: "Launched our first clinical trial for phage therapy in treating resistant bacterial infections."
    },
    {
      year: "2018",
      title: "Research Expansion",
      description: "Expanded facilities and research capabilities with state-of-the-art laboratory equipment."
    },
    {
      year: "2020",
      title: "Global Recognition",
      description: "Received international recognition for breakthrough discoveries in phage therapy applications."
    },
    {
      year: "2023",
      title: "Industry Partnerships",
      description: "Established partnerships with leading pharmaceutical companies for therapeutic development."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Our Research Center
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Pioneering the future of infectious disease treatment through innovative 
            bacteriophage research and therapeutic development.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <Card className="shadow-card">
            <CardHeader>
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                To advance the field of bacteriophage research through cutting-edge scientific 
                investigation, developing innovative phage-based therapies that address the 
                growing challenge of antibiotic-resistant bacterial infections. We are committed 
                to translating laboratory discoveries into clinical applications that improve 
                patient outcomes worldwide.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-secondary-foreground" />
              </div>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                To be the world's leading center for bacteriophage research, recognized for 
                our scientific excellence, innovative approaches, and transformative impact 
                on global health. We envision a future where phage therapy is a cornerstone 
                of precision medicine, offering personalized treatment solutions for patients 
                with antibiotic-resistant infections.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* About Bacteriophage Research */}
        <section className="mb-20">
          <div className="bg-muted rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Importance of Bacteriophage Research
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Bacteriophages, or "phages," are viruses that specifically target and destroy bacteria. 
                As the most abundant biological entities on Earth, they play a crucial role in maintaining 
                bacterial populations and ecosystem balance. In medical applications, phages offer a 
                promising alternative to traditional antibiotics, especially in treating infections 
                caused by antibiotic-resistant bacteria.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The rise of antibiotic resistance represents one of the most pressing challenges in 
                modern medicine. Each year, antibiotic-resistant infections affect millions of people 
                worldwide, leading to increased mortality, longer hospital stays, and higher healthcare costs. 
                Phage therapy offers a targeted, adaptive approach to treatment that can evolve alongside 
                bacterial resistance mechanisms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our research focuses on understanding phage-bacteria interactions, developing safe and 
                effective phage-based therapeutics, and establishing clinical protocols for phage therapy 
                implementation. Through rigorous scientific investigation and clinical trials, we are 
                working to bring this revolutionary treatment approach to patients in need.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our research and drive our commitment to scientific excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center shadow-card hover:shadow-hover transition-smooth">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Timeline */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our mission to advance bacteriophage research and therapy.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-center mb-8 md:mb-12">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm md:absolute md:left-1/2 md:-translate-x-1/2">
                  {index + 1}
                </div>
                
                <div className={`ml-6 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'}`}>
                  <Card className="shadow-card">
                    <CardHeader>
                      <div className="text-sm text-primary font-semibold mb-1">
                        {milestone.year}
                      </div>
                      <CardTitle className="text-xl">{milestone.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {milestone.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;