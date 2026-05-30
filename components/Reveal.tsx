"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li";
};

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div"
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const Comp = motion[as];

  return (
    <Comp
      initial={false}
      animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className={cn(className)}
    >
      {children}
    </Comp>
  );
}
