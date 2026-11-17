import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  href?: string;
}

export function GrowthiveLogo({ className, size = "md", href = "/" }: LogoProps) {
  const iconDimensions = {
    sm: 22,
    md: 28,
    lg: 36,
  };

  const textSizes = {
    sm: "text-base tracking-tight",
    md: "text-lg tracking-tight",
    lg: "text-xl tracking-tight",
  };

  const content = (
    <div className={cn("inline-flex items-center gap-2 group cursor-pointer select-none", className)}>
      {/* Brand icon: abstract "G" made of dots */}
      <div className="relative flex items-center justify-center shrink-0">
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30 relative">
          G
          <span className="absolute -right-1 -bottom-1 w-3 h-3 rounded-full bg-violet-300 border-2 border-white animate-bounce" />
        </div>
      </div>

      {/* Brand Wordmark */}
      <span className={cn("font-extrabold text-gray-900", textSizes[size])}>
        Growthive<span className="text-primary italic">Media</span>
      </span>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg inline-block">
        {content}
      </Link>
    );
  }

  return content;
}