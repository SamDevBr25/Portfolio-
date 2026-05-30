import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-12 w-full rounded-md border border-ink-900/15 bg-white/80 px-4 text-sm text-graphite outline-none transition placeholder:text-ink-500 focus:border-graphite focus:ring-4 focus:ring-signal/10",
        className
      )}
      {...props}
    />
  );
}

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full resize-y rounded-md border border-ink-900/15 bg-white/80 px-4 py-3 text-sm text-graphite outline-none transition placeholder:text-ink-500 focus:border-graphite focus:ring-4 focus:ring-signal/10",
        className
      )}
      {...props}
    />
  );
}
