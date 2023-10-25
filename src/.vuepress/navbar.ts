import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/demo/",
  {
    text: "Java",
    // icon: "pen-to-square",
    prefix: "/java",
    children: [
      {
        text: "Java基础",
        // icon: "pen-to-square",
        prefix: "/basic",
        children: [
          {
            text: "面向对象1",
            // icon: "pen-to-square",
            link: "/oop1",
          },
          {
            text: "面向对象2",
            // icon: "pen-to-square",
            link: "/oop2"
          },
        ]
      },
      {
        text: "Java进阶",
        // icon: "pen-to-square",
        prefix: "/advanced",
        children: [
          {
            text: "集合框架",
            // icon: "pen-to-square",
            link: "/list"
          },
          {
            text: "并发框架",
            // icon: "pen-to-square",
            link: "/concurrent"
          },
        ]
      },
    ]
  },
]);
