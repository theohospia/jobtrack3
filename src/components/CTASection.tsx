"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 lg:py-24 bg-[#f6f9fb]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#252553] mb-6">
          Join 500k+ founders and buyers already doing business on our platform
        </h2>
        <Link href="/onboarding">
          <Button
            size="lg"
            className="bg-[#252553] hover:bg-[#1a1a3d] text-white px-10 py-6 text-lg rounded-xl"
          >
            Join now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
