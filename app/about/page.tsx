'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Target, Users, Lightbulb, Shield, Award, Globe, TrendingUp, Heart } from 'lucide-react'
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

const values = [
  {
    icon: Target,
    title: 'Innovation',
    description: 'Pushing the boundaries of VR technology to create transformative learning experiences'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working closely with clients to develop customized solutions that meet their unique needs'
  },
  {
    icon: Shield,
    title: 'Safety',
    description: 'Prioritizing safety in all our training solutions to protect learners and organizations'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Delivering world-class VR training solutions with measurable results and ROI'
  }
]

const stats = [
  { icon: Globe, number: '25+', label: 'Countries Served', color: 'text-blue-400' },
  { icon: Users, number: '500+', label: 'Corporate Clients', color: 'text-purple-400' },
  { icon: TrendingUp, number: '10k+', label: 'Successful Trainings', color: 'text-teal-400' },
  { icon: Heart, number: '99%', label: 'Client Satisfaction', color: 'text-green-400' }
]

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Technology Officer',
    image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg',
    bio: 'Leading VR research with 15+ years in immersive technology development'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Industry Solutions',
    image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg',
    bio: 'Expert in manufacturing training with deep industry knowledge and experience'
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Director of Learning Sciences',
    image: 'https://images.pexels.com/photos/1181397/pexels-photo-1181397.jpeg',
    bio: 'Pioneering research in VR-based learning methodologies and effectiveness'
  }
]

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
   

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={stagger} initial="initial" animate="animate" className="text-center">
            <motion.div variants={fadeInUp}>
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-6">
                About ImeXa
              </Badge>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold text-white mb-8"
            >
              Redefining Training for{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                the Future
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed"
            >
              At ImeXa, we believe that the future of training lies in immersive, engaging, 
              and safe virtual reality experiences. Partnering with Guidona Softpedia, 
              we're pioneering the next generation of workforce development.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm h-full">
                <CardContent className="p-12">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mb-8">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                  <p className="text-blue-200 leading-relaxed">
                    To revolutionize workforce training through cutting-edge VR technology, 
                    making learning more effective, engaging, and accessible while ensuring 
                    the highest standards of safety and performance across all industries.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm h-full">
                <CardContent className="p-12">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-8">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
                  <p className="text-blue-200 leading-relaxed">
                    To be the global leader in VR training solutions, empowering organizations 
                    worldwide to achieve unprecedented levels of training effectiveness, 
                    safety, and employee development through immersive virtual experiences.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              The principles that guide everything we do at ImeXa
            </p>
          </motion.div>
          
          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div key={value.title} variants={fadeInUp}>
                  <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 group h-full">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                      <p className="text-blue-200">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
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
              ImeXa by the Numbers
            </h2>
            <p className="text-xl text-blue-200">
              Our impact speaks for itself
            </p>
          </motion.div>
          
          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-blue-200 font-medium">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Team
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              The brilliant minds behind ImeXa's innovative VR training solutions
            </p>
          </motion.div>
          
          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {team.map((member, index) => (
              <motion.div key={member.name} variants={fadeInUp}>
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                    <p className="text-blue-300 font-medium mb-4">{member.role}</p>
                    <p className="text-blue-200 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 px-6 bg-white/5 backdrop-blur-sm">
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
                Our strategic partnership with Guidona Softpedia combines cutting-edge 
                technology expertise with deep industry knowledge to deliver unparalleled 
                VR training solutions.
              </p>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-4">Why Partner with Guidona Softpedia?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    <span className="text-blue-100">Advanced technology infrastructure and development capabilities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                    <span className="text-blue-100">Proven track record in enterprise software solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full" />
                    <span className="text-blue-100">Global reach and local support infrastructure</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-blue-100">Commitment to innovation and continuous improvement</span>
                  </div>
                </div>
              </div>
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
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-blue-200 mb-12">
              Let's discuss how ImeXa can transform your organization's training programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-6">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6">
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}