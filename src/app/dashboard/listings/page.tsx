"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  Settings2,
  Eye,
  EyeOff,
  Heart,
  Lock,
  TrendingUp,
  DollarSign,
  Briefcase,
  Clock,
  Users,
  BarChart3,
  Layers,
} from "lucide-react";

const collections = [
  {
    id: 1,
    title: "Reduced price",
    icon: "coins",
    locked: true,
    color: "text-orange-500",
  },
  {
    id: 2,
    title: "Profitable SaaS",
    icon: "chart",
    locked: false,
    color: "text-[#4f5dd3]",
  },
  {
    id: 3,
    title: "Recast financials",
    icon: "dollar",
    locked: false,
    color: "text-[#4f5dd3]",
  },
  {
    id: 4,
    title: "Under M&A advisory",
    icon: "briefcase",
    locked: false,
    color: "text-[#4f5dd3]",
  },
  {
    id: 5,
    title: "Established startups",
    icon: "clock",
    locked: false,
    color: "text-[#4f5dd3]",
  },
];

const listings = [
  {
    id: 1,
    type: "SaaS",
    title: "AI dubbing platform to translate, dub and publish and any videos in any language.",
    metrics: {
      ttmRevenue: "$245K",
      ttmProfit: "$89K",
      askingPrice: "$420K",
      multiple: "4.7x",
    },
  },
  {
    id: 2,
    type: "SaaS",
    title: "Turnkey AI social media content SaaS built for scale – run lean, grow fast, no devs needed",
    metrics: {
      ttmRevenue: "$180K",
      ttmProfit: "$65K",
      askingPrice: "$350K",
      multiple: "5.4x",
    },
  },
  {
    id: 3,
    type: "SaaS",
    title: "AI SaaS that turns ideas and long-form content into viral-ready short videos—fast",
    metrics: {
      ttmRevenue: "$320K",
      ttmProfit: "$145K",
      askingPrice: "$580K",
      multiple: "4.0x",
    },
  },
  {
    id: 4,
    type: "SaaS",
    title: "Photo editing and investment tracking platform for real estate professionals",
    metrics: {
      ttmRevenue: "$156K",
      ttmProfit: "$72K",
      askingPrice: "$290K",
      multiple: "4.0x",
    },
  },
  {
    id: 5,
    type: "Ecommerce",
    title: "Premium subscription box service for outdoor enthusiasts with 15k active subscribers",
    metrics: {
      ttmRevenue: "$890K",
      ttmProfit: "$210K",
      askingPrice: "$850K",
      multiple: "4.0x",
    },
  },
  {
    id: 6,
    type: "Agency",
    title: "Full-service B2B marketing agency with recurring revenue and established client base",
    metrics: {
      ttmRevenue: "$420K",
      ttmProfit: "$185K",
      askingPrice: "$520K",
      multiple: "2.8x",
    },
  },
];

function CollectionIcon({ type, className }: { type: string; className?: string }) {
  switch (type) {
    case "coins":
      return (
        <div className={`relative ${className}`}>
          <div className="flex flex-col items-center">
            <div className="w-8 h-2 bg-yellow-400 rounded-sm mb-0.5" />
            <div className="w-10 h-2 bg-yellow-500 rounded-sm mb-0.5" />
            <div className="w-12 h-2 bg-yellow-600 rounded-sm" />
          </div>
        </div>
      );
    case "chart":
      return <BarChart3 className={className} />;
    case "dollar":
      return (
        <div className={`relative ${className}`}>
          <div className="w-10 h-10 border-2 border-current rounded-lg flex items-center justify-center">
            <DollarSign className="h-5 w-5" />
          </div>
        </div>
      );
    case "briefcase":
      return (
        <div className={`relative ${className}`}>
          <Briefcase className="h-8 w-8" />
          <div className="absolute -top-1 -right-1 w-4 h-4 border-2 border-current rounded-full flex items-center justify-center">
            <TrendingUp className="h-2 w-2" />
          </div>
        </div>
      );
    case "clock":
      return (
        <div className={`relative ${className}`}>
          <Clock className="h-8 w-8" />
          <div className="absolute -top-1 -right-1 text-xs font-bold">3+</div>
        </div>
      );
    default:
      return <Layers className={className} />;
  }
}

function SaaSIcon() {
  return (
    <div className="w-10 h-10 bg-[#f0f2ff] rounded-lg flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#4f5dd3]" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    </div>
  );
}

export default function ListingsPage() {
  const [activeTab, setActiveTab] = useState("browse");

  return (
    <div className="min-h-screen bg-white">
      {/* App Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Nav */}
            <div className="flex items-center gap-10">
              <Link href="/" className="flex items-center gap-2">
                <svg className="h-8 w-8" viewBox="0 0 40 40" fill="none">
                  <path d="M20 4L4 20L20 36L36 20L20 4Z" fill="#4f5dd3" />
                  <path d="M20 10L10 20L20 30L30 20L20 10Z" fill="#6b78e8" />
                </svg>
                <span className="text-[#252553] font-bold text-xl">acquire</span>
              </Link>

              <nav className="flex items-center gap-8">
                <Link href="/dashboard/listings" className="text-[#4f5dd3] font-medium">
                  Listings
                </Link>
                <Link href="/dashboard/deals" className="text-gray-600 hover:text-[#252553] font-medium">
                  My deals
                </Link>
                <Link href="/dashboard/messages" className="text-gray-600 hover:text-[#252553] font-medium">
                  Inbox
                </Link>
              </nav>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
              {/* Avatar group */}
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
                <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white" />
                <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white" />
              </div>

              <button type="button" className="text-gray-600 hover:text-[#252553] font-medium flex items-center gap-1">
                Need help?
              </button>

              <Button variant="ghost" className="text-[#4f5dd3] font-medium">
                Upgrade
              </Button>

              <div className="w-10 h-10 rounded-full bg-[#f0f2ff] border-2 border-[#4f5dd3] flex items-center justify-center">
                <span className="text-[#4f5dd3] font-semibold">V</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Tabs */}
        <div className="flex items-center gap-6 border-b border-gray-200 mb-8">
          <button
            type="button"
            onClick={() => setActiveTab("browse")}
            className={`pb-4 font-medium border-b-2 transition-colors ${
              activeTab === "browse"
                ? "text-[#252553] border-[#4f5dd3]"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
          >
            Browse
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`pb-4 font-medium border-b-2 transition-colors ${
              activeTab === "all"
                ? "text-[#252553] border-[#4f5dd3]"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
          >
            All listings
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("ai")}
            className={`pb-4 font-medium border-b-2 transition-colors ${
              activeTab === "ai"
                ? "text-[#252553] border-[#4f5dd3]"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
          >
            AI Agent
          </button>
        </div>

        {/* Collections */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-[#252553]">Collections</h2>
            <div className="flex items-center gap-2">
              <button type="button" className="p-2 rounded-full hover:bg-gray-100 text-gray-400">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button type="button" className="p-2 rounded-full hover:bg-gray-100 text-gray-600">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4">
            {collections.map((collection) => (
              <Card
                key={collection.id}
                className={`p-6 cursor-pointer hover:shadow-md transition-shadow border-2 ${
                  collection.locked ? "border-dashed border-gray-300 bg-gray-50" : "border-gray-200 hover:border-[#4f5dd3]"
                }`}
              >
                <div className="mb-4">
                  <CollectionIcon type={collection.icon} className={`h-10 w-10 ${collection.color}`} />
                </div>
                {collection.locked && (
                  <div className="inline-flex items-center gap-1 px-2 py-1 bg-[#f0f2ff] rounded-full text-xs text-[#4f5dd3] font-medium mb-2">
                    <Lock className="h-3 w-3" />
                    Upgrade to unlock
                  </div>
                )}
                <h3 className={`font-medium ${collection.locked ? "text-orange-500" : "text-[#252553]"}`}>
                  {collection.title}
                </h3>
              </Card>
            ))}
          </div>
        </section>

        {/* Based on your criteria */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold text-[#252553]">Based on your criteria</h2>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="flex items-center gap-2">
                <Settings2 className="h-4 w-4" />
                Criteria
              </Button>
              <div className="flex items-center gap-1">
                <button type="button" className="p-2 rounded-full hover:bg-gray-100 text-gray-400">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button type="button" className="p-2 rounded-full hover:bg-gray-100 text-gray-600">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {listings.map((listing) => (
              <Card
                key={listing.id}
                className="p-5 hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-[#4f5dd3]"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <SaaSIcon />
                    <span className="font-medium text-[#252553]">{listing.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button type="button" className="p-1 text-gray-400 hover:text-gray-600">
                      <EyeOff className="h-5 w-5" />
                    </button>
                    <button type="button" className="p-1 text-gray-400 hover:text-red-500">
                      <Heart className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Title */}
                <p className="text-[#4f5dd3] font-medium leading-snug mb-4 line-clamp-3">
                  {listing.title}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">TTM Revenue</p>
                    <p className="font-semibold text-[#252553]">{listing.metrics.ttmRevenue}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">TTM Profit</p>
                    <p className="font-semibold text-[#252553]">{listing.metrics.ttmProfit}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Asking Price</p>
                    <p className="font-semibold text-[#252553]">{listing.metrics.askingPrice}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Multiple</p>
                    <p className="font-semibold text-[#252553]">{listing.metrics.multiple}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* More sections placeholder */}
        <section className="mt-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold text-[#252553]">Recently added</h2>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
            <div className="flex items-center gap-1">
              <button type="button" className="p-2 rounded-full hover:bg-gray-100 text-gray-400">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button type="button" className="p-2 rounded-full hover:bg-gray-100 text-gray-600">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {listings.slice(0, 4).map((listing) => (
              <Card
                key={listing.id}
                className="p-5 hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-[#4f5dd3]"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <SaaSIcon />
                    <span className="font-medium text-[#252553]">{listing.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button type="button" className="p-1 text-gray-400 hover:text-gray-600">
                      <EyeOff className="h-5 w-5" />
                    </button>
                    <button type="button" className="p-1 text-gray-400 hover:text-red-500">
                      <Heart className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Title */}
                <p className="text-[#4f5dd3] font-medium leading-snug mb-4 line-clamp-3">
                  {listing.title}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">TTM Revenue</p>
                    <p className="font-semibold text-[#252553]">{listing.metrics.ttmRevenue}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">TTM Profit</p>
                    <p className="font-semibold text-[#252553]">{listing.metrics.ttmProfit}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Asking Price</p>
                    <p className="font-semibold text-[#252553]">{listing.metrics.askingPrice}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Multiple</p>
                    <p className="font-semibold text-[#252553]">{listing.metrics.multiple}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
