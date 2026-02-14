"use client";

import Link from "next/link";
import { Twitter, Linkedin, Facebook, Youtube } from "lucide-react";

const footerLinks = {
  sellers: [
    { label: "Sell your online business", href: "/sellers" },
    { label: "Seller pricing", href: "/seller-pricing" },
  ],
  buyers: [
    { label: "Online businesses for sale", href: "/buyers" },
    { label: "Buyer pricing", href: "/pricing" },
    { label: "Instant Slack Alerts", href: "/alerts" },
  ],
  services: [
    { label: "Get help selling", href: "/guided-by-acquire" },
    { label: "Meet our M&A advisory team", href: "/mergers-and-acquisitions" },
  ],
  categories: [
    { label: "SaaS businesses for sale", href: "/saas" },
    { label: "Mobile app businesses for sale", href: "/mobile-apps" },
    { label: "Marketplace businesses for sale", href: "/marketplaces" },
    { label: "Shopify app businesses for sale", href: "/shopify-apps" },
    { label: "Content websites for sale", href: "/content" },
    { label: "Agency businesses for sale", href: "/agencies" },
    { label: "Ecommerce businesses for sale", href: "/ecommerce" },
    { label: "AI businesses for sale", href: "/ai" },
  ],
  resources: [
    { label: "Help Center", href: "/help" },
    { label: "Blog", href: "/blog" },
    { label: "Free SaaS valuation", href: "/valuation" },
    { label: "Partner program", href: "/partner-program" },
    { label: "Referral program", href: "/referral" },
  ],
  company: [
    { label: "About us", href: "/about" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Legal", href: "/legal" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Sellers */}
          <div>
            <h3 className="font-bold text-[#252553] mb-4">Sellers</h3>
            <ul className="space-y-3">
              {footerLinks.sellers.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-600 hover:text-[#4f5dd3] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Buyers */}
          <div>
            <h3 className="font-bold text-[#252553] mb-4">Buyers</h3>
            <ul className="space-y-3">
              {footerLinks.buyers.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-600 hover:text-[#4f5dd3] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-[#252553] mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-600 hover:text-[#4f5dd3] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-bold text-[#252553] mb-4">Categories</h3>
            <ul className="space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-600 hover:text-[#4f5dd3] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-[#252553] mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-600 hover:text-[#4f5dd3] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
            <h3 className="font-bold text-[#252553] mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-600 hover:text-[#4f5dd3] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-bold text-[#252553] mt-6 mb-4">Contact us</h3>
            <a href="mailto:support@acquire.com" className="text-gray-600 hover:text-[#4f5dd3] text-sm transition-colors">
              support@acquire.com
            </a>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg className="h-8 w-8" viewBox="0 0 40 40" fill="none">
              <path d="M20 4L4 20L20 36L36 20L20 4Z" fill="#4f5dd3" />
              <path d="M20 10L10 20L20 30L30 20L20 10Z" fill="#6b78e8" />
            </svg>
            <span className="text-[#252553] font-bold text-xl">
              acquire<span className="text-gray-400 font-normal text-sm">.com</span>
            </span>
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm text-center">
            2026 Acquire.com, Inc™
            <br className="md:hidden" />
            <span className="hidden md:inline"> · </span>
            Brokerage Services, Inc., CA DRE # 02167544
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-[#4f5dd3] transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#4f5dd3] transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#4f5dd3] transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#4f5dd3] transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
