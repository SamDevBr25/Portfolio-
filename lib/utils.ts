import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path = "") {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://spdigital.pt";

  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function formatList(items: string[]) {
  return new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction"
  }).format(items);
}
