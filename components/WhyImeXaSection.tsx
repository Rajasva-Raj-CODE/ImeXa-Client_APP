import React, { useEffect, useRef, useState } from 'react';
import { Button } from "./ui/button";

const WhyImeXaSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: "🤖",
      title: "AI + VR Integration",
      description: "Personalized, data-driven training that adapts to individual learning styles and progress",
      highlight: "Smart Analytics"
    },
    {
      icon: "⚙️",
      title: "Industry-Custom Modules",
      description: "Tailored training solutions designed specifically for your workflows and industry requirements",
      highlight: "Customized Solutions"
    },
    {
      icon: "👥",
      title: "Multi-User Mode",
      description: "Collaborative learning environments for team training and synchronized group exercises",
      highlight: "Team Collaboration"
    },
    {
      icon: "📈",
      title: "Real-Time Tracking & Analytics",
      description: "Comprehensive progress monitoring and performance analytics to measure outcomes and improve results",
      highlight: "Data Insights"
    }
  ];

  const compatibilityIcons = ["🥽", "📱", "💻", "🖥️"];

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-background relative">
      <div className="max-w-7xl mx-auto">
        {/* Main heading */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Why <span className="text-neon">ImeXa</span>?
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`card-glow card-hover p-8 rounded-xl relative overflow-hidden transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              {/* Gradient accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{feature.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-1">{feature.title}</h3>
                    <span className="text-sm text-secondary font-medium">{feature.highlight}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Core message */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-glow">Prepare Better.</span>{' '}
              <span className="text-neon">Perform Safer.</span>
            </h3>
            
            <p className="text-xl text-muted-foreground mb-8">
              Experience the future of training with our comprehensive VR platform designed for excellence.
            </p>
          </div>
        </div>

        {/* Cross-platform compatibility */}
        <div className={`card-glow p-8 rounded-xl text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h4 className="text-2xl font-bold mb-6 text-primary">Cross-Platform Compatibility</h4>
          
          <div className="flex justify-center items-center gap-8 mb-6">
            {compatibilityIcons.map((icon, index) => (
              <div 
                key={index}
                className="text-4xl p-4 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                style={{animationDelay: `${700 + index * 100}ms`}}
              >
                {icon}
              </div>
            ))}
          </div>
          
          <p className="text-muted-foreground mb-6">
            Compatible with VR headsets, tablets, and PCs - train anywhere, anytime with seamless device switching.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="neon" size="lg">
              Read More
            </Button>
            <Button variant="glass" size="lg">
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyImeXaSection;