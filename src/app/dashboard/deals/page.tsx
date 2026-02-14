"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Clock,
  FileText,
  MessageSquare,
  DollarSign,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  MoreVertical,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const deals = [
  {
    id: 1,
    title: "Content Management Platform",
    seller: "TechFounder Inc.",
    price: "$1.8M",
    stage: "Due Diligence",
    progress: 65,
    status: "active",
    lastActivity: "2 hours ago",
    nextStep: "Review financial documents",
    messages: 12,
  },
  {
    id: 2,
    title: "Newsletter Business",
    seller: "MediaCo",
    price: "$580k",
    stage: "LOI Signed",
    progress: 40,
    status: "active",
    lastActivity: "1 day ago",
    nextStep: "Schedule call with seller",
    messages: 8,
  },
  {
    id: 3,
    title: "Developer Tools SaaS",
    seller: "DevTools LLC",
    price: "$3.2M",
    stage: "Initial Review",
    progress: 15,
    status: "active",
    lastActivity: "3 days ago",
    nextStep: "Request additional metrics",
    messages: 3,
  },
  {
    id: 4,
    title: "E-commerce Platform",
    seller: "ShopBright",
    price: "$920k",
    stage: "Closed",
    progress: 100,
    status: "completed",
    lastActivity: "2 weeks ago",
    nextStep: "Complete",
    messages: 45,
  },
  {
    id: 5,
    title: "Marketing Automation Tool",
    seller: "GrowthStack",
    price: "$1.5M",
    stage: "Declined",
    progress: 30,
    status: "declined",
    lastActivity: "1 week ago",
    nextStep: "N/A",
    messages: 6,
  },
];

const stages = [
  { name: "Initial Review", value: 15 },
  { name: "NDA Signed", value: 25 },
  { name: "LOI Signed", value: 40 },
  { name: "Due Diligence", value: 65 },
  { name: "Negotiation", value: 80 },
  { name: "Closing", value: 95 },
  { name: "Closed", value: 100 },
];

function DealCard({ deal }: { deal: typeof deals[0] }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700";
      case "completed":
        return "bg-blue-100 text-blue-700";
      case "declined":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-[#252553] text-lg">{deal.title}</h3>
          <p className="text-sm text-gray-500">{deal.seller}</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5 text-gray-400" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem>Send Message</DropdownMenuItem>
            <DropdownMenuItem>Download Documents</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">Cancel Deal</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <Badge className={getStatusColor(deal.status)}>
          {deal.stage}
        </Badge>
        <span className="text-2xl font-bold text-[#252553]">{deal.price}</span>
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-sm mb-1">
          <span className="text-gray-500">Progress</span>
          <span className="font-medium text-[#252553]">{deal.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all ${
              deal.status === "completed"
                ? "bg-green-500"
                : deal.status === "declined"
                  ? "bg-red-400"
                  : "bg-[#4f5dd3]"
            }`}
            style={{ width: `${deal.progress}%` }}
          />
        </div>
      </div>

      {/* Info grid */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-2 text-sm">
          <Clock className="h-4 w-4 text-gray-400" />
          <span className="text-gray-600">{deal.lastActivity}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <MessageSquare className="h-4 w-4 text-gray-400" />
          <span className="text-gray-600">{deal.messages} messages</span>
        </div>
      </div>

      {/* Next step */}
      {deal.status === "active" && (
        <div className="p-3 bg-[#f0f2ff] rounded-lg mb-4">
          <p className="text-xs text-[#4f5dd3] font-medium mb-1">Next Step</p>
          <p className="text-sm text-[#252553]">{deal.nextStep}</p>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-2">
        <Button className="flex-1 bg-[#4f5dd3] hover:bg-[#3d4bc1]">
          View Deal <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
        <Button variant="outline" className="flex-1">
          <MessageSquare className="mr-1 h-4 w-4" /> Message
        </Button>
      </div>
    </Card>
  );
}

export default function DealsPage() {
  const activeDeals = deals.filter((d) => d.status === "active");
  const completedDeals = deals.filter((d) => d.status === "completed");
  const declinedDeals = deals.filter((d) => d.status === "declined");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#252553]">My Deals</h1>
          <p className="text-gray-600">Track and manage your acquisition deals</p>
        </div>
        <Button className="bg-[#4f5dd3] hover:bg-[#3d4bc1]">
          <FileText className="mr-2 h-4 w-4" /> Export Report
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 flex items-center gap-4">
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
            <CheckCircle2 className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-[#252553]">{activeDeals.length}</p>
            <p className="text-sm text-gray-500">Active Deals</p>
          </div>
        </Card>
        <Card className="p-4 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
            <DollarSign className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-[#252553]">$5.6M</p>
            <p className="text-sm text-gray-500">Total Deal Value</p>
          </div>
        </Card>
        <Card className="p-4 flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
            <FileText className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-[#252553]">{completedDeals.length}</p>
            <p className="text-sm text-gray-500">Completed</p>
          </div>
        </Card>
        <Card className="p-4 flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
            <AlertCircle className="h-6 w-6 text-orange-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-[#252553]">2</p>
            <p className="text-sm text-gray-500">Need Attention</p>
          </div>
        </Card>
      </div>

      {/* Deals tabs */}
      <Tabs defaultValue="active" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="active">Active ({activeDeals.length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({completedDeals.length})</TabsTrigger>
          <TabsTrigger value="declined">Declined ({declinedDeals.length})</TabsTrigger>
          <TabsTrigger value="all">All Deals ({deals.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="active">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeDeals.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedDeals.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="declined">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {declinedDeals.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="all">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deals.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
