import {
  Users,
  Briefcase,
  TrendingUp,
  FileText,
  Calendar,
  Bell,
  Settings,
  Search,
  ChevronRight,
  Plus,
  MoreVertical
} from "lucide-react"

export default function Dashboard() {  // Changed from CleanDashboardUI to Dashboard
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome back</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border rounded-lg w-64"
                />
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Bell className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Stat Card 1 */}
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Clients</p>
                <h3 className="text-2xl font-bold mt-2">1,234</h3>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span className="text-sm text-green-600">+12% from last month</span>
            </div>
          </div>

          {/* Stat Card 2 */}
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Projects</p>
                <h3 className="text-2xl font-bold mt-2">48</h3>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <Briefcase className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span className="text-sm text-green-600">+8% from last month</span>
            </div>
          </div>

          {/* Stat Card 3 */}
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Revenue</p>
                <h3 className="text-2xl font-bold mt-2">$89,420</h3>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span className="text-sm text-green-600">+24% from last month</span>
            </div>
          </div>

          {/* Stat Card 4 */}
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Tasks</p>
                <h3 className="text-2xl font-bold mt-2">16</h3>
              </div>
              <div className="p-3 bg-amber-100 rounded-lg">
                <FileText className="h-6 w-6 text-amber-600" />
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <TrendingUp className="h-4 w-4 text-red-500" />
              <span className="text-sm text-red-600">-2% from last month</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Recent Activity */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Clients */}
            <div className="bg-white rounded-xl border shadow-sm">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Recent Clients</h2>
                  <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
                    View all <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                {/* Client Row 1 */}
                <div className="flex items-center justify-between py-3 border-b">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-blue-600">JD</span>
                    </div>
                    <div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-sm text-gray-600">john@example.com</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$2,500</p>
                    <p className="text-sm text-green-600">Active</p>
                  </div>
                </div>

                {/* Client Row 2 */}
                <div className="flex items-center justify-between py-3 border-b">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-green-600">SA</span>
                    </div>
                    <div>
                      <p className="font-medium">Sarah Adams</p>
                      <p className="text-sm text-gray-600">sarah@example.com</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$4,200</p>
                    <p className="text-sm text-green-600">Active</p>
                  </div>
                </div>

                {/* Client Row 3 */}
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-purple-600">MJ</span>
                    </div>
                    <div>
                      <p className="font-medium">Mike Johnson</p>
                      <p className="text-sm text-gray-600">mike@example.com</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$1,800</p>
                    <p className="text-sm text-gray-600">Pending</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="bg-white rounded-xl border shadow-sm">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Active Projects</h2>
                  <button className="flex items-center gap-2 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    <Plus className="h-4 w-4" /> Add Project
                  </button>
                </div>
              </div>
              <div className="p-6">
                {/* Project Card 1 */}
                <div className="border rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold">Website Redesign</h3>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-sm">
                        75%
                      </span>
                      <button>
                        <MoreVertical className="h-5 w-5 text-gray-400" />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Complete redesign of company website with modern UI/UX</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-2">
                        <div className="h-8 w-8 bg-blue-100 rounded-full border-2 border-white"></div>
                        <div className="h-8 w-8 bg-green-100 rounded-full border-2 border-white"></div>
                        <div className="h-8 w-8 bg-purple-100 rounded-full border-2 border-white"></div>
                      </div>
                      <span className="text-sm text-gray-500">Due: 15 Mar</span>
                    </div>
                    <span className="text-sm font-medium">$12,500</span>
                  </div>
                </div>

                {/* Project Card 2 */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold">Mobile App Development</h3>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-green-100 text-green-600 rounded text-sm">
                        45%
                      </span>
                      <button>
                        <MoreVertical className="h-5 w-5 text-gray-400" />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">iOS and Android app for customer management</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-2">
                        <div className="h-8 w-8 bg-amber-100 rounded-full border-2 border-white"></div>
                        <div className="h-8 w-8 bg-red-100 rounded-full border-2 border-white"></div>
                      </div>
                      <span className="text-sm text-gray-500">Due: 30 Apr</span>
                    </div>
                    <span className="text-sm font-medium">$25,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Calendar */}
            <div className="bg-white rounded-xl border shadow-sm">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Calendar</h2>
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <p className="text-2xl font-bold">March 2024</p>
                </div>
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                    <div key={i} className="text-center text-sm text-gray-500 font-medium">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 31 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-10 flex items-center justify-center rounded-lg text-sm ${i + 1 === 15
                        ? 'bg-blue-600 text-white'
                        : 'hover:bg-gray-100'
                        }`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl border shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold">Quick Actions</h2>
              </div>
              <div className="p-6 space-y-4">
                <button className="w-full flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="font-medium">Add New Client</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <FileText className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="font-medium">Create Invoice</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Briefcase className="h-5 w-5 text-purple-600" />
                  </div>
                  <span className="font-medium">New Project</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50">
                  <div className="p-2 bg-amber-100 rounded-lg">
                    <Bell className="h-5 w-5 text-amber-600" />
                  </div>
                  <span className="font-medium">Send Notification</span>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl border shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold">Recent Activity</h2>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <Users className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">New client added</p>
                    <p className="text-sm text-gray-600">John Doe was added to the system</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <FileText className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Invoice sent</p>
                    <p className="text-sm text-gray-600">Invoice #INV-2024-001 was sent</p>
                    <p className="text-xs text-gray-500">4 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <Briefcase className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium">Project updated</p>
                    <p className="text-sm text-gray-600">Website redesign progress updated to 75%</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}