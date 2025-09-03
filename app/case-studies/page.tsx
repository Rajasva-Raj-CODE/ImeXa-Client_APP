'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Factory, Flame, Truck, Clock, TrendingUp, Users, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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

const caseStudies = [
  {
    id: 1,
    icon: Factory,
    title: 'Revolutionizing Automobile Assembly Line Training with VR',
    industry: 'Manufacturing',
    client: 'Global Automotive Manufacturer',
    challenge: 'Training new employees on complex assembly procedures without disrupting production',
    solution: 'Comprehensive VR simulation of entire assembly line process',
    results: [
      'Reduced training time by 40%',
      'Improved safety compliance by 95%',
      'Decreased training costs by 60%',
      'Enhanced employee confidence'
    ],
    image: 'https://images.pexels.com/photos/279949/pexels-photo-279949.jpeg',
    href: '/case-studies/automobile-assembly'
  },
  {
    id: 2,
    icon: Flame,
    title: 'Enhancing Fire Safety Training through Immersive VR Simulations',
    industry: 'Safety Training',
    client: 'Industrial Safety Corporation',
    challenge: 'Providing realistic fire emergency training without actual fire hazards',
    solution: 'Immersive VR fire scenarios with smoke, heat simulation, and emergency protocols',
    results: [
      'Improved response time by 35%',
      'Increased safety awareness by 90%',
      'Reduced training incidents by 100%',
      'Enhanced team coordination'
    ],
    image: 'https://images.pexels.com/photos/274131/pexels-photo-274131.jpeg',
    href: '/case-studies/fire-safety'
  },
  {
    id: 3,
    icon: Truck,
    title: 'Heavy Machine Operator Training with VR Simulations',
    industry: 'Construction',
    client: 'Heavy Equipment Training Center',
    challenge: 'Training operators on expensive heavy machinery without equipment wear',
    solution: 'Realistic VR simulations of excavators, cranes, and construction equipment',
    results: [
      'Reduced equipment wear costs by 80%',
      'Improved operator proficiency by 65%',
      'Decreased training time by 50%',
      'Enhanced safety protocols'
    ],
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg',
    href: '/case-studies/heavy-machinery'
  }
]

const metrics = [
  { icon: Clock, label: 'Average Training Time Reduction', value: '45%', color: 'text-blue-400' },
  { icon: TrendingUp, label: 'Performance Improvement', value: '65%', color: 'text-green-400' },
  { icon: Users, label: 'Trainees Served', value: '10k+', color: 'text-purple-400' },
  { icon: Award, label: 'Client Satisfaction', value: '99%', color: 'text-yellow-400' }
]

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">


      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div variants={fadeInUp}>
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-6">
                Success Stories
              </Badge>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold text-white mb-8"
            >
              Case Studies for{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                ImeXa
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-blue-200 max-w-3xl mx-auto"
            >
              Discover how our VR training solutions have transformed organizations 
              across different industries with measurable results.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {metrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <motion.div
                  key={metric.label}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className={`text-3xl md:text-4xl font-bold ${metric.color} mb-2`}>
                    {metric.value}
                  </div>
                  <div className="text-blue-200 text-sm">{metric.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {caseStudies.map((study, index) => {
              const Icon = study.icon
              const isEven = index % 2 === 0
              
              return (
                <motion.div key={study.id} variants={fadeInUp}>
                  <Card className="bg-white/10 border-white/20 backdrop-blur-sm overflow-hidden">
                    <div className={`grid lg:grid-cols-2 ${!isEven ? 'lg:grid-cols-2' : ''}`}>
                      <div className={`relative h-80 lg:h-auto ${!isEven ? 'lg:order-2' : ''}`}>
                        <img 
                          src={study.image} 
                          alt={study.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute top-6 left-6">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                        </div>
                      </div>
                      
                      <CardContent className={`p-12 ${!isEven ? 'lg:order-1' : ''}`}>
                        <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-4">
                          {study.industry}
                        </Badge>
                        
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                          {study.title}
                        </h3>
                        
                        <div className="space-y-6 mb-8">
                          <div>
                            <h4 className="text-lg font-semibold text-blue-300 mb-2">Challenge</h4>
                            <p className="text-blue-200">{study.challenge}</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-blue-300 mb-2">Solution</h4>
                            <p className="text-blue-200">{study.solution}</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-blue-300 mb-2">Results</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {study.results.map((result) => (
                                <div key={result} className="flex items-center space-x-2">
                                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                                  <span className="text-sm text-blue-200">{result}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                          Read Full Case Study
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-blue-200 mb-12">
              Let's discuss how ImeXa can transform your training programs with VR technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-6">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}