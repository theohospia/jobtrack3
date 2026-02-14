"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const listings = [
  {
    id: 1,
    type: "SaaS startup",
    location: "United States",
    title: "AI job search tool for job seekers to accelerate job search process with AI resumes & cover letters",
    askingPrice: "$2M",
    profitMultiple: "4.3x profit",
    category: "saas",
  },
  {
    id: 2,
    type: "Agency startup",
    location: "United States",
    title: "Turnkey B2B Sales Coaching Business w/ Recurring Revenue & Resellable IP",
    askingPrice: "$270k",
    profitMultiple: "3x profit",
    category: "agency",
  },
  {
    id: 3,
    type: "Ecommerce",
    location: "United Kingdom",
    title: "Premium outdoor gear subscription box with 15k active subscribers",
    askingPrice: "$850k",
    profitMultiple: "2.8x profit",
    category: "ecommerce",
  },
  {
    id: 4,
    type: "Content site",
    location: "Germany",
    title: "Tech review blog with 500k monthly visitors and diversified revenue",
    askingPrice: "$425k",
    profitMultiple: "3.5x profit",
    category: "content",
  },
  {
    id: 5,
    type: "Mobile app",
    location: "Canada",
    title: "Fitness tracking app with 200k downloads and premium subscription model",
    askingPrice: "$1.2M",
    profitMultiple: "4x profit",
    category: "mobile",
  },
];

export function TopPicks() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerPage = 2;
  const totalSlides = Math.ceil(listings.length / itemsPerPage);

  const next = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="py-20 lg:py-32 bg-[#252553]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Top picks
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            A few of our favorite SaaS businesses live and under expert guidance from our M&A team.
          </p>
        </div>

        {/* Listings grid */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.slice(currentSlide * itemsPerPage, currentSlide * itemsPerPage + 3).map((listing) => (
              <div
                key={listing.id}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow group cursor-pointer"
              >
                {/* Header */}
                <div className="bg-[#252553] px-6 py-4">
                  <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                    {listing.type} in the {listing.location}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#252553] mb-6 line-clamp-3 min-h-[4.5rem] group-hover:text-[#4f5dd3] transition-colors">
                    {listing.title}
                  </h3>

                  <div className="bg-[#f6f9fb] rounded-xl p-4">
                    <div className="text-sm text-gray-500 mb-1">Asking price</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-[#252553]">{listing.askingPrice}</span>
                      <span className="text-sm text-gray-500">({listing.profitMultiple})</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="hidden lg:block">
            <button
              type="button"
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-[#252553]" />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-[#252553]" />
            </button>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(totalSlides)].map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentSlide(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === currentSlide ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/onboarding">
            <Button
              size="lg"
              className="bg-[#4f5dd3] hover:bg-[#3d4bc1] text-white px-8 py-6 text-lg rounded-xl"
            >
              See more <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
