// Updated by Mubashir
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  TrendingUp,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Sparkles,
  Target,
  Globe,
  Lock,
  Star,
  Award,
  Rocket,
  ChevronRight,
  PlayCircle,
  Cloud,
  Cpu,
  Smartphone,
  Mail,
  MessageSquare,
  Heart,
  Coffee,
  Clock,
  Users as UsersIcon,
  FolderOpen,
  LayoutDashboard,
  UserPlus,
  Calendar,
  BellRing,
  FileText,
} from "lucide-react";
import Button from "../components/Button";

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [stats, setStats] = useState([
    { value: "0+", label: "Happy Clients", icon: <Users className="h-5 w-5" />, accent: "bg-cyan-100" },
    { value: "0%", label: "Satisfaction Rate", icon: <Star className="h-5 w-5" />, accent: "bg-blue-100" },
    { value: "24/7", label: "Support Available", icon: <MessageSquare className="h-5 w-5" />, accent: "bg-emerald-100" },
    { value: "0+", label: "Integrations", icon: <Cloud className="h-5 w-5" />, accent: "bg-green-100" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    // Animate stats counting
    const timer = setTimeout(() => {
      setStats([
        { value: "500+", label: "Happy Clients", icon: <Users className="h-5 w-5" />, accent: "bg-cyan-100" },
        { value: "98%", label: "Satisfaction Rate", icon: <Star className="h-5 w-5" />, accent: "bg-blue-100" },
        { value: "24/7", label: "Support Available", icon: <MessageSquare className="h-5 w-5" />, accent: "bg-emerald-100" },
        { value: "50+", label: "Integrations", icon: <Cloud className="h-5 w-5" />, accent: "bg-green-100" },
      ]);
    }, 500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Smart Lead Management",
      description: "AI-powered lead scoring and automated follow-ups",
      color: "from-cyan-500 to-blue-500",
      stat: "+45% Conversion",
      accent: "bg-gradient-to-r from-cyan-500 to-blue-500",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Real-time Analytics",
      description: "Live dashboards with predictive insights",
      color: "from-blue-500 to-indigo-500",
      stat: "24/7 Monitoring",
      accent: "bg-gradient-to-r from-blue-500 to-indigo-500",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Bank-level Security",
      description: "End-to-end encryption & GDPR compliance",
      color: "from-indigo-500 to-purple-500",
      stat: "99.9% Uptime",
      accent: "bg-gradient-to-r from-indigo-500 to-purple-500",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile First",
      description: "Fully responsive design on all devices",
      color: "from-purple-500 to-pink-500",
      stat: "iOS & Android",
      accent: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
  ];

  const testimonials = [
    {
      name: "Ahmed Raza",
      company: "TechSolutions PK",
      content: "Cliento transformed our sales process. We've seen a 60% increase in conversions!",
      role: "CEO",
      rating: 5,
      avatar: "AR",
      delay: "100ms",
    },
    {
      name: "Sana Khan",
      company: "DigitalEdge",
      content: "The most intuitive CRM I've used. Perfect for Pakistani businesses!",
      role: "Sales Director",
      rating: 5,
      avatar: "SK",
      delay: "200ms",
    },
    {
      name: "Omar Farooq",
      company: "PakBiz Hub",
      content: "24/7 support and regular updates. Truly made for our market.",
      role: "Operations Manager",
      rating: 5,
      avatar: "OF",
      delay: "300ms",
    },
  ];

  const quickStats = [
    {
      title: "Total Leads",
      value: "156",
      change: "+12%",
      icon: <Users className="h-5 w-5" />,
      accent: "bg-cyan-100",
    },
    {
      title: "Active Projects",
      value: "24",
      change: "+3",
      icon: <FolderOpen className="h-5 w-5" />,
      accent: "bg-blue-100",
    },
    {
      title: "Success Rate",
      value: "92%",
      change: "+5%",
      icon: <TrendingUp className="h-5 w-5" />,
      accent: "bg-emerald-100",
    },
    {
      title: "Revenue Growth",
      value: "$48.5K",
      change: "+15%",
      icon: <BarChart3 className="h-5 w-5" />,
      accent: "bg-green-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            {/* Dashboard-inspired Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200/50 mb-8">
              <LayoutDashboard className="h-5 w-5 text-cyan-600" />
              <span className="text-sm font-semibold text-blue-700">
                Pakistan's #1 CRM Platform
              </span>
              <TrendingUp className="h-4 w-4 text-emerald-500" />
            </div>

            {/* Main Heading with Dashboard Theme */}
            <div className="mb-10">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-3 h-10 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-400/30"></div>
                <h1
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                  className="text-4xl md:text-6xl font-bold"
                >
                  <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent bg-[length:200%] animate-gradient">
                    Transform Your Business
                  </span>
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Cliento CRM helps Pakistani businesses manage leads, track sales, and grow customer
                relationships with our modern, secure, and scalable platform.
              </p>
            </div>

            {/* Interactive Buttons with Dashboard Theme */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link to="/auth/signup" className="group">
                <Button
                  label="Start Free Trial"
                  variant="theme"
                  size="lg"
                  icon={<Rocket className="h-5 w-5 group-hover:rotate-12 transition-transform" />}
                  classNameC="px-8 py-4 text-lg shadow-lg shadow-cyan-500/30"
                />
              </Link>
              <Link to="/dashboard" className="group">
                <Button
                  label="View Live Demo"
                  variant="thin-gradient-border"
                  size="lg"
                  icon={<PlayCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />}
                  classNameC="px-8 py-4 text-lg"
                />
              </Link>
            </div>

            {/* Dashboard-style Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-20">
              {quickStats.map((stat, index) => (
                <div
                  key={index}
                  className="relative group"
                >
                  <div className="relative flex items-center justify-between overflow-hidden rounded-xl bg-white border border-gray-200 p-5 shadow-lg shadow-black/5 backdrop-blur-sm group-hover:shadow-lg group-hover:shadow-cyan-100/20 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl text-cyan-600 shadow-sm ${stat.accent}/20`}>
                        {stat.icon}
                      </div>
                      <div className="flex flex-col">
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <div className="mt-1 w-8 h-1 rounded-full bg-gradient-to-r from-cyan-700 to-blue-500 opacity-40" />
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                      <span className="text-xs font-medium px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full">
                        {stat.change}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Features Section with Dashboard Theme */}
      <div className="relative z-10 py-20 bg-gradient-to-b from-white to-cyan-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h2
                style={{ fontFamily: "'Baloo 2', cursive" }}
                className="text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent"
              >
                Why Choose Cliento?
              </h2>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Built with cutting-edge technology and designed for the Pakistani market
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Feature Showcase */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-3xl blur-xl"></div>
              <div className="relative bg-white rounded-xl border border-gray-100 p-8 shadow-lg shadow-black/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-2xl ${features[activeFeature].accent} shadow-lg`}>
                    <div className="text-white">
                      {features[activeFeature].icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{features[activeFeature].title}</h3>
                    <p className="text-cyan-600 font-medium">{features[activeFeature].stat}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-lg mb-8">{features[activeFeature].description}</p>
                
                {/* Feature Navigation Dots */}
                <div className="flex gap-2">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveFeature(index)}
                      className={`flex-1 h-1 rounded-full transition-all duration-300 ${
                        index === activeFeature
                          ? `${features[index].accent}`
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Feature List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group flex items-start gap-4 p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                    activeFeature === index
                      ? "bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-300 shadow-lg"
                      : "bg-white border-gray-200 hover:border-cyan-200 hover:shadow-md"
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className={`p-3 rounded-xl ${feature.accent}/20 group-hover:scale-110 transition-transform`}>
                    <div className="text-cyan-600">{feature.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                  <ChevronRight className={`h-5 w-5 text-gray-400 group-hover:text-cyan-500 transition-colors ${
                    activeFeature === index ? "text-cyan-500 rotate-90" : ""
                  }`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials with Dashboard Theme */}
      <div className="relative z-10 py-20 bg-gradient-to-br from-white to-blue-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-200/50 mb-6">
              <Award className="h-5 w-5 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">
                Trusted by Industry Leaders
              </span>
              <Star className="h-4 w-4 text-amber-500" />
            </div>
            <h2
              style={{ fontFamily: "'Baloo 2', cursive" }}
              className="text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6"
            >
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              See what Pakistani businesses have to say about their experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl border border-gray-100 p-8 shadow-lg shadow-black/5 hover:border-cyan-300 transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: testimonial.delay }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                      {testimonial.avatar}
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center">
                      <Award className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-cyan-600 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <div className="text-xs font-medium px-2 py-0.5 bg-cyan-100 text-cyan-700 rounded-full">
                    Verified
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions Section */}
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-lg shadow-black/5">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2
                    style={{ fontFamily: "'Baloo 2', cursive" }}
                    className="text-2xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent"
                  >
                    Get Started in Minutes
                  </h2>
                  <p className="text-gray-600">Everything you need to manage customer relationships</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  label: "Add New Lead",
                  description: "Create contact",
                  icon: <UserPlus className="h-5 w-5" />,
                  bgColor: "bg-cyan-50",
                  textColor: "text-cyan-600",
                },
                {
                  label: "Schedule Meeting",
                  description: "Plan follow-up",
                  icon: <Calendar className="h-5 w-5" />,
                  bgColor: "bg-blue-50",
                  textColor: "text-blue-600",
                },
                {
                  label: "View Analytics",
                  description: "Track performance",
                  icon: <BarChart3 className="h-5 w-5" />,
                  bgColor: "bg-emerald-50",
                  textColor: "text-emerald-600",
                },
                {
                  label: "Secure Data",
                  description: "Bank-level security",
                  icon: <Shield className="h-5 w-5" />,
                  bgColor: "bg-purple-50",
                  textColor: "text-purple-600",
                },
              ].map((action, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 rounded-xl border border-gray-200 hover:border-cyan-300 hover:shadow-md transition-all duration-200 group cursor-pointer bg-white"
                >
                  <div className={`p-4 rounded-xl ${action.bgColor} mb-4 group-hover:scale-110 transition-transform`}>
                    <div className={`${action.textColor}`}>
                      {action.icon}
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-center mb-1">{action.label}</h4>
                  <p className="text-sm text-gray-500 text-center">{action.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive CTA Section with Dashboard Theme */}
      <div className="relative z-10 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 transform -skew-y-3"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-cyan-100 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of Pakistani businesses using Cliento CRM to accelerate their growth
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link to="/auth/signup" className="group">
                <Button
                  label="Start 14-Day Free Trial"
                  variant="theme2"
                  size="xl"
                  icon={<Rocket className="h-6 w-6 group-hover:rotate-12 transition-transform" />}
                  classNameC="px-10 py-6 text-xl shadow-lg shadow-black/30 hover:shadow-black/50"
                />
              </Link>
              <Link to="/about" className="group">
                <Button
                  label="Schedule a Demo"
                  variant="thin-gradient-border"
                  size="xl"
                  icon={<Clock className="h-6 w-6 group-hover:scale-110 transition-transform" />}
                  classNameC="px-10 py-6 text-xl text-white border-cyan-300 hover:border-white"
                />
              </Link>
            </div>
          </div>

          {/* Feature Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Shield className="h-8 w-8 text-cyan-300" />
              <span className="text-white text-sm">Bank-level Security</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <TrendingUp className="h-8 w-8 text-blue-300" />
              <span className="text-white text-sm">Real-time Analytics</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <CheckCircle className="h-8 w-8 text-emerald-300" />
              <span className="text-white text-sm">14-Day Free Trial</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Cpu className="h-8 w-8 text-purple-300" />
              <span className="text-white text-sm">AI Powered</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer with Dashboard Theme */}
      <footer className="relative z-10 bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h2
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                  className="text-2xl font-bold text-white"
                >
                  Cliento CRM
                </h2>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Empowering Pakistani businesses with world-class customer relationship management tools.
              </p>
              <div className="flex gap-4">
                {[<UsersIcon />, <FolderOpen />, <Mail />].map((Icon, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-colors cursor-pointer"
                  >
                    {Icon}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-white mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><Link to="/dashboard" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
                  <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                  <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-white mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                  <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
                  <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-white mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link></li>
                  <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</Link></li>
                  <li><Link to="/security" className="text-gray-400 hover:text-white transition-colors">Security</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 Cliento CRM. All rights reserved. Proudly developed in Pakistan.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}