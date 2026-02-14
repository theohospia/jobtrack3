"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import {
  ArrowRight,
  ArrowLeft,
  Building2,
  Users,
  Check,
  Mail,
  Lock,
  User,
  Briefcase,
  DollarSign,
  Shield,
  Sparkles,
  Globe,
  Linkedin,
  Phone,
} from "lucide-react";

type Role = "buyer" | "seller" | null;

interface FormData {
  // Step 1
  role: Role;
  // Step 2
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  // Step 3
  companyName: string;
  linkedIn: string;
  phone: string;
  country: string;
  // Step 4 - Buyer specific
  investmentRange: string;
  businessTypes: string[];
  timeline: string;
  // Step 4 - Seller specific
  businessType: string;
  revenue: string;
  askingPrice: string;
  businessDescription: string;
  // Step 5
  acceptTerms: boolean;
  acceptMarketing: boolean;
}

const initialFormData: FormData = {
  role: null,
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
  companyName: "",
  linkedIn: "",
  phone: "",
  country: "",
  investmentRange: "",
  businessTypes: [],
  timeline: "",
  businessType: "",
  revenue: "",
  askingPrice: "",
  businessDescription: "",
  acceptTerms: false,
  acceptMarketing: false,
};

const businessTypeOptions = [
  "SaaS",
  "Ecommerce",
  "Agency",
  "Content/Media",
  "Mobile App",
  "Marketplace",
  "Newsletter",
  "AI/ML",
];

const investmentRanges = [
  "Under $50k",
  "$50k - $100k",
  "$100k - $500k",
  "$500k - $1M",
  "$1M - $5M",
  "$5M+",
];

const timelineOptions = [
  "Immediately",
  "1-3 months",
  "3-6 months",
  "6-12 months",
  "Just exploring",
];

const revenueRanges = [
  "Pre-revenue",
  "Under $10k/mo",
  "$10k - $50k/mo",
  "$50k - $100k/mo",
  "$100k - $500k/mo",
  "$500k+/mo",
];

function OnboardingContent() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isLoading, setIsLoading] = useState(false);

  const totalSteps = 6;
  const progress = (step / totalSteps) * 100;

  // Check for role in URL params
  useEffect(() => {
    const roleParam = searchParams.get("role") as Role;
    if (roleParam === "buyer" || roleParam === "seller") {
      setFormData((prev) => ({ ...prev, role: roleParam }));
      setStep(2);
    }
  }, [searchParams]);

  const updateFormData = (field: keyof FormData, value: string | string[] | boolean | Role) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleBusinessType = (type: string) => {
    const current = formData.businessTypes;
    if (current.includes(type)) {
      updateFormData("businessTypes", current.filter((t) => t !== type));
    } else {
      updateFormData("businessTypes", [...current, type]);
    }
  };

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setStep(6);
    }, 1500);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.role !== null;
      case 2:
        return (
          formData.email &&
          formData.password &&
          formData.password === formData.confirmPassword &&
          formData.firstName &&
          formData.lastName
        );
      case 3:
        return formData.country !== "";
      case 4:
        if (formData.role === "buyer") {
          return formData.investmentRange && formData.businessTypes.length > 0;
        }
        return formData.businessType && formData.revenue;
      case 5:
        return formData.acceptTerms;
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#252553] via-[#2a2a5e] to-[#1a1a3d] flex">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-2/5 flex-col justify-between p-12 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#4f5dd3]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-0 w-80 h-80 bg-[#6b78e8]/10 rounded-full blur-3xl" />
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 relative z-10">
          <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none">
            <path d="M20 4L4 20L20 36L36 20L20 4Z" fill="#4f5dd3" />
            <path d="M20 10L10 20L20 30L30 20L20 10Z" fill="#6b78e8" />
          </svg>
          <span className="text-white font-bold text-2xl">
            acquire<span className="text-gray-400 font-normal text-sm">.com</span>
          </span>
        </Link>

        {/* Main content */}
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-white mb-6">
            {formData.role === "buyer"
              ? "Find your perfect acquisition"
              : formData.role === "seller"
                ? "Sell your business for top dollar"
                : "Join 500k+ entrepreneurs"}
          </h1>
          <p className="text-white/70 text-lg mb-8">
            {formData.role === "buyer"
              ? "Browse 1,000s of vetted businesses and make offers in minutes."
              : formData.role === "seller"
                ? "Get in front of qualified buyers with verified funds."
                : "Buy and sell profitable online businesses on the largest marketplace."}
          </p>

          {/* Benefits list */}
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-white/80">
              <div className="w-8 h-8 bg-[#4f5dd3]/30 rounded-lg flex items-center justify-center">
                <Check className="h-5 w-5 text-[#6b78e8]" />
              </div>
              <span>Verified buyers with $2B+ in funds</span>
            </li>
            <li className="flex items-center gap-3 text-white/80">
              <div className="w-8 h-8 bg-[#4f5dd3]/30 rounded-lg flex items-center justify-center">
                <Check className="h-5 w-5 text-[#6b78e8]" />
              </div>
              <span>Expert M&A support at every step</span>
            </li>
            <li className="flex items-center gap-3 text-white/80">
              <div className="w-8 h-8 bg-[#4f5dd3]/30 rounded-lg flex items-center justify-center">
                <Check className="h-5 w-5 text-[#6b78e8]" />
              </div>
              <span>Secure transactions with escrow</span>
            </li>
          </ul>
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-3 gap-6 relative z-10">
          <div>
            <div className="text-2xl font-bold text-white">$500M+</div>
            <div className="text-white/50 text-sm">Deal volume</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">2,000+</div>
            <div className="text-white/50 text-sm">Startups sold</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">500k+</div>
            <div className="text-white/50 text-sm">Members</div>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 bg-white lg:rounded-l-[3rem] flex flex-col">
        {/* Mobile header */}
        <div className="lg:hidden p-6 bg-[#252553]">
          <Link href="/" className="flex items-center gap-2">
            <svg className="h-8 w-8" viewBox="0 0 40 40" fill="none">
              <path d="M20 4L4 20L20 36L36 20L20 4Z" fill="#4f5dd3" />
              <path d="M20 10L10 20L20 30L30 20L20 10Z" fill="#6b78e8" />
            </svg>
            <span className="text-white font-bold text-xl">
              acquire<span className="text-gray-400 font-normal text-sm">.com</span>
            </span>
          </Link>
        </div>

        {/* Progress bar */}
        <div className="px-8 pt-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">Step {step} of {totalSteps}</span>
            <span className="text-sm text-gray-500">{Math.round(progress)}% complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Form content */}
        <div className="flex-1 flex flex-col justify-center px-8 py-12 max-w-xl mx-auto w-full">
          {/* Step 1: Role Selection */}
          {step === 1 && (
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-[#252553] mb-2">Welcome!</h2>
              <p className="text-gray-600 mb-8">Let's get started. What brings you here today?</p>

              <div className="grid gap-4">
                <button
                  type="button"
                  onClick={() => updateFormData("role", "buyer")}
                  className={`p-6 rounded-2xl border-2 text-left transition-all ${
                    formData.role === "buyer"
                      ? "border-[#4f5dd3] bg-[#f0f2ff]"
                      : "border-gray-200 hover:border-[#4f5dd3]/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                      formData.role === "buyer" ? "bg-[#4f5dd3]" : "bg-gray-100"
                    }`}>
                      <Building2 className={`h-7 w-7 ${
                        formData.role === "buyer" ? "text-white" : "text-gray-500"
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#252553] mb-1">I want to buy a business</h3>
                      <p className="text-gray-600">Browse and acquire profitable online businesses</p>
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => updateFormData("role", "seller")}
                  className={`p-6 rounded-2xl border-2 text-left transition-all ${
                    formData.role === "seller"
                      ? "border-[#4f5dd3] bg-[#f0f2ff]"
                      : "border-gray-200 hover:border-[#4f5dd3]/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                      formData.role === "seller" ? "bg-[#4f5dd3]" : "bg-gray-100"
                    }`}>
                      <Users className={`h-7 w-7 ${
                        formData.role === "seller" ? "text-white" : "text-gray-500"
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#252553] mb-1">I want to sell my business</h3>
                      <p className="text-gray-600">List your business to 500k+ qualified buyers</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Account Creation */}
          {step === 2 && (
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-[#252553] mb-2">Create your account</h2>
              <p className="text-gray-600 mb-8">Enter your details to get started</p>

              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-[#252553]">First name</Label>
                    <div className="relative mt-1.5">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="pl-10"
                        value={formData.firstName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFormData("firstName", e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-[#252553]">Last name</Label>
                    <div className="relative mt-1.5">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="pl-10"
                        value={formData.lastName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFormData("lastName", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-[#252553]">Email address</Label>
                  <div className="relative mt-1.5">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="pl-10"
                      value={formData.email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFormData("email", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password" className="text-[#252553]">Password</Label>
                  <div className="relative mt-1.5">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create a strong password"
                      className="pl-10"
                      value={formData.password}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFormData("password", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="confirmPassword" className="text-[#252553]">Confirm password</Label>
                  <div className="relative mt-1.5">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      className="pl-10"
                      value={formData.confirmPassword}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFormData("confirmPassword", e.target.value)}
                    />
                  </div>
                  {formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
                  )}
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2">
                <div className="flex-1 h-1 bg-gray-200 rounded">
                  <div
                    className={`h-1 rounded transition-all ${
                      formData.password.length >= 8 ? "bg-green-500 w-full" :
                      formData.password.length >= 4 ? "bg-yellow-500 w-1/2" :
                      formData.password.length > 0 ? "bg-red-500 w-1/4" : "w-0"
                    }`}
                  />
                </div>
                <span className="text-xs text-gray-500">
                  {formData.password.length >= 8 ? "Strong" : formData.password.length >= 4 ? "Medium" : "Weak"}
                </span>
              </div>
            </div>
          )}

          {/* Step 3: Profile Details */}
          {step === 3 && (
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-[#252553] mb-2">Tell us about yourself</h2>
              <p className="text-gray-600 mb-8">This helps us personalize your experience</p>

              <div className="space-y-5">
                <div>
                  <Label htmlFor="companyName" className="text-[#252553]">Company name (optional)</Label>
                  <div className="relative mt-1.5">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="companyName"
                      placeholder="Your company"
                      className="pl-10"
                      value={formData.companyName}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFormData("companyName", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="linkedIn" className="text-[#252553]">LinkedIn profile (optional)</Label>
                  <div className="relative mt-1.5">
                    <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="linkedIn"
                      placeholder="linkedin.com/in/yourprofile"
                      className="pl-10"
                      value={formData.linkedIn}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFormData("linkedIn", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-[#252553]">Phone number (optional)</Label>
                  <div className="relative mt-1.5">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="phone"
                      placeholder="+1 (555) 000-0000"
                      className="pl-10"
                      value={formData.phone}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFormData("phone", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="country" className="text-[#252553]">Country</Label>
                  <div className="relative mt-1.5">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
                    <Select value={formData.country} onValueChange={(value: string) => updateFormData("country", value)}>
                      <SelectTrigger className="pl-10">
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="de">Germany</SelectItem>
                        <SelectItem value="fr">France</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Business/Investment Details */}
          {step === 4 && (
            <div className="animate-fade-in">
              {formData.role === "buyer" ? (
                <>
                  <h2 className="text-3xl font-bold text-[#252553] mb-2">Investment preferences</h2>
                  <p className="text-gray-600 mb-8">Help us find the perfect businesses for you</p>

                  <div className="space-y-6">
                    <div>
                      <Label className="text-[#252553] mb-3 block">Investment budget</Label>
                      <RadioGroup
                        value={formData.investmentRange}
                        onValueChange={(value: string) => updateFormData("investmentRange", value)}
                        className="grid grid-cols-2 gap-3"
                      >
                        {investmentRanges.map((range) => (
                          <div key={range} className="flex items-center">
                            <RadioGroupItem value={range} id={range} className="peer sr-only" />
                            <Label
                              htmlFor={range}
                              className="flex-1 p-4 rounded-xl border-2 border-gray-200 cursor-pointer transition-all peer-data-[state=checked]:border-[#4f5dd3] peer-data-[state=checked]:bg-[#f0f2ff] hover:border-[#4f5dd3]/50"
                            >
                              <DollarSign className="h-5 w-5 text-[#4f5dd3] mb-1" />
                              <span className="font-medium text-[#252553]">{range}</span>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className="text-[#252553] mb-3 block">Business types of interest</Label>
                      <div className="grid grid-cols-2 gap-3">
                        {businessTypeOptions.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => toggleBusinessType(type)}
                            className={`p-4 rounded-xl border-2 text-left transition-all ${
                              formData.businessTypes.includes(type)
                                ? "border-[#4f5dd3] bg-[#f0f2ff]"
                                : "border-gray-200 hover:border-[#4f5dd3]/50"
                            }`}
                          >
                            <span className="font-medium text-[#252553]">{type}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="text-[#252553] mb-3 block">Acquisition timeline</Label>
                      <Select value={formData.timeline} onValueChange={(value: string) => updateFormData("timeline", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="When do you plan to acquire?" />
                        </SelectTrigger>
                        <SelectContent>
                          {timelineOptions.map((option) => (
                            <SelectItem key={option} value={option}>{option}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-[#252553] mb-2">About your business</h2>
                  <p className="text-gray-600 mb-8">Tell us about the business you're selling</p>

                  <div className="space-y-5">
                    <div>
                      <Label className="text-[#252553] mb-3 block">Business type</Label>
                      <Select value={formData.businessType} onValueChange={(value: string) => updateFormData("businessType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent>
                          {businessTypeOptions.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-[#252553] mb-3 block">Monthly revenue</Label>
                      <Select value={formData.revenue} onValueChange={(value: string) => updateFormData("revenue", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select revenue range" />
                        </SelectTrigger>
                        <SelectContent>
                          {revenueRanges.map((range) => (
                            <SelectItem key={range} value={range}>{range}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="askingPrice" className="text-[#252553]">Asking price (optional)</Label>
                      <div className="relative mt-1.5">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          id="askingPrice"
                          placeholder="e.g. $500,000"
                          className="pl-10"
                          value={formData.askingPrice}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFormData("askingPrice", e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="businessDescription" className="text-[#252553]">Brief description (optional)</Label>
                      <textarea
                        id="businessDescription"
                        placeholder="Describe your business in a few sentences..."
                        className="mt-1.5 w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4f5dd3] focus:ring-1 focus:ring-[#4f5dd3] outline-none transition-all resize-none"
                        rows={4}
                        value={formData.businessDescription}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => updateFormData("businessDescription", e.target.value)}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Step 5: Verification & Terms */}
          {step === 5 && (
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-[#252553] mb-2">Almost there!</h2>
              <p className="text-gray-600 mb-8">Review and accept our terms to complete setup</p>

              <div className="space-y-6">
                {/* Summary card */}
                <div className="bg-[#f6f9fb] rounded-2xl p-6">
                  <h3 className="font-semibold text-[#252553] mb-4">Account Summary</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Account type</span>
                      <span className="font-medium text-[#252553] capitalize">{formData.role}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Name</span>
                      <span className="font-medium text-[#252553]">{formData.firstName} {formData.lastName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Email</span>
                      <span className="font-medium text-[#252553]">{formData.email}</span>
                    </div>
                    {formData.role === "buyer" && formData.investmentRange && (
                      <div className="flex justify-between">
                        <span className="text-gray-500">Investment range</span>
                        <span className="font-medium text-[#252553]">{formData.investmentRange}</span>
                      </div>
                    )}
                    {formData.role === "seller" && formData.businessType && (
                      <div className="flex justify-between">
                        <span className="text-gray-500">Business type</span>
                        <span className="font-medium text-[#252553]">{formData.businessType}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Terms checkboxes */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="terms"
                      checked={formData.acceptTerms}
                      onCheckedChange={(checked: boolean) => updateFormData("acceptTerms", checked)}
                      className="mt-1"
                    />
                    <Label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
                      I agree to the <a href="#" className="text-[#4f5dd3] hover:underline">Terms of Service</a> and <a href="#" className="text-[#4f5dd3] hover:underline">Privacy Policy</a>
                    </Label>
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="marketing"
                      checked={formData.acceptMarketing}
                      onCheckedChange={(checked: boolean) => updateFormData("acceptMarketing", checked)}
                      className="mt-1"
                    />
                    <Label htmlFor="marketing" className="text-sm text-gray-600 cursor-pointer">
                      Send me updates about new listings and acquisition tips (optional)
                    </Label>
                  </div>
                </div>

                {/* Security badge */}
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
                  <Shield className="h-6 w-6 text-green-600" />
                  <div>
                    <div className="font-medium text-green-800">Your data is secure</div>
                    <div className="text-sm text-green-600">We use bank-level encryption to protect your information</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 6: Success */}
          {step === 6 && (
            <div className="animate-fade-in text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-[#252553] mb-2">Welcome aboard!</h2>
              <p className="text-gray-600 mb-8">
                Your account has been created successfully.
                {formData.role === "buyer"
                  ? " Start browsing businesses that match your criteria."
                  : " Let's get your business listed."}
              </p>

              <div className="space-y-4">
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="w-full bg-[#4f5dd3] hover:bg-[#3d4bc1] text-white py-6 text-lg rounded-xl"
                  >
                    {formData.role === "buyer" ? "Browse Listings" : "Create Listing"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full py-6 text-lg rounded-xl"
                  >
                    Go to Dashboard
                  </Button>
                </Link>
              </div>

              <div className="mt-8 p-4 bg-[#f6f9fb] rounded-xl">
                <p className="text-sm text-gray-500">
                  Need help? Our team is available 24/7 at{" "}
                  <a href="mailto:support@acquire.com" className="text-[#4f5dd3] hover:underline">
                    support@acquire.com
                  </a>
                </p>
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          {step < 6 && (
            <div className="flex gap-4 mt-10">
              {step > 1 && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={prevStep}
                  className="flex-1 py-6 rounded-xl"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" /> Back
                </Button>
              )}
              <Button
                size="lg"
                onClick={step === 5 ? handleSubmit : nextStep}
                disabled={!canProceed() || isLoading}
                className="flex-1 bg-[#4f5dd3] hover:bg-[#3d4bc1] text-white py-6 rounded-xl disabled:opacity-50"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Creating account...
                  </span>
                ) : step === 5 ? (
                  <>Create Account <Check className="ml-2 h-5 w-5" /></>
                ) : (
                  <>Continue <ArrowRight className="ml-2 h-5 w-5" /></>
                )}
              </Button>
            </div>
          )}

          {/* Login link */}
          {step === 1 && (
            <p className="text-center mt-8 text-gray-600">
              Already have an account?{" "}
              <Link href="/onboarding" className="text-[#4f5dd3] font-medium hover:underline">
                Log in
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function OnboardingLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#252553] via-[#2a2a5e] to-[#1a1a3d] flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin" />
    </div>
  );
}

export default function OnboardingPage() {
  return (
    <Suspense fallback={<OnboardingLoading />}>
      <OnboardingContent />
    </Suspense>
  );
}
