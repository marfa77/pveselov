# PIXID Studio Portfolio

A modern, responsive portfolio website showcasing PIXID Studio's innovative digital products and solutions.

## Features

- **Modern Design**: Clean, professional design with dark mode support
- **Project Showcase**: Detailed project pages with features, tech stack, and descriptions
- **Responsive**: Fully responsive design that works on all devices
- **Fast**: Built with Next.js 14 for optimal performance
- **SEO Optimized**: Proper meta tags and structured data

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide Icons**

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── projects/
│   │   ├── page.tsx        # Projects listing
│   │   └── [id]/
│   │       └── page.tsx    # Individual project page
│   └── about/
│       └── page.tsx        # About page
├── components/
│   ├── Navigation.tsx      # Navigation component
│   └── ProjectCard.tsx     # Project card component
└── lib/
    ├── projects.ts         # Project data
    └── utils.ts            # Utility functions
```

## Projects Showcased

1. **PixID Studio** - AI-powered visa and ID photo creation
2. **CIPLE A2 Master** - Portuguese citizenship exam preparation
3. **SAT Navigator** - SAT exam preparation platform
4. **UAE Property AI Bot** - Real estate AI assistant
5. **SurfaceCheck** - Chrome extension for website analysis
6. **webmorp.art** - Fast website transformation service
7. **BenchEnergy** - Automated coal and energy market news publishing system with AI-powered analysis
8. **Binance Trading Bot** - Semi-automated cryptocurrency trading bot

## License

MIT
