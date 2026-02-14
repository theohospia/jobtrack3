"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "Love the transparency",
    text: "At Ramp Ventures we acquire 1-2 SaaS companies a year which usually requires looking at hundreds of deals. Identifying high potential SaaS companies has never been easier. I also love the transparency and how easy it is to connect with sellers.",
    author: "Sujan P.",
    avatar: "https://ext.same-assets.com/4113102611/2417156710.png",
    role: "Founder, Ramp Ventures",
  },
  {
    quote: "Really helpful in providing advice",
    text: "I have had a great experience with the platform. People were responsive and really helpful when it came to providing advice on pricing, strategy, and overall process of selling a business.",
    author: "Pascal L.",
    avatar: "https://ext.same-assets.com/4113102611/31327435.png",
    role: "Founder & CEO",
  },
  {
    quote: "By far the best experience",
    text: "I've used a few other sites in the past to buy startups and this was by far the best experience I've had. From initial reach out, to deal terms, I was able to acquire a startup in my target range within a day.",
    author: "Gareth C.",
    avatar: "https://ext.same-assets.com/4113102611/2333264666.png",
    role: "Serial Acquirer",
  },
  {
    quote: "Seamless process from start to finish",
    text: "The entire acquisition process was seamless. The team was incredibly helpful and the platform made it easy to find the right business. Highly recommend for anyone looking to buy or sell.",
    author: "Michael S.",
    avatar: "https://ext.same-assets.com/4113102611/2560835342.png",
    role: "Tech Entrepreneur",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#252553] text-center mb-16">
          What do founders and buyers say about us?
        </h2>

        {/* Testimonials grid - desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, i) => (
            <div
              key={i}
              className="bg-[#f6f9fb] rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <Quote className="h-8 w-8 text-[#4f5dd3]/30 mb-4" />
              <h3 className="text-lg font-bold text-[#252553] mb-3">
                "{testimonial.quote}"
              </h3>
              <p className="text-gray-600 mb-6 line-clamp-4">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-[#252553]">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials carousel - mobile */}
        <div className="md:hidden">
          <div className="bg-[#f6f9fb] rounded-2xl p-6 border border-gray-100">
            <Quote className="h-8 w-8 text-[#4f5dd3]/30 mb-4" />
            <h3 className="text-lg font-bold text-[#252553] mb-3">
              "{testimonials[currentIndex].quote}"
            </h3>
            <p className="text-gray-600 mb-6">
              {testimonials[currentIndex].text}
            </p>
            <div className="flex items-center gap-3">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-[#252553]">{testimonials[currentIndex].author}</div>
                <div className="text-sm text-gray-500">{testimonials[currentIndex].role}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentIndex ? "bg-[#4f5dd3]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
