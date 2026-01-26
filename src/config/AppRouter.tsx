// AppRouter.tsx
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ViewClientsPage from "../pages/ViewClientsPage";
import AddClientPage from "../pages/AddClientPage";
import ViewClient from "../pages/ViewClient";
import ViewLeads from "../pages/ViewLeads";
import AddLead from "../pages/AddLead";
import ViewLead from "../pages/ViewLead";
import ViewProjects from "../pages/ViewProjects";
import AddProject from "../pages/AddProject";
import ViewProject from "../pages/ViewProject";
import Dashboard from "../pages/Dashboard";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";

export default function AppRouter() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Pages that should NOT have sidebar
  const pagesWithoutSidebar = [
    "/",
    "/about",
    "/auth/login", 
    "/auth/signup",
  ];

  const shouldShowSidebar = !pagesWithoutSidebar.some(route => 
    location.pathname === route || location.pathname.startsWith(route)
  );

  // Auto-close sidebar on mobile when navigating
  useEffect(() => {
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  }, [location.pathname]);

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed md:relative z-50 h-full transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:block
      `}>
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto transition-all duration-300">
        {/* Mobile Header with Menu Button */}
        {shouldShowSidebar && (
          <div className="md:hidden sticky top-0 z-30 bg-white/80 backdrop-blur-sm border-b border-gray-200">
            <div className="flex items-center justify-between p-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Page Content */}
        <div className="p-4 md:p-6 lg:p-8">
          <Routes>
            {/* Public Pages without Sidebar */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signup" element={<Signup />} />

            {/* Protected Pages with Sidebar */}
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* Clients */}
            <Route path="/clients" element={<ViewClientsPage />} />
            <Route path="/clients/add" element={<AddClientPage />} />
            <Route path="/clients/:clientId" element={<ViewClient />} />

            {/* Leads */}
            <Route path="/leads" element={<ViewLeads />} />
            <Route path="/leads/add" element={<AddLead />} />
            <Route path="/leads/:leadId" element={<ViewLead />} />

            {/* Projects */}
            <Route path="/projects" element={<ViewProjects />} />
            <Route path="/projects/add" element={<AddProject />} />
            <Route path="/projects/:projectId" element={<ViewProject />} />

            {/* Additional routes */}
            <Route path="/calendar" element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📅</div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Calendar</h2>
                  <p className="text-gray-600">Coming Soon</p>
                </div>
              </div>
            } />
            
            <Route path="/reports" element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Reports & Analytics</h2>
                  <p className="text-gray-600">Coming Soon</p>
                </div>
              </div>
            } />
            
            <Route path="/documents" element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📁</div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Documents</h2>
                  <p className="text-gray-600">Coming Soon</p>
                </div>
              </div>
            } />
            
            <Route path="/settings" element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">⚙️</div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Settings</h2>
                  <p className="text-gray-600">Coming Soon</p>
                </div>
              </div>
            } />
            
            <Route path="/help" element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">❓</div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Help & Support</h2>
                  <p className="text-gray-600">Coming Soon</p>
                </div>
              </div>
            } />
            
            <Route path="/notifications" element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔔</div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Notifications</h2>
                  <p className="text-gray-600">Coming Soon</p>
                </div>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </div>
  );
}