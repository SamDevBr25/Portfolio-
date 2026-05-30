import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-ink-900/10 bg-white/65 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-ink-700 backdrop-blur",
        className
      )}
      {...props}
    />
  );
}
