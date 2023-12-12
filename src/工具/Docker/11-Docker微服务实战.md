---
date: 2021-09-10
category:
  - Docker
tag:
  - Docker
order: 11
---

# Docker微服务实战

## 1 新建一个普通微服务模块

**建Module**

docker_boot

**改POM**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.5.6</version>
    <relativePath/>
  </parent>
  
  <groupId>com.atguigu.docker</groupId>
  <artifactId>docker_boot</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  
  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <maven.compiler.source>1.8</maven.compiler.source>
    <maven.compiler.target>1.8</maven.compiler.target>
    <junit.version>4.12</junit.version>
    <log4j.version>1.2.17</log4j.version>
    <lombok.version>1.16.18</lombok.version>
    <mysql.version>5.1.47</mysql.version>
    <druid.version>1.1.16</druid.version>
    <mapper.version>4.1.5</mapper.version>
    <mybatis.spring.boot.version>1.3.0</mybatis.spring.boot.version>
  </properties>
  
  <dependencies>
    <!--SpringBoot通用依赖模块-->
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-actuator</artifactId>
    </dependency>
    <!--test-->
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-test</artifactId>
      <scope>test</scope>
    </dependency>
  </dependencies>
  
  <build>
    <plugins>
      <plugin>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-maven-plugin</artifactId>
      </plugin>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-resources-plugin</artifactId>
        <version>3.1.0</version>
      </plugin>
    </plugins>
  </build>
  
</project>
```

**写YML**

```
server.port=6001
```

**主启动**

```java
package com.atguigu.docker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DockerBootApplication {
    public static void main(String[] args) {
        SpringApplication.run(DockerBootApplication.class, args);
    }
}
```

**业务类**

```java
package com.atguigu.docker.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
public class OrderController {
    @Value("${server.port}")
    private String port;

    @RequestMapping("/order/docker")
    public String helloDocker() {
        return "hello docker" + "\t" + port + "\t" + UUID.randomUUID().toString();
    }

    @RequestMapping(value = "/order/index", method = RequestMethod.GET)
    public String index() {
        return "服务端口号: " + "\t" + port + "\t" + UUID.randomUUID().toString();
    }
}
```

请求测试：

http://localhost:6001/order/index

服务端口号: 6001 6cdb2ab0-2a80-4146-afec-04705d69af56

http://localhost:6001/order/docker

hello docker 6001 bf9ce88a-8e7d-4893-af0b-249129aa0588

## 2 通过dockerfile发布微服务部署到docker容器

**IDEA工具里面搞定微服务jar包**

通过Maven --> Lifecycle --> package打包，生成docker_boot-0.0.1-SNAPSHOT.jar

**编写Dockerfile**

```dockerfile
# 基础镜像使用java
FROM java:8
# 作者
MAINTAINER gm
# VOLUME 指定临时文件目录为/tmp，在主机/var/lib/docker目录下创建了一个临时文件并链接到容器的/tmp
VOLUME /tmp
# 将jar包添加到容器中并更名为gm_docker.jar
ADD docker_boot-0.0.1-SNAPSHOT.jar gm_docker.jar
# 运行jar包
RUN bash -c 'touch /gm_docker.jar'
ENTRYPOINT ["java","-jar","/gm_docker.jar"]
#暴露6001端口作为微服务
EXPOSE 6001
```

将微服务jar包和Dockerfile文件上传到同一个目录下/mydocker

```sh
[root@192 mydockerfile]# pwd
/mydockerfile
[root@192 mydockerfile]# ll
总用量 19060
-rw-r--r--. 1 root root 19514764 12月 10 23:14 docker_boot-0.0.1-SNAPSHOT.jar
-rw-r--r--. 1 root root        0 12月 10 23:15 Dockerfile
[root@192 mydockerfile]# vim Dockerfile
```

!**构建镜像**

```sh
docker build -t gm_docker:1.6 .

[root@192 mydockerfile]# docker build -t gm_docker:1.6 .
[+] Building 78.9s (8/8) FINISHED                                                                                       docker:default
 => [internal] load build definition from Dockerfile                                                                              0.0s
 => => transferring dockerfile: 540B                                                                                              0.0s
 => [internal] load .dockerignore                                                                                                 0.0s
 => => transferring context: 2B                                                                                                   0.0s
 => [internal] load metadata for docker.io/library/java:8                                                                        16.0s
 => [internal] load build context                                                                                                 0.1s
 => => transferring context: 19.52MB                                                                                              0.1s
 => [1/3] FROM docker.io/library/java:8@sha256:c1ff613e8ba25833d2e1940da0940c3824f03f802c449f3d1815a66b7f8c0e9d                  61.9s
 => => resolve docker.io/library/java:8@sha256:c1ff613e8ba25833d2e1940da0940c3824f03f802c449f3d1815a66b7f8c0e9d                   0.0s
 => => sha256:5040bd2983909aa8896b9932438c3f1479d25ae837a5f6220242a264d0221f2d 51.36MB / 51.36MB                                 28.7s
 => => sha256:d23bdf5b1b1b1afce5f1d0fd33e7ed8afbc084b594b9ccf742a5b27080d8a4a8 4.73kB / 4.73kB                                    0.0s
 => => sha256:fce5728aad85a763fe3c419db16885eb6f7a670a42824ea618414b8fb309ccde 18.54MB / 18.54MB                                 15.9s
 => => sha256:76610ec20bf5892e24cebd4153c7668284aa1d1151b7c3b0c7d50c579aa5ce75 42.50MB / 42.50MB                                 23.2s
 => => sha256:c1ff613e8ba25833d2e1940da0940c3824f03f802c449f3d1815a66b7f8c0e9d 2.00kB / 2.00kB                                    0.0s
 => => sha256:60170fec2151d2108ed1420625c51138434ba4e0223d3023353d3f32ffe3cfc2 593.15kB / 593.15kB                               16.7s
 => => sha256:e98f73de8f0d2ef292f58b004d67bc6e9ee779dcfaff7ebb3964649d4787b872 214B / 214B                                       17.1s
 => => sha256:11f7af24ed9cf47597dd6cf9963bb3e9109c963f0135e869a9e9b4999fdc12a3 242B / 242B                                       17.5s
 => => sha256:49e2d6393f32abb1de7c9395c04c822ceb2287383d5a90998f7bd8dbfd43d48c 130.10MB / 130.10MB                               54.5s
 => => sha256:bb9cdec9c7f337940f7d872274353b66e118412cbfd433c711361bcf7922aea4 289.05kB / 289.05kB                               23.7s
 => => extracting sha256:5040bd2983909aa8896b9932438c3f1479d25ae837a5f6220242a264d0221f2d                                         3.7s
 => => extracting sha256:fce5728aad85a763fe3c419db16885eb6f7a670a42824ea618414b8fb309ccde                                         0.8s
 => => extracting sha256:76610ec20bf5892e24cebd4153c7668284aa1d1151b7c3b0c7d50c579aa5ce75                                         3.6s
 => => extracting sha256:60170fec2151d2108ed1420625c51138434ba4e0223d3023353d3f32ffe3cfc2                                         0.1s
 => => extracting sha256:e98f73de8f0d2ef292f58b004d67bc6e9ee779dcfaff7ebb3964649d4787b872                                         0.0s
 => => extracting sha256:11f7af24ed9cf47597dd6cf9963bb3e9109c963f0135e869a9e9b4999fdc12a3                                         0.0s
 => => extracting sha256:49e2d6393f32abb1de7c9395c04c822ceb2287383d5a90998f7bd8dbfd43d48c                                         7.2s
 => => extracting sha256:bb9cdec9c7f337940f7d872274353b66e118412cbfd433c711361bcf7922aea4                                         0.0s
 => [2/3] ADD docker_boot-0.0.1-SNAPSHOT.jar gm_docker.jar                                                                        0.5s
 => [3/3] RUN bash -c 'touch /gm_docker.jar'                                                                                      0.2s
 => exporting to image                                                                                                            0.1s
 => => exporting layers                                                                                                           0.1s
 => => writing image sha256:359befcbb358f83177afff003150597e0dacd7bf08c9220c8bb971bef52af65f                                      0.0s
 => => naming to docker.io/library/gm_docker:1.6                                                                                  0.0s
```

**运行容器**

```sh
 docker run -d -p 6001:6001 gm_docker:1.6
 
[root@192 mydockerfile]# docker images
REPOSITORY                     TAG       IMAGE ID       CREATED          SIZE
gm_docker                      1.6       359befcbb358   2 minutes ago    682MB
centos7java8                   1.5       95e10f5755c2   50 minutes ago   1.33GB
192.168.11.132:5000/myubuntu   1.2       776f0b498306   26 hours ago     122MB
tomcat                         latest    fb5657adc892   23 months ago    680MB
mysql                          5.7       c20987f18b13   23 months ago    448MB
registry                       latest    b8604a3fe854   2 years ago      26.2MB
ubuntu                         latest    ba6acccedd29   2 years ago      72.8MB
centos                         latest    5d0da3dc9764   2 years ago      231MB
redis                          6.0.8     16ecd2772934   3 years ago      104MB

[root@192 mydockerfile]#  docker run -d -p 6001:6001 gm_docker:1.6
8ec1213a2b602ea65cdae6f64142eed0521c65e133245b980da5fc851c5346ea
[root@192 mydockerfile]# curl 127.0.0.1:6001/order/index
服务端口号:     6001    499cd297-95b0-400b-af4a-48f93c5e48a3[root@192 mydockerfile]#
[root@192 mydockerfile]# curl 127.0.0.1:6001/order/docker
hello docker    6001    a0963342-3cdd-4ff2-8ddb-cb78adc96db6[root@192 mydockerfile]#

```

**访问测试**

http://192.168.11.132:6001/order/index

服务端口号: 6001 74566354-cbb7-4c26-bf2a-e2a0991b93d3

http://192.168.11.132:6001/order/docker

hello docker 6001 ede92231-fe08-46f1-b5dc-d5b07d5c1f0e