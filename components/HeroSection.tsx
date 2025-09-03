"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const [typewriterText1, setTypewriterText1] = useState('');
  const [typewriterText2, setTypewriterText2] = useState('');
  const [showSubtitle1, setShowSubtitle1] = useState(false);
  const [showSubtitle2, setShowSubtitle2] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(1);

  const text1 = "World's First Smart VR-Based Training Platform";
  const text2 = "No more boring training sessions or high costs!";

  useEffect(() => {
    let timeout1: NodeJS.Timeout;
    let timeout2: NodeJS.Timeout;
    let timeout3: NodeJS.Timeout;
    let timeout4: NodeJS.Timeout;

    if (currentPhase === 1) {
      let i = 0;
      const typeText1 = () => {
        if (i < text1.length) {
          setTypewriterText1(text1.slice(0, i + 1));
          i++;
          timeout1 = setTimeout(typeText1, 80);
        } else {
          timeout2 = setTimeout(() => {
            setShowSubtitle1(true);
            setTimeout(() => {
              setCurrentPhase(2);
            }, 2000);
          }, 500);
        }
      };
      typeText1();
    }

    if (currentPhase === 2) {
      let j = 0;
      const typeText2 = () => {
        if (j < text2.length) {
          setTypewriterText2(text2.slice(0, j + 1));
          j++;
          timeout3 = setTimeout(typeText2, 80);
        } else {
          timeout4 = setTimeout(() => {
            setShowSubtitle2(true);
          }, 500);
        }
      };
      typeText2();
    }

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
    };
  }, [currentPhase]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-vr-training.jpg"
          alt="VR Training Environment" 
        width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10"></div>
      </div>

      {/* Enhanced particle system */}
      <div className="absolute inset-0 z-10">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="particle absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              background: i % 3 === 0 ? 'hsl(var(--primary))' : i % 3 === 1 ? 'hsl(var(--secondary))' : 'hsl(var(--accent))',
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
              opacity: Math.random() * 0.7 + 0.3
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-primary/20 animate-rotate-3d"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${20 + i * 5}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-6xl mx-auto px-4">
        {/* Phase 1 */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 transform hover:scale-105 transition-all duration-300">
            <span className="text-neon bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {typewriterText1}
              {currentPhase === 1 && !showSubtitle1 && (
                <span className="animate-blink border-r-2 border-primary"></span>
              )}
            </span>
          </h1>
          
          {showSubtitle1 && (
            <div className="animate-fade-in-blur stagger-animation stagger-2">
              <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed backdrop-blur-sm bg-background/10 p-6 rounded-xl border border-primary/20">
                At ImeXa, we've built an advanced virtual training platform designed to upgrade how companies train their teams. Using the power of VR, AR, and AI-based analytics, ImeXa takes learning beyond the classroom.
              </p>
            </div>
          )}
        </div>

        {/* Phase 2 */}
        {currentPhase === 2 && (
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 transform hover:scale-105 transition-all duration-300">
              <span className="text-glow text-secondary bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
                {typewriterText2}
                {!showSubtitle2 && (
                  <span className="animate-blink border-r-2 border-secondary"></span>
                )}
              </span>
            </h2>
            
            {showSubtitle2 && (
              <div className="animate-bounce-in stagger-animation stagger-3">
                <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8 backdrop-blur-sm bg-background/10 p-6 rounded-xl border border-secondary/20">
                  ImeXa lets you train smarter and faster with interactive, real-life simulations. You can track employee progress in real time, scale training across teams easily, and keep people engaged with hands-on learning. Whether it's healthcare, manufacturing, or safety training, ImeXa makes training more effective, data-driven, and future-ready.
                </p>
              </div>
            )}
          </div>
        )}

     
      </div>
    </section>
  );
};

export default HeroSection;