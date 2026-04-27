# Deployment Instructions

The site is now configured for GitHub Pages, not Vercel.

## Target

- Repository: `marfa77/pveselov`
- Domain: `https://pveselov.space`
- Deployment: GitHub Actions -> GitHub Pages

## Deploy

1. Push the repository to `marfa77/pveselov`.
2. In GitHub, open `Settings` -> `Pages`.
3. Select `GitHub Actions` as the Pages source.
4. Push to `main` or run `Deploy to GitHub Pages` manually from the Actions tab.

The workflow builds the static site with:

```bash
npm ci
npm run build
```

and uploads the generated `out/` directory.

## DNS

Create these records for `pveselov.space`:

```text
@  A  185.199.108.153
@  A  185.199.109.153
@  A  185.199.110.153
@  A  185.199.111.153
```

Optional:

```text
www  CNAME  marfa77.github.io
```

## SEO Check

After deployment:

- `https://pveselov.space`
- `https://pveselov.space/robots.txt`
- `https://pveselov.space/sitemap.xml`

Submit the sitemap in Google Search Console.
