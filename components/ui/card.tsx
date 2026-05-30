import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-ink-900/10 bg-white/70 shadow-sm backdrop-blur",
        className
      )}
      {...props}
    />
  );
}
