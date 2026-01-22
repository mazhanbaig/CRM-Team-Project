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



  return (
    <div  className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      
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
                  <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-cyan-400 animate-pulse" />
                </div>

                {/* Organization Text */}
                <div className="relative">
                  <h1 style={{ fontFamily: "'Baloo 2', cursive" }} className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent bg-[length:200%] animate-gradient">
                    {"Zyra Academy"}
                  </h1>
                  <div className="flex items-center gap-3 -mt-3 -ml-7">
                    <Shield className="h-4 w-4 text-cyan-500" />
                    <p className="text-gray-600 text-sm relative top-[6px]">
                      Welcome, <span className="font-semibold text-gray-900">{"Administrator"}</span>
                    </p>
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                    <span className="text-xs font-medium px-2 py-1 bg-cyan-100 text-cyan-700 rounded-xl">
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
          {[].map((stat: any, idx: any) => (
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
            {/* Quick Actions - Moved to top of left column */}
            <div className="bg-white rounded-xl border border-gray-100 px-6 pt-3 pb-4 shadow-lg shadow-black/5">
              <div className="flex items-center justify-between mb-4">
                <h2 style={{ fontFamily: "'Baloo 2', cursive" }} className="text-xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Today's Activity
                </h2>
                <button className="text-sm font-medium text-cyan-600 hover:text-cyan-700 flex items-center gap-2">
                  View All
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="grid grid-col-2 sm:grid-cols-3 items-center gap-2">
                {[].map((action: any, index: number) => (
                  <div
                    key={index}
                    onClick={action.onClick}
                    className="p-2 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${action.bgColor}`}>
                        <div className={action.textColor}>
                          {action.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 truncate">{action.label}</h4>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{action.description}</span>
                          <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Desktop Only */}
          <div className="space-y-8">
            {/* Upcoming Events */}
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
                {
                  id: 2,
                  title: "Annual Science Fair",
                  date: "15 Mar",
                  time: "10AM-4PM",
                  type: "fair",
                  icon: <Award className="h-4 w-4 text-white" />
                },
                {
                  id: 3,
                  title: "Faculty Development",
                  date: "22 Mar",
                  time: "2PM-5PM",
                  type: "workshop",
                  icon: <GraduationCap className="h-4 w-4 text-white" />
                }
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
        </div>
      </main >
    </div>
  )
}


// Helper functions (add these inside your dashboard component)
const getPriorityColor = (priority: string, type: 'border' | 'bg' = 'border') => {
  const colors = {
    critical: type === 'border' ? 'border-red-200 bg-red-50 text-red-700' : 'bg-red-500',
    high: type === 'border' ? 'border-amber-200 bg-amber-50 text-amber-700' : 'bg-amber-500',
    normal: type === 'border' ? 'border-blue-200 bg-blue-50 text-blue-700' : 'bg-blue-500',
    low: type === 'border' ? 'border-slate-200 bg-slate-50 text-slate-700' : 'bg-slate-500',
  };
  return colors[priority as keyof typeof colors] || colors.normal;
};

const getTargetColor = (target: string) => {
  const colors = {
    students: 'border-teal-200 bg-teal-50 text-teal-700',
    teachers: 'border-violet-200 bg-violet-50 text-violet-700',
    'section-Head': 'border-pink-200 bg-pink-50 text-pink-700',
    all: 'border-cyan-200 bg-cyan-50 text-cyan-700',
  };
  return colors[target as keyof typeof colors] || colors.all;
};