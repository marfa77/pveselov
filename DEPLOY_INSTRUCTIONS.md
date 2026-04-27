# Deployment Instructions for Auto Agents

This project deploys to GitHub Pages. Do not use Vercel.

## Target

- Local project: `/Users/pavelveselov/Projects/Archieve/miniSAAS/pixid-portfolio`
- Remote: use the configured `origin`
- Branch: `main`
- Domain: `https://pveselov.space`
- Hosting: GitHub Pages
- Deploy trigger: push `main` to GitHub
- Build artifact: `out/`

## One-time: enable GitHub Pages in the repository

In GitHub, open the repo then:

1. `Settings` -> `Pages`
2. Under `Build and deployment`, set `Source` to `GitHub Actions` (not `Deploy from a branch`).

This step must be done once. Until Pages is set to `GitHub Actions` and a site record exists, deployment may fail. If the workflow used `actions/configure-pages`, that step can fail with `Not Found` (no site) or with `Resource not accessible by integration` (token cannot create the site via the API) — the deploy workflow in this repository omits that step; you still need the one-time `Settings` enablement.

## Deploy Steps

1. Go to the project directory:

```bash
cd /Users/pavelveselov/Projects/Archieve/miniSAAS/pixid-portfolio
```

2. Check the current state:

```bash
git status --short --branch
```

3. If there are uncommitted changes, review them first:

```bash
git diff
```

4. If the changes are intentional, commit them:

```bash
git add .
git commit -m "chore: update site"
```

5. Check GitHub CLI authentication:

```bash
gh auth status
```

If not logged in, stop and ask the user to run:

```bash
gh auth login
```

6. Push `main` using the GitHub CLI token. Use this exact command because a plain `git push` can fail with `could not read Username for 'https://github.com': Device not configured`.

```bash
GH_TOKEN="$(gh auth token)" git -c credential.helper='!f() { echo username=x-access-token; echo password=$GH_TOKEN; }; f' push origin main
```

7. Check the latest GitHub Actions runs:

```bash
gh run list --limit 5
```

8. If needed, watch the newest run:

```bash
gh run watch
```

9. After the workflow succeeds, verify the live site:

```bash
curl -I https://pveselov.space
curl -I https://pveselov.space/robots.txt
curl -I https://pveselov.space/sitemap.xml
```

## Local Build Check

Run this before pushing if the change touches app code, routing, metadata, or deployment config:

```bash
npm ci
npm run build
```

The build must generate the static export in `out/`.

Expected files:

- `out/index.html`
- `out/CNAME`
- `out/robots.txt`
- `out/sitemap.xml`
- `out/.nojekyll`

## Hard Rules

- Do not use Vercel.
- Do not delete `.github/workflows/deploy.yml`.
- Do not delete `public/CNAME`.
- Do not delete `public/.nojekyll`.
- Do not run `git reset --hard`.
- Do not run `git checkout --` on user changes.
- Do not change the `origin` remote unless the user explicitly asks.
- Deployment is considered triggered only after a successful `push origin main`.

## SEO / Indexing Checks

After deployment, these URLs should be reachable:

- `https://pveselov.space`
- `https://pveselov.space/robots.txt`
- `https://pveselov.space/sitemap.xml`

Use the HTTPS sitemap URL in Google Search Console:

```text
https://pveselov.space/sitemap.xml
```
