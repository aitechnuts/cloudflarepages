# ☁️ Cloudflare Pages Application

Next.js + TypeScript + Tailwind CSS application deployed on Cloudflare Pages.

## 🚀 Features

- **Next.js App Router** — Server-side rendering and static generation
- **TypeScript** — Full type safety
- **Tailwind CSS** — Utility-first styling
- **Cloudflare Integration** — Optimized for Cloudflare Pages deployment
- **ESLint + Prettier** — Code quality and formatting

## 🛠 Setup

```bash
npm install
```

## 💻 Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build

```bash
npm run build
```

## 🌐 Deployment

Deployed on Cloudflare Pages. Push to `main` branch to trigger automatic deployment.

## 📁 Project Structure

```
cloudflarepages/
├── app/              # Next.js App Router pages
├── public/           # Static assets
├── .next/            # Build output
├── wrangler.toml     # Cloudflare configuration
├── next.config.ts    # Next.js configuration
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json     # TypeScript configuration
```

## 📄 License

MIT License