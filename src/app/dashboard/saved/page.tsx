"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Trash2,
  ArrowUpRight,
  DollarSign,
  TrendingUp,
  Clock,
} from "lucide-react";

const savedListings = [
  {
    id: 1,
    title: "AI-Powered Analytics Platform",
    type: "SaaS",
    price: "$1.2M",
    mrr: "$45,000",
    growth: "+22%",
    savedAt: "2 days ago",
    notes: "Great metrics, need to review tech stack",
  },
  {
    id: 2,
    title: "Premium Subscription Box Service",
    type: "Ecommerce",
    price: "$850k",
    mrr: "$32,000",
    growth: "+15%",
    savedAt: "1 week ago",
    notes: "",
  },
  {
    id: 3,
    title: "Mobile Fitness & Wellness App",
    type: "Mobile App",
    price: "$2.1M",
    mrr: "$75,000",
    growth: "+35%",
    savedAt: "1 week ago",
    notes: "High growth, competitive market",
  },
  {
    id: 4,
    title: "Developer Tools Platform",
    type: "SaaS",
    price: "$3.5M",
    mrr: "$110,000",
    growth: "+28%",
    savedAt: "2 weeks ago",
    notes: "Strong organic growth",
  },
];

export default function SavedPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#252553]">Saved Listings</h1>
          <p className="text-gray-600">Your bookmarked businesses for later review</p>
        </div>
        <p className="text-sm text-gray-500">{savedListings.length} saved listings</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {savedListings.map((listing) => (
          <Card key={listing.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <Badge className="mb-2">{listing.type}</Badge>
                <h3 className="font-semibold text-[#252553] text-lg">{listing.title}</h3>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="text-yellow-500">
                  <Star className="h-5 w-5 fill-current" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-500">
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center gap-1 text-gray-500 text-xs mb-1">
                  <DollarSign className="h-3 w-3" />
                  Price
                </div>
                <p className="font-semibold text-[#252553]">{listing.price}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center gap-1 text-gray-500 text-xs mb-1">
                  <DollarSign className="h-3 w-3" />
                  MRR
                </div>
                <p className="font-semibold text-[#252553]">{listing.mrr}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center gap-1 text-gray-500 text-xs mb-1">
                  <TrendingUp className="h-3 w-3" />
                  Growth
                </div>
                <p className="font-semibold text-green-600">{listing.growth}</p>
              </div>
            </div>

            {listing.notes && (
              <div className="bg-[#f0f2ff] rounded-lg p-3 mb-4">
                <p className="text-sm text-[#252553]">{listing.notes}</p>
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-sm text-gray-400">
                <Clock className="h-4 w-4" />
                Saved {listing.savedAt}
              </div>
              <Button className="bg-[#4f5dd3] hover:bg-[#3d4bc1]">
                View Details <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
