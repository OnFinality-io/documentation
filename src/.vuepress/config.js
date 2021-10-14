const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "OnFinality Documentation",
  description:
    "Documentation, tutorials, and other support material for OnFinality",
  themeConfig: {
    repo: "https://github.com/OnFinality-io/documentation",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: true,
    logo: "/logo.png",
    hostname: "https://support.onfinality.io",
    footer: "Made by the team at OnFinality with ❤",
    nav: [
      {
        text: "Website",
        link: "https://onfinality.io",
      },
      {
        text: "Login",
        link: "https://app.onfinality.io",
      },
    ],
    sidebarDepth: 3,
    sidebar: [
      {
        path: "/",
        title: "Welcome to SubQuery",
        collapsable: false,
      },
      {
        path: "/getting-started",
        title: "Getting Started",
        collapsable: false,
        children: [
          "/getting-started/",
          "/getting-started/login.md",
          "/getting-started/deploy-node.md",
          "/getting-started/api-service.md",
        ],
      },
      {
        path: "/network-developers/creating",
        title: "Network Developers",
        collapsable: false,
        children: [
          "/network-developers/creating.md",
          "/network-developers/api-upgrade.md",
        ],
      },
    ],
  },
  plugins: ["@vuepress/plugin-back-to-top", "fulltext-search"],
  markdown: {
    extractHeaders: ["h2", "h3"],
  },
});