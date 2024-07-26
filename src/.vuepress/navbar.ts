import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "交易日志",
    icon: "clipboard",
    link: "https://theme-hope.vuejs.press/zh/",
  },
  {
    text: "读书笔记",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
  {
    text: "他人经验",
    icon: "book",
    prefix: "/fenxi/",
    children: [
      { text: "banana3", icon: "pen-to-square", link: "banana3" },
      { text: "laolu", icon: "pen-to-square", link: "laolu" },
    ]
  },
]);
