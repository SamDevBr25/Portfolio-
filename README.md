# SP Digital Portfolio

Premium portfolio experience for Samuel Pinto and SP Digital.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form
- Zod
- Resend-ready contact route
- Vercel Analytics and Speed Insights
- CMS-ready typed content files

## Local Development

```bash
npm install
npm run dev
```

The main content lives in `content/site.ts`. Replace the placeholder contact links there before publishing.

## Contact Delivery

Create `.env.local` with:

```bash
RESEND_API_KEY="your_resend_key"
CONTACT_TO_EMAIL="samuelferreiragomespinto25@gmail.com"
CONTACT_FROM_EMAIL="SP Digital <onboarding@resend.dev>"
NEXT_PUBLIC_SITE_URL="https://your-domain.com"
OPENAI_API_KEY="your_openai_key"
OPENAI_MODEL="gpt-4.1-mini"
```

Without these variables, the contact form runs in preview mode and does not send email.

Without `OPENAI_API_KEY`, the SP Digital IA assistant still works with a built-in fallback. Add the key when you want more natural AI answers through OpenAI's Responses API.

## Languages

The portfolio auto-detects the visitor's browser language/timezone and stores their preference locally. The selector supports English, Portuguese, and Spanish.

## CMS Migration

`content/cms-schema.json` defines the future collections for projects, services, testimonials, articles, case studies, SEO metadata, and translations. The current TypeScript content can be swapped for Sanity, Contentful, Payload, Strapi, or another CMS without redesigning the UI.
