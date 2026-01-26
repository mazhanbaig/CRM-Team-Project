// Updated by Mubashir
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  UserPlus,
  FolderOpen,
  Calendar,
  FileText,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Home,
  Info,
  BellRing,
  HelpCircle,
  Shield,
  Zap,
  TrendingUp,
  MessageSquare,
  Package,
  Briefcase,
  CreditCard,
  Headphones,
  Sparkles,
  X,
  Rocket,
  CheckCircle,
  Clock,
  Mail,
  Cloud,
  Cpu,
  Smartphone,
  Lock,
  Star,
  Award,
  Coffee,
  Heart,
  Users as UsersIcon,
} from "lucide-react";

interface SidebarProps {
  onClose?: () => void;
}

interface SidebarItem {
  id: number;
  label: string;
  icon: React.ReactNode;
  path: string;
  badge?: string;
  subItems?: { label: string; path: string }[];
}

export default function Sidebar({ onClose }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);
  const location = useLocation();

  // Auto-expand submenu based on current route
  useEffect(() => {
    const currentPath = location.pathname;
    navItems.forEach((item) => {
      if (item.subItems?.some(sub => currentPath === sub.path || currentPath.startsWith(sub.path + '/'))) {
        setActiveSubMenu(item.id);
      }
    });
  }, [location.pathname]);

  const navItems: SidebarItem[] = [
    {
      id: 1,
      label: "Dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
      path: "/dashboard",
      badge: "New",
    },
    {
      id: 2,
      label: "Leads",
      icon: <UserPlus className="h-5 w-5" />,
      path: "/leads",
      subItems: [
        { label: "All Leads", path: "/leads" },
        { label: "Add New Lead", path: "/leads/add" },
        { label: "Hot Leads", path: "/leads?filter=hot" },
      ],
    },
    {
      id: 3,
      label: "Clients",
      icon: <Users className="h-5 w-5" />,
      path: "/clients",
      subItems: [
        { label: "All Clients", path: "/clients" },
        { label: "Add Client", path: "/clients/add" },
        { label: "VIP Clients", path: "/clients?filter=vip" },
      ],
    },
    {
      id: 4,
      label: "Projects",
      icon: <FolderOpen className="h-5 w-5" />,
      path: "/projects",
      badge: "5",
      subItems: [
        { label: "Active Projects", path: "/projects" },
        { label: "New Project", path: "/projects/add" },
        { label: "Completed", path: "/projects?status=completed" },
      ],
    },
    {
      id: 5,
      label: "Calendar",
      icon: <Calendar className="h-5 w-5" />,
      path: "/calendar",
    },
    {
      id: 6,
      label: "Analytics",
      icon: <TrendingUp className="h-5 w-5" />,
      path: "/analytics",
    },
    {
      id: 7,
      label: "Documents",
      icon: <FileText className="h-5 w-5" />,
      path: "/documents",
    },
    {
      id: 8,
      label: "Settings",
      icon: <Settings className="h-5 w-5" />,
      path: "/settings",
    },
  ];

  const bottomItems = [
    { label: "Help", icon: <HelpCircle className="h-5 w-5" />, path: "/help" },
    { label: "Notifications", icon: <BellRing className="h-5 w-5" />, path: "/notifications", badge: "3" },
  ];

  const toggleSubMenu = (id: number) => {
    setActiveSubMenu(activeSubMenu === id ? null : id);
  };

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const handleNavigation = () => {
    if (window.innerWidth < 768 && onClose) {
      onClose();
    }
  };

  return (
    <div
      className={`flex flex-col h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 border-r border-gray-200 transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Logo Section - Matches Dashboard Theme */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center gap-3">
              <div className="relative">
  
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <h1
                    style={{ fontFamily: "'Baloo 2', cursive" }}
                    className="text-2xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent"
                  >
                    Cliento
                  </h1>
                  <Sparkles className="h-4 w-4 text-cyan-500" />
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <p className="text-xs text-gray-500">Premium CRM</p>
                </div>
              </div>
            </div>
          )}
          {/* {collapsed && (
            <div className="relative mx-auto">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Shield className="h-6 w-6 text-white" />
              </div>
            </div>
          )} */}
          {/* agr rakhna ho to dheklena shield ka icon */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="hidden md:flex p-2 hover:bg-gray-100 rounded-lg transition-all duration-300 hover:rotate-180"
            >
              {collapsed ? (
                <ChevronRight className="h-5 w-5 text-gray-600" />
              ) : (
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              )}
            </button>
            <button
              onClick={onClose}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 px-4 py-6 overflow-y-auto">
        <nav className="space-y-2">
          {/* Quick Links - Matches Dashboard Style */}
          <div className={`px-3 mb-4 ${collapsed ? "hidden" : "block"}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200/50 mb-4">
              <Zap className="h-3 w-3 text-cyan-600" />
              <span className="text-xs font-semibold text-blue-700">
                Quick Links
              </span>
              <TrendingUp className="h-3 w-3 text-emerald-500" />
            </div>
          </div>

          {/* Home Link - Matches Landing Page Theme */}
          <NavLink
            to="/"
            onClick={handleNavigation}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative ${
                isActive
                  ? "bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-300 text-cyan-700 shadow-lg shadow-cyan-100/30"
                  : "text-gray-600 hover:text-cyan-600 hover:bg-gray-50"
              } ${collapsed ? "justify-center" : ""}`
            }
          >
            <div className="relative">
              <div className="p-1.5 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 group-hover:scale-110 transition-transform">
                <Home className="h-4 w-4" />
              </div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full border border-white"></div>
            </div>
            {!collapsed && (
              <div className="flex-1">
                <span className="font-medium">Home</span>
                <div className="mt-1 w-6 h-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-60"></div>
              </div>
            )}
            {isActive("/") && !collapsed && (
              <div className="absolute right-3">
                <div className="w-1.5 h-6 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></div>
              </div>
            )}
          </NavLink>

          {/* About Link */}
          <NavLink
            to="/about"
            onClick={handleNavigation}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative ${
                isActive
                  ? "bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-300 text-cyan-700 shadow-lg shadow-cyan-100/30"
                  : "text-gray-600 hover:text-cyan-600 hover:bg-gray-50"
              } ${collapsed ? "justify-center" : ""}`
            }
          >
            <div className="p-1.5 rounded-lg bg-gradient-to-r from-blue-500/10 to-indigo-500/10 group-hover:scale-110 transition-transform">
              <Info className="h-4 w-4" />
            </div>
            {!collapsed && (
              <div className="flex-1">
                <span className="font-medium">About</span>
                <div className="mt-1 w-6 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-60"></div>
              </div>
            )}
            {isActive("/about") && !collapsed && (
              <div className="absolute right-3">
                <div className="w-1.5 h-6 bg-gradient-to-b from-blue-400 to-indigo-400 rounded-full"></div>
              </div>
            )}
          </NavLink>

          {/* Divider */}
          <div className={`h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent ${collapsed ? "mx-4" : "mx-6"}`}></div>

          {/* Navigation Title */}
          <div className={`px-3 mb-2 ${collapsed ? "hidden" : "block"}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-200/50">
              <LayoutDashboard className="h-3 w-3 text-indigo-600" />
              <span className="text-xs font-semibold text-indigo-700">
                Main Navigation
              </span>
            </div>
          </div>

          {/* Main Navigation Items */}
          {navItems.map((item) => (
            <div key={item.id}>
              <NavLink
                to={item.path}
                onClick={() => {
                  if (!item.subItems) {
                    handleNavigation();
                  }
                  item.subItems && toggleSubMenu(item.id);
                }}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group relative ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-300 text-cyan-700 shadow-lg shadow-cyan-100/30"
                      : "text-gray-600 hover:text-cyan-600 hover:bg-gray-50"
                  } ${collapsed ? "justify-center" : ""}`
                }
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="p-1.5 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 group-hover:scale-110 transition-transform">
                      <div className="text-cyan-600 group-hover:text-cyan-700">
                        {item.icon}
                      </div>
                    </div>
                    {item.badge && !collapsed && (
                      <div className="absolute -top-2 -right-2">
                        <span className="text-[10px] font-bold px-1.5 py-0.5 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-full shadow-sm">
                          {item.badge}
                        </span>
                      </div>
                    )}
                  </div>
                  {!collapsed && (
                    <div className="flex-1">
                      <span className="font-medium">{item.label}</span>
                      <div className="mt-1 w-8 h-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-40"></div>
                    </div>
                  )}
                </div>
                {!collapsed && item.subItems && (
                  <ChevronRight
                    className={`h-4 w-4 transition-transform duration-300 ${
                      activeSubMenu === item.id ? "rotate-90 text-cyan-500" : "text-gray-400"
                    }`}
                  />
                )}
                {!collapsed && !item.subItems && isActive(item.path) && (
                  <div className="absolute right-3">
                    <div className="w-1.5 h-6 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></div>
                  </div>
                )}
              </NavLink>

              {/* Sub-items */}
              {!collapsed && activeSubMenu === item.id && item.subItems && (
                <div className="ml-10 mt-1 space-y-1 overflow-hidden animate-slide-down">
                  {item.subItems.map((subItem, index) => (
                    <NavLink
                      key={index}
                      to={subItem.path}
                      onClick={handleNavigation}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-all duration-200 group ${
                          isActive
                            ? "text-cyan-600 bg-gradient-to-r from-cyan-50/50 to-blue-50/50"
                            : "text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"
                        }`
                      }
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:scale-125 transition-transform"></div>
                      <span>{subItem.label}</span>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Support Section - Matches Landing Page Theme */}
        {!collapsed && (
          <div className="mt-8 mx-4 p-4 bg-gradient-to-r from-white to-cyan-50/30 rounded-xl border border-gray-200 shadow-lg shadow-black/5">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-sm">
                <Headphones className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Need Help?</p>
                <p className="text-xs text-gray-500">24/7 Support Available</p>
              </div>
            </div>
            <button className="w-full text-sm font-medium text-cyan-600 hover:text-cyan-700 transition-colors flex items-center justify-center gap-2 py-2 px-3 rounded-lg hover:bg-cyan-50">
              <MessageSquare className="h-4 w-4" />
              Contact Support
            </button>
          </div>
        )}
      </div>

      {/* Bottom Navigation & User Profile */}
      <div className="border-t border-gray-200 p-4 space-y-4">
        {/* Bottom Navigation Items */}
        <div className="space-y-1">
          {bottomItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={handleNavigation}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-300 text-cyan-700"
                    : "text-gray-600 hover:text-cyan-600 hover:bg-gray-50"
                } ${collapsed ? "justify-center" : ""}`
              }
            >
              <div className="relative">
                <div className="p-1.5 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
                  {item.icon}
                </div>
                {item.badge && !collapsed && (
                  <div className="absolute -top-2 -right-2">
                    <span className="text-[10px] font-bold px-1.5 py-0.5 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-full">
                      {item.badge}
                    </span>
                  </div>
                )}
              </div>
              {!collapsed && <span className="font-medium">{item.label}</span>}
            </NavLink>
          ))}
        </div>

        {/* User Profile - Matches Dashboard Theme */}
        <div className={`flex items-center gap-3 ${collapsed ? "justify-center" : ""}`}>
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/20">
              A
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full border-2 border-white"></div>
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-semibold text-gray-900 truncate">Administrator</p>
                <span className="text-xs font-medium px-1.5 py-0.5 bg-cyan-100 text-cyan-700 rounded-full">
                  Admin
                </span>
              </div>
              <p className="text-xs text-gray-500 truncate">admin@cliento.com</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-500">Online</span>
              </div>
            </div>
          )}
          {!collapsed && (
            <button 
              className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-300 hover:rotate-12"
              onClick={() => {
                // Handle logout
                console.log("Logout clicked");
              }}
            >
              <LogOut className="h-5 w-5 text-gray-500 hover:text-rose-500" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}