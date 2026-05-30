import { NextResponse } from "next/server";
import { z } from "zod";

import {
  buildCapabilities,
  contactLinks,
  profile,
  projects,
  services
} from "@/content/site";
import { languages, type LanguageCode } from "@/content/i18n";

const assistantRequestSchema = z.object({
  message: z.string().min(1).max(1200),
  language: z.string().min(2).max(8).optional(),
  history: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().max(1400)
      })
    )
    .max(8)
    .optional()
});

type AssistantAction = "none" | "lead";

const contactEmail =
  contactLinks.find((link) => link.label === "Email")?.href.replace("mailto:", "") ||
  "samuelferreiragomespinto25@gmail.com";

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = assistantRequestSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { reply: "Please send a shorter message so I can help.", action: "none" },
      { status: 400 }
    );
  }

  const { message, history = [], language = "en" } = parsed.data;
  const fallback = buildFallbackReply(message, language as LanguageCode);

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(fallback);
  }

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
        input: [
          {
            role: "developer",
            content: assistantInstructions(language as LanguageCode)
          },
          ...history.map((item) => ({
            role: item.role,
            content: item.content
          })),
          {
            role: "user",
            content: message
          }
        ],
        text: {
          format: {
            type: "json_schema",
            name: "sp_digital_assistant_reply",
            strict: true,
            schema: {
              type: "object",
              additionalProperties: false,
              required: ["reply", "action"],
              properties: {
                reply: {
                  type: "string",
                  description: "A concise helpful reply for the visitor."
                },
                action: {
                  type: "string",
                  enum: ["none", "lead"],
                  description:
                    "Use lead when the visitor wants Samuel to contact them or wants to send Samuel a message."
                }
              }
            }
          }
        }
      })
    });

    if (!response.ok) {
      return NextResponse.json(fallback);
    }

    const data = await response.json();
    const text = extractResponseText(data);
    const aiReply = z
      .object({
        reply: z.string(),
        action: z.enum(["none", "lead"])
      })
      .safeParse(JSON.parse(text));

    return NextResponse.json(aiReply.success ? aiReply.data : fallback);
  } catch {
    return NextResponse.json(fallback);
  }
}

function assistantInstructions(language: LanguageCode) {
  const targetLanguage =
    languages.find((option) => option.code === language)?.name || "English";

  return [
    "You are the SP Digital IA concierge for Samuel Pinto's portfolio.",
    "Be concise, warm, professional, and conversion-focused.",
    `Reply in ${targetLanguage} unless the visitor clearly asks for another language.`,
    `Samuel's public email is ${contactEmail}.`,
    `Samuel is based in ${profile.location} and speaks ${profile.languages.join(", ")}.`,
    `Positioning: ${profile.positioning}`,
    `Services: ${services.map((service) => service.title).join(", ")}.`,
    `Build capabilities: ${buildCapabilities.join(", ")}.`,
    `Projects: ${projects.map((project) => project.title).join(", ")}.`,
    "If the visitor asks for contact info, give the email and invite them to leave a message.",
    "If the visitor wants to send Samuel a message, asks Samuel to contact them, requests a quote, or mentions a project inquiry, set action to lead.",
    "Do not invent phone numbers, prices, guarantees, testimonials, or private details.",
    "Return only JSON matching the schema."
  ].join("\n");
}

function buildFallbackReply(
  message: string,
  language: LanguageCode
): { reply: string; action: AssistantAction } {
  const lower = message.toLowerCase();
  const wantsContact =
    lower.includes("contact") ||
    lower.includes("email") ||
    lower.includes("whatsapp") ||
    lower.includes("phone") ||
    lower.includes("telefone") ||
    lower.includes("mail");
  const wantsLead =
    lower.includes("send") ||
    lower.includes("message") ||
    lower.includes("quote") ||
    lower.includes("budget") ||
    lower.includes("orçamento") ||
    lower.includes("orcamento") ||
    lower.includes("project") ||
    lower.includes("projeto") ||
    lower.includes("contact me") ||
    lower.includes("call me");

  if (wantsLead) {
    if (language === "pt") {
      return {
        action: "lead",
        reply:
          "Posso enviar uma mensagem ao Samuel por si. Partilhe o seu nome, email e uma nota curta sobre o que precisa."
      };
    }

    if (language === "es") {
      return {
        action: "lead",
        reply:
          "Puedo enviar un mensaje a Samuel por ti. Comparte tu nombre, email y una nota breve sobre lo que necesitas."
      };
    }

    return {
      action: "lead",
      reply:
        "I can send Samuel a message for you. Share your name, email, and a short note about what you need, and it will go through his contact form."
    };
  }

  if (wantsContact) {
    if (language === "pt") {
      return {
        action: "none",
        reply: `Pode contactar o Samuel diretamente em ${contactEmail}. Se preferir, também posso recolher uma mensagem curta aqui e enviá-la.`
      };
    }

    if (language === "es") {
      return {
        action: "none",
        reply: `Puedes contactar a Samuel directamente en ${contactEmail}. Si prefieres, también puedo recoger un mensaje corto aquí y enviarlo.`
      };
    }

    return {
      action: "none",
      reply: `You can contact Samuel directly at ${contactEmail}. If you prefer, I can also collect a short message here and send it to him.`
    };
  }

  if (lower.includes("service") || lower.includes("build") || lower.includes("website")) {
    return {
      action: "none",
      reply:
        "Samuel can help with business websites, landing pages, portfolio websites, web applications, UX/UI redesign, SEO, performance, and digital branding experiences."
    };
  }

  if (lower.includes("project") || lower.includes("portfolio") || lower.includes("work")) {
    return {
      action: "none",
      reply:
        "The portfolio includes the Victoria Revestimentos & Reformas live website, the AJ Digital Consultant Android app, and the SP Digital portfolio system."
    };
  }

  return {
    action: "none",
    reply:
      "I can help you understand Samuel's services, view his portfolio work, get his contact email, or send him a message for a project or recruitment inquiry."
  };
}

function extractResponseText(data: unknown) {
  const response = data as {
    output_text?: string;
    output?: Array<{
      content?: Array<{
        text?: string;
      }>;
    }>;
  };

  if (response.output_text) {
    return response.output_text;
  }

  return (
    response.output
      ?.flatMap((item) => item.content || [])
      .map((content) => content.text)
      .filter(Boolean)
      .join("") || "{}"
  );
}
