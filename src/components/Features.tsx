"use client";

import { useState } from "react";
import { ArrowRight, Users, Building2, Shield, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const buyerFeatures = [
  "Evaluate web, customer, and financial metrics",
  "Build and send LOIs and APAs in minutes",
  "Get help to acquire with acquisition financing",
];

const sellerFeatures = [
  "Get expert help to create the perfect listing",
  "Field offers from qualified buyers with verified funds",
  "Close safely for free with Escrow.com",
];

export function Features() {
  const [activeTab, setActiveTab] = useState<"buyers" | "sellers">("buyers");

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-[#f6f9fb] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#252553] mb-4">
            We make online business acquisitions
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#252553]">
            fast, safe, and easy
          </h2>
        </div>

        {/* Central logo/icon */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            <div className="w-20 h-20 bg-[#252553] rounded-2xl flex items-center justify-center shadow-xl">
              <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none">
                <path d="M20 4L4 20L20 36L36 20L20 4Z" fill="#4f5dd3" />
                <path d="M20 10L10 20L20 30L30 20L20 10Z" fill="#6b78e8" />
              </svg>
            </div>
            {/* Connection lines */}
            <div className="absolute top-1/2 -left-32 w-32 h-0.5 bg-gradient-to-r from-transparent to-[#252553]/20" />
            <div className="absolute top-1/2 -right-32 w-32 h-0.5 bg-gradient-to-l from-transparent to-[#252553]/20" />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            type="button"
            onClick={() => setActiveTab("sellers")}
            className={`px-8 py-3 rounded-xl font-medium transition-all ${
              activeTab === "sellers"
                ? "bg-[#252553] text-white shadow-lg"
                : "bg-white text-[#252553] border border-gray-200 hover:border-[#252553]"
            }`}
          >
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Sellers
            </div>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("buyers")}
            className={`px-8 py-3 rounded-xl font-medium transition-all ${
              activeTab === "buyers"
                ? "bg-[#252553] text-white shadow-lg"
                : "bg-white text-[#252553] border border-gray-200 hover:border-[#252553]"
            }`}
          >
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Buyers
            </div>
          </button>
        </div>

        {/* Content cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Buyers card */}
          <div
            className={`bg-white rounded-3xl p-8 shadow-lg border border-gray-100 transition-all duration-300 ${
              activeTab === "buyers" ? "ring-2 ring-[#4f5dd3] scale-[1.02]" : ""
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#e8ebff] rounded-xl flex items-center justify-center">
                <Building2 className="h-6 w-6 text-[#4f5dd3]" />
              </div>
              <h3 className="text-xl font-bold text-[#252553]">Discover your dream startup</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Browse 1,000s of vetted online businesses for sale or enter your criteria to find matches. Project returns with live metrics, and make offers in minutes.
            </p>
            <ul className="space-y-3 mb-8">
              {buyerFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#4f5dd3] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Link href="/onboarding?role=buyer">
              <Button variant="link" className="text-[#4f5dd3] p-0 font-semibold">
                Tell me more <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Sellers card */}
          <div
            className={`bg-white rounded-3xl p-8 shadow-lg border border-gray-100 transition-all duration-300 ${
              activeTab === "sellers" ? "ring-2 ring-[#4f5dd3] scale-[1.02]" : ""
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#e8ebff] rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-[#4f5dd3]" />
              </div>
              <h3 className="text-xl font-bold text-[#252553]">Sell quickly, easily, and for the highest price</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Sell your online business by getting in front of 500k+ buyers. Get expert help to market and close. Start conversations that lead to acquisition in as little as 90 days.
            </p>
            <ul className="space-y-3 mb-8">
              {sellerFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#4f5dd3] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Link href="/onboarding?role=seller">
              <Button variant="link" className="text-[#4f5dd3] p-0 font-semibold">
                Tell me more <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Trust badge */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md border border-gray-100">
            <Shield className="h-5 w-5 text-green-500" />
            <span className="text-gray-700 font-medium">Trusted by 500k+ entrepreneurs worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}
