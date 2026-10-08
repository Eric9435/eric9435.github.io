# Eric Multi Blog

A personal publishing website by Aung Phone Myat, covering engineering, music, language learning, and technology.

## Features

- Markdown articles with front matter.
- Blog listing, article pages, and client-side search.
- Automatic category grouping for English/IELTS, music/psychology, electrical engineering, HVAC/ACMV, building services, and technical notes.
- Category distribution chart and recent articles on the home page.

## Stack

Next.js, React, TypeScript, Tailwind CSS, Gray Matter, and Markdown rendering libraries.

## Local development

Use Node.js 22 and npm. From a cloned repository:

```bash
git clone https://github.com/Eric9435/eric9435.github.io.git
cd eric9435.github.io
npm install
npm run dev
```

Open http://localhost:3000. To check and build the application:

```bash
npm run lint
npm run build
```

Run `npm run start` after a successful build. Dependency installation requires internet.

## Content workflow

Add Markdown files to `content/posts/`. The filename becomes the article slug. The loader supports `title`, `date`, and `categories` metadata and derives an excerpt from the body. Articles are sorted by filename, so date-prefixed filenames help maintain chronological order.

- `src/lib/posts.ts` — article loading and category rules.
- `src/app/blog/` — listing and article routes.
- `src/components/BlogSearch.tsx` — search interface.
- `public/` — images and static assets.

## Hosting and verification

The repository name alone does not configure deployment. This is a Next.js application using filesystem-backed content; select a compatible hosting/build workflow. No automated test script is currently defined. Check article rendering and navigation after changes.

## Maintainer

[Aung Phone Myat (Eric)](https://github.com/Eric9435)
