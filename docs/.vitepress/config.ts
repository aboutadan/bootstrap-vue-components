import { defineConfig } from "vitepress";

export default defineConfig({
  title: "bootstrap-custom-vue-ui",
  description:
    "Vue 3 component library wrapping Bootstrap CSS without Bootstrap JS",
  base: "/bootstrap-vue-components/",
  themeConfig: {
    nav: [
      { text: "Guide", link: "/getting-started" },
      { text: "Components", link: "/components/button" },
      {
        text: "GitHub",
        link: "https://github.com/aboutadan/bootstrap-vue-components",
      },
    ],
    sidebar: {
      "/": [
        {
          text: "Guide",
          items: [
            { text: "Introduction", link: "/" },
            { text: "Getting Started", link: "/getting-started" },
          ],
        },
        {
          text: "Components",
          items: [{ text: "VButton", link: "/components/button" }],
        },
      ],
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/aboutadan/bootstrap-vue-components",
      },
    ],
  },
});
