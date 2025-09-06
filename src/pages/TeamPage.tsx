import { Mail, Linkedin, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import david from '@/assets/team/david.jpg';
import prof_nnadi from '@/assets/team/prof_nnadi.jpg';
import tokdima from '@/assets/team/tokdima.jpg';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const TeamPage = () => {
  const leadership = [
    {
      id: 1,
      name: "Dr. Nnaemeka Emmanuel Nnadi",
      role: "Chief Scientific Officer",
      specialization: "Clinical Phage Therapy",
      bio: "Meet our Chief Scientific Officer, a renowned name in Phage Research. Dr. Nnaemeka Emmanuel Nnadi is a distinguished researcher and academic in the field of microbiology. He is a senior lecturer and Director for Research and Development at the Plateau State University, Bokkos, Nigeria, and co-founder of the African Phage Forum",
      education: ["MD, Johns Hopkins University", "PhD Microbiology, MIT"],
      achievements: ["Phage display technology to advance Vaccine development.", "ASM Clinical Microbiology Award 2022"],
      email: "s.johnson@phageresearch.org",
      linkedin: "#",
      image: prof_nnadi
    },
    {
      id: 2,
      name: "Tambe David Tipah",
      role: "Associate Director of Research",
      specialization: "Molecular Biology & Genetics",
      bio: "Tambe David Tipah oversees our fundamental research programs, focusing on phage-bacteria interactions and genetic engineering of therapeutic phages. His work has been instrumental in developing next-generation phage therapeutics.",
      education: ["PhD Molecular Biology, Stanford University", "MS Biotechnology, UC Berkeley"],
      achievements: ["The prophylactic evaluation of lambda bacteriophage construct displaying HER2 peptides in BALB/c Mice", "Isolation and characterization of Xanthomonas phage to manage bacteria spot disease in tomatoes"],
      email: "m.chen@phageresearch.org",
      linkedin: "#",
      image: david
    }
  ];

  const researchers = [
    {
      id: 3,
      name: "Tambe David Tipah",
      role: "Senior Research Scientist",
      specialization: "Regulatory Affairs & Clinical Trials",
      bio: "Dr. Rodriguez manages our clinical trial design and regulatory compliance, ensuring our research meets the highest standards for patient safety and scientific rigor.",
      education: ["PhD Pharmacology, Harvard University", "JD Health Law, Georgetown"],
      image: david
    },
    {
      id: 4,
      name: "Dr. James Park",
      role: "Research Scientist",
      specialization: "Phage Manufacturing & Quality Control",
      bio: "Dr. Park leads our phage production and purification efforts, developing scalable manufacturing processes for clinical-grade phage preparations.",
      education: ["PhD Chemical Engineering, Caltech", "MS Bioengineering, UCSD"],
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 5,
      name: "Tokdima Gershinen Yunana",
      role: "Research Scientist",
      specialization: "Computational Biology & Bioinformatics",
      bio: "Tokdima Gershinen Yunana a master student with the department of microbiology, Plateau State University Nigeria, studying the genetic diversity of cryptococcus species complex in Plateau State Nigeria. ",
      education: ["Plateau State University, Nigeria, University of Washington", "MS Computer Science, Carnegie Mellon"],
      image: tokdima
    },
    {
      id: 6,
      name: "Dr. Robert Garcia",
      role: "Research Scientist",
      specialization: "Immunology & Host Response",
      bio: "Dr. Garcia studies the immune system's interaction with phage therapy, working to optimize treatment protocols and minimize adverse reactions.",
      education: ["PhD Immunology, University of Pennsylvania", "MD, UCLA School of Medicine"],
      image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=400&q=80"
    }
  ];

  const staff = [
    {
      id: 7,
      name: "Amanda Foster",
      role: "Laboratory Manager",
      specialization: "Operations & Safety",
      bio: "Amanda oversees daily laboratory operations, maintains safety protocols, and manages our research infrastructure to ensure optimal research conditions.",
      education: ["MS Laboratory Science, Boston University", "BS Biology, Northeastern University"],
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 8,
      name: "Kevin Liu",
      role: "Senior Laboratory Technician",
      specialization: "Microbiology & Cell Culture",
      bio: "Kevin supports research activities through expert technical assistance in bacterial culture, phage isolation, and experimental procedures.",
      education: ["BS Microbiology, UC Davis", "Certificate in Laboratory Management"],
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 9,
      name: "Maria Gonzalez",
      role: "Clinical Research Coordinator",
      specialization: "Patient Care & Protocol Management",
      bio: "Maria coordinates our clinical trials, ensuring patient safety and protocol compliance while managing study logistics and data collection.",
      education: ["RN, University of Miami", "MS Clinical Research, Georgetown University"],
      image: "https://images.unsplash.com/photo-1594824475317-87e0c7c45159?auto=format&fit=crop&w=400&q=80"
    }
  ];

  const TeamMemberCard = ({ member, isLeadership = false }) => (
    <Card className={`shadow-card hover:shadow-hover transition-smooth ${isLeadership ? 'lg:col-span-2' : ''}`}>
      <div className={`${isLeadership ? 'md:flex' : ''}`}>
        <div className={`${isLeadership ? 'md:w-1/3' : 'w-full'} aspect-square overflow-hidden ${isLeadership ? 'md:rounded-l-lg md:rounded-tr-none' : 'rounded-t-lg'}`}>
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover hover:scale-105 transition-smooth"
          />
        </div>
        <div className={`${isLeadership ? 'md:w-2/3' : 'w-full'}`}>
          <CardHeader>
            <div className="space-y-2">
              <h3 className={`${isLeadership ? 'text-2xl' : 'text-xl'} font-bold text-foreground`}>
                {member.name}
              </h3>
              <Badge variant="secondary" className="w-fit">
                {member.role}
              </Badge>
              <p className="text-sm text-primary font-medium">
                {member.specialization}
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {member.bio}
            </p>
            
            {member.education && (
              <div>
                <h4 className="font-semibold text-foreground mb-2">Education</h4>
                <ul className="space-y-1">
                  {member.education.map((degree, index) => (
                    <li key={index} className="text-sm text-muted-foreground">
                      • {degree}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {member.achievements && (
              <div>
                <h4 className="font-semibold text-foreground mb-2">Recent Achievements</h4>
                <ul className="space-y-1">
                  {member.achievements.map((achievement, index) => (
                    <li key={index} className="text-sm text-muted-foreground">
                      • {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex space-x-2 pt-2">
              {member.email && (
                <Button variant="ghost" size="sm" className="p-2">
                  <Mail className="w-4 h-4" />
                </Button>
              )}
              {member.linkedin && (
                <Button variant="ghost" size="sm" className="p-2">
                  <Linkedin className="w-4 h-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated researchers, clinicians, and staff who are advancing 
            the field of bacteriophage therapy and fighting antibiotic resistance.
          </p>
        </div>

        {/* Leadership Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leadership.map((member) => (
              <TeamMemberCard key={member.id} member={member} isLeadership />
            ))}
          </div>
        </section>

        {/* Research Scientists */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Research Scientists
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        {/* Support Staff */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Research Support Staff
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {staff.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="gradient-hero rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion 
            for advancing bacteriophage research and improving patient outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              View Open Positions
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Contact Us About Opportunities
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TeamPage;