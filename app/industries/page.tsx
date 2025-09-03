'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Factory, Car, GraduationCap, Heart, Building, Wrench, Users, Globe, Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const industries = [
  {
    icon: Factory,
    title: 'Manufacturing Industry',
    description: 'Immersive VR training that mirrors real factory conditions for assembly, quality checks, and emergency response in a risk-free, data-driven virtual platform.',
    features: ['VR Digital Twins', 'Procedural Practice', 'Safety Drills', 'Competency Analytics'],
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
    href: '/industry/manufacturing',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Car,
    title: 'Automobile Industry',
    description: 'VR and AR training modules that compress ramp-up time, improve first-time-right performance, and standardize skills across service centers and dealerships.',
    features: ['Vehicle Assembly', 'Service Diagnostics', 'Sales Training', 'AR-Assisted Maintenance'],
    image: 'https://images.pexels.com/photos/279949/pexels-photo-279949.jpeg',
    href: '/industry/automobile',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: GraduationCap,
    title: 'Education VR Labs',
    description: 'Turn complex concepts into interactive, curriculum-aligned simulations so students learn by doing. Expand access and deliver hands-on STEM learning.',
    features: ['Virtual Science Labs', 'Immersive Learning', 'Real-time Feedback', 'LMS Integration'],
    image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg',
    href: '/industry/education',
    color: 'from-green-500 to-teal-500'
  },
  {
    icon: Building,
    title: 'Virtual Factory Tour',
    description: 'Let employees, vendors, and auditors explore your facilities from anywhere. Standardize onboarding and showcase capabilities without disrupting operations.',
    features: ['360° Interactive Tours', 'Live Guided Walkthroughs', 'Digital Twin Previews', 'Cross-Platform Access'],
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg',
    href: '/industry/factory-tour',
    color: 'from-yellow-500 to-amber-500'
  },
  {
    icon: Globe,
    title: 'Cultural & Heritage VR Tours',
    description: 'Preserve and promote heritage with photorealistic, immersive VR tours of monuments, museums, and archaeological sites, expanding access while safeguarding fragile locations.',
    features: ['3D Site Reconstructions', 'Narrated Storylines', 'Web & VR Deployment', 'Digital Archiving'],
    image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg',
    href: '/industry/tourism',
    color: 'from-emerald-500 to-green-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile AR Applications',
    description: 'Deliver contextual, on-site assistance and high-impact product demos with mobile AR that blends marker-based and markerless tracking—no special hardware required.',
    features: ['On-Site AR Guidance', 'AR Product Demos', 'Indoor/Outdoor Wayfinding', 'Real-time Analytics'],
    image: 'https://images.pexels.com/photos/1081228/pexels-photo-1081228.jpeg',
    href: '/industry/mobile-ar',
    color: 'from-indigo-500 to-blue-500'
  }
]

export default function Industries() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">


      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div variants={fadeInUp}>
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-6">
                Industry Solutions
              </Badge>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold text-white mb-8"
            >
              VR Training Across{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Every Industry
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-blue-200 max-w-3xl mx-auto"
            >
              Discover how our specialized VR training solutions are transforming 
              workforce development across diverse industries worldwide.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <motion.div key={industry.title} variants={fadeInUp}>
                  <Link href={industry.href}>
                    <Card className="group overflow-hidden bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-500 cursor-pointer h-full">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={industry.image} 
                          alt={industry.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${industry.color} rounded-lg flex items-center justify-center`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                          {industry.title}
                        </h3>
                        <p className="text-blue-200 mb-6 leading-relaxed">{industry.description}</p>
                        
                        <div className="grid grid-cols-2 gap-2 mb-6">
                          {industry.features.map((feature) => (
                            <div key={feature} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                              <span className="text-sm text-blue-200">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                          <span className="font-medium">Explore Solutions</span>
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Trusted Section */}
      <section className="py-20 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">
              Trusted by Industry Leaders Embracing the Future
            </h2>
            <p className="text-xl text-blue-200 mb-12 max-w-3xl mx-auto">
              Our VR training solutions have been adopted by forward-thinking organizations 
              across the globe, delivering measurable improvements in training effectiveness.
            </p>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              View Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}