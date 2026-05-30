# Samuel Pinto — Portfolio

Personal portfolio and digital presence for Samuel Pinto / SP Digital.
Built with Next.js, designed to be fast, multilingual, and easy to maintain.

---

## Tech

Next.js App Router · TypeScript · Tailwind CSS · Framer Motion  
React Hook Form · Zod · Resend · Vercel Analytics

---

## Getting started

```bash
npm install
npm run dev
```

All content lives in `content/site.ts` — that's where you update
your name, bio, projects, and contact links before going live.

---

## Environment variables

Create a `.env.local` file at the root:

```env
RESEND_API_KEY=your_resend_key
CONTACT_TO_EMAIL=your@email.com
CONTACT_FROM_EMAIL=SP Digital <onboarding@resend.dev>
NEXT_PUBLIC_SITE_URL=https://your-domain.com

OPENAI_API_KEY=your_openai_key
OPENAI_MODEL=gpt-4.1-mini
```

The contact form works without these — it just runs in preview mode
and won't actually send emails. The AI assistant also has a built-in
fallback, so it works out of the box without an OpenAI key.

---

## Languages

The site detects the visitor's browser language and timezone
automatically. Language preference is saved locally.
Supported: English, Portuguese, Spanish.

---

## CMS

Content is currently driven by TypeScript files. When you're ready
to scale, `content/cms-schema.json` has schemas ready for Sanity,
Contentful, Payload, or Strapi — no UI changes needed.
