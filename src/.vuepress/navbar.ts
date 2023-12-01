import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/demo/",
  // {
  //   text: "面试",
  //   prefix: "/面试/",
  //   children: [
  //     {
  //       text: "Java基础",
  //       // icon: "pen-to-square",
  //       link: "Java/1-Java基础面试题(一)",
  //     },
  //   ]
  // },
  {
    text: "数据库",
    prefix: "/数据库",
    children: [
      {
        text: "SQL",
        children: [
          {
            text: "MySQL",
            // icon: "pen-to-square",
            link: "/MySQL/01-总览.md",
          },
        ]
      },
      {
        text: "NOSQL",
        children: [
          {
            text: "Redis",
            // icon: "pen-to-square",
            link: "/Redis/01-总览.md",
          },
        ]
      },
    ]
  },
  // {
  //   text: "Java",
  //   // icon: "pen-to-square",
  //   prefix: "/java",
  //   children: [
  //     {
  //       text: "Java基础",
  //       // icon: "pen-to-square",
  //       prefix: "/basic",
  //       children: [
  //         {
  //           text: "面向对象1",
  //           // icon: "pen-to-square",
  //           link: "/oop1",
  //         },
  //         {
  //           text: "面向对象2",
  //           // icon: "pen-to-square",
  //           link: "/oop2"
  //         },
  //       ]
  //     },
  //     {
  //       text: "Java进阶",
  //       // icon: "pen-to-square",
  //       prefix: "/advanced",
  //       children: [
  //         {
  //           text: "集合框架",
  //           // icon: "pen-to-square",
  //           link: "/list"
  //         },
  //         {
  //           text: "并发框架",
  //           // icon: "pen-to-square",
  //           link: "/concurrent"
  //         },
  //       ]
  //     },
  //   ]
  // },
]);
