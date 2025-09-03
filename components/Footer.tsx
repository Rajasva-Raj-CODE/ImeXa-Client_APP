import React from 'react';
import { Button } from './ui/button';

const Footer = () => {
  const caseStudies = [
    { title: "Assembly Line", description: "Optimizing manufacturing workflows" },
    { title: "Fire Safety", description: "Emergency response training" },
    { title: "Heavy Machine Training", description: "Safe equipment operation" },
    { title: "Tourism", description: "Virtual destination experiences" },
    { title: "Medical Healthcare", description: "Clinical procedure training" }
  ];

  const aboutLinks = [
    { title: "Our Story", description: "Journey of innovation" },
    { title: "Our Purpose", description: "Mission and vision" },  
    { title: "Our Guidance", description: "Expert leadership" }
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-background/50 border-t border-primary/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Case Studies */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-6">Case Studies</h3>
            <div className="space-y-4">
              {caseStudies.map((study, index) => (
                <div 
                  key={index}
                  className="group cursor-pointer p-4 rounded-lg hover:bg-primary/5 transition-all duration-300 border border-transparent hover:border-primary/20"
                >
                  <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {study.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {study.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* About */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-6">About</h3>
            <div className="space-y-4">
              {aboutLinks.map((link, index) => (
                <div 
                  key={index}
                  className="group cursor-pointer p-4 rounded-lg hover:bg-secondary/5 transition-all duration-300 border border-transparent hover:border-secondary/20"
                >
                  <h4 className="font-semibold text-foreground mb-1 group-hover:text-secondary transition-colors">
                    {link.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {link.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-6">Stay Connected</h3>
            
            <div className="card-glow p-6 rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">Get Updates</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Subscribe to our newsletter for the latest VR training innovations and industry insights.
              </p>
              
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                />
                <Button variant="neon" size="sm" className="w-full">
                  Subscribe
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex space-x-3">
                {['LinkedIn', 'Twitter', 'YouTube'].map((platform, index) => (
                  <Button 
                    key={index}
                    variant="glass" 
                    size="sm"
                    className="flex-1"
                  >
                    {platform}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-primary/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-neon mb-2">ImeXa</h2>
              <p className="text-sm text-muted-foreground">
                Transforming training through immersive VR experiences
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 text-sm text-muted-foreground">
              <div className="flex space-x-6">
                <button className="hover:text-primary transition-colors">Privacy Policy</button>
                <button className="hover:text-primary transition-colors">Terms of Service</button>
                <button className="hover:text-primary transition-colors">Contact Us</button>
              </div>
              <div className="text-center">
                <p>&copy; 2024 ImeXa. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;