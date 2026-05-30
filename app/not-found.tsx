import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-ivory px-6 text-center">
      <div className="max-w-lg">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-ink-500">
          Page not found
        </p>
        <h1 className="mt-4 font-display text-6xl font-semibold leading-none text-graphite">
          This page has not been curated yet.
        </h1>
        <p className="mt-5 text-base leading-7 text-ink-700">
          Return to the main portfolio experience and continue from the work section.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Back home
          </Link>
        </Button>
      </div>
    </main>
  );
}
