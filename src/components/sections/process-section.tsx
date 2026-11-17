import * as React from "react";
import { siteConfig } from "@/lib/site-config";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Workflow, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProcessSection() {
  return (
    <section id="how-it-works" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-white/90 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gray-100/15 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-white/5 bg-gradient-to-r from-primary/10 to-transparent blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <Badge variant="subtle" className="py-1 px-3">
            <Workflow className="w-3.5 h-3.5 text-gray-600" />
            <span className="text-gray-600">Process & Execution</span>
          </Badge>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            How Campaigns Come Together
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            A clear, collaborative four-step roadmap from initial concept to live creator distribution.
          </p>
        </div>

        {/* 4-Step Process Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {siteConfig.processSteps.map((step, index) => {
            return (
              <div
                key={step.step}
                className="group relative rounded-2xl border border-gray-200/50 bg-white/90 p-6 sm:p-7 flex flex-col justify-between hover:border-gray-300/50 hover:bg-gray-50 transition-all duration-400 hover:shadow-lg hover:shadow-gray-900/10"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-purple-100 border border-primary/10 flex items-center justify-center font-bold text-gray-600 text-sm group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-purple-200 transition-all duration-300">
                      {step.step}
                    </span>
                    <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">
                      {step.detail}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span className="font-mono">PHASE {step.step}</span>
                  {index < 3 ? (
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
                  ) : (
                    <span className="text-gray-600 font-semibold font-mono">READY</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}