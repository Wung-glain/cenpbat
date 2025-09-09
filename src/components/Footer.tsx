import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Research', href: '/research' },
    { name: 'Blog', href: '/blog' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ];

  const researchAreas = [
    'Antibiotic Resistance',
    'Phage Therapy',
    'Bacterial Infections',
    'Microbiome Research',
    'Clinical Trials',
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-foreground rounded-md flex items-center justify-center">
                <span className="text-primary font-bold text-sm">C</span>
              </div>
              <span className="font-semibold text-lg">
                CenpBat
              </span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Leading the fight against antibiotic resistance through innovative 
              bacteriophage research and therapy development.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10 p-2">
                <a href="https://www.facebook.com/profile.php?id=61577408616288&mibextid=rS40aB7S9Ucbxw6v"><Facebook className="w-4 h-4" /></a>
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10 p-2">
                <Twitter className="w-4 h-4" />
              </Button>
              
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10 p-2">
                <a href="http://www.linkedin.com/company/centre-for-phage-biology-and-therapeutics"><Linkedin className="w-4 h-4" /></a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Research Areas */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Research Areas</h3>
            <ul className="space-y-2">
              {researchAreas.map((area) => (
                <li key={area}>
                  <span className="text-primary-foreground/80 text-sm">
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Stay Connected</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+234 (901) 356-0849</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
              <a href="mailto:cenpbat@gmail.com" className="flex space-x-2">
                <Mail className="w-4 h-4" />
                <span>cenpbat@gmail.com</span>
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Ecwa Seminary, Jos, Plateau State Nigeria</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-primary-foreground/80">
                Subscribe to our newsletter
              </p>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button variant="secondary" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Medical Bacteriophage Research Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;