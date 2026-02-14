"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-[#252553] pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-[#4f5dd3]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-[5%] w-48 h-48 bg-[#6b78e8]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              The largest marketplace to buy and sell profitable online businesses
            </h1>
            <p className="text-lg text-white/70 mb-8 max-w-xl">
              Join 500k+ entrepreneurs closing life-changing deals. Buy and sell SaaS, ecommerce, agencies, content, newsletters, mobile apps and crypto businesses.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/onboarding">
                <Button
                  size="lg"
                  className="bg-[#4f5dd3] hover:bg-[#3d4bc1] text-white px-8 py-6 text-lg rounded-xl"
                >
                  View Listings <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl"
              >
                <Play className="mr-2 h-5 w-5 fill-current" /> Our story
              </Button>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white/70 text-sm">
                4.7 average rating based on 500+ reviews
              </span>
              <div className="flex -space-x-1">
                <div className="w-6 h-6 rounded-full bg-red-500 border-2 border-[#252553]" />
                <div className="w-6 h-6 rounded-full bg-yellow-500 border-2 border-[#252553]" />
                <div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-[#252553]" />
              </div>
            </div>
          </div>

          {/* Right - Floating cards */}
          <div className="relative hidden lg:block h-[500px]">
            {/* Card 1 */}
            <div className="absolute top-0 left-8 bg-[#3a3a6e] rounded-2xl p-4 w-52 animate-float shadow-2xl">
              <div className="text-xs text-white/60 mb-1">SaaS startup</div>
              <div className="text-2xl font-bold text-white">$1.5M</div>
            </div>

            {/* Card 2 */}
            <div className="absolute top-16 right-8 bg-[#4a4a8a] rounded-2xl p-6 w-48 animate-float delay-200 shadow-2xl">
              <div className="h-3 bg-white/20 rounded mb-2 w-full" />
              <div className="h-3 bg-white/20 rounded mb-2 w-3/4" />
              <div className="h-3 bg-white/20 rounded w-1/2" />
            </div>

            {/* Card 3 */}
            <div className="absolute top-48 left-0 bg-[#5a5aa0] rounded-2xl p-4 w-44 animate-float delay-300 shadow-2xl">
              <div className="h-2 bg-white/20 rounded mb-3 w-full" />
              <div className="h-2 bg-white/20 rounded mb-3 w-4/5" />
              <div className="h-2 bg-white/20 rounded w-3/5" />
            </div>

            {/* Card 4 */}
            <div className="absolute bottom-24 right-4 bg-[#6a6ab0] rounded-2xl p-5 w-52 animate-float delay-400 shadow-2xl">
              <div className="h-2 bg-white/30 rounded mb-2 w-full" />
              <div className="h-2 bg-white/30 rounded w-2/3" />
            </div>

            {/* Card 5 - Main listing card */}
            <div className="absolute bottom-0 left-12 bg-white rounded-2xl p-4 w-56 animate-float delay-100 shadow-2xl">
              <div className="text-xs text-gray-500 mb-1">SaaS startup</div>
              <div className="text-xl font-bold text-[#252553]">$1.5M</div>
              <div className="mt-3 h-2 bg-gray-200 rounded w-full" />
              <div className="mt-2 h-2 bg-gray-200 rounded w-3/4" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 border-t border-white/10 pt-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">$500M+</div>
            <div className="text-white/60 text-sm mt-1">closed deal volume</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">2,000+</div>
            <div className="text-white/60 text-sm mt-1">startups sold</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">500k+</div>
            <div className="text-white/60 text-sm mt-1">entrepreneurs trust us</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">$2B+</div>
            <div className="text-white/60 text-sm mt-1">in verified buyer funds</div>
          </div>
          <div className="text-center col-span-2 md:col-span-1">
            <div className="text-3xl md:text-4xl font-bold text-white">20+</div>
            <div className="text-white/60 text-sm mt-1">years acquisition experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
