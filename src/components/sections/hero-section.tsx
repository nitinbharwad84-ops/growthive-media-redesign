"use client";

import * as React from "react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowUpRight, Sparkles, Terminal, Video, Zap, Play, TrendingUp, Users, Globe } from "lucide-react";

export function HeroSection() {
  const scrollToEnquiry = () => {
    const el = document.querySelector("#brand-enquiry");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    const el = document.querySelector("#services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-purple-400/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-bl from-violet-200/30 to-transparent rounded-full blur-[140px] animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-transparent via-primary/5 to-transparent blur-[150px] rounded-full" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-subtle-grid opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center">
        {/* Eyebrow Badge */}
        <Badge variant="glow" className="mb-8 py-2 px-4 text-xs tracking-wider uppercase font-medium animate-fade-in-up">
          <Sparkles className="w-3.5 h-3.5" />
          <span>AI & Technology Influencer Marketing</span>
        </Badge>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-gray-900 leading-[1.05] max-w-6xl mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          The next big thing has a{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-primary via-purple-600 to-violet-500 bg-clip-text text-transparent">
              creator behind it.
            </span>
            <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-primary/50 via-purple-500 to-transparent rounded-full" />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed font-normal animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {siteConfig.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Button
            size="lg"
            variant="default"
            onClick={scrollToEnquiry}
            className="w-full sm:w-auto rounded-full text-base font-semibold px-10 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40"
          >
            <span>Work With Us</span>
            <ArrowUpRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={scrollToServices}
            className="w-full sm:w-auto rounded-full text-base font-medium px-10 border-gray-300/50 hover:border-gray-400/40 hover:bg-gray-50"
          >
            <span>Explore Services</span>
            <ArrowDown className="w-4 h-4 ml-2 text-gray-500" />
          </Button>
        </div>

        {/* Floating Stats / Trust Indicators */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-4xl animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          {[
            { icon: TrendingUp, label: "Growth-Driven Campaigns", value: "150+" },
            { icon: Users, label: "Active Creators", value: "200+" },
            { icon: Globe, label: "Brands Served", value: "80+" },
            { icon: Play, label: "Videos Produced", value: "500+" },
          ].map((stat, i) => (
            <div key={i} className="group rounded-2xl border border-gray-200/50 bg-white/80 backdrop-blur-sm p-5 hover:shadow-lg hover:shadow-gray-900/5 transition-all hover:-translate-y-1">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/10 to-purple-100 flex items-center justify-center">
                  <stat.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-2xl font-extrabold text-gray-900">{stat.value}</span>
              </div>
              <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}