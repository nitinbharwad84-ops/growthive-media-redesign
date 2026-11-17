import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-colors",
  {
    variants: {
      variant: {
        default:
          "border border-primary/20 bg-primary/5 text-primary",
        secondary:
          "border border-border bg-secondary/80 text-secondary-foreground",
        outline: "border border-border text-foreground",
        subtle: "border border-border bg-card text-muted-foreground",
        glow: "border border-primary/30 bg-primary/10 text-primary shadow-sm shadow-primary/10",
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