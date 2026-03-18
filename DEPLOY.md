# Deployment Guide — Pathum Dilhara Portfolio

Deploy this Next.js 14 portfolio to Vercel for free in under 10 minutes.

---

## Prerequisites

- A [GitHub](https://github.com) account
- A [Vercel](https://vercel.com) account (sign up free with GitHub)
- Your Firebase project credentials (if using admin/blog features)

---

## Step 1: Push Code to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial portfolio commit"

# Create a new repo on GitHub, then push
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

---

## Step 2: Import to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import Git Repository"**
3. Select your GitHub repository
4. Vercel auto-detects Next.js — keep the default build settings
5. Click **"Deploy"**

---

## Step 3: Set Environment Variables

In Vercel dashboard → Project Settings → Environment Variables, add:

| Variable | Value | Notes |
|---|---|---|
| `NEXTAUTH_SECRET` | `your-secret-here` | Generate with `openssl rand -base64 32` |
| `NEXTAUTH_URL` | `https://your-domain.vercel.app` | Your production URL |
| `NEXT_PUBLIC_FIREBASE_API_KEY` | From Firebase console | Project Settings > General |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | `your-project.firebaseapp.com` | Firebase console |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | `your-project-id` | Firebase console |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | `your-project.appspot.com` | Firebase console |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | From Firebase console | Firebase console |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | From Firebase console | Firebase console |
| `FIREBASE_ADMIN_CLIENT_EMAIL` | From service account | Firebase > Project Settings > Service Accounts |
| `FIREBASE_ADMIN_PRIVATE_KEY` | From service account JSON | Keep the `\n` newlines |

> After adding variables, trigger a new deployment from the Vercel dashboard.

---

## Step 4: Custom Domain (Optional)

1. In Vercel dashboard → Project → **Domains**
2. Click **"Add Domain"**
3. Enter your domain (e.g., `pathumdilhara.dev`)
4. Update your DNS:
   - Add a **CNAME** record: `www` → `cname.vercel-dns.com`
   - Add an **A** record: `@` → `76.76.19.61`
5. Wait for DNS propagation (5–60 minutes)

---

## Step 5: Verify Deployment

- Visit your Vercel URL or custom domain
- Check that all sections load: Hero, About, Skills, Projects, Timeline, Contact
- Test the contact form
- Verify Firebase admin panel at `/admin` (requires authentication)

---

## One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/PathumDilharaDissanayake/portfolio)

---

## Local Development

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Fill in your values in .env.local

# Start development server
npm run dev
# Open http://localhost:3000

# Build for production
npm run build
npm start
```

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Auth**: NextAuth.js
- **Database**: Firebase (Firestore + Auth)
- **Deployment**: Vercel
