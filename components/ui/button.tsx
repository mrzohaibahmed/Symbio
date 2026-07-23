import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-250 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.97] cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-accent-foreground hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20",
        secondary:
          "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20",
        outline:
          "border-2 border-border bg-transparent text-foreground hover:border-accent hover:text-accent hover:bg-accent/5",
        ghost:
          "bg-transparent text-foreground hover:bg-muted hover:text-accent",
        link:
          "bg-transparent text-accent underline-offset-4 hover:underline p-0 h-auto",
        gradient:
          "gradient-accent text-white hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5",
        "ghost-light":
          "bg-transparent text-white/90 hover:bg-white/10 hover:text-white",
        "outline-light":
          "border-2 border-white/30 bg-transparent text-white hover:border-white hover:bg-white/10",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-7 text-sm",
        xl: "h-14 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
