# jimnguyen.dev

My personal site — portfolio, resume, and a growing set of small standalone web apps I build instead of mobile apps, all under [Projects](https://jimnguyen.dev/#projects).

Built with [Next.js](https://nextjs.org) (App Router), TypeScript, and Tailwind CSS, exported as a static site and deployed to GitHub Pages via GitHub Actions.

## Development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # static export to out/
```

## Structure

- `src/app/page.tsx` — assembles the page from sections (Projects — "Live" apps + "Legacy" portfolio pieces, Skills, About, Resume, Contact)
- `src/data/` — content as data: `projects.ts` (legacy portfolio pieces), `apps.ts` (live playground apps), `skills.ts`, `resume.ts`, `site.ts`
- `src/components/` — one component per section/card
- `public/apps/<slug>/` — standalone playground apps (plain HTML/CSS/JS, no build step)

## Adding a playground app

1. Drop a self-contained page at `public/apps/<slug>/index.html`
2. Give it a back-link to `https://jimnguyen.dev/` (see `public/apps/chicken/index.html` for the pattern)
3. Add an entry to `src/data/apps.ts`

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the static export and publishes it to GitHub Pages at the custom domain `jimnguyen.dev` (see `public/CNAME`).
