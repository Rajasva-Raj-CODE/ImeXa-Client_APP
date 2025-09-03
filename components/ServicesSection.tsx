import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

const ServicesSection = () => {
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

  const services = [
    {
      title: "Manufacturing Industry",
      description:
        "Transform assembly line training with immersive VR simulations",
      features: [
        "Virtual Assembly Training",
        "Quality Control Simulations",
        "Safety Protocols",
      ],
      color: "from-primary to-primary-glow",
    },
    {
      title: "Automobile Industry",
      description:
        "Revolutionize automotive training with realistic virtual environments",
      features: [
        "Engine Diagnostics",
        "Assembly Line Training",
        "Safety Procedures",
      ],
      color: "from-secondary to-secondary-glow",
    },
    {
      title: "Education VR Labs",
      description:
        "Create immersive learning experiences for educational institutions",
      features: [
        "Interactive Laboratories",
        "Virtual Field Trips",
        "Skill Assessment",
      ],
      color: "from-accent to-accent-glow",
    },
    {
      title: "Virtual Factory Tour",
      description: "Provide remote access to industrial facilities through VR",
      features: [
        "Remote Inspections",
        "Process Understanding",
        "Risk-free Exploration",
      ],
      color: "from-vr-blue to-primary",
    },
    {
      title: "Cultural & Heritage VR Tours",
      description:
        "Preserve and share cultural heritage through immersive experiences",
      features: [
        "Historical Recreations",
        "Museum Experiences",
        "Cultural Education",
      ],
      color: "from-vr-purple to-secondary",
    },
    {
      title: "Mobile AR Applications",
      description:
        "Augmented reality solutions for on-the-go training and support",
      features: [
        "Real-time Guidance",
        "Equipment Overlay",
        "Step-by-step Instructions",
      ],
      color: "from-vr-green to-accent",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-background relative">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-glow">Our Services</span> – Elevating Training
            with <span className="text-neon">Immersive VR</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            ImeXa is transforming how industries train, learn, and grow. By
            combining Virtual Reality (VR), Augmented Reality (AR), and
            AI-driven analytics, our platform delivers hands-on, real-time, and
            risk-free training environments. Explore how ImeXa is reshaping
            different sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
        <div
  key={index}
  className={`card-glow card-hover interactive-card magnetic-hover p-8 rounded-xl relative overflow-hidden group ${
    isVisible ? "animate-slide-up-stagger opacity-100" : "opacity-0"
  }`}
  style={{
    animationDelay: `${index * 150}ms`,
  }}
>
  {/* Gradient background (must ignore pointer events) */}
  <div
    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 rounded-xl group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}
  ></div>
  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-xl pointer-events-none"></div>

  {/* Content */}
  <div className="relative z-10">
    <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-primary-glow transition-colors duration-300">
      {service.title}
    </h3>
    <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
      {service.description}
    </p>

    <ul className="space-y-3 mb-6">
      {service.features.map((feature, featureIndex) => (
        <li
          key={featureIndex}
          className="flex items-center text-sm group-hover:translate-x-2 transition-transform duration-300"
          style={{ transitionDelay: `${featureIndex * 50}ms` }}
        >
          <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse-glow"></div>
          <span className="text-foreground/90 group-hover:text-foreground transition-colors duration-300">
            {feature}
          </span>
        </li>
      ))}
    </ul>

    {/* Fix Learn More hover */}
    <Button
      variant="minimal"
      size="sm"
      className="w-full magnetic-hover transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_15px_hsl(var(--primary)/0.6)]"
    >
      Learn More
    </Button>
  </div>
</div>

          ))}
        </div>

        <div
          className={`text-center mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <Button variant="neon" size="xl">
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
