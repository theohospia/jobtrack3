"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#252553]/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg className="h-8 w-8" viewBox="0 0 40 40" fill="none">
              <path
                d="M20 4L4 20L20 36L36 20L20 4Z"
                fill="#4f5dd3"
              />
              <path
                d="M20 10L10 20L20 30L30 20L20 10Z"
                fill="#6b78e8"
              />
            </svg>
            <span className="text-white font-bold text-xl">
              acquire<span className="text-gray-400 font-normal text-sm">.com</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-4 py-2 text-white/90 hover:text-white text-sm font-medium transition-colors">
                Sellers <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 p-4 bg-white" align="start">
                <DropdownMenuItem className="flex flex-col items-start p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <span className="font-semibold text-[#252553]">List Your Startup</span>
                  <span className="text-sm text-gray-500">Create and publish your business listing to 500k+ buyers</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex flex-col items-start p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <span className="font-semibold text-[#252553]">Get help selling</span>
                  <span className="text-sm text-gray-500">Acquisition advisory service tailored for SaaS founders</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/buyers"
              className="px-4 py-2 text-white/90 hover:text-white text-sm font-medium transition-colors"
            >
              Buyers
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-4 py-2 text-white/90 hover:text-white text-sm font-medium transition-colors">
                Pricing <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 p-4 bg-white" align="start">
                <DropdownMenuItem className="flex flex-col items-start p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <span className="font-semibold text-[#252553]">Sellers</span>
                  <span className="text-sm text-gray-500">List and sell your business with expert support</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex flex-col items-start p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <span className="font-semibold text-[#252553]">Buyers</span>
                  <span className="text-sm text-gray-500">Connect with founders to pursue an acquisition</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-4 py-2 text-white/90 hover:text-white text-sm font-medium transition-colors">
                Resources <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 p-4 bg-white" align="start">
                <DropdownMenuItem className="flex flex-col items-start p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <span className="font-semibold text-[#252553]">Help center</span>
                  <span className="text-sm text-gray-500">How to use the platform and other questions answered</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex flex-col items-start p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <span className="font-semibold text-[#252553]">Blog</span>
                  <span className="text-sm text-gray-500">Learn how to buy, grow, and sell businesses</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/valuation"
              className="px-4 py-2 text-white/90 hover:text-white text-sm font-medium transition-colors"
            >
              Free SaaS valuation
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/onboarding">
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Log in
              </Button>
            </Link>
            <Link href="/onboarding">
              <Button className="bg-[#4f5dd3] hover:bg-[#3d4bc1] text-white">
                Join now
              </Button>
            </Link>
          </div>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/sellers" className="text-lg font-medium text-[#252553] hover:text-[#4f5dd3]" onClick={() => setIsOpen(false)}>
                  Sellers
                </Link>
                <Link href="/buyers" className="text-lg font-medium text-[#252553] hover:text-[#4f5dd3]" onClick={() => setIsOpen(false)}>
                  Buyers
                </Link>
                <Link href="/pricing" className="text-lg font-medium text-[#252553] hover:text-[#4f5dd3]" onClick={() => setIsOpen(false)}>
                  Pricing
                </Link>
                <Link href="/resources" className="text-lg font-medium text-[#252553] hover:text-[#4f5dd3]" onClick={() => setIsOpen(false)}>
                  Resources
                </Link>
                <Link href="/valuation" className="text-lg font-medium text-[#252553] hover:text-[#4f5dd3]" onClick={() => setIsOpen(false)}>
                  Free SaaS valuation
                </Link>
                <div className="flex flex-col gap-3 mt-6">
                  <Link href="/onboarding" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full">Log in</Button>
                  </Link>
                  <Link href="/onboarding" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-[#4f5dd3] hover:bg-[#3d4bc1]">Join now</Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
