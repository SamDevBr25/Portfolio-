import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  tone = "light"
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      <Badge
        className={
          tone === "dark" ? "border-white/15 bg-white/10 text-ivory" : undefined
        }
      >
        {eyebrow}
      </Badge>
      <h2
        className={cn(
          "mt-5 font-display text-4xl font-semibold leading-[0.95] text-balance sm:text-5xl lg:text-6xl",
          tone === "dark" ? "text-ivory" : "text-graphite"
        )}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={cn(
            "mt-5 text-base leading-7 text-pretty sm:text-lg",
            tone === "dark" ? "text-ivory/72" : "text-ink-700"
          )}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}
