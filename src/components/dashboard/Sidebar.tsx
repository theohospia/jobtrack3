"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Search,
  FileText,
  MessageSquare,
  Bell,
  Settings,
  HelpCircle,
  LogOut,
  TrendingUp,
  Users,
  Star,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Browse Listings", href: "/dashboard/listings", icon: Search },
  { name: "My Deals", href: "/dashboard/deals", icon: FileText },
  { name: "Saved", href: "/dashboard/saved", icon: Star },
  { name: "Messages", href: "/dashboard/messages", icon: MessageSquare, badge: 3 },
  { name: "Analytics", href: "/dashboard/analytics", icon: TrendingUp },
];

const secondaryNav = [
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Help Center", href: "/dashboard/help", icon: HelpCircle },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#252553] flex flex-col z-40">
      {/* Logo */}
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2">
          <svg className="h-8 w-8" viewBox="0 0 40 40" fill="none">
            <path d="M20 4L4 20L20 36L36 20L20 4Z" fill="#4f5dd3" />
            <path d="M20 10L10 20L20 30L30 20L20 10Z" fill="#6b78e8" />
          </svg>
          <span className="text-white font-bold text-xl">
            acquire<span className="text-gray-400 font-normal text-sm">.com</span>
          </span>
        </Link>
      </div>

      {/* Main navigation */}
      <nav className="flex-1 px-4 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? "bg-[#4f5dd3] text-white"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.name}</span>
              {item.badge && (
                <span className="ml-auto bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Secondary navigation */}
      <div className="px-4 pb-4 space-y-1 border-t border-white/10 pt-4">
        {secondaryNav.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? "bg-[#4f5dd3] text-white"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>

      {/* User section */}
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="w-10 h-10 bg-[#4f5dd3] rounded-full flex items-center justify-center">
            <Users className="h-5 w-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-white font-medium truncate">John Doe</div>
            <div className="text-white/50 text-sm truncate">Buyer Account</div>
          </div>
          <button type="button" className="text-white/50 hover:text-white transition-colors">
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
