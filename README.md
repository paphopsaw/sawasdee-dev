# Sawasdee.dev

Personal blog built with [VuePress 2](https://v2.vuepress.vuejs.org/) and the [@vuepress/plugin-blog](https://ecosystem.vuejs.press/plugins/blog/).

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Yarn](https://yarnpkg.com/)

## Getting Started

Install dependencies:

```bash
yarn install
```

Start the development server:

```bash
yarn docs:dev
```

Build for production:

```bash
yarn docs:build
```

## Project Structure

```
docs/
├── .vuepress/
│   ├── components/    # Vue components (ArticleList, TagList)
│   ├── layouts/       # Custom layouts (Articles, Post, Tags)
│   ├── styles/        # Global styles (SCSS)
│   ├── config.js      # VuePress configuration
│   └── client.js      # Client-side configuration
├── posts/             # Blog posts (Markdown)
├── about/             # About page
└── index.md           # Home page
```

## Writing Posts

Add Markdown files to `docs/posts/` with frontmatter:

```markdown
---
title: My Post Title
date: 2025-01-01
tags:
  - tag1
  - tag2
---

Post content here.
```

## License

MIT
