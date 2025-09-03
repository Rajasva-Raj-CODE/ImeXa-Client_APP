import React, { useEffect, useRef, useState } from 'react';
import Marquee from "react-fast-marquee"
const TrustedBrandsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const brands = [
  { name: "Mercedes Benz", logo: "/logos/mercdes.svg" },
  { name: "Astral Pipes", logo: "/logos/Astral_Pipes_Logo.jpg" },
  { name: "Godfrey Phillips", logo: "/logos/Godfrey-Phillips-India-limited.jpg" },
  { name: "Honda", logo: "/logos/honda.svg" },
  { name: "Royal Enfield", logo: "/logos/Royal-Enfield-logo.png" },
  { name: "C-DAC", logo: "/logos/CDAC-logo.webp" },
  { name: "TCIL", logo: "/logos/tcil.jpg" },
  { name: "Eveready", logo: "/logos/eveready.png" },
  { name: "Ministry of Social Justice and Empowerment", logo: "/logos/minstry.jpg" },
];

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-animated relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="text-glow">Trusted by Industry Leaders</span>{' '}
            <span className="text-neon">Embracing the Future</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
            <p>
              Our journey with global brands reflects a deep commitment to delivering reliable, 
              future-ready solutions. By simplifying complex challenges through interactive experiences, 
              immersive storytelling, and innovative design, we've helped organizations unlock real business value.
            </p>
            
            <p className="text-primary/90 font-medium">
              Major enterprises worldwide are now leveraging Metaverse, AR, and VR technologies to 
              build powerful engagement and retention platforms, and we're proud to be a trusted 
              technology partner in this transformative movement.
            </p>
          </div>
        </div>

        {/* Brand logos grid */}
        <div className="my-12">
      <Marquee gradient={false} speed={60} pauseOnHover>
        {brands.map((brand, index) => (
          <div
            key={index}
            className="card-glow card-hover p-6 rounded-xl flex items-center justify-center min-h-[100px] min-w-[180px] mx-6 transition-all duration-700"
            style={{
              animationDelay: `${300 + index * 100}ms`,
            }}
          >
            <div className="text-center">
              {/* Brand logo */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg mb-3 mx-auto opacity-80 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-[70%] max-h-[70%] object-contain"
                />
              </div>
              {/* Brand name */}
              <p className="text-sm font-medium text-foreground/80">
                {brand.name}
              </p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>

        {/* Statistics */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {[
            { number: "50+", label: "Enterprise Clients", description: "Global companies trust our solutions" },
            { number: "1M+", label: "Training Hours", description: "Delivered through our VR platform" },
            { number: "95%", label: "Client Satisfaction", description: "Consistently rated by our partners" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center"
              style={{animationDelay: `${700 + index * 150}ms`}}
            >
              <div className="text-4xl md:text-5xl font-bold text-neon mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-primary mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrandsSection;