import {
  BellRing, BookOpen, Users, GraduationCap, CheckCircle, FileText, LayoutDashboard, TrendingUp, Calendar, Clock, Info, ChevronRight, FolderOpen, Download, Share, Bookmark,
  Shield,
  Sparkles,
  PenTool,
  Video,
  Headphones,
  Layers,
  FileSpreadsheet,
  BarChart3,
  Megaphone,
  Award,
  UserPlus,
  Zap,
  AlertCircle,
  Star
} from "lucide-react"


export default function AdminDashboardPage() {

  // Add this data array at the top
  const statsData = [
    {
      title: "Total Leads",
      value: "156",
      change: "+12%",
      icon: <Users className="h-6 w-6" />,
      accent: "bg-cyan-100",
      description: "This month"
    },
    {
      title: "Active Projects",
      value: "24",
      change: "+3",
      icon: <FolderOpen className="h-6 w-6" />,
      accent: "bg-blue-100",
      description: "In progress"
    },
    {
      title: "Total Clients",
      value: "92%",
      change: "+5%",
      icon: <TrendingUp className="h-6 w-6" />,
      accent: "bg-emerald-100",
      description: "Success rate"
    },
    {
      title: "Revenue",
      value: "$48.5K",
      change: "+15%",
      icon: <BarChart3 className="h-6 w-6" />,
      accent: "bg-green-100",
      description: "Monthly"
    },
    {
      title: "Tasks Pending",
      value: "18",
      change: "-4",
      icon: <CheckCircle className="h-6 w-6" />,
      accent: "bg-amber-100",
      description: "To complete"
    },
    {
      title: "Meetings",
      value: "32",
      change: "+8",
      icon: <Calendar className="h-6 w-6" />,
      accent: "bg-purple-100",
      description: "This week"
    }
  ]

  const quickActions = [
    {
      label: "Add New Lead",
      description: "Create contact",
      icon: <UserPlus className="h-5 w-5" />,
      bgColor: "bg-cyan-50",
      textColor: "text-cyan-600",
      onClick: () => console.log("Add lead")
    },
    {
      label: "Schedule Meeting",
      description: "Plan follow-up",
      icon: <Calendar className="h-5 w-5" />,
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      onClick: () => console.log("Schedule")
    },
    {
      label: "Create Project",
      description: "New initiative",
      icon: <FolderOpen className="h-5 w-5" />,
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      onClick: () => console.log("Create project")
    },
    {
      label: "Send Proposal",
      description: "To client",
      icon: <FileText className="h-5 w-5" />,
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      onClick: () => console.log("Send proposal")
    },
    {
      label: "Generate Report",
      description: "Analytics",
      icon: <BarChart3 className="h-5 w-5" />,
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
      onClick: () => console.log("Generate report")
    },
    {
      label: "Team Chat",
      description: "Collaborate",
      icon: <Users className="h-5 w-5" />,
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
      onClick: () => console.log("Team chat")
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">

      <main className="flex-1 p-4 sm:p-6 lg:p-8">

        {/* Welcome Section */}
        <div className="mb-10">
          {/* Minimal Dashboard Tag */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200/50 mb-6">
            <LayoutDashboard className="h-5 w-5 text-indigo-600" />
            <span className="text-sm font-semibold text-blue-700">Dashboard Hub</span>
            <TrendingUp className="h-4 w-4 text-emerald-500" />
          </div>
          <div className="relative">
            <div
              className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
            >
              {/* Left Header */}
              <div className="relative flex items-start gap-4">

                {/* Blue/Cyan Strip */}
                <div className="relative">
                  <div className="w-3 h-10 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-400/30"></div>
                </div>

                {/* Organization Text */}
                <div className="relative">
                  <h1 style={{ fontFamily: "'Baloo 2', cursive" }} className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent bg-[length:200%] animate-gradient">
                    Cliento
                  </h1>
                  <div className="flex items-center gap-3 ">
                    <Shield className="h-4 w-4 text-cyan-500 mt-2" />
                    <p className="text-gray-600 text-sm mt-2">
                      Welcome, <span className="font-semibold text-gray-900">{"Administrator"}</span>
                    </p>
                    <div className="w-1 h-1 bg-gray-300 rounded-full mt-2"></div>
                    <span className="text-xs font-medium px-2 py-1 bg-cyan-100 text-cyan-700 rounded-xl mt-2">
                      Admin
                    </span>
                  </div>
                </div>
              </div>


              {/* Right Header Controls */}
              <div className="flex flex-col sm:flex-row items-stretch gap-4">
                <div className="hidden lg:flex items-center gap-3 bg-white rounded-xl border border-gray-100 px-4 py-3 shadow-sm">
                  <Clock className="h-4 w-4 text-cyan-600" />
                  <span className="text-sm text-gray-600">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  <div className="h-4 w-px bg-gray-200"></div>
                  <Calendar className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-600">{new Date().getDate()} {new Date().toLocaleDateString('en-US', { month: 'short' })}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Stats Grid */}
        {/* Animated Stats Grid - Rectangular Bars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {statsData.map((stat: any, idx: any) => (
            <div key={idx} className="relative group">
              {/* Thin rectangular card */}
              <div
                className={`relative flex items-center justify-between overflow-hidden rounded-xl bg-white border border-gray-200 p-4
                shadow-md shadow-gray-200/20 backdrop-blur-sm
                group-hover:shadow-lg group-hover:shadow-cyan-100/20 transition-all duration-300`}
              >
                {/* Left: Icon + Title */}
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl text-cyan-600 shadow-sm ${stat.accent}/20`}>
                    {stat.icon}
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xs font-medium text-black">{stat.title}</p>
                    <div className="mt-1 w-12 h-1 rounded-full bg-gradient-to-r from-cyan-700 to-blue-500 opacity-40" />
                  </div>
                </div>

                {/* Right: Value + Change */}
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-lg shadow-black/5">
              <div className="flex items-center justify-between mb-4">
                <h2 style={{ fontFamily: "'Baloo 2', cursive" }} className="text-xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Recent Activity
                </h2>
                <button className="text-sm font-medium text-cyan-600 hover:text-cyan-700 flex items-center gap-2">
                  See All
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-4">
                {[
                  { id: 1, user: "TechCorp Inc.", action: "signed contract", time: "10 min ago", icon: <CheckCircle className="h-4 w-4 text-green-600" /> },
                  { id: 2, user: "Sarah Johnson", action: "requested proposal", time: "25 min ago", icon: <FileText className="h-4 w-4 text-blue-600" /> },
                ].map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        {activity.icon}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          <span className="font-semibold">{activity.user}</span> {activity.action}
                        </p>
                        <p className="text-sm text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/*Clients */}
            <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-lg shadow-black/5">
              <div className="flex items-center justify-between ">
                <div>
                  <h2 style={{ fontFamily: "'Baloo 2', cursive" }} className="text-xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Active Projects
                  </h2>
                  <p className="text-sm text-gray-600 mb-3">Track ongoing initiatives and progress</p>                </div>

                <button
                  className="text-sm font-medium text-cyan-600 hover:text-cyan-700 flex items-center gap-2"
                >
                  View all
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              {[
                {
                  id: 1,
                  title: "Parent-Teacher Meeting",
                  date: "28 Feb",
                  time: "9AM-3PM",
                  type: "ptm",
                  icon: <Users className="h-4 w-4 text-white" />
                },

              ].map((event, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between  p-3 rounded-xl border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 text-lg sm:text-xl bg-transparent rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent flex items-center justify-center font-semibold shadow-md">
                      {event.date.split(' ')[0]}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-gray-900 text-sm">{event.title}</span>
                      <span className="text-xs text-gray-500">
                        {event.date} • {event.time}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-cyan-600 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Desktop Only */}
          <div className="space-y-8">
            {/* Dates Upcoming */}
            <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-lg shadow-black/5">
              <div className="flex items-center justify-between ">
                <div>
                  <h2 style={{ fontFamily: "'Baloo 2', cursive" }} className="text-xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Upcoming Dates
                  </h2>
                  <p className="text-sm text-gray-600 mb-3">Stay informed</p>
                </div>

                <button
                  className="text-sm font-medium text-cyan-600 hover:text-cyan-700 flex items-center gap-2"
                >
                  View all
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              {[
                {
                  id: 1,
                  title: "Parent-Teacher Meeting",
                  date: "28 Feb",
                  time: "9AM-3PM",
                  type: "ptm",
                  icon: <Users className="h-4 w-4 text-white" />
                },

              ].map((event, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between  px-3 py-2 rounded-xl border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 text-lg sm:text-xl bg-transparent rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent flex items-center justify-center font-semibold shadow-md">
                      {event.date.split(' ')[0]}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-gray-900 text-sm">{event.title}</span>
                      <span className="text-xs text-gray-500">
                        {event.date} • {event.time}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-cyan-600 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
            {/*Clients */}
            <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-lg shadow-black/5">
              <div className="flex items-center justify-between ">
                <div>
                  <h2 style={{ fontFamily: "'Baloo 2', cursive" }} className="text-xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Trusted Partners
                  </h2>
                  <p className="text-sm text-gray-600 mb-3">Innovators who choose our platform</p>
                </div>

                <button
                  className="text-sm font-medium text-cyan-600 hover:text-cyan-700 flex items-center gap-2"
                >
                  View all
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              {[
                {
                  id: 1,
                  title: "Parent-Teacher Meeting",
                  date: "28 Feb",
                  time: "9AM-3PM",
                  type: "ptm",
                  icon: <Users className="h-4 w-4 text-white" />
                },

              ].map((event, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between px-3 py-2 rounded-xl border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 text-lg sm:text-xl bg-transparent rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent flex items-center justify-center font-semibold shadow-md">
                      {event.date.split(' ')[0]}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-gray-900 text-sm">{event.title}</span>
                      <span className="text-xs text-gray-500">
                        {event.date} • {event.time}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-cyan-600 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
            {/*Clients */}
            <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-lg shadow-black/5">
              <div className="flex items-center justify-between ">
                <div>
                  <h2 style={{ fontFamily: "'Baloo 2', cursive" }} className="text-xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Hot Leads
                  </h2>
                  <p className="text-sm text-gray-600 mb-3">High-priority leads needing attention</p>
                </div>

                <button
                  className="text-sm font-medium text-cyan-600 hover:text-cyan-700 flex items-center gap-2"
                >
                  View all
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              {[
                {
                  id: 1,
                  title: "Parent-Teacher Meeting",
                  date: "28 Feb",
                  time: "9AM-3PM",
                  type: "ptm",
                  icon: <Users className="h-4 w-4 text-white" />
                },

              ].map((event, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between px-3 py-2 rounded-xl border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 text-lg sm:text-xl bg-transparent rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent flex items-center justify-center font-semibold shadow-md">
                      {event.date.split(' ')[0]}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-gray-900 text-sm">{event.title}</span>
                      <span className="text-xs text-gray-500">
                        {event.date} • {event.time}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-cyan-600 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main >
    </div>
  )
}