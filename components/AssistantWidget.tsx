"use client";

import { Bot, Mail, MessageCircle, Send, Sparkles, X } from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import type { LanguageCode, LocalizedContent } from "@/content/i18n";
import { contactSchema, type ContactPayload } from "@/lib/contact";
import { cn } from "@/lib/utils";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type LeadDraft = {
  name: string;
  email: string;
  message: string;
};

export function AssistantWidget({
  labels,
  language = "en"
}: {
  labels?: LocalizedContent["assistant"];
  language?: LanguageCode;
}) {
  const starterPrompts = labels?.starters || [
    "How can I contact Samuel?",
    "What can Samuel build?",
    "Send Samuel a message"
  ];
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        labels?.hello ||
        "Hi, I am the SP Digital IA assistant. I can answer quick questions, share Samuel's contact info, or help send him a message."
    }
  ]);
  const [leadMode, setLeadMode] = useState(false);
  const [leadDraft, setLeadDraft] = useState<LeadDraft>({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [leadStatus, setLeadStatus] = useState<"idle" | "sent" | "error">("idle");

  const compactHistory = useMemo(
    () => messages.slice(-8).map(({ role, content }) => ({ role, content })),
    [messages]
  );

  async function askAssistant(text: string) {
    const clean = text.trim();
    if (!clean || loading) {
      return;
    }

    setInput("");
    setLoading(true);
    setMessages((current) => [...current, { role: "user", content: clean }]);

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: clean,
          language,
          history: compactHistory
        })
      });
      const data = (await response.json()) as {
        reply?: string;
        action?: "none" | "lead";
      };

      if (data.action === "lead") {
        setLeadMode(true);
        setLeadDraft((draft) => ({
          ...draft,
          message: draft.message || clean
        }));
      }

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            data.reply ||
            "I can help with contact details, services, portfolio work, or sending Samuel a message."
        }
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
              "I could not answer just now, but you can email Samuel at samuelferreiragomespinto25@gmail.com."
        }
      ]);
    } finally {
      setLoading(false);
    }
  }

  async function sendLead() {
    setLeadStatus("idle");
    const payload: ContactPayload = {
      name: leadDraft.name,
      email: leadDraft.email,
      intent: "Business inquiry",
      budget: "Sent from SP Digital IA assistant",
      message: leadDraft.message
    };

    const parsed = contactSchema.safeParse(payload);

    if (!parsed.success) {
      setLeadStatus("error");
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
              "Please add your name, a valid email, and a short message so Samuel can reply properly."
        }
      ]);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data)
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      setLeadStatus("sent");
      setLeadMode(false);
      setLeadDraft({ name: "", email: "", message: "" });
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "Done. I sent your message through Samuel's contact form. He can reply to the email you provided."
        }
      ]);
    } catch {
      setLeadStatus("error");
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "I could not send it right now. You can email Samuel directly at samuelferreiragomespinto25@gmail.com."
        }
      ]);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-[80] max-w-[calc(100vw-2rem)]">
      <div
        className={cn(
          "mb-3 w-[380px] max-w-full overflow-hidden rounded-lg border border-white/20 bg-graphite text-ivory shadow-editorial transition duration-300",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        )}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between gap-4 border-b border-white/10 p-4">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-champagne text-graphite">
              <Bot className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold">{labels?.title || "SP Digital IA"}</p>
              <p className="text-xs text-ivory/58">
                {labels?.subtitle || "Contact and project guide"}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="grid h-9 w-9 place-items-center rounded-full text-ivory/70 transition hover:bg-white/10 hover:text-ivory"
            aria-label="Close assistant"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="scrollbar-thin grid max-h-[360px] gap-3 overflow-y-auto p-4">
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={cn(
                "max-w-[88%] rounded-lg px-4 py-3 text-sm leading-6",
                message.role === "assistant"
                  ? "justify-self-start bg-white/10 text-ivory/82"
                  : "justify-self-end bg-champagne text-graphite"
              )}
            >
              {message.content}
            </div>
          ))}
          {loading ? (
            <div className="max-w-[88%] justify-self-start rounded-lg bg-white/10 px-4 py-3 text-sm text-ivory/58">
              {labels?.thinking || "Thinking..."}
            </div>
          ) : null}

          {!leadMode ? (
            <div className="flex flex-wrap gap-2 pt-1">
              {starterPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => askAssistant(prompt)}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-ivory/72 transition hover:bg-white/10 hover:text-ivory"
                >
                  {prompt}
                </button>
              ))}
            </div>
          ) : null}
        </div>

        {leadMode ? (
          <div className="grid gap-3 border-t border-white/10 bg-white/[0.04] p-4">
            <div className="flex items-center gap-2 text-sm font-medium text-ivory">
              <Mail className="h-4 w-4 text-champagne" />
              {labels?.leadTitle || "Send Samuel a message"}
            </div>
            <Input
              value={leadDraft.name}
              onChange={(event) =>
                setLeadDraft((draft) => ({ ...draft, name: event.target.value }))
              }
              placeholder={labels?.leadName || "Your name"}
              className="bg-white text-graphite"
            />
            <Input
              value={leadDraft.email}
              onChange={(event) =>
                setLeadDraft((draft) => ({ ...draft, email: event.target.value }))
              }
              placeholder={labels?.leadEmail || "Your email"}
              inputMode="email"
              className="bg-white text-graphite"
            />
            <Textarea
              value={leadDraft.message}
              onChange={(event) =>
                setLeadDraft((draft) => ({ ...draft, message: event.target.value }))
              }
              placeholder={labels?.leadMessage || "What should Samuel know?"}
              className="min-h-24 bg-white text-graphite"
            />
            <Button type="button" onClick={sendLead} variant="dark" className="bg-champagne text-graphite">
              <Send className="h-4 w-4" />
              {labels?.leadSend || "Send to Samuel"}
            </Button>
            {leadStatus === "error" ? (
              <p className="text-xs leading-5 text-champagne">
                {labels?.leadError || "Please check the fields and try again."}
              </p>
            ) : null}
          </div>
        ) : (
          <div className="flex gap-2 border-t border-white/10 p-4">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  askAssistant(input);
                }
              }}
              placeholder={labels?.placeholder || "Ask about services or contact..."}
              className="h-11 min-w-0 flex-1 rounded-full border border-white/10 bg-white/10 px-4 text-sm text-ivory outline-none placeholder:text-ivory/45 focus:border-champagne"
            />
            <Button
              type="button"
              size="icon"
              variant="dark"
              onClick={() => askAssistant(input)}
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="ml-auto flex h-14 items-center gap-3 rounded-full border border-white/20 bg-graphite px-5 text-sm font-semibold text-ivory shadow-editorial transition hover:-translate-y-0.5 hover:bg-ink-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
        aria-label={open ? "Close SP Digital IA" : "Open SP Digital IA"}
        aria-expanded={open}
      >
        {open ? <X className="h-5 w-5" /> : <Sparkles className="h-5 w-5 text-champagne" />}
        <span className="hidden sm:inline">{labels?.askButton || "Ask IA"}</span>
        <MessageCircle className="h-5 w-5 sm:hidden" />
      </button>
    </div>
  );
}
