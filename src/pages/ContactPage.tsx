import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import MapCard from '@/components/MapCard';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
    console.log(formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+234 (901) 356-0849", "+234 (081) 0435-3371"],
      description: "Call us during business hours or leave a message"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["cenpbat@gmail.com", "research@phageresearch.org"],
      description: "Send us an email and we'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Ecwa Seminary, Jos, Plateau State", "Nigeria"],
      description: "Visit us at our state-of-the-art research facility"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
      description: "We're here to help during these hours"
    }
  ];

  const departments = [
    {
      title: "General Inquiries",
      email: "info@phageresearch.org",
      description: "For general questions about our research center and services"
    },
    {
      title: "Research Collaboration",
      email: "research@phageresearch.org",
      description: "For partnership opportunities and collaborative research"
    },
    {
      title: "Clinical Trials",
      email: "clinical@phageresearch.org",
      description: "Information about ongoing clinical trials and patient enrollment"
    },
    {
      title: "Media & Press",
      email: "cenpbat@gmail.com",
      description: "For press inquiries and media relations"
    },
    {
      title: "Careers",
      email: "careers@phageresearch.org",
      description: "Employment opportunities and internship programs"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get in touch with our research team for collaboration opportunities, 
            clinical trial information, or general inquiries about our work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div>
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="What is this regarding?"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1 mb-2">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-foreground font-medium">
                              {detail}
                            </p>
                          ))}
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Department Contacts */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Department Contacts
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              For specific inquiries, contact the appropriate department directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth">
                <CardHeader>
                  <CardTitle className="text-lg">{dept.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">
                    {dept.description}
                  </p>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                    <a 
                      href={`mailto:${dept.email}`}
                      className="text-primary hover:underline text-sm font-medium"
                    >
                      {dept.email}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Visit Our Facility
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Located in the heart of the medical district, our research center features 
              state-of-the-art laboratories and collaborative spaces.
            </p>
          </div>
            <MapCard address="Ecwa Seminary, Jos, Plateau State, Nigeria" />

        </section>

        {/* Emergency Contact */}
        <section className="gradient-hero rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Emergency Contact
          </h2>
          <p className="text-xl mb-6 text-white/90 max-w-2xl mx-auto">
            For urgent matters related to ongoing clinical trials or patient safety, 
            please use our emergency contact line available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-lg font-medium">
              <Phone className="w-5 h-5" />
              <span>Emergency: +234 (901) 356-0849</span>
            </div>
            <div className="flex items-center space-x-2 text-lg font-medium">
              <a href="mailto:cenpbat@gmail.com">
              <Mail className="w-5 h-5" />
              <span>cenpbat@gmail.com</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;