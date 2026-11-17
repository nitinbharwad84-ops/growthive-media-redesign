import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:scale-[1.02]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline:
          "border border-border bg-card/60 backdrop-blur-sm hover:bg-secondary hover:border-primary/40 text-foreground",
        ghost: "hover:bg-secondary/60 text-muted-foreground hover:text-foreground",
        premium:
          "bg-gradient-to-r from-violet-700 to-indigo-800 text-white shadow-xl shadow-purple-700/30 hover:shadow-2xl hover:shadow-purple-800/50 transition-all duration-300",
        glow: "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:shadow-[0_0_35px_rgba(139,92,246,0.7)] border border-violet-400/30",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-13 rounded-xl px-8 text-base font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };