"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  User,
  Bell,
  Shield,
  CreditCard,
  Mail,
  Smartphone,
  Globe,
  Camera,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-[#252553]">Settings</h1>
        <p className="text-gray-600">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" /> Profile
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" /> Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="h-4 w-4" /> Security
          </TabsTrigger>
          <TabsTrigger value="billing" className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" /> Billing
          </TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile">
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-[#252553] mb-6">Profile Information</h2>

            {/* Avatar */}
            <div className="flex items-center gap-6 mb-8">
              <div className="relative">
                <Avatar className="h-24 w-24">
                  <AvatarFallback className="bg-[#252553] text-white text-2xl">JD</AvatarFallback>
                </Avatar>
                <button
                  type="button"
                  className="absolute bottom-0 right-0 w-8 h-8 bg-[#4f5dd3] rounded-full flex items-center justify-center text-white hover:bg-[#3d4bc1] transition-colors"
                >
                  <Camera className="h-4 w-4" />
                </button>
              </div>
              <div>
                <h3 className="font-medium text-[#252553]">Profile Photo</h3>
                <p className="text-sm text-gray-500">JPG, GIF or PNG. Max size 2MB</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="John" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="Doe" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="john@example.com" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" defaultValue="+1 (555) 000-0000" className="mt-1.5" />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" defaultValue="Acme Ventures" className="mt-1.5" />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="linkedin">LinkedIn Profile</Label>
                <Input id="linkedin" defaultValue="linkedin.com/in/johndoe" className="mt-1.5" />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="bio">Bio</Label>
                <textarea
                  id="bio"
                  className="mt-1.5 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#4f5dd3] focus:border-transparent resize-none"
                  rows={4}
                  defaultValue="Experienced entrepreneur and investor focused on SaaS acquisitions."
                />
              </div>
            </div>

            <Separator className="my-6" />

            <div className="flex justify-end gap-3">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-[#4f5dd3] hover:bg-[#3d4bc1]">Save Changes</Button>
            </div>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications">
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-[#252553] mb-6">Notification Preferences</h2>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#f0f2ff] rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-[#4f5dd3]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#252553]">Email Notifications</h3>
                    <p className="text-sm text-gray-500">Receive updates via email</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#f0f2ff] rounded-lg flex items-center justify-center">
                    <Smartphone className="h-5 w-5 text-[#4f5dd3]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#252553]">Push Notifications</h3>
                    <p className="text-sm text-gray-500">Receive push notifications on mobile</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#f0f2ff] rounded-lg flex items-center justify-center">
                    <Globe className="h-5 w-5 text-[#4f5dd3]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#252553]">New Listing Alerts</h3>
                    <p className="text-sm text-gray-500">Get notified when listings match your criteria</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#f0f2ff] rounded-lg flex items-center justify-center">
                    <Bell className="h-5 w-5 text-[#4f5dd3]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#252553]">Deal Updates</h3>
                    <p className="text-sm text-gray-500">Notifications about your active deals</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#f0f2ff] rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-[#4f5dd3]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#252553]">Marketing Emails</h3>
                    <p className="text-sm text-gray-500">Tips, updates, and acquisition insights</p>
                  </div>
                </div>
                <Switch />
              </div>
            </div>

            <Separator className="my-6" />

            <div className="flex justify-end">
              <Button className="bg-[#4f5dd3] hover:bg-[#3d4bc1]">Save Preferences</Button>
            </div>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security">
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-[#252553] mb-6">Security Settings</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-[#252553] mb-4">Change Password</h3>
                <div className="space-y-4 max-w-md">
                  <div>
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" className="mt-1.5" />
                  </div>
                  <Button className="bg-[#4f5dd3] hover:bg-[#3d4bc1]">Update Password</Button>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium text-[#252553] mb-4">Two-Factor Authentication</h3>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-[#252553]">2FA is enabled</p>
                    <p className="text-sm text-gray-500">Your account is protected with two-factor authentication</p>
                  </div>
                  <Button variant="outline">Configure</Button>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium text-[#252553] mb-4">Active Sessions</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-[#252553]">Chrome on MacOS</p>
                      <p className="text-sm text-gray-500">San Francisco, CA - Current session</p>
                    </div>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Active</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-[#252553]">Safari on iPhone</p>
                      <p className="text-sm text-gray-500">San Francisco, CA - 2 hours ago</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-red-500">Revoke</Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Billing Tab */}
        <TabsContent value="billing">
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-[#252553] mb-6">Billing & Subscription</h2>

            <div className="p-4 bg-gradient-to-r from-[#252553] to-[#4f5dd3] rounded-xl text-white mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/70 text-sm">Current Plan</p>
                  <p className="text-2xl font-bold">Pro Buyer</p>
                  <p className="text-white/70 text-sm mt-1">$99/month - Renews on March 1, 2026</p>
                </div>
                <Button variant="secondary">Upgrade Plan</Button>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-[#252553] mb-4">Payment Method</h3>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-8 bg-[#252553] rounded flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-[#252553]">Visa ending in 4242</p>
                      <p className="text-sm text-gray-500">Expires 12/2027</p>
                    </div>
                  </div>
                  <Button variant="outline">Update</Button>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium text-[#252553] mb-4">Billing History</h3>
                <div className="space-y-2">
                  {[
                    { date: "Feb 1, 2026", amount: "$99.00", status: "Paid" },
                    { date: "Jan 1, 2026", amount: "$99.00", status: "Paid" },
                    { date: "Dec 1, 2025", amount: "$99.00", status: "Paid" },
                  ].map((invoice, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-[#252553]">{invoice.date}</span>
                      <span className="font-medium text-[#252553]">{invoice.amount}</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">{invoice.status}</span>
                      <Button variant="ghost" size="sm">Download</Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
