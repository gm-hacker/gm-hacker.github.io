import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/demo/",
  {
    text: "面试",
    prefix: "/面试/",
    children: [
      "1-Java基础",
      "2-Java集合",
      "3-Java并发",
      "4-JVM",
    ]
  },
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
