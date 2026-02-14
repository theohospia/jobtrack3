"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Search,
  Send,
  Paperclip,
  MoreVertical,
  Phone,
  Video,
  Star,
  Archive,
} from "lucide-react";

const conversations = [
  {
    id: 1,
    name: "Sarah Mitchell",
    company: "TechFounder Inc.",
    avatar: "SM",
    lastMessage: "I've reviewed the financials and have a few questions about the Q3 numbers...",
    time: "2 min ago",
    unread: 2,
    online: true,
    deal: "Content Management Platform",
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "MediaCo",
    avatar: "MC",
    lastMessage: "Great, I'll send over the NDA for your review.",
    time: "1 hour ago",
    unread: 0,
    online: true,
    deal: "Newsletter Business",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "DevTools LLC",
    avatar: "ER",
    lastMessage: "The technical documentation is ready. Would you like to schedule a demo?",
    time: "3 hours ago",
    unread: 1,
    online: false,
    deal: "Developer Tools SaaS",
  },
  {
    id: 4,
    name: "David Park",
    company: "GrowthStack",
    avatar: "DP",
    lastMessage: "Thank you for your interest. Unfortunately, we've decided to go with another buyer.",
    time: "2 days ago",
    unread: 0,
    online: false,
    deal: "Marketing Automation Tool",
  },
  {
    id: 5,
    name: "Acquire Support",
    company: "Acquire.com",
    avatar: "AS",
    lastMessage: "Your account verification has been completed. You now have full access.",
    time: "1 week ago",
    unread: 0,
    online: true,
    deal: null,
  },
];

const messages = [
  {
    id: 1,
    sender: "them",
    text: "Hi John, I hope you're doing well. I wanted to follow up on our conversation about the Content Management Platform.",
    time: "10:30 AM",
  },
  {
    id: 2,
    sender: "me",
    text: "Hi Sarah! Yes, I've been reviewing the materials you sent. The platform looks very promising.",
    time: "10:32 AM",
  },
  {
    id: 3,
    sender: "them",
    text: "Great to hear! Do you have any initial questions about the business?",
    time: "10:33 AM",
  },
  {
    id: 4,
    sender: "me",
    text: "I do have a few questions about the Q3 revenue numbers. There seems to be a dip in August - could you explain what happened there?",
    time: "10:35 AM",
  },
  {
    id: 5,
    sender: "them",
    text: "Good catch! That was due to a planned migration to new infrastructure. We had about 2 weeks of reduced sales activity while we transitioned. As you can see, September bounced back strongly.",
    time: "10:38 AM",
  },
  {
    id: 6,
    sender: "them",
    text: "I've reviewed the financials and have a few questions about the Q3 numbers. Would you like to schedule a call to discuss in more detail?",
    time: "10:40 AM",
  },
];

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState("");

  return (
    <div className="h-[calc(100vh-7rem)]">
      <div className="flex h-full gap-6">
        {/* Conversations list */}
        <Card className="w-96 flex flex-col">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold text-[#252553] mb-4">Messages</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search conversations..." className="pl-9" />
            </div>
          </div>

          <div className="flex-1 overflow-auto">
            {conversations.map((conv) => (
              <button
                key={conv.id}
                type="button"
                onClick={() => setSelectedConversation(conv)}
                className={`w-full p-4 flex items-start gap-3 hover:bg-gray-50 transition-colors text-left ${
                  selectedConversation.id === conv.id ? "bg-[#f0f2ff]" : ""
                }`}
              >
                <div className="relative">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-[#252553] text-white">
                      {conv.avatar}
                    </AvatarFallback>
                  </Avatar>
                  {conv.online && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-[#252553]">{conv.name}</span>
                    <span className="text-xs text-gray-400">{conv.time}</span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">{conv.lastMessage}</p>
                  {conv.deal && (
                    <Badge variant="secondary" className="mt-2 text-xs">
                      {conv.deal}
                    </Badge>
                  )}
                </div>
                {conv.unread > 0 && (
                  <span className="bg-[#4f5dd3] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {conv.unread}
                  </span>
                )}
              </button>
            ))}
          </div>
        </Card>

        {/* Chat area */}
        <Card className="flex-1 flex flex-col">
          {/* Chat header */}
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-[#252553] text-white">
                  {selectedConversation.avatar}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium text-[#252553]">{selectedConversation.name}</h3>
                <p className="text-sm text-gray-500">{selectedConversation.company}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Phone className="h-5 w-5 text-gray-500" />
              </Button>
              <Button variant="ghost" size="icon">
                <Video className="h-5 w-5 text-gray-500" />
              </Button>
              <Button variant="ghost" size="icon">
                <Star className="h-5 w-5 text-gray-500" />
              </Button>
              <Button variant="ghost" size="icon">
                <Archive className="h-5 w-5 text-gray-500" />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5 text-gray-500" />
              </Button>
            </div>
          </div>

          {/* Deal context */}
          {selectedConversation.deal && (
            <div className="px-4 py-3 bg-[#f0f2ff] border-b flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge className="bg-[#4f5dd3]">Active Deal</Badge>
                <span className="text-sm text-[#252553] font-medium">
                  {selectedConversation.deal}
                </span>
              </div>
              <Button variant="link" className="text-[#4f5dd3]">
                View Deal Details
              </Button>
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                    msg.sender === "me"
                      ? "bg-[#4f5dd3] text-white"
                      : "bg-gray-100 text-[#252553]"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      msg.sender === "me" ? "text-white/60" : "text-gray-400"
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message input */}
          <div className="p-4 border-t">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <Paperclip className="h-5 w-5 text-gray-500" />
              </Button>
              <Input
                placeholder="Type a message..."
                className="flex-1"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && newMessage.trim()) {
                    setNewMessage("");
                  }
                }}
              />
              <Button className="bg-[#4f5dd3] hover:bg-[#3d4bc1]">
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
