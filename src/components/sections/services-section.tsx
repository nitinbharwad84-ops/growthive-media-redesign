import * as React from "react";
import { siteConfig } from "@/lib/site-config";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Compass, Flame, Layers, Sparkles, Tv, Users, Check, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  Flame: Flame,
  Tv: Tv,
  Sparkles: Sparkles,
  Compass: Compass,
  Users: Users,
};

const gradientMap = {
  Flame: "from-orange-500 to-red-500",
  Tv: "from-blue-500 to-cyan-500",
  Sparkles: "from-violet-500 to-purple-500",
  Compass: "from-green-500 to-emerald-500",
  Users: "from-indigo-500 to-blue-500",
};

export function ServicesSection() {
  return (
    <section id="services" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-purple-100/30 to-transparent rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-subtle-grid opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="section-header">
          <Badge variant="glow" className="py-2 px-4">
            <Layers className="w-4 h-4" />
            <span className="text-gray-600">Campaign Capabilities</span>
          </Badge>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Tailored Influencer Marketing for{" "}
            <span className="bg-gradient-to-r from-primary via-purple-600 to-violet-500 bg-clip-text text-transparent">
              Technology Brands
            </span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            We provide five focused campaign models engineered to align your product with reputable technology and AI creators.
          </p>
        </div>

        {/* Bento Grid - 5 Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Sparkles;
            const gradient = gradientMap[service.iconName as keyof typeof gradientMap] || "from-primary to-purple-600";
            const isFeatured = index === 0 || index === 4;

            return (
              <Card
                key={service.id}
                className={cn(
                  "group relative overflow-hidden border-gray-200/50 bg-white/90 hover:border-gray-300/50 transition-all duration-500 flex flex-col justify-between",
                  isFeatured && "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-gray-50/50"
                )}
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent group-hover:via-primary transition-all duration-500" />

                {/* Subtle corner accent */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-purple-100 border border-primary/10 flex items-center justify-center text-primary group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-purple-200 group-hover:scale-105 transition-all duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-gray-100 border border-gray-200 text-[11px] font-mono text-gray-600 group-hover:border-primary/30 group-hover:text-primary transition-colors">
                        {service.tag}
                      </span>
                      <span className="font-mono text-sm text-gray-400">
                        {service.number}
                      </span>
                    </div>
                  </div>

                  <div>
                    <CardTitle className="text-xl sm:text-2xl text-gray-900 group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-sm mt-2 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-5 relative z-10">
                  <div className="border-t border-gray-200/50 pt-4 space-y-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-gray-400">
                      Included Deliverables
                    </span>
                    <ul className="space-y-3">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                          <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <a
                      href="#brand-enquiry"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-primary group/link transition-colors"
                    >
                      <span>Inquire about this format</span>
                      <ArrowUpRight className="w-4 h-4 text-gray-400 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}