# Astro Theme Tin

A minimal Astro blog theme built with Tailwind CSS v4, featuring tags, archives, pagination, and KaTeX math rendering.

## Quick Start

```sh
npm create astro@latest -- --template szkm330/astro-theme-tin
```

## Update

```sh
npx @astrojs/upgrade
```

## Project Structure

```text
/
├── public/
├── src/
│   ├── blog/              # Blog posts (Markdown)
│   ├── components/        # Astro components
│   ├── content/           # Content (about page, etc.)
│   ├── layouts/           # Layout templates
│   ├── pages/             # Page routes
│   ├── styles/            # Global styles
│   ├── config.ts          # Site configuration
│   └── content.config.ts  # Content collection config
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Configuration

Edit `src/config.ts` to customize your site:

```ts
export const siteConfig = {
  site: {
    title: "My Blog",
    language: 'zh-CN',
    favicon: '/favicon.ico',
    logo: '/favicon.svg',
  },
  pagination: {
    postsPerPage: 6,
  },
};
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command            | Action                                           |
| :----------------- | :----------------------------------------------- |
| `npm install`      | Installs dependencies                            |
| `npm run dev`      | Starts local dev server at `localhost:4321`       |
| `npm run build`    | Build your production site to `./dist/`           |
| `npm run preview`  | Preview your build locally, before deploying      |

## Features

- Tailwind CSS v4
- Tag-based categorization and archive page
- Pagination support
- KaTeX math formula rendering
- Syntax highlighting (Shiki - gruvbox-dark-soft)

## Want to learn more?

Feel free to check [Astro documentation](https://docs.astro.build) or jump into the [Discord server](https://astro.build/chat).