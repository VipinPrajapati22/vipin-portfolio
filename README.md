# VIPIN Portfolio

Premium personal portfolio for VIPIN, a B.Pharm student at JSS Academy of Technical Education, Noida, focused on pharmacology, regulatory affairs, drug safety, pharmacovigilance, and future Drug Inspector preparation.

## Features

- Next.js App Router with TypeScript
- Tailwind CSS with shadcn/ui-style primitives
- Framer Motion scroll reveals and hero typing animation
- Light mode and dark mode
- Floating navigation with active section highlighting
- Scroll progress indicator
- Responsive recruiter-focused sections
- SEO metadata, Open Graph tags, and JSON-LD
- Local CV download and portrait asset
- Contact form using a mailto handoff

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

Build for production:

```bash
npm run build
```

## Project Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  ui/
  contact-form.tsx
  motion-section.tsx
  navbar.tsx
  portfolio-page.tsx
  scroll-progress.tsx
  theme-provider.tsx
  theme-toggle.tsx
  typing-headline.tsx
lib/
  portfolio-data.ts
  utils.ts
public/
  Vipin-CV.pdf
  assets/vipin-portrait.png
```

## Personalization

Update `lib/portfolio-data.ts` for email, GitHub, certifications, projects, or achievements. Replace `public/Vipin-CV.pdf` and `public/assets/vipin-portrait.png` whenever the resume or photo changes.

## Deploying on Vercel

1. Push this project to a GitHub repository.
2. Import the repository in Vercel.
3. Keep the framework preset as Next.js.
4. Deploy with the default build command: `npm run build`.
5. Set the production domain in `app/layout.tsx` under `metadataBase` after deployment.
