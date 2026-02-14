"use client";

import { Bell, Search, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DashboardHeader() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      {/* Search */}
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Search listings, deals, messages..."
            className="pl-10 bg-gray-50 border-gray-200 focus:bg-white"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <div className="p-4 border-b">
              <h3 className="font-semibold text-[#252553]">Notifications</h3>
            </div>
            <div className="max-h-80 overflow-auto">
              <DropdownMenuItem className="p-4 cursor-pointer">
                <div>
                  <p className="text-sm font-medium">New offer received</p>
                  <p className="text-xs text-gray-500 mt-1">TechCorp made an offer on your SaaS listing</p>
                  <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-4 cursor-pointer">
                <div>
                  <p className="text-sm font-medium">Message from Sarah</p>
                  <p className="text-xs text-gray-500 mt-1">I'm interested in learning more about...</p>
                  <p className="text-xs text-gray-400 mt-1">5 hours ago</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-4 cursor-pointer">
                <div>
                  <p className="text-sm font-medium">Deal milestone reached</p>
                  <p className="text-xs text-gray-500 mt-1">Due diligence completed for AI Startup</p>
                  <p className="text-xs text-gray-400 mt-1">1 day ago</p>
                </div>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Quick actions */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-[#4f5dd3] hover:bg-[#3d4bc1]">
              Quick Actions <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Create New Listing</DropdownMenuItem>
            <DropdownMenuItem>Send Message</DropdownMenuItem>
            <DropdownMenuItem>Schedule Meeting</DropdownMenuItem>
            <DropdownMenuItem>Generate Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
