# pveselov.space

Personal professional website for Pavel Veselov: IT & Digital Transformation Leader / Advisory Partner for CEOs and CFOs in trading, finance, and data-heavy businesses.

## Stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Static export for GitHub Pages

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

The project uses `output: "export"` and writes the static site to `out/`.

## Deployment

Deployment is handled by GitHub Actions in `.github/workflows/deploy.yml`.

- Target repository: `marfa77/pveselov`
- Domain: `pveselov.space`
- GitHub Pages source: GitHub Actions

See `DEPLOY.md` for DNS and Google Search Console steps.
