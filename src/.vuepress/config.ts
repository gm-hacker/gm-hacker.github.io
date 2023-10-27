import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Journey of Growth",
  description: "Journey of Growth",

  theme,

  plugins: [
    searchPlugin({
      // https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html
      // 排除首页
      isSearchable: (page) => page.path !== "/",
      maxSuggestions: 10,
      hotKeys: ["s", "/"],
      // 用于在页面的搜索索引中添加额外字段
      getExtraFields: () => [],
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    }),
    // searchProPlugin({
    //   // 索引全部内容
    //   indexContent: true,
    //   // 为分类和标签添加索引
    //   customFields: [
    //     {
    //       getter: (page) => page.frontmatter.category,
    //       formatter: "分类：$content",
    //     },
    //     {
    //       getter: (page) => page.frontmatter.tag,
    //       formatter: "标签：$content",
    //     },
    //   ],
    // }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
