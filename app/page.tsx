"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Shield, 
  Users, 
  Sparkles, 
  Play, 
  Star, 
  Globe, 
  Rocket, 
  Target, 
  BarChart3,
  Menu,
  X,
  ChevronDown,
  Clock,
  TrendingUp,
  Layers,
  MessageSquare,
  Calendar,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-100 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">FlowSync</span>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Features</a>
              <a href="#product" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Product</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Pricing</a>
              <a href="#company" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Company</a>
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">Log in</Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                Get started
              </Button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              New: AI-powered workflow automation
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight"
            >
              Ship products
              <br />
              <span className="text-blue-600">faster than ever</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              The all-in-one platform that helps product teams plan, build, and ship 
              world-class software with unprecedented speed and clarity.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Start building for free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg border-gray-300">
                <Play className="mr-2 w-5 h-5" />
                Watch demo
              </Button>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="flex items-center justify-center space-x-8 text-sm text-gray-500"
            >
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <span>Trusted by 50k+ teams</span>
              </div>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-1">4.9/5 on G2</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 relative max-w-6xl mx-auto"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-gray-500 text-sm">flowsync.app/dashboard</div>
                  <div className="w-16"></div>
                </div>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  {[
                    { title: "Active Projects", value: "12", icon: Rocket, color: "blue" },
                    { title: "Team Members", value: "24", icon: Users, color: "green" },
                    { title: "Tasks Done", value: "847", icon: CheckCircle, color: "purple" },
                    { title: "Success Rate", value: "94%", icon: TrendingUp, color: "orange" }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                      className="bg-gray-50 rounded-xl p-6"
                    >
                      <div className={`w-10 h-10 bg-${stat.color}-100 rounded-lg mb-3 flex items-center justify-center`}>
                        <stat.icon className={`w-5 h-5 text-${stat.color}-600`} />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-gray-600 text-sm">{stat.title}</div>
                    </motion.div>
                  ))}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                      className="bg-blue-50 rounded-xl p-6 h-32"
                    >
                      <div className="w-full h-4 bg-blue-200 rounded mb-4"></div>
                      <div className="space-y-2">
                        <div className="w-4/5 h-3 bg-gray-200 rounded"></div>
                        <div className="w-3/5 h-3 bg-gray-200 rounded"></div>
                        <div className="w-2/3 h-3 bg-gray-200 rounded"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything you need to ship
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From planning to deployment, our platform provides all the tools your team needs 
              to build and ship products faster than ever before.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Calendar,
                title: "Smart Planning",
                description: "AI-powered project planning that adapts to your team's velocity and automatically adjusts timelines."
              },
              {
                icon: MessageSquare,
                title: "Real-time Collaboration",
                description: "Keep everyone in sync with instant updates, comments, and notifications across all your projects."
              },
              {
                icon: BarChart3,
                title: "Advanced Analytics",
                description: "Get deep insights into team performance, project health, and delivery predictability."
              },
              {
                icon: Zap,
                title: "Workflow Automation",
                description: "Automate repetitive tasks and streamline your development process with custom workflows."
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-grade security with SOC 2 compliance, SSO, and advanced permission controls."
              },
              {
                icon: Globe,
                title: "Global Scale",
                description: "Built for teams of any size, from startups to Fortune 500 companies worldwide."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Demo Section */}
      <section id="product" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                See your team's
                <span className="text-blue-600 block">productivity soar</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Watch how teams reduce delivery time by 40% and increase predictability 
                with our intelligent project management platform.
              </p>
              
              <div className="space-y-6 mb-10">
                {[
                  { icon: Clock, text: "40% faster delivery times", color: "text-green-600" },
                  { icon: Target, text: "95% on-time project completion", color: "text-blue-600" },
                  { icon: TrendingUp, text: "3x better team visibility", color: "text-purple-600" },
                  { icon: Settings, text: "Zero-config automation", color: "text-orange-600" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Start free trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Book a demo
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="bg-blue-600 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                      <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                      <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    </div>
                    <div className="text-white text-sm font-medium">Project Timeline</div>
                    <div className="w-16"></div>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <div className="w-5 h-5 bg-blue-600 rounded"></div>
                      </div>
                      <div className="flex-1">
                        <div className="w-full h-3 bg-gray-200 rounded mb-2"></div>
                        <div className="w-3/4 h-2 bg-gray-100 rounded"></div>
                      </div>
                      <div className="w-16 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to ship faster?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Join thousands of teams already building better products with FlowSync. 
              Start your free trial today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Start building for free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg">
                Talk to sales
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-blue-100 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
