# Salim President - Portfolio Website

Production-grade personal portfolio website for Salim President, Full-Stack Developer and MCA Student at Uka Tarsadia University, Gujarat, India.

Built with Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Lenis Smooth Scroll, GSAP, and Lucide Icons.

---

## Deploy to Vercel (3 Quick Steps)

### Step 1: Push this project to your GitHub
1. Create a new repository on your GitHub account (`https://github.com/new`). Name it, for example: `portfolio` or `salim-president-portfolio`.
2. In your local terminal inside this folder, run:
```bash
git add .
git commit -m "feat: complete production portfolio setup"
git remote add origin https://github.com/presidentsalim/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2: Import into Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New..."** -> **"Project"**.
2. Select your `YOUR_REPO_NAME` repository from GitHub and click **"Import"**.
3. Keep default settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `next build` (or leave default)
   - **Output Directory**: `.next` (or leave default)

### Step 3: Configure Environment Variables (Optional for contact emails)
Under **Environment Variables** in Vercel project settings, add:
- `RESEND_API_KEY`: Your API key from [Resend](https://resend.com) (if you want contact form emails delivered to your inbox).
- `CONTACT_TO_EMAIL`: `salim.president.dev@gmail.com`
- `NEXT_PUBLIC_SITE_URL`: `https://your-vercel-domain.vercel.app`

Click **"Deploy"**. Your site will build and deploy in under 60 seconds with SSL and global edge CDN.

---

## Local Development Commands

```bash
# Install dependencies
npm install

# Run local development server (http://localhost:3000)
npm run dev

# Run production build
npm run build

# Start production server locally
npm run start

# Run ESLint audit
npm run lint

# Run TypeScript strict type-check
npx tsc --noEmit
```

---

## Key Technical Features

- **Lenis + GSAP Smooth Scroll**: Ultra-responsive 60/120Hz smooth scrolling synchronized with ScrollTrigger.
- **3D Credential Badge**: Interactive credential card with mouse-tilt on desktop, keyboard controls (Enter/Space), and tap-to-flip on mobile.
- **Verified Repositories**: 6 real GitHub case studies with architecture deep-dives and click-to-expand image lightbox.
- **Accessible & Tested**: Zero horizontal scroll across 360px, 768px, and 1440px viewports. WCAG AA contrast, visible keyboard focus rings, and skip-to-content navigation.
- **Contact API Route**: Next.js route handler (`/api/contact`) with honeypot spam protection, IP rate limiting, and Resend delivery fallback.
- **SEO & Social Share**: Configured Open Graph cards, dynamic sitemap (`/sitemap.xml`), robots (`/robots.txt`), and JSON-LD Person schema.
