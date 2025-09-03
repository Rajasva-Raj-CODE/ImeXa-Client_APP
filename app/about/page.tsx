"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  BarChart3,
  Clock,
  DollarSign,
  Scale,
  Factory,
  HeartPulse,
  ShieldCheck,
  BookOpen,
  MapPin,
  Cpu,
  Sparkles,
  GitBranch,
  Brain,
  Globe,
  Truck,
  Plane,
  Award,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Marquee from "react-fast-marquee";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const benefits = [
  {
    icon: Zap,
    title: 'Faster onboarding',
    description: 'Interactive VR training modules accelerate employee integration'
  },
  {
    icon: Shield,
    title: 'Risk-free practice',
    description: 'Realistic digital simulations allow safe skill development'
  },
  {
    icon: BarChart3,
    title: 'Measurable insights',
    description: 'AI-powered learning analytics track performance and progress'
  },
  {
    icon: DollarSign,
    title: 'Cost savings',
    description: 'Reduce downtime, errors, and physical training expenses'
  },
  {
    icon: Scale,
    title: 'Scalable deployment',
    description: 'Deploy across multiple sites and devices (VR headsets, PCs, tablets, mobile)'
  },
  {
    icon: Clock,
    title: 'Industry compliance',
    description: 'Ensure safety standards in high-risk industries through virtual simulations'
  }
]

const purposeItems = [
  {
    icon: ShieldCheck,
    text: 'Minimize operational risks through virtual simulations'
  },
  {
    icon: Award,
    text: 'Ensure compliance and safety standards in high-risk industries'
  },
  {
    icon: TrendingUp,
    text: 'Boost workforce efficiency through skill-based immersive learning'
  },
  {
    icon: BarChart3,
    text: 'Standardize training with measurable AI-driven insights'
  }
]

const partnerBenefits = [
  {
    icon: Sparkles,
    text: 'Cutting-edge VR/AR innovation tailored for enterprise upskilling'
  },
  {
    icon: GitBranch,
    text: 'Industry-specific verticals like ImeXa (immersive training), Martech, and Salestech'
  },
  {
    icon: Cpu,
    text: 'Multi-device compatibility (VR headsets, tablets, mobiles, and PCs)'
  },
  {
    icon: Brain,
    text: 'AI-powered performance tracking for measurable learning outcomes'
  },
  {
    icon: Globe,
    text: 'Proven expertise in global enterprise adoption across multiple industries'
  }
]

const industries = [
  { icon: Factory, name: 'Manufacturing' },
  { icon: HeartPulse, name: 'Healthcare' },
  { icon: BookOpen, name: 'Education' },
  { icon: ShieldCheck, name: 'Safety' },
  { icon: Truck, name: 'Logistics' },
  { icon: Plane, name: 'Tourism' }
]

const clients = [
  "Mercedes-Benz",
  "Honda", 
  "Astral Pipes",
  "Royal Enfield",
  "Godfrey Phillips",
  "Ministry of Social Justice & Empowerment"
]

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

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="text-center"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-6">
                About ImeXa
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold text-white mb-8"
            >
              Redefining Training for{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                the Future
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed"
            >
              ImeXa is the world's first smart VR-based training platform built
              to transform how organizations upskill, reskill, and empower their
              workforce. By blending Virtual Reality (VR) training modules,
              Augmented Reality (AR) simulations, and AI-driven performance
              analytics, ImeXa delivers immersive learning experiences that are
              interactive, measurable, and scalable across industries.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What Makes ImeXa Different */}
      <section className="py-20 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Beyond Traditional Training Methods
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Unlike traditional classroom or e-learning methods, ImeXa creates
              hands-on digital environments where employees can practice
              critical tasks, repeat procedures safely, and receive real-time
              feedback.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Manufacturing VR training simulations",
                icon: Factory,
                color: "from-orange-500 to-amber-600",
              },
              {
                title: "Healthcare immersive learning labs",
                icon: HeartPulse,
                color: "from-rose-500 to-pink-600",
              },
              {
                title: "Industrial safety drills",
                icon: ShieldCheck,
                color: "from-emerald-500 to-green-600",
              },
              {
                title: "Education VR labs",
                icon: BookOpen,
                color: "from-blue-500 to-indigo-600",
              },
              {
                title: "AR-powered field training",
                icon: MapPin,
                color: "from-purple-500 to-violet-600",
              },
              {
                title: "Metaverse-ready platforms",
                icon: Cpu,
                color: "from-cyan-500 to-teal-600",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 group h-full hover:shadow-lg hover:shadow-blue-500/10">
                    <CardContent className="p-8 text-center flex flex-col items-center">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 font-sans group-hover:text-blue-300 transition-colors duration-300">
                        {item.title}
                      </h3>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enterprise Benefits
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              With ImeXa, enterprises benefit from measurable ROI and
              future-ready workforce development
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div key={benefit.title} variants={fadeInUp}>
                  <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 group h-full">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4">
                        {benefit.title}
                      </h3>
                      <p className="text-blue-200">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

   {/* Guidona Partnership Section */}
       <section className="py-20 px-6">
         <div className="max-w-7xl mx-auto">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
             >
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                 ImeXa at Guidona Softpedia
               </h2>
               <p className="text-xl text-blue-200 mb-8 leading-relaxed">
                 ImeXa is a flagship vertical of Guidona Softpedia, a pioneer in AR/VR enterprise solutions and digital transformation technologies. As part of Guidona's innovation ecosystem, ImeXa reflects our commitment to reshaping enterprise training, immersive learning, and workforce upskilling.
               </p>
               <p className="text-xl text-blue-200 mb-8 leading-relaxed">
                 By integrating VR training, AR simulations, AI performance tracking, and metaverse-ready platforms, Guidona empowers enterprises to adopt next-generation learning systems that enhance productivity, improve safety, and drive measurable ROI.
               </p>
             </motion.div>
             
             <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
               className="relative"
             >
               <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl border border-white/20 backdrop-blur-sm overflow-hidden">
                 <img 
                   src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg" 
                   alt="Partnership"
                   className="w-full h-full object-cover opacity-80"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
               </div>
             </motion.div>
           </div>
         </div>
       </section>
 
       {/* About Guidona Softpedia */}
       <section className="py-20 px-6 bg-white/5 backdrop-blur-sm">
         <div className="max-w-7xl mx-auto">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
             className="text-center mb-16"
           >
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
               About Guidona Softpedia
             </h2>
             <p className="text-xl text-blue-200 max-w-3xl mx-auto">
               A technology-driven innovation company specializing in immersive AR/VR training solutions, martech platforms, and sales-tech innovations.
             </p>
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
             className="mb-16"
           >
             <p className="text-xl text-blue-200 text-center max-w-4xl mx-auto leading-relaxed">
               We partner with forward-thinking enterprises to design AI-powered tools that simplify complex workflows, improve workforce efficiency, and create engaging customer and employee experiences.
             </p>
           </motion.div>
 
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
             className="text-center mb-16"
           >
             <h3 className="text-3xl font-bold text-white mb-8">Industries We Serve</h3>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
               {industries.map((industry, index) => {
                 const Icon = industry.icon
                 return (
                   <motion.div 
                     key={industry.name}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: index * 0.1 }}
                     viewport={{ once: true }}
                     className="flex flex-col items-center"
                   >
                     <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                       <Icon className="h-8 w-8 text-white" />
                     </div>
                     <span className="text-blue-200 font-medium">{industry.name}</span>
                   </motion.div>
                 )
               })}
             </div>
           </motion.div>
         </div>
       </section>
 
       {/* Our Purpose Section */}
       <section className="py-20 px-6">
         <div className="max-w-7xl mx-auto">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
             className="text-center mb-16"
           >
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
               Our Purpose
             </h2>
             <p className="text-xl text-blue-200 max-w-3xl mx-auto">
               At Guidona, our purpose is simple: bridge the gap between knowledge and performance.
             </p>
           </motion.div>
           
           <motion.div 
             variants={stagger}
             initial="initial"
             whileInView="animate"
             viewport={{ once: true }}
             className="grid md:grid-cols-2 gap-8"
           >
             {purposeItems.map((item, index) => {
               const Icon = item.icon
               return (
                 <motion.div key={index} variants={fadeInUp}>
                   <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 group">
                     <CardContent className="p-6 flex items-start">
                       <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                         <Icon className="h-6 w-6 text-white" />
                       </div>
                       <p className="text-blue-200 text-lg">{item.text}</p>
                     </CardContent>
                   </Card>
                 </motion.div>
               )
             })}
           </motion.div>
 
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.4 }}
             viewport={{ once: true }}
             className="text-center mt-16"
           >
             <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
               By fusing VR, AR, AI, and metaverse technologies, we create scalable, practical, and transformative training platforms that prepare enterprises for the future of work.
             </p>
           </motion.div>
         </div>
       </section>
 
       {/* Why Partner Section */}
       <section className="py-20 px-6 bg-white/5 backdrop-blur-sm">
         <div className="max-w-7xl mx-auto">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
             className="text-center mb-16"
           >
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
               Why Partner with Guidona Softpedia?
             </h2>
             <p className="text-xl text-blue-200 max-w-3xl mx-auto">
               We partner with forward-thinking enterprises to design AI-powered tools that simplify complex workflows and create engaging experiences.
             </p>
           </motion.div>
           
           <motion.div 
             variants={stagger}
             initial="initial"
             whileInView="animate"
             viewport={{ once: true }}
             className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
           >
             {partnerBenefits.map((benefit, index) => {
               const Icon = benefit.icon
               return (
                 <motion.div key={index} variants={fadeInUp}>
                   <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 group h-full">
                     <CardContent className="p-8">
                       <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                         <Icon className="h-8 w-8 text-white" />
                       </div>
                       <p className="text-xl text-blue-200">{benefit.text}</p>
                     </CardContent>
                   </Card>
                 </motion.div>
               )
             })}
           </motion.div>
 
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.4 }}
             viewport={{ once: true }}
             className="text-center mt-16"
           >
             <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
             <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20 backdrop-blur-sm">
               <p className="text-3xl font-bold text-white">
                 Innovate. Empower. Transform.
               </p>
             </div>
           </motion.div>
         </div>
       </section>
 
       {/* Trusted By Section */}
       <section className="py-20 px-6">
         <div className="max-w-7xl mx-auto">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
             className="text-center mb-16"
           >
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
               Trusted by Industry Leaders
             </h2>
             <p className="text-xl text-blue-200 max-w-3xl mx-auto">
               Our solutions span industries including automotive, manufacturing, healthcare, education, safety, logistics, and tourism. Trusted by leading global enterprises, Guidona continues to deliver future-ready enterprise technologies that enhance performance and accelerate digital transformation.
             </p>
           </motion.div>
           
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
         </div>
       </section>

 
    </div>
  );
}
