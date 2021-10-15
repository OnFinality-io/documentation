const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "OnFinality Documentation",
  description:
    "Documentation, tutorials, and other support material for OnFinality",
  themeConfig: {
    mdEnhance: {
      enableAll: true,
    },
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
        path: "/getting-started",
        title: "Getting Started",
        collapsable: false,
        children: [
          "/getting-started/",
          "/getting-started/create-an-account.md",
          "/getting-started/login.md",
          "/getting-started/deploy-node.md",
          "/getting-started/api-service.md"
        ],
      },
      {
        path: "/sub0-workshop-recipes",
        title: "Sub0 Workshop Recipes",
        collapsable: false,
        children: [
          "/getting-started/",
          "/getting-started/create-an-account.md",
          "/getting-started/login.md",
          "/getting-started/deploy-node.md",
          "/getting-started/api-service.md"
        ],
      },
      {
        path: "Recipes",
        title: "Recipes",
        collapsable: false,
        children: [
          "/recipes/integrate-into-ci-cd.md"
        ]
      },
      {
        path: "/network-developers/creating",
        title: "Network Developers",
        collapsable: false,
        children: [
          "/network-developers/become-a-partner.md",
          "/network-developers/creating.md",
          "/network-developers/api-upgrade.md",
          "/network-developers/docker-images"
        ],
      },
      {
        path: "/payment",
        title: "Payments",
        collapsable: false,
        children: [
          "/payment/add-payment-method.md",
          "/payment/how-to-apply-coupon.md",
        ],
      },
    ],
  },
  plugins: ["@vuepress/plugin-back-to-top", "fulltext-search"],
  markdown: {
    extractHeaders: ["h2", "h3"],
  },
});
