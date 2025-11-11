import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-Hans",
  title: "HFLive 技术文档",
  description: "华附直播团队技术文档集合站。",

  head: [
    ["link", { rel: "icon", type: "image", href: "/hflive-techdoc-logo.svg" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "华附直播团队技术文档" }],
    ["meta", { property: "og:site_name", content: "华附直播团队" }],
  ],

  ignoreDeadLinks: "localhostLinks",

  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/hflive-techdoc-logo.webp",

    externalLinkIcon: true,

    nav: [
      { text: "指南", link: "/guide/hflive13.0-techdoc" },
      { text: "bilibili", link: "https://space.bilibili.com/324280848" },
      {
        text: "GitHub",
        link: "https://github.com/HFLive/HFLive-TechDoc",
      },
    ],

    sidebar: [
      {
        text: "指南",
        items: [
          {
            text: "HFLive13.0 技术指南",
            base: "/guide/",
            link: "hflive13.0-techdoc",
          },
          {
            text: "歌词显示",
            base: "/guide/",
            link: "lyrics-display",
          },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/HFLive/HFLive-TechDoc",
      },
    ],

    editLink: {
      pattern: "https://github.com/HFLive/HFLive-TechDoc/tree/main/:path",
      text: "在 GitHub 上编辑此页面",
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
    },

    notFound: {
      title: "页面未找到",
      quote: "但生活就像海洋，只有意志坚强的人才能到达彼岸。",
      linkLabel: "返回首页",
      linkText: "返回首页",
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    skipToContentLabel: "跳转到内容",
  },
});
