import React, { useEffect, useRef, useState } from 'react';

const WelcomeSection = () => {
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

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-animated relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-glow">
            Welcome to the Future of Learning—Where{' '}
            <span className="text-neon">Innovation Drives Impact</span>
          </h2>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              At ImeXa, we create cutting-edge solutions that empower people to perform better in 
              the most crucial and high-risk environments. Whether it's ensuring safety in 
              hazardous situations or improving outcomes in mission-critical operations, our 
              technology is designed to enhance everyday tasks where precision matters most.
            </p>
            
            <p className="text-primary/90 font-medium">
              We focus on building tools that not only improve performance but also protect lives, 
              especially in industries where even a small mistake can have catastrophic 
              consequences or result in significant financial losses.
            </p>
          </div>
        </div>

        {/* Feature highlights */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {[
            {
              icon: "🎯",
              title: "Precision Training",
              description: "Train in risk-free environments that mirror real-world scenarios"
            },
            {
              icon: "📊",
              title: "Data-Driven Insights",
              description: "AI-powered analytics track progress and optimize learning paths"
            },
            {
              icon: "🔒",
              title: "Safety First",
              description: "Practice dangerous procedures safely in virtual environments"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="card-glow card-hover p-8 rounded-xl"
              style={{animationDelay: `${600 + index * 200}ms`}}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-primary">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;