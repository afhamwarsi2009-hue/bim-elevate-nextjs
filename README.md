# BIM Elevate Next.js Website

Production-ready BIM Elevate corporate website built with Next.js App Router.

## Included

- Responsive BIM Elevate landing page
- Sticky desktop and mobile navigation
- Cinematic hero video with poster fallback
- BIM services, trust factors, projects, process, testimonials, FAQ, and inquiry form
- Approved BIM Elevate artwork, branding, project images, and video assets
- Production build configuration for Vercel or any Node.js host

## Requirements

- Node.js 20.9 or newer
- npm 9 or newer

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Download the Source

The complete source code is the `bim-elevate-nextjs` directory. To create a ZIP archive from its parent directory in PowerShell:

```powershell
Compress-Archive -Path .\bim-elevate-nextjs\* -DestinationPath .\bim-elevate-nextjs.zip -Force
```

## Push to GitHub

Create an empty GitHub repository named `bim-elevate-nextjs`, then run:

```bash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/bim-elevate-nextjs.git
git push -u origin main
```

## Deploy to Vercel

Import the GitHub repository in Vercel or run:

```bash
npx vercel
```
