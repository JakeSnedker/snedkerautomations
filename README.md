# SnedkerAutomations website

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/snedkerautomations-6675s-projects/v0-snedker-automations-website)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/5Kf2D520fT2)

## Overview

A clean, conversion-focused marketing site for Snedker Automations - an AI automation agency that builds custom AI assistants for businesses.

## Key Features

- **Three main pages:**
  - Home (/) - Hero with demo bot, services overview, benefits showcase
  - Pricing (/pricing) - Transparent pricing with setup fees and plan tiers
  - Free FAQ Bot Demo (/faq-demo) - Trial signup form with n8n integration

- **Floating Chat Widget** - Available on every page for instant lead capture
- **Mobile-responsive** - Optimized for all devices
- **Clean, professional design** - White background, blue primary (#2563eb), teal accent (#14b8a6)
- **Conversion-optimized** - Multiple CTAs guiding users to free trial

## Configuration

### n8n Webhook Integration

Update the webhook URL in `lib/constants.ts` to connect form submissions:

```typescript
export const N8N_WEBHOOK_URL = "https://your-n8n-instance.com/webhook/faq-demo"
```

The webhook receives FAQ demo form submissions with fields:
- fullName
- businessName
- email
- websiteUrl
- businessDescription
- commonQuestion
- brandVoice (optional)

### Logo

Your logo is located at `/public/images/snedkerautomationslogo.png` and is used in the navigation across all pages.

## Deployment

Your project is live at:

**[https://vercel.com/snedkerautomations-6675s-projects/v0-snedker-automations-website](https://vercel.com/snedkerautomations-6675s-projects/v0-snedker-automations-website)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/projects/5Kf2D520fT2](https://v0.app/chat/projects/5Kf2D520fT2)**

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository
