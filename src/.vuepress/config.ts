import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Journey of Growth",
  description: "Journey of Growth",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
