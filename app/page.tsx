"use client";

import { motion } from "framer-motion";
import {ChevronDown } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import ServicesSection from "@/components/ServicesSection";
import TrustedBrandsSection from "@/components/TrustedBrandsSection";
import WhyImeXaSection from "@/components/WhyImeXaSection";

export default function Home() {
  return (
 <div className="min-h-screen">
      <HeroSection />
      <WelcomeSection />
      <ServicesSection />
      <TrustedBrandsSection />
      <WhyImeXaSection/>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/60"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </div>
  );
}
