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
  Calendar,
  Cloud,
  Cpu,
  Smartphone,
  Mail,
  MessageSquare,
  Heart,
  Clock,
  FileText,
  UserPlus,
  FolderOpen,
  LayoutDashboard,
  Headphones,
  BookOpen,
  Lightbulb,
  Handshake,
  MapPin,
  Trophy,
  Building,
  Coffee,
  BellRing,
  Target as TargetIcon,
  Globe as GlobeIcon,
} from "lucide-react";
import Button from "../components/Button";

export default function About() {
  const [activeValue, setActiveValue] = useState(0);
  const [stats, setStats] = useState([
    { value: "0+", label: "Businesses Served", icon: <Building className="h-5 w-5" />, accent: "bg-cyan-100" },
    { value: "0%", label: "Customer Satisfaction", icon: <Star className="h-5 w-5" />, accent: "bg-blue-100" },
    { value: "0+", label: "Deals Managed", icon: <TrendingUp className="h-5 w-5" />, accent: "bg-emerald-100" },
    { value: "24/7", label: "Support", icon: <Headphones className="h-5 w-5" />, accent: "bg-green-100" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % values.length);
    }, 3000);

    // Animate stats
    setTimeout(() => {
      setStats([
        { value: "500+", label: "Businesses Served", icon: <Building className="h-5 w-5" />, accent: "bg-cyan-100" },
        { value: "98%", label: "Customer Satisfaction", icon: <Star className="h-5 w-5" />, accent: "bg-blue-100" },
        { value: "10K+", label: "Deals Managed", icon: <TrendingUp className="h-5 w-5" />, accent: "bg-emerald-100" },
        { value: "24/7", label: "Support", icon: <Headphones className="h-5 w-5" />, accent: "bg-green-100" },
      ]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const keyFeatures = [
    {
      icon: <UserPlus className="h-8 w-8" />,
      title: "Contact & Lead Management",
      description: "Centralized platform to manage all your contacts, leads, and customer information",
      gradient: "from-cyan-500 to-blue-500",
      stat: "45% Faster Lead Processing",
      accent: "bg-gradient-to-r from-cyan-500 to-blue-500",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Sales Pipeline Tracking",
      description: "Visual sales pipeline with real-time tracking and forecasting",
      gradient: "from-blue-500 to-indigo-500",
      stat: "30% Increase in Sales",
      accent: "bg-gradient-to-r from-blue-500 to-indigo-500",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics & Reporting",
      description: "Comprehensive analytics dashboard with actionable insights",
      gradient: "from-indigo-500 to-purple-500",
      stat: "Data-Driven Decisions",
      accent: "bg-gradient-to-r from-indigo-500 to-purple-500",
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Third-Party Integrations",
      description: "Seamless integration with email, calendar, and popular business apps",
      gradient: "from-purple-500 to-pink-500",
      stat: "50+ Integrations",
      accent: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      icon: <BellRing className="h-8 w-8" />,
      title: "Automated Workflows",
      description: "Automate repetitive tasks and streamline business processes",
      gradient: "from-cyan-500 to-blue-500",
      stat: "70% Time Saved",
      accent: "bg-gradient-to-r from-cyan-500 to-blue-500",
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Customer Support Tools",
      description: "Built-in tools for managing customer queries and support tickets",
      gradient: "from-blue-500 to-indigo-500",
      stat: "24/7 Support",
      accent: "bg-gradient-to-r from-blue-500 to-indigo-500",
    },
  ];

  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security First",
      description: "Enterprise-grade security with end-to-end encryption",
      gradient: "from-cyan-500 to-blue-500",
      stat: "99.9% Uptime",
      accent: "bg-gradient-to-r from-cyan-500 to-blue-500",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Innovation",
      description: "Continuously evolving to meet modern business needs",
      gradient: "from-blue-500 to-indigo-500",
      stat: "Monthly Updates",
      accent: "bg-gradient-to-r from-blue-500 to-indigo-500",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Customer Success",
      description: "Dedicated to helping our customers grow and succeed",
      gradient: "from-indigo-500 to-purple-500",
      stat: "98% Satisfaction",
      accent: "bg-gradient-to-r from-indigo-500 to-purple-500",
    },
    {
      icon: <GlobeIcon className="h-8 w-8" />,
      title: "Global Vision",
      description: "Built for businesses worldwide with local understanding",
      gradient: "from-purple-500 to-pink-500",
      stat: "500+ Clients",
      accent: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
  ];

  const achievements = [
    {
      year: "2020",
      title: "Project Inception",
      description: "Founded to simplify CRM for small businesses",
      icon: <TargetIcon className="h-6 w-6" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      year: "2021",
      title: "Beta Launch",
      description: "First version released to early adopters",
      icon: <Rocket className="h-6 w-6" />,
      color: "from-blue-500 to-indigo-500"
    },
    {
      year: "2022",
      title: "Version 2.0",
      description: "Major update with AI-powered features",
      icon: <Trophy className="h-6 w-6" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      year: "2023",
      title: "Market Expansion",
      description: "Expanded to serve 500+ businesses",
      icon: <Globe className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      year: "2024",
      title: "Future Goals",
      description: "Advanced analytics & mobile applications",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "from-cyan-500 to-blue-500"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200/50 mb-8">
              <BookOpen className="h-5 w-5 text-cyan-600" />
              <span className="text-sm font-semibold text-blue-700">
                About Cliento CRM
              </span>
              <Sparkles className="h-4 w-4 text-emerald-500" />
            </div>

            {/* Main Heading */}
            <div className="mb-10">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-3 h-10 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-400/30"></div>
                <h1
                  style={{ fontFamily: "'Baloo 2', cursive" }}
                  className="text-4xl md:text-6xl font-bold"
                >
                  <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent bg-[length:200%] animate-gradient">
                    Redefining Customer Relationships
                  </span>
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Cliento CRM provides businesses with a centralized platform to manage customer relationships, 
                automate workflows, and track sales performance efficiently.
              </p>
            </div>

            {/* CTA Buttons */}
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
                  icon={<ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />}
                  classNameC="px-8 py-4 text-lg"
                />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-20">
              {stats.map((stat, index) => (
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
                        <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                        <div className="mt-1 w-8 h-1 rounded-full bg-gradient-to-r from-cyan-700 to-blue-500 opacity-40" />
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Company Overview & Mission */}
      <div className="relative z-10 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-200/50 mb-6">
                <TargetIcon className="h-3 w-3 text-emerald-600" />
                <span className="text-xs font-semibold text-emerald-700">
                  Company Overview
                </span>
              </div>
              
              <h2
                style={{ fontFamily: "'Baloo 2', cursive" }}
                className="text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6"
              >
                The Modern CRM Solution
              </h2>
              
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Cliento CRM is a comprehensive customer relationship management platform designed to help 
                businesses streamline their sales processes, enhance customer engagement, and drive growth 
                through data-driven insights.
              </p>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our platform combines powerful features with intuitive design, making it accessible 
                for businesses of all sizes while providing enterprise-level capabilities.
              </p>
              
              <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-gray-200">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-sm">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Trusted Platform</h4>
                  <p className="text-cyan-600 text-sm">Used by businesses worldwide</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-lg shadow-black/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Mission & Vision</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 hover:border-cyan-300 transition-all duration-300 bg-white">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
                    <TargetIcon className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Mission</h4>
                    <p className="text-gray-600">
                      Empowering teams through smart automation and analytics to build stronger customer relationships.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 bg-white">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-indigo-500/10">
                    <Globe className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Vision</h4>
                    <p className="text-gray-600">
                      Redefining how businesses interact with customers worldwide through innovative CRM solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="relative z-10 py-20 bg-gradient-to-b from-white to-cyan-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-200/50 mb-6">
              <Zap className="h-5 w-5 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-700">
                Core Features
              </span>
              <TrendingUp className="h-4 w-4 text-emerald-500" />
            </div>
            
            <h2
              style={{ fontFamily: "'Baloo 2', cursive" }}
              className="text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6"
            >
              Powerful Features for Business Growth
            </h2>
            
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to manage customer relationships and drive sales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl border border-gray-100 p-8 shadow-lg shadow-black/5 hover:border-cyan-300 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-2xl ${feature.accent} shadow-lg`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                    <p className="text-cyan-600 font-medium text-sm">{feature.stat}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-cyan-600">Learn More</div>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-cyan-500 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Target Audience */}
      <div className="relative z-10 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-200/50 mb-6">
              <Users className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-semibold text-purple-700">
                Who It's For
              </span>
              <TargetIcon className="h-4 w-4 text-rose-500" />
            </div>
            
            <h2
              style={{ fontFamily: "'Baloo 2', cursive" }}
              className="text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6"
            >
              Designed for Your Success
            </h2>
            
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
              Cliento CRM is built for businesses that want to streamline workflows and grow revenue
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border border-gray-200 p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Small & Medium Businesses</h3>
              <p className="text-gray-600">
                Perfect for growing businesses that need an affordable, powerful CRM solution.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-gray-200 p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sales Teams</h3>
              <p className="text-gray-600">
                Built for sales professionals who need to track deals and manage pipelines efficiently.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl border border-gray-200 p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Success Managers</h3>
              <p className="text-gray-600">
                Ideal for teams focused on customer retention and building long-term relationships.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Company Story & Values */}
      <div className="relative z-10 py-20 bg-gradient-to-br from-cyan-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-200/50 mb-6">
                <BookOpen className="h-3 w-3 text-cyan-600" />
                <span className="text-xs font-semibold text-blue-700">
                  Our Story
                </span>
              </div>
              
              <h2
                style={{ fontFamily: "'Baloo 2', cursive" }}
                className="text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6"
              >
                Built on a Simple Idea
              </h2>
              
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Founded in 2020, Cliento CRM was born from the need to simplify complex sales processes 
                and make business growth accessible to everyone.
              </p>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our team of passionate developers and business experts came together with a shared vision: 
                to create a CRM platform that combines powerful features with intuitive design, helping 
                businesses worldwide build better customer relationships.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-600 mb-1">4+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">50+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-lg shadow-black/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Core Values</h3>
                </div>
                
                <div className="space-y-6">
                  {values.map((value, index) => (
                    <div
                      key={index}
                      className={`group flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                        activeValue === index
                          ? "bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-300 shadow-lg"
                          : "bg-white border-gray-200 hover:border-cyan-200 hover:shadow-md"
                      }`}
                      onMouseEnter={() => setActiveValue(index)}
                      onClick={() => setActiveValue(index)}
                    >
                      <div className={`p-3 rounded-xl ${value.accent}/20 group-hover:scale-110 transition-transform`}>
                        <div className="text-cyan-600">{value.icon}</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">{value.title}</h4>
                        <p className="text-gray-600 text-sm">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Timeline */}
      <div className="relative z-10 py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-200/50 mb-6">
              <Trophy className="h-5 w-5 text-amber-600" />
              <span className="text-sm font-semibold text-amber-700">
                Milestones & Achievements
              </span>
              <Award className="h-4 w-4 text-rose-500" />
            </div>
            
            <h2
              style={{ fontFamily: "'Baloo 2', cursive" }}
              className="text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6"
            >
              Our Journey So Far
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500"></div>
            
            {achievements.map((achievement, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                <div className="w-1/2 pr-8 pl-8">
                  <div className={`bg-white rounded-xl border border-gray-100 p-6 shadow-lg shadow-black/5 ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  }`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${achievement.color}`}>
                        <div className="text-white">{achievement.icon}</div>
                      </div>
                      <div className={`text-sm font-semibold ${index % 2 === 0 ? "ml-auto" : ""}`}>
                        <span className="text-cyan-600">{achievement.year}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
                
                <div className="relative w-8 h-8">
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r ${achievement.color} rounded-full border-4 border-white shadow-lg`}></div>
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="relative z-10 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 transform -skew-y-3"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            
            <p className="text-cyan-100 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of businesses using Cliento CRM to build stronger customer relationships and drive growth.
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
              
              <Link to="/contact" className="group">
                <Button
                  label="Schedule a Demo"
                  variant="thin-gradient-border"
                  size="xl"
                  icon={<Calendar className="h-6 w-6 group-hover:scale-110 transition-transform" />}
                  classNameC="px-10 py-6 text-xl text-white border-cyan-300 hover:border-white"
                />
              </Link>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <CheckCircle className="h-8 w-8 text-emerald-300" />
              <span className="text-white text-sm">14-Day Free Trial</span>
            </div>
            
            <div className="flex flex-col items-center gap-3 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Shield className="h-8 w-8 text-cyan-300" />
              <span className="text-white text-sm">Enterprise Security</span>
            </div>
            
            <div className="flex flex-col items-center gap-3 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Headphones className="h-8 w-8 text-blue-300" />
              <span className="text-white text-sm">24/7 Support</span>
            </div>
            
            <div className="flex flex-col items-center gap-3 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <MapPin className="h-8 w-8 text-purple-300" />
              <span className="text-white text-sm">Global Reach</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
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
                Professional customer relationship management for businesses of all sizes.
              </p>
              
              <div className="flex gap-4">
                <Link to="/contact">
                  <Button
                    label="Contact Us"
                    variant="thin-gradient-border"
                    size="sm"
                    classNameC="text-white border-cyan-600 hover:border-cyan-400"
                    icon={<Mail className="h-4 w-4" />}
                  />
                </Link>
                
                <Link to="/demo">
                  <Button
                    label="Request Demo"
                    variant="thin-gradient-border"
                    size="sm"
                    classNameC="text-white border-blue-600 hover:border-blue-400"
                    icon={<Calendar className="h-4 w-4" />}
                  />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-white mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><Link to="/features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
                  <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                  <li><Link to="/integrations" className="text-gray-400 hover:text-white transition-colors">Integrations</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-white mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                  <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                  <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-white mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><Link to="/help" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
                  <li><Link to="/docs" className="text-gray-400 hover:text-white transition-colors">Documentation</Link></li>
                  <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 Cliento CRM. All rights reserved.
            </p>
            
            <div className="flex gap-6">
              <Link to="/privacy">
                <Button
                  label="Privacy Policy"
                  variant="thin-gradient-border"
                  size="sm"
                  classNameC="text-gray-400 hover:text-white border-gray-700 hover:border-gray-600"
                />
              </Link>
              
              <Link to="/terms">
                <Button
                  label="Terms of Service"
                  variant="thin-gradient-border"
                  size="sm"
                  classNameC="text-gray-400 hover:text-white border-gray-700 hover:border-gray-600"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}