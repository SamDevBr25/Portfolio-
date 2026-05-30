"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import type { LocalizedContent } from "@/content/i18n";
import { contactSchema, type ContactPayload } from "@/lib/contact";

const intents: ContactPayload["intent"][] = [
  "Business inquiry",
  "Recruitment",
  "Agency collaboration",
  "General message"
];

export function ContactForm({ labels }: { labels?: LocalizedContent["contactForm"] }) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactPayload>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      intent: "Business inquiry"
    }
  });

  async function onSubmit(payload: ContactPayload) {
    setStatus("idle");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    setStatus("success");
    reset({ intent: payload.intent });
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-5"
      noValidate
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-graphite">
          {labels?.name || "Name"}
          <Input
            autoComplete="name"
            placeholder={labels?.namePlaceholder || "Your name"}
            {...register("name")}
          />
          {errors.name ? <span className="text-xs text-clay">{errors.name.message}</span> : null}
        </label>
        <label className="grid gap-2 text-sm font-medium text-graphite">
          {labels?.email || "Email"}
          <Input
            autoComplete="email"
            inputMode="email"
            placeholder={labels?.emailPlaceholder || "you@example.com"}
            {...register("email")}
          />
          {errors.email ? <span className="text-xs text-clay">{errors.email.message}</span> : null}
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
        <label className="grid gap-2 text-sm font-medium text-graphite">
          {labels?.intent || "Intent"}
          <select
            className="h-12 w-full rounded-md border border-ink-900/15 bg-white/80 px-4 text-sm text-graphite outline-none transition focus:border-graphite focus:ring-4 focus:ring-signal/10"
            {...register("intent")}
          >
            {intents.map((intent) => (
              <option key={intent} value={intent}>
                {intent}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-graphite">
          {labels?.budget || "Budget or timeline"}
          <Input placeholder={labels?.budgetPlaceholder || "Optional"} {...register("budget")} />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-medium text-graphite">
        {labels?.message || "Message"}
        <Textarea
          placeholder={
            labels?.messagePlaceholder ||
            "Tell Samuel what you want to build, improve, or discuss."
          }
          {...register("message")}
        />
        {errors.message ? (
          <span className="text-xs text-clay">{errors.message.message}</span>
        ) : null}
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={isSubmitting} className="sm:w-auto">
          {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
          {labels?.send || "Send inquiry"}
        </Button>
        <p className="text-sm leading-6 text-ink-700">
          {labels?.note || "Business and recruitment messages are prioritized."}
        </p>
      </div>

      {status === "success" ? (
        <p className="flex items-center gap-2 rounded-md border border-mineral/30 bg-mineral/10 px-4 py-3 text-sm text-graphite">
          <CheckCircle2 className="h-4 w-4 text-mineral" />
          {labels?.success ||
            "Message received. In preview mode, configure Resend to deliver it by email."}
        </p>
      ) : null}
      {status === "error" ? (
        <p className="rounded-md border border-clay/30 bg-clay/10 px-4 py-3 text-sm text-clay">
          {labels?.error ||
            "Something prevented the message from sending. Try again or use the direct contact links."}
        </p>
      ) : null}
    </form>
  );
}
