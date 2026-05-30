import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  size?: "sm" | "md" | "lg" | "icon";
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  asChild,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border text-sm font-medium transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" &&
          "border-graphite bg-graphite text-ivory shadow-halo hover:-translate-y-0.5 hover:bg-ink-700",
        variant === "secondary" &&
          "border-ink-900/15 bg-white/70 text-graphite backdrop-blur hover:-translate-y-0.5 hover:border-graphite/40",
        variant === "ghost" &&
          "border-transparent bg-transparent text-graphite hover:bg-graphite/5",
        variant === "dark" &&
          "border-white/15 bg-white/10 text-white backdrop-blur hover:bg-white/15",
        size === "sm" && "h-9 px-4",
        size === "md" && "h-11 px-5",
        size === "lg" && "h-12 px-6",
        size === "icon" && "h-11 w-11 p-0",
        className
      )}
      {...props}
    />
  );
}
