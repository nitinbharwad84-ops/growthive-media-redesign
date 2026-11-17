import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide transition-colors",
  {
    variants: {
      variant: {
        default: "border-primary/30 bg-primary/10 text-accent",
        secondary: "border-border/70 bg-secondary/70 text-secondary-foreground",
        outline: "border-border/70 text-foreground",
        subtle: "border-border/60 bg-surface-2/60 text-muted-foreground",
        glow: "border-primary/40 bg-primary/15 text-accent shadow-[0_0_18px_rgba(139,92,246,0.18)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
