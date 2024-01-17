import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Java",
    prefix: "/Java",
    children: [
      {
        text: "基础",
        // icon: "pen-to-square",
        link: "/基础/01-Java语言概述.md",
      },
      {
        text: "集合",
        // icon: "pen-to-square",
        link: "/集合/01-基础（一）.md",
      },
      {
        text: "并发",
        // icon: "pen-to-square",
        link: "/基础/01-基础（一）.md",
      },
      {
        text: "IO",
        // icon: "pen-to-square",
        link: "/IO/01-基础（一）.md",
      },
      {
        text: "新特性",
        // icon: "pen-to-square",
        link: "/新特性/01-基础（一）.md",
      },
      {
        text: "JVM",
        // icon: "pen-to-square",
        link: "/JVM/01-基础（一）.md",
      },
    ]
  },
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
          {
            text: "MongoDB",
            // icon: "pen-to-square",
            link: "/MongoDB/01-总览.md",
          },
          {
            text: "ElasticSearch",
            // icon: "pen-to-square",
            link: "/ElasticSearch/01-总览.md",
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
        text: "Java Web",
        link: "/Java Web/01-基础（一）.md",
      },
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
          {
            text: "Spring Security",
            // icon: "pen-to-square",
            link: "/Spring Security/01-基础（一）.md",
          },
        ]
      },
      {
        text: "持久层",
        prefix: "/持久层",
        children: [
          {
            text: "JDBC",
            // icon: "pen-to-square",
            link: "/05-JDBC.md",
          },
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
      {
        text: "分布式",
        prefix: "/分布式",
        children: [
          {
            text: "Dubbo",
            // icon: "pen-to-square",
            link: "/Dubbo/01-基础（一）.md",
          },
          {
            text: "Zookeeper",
            // icon: "pen-to-square",
            link: "/Zookeeper/01-基础（一）.md",
          },
        ]
      },
      {
        text: "网络IO",
        prefix: "/网络IO",
        children: [
          {
            text: "Netty",
            // icon: "pen-to-square",
            link: "/Netty/01-基础（一）.md",
          },
          {
            text: "Nginx",
            // icon: "pen-to-square",
            link: "/Nginx/01-基础（一）.md",
          },
        ]
      },
      {
        text: "消息队列",
        prefix: "/消息队列",
        children: [
          {
            text: "RabbitMQ",
            // icon: "pen-to-square",
            link: "/RabbitMQ/01-基础（一）.md",
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
        text: "Idea",
        // icon: "pen-to-square",
        link: "/Idea/03-IDEA 常用快捷键.md",
      },
      {
        text: "Docker",
        // icon: "pen-to-square",
        link: "/Docker/01-Docker简介.md",
      },
      {
        text: "K8S",
        // icon: "pen-to-square",
        link: "/K8S/01-基础（一）.md",
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
  {
    text: "开发",
    prefix: "/开发",
    children: [
      {
        text: "代码规范",
        // icon: "pen-to-square",
        link: "/代码规范/01-基础（一）.md",
      },
      {
        text: "设计模式",
        // icon: "pen-to-square",
        link: "/设计模式/01-基础（一）.md",
      },
    ]
  },
  {
    text: "证券交易",
    link: "/证券交易/日本蜡烛图技术.md",
  },
]);
