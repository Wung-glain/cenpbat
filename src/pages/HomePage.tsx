import { Link } from 'react-router-dom';
import { ArrowRight,MessageCircle, Microscope, Shield, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ImageCarousel from '@/components/ImageCarousel';
import heroImage from '@/assets/hero-laboratory.jpg';

const HomePage = () => {
  const features = [
    {
      icon: Microscope,
      title: "Advanced Research",
      description: "Cutting-edge laboratory facilities equipped with state-of-the-art microscopy and analysis tools."
    },
    {
      icon: Shield,
      title: "Phage Therapy",
      description: "Developing innovative bacteriophage treatments to combat antibiotic-resistant bacterial infections."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "World-class researchers and clinicians dedicated to advancing phage therapy science."
    },
    {
      icon: BookOpen,
      title: "Publications",
      description: "Leading research published in top-tier scientific journals and medical publications."
    }
  ];

  const stats = [
    { number: "50+", label: "Research Projects" },
    { number: "25", label: "Expert Researchers" },
    { number: "100+", label: "Publications" },
    { number: "15", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Advancing Phage Therapy Research
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Advancing global health through phage biology: 
              Harnessing the power of nature—from plant ecosystems to animal health—to develop 
              innovative therapeutics for humans. Located in Jos, Nigeria, we are at the 
              forefront of phage research and its translational applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link to="/about">
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3 bg-green-600 border-white/30 text-white hover:bg-white/20">
            
            <div>
              <a 
                href="https://wa.me/2349013560849" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-white/90 hover:text-white transition-colors"
              >
                <MessageCircle size={20} />
                <span>Text us on WhatsApp</span>
              </a>
            </div>
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Carousel Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Research in Action
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our state-of-the-art facilities and groundbreaking research 
              in bacteriophage therapy and antibiotic resistance.
            </p>
          </div>
          <ImageCarousel />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Research Center
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with world-class expertise to 
              advance the field of bacteriophage research.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center shadow-card hover:shadow-hover transition-smooth">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Fight Against Antibiotic Resistance
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Partner with us in advancing bacteriophage research and developing 
            next-generation treatments for bacterial infections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Link to="/team">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;