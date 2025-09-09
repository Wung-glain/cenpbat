import { Mail, Linkedin, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import david from '@/assets/team/david.jpg';
import prof_nnadi from '@/assets/team/prof_nnadi.jpg';
import tokdima from '@/assets/team/tokdima.jpg';
import igwe from '@/assets/team/igwe.jpg';
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
      education: ["Ph.D in Medical Microbiology", "M.Sc in Medical Microbiology", "B.Sc in Microbiolgy"],
      achievements: ["Phage Therapy: Developed bacteriophage-based treatments to combat AMR, particular against pathogens like Salmonella Typhi and Pseudomonas aeruginosa", "Vaccine Development: Working on a low-temperature, needle-free typhoid vaccine to improve accessibility in underserved communities","AI Integration: Exploring the use of artificial intelligence to enhance phage research in vaccine design"],
      email: "s.johnson@phageresearch.org",
      linkedin: "https://www.linkedin.com/in/nnaemeka-emmanuel-nnadi-a39298b5",
      image: prof_nnadi
    }
  ];

  const researchers = [
    {
      id: 2,
      name: "Tambe David Tipah",
      role: "Senior Research Scientist",
      specialization: "Regulatory Affairs & Clinical Trials",
      bio: "My intrests centre on phage therapeutic application and antimicrobial studies. I am currently leading project on the development of a smart phage-based hydrogel bandage for effective management of Pseudomonas aeruginosa-infected wounds, as well as the detection of Salmonela Typhi hotspots through phage identification.",
      education: ["PhD Pharmacology, Harvard University", "JD Health Law, Georgetown"],
      achievements: ["The prophylactic evaluation of lambda bacteriophage construct displaying HER2 peptides in BALB/c Mice", "Isolation and characterization of Xanthomonas phage to manage bacteria spot disease in tomatoes"],
      email: "m.chen@phageresearch.org",
      linkedin: "https://www.linkedin.com/in/david-tipah-83a9b6314",
      image: david
    },
    {
      id: 3,
      name: "Igwe Blessing Chidinma",
      role: "Research Enthusiast",
      specialization: "Phage Therapist & Biotech",
      bio: "As a research enthusiast turned Virtual Assistant, I blend my scientific bacjground wth a passion for tecnology to deliver innovative solutions. With over 2 years of experience in phage therapy research abd laboratory management, i've developed a unique skill set that spans both the lab abd the virtual workspace.",
      education: ["Alex Ekwueme Federal University Ndufu-Alike IK"],
      achievements: ["Certificate of Achievement ( Lab Manager )"],
      email: "m.chen@phageresearch.org",
      linkedin: "https://www.linkedin.com/in/igwe-blessing-chidinma-7a115b207",
      image: igwe
    },
    {
      id: 4,
      name: "Tokdima Gershinen Yunana",
      role: "Research Scientist",
      specialization: "Computational Biology & Bioinformatics",
      bio: "Tokdima Gershinen Yunana a master student with the department of microbiology, Plateau State University Nigeria, studying the genetic diversity of cryptococcus species complex in Plateau State Nigeria. ",
      education: ["Plateau State University, Nigeria"],
      email: "m.chen@phageresearch.org",
      linkedin: "https://www.linkedin.com/in/david-tipah-83a9b6314",
      image: tokdima
    }
  ];

  const staff = [
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
                  <a href={member.linkedin}><Linkedin className="w-4 h-4" /></a>
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