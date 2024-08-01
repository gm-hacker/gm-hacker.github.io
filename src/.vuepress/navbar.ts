import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "股票分析",
    icon: "arrow-trend-up",
    link: "/股票分析/01-总览.md",
  },
  {
    text: "交易日志",
    icon: "clipboard",
    link: "/交易日志/01-总览.md",
  },
  {
    text: "学习笔记",
    icon: "book",
    link: "/学习笔记/01-总览.md",
  },
  {
    text: "经验杂谈",
    icon: "mug-saucer",
    link: "/经验杂谈/01-总览.md",
    // prefix: "/经验杂谈/",
    // children: [
    //   { text: "banana3", icon: "pen-to-square", link: "banana3" },
    //   { text: "laolu", icon: "pen-to-square", link: "laolu" },
    // ]
  },
]);
