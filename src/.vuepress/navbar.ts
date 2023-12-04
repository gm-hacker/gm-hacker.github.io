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
  {
    text: "框架",
    prefix: "/框架",
    children: [
      {
        text: "Spring",
        prefix: "/Spring",
        children: [
          {
            text: "SpringMVC",
            // icon: "pen-to-square",
            link: "/SpringMVC/01-基础（一）.md",
          },
          {
            text: "Spring5",
            // icon: "pen-to-square",
            link: "/Spring5/01-基础（一）.md",
          },
          {
            text: "Spring6",
            // icon: "pen-to-square",
            link: "/Spring6/01-基础（一）.md",
          },
          {
            text: "SpringBoot 2",
            // icon: "pen-to-square",
            link: "/SpringBoot 2/01-基础（一）.md",
          },
          {
            text: "SpringBoot 3",
            // icon: "pen-to-square",
            link: "/SpringBoot 3/01-基础（一）.md",
          },
          {
            text: "SpringCloud",
            // icon: "pen-to-square",
            link: "/SpringCloud/01-基础（一）.md",
          },
        ]
      },
      {
        text: "持久层",
        prefix: "/持久层",
        children: [
          {
            text: "MyBatis",
            // icon: "pen-to-square",
            link: "/01-MyBatis（一）.md",
          },
          {
            text: "MyBatis-Plus",
            // icon: "pen-to-square",
            link: "/03-MyBatis-Plus（一）.md",
          },
        ]
      },
    ]
  },
  {
    text: "工具",
    prefix: "/工具",
    children: [
      {
        text: "Docker",
        // icon: "pen-to-square",
        link: "/Docker/01-基础（一）.md",
      },
      {
        text: "Git",
        // icon: "pen-to-square",
        link: "/Git/01-基础（一）.md",
      },
      {
        text: "Linux",
        // icon: "pen-to-square",
        link: "/Linux/01-基础（一）.md",
      },
      {
        text: "Maven",
        // icon: "pen-to-square",
        link: "/Maven/01-基础（一）.md",
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
