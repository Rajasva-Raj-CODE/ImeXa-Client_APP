'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Factory, Shield, Cog, BarChart3, Users, Clock, Award, CheckCircle } from 'lucide-react'
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

const solutions = [
  {
    icon: Factory,
    title: 'Assembly Line Training',
    description: 'Virtual assembly line environments for hands-on training without production downtime',
    benefits: ['Zero downtime', 'Risk-free practice', 'Standardized procedures', 'Quality assurance']
  },
  {
    icon: Shield,
    title: 'Safety Protocol Training',
    description: 'Immersive safety training scenarios including emergency procedures and hazard recognition',
    benefits: ['Emergency preparedness', 'Hazard identification', 'Safety compliance', 'Incident prevention']
  },
  {
    icon: Cog,
    title: 'Equipment Operation',
    description: 'Virtual operation of complex machinery and equipment with realistic physics simulation',
    benefits: ['Equipment familiarity', 'Maintenance training', 'Troubleshooting skills', 'Cost reduction']
  },
  {
    icon: BarChart3,
    title: 'Quality Control Systems',
    description: 'Training on quality inspection processes and statistical quality control methods',
    benefits: ['Inspection accuracy', 'Defect detection', 'Process optimization', 'Compliance training']
  }
]

const caseStudy = {
  title: 'Revolutionizing Automobile Assembly Line Training with VR',
  client: 'Major Automotive Manufacturer',
  challenge: 'The client faced significant challenges in training new employees on complex assembly line procedures without disrupting ongoing production.',
  solution: 'ImeXa developed a comprehensive VR training module that simulated the entire assembly line process, allowing trainees to practice in a risk-free virtual environment.',
  results: [
    'Reduced training time by 40%',
    'Improved safety compliance by 95%',
    'Decreased training costs by 60%',
    'Enhanced employee confidence and competency'
  ]
}

const keyFeatures = [
  'Real-time performance analytics and progress tracking',
  'Multi-user collaborative training sessions',
  'Customizable training scenarios for specific workflows',
  'Integration with existing training management systems',
  'Comprehensive reporting and certification tracking',
  'Multi-language support for global teams'
]

export default function Manufacturing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <span className="text-white text-xl font-bold">ImeXa</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
              <Link href="/industries" className="text-white/80 hover:text-white transition-colors">Industries</Link>
              <Link href="/about" className="text-white/80 hover:text-white transition-colors">About</Link>
              <Link href="/case-studies" className="text-white/80 hover:text-white transition-colors">Case Studies</Link>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Breadcrumb */}
      <section className="pt-32 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/industries" 
              className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Industries
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-6">
                Manufacturing Solutions
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Manufacturing{' '}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Industry
                </span>
              </h1>
              
              <p className="text-xl text-blue-200 mb-8 leading-relaxed">
                Transform your manufacturing training with immersive VR experiences that enhance 
                safety, efficiency, and skill development across your entire operation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700">
                  Request Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Download Brochure
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl border border-white/20 backdrop-blur-sm overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg" 
                  alt="Manufacturing VR Training"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
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
              Our Manufacturing Solutions
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Comprehensive VR training modules designed specifically for manufacturing environments
            </p>
          </motion.div>
          
          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <motion.div key={solution.title} variants={fadeInUp}>
                  <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 group h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-xl text-white">{solution.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-blue-200 mb-6">{solution.description}</p>
                      <div className="space-y-2">
                        {solution.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span className="text-sm text-blue-200">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Case Study Section */}
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
              Success Story
            </h2>
            <p className="text-xl text-blue-200">
              See how we transformed training for a leading automotive manufacturer
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">{caseStudy.title}</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-blue-300 mb-2">Challenge</h4>
                        <p className="text-blue-200">{caseStudy.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-blue-300 mb-2">Solution</h4>
                        <p className="text-blue-200">{caseStudy.solution}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-blue-300 mb-6">Results & Benefits</h4>
                    <div className="space-y-4">
                      {caseStudy.results.map((result, index) => (
                        <motion.div
                          key={result}
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-2 h-2 bg-green-400 rounded-full" />
                          <span className="text-blue-100">{result}</span>
                        </motion.div>
                      ))}
                    </div>
                    <Button className="mt-8 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700">
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
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
              Key Features
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Advanced capabilities that make our manufacturing VR training solutions industry-leading
            </p>
          </motion.div>
          
          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {keyFeatures.map((feature, index) => (
              <motion.div key={feature} variants={fadeInUp}>
                <div className="bg-white/10 border border-white/20 rounded-lg p-6 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-blue-100">{feature}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Revolutionize Your Manufacturing Training?
            </h2>
            <p className="text-xl text-blue-200 mb-12">
              Join industry leaders who have transformed their training with ImeXa's VR solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-lg px-8 py-6">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6">
                View All Industries
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}