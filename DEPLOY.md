# Deploy to GitHub Pages

This site is deployed as a static Next.js export to GitHub Pages.

## Current setup

- Domain: `https://pveselov.space`
- GitHub target: `marfa77/pveselov`
- Hosting: GitHub Pages, GitHub Actions
- Build output: `out/`
- Custom domain file: `public/CNAME`

## GitHub Pages settings

In the GitHub repository:

1. Go to `Settings` -> `Pages`.
2. Set `Source` to `GitHub Actions`.
3. Push to `main`.
4. The workflow `.github/workflows/deploy.yml` builds the site and deploys `out/`.

## DNS for pveselov.space

For the apex domain, configure these A records at the domain registrar:

```text
@  A  185.199.108.153
@  A  185.199.109.153
@  A  185.199.110.153
@  A  185.199.111.153
```

Optional IPv6 records:

```text
@  AAAA  2606:50c0:8000::153
@  AAAA  2606:50c0:8001::153
@  AAAA  2606:50c0:8002::153
@  AAAA  2606:50c0:8003::153
```

If using `www.pveselov.space`, add:

```text
www  CNAME  marfa77.github.io
```

## Google Search Console

After DNS is live:

1. Add property `https://pveselov.space`.
2. Submit sitemap: `https://pveselov.space/sitemap.xml`.
3. If using HTML meta verification, add repository secret `GOOGLE_SITE_VERIFICATION`.

## Local verification

```bash
npm ci
npm run build
```

The build must create `out/` and include:

- `out/index.html`
- `out/CNAME`
- `out/robots.txt`
- `out/sitemap.xml`
- `out/.nojekyll`
