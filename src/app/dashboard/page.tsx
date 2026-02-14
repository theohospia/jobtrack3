"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  Settings,
  EyeOff,
  Heart,
  Eye,
  Lock,
} from "lucide-react";

const collections = [
  {
    id: 1,
    title: "Reduced price",
    locked: true,
    icon: "database",
  },
  {
    id: 2,
    title: "Profitable SaaS",
    locked: false,
    icon: "chart",
  },
  {
    id: 3,
    title: "Recast financials",
    locked: false,
    icon: "target",
  },
  {
    id: 4,
    title: "Under M&A advisory",
    locked: false,
    icon: "handshake",
  },
  {
    id: 5,
    title: "Established startups",
    locked: false,
    icon: "rocket",
  },
];

const basedOnCriteria = [
  {
    id: 1,
    type: "SaaS",
    title: "AI dubbing platform to translate, dub and publish and any videos in any language.",
    ttmRevenue: "$26k",
    ttmProfit: "$17k",
    askingPrice: "$50k",
  },
  {
    id: 2,
    type: "SaaS",
    title: "Turnkey AI social media content SaaS built for scale – run lean, grow fast, no devs needed",
    ttmRevenue: "$127k",
    ttmProfit: "$36k",
    askingPrice: "$40k",
  },
  {
    id: 3,
    type: "SaaS",
    title: "AI SaaS that turns ideas and long-form content into viral-ready short videos—fast",
    ttmRevenue: "$1k",
    ttmProfit: "$945",
    askingPrice: "$10k",
  },
  {
    id: 4,
    type: "SaaS",
    title: "Photo editing and investment tracking platform for real estate professionals",
    ttmRevenue: "$0",
    ttmProfit: "$0",
    askingPrice: "$0",
  },
];

const startupsForYou = [
  {
    id: 1,
    type: "SaaS",
    title: "$200K TTM Profit, 5K+ Customers B2B platform",
    ttmRevenue: "$252k",
    ttmProfit: "$199k",
    askingPrice: "$179k",
  },
  {
    id: 2,
    type: "Ecommerce",
    title: "Shopify Dropshipping Lighting Brand US & Europe — $70k Profit TTM on $118k TTM Rev, 60% Growth",
    ttmRevenue: "$118k",
    ttmProfit: "$70k",
    askingPrice: "$49k",
  },
  {
    id: 3,
    type: "SaaS",
    title: "Tool that monetizes Telegram, Discord, or WhatsApp groups and communities in seconds",
    ttmRevenue: "$730k",
    ttmProfit: "$710k",
    askingPrice: "$4.1M",
  },
  {
    id: 4,
    type: "SaaS",
    title: "AI Text & Photo enhancement tool for photographers",
    ttmRevenue: "$200k",
    ttmProfit: "$145k",
    askingPrice: "$580k",
  },
];

function CollectionIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "database":
      return (
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7m0 0c0 2.21-3.582 4-8 4s-8-1.79-8-4m0 0C4 4.79 7.582 3 12 3s8 1.79 8 4" />
        </svg>
      );
    case "chart":
      return (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      );
    case "target":
      return (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case "handshake":
      return (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "rocket":
      return (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    default:
      return null;
  }
}

function ListingCard({ listing }: any) {
  return (
    <Card className="p-4 border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-xs font-medium text-gray-700">{listing.type}</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-1 text-gray-400 hover:text-gray-600">
            <EyeOff className="w-4 h-4" />
          </button>
          <button className="p-1 text-gray-400 hover:text-red-500">
            <Heart className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <p className="text-sm text-gray-800 mb-4 line-clamp-2 font-medium">{listing.title}</p>
      
      <div className="grid grid-cols-3 gap-3 pt-3 border-t border-gray-100">
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">TTM Revenue</p>
          <p className="text-sm font-bold text-gray-900 mt-1">{listing.ttmRevenue}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">TTM Profit</p>
          <p className="text-sm font-bold text-gray-900 mt-1">{listing.ttmProfit}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Asking Price</p>
          <p className="text-sm font-bold text-gray-900 mt-1">{listing.askingPrice}</p>
        </div>
      </div>
    </Card>
  );
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("browse");

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-12">
              <Link href="/" className="flex items-center gap-2">
                <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
                  <path d="M20 4L4 20L20 36L36 20L20 4Z" fill="#4f5dd3" />
                  <path d="M20 10L10 20L20 30L30 20L20 10Z" fill="#6b78e8" />
                </svg>
                <span className="text-lg font-bold text-gray-900">acquire</span>
              </Link>

              <nav className="flex items-center gap-8">
                <Link href="/dashboard" className="text-blue-600 font-medium">
                  Listings
                </Link>
                <Link href="/dashboard/deals" className="text-gray-700 hover:text-gray-900 font-medium">
                  My deals
                </Link>
                <Link href="/dashboard/messages" className="text-gray-700 hover:text-gray-900 font-medium">
                  Inbox
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Need help?</span>
              </div>

              <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                Upgrade
              </Button>

              <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-blue-300 flex items-center justify-center text-sm font-bold text-blue-600">
                V
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Tabs */}
        <div className="flex items-center gap-8 border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab("browse")}
            className={`pb-3 font-medium transition-colors ${
              activeTab === "browse"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Browse
          </button>
          <button
            onClick={() => setActiveTab("all")}
            className={`pb-3 font-medium transition-colors ${
              activeTab === "all"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            All listings
          </button>
          <button
            onClick={() => setActiveTab("ai")}
            className={`pb-3 font-medium transition-colors ${
              activeTab === "ai"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            AI Agent
          </button>
        </div>

        {/* Collections */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Collections</h2>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-400">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4">
            {collections.map((collection) => (
              <Card
                key={collection.id}
                className={`p-5 cursor-pointer transition-all ${
                  collection.locked
                    ? "bg-gray-50 border-gray-200"
                    : "bg-white border-gray-200 hover:border-blue-300 hover:shadow-sm"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <CollectionIcon icon={collection.icon} />
                  {collection.locked && (
                    <div className="flex items-center gap-1 px-2 py-1 bg-blue-50 rounded-full">
                      <Lock className="w-3 h-3 text-blue-600" />
                      <span className="text-xs font-medium text-blue-600">Upgrade to unlock</span>
                    </div>
                  )}
                </div>
                <h3 className={`font-semibold ${collection.locked ? "text-gray-400" : "text-gray-900"}`}>
                  {collection.title}
                </h3>
              </Card>
            ))}
          </div>
        </section>

        {/* Based on your criteria */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Based on your criteria</h2>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="flex items-center gap-2 text-gray-700">
                <Settings className="w-4 h-4" />
                Criteria
              </Button>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-400">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {basedOnCriteria.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </section>

        {/* Startups for you */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Startups for you</h2>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-400">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {startupsForYou.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
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

export default function DashboardPage() {
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
                <Link href="/dashboard" className="text-[#4f5dd3] font-medium">
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
