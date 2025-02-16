import { blogPlugin } from "@vuepress/plugin-blog";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

const dateSorter = (pageA, pageB) => {
  if (!pageB.frontmatter.date) return 1;
  if (!pageA.frontmatter.date) return -1;

  return (
    new Date(pageB.frontmatter.date).getTime() -
    new Date(pageA.frontmatter.date).getTime()
  );
};

export default defineUserConfig({
  lang: "en-US",

  title: "Sawasdee.dev",
  description: "My first VuePress Site",

  theme: defaultTheme({
    contributors: false,
    navbar: [
      {
        text: "About",
        link: "/about/",
      },
      {
        text: "Blog",
        link: "/blog/",
      },
    ],
  }),

  plugins: [
    blogPlugin({
      // Only files under posts are articles
      filter: ({ filePathRelative }) =>
        filePathRelative ? filePathRelative.startsWith("posts/") : false,

      // Getting article info
      getInfo: ({ frontmatter, title, data }) => ({
        title,
        author: frontmatter.author || "",
        date: frontmatter.date || null,
        tag: frontmatter.tag || [],
      }),

      category: [
        {
          key: "tags",
          getter: (page) => page.frontmatter.tag || [],
          path: "/blog/tags/",
          layout: "Tags",
          itemPath: "/blog/tags/:name/",
          itemLayout: "Tags",
          frontmatter: () => ({
            title: "Tags",
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `Tag ${name}`,
            sidebar: false,
          }),
          sorter: dateSorter,
        },
      ],

      type: [
        {
          key: "articles",
          // Remove archive articles
          filter: (page) => !page.frontmatter.archive,
          path: "/blog/",
          layout: "Articles",
          frontmatter: () => ({
            title: "Articles",
            sidebar: false,
          }),
          // Sort pages with time
          sorter: dateSorter,
        },
      ],
      hotReload: true,
    }),
  ],

  bundler: viteBundler(),
});
