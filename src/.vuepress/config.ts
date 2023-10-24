import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Journey of Growth",
  description: "Journey of Growth",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
