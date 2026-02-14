"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  TrendingDown,
  Eye,
  MessageSquare,
  FileText,
  DollarSign,
  ArrowRight,
  Star,
  Clock,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    title: "Active Listings Viewed",
    value: "247",
    change: "+12%",
    trend: "up",
    icon: Eye,
  },
  {
    title: "Messages",
    value: "18",
    change: "+5",
    trend: "up",
    icon: MessageSquare,
  },
  {
    title: "Active Deals",
    value: "3",
    change: "0",
    trend: "neutral",
    icon: FileText,
  },
  {
    title: "Saved Listings",
    value: "12",
    change: "+2",
    trend: "up",
    icon: Star,
  },
];

const recentListings = [
  {
    id: 1,
    title: "AI-Powered Analytics SaaS",
    type: "SaaS",
    price: "$1.2M",
    mrr: "$45k",
    growth: "+22%",
    status: "new",
  },
  {
    id: 2,
    title: "E-commerce Subscription Box",
    type: "Ecommerce",
    price: "$850k",
    mrr: "$32k",
    growth: "+15%",
    status: "trending",
  },
  {
    id: 3,
    title: "B2B Marketing Agency",
    type: "Agency",
    price: "$420k",
    mrr: "$28k",
    growth: "+8%",
    status: "new",
  },
  {
    id: 4,
    title: "Mobile Fitness App",
    type: "Mobile App",
    price: "$2.1M",
    mrr: "$75k",
    growth: "+35%",
    status: "hot",
  },
];

const activeDeals = [
  {
    id: 1,
    title: "Content Management Platform",
    stage: "Due Diligence",
    progress: 65,
    lastActivity: "2 hours ago",
  },
  {
    id: 2,
    title: "Newsletter Business",
    stage: "LOI Signed",
    progress: 40,
    lastActivity: "1 day ago",
  },
  {
    id: 3,
    title: "Developer Tools SaaS",
    stage: "Initial Review",
    progress: 15,
    lastActivity: "3 days ago",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#252553]">Welcome back, John</h1>
          <p className="text-gray-600">Here's what's happening with your acquisitions</p>
        </div>
        <Link href="/dashboard/listings">
          <Button className="bg-[#4f5dd3] hover:bg-[#3d4bc1]">
            Browse Listings <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-3xl font-bold text-[#252553] mt-1">{stat.value}</p>
                <div className="flex items-center gap-1 mt-2">
                  {stat.trend === "up" && (
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  )}
                  {stat.trend === "down" && (
                    <TrendingDown className="h-4 w-4 text-red-500" />
                  )}
                  <span
                    className={`text-sm ${
                      stat.trend === "up"
                        ? "text-green-500"
                        : stat.trend === "down"
                          ? "text-red-500"
                          : "text-gray-500"
                    }`}
                  >
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-400">this week</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-[#f0f2ff] rounded-xl flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-[#4f5dd3]" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent listings */}
        <div className="lg:col-span-2">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-[#252553]">Recommended Listings</h2>
              <Link href="/dashboard/listings" className="text-[#4f5dd3] text-sm font-medium hover:underline">
                View all
              </Link>
            </div>
            <div className="space-y-4">
              {recentListings.map((listing) => (
                <div
                  key={listing.id}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <div className="w-12 h-12 bg-[#252553] rounded-xl flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-[#252553] truncate">{listing.title}</h3>
                      {listing.status === "new" && (
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100">New</Badge>
                      )}
                      {listing.status === "hot" && (
                        <Badge className="bg-red-100 text-red-700 hover:bg-red-100">Hot</Badge>
                      )}
                      {listing.status === "trending" && (
                        <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">Trending</Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{listing.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-[#252553]">{listing.price}</p>
                    <p className="text-sm text-gray-500">{listing.mrr} MRR</p>
                  </div>
                  <div className="text-right">
                    <p className="text-green-600 font-medium">{listing.growth}</p>
                    <p className="text-sm text-gray-400">growth</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Active deals */}
        <div>
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-[#252553]">Active Deals</h2>
              <Link href="/dashboard/deals" className="text-[#4f5dd3] text-sm font-medium hover:underline">
                View all
              </Link>
            </div>
            <div className="space-y-4">
              {activeDeals.map((deal) => (
                <div
                  key={deal.id}
                  className="p-4 border border-gray-200 rounded-xl hover:border-[#4f5dd3] transition-colors cursor-pointer"
                >
                  <h3 className="font-medium text-[#252553] mb-2">{deal.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="bg-[#f0f2ff] text-[#4f5dd3]">
                      {deal.stage}
                    </Badge>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div
                      className="bg-[#4f5dd3] h-2 rounded-full transition-all"
                      style={{ width: `${deal.progress}%` }}
                    />
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock className="h-3 w-3" />
                    {deal.lastActivity}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick tips */}
          <Card className="p-6 mt-6 bg-gradient-to-br from-[#252553] to-[#3a3a6e]">
            <h3 className="text-white font-semibold mb-2">Pro Tip</h3>
            <p className="text-white/70 text-sm mb-4">
              Set up instant alerts to get notified when new listings match your criteria.
            </p>
            <Button variant="secondary" size="sm" className="w-full">
              Set Up Alerts
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
