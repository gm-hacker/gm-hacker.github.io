---
date: 2021-09-10
category:
  - Docker
tag:
  - Docker
order: 13
---

# Docker-compose容器编排

## 1 概述

Docker-Compose是Docker官方的开源项目， 负责实现对Docker容器集群的快速编排。

Compose 是 Docker 公司推出的一个工具软件，可以管理多个 Docker 容器组成一个应用。你需要定义一个 YAML 格式的配置文件docker-compose.yml，**写好多个容器之间的调用关系**。然后，只要一个命令，就能同时启动/关闭这些容器

## 2 作用

docker建议我们每一个容器中只运行一个服务，因为docker容器本身占用资源极少，所以最好是将每个服务单独的分割开来但是这样我们又面临了一个问题？

如果我需要同时部署好多个服务，难道要每个服务单独写Dockerfile然后在构建镜像，构建容器，这样累都累死了,所以docker官方给我们提供了docker-compose多服务部署的工具。

例如要实现一个Web微服务项目，除了Web服务容器本身，往往还需要再加上后端的数据库mysql服务容器，redis服务器，注册中心eureka，甚至还包括负载均衡容器等等。

Compose允许用户通过一个单独的**docker-compose.yml模板文件**（YAML 格式）来定义**一组相关联的应用容器为一个项目（project）**。

可以很容易地用一个配置文件定义一个多容器的应用，然后使用一条指令安装这个应用的所有依赖，完成构建。Docker-Compose 解决了容器与容器之间如何管理编排的问题。

## 3 安装

官网：https://docs.docker.com/compose/compose-file/compose-file-v3/

官网下载：https://docs.docker.com/compose/install/

安装与更新步骤：

```bash
$ sudo yum update
$ sudo yum install docker-compose-plugin

$ docker compose version

[root@192 ~]# docker compose version
Docker Compose version v2.21.0
```

卸载步骤：

```sh
$ sudo yum remove docker-compose-plugin
```

## 4 Compose核心概念

**一文件：docker-compose.yml**

**两要素:**

- 服务（service）:一个个应用容器实例，比如订单微服务、库存微服务、mysql容器、nginx容器或者redis容器
- 工程（project）：由一组关联的应用容器组成的一个**完整业务单元**，在 docker-compose.yml 文件中定义。

**Compose使用的三个步骤**：

1. 编写Dockerfile定义各个微服务应用并构建出对应的镜像文件
2. 使用 docker-compose.yml 定义一个完整业务单元，安排好整体应用中的各个容器服务。
3. 最后，执行docker-compose up命令 来启动并运行整个应用程序，完成一键部署上线

## 5 Compose常用命令

```bash
Compose常用命令：
# 查看帮助
docker compose -h  
# 启动所有docker-compose服务
docker compose up 
# 启动所有docker-compose服务并后台运行
docker compose up -d   
# 停止并删除容器、网络、卷、镜像。
docker compose down
# 进入容器实例内部  docker-compose exec docker-compose.yml文件中写的服务id /bin/bash
docker compose exec  yml里面的服务id                 
# 展示当前docker-compose编排过的运行的所有容器
docker compose ps            
# 展示当前docker-compose编排过的容器进程 
docker compose top
# 查看容器输出日志
docker compose logs  yml里面的服务id
# 检查配置
docker compose config
# 检查配置，有问题才有输出
docker compose config -q 
# 重启服务
docker compose restart   
# 启动服务
docker compose start     
# 停止服务
docker compose stop      
```

## 6 Compose编排微服务

### 1.升级微服务工程docker_boot

升级之后的样子：

![image-20231212211135831](image/image-20231212211135831.png)

#### 建表建库

```sql
CREATE TABLE `t_user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL DEFAULT '' COMMENT '用户名',
  `password` varchar(50) NOT NULL DEFAULT '' COMMENT '密码',
  `sex` tinyint(4) NOT NULL DEFAULT '0' COMMENT '性别 0=女 1=男 ',
  `deleted` tinyint(4) unsigned NOT NULL DEFAULT '0' COMMENT '删除标志，默认0不删除，1删除',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='用户表';
```

#### 改POM

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.5.6</version>
        <!--<version>2.3.10.RELEASE</version>-->
        <relativePath/> <!-- lookup parent from repository -->
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
        <!--guava Google 开源的 Guava 中自带的布隆过滤器-->
        <dependency>
            <groupId>com.google.guava</groupId>
            <artifactId>guava</artifactId>
            <version>23.0</version>
        </dependency>
        <!-- redisson -->
        <dependency>
            <groupId>org.redisson</groupId>
            <artifactId>redisson</artifactId>
            <version>3.13.4</version>
        </dependency>
        <!--SpringBoot通用依赖模块-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>
        <!--swagger2-->
        <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-swagger2</artifactId>
            <version>2.9.2</version>
        </dependency>
        <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-swagger-ui</artifactId>
            <version>2.9.2</version>
        </dependency>
        <!--SpringBoot与Redis整合依赖-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-redis</artifactId>
        </dependency>
        <!--springCache-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-cache</artifactId>
        </dependency>
        <!--springCache连接池依赖包-->
        <dependency>
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-pool2</artifactId>
        </dependency>
        <!-- jedis -->
        <dependency>
            <groupId>redis.clients</groupId>
            <artifactId>jedis</artifactId>
            <version>3.1.0</version>
        </dependency>
        <!--Mysql数据库驱动-->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>5.1.47</version>
        </dependency>
        <!--SpringBoot集成druid连接池-->
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid-spring-boot-starter</artifactId>
            <version>1.1.10</version>
        </dependency>
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid</artifactId>
            <version>${druid.version}</version>
        </dependency>
        <!--mybatis和springboot整合-->
        <dependency>
            <groupId>org.mybatis.spring.boot</groupId>
            <artifactId>mybatis-spring-boot-starter</artifactId>
            <version>${mybatis.spring.boot.version}</version>
        </dependency>
        <!-- 添加springboot对amqp的支持 -->
<!--        <dependency>-->
<!--            <groupId>org.springframework.boot</groupId>-->
<!--            <artifactId>spring-boot-starter-amqp</artifactId>-->
<!--        </dependency>-->
        <dependency>
            <groupId>commons-codec</groupId>
            <artifactId>commons-codec</artifactId>
            <version>1.10</version>
        </dependency>
        <!--通用基础配置junit/devtools/test/log4j/lombok/hutool-->
        <!--hutool-->
        <dependency>
            <groupId>cn.hutool</groupId>
            <artifactId>hutool-all</artifactId>
            <version>5.2.3</version>
        </dependency>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>${junit.version}</version>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <scope>runtime</scope>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>log4j</groupId>
            <artifactId>log4j</artifactId>
            <version>${log4j.version}</version>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <version>${lombok.version}</version>
            <optional>true</optional>
        </dependency>
        <!--persistence-->
        <dependency>
            <groupId>javax.persistence</groupId>
            <artifactId>persistence-api</artifactId>
            <version>1.0.2</version>
        </dependency>
        <!--通用Mapper-->
        <dependency>
            <groupId>tk.mybatis</groupId>
            <artifactId>mapper</artifactId>
            <version>${mapper.version}</version>
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

#### 写YML

```properties
server.port=6001
# ========================alibaba.druid????=====================
spring.datasource.type=com.alibaba.druid.pool.DruidDataSource
spring.datasource.driver-class-name=com.mysql.jdbc.Driver
spring.datasource.url=jdbc:mysql://192.168.11.132:3306/db2021?useUnicode=true&characterEncoding=utf-8&useSSL=false
spring.datasource.username=root
spring.datasource.password=root
spring.datasource.druid.test-while-idle=false
# ========================redis????=====================
spring.redis.database=0
spring.redis.host=192.168.11.132
spring.redis.port=6379
spring.redis.password=123
spring.redis.lettuce.pool.max-active=8
spring.redis.lettuce.pool.max-wait=-1ms
spring.redis.lettuce.pool.max-idle=8
spring.redis.lettuce.pool.min-idle=0
# ========================mybatis????===================
mybatis.mapper-locations=classpath:mapper/*.xml
mybatis.type-aliases-package=com.atguigu.docker.entities
# ========================swagger=====================
spring.swagger2.enabled=true
```

#### 主启动

```java
package com.atguigu.docker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import tk.mybatis.spring.annotation.MapperScan;

@SpringBootApplication
@MapperScan("com.atguigu.docker.mapper") //import tk.mybatis.spring.annotation.MapperScan;
public class DockerBootApplication {
    public static void main(String[] args) {
        SpringApplication.run(DockerBootApplication.class, args);
    }
}
```

#### 业务类

**config配置类**

RedisConfig

```java
package com.atguigu.docker.config;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.GenericJackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.StringRedisSerializer;

import java.io.Serializable;

@Configuration
@Slf4j
public class RedisConfig {
    /**
     * @param lettuceConnectionFactory
     * @return redis序列化的工具配置类，下面这个请一定开启配置
     * 127.0.0.1:6379> keys *
     * 1) "ord:102"  序列化过
     * 2) "\xac\xed\x00\x05t\x00\aord:102"   野生，没有序列化过
     */
    @Bean
    public RedisTemplate<String, Serializable> redisTemplate(LettuceConnectionFactory lettuceConnectionFactory) {
        RedisTemplate<String, Serializable> redisTemplate = new RedisTemplate<>();

        redisTemplate.setConnectionFactory(lettuceConnectionFactory);
        //设置key序列化方式string
        redisTemplate.setKeySerializer(new StringRedisSerializer());
        //设置value的序列化方式json
        redisTemplate.setValueSerializer(new GenericJackson2JsonRedisSerializer());

        redisTemplate.setHashKeySerializer(new StringRedisSerializer());
        redisTemplate.setHashValueSerializer(new GenericJackson2JsonRedisSerializer());

        redisTemplate.afterPropertiesSet();

        return redisTemplate;
    }
}
```

SwaggerConfig

```java
package com.atguigu.docker.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.text.SimpleDateFormat;
import java.util.Date;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
    @Value("${spring.swagger2.enabled}")
    private Boolean enabled;

    @Bean
    public Docket createRestApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .enable(enabled)
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.atguigu.docker")) //你自己的package
                .paths(PathSelectors.any())
                .build();
    }

    public ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("尚硅谷Java大厂技术" + "\t" + new SimpleDateFormat("yyyy-MM-dd").format(new Date()))
                .description("docker-compose")
                .version("1.0")
                .termsOfServiceUrl("https://www.atguigu.com/")
                .build();
    }
}
```

**新建entity**

User

```java
package com.atguigu.docker.entities;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Table(name = "t_user")
public class User {
    @Id
    @GeneratedValue(generator = "JDBC")
    private Integer id;

    /**
     * 用户名
     */
    private String username;

    /**
     * 密码
     */
    private String password;

    /**
     * 性别 0=女 1=男
     */
    private Byte sex;

    /**
     * 删除标志，默认0不删除，1删除
     */
    private Byte deleted;

    /**
     * 更新时间
     */
    @Column(name = "update_time")
    private Date updateTime;

    /**
     * 创建时间
     */
    @Column(name = "create_time")
    private Date createTime;

    /**
     * @return id
     */
    public Integer getId() {
        return id;
    }

    /**
     * @param id
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * 获取用户名
     *
     * @return username - 用户名
     */
    public String getUsername() {
        return username;
    }

    /**
     * 设置用户名
     *
     * @param username 用户名
     */
    public void setUsername(String username) {
        this.username = username;
    }

    /**
     * 获取密码
     *
     * @return password - 密码
     */
    public String getPassword() {
        return password;
    }

    /**
     * 设置密码
     *
     * @param password 密码
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * 获取性别 0=女 1=男
     *
     * @return sex - 性别 0=女 1=男
     */
    public Byte getSex() {
        return sex;
    }

    /**
     * 设置性别 0=女 1=男
     *
     * @param sex 性别 0=女 1=男
     */
    public void setSex(Byte sex) {
        this.sex = sex;
    }

    /**
     * 获取删除标志，默认0不删除，1删除
     *
     * @return deleted - 删除标志，默认0不删除，1删除
     */
    public Byte getDeleted() {
        return deleted;
    }

    /**
     * 设置删除标志，默认0不删除，1删除
     *
     * @param deleted 删除标志，默认0不删除，1删除
     */
    public void setDeleted(Byte deleted) {
        this.deleted = deleted;
    }

    /**
     * 获取更新时间
     *
     * @return update_time - 更新时间
     */
    public Date getUpdateTime() {
        return updateTime;
    }

    /**
     * 设置更新时间
     *
     * @param updateTime 更新时间
     */
    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    /**
     * 获取创建时间
     *
     * @return create_time - 创建时间
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 设置创建时间
     *
     * @param createTime 创建时间
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}
```

UserDto

```java
package com.atguigu.docker.entities;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ApiModel(value = "用户信息")
public class UserDTO implements Serializable {
    @ApiModelProperty(value = "用户ID")
    private Integer id;

    @ApiModelProperty(value = "用户名")
    private String username;

    @ApiModelProperty(value = "密码")
    private String password;

    @ApiModelProperty(value = "性别 0=女 1=男 ")
    private Byte sex;

    @ApiModelProperty(value = "删除标志，默认0不删除，1删除")
    private Byte deleted;

    @ApiModelProperty(value = "更新时间")
    private Date updateTime;

    @ApiModelProperty(value = "创建时间")
    private Date createTime;

    /**
     * @return id
     */
    public Integer getId() {
        return id;
    }

    /**
     * @param id
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * 获取用户名
     *
     * @return username - 用户名
     */
    public String getUsername() {
        return username;
    }

    /**
     * 设置用户名
     *
     * @param username 用户名
     */
    public void setUsername(String username) {
        this.username = username;
    }

    /**
     * 获取密码
     *
     * @return password - 密码
     */
    public String getPassword() {
        return password;
    }

    /**
     * 设置密码
     *
     * @param password 密码
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * 获取性别 0=女 1=男
     *
     * @return sex - 性别 0=女 1=男
     */
    public Byte getSex() {
        return sex;
    }

    /**
     * 设置性别 0=女 1=男
     *
     * @param sex 性别 0=女 1=男
     */
    public void setSex(Byte sex) {
        this.sex = sex;
    }

    /**
     * 获取删除标志，默认0不删除，1删除
     *
     * @return deleted - 删除标志，默认0不删除，1删除
     */
    public Byte getDeleted() {
        return deleted;
    }

    /**
     * 设置删除标志，默认0不删除，1删除
     *
     * @param deleted 删除标志，默认0不删除，1删除
     */
    public void setDeleted(Byte deleted) {
        this.deleted = deleted;
    }

    /**
     * 获取更新时间
     *
     * @return update_time - 更新时间
     */
    public Date getUpdateTime() {
        return updateTime;
    }

    /**
     * 设置更新时间
     *
     * @param updateTime 更新时间
     */
    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    /**
     * 获取创建时间
     *
     * @return create_time - 创建时间
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 设置创建时间
     *
     * @param createTime 创建时间
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", sex=" + sex +
                '}';
    }
}
```

**新建mapper**

接口UserMapper

```java
package com.atguigu.docker.mapper;

import com.atguigu.docker.entities.User;
import tk.mybatis.mapper.common.Mapper;

public interface UserMapper extends Mapper<User> {
}
```

新增UserMapper.xml

```java
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.atguigu.docker.mapper.UserMapper">
    <resultMap id="BaseResultMap" type="com.atguigu.docker.entities.User">
        <!--
          WARNING - @mbg.generated
        -->
        <id column="id" jdbcType="INTEGER" property="id" />
        <result column="username" jdbcType="VARCHAR" property="username" />
        <result column="password" jdbcType="VARCHAR" property="password" />
        <result column="sex" jdbcType="TINYINT" property="sex" />
        <result column="deleted" jdbcType="TINYINT" property="deleted" />
        <result column="update_time" jdbcType="TIMESTAMP" property="updateTime" />
        <result column="create_time" jdbcType="TIMESTAMP" property="createTime" />
    </resultMap>
</mapper>
```

**新建service**

```java
package com.atguigu.docker.service;

import com.atguigu.docker.entities.User;
import com.atguigu.docker.mapper.UserMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;


@Service
@Slf4j
public class UserService {

    public static final String CACHE_KEY_USER = "user:";

    @Resource
    private UserMapper userMapper;
    @Resource
    private RedisTemplate redisTemplate;

    /**
     * addUser
     *
     * @param user
     */
    public void addUser(User user) {
        //1 先插入mysql并成功
        int i = userMapper.insertSelective(user);

        if (i > 0) {
            //2 需要再次查询一下mysql将数据捞回来并ok
            user = userMapper.selectByPrimaryKey(user.getId());
            //3 将捞出来的user存进redis，完成新增功能的数据一致性。
            String key = CACHE_KEY_USER + user.getId();
            redisTemplate.opsForValue().set(key, user);
        }
    }

    /**
     * findUserById
     *
     * @param id
     * @return
     */
    public User findUserById(Integer id) {
        User user = null;
        String key = CACHE_KEY_USER + id;

        //1 先从redis里面查询，如果有直接返回结果，如果没有再去查询mysql
        user = (User) redisTemplate.opsForValue().get(key);

        if (user == null) {
            //2 redis里面无，继续查询mysql
            user = userMapper.selectByPrimaryKey(id);
            if (user == null) {
                //3.1 redis+mysql 都无数据
                //你具体细化，防止多次穿透，我们规定，记录下导致穿透的这个key回写redis
                return user;
            } else {
                //3.2 mysql有，需要将数据写回redis，保证下一次的缓存命中率
                redisTemplate.opsForValue().set(key, user);
            }
        }
        return user;
    }
}
```

**新建controller**

```java
package com.atguigu.docker.controller;

import cn.hutool.core.util.IdUtil;
import com.atguigu.docker.entities.User;
import com.atguigu.docker.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.Random;

@Api(description = "用户User接口")
@RestController
@Slf4j
public class UserController {
    @Resource
    private UserService userService;

    @ApiOperation("数据库新增3条记录")
    @RequestMapping(value = "/user/add", method = RequestMethod.POST)
    public void addUser() {
        for (int i = 1; i <= 3; i++) {
            User user = new User();

            user.setUsername("zzyy" + i);
            user.setPassword(IdUtil.simpleUUID().substring(0, 6));
            user.setSex((byte) new Random().nextInt(2));

            userService.addUser(user);
        }
    }

    @ApiOperation("查询1条记录")
    @RequestMapping(value = "/user/find/{id}", method = RequestMethod.GET)
    public User findUserById(@PathVariable Integer id) {
        return userService.findUserById(id);
    }

    // @ApiOperation("删除1条记录")
    // @RequestMapping(value = "/user/delete/{id}", method = RequestMethod.POST)
    // public void deleteUser(@PathVariable Integer id) {
    //     userService.deleteUser(id);
    // }
    //
    // @ApiOperation("修改1条记录")
    // @RequestMapping(value = "/user/update", method = RequestMethod.POST)
    // public void updateUser(@RequestBody UserDTO userDTO) {
    //     User user = new User();
    //     BeanUtils.copyProperties(userDTO, user);
    //     userService.updateUser(user);
    // }


}
```

mvn package命令将微服务形成新的jar包 并上传到Linux服务器/mydocker目录下

#### 编写Dockerfile

```shell
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

#### 构建镜像

docker build -t gm_docker:1.6 .

```sh
[root@192 mydocker]# pwd
/mydocker
[root@192 mydocker]# ll
总用量 54836
-rw-r--r--. 1 root root 56146255 12月 12 21:18 docker_boot-0.0.1-SNAPSHOT.jar
-rw-r--r--. 1 root root      444 12月 12 21:20 Dockerfile
[root@192 mydocker]# cat Dockerfile
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
[root@192 mydocker]# docker build -t gm_docker:1.6 .
[+] Building 16.9s (8/8) FINISHED                                                             docker:default
 => [internal] load .dockerignore                                                                       0.0s
 => => transferring context: 2B                                                                         0.0s
 => [internal] load build definition from Dockerfile                                                    0.0s
 => => transferring dockerfile: 544B                                                                    0.0s
 => [internal] load metadata for docker.io/library/java:8                                              15.4s
 => [internal] load build context                                                                       0.4s
 => => transferring context: 56.16MB                                                                    0.4s
 => CACHED [1/3] FROM docker.io/library/java:8@sha256:c1ff613e8ba25833d2e1940da0940c3824f03f802c449f3d  0.0s
 => [2/3] ADD docker_boot-0.0.1-SNAPSHOT.jar gm_docker.jar                                              0.3s
 => [3/3] RUN bash -c 'touch /gm_docker.jar'                                                            0.6s
 => exporting to image                                                                                  0.2s
 => => exporting layers                                                                                 0.2s
 => => writing image sha256:3a67d307fb080c947772e0f2f5d6da66bd7dabeb6841c681f39e31cc2378fe5e            0.0s
 => => naming to docker.io/library/gm_docker:1.6                                                        0.0s
[root@192 mydocker]# docker images
REPOSITORY   TAG       IMAGE ID       CREATED         SIZE
gm_docker    1.6       3a67d307fb08   7 seconds ago   755MB
tomcat       latest    fb5657adc892   23 months ago   680MB
mysql        5.7       c20987f18b13   24 months ago   448MB
registry     latest    b8604a3fe854   2 years ago     26.2MB
ubuntu       latest    ba6acccedd29   2 years ago     72.8MB
centos       latest    5d0da3dc9764   2 years ago     231MB
redis        6.0.8     16ecd2772934   3 years ago     104MB
```

### 2.不用Compose

#### 新建mysql容器实例

```shell
docker run -p 3306:3306 --name mysql57 \
--privileged=true \
-v /zzyyuse/mysql/conf:/etc/mysql/conf.d \
-v /zzyyuse/mysql/logs:/logs \
-v /zzyyuse/mysql/data:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=123456 \
-d mysql:5.7
```

**进入mysql容器实例并新建库db2021+新建表t_user**

```shell
docker exec -it mysql57 /bin/bash

mysql -uroot -p

create database db2021;

use db2021;

CREATE TABLE `t_user` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(50) NOT NULL DEFAULT '' COMMENT '用户名',
  `password` VARCHAR(50) NOT NULL DEFAULT '' COMMENT '密码',
  `sex` TINYINT(4) NOT NULL DEFAULT '0' COMMENT '性别 0=女 1=男 ',
  `deleted` TINYINT(4) UNSIGNED NOT NULL DEFAULT '0' COMMENT '删除标志，默认0不删除，1删除',
  `update_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COMMENT='用户表';
```

#### 新建redis容器实例

```shell
docker run  -p 6379:6379 --name redis608 --privileged=true -v /app/redis/redis.conf:/etc/redis/redis.conf -v /app/redis/data:/data -d redis:6.0.8 redis-server /etc/redis/redis.conf
```

#### 微服务工程

```shell
docker run -d -p 6001:6001 gm_docker:1.6
```

**上面三个容器实例依次顺序启动成功**

```sh
[root@192 mydocker]# docker ps
CONTAINER ID   IMAGE           COMMAND                   CREATED          STATUS          PORTS                                                  NAMES
8e62b6d83a0c   gm_docker:1.6   "java -jar /gm_docke…"   18 seconds ago   Up 17 seconds   0.0.0.0:6001->6001/tcp, :::6001->6001/tcp              practical_napier
7acfb500b701   redis:6.0.8     "docker-entrypoint.s…"   32 minutes ago   Up 32 minutes   0.0.0.0:6379->6379/tcp, :::6379->6379/tcp              myr3
6156e1121c8c   mysql:5.7       "docker-entrypoint.s…"   35 minutes ago   Up 34 minutes   0.0.0.0:3306->3306/tcp, :::3306->3306/tcp, 33060/tcp   mysql

```

#### swagger测试

http://192.168.11.132:6001/swagger-ui.html#/

#### 成功了，有哪些问题?

- 先后顺序要求固定，先mysql+redis才能微服务访问成功

- 多个run命令......

- 容器间的启停或宕机，有可能导致IP地址对应的容器实例变化，映射出错， 要么生产IP写死(可以但是不推荐)，要么通过服务调用


### 3 使用Compose

服务编排，一套带走，安排

#### 编写docker-compose.yml文件

```shell
version: "3"

services:
  microService:
    image: gm_docker:1.7
    container_name: ms01
    ports:
      - "6001:6001"
    volumes:
      - /app/microService:/data
    networks: 
      - atguigu_net 
    depends_on: 
      - redis
      - mysql
  redis:
    image: redis:6.0.8
    ports:
      - "6379:6379"
    volumes:
      - /app/redis/redis.conf:/etc/redis/redis.conf
      - /app/redis/data:/data
    networks: 
      - atguigu_net
    command: redis-server /etc/redis/redis.conf
  mysql:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: '123456'
      MYSQL_ALLOW_EMPTY_PASSWORD: 'no'
      MYSQL_DATABASE: 'db2021'
      MYSQL_USER: 'zzyy'
      MYSQL_PASSWORD: 'zzyy123'
    ports:
       - "3306:3306"
    volumes:
       - /app/mysql/db:/var/lib/mysql
       - /app/mysql/conf/my.cnf:/etc/my.cnf
       - /app/mysql/init:/docker-entrypoint-initdb.d
    networks:
      - atguigu_net
    command: --default-authentication-plugin=mysql_native_password #解决外部无法访问
networks: 
   atguigu_net: 
```

#### 修改微服务工程docker_boot

修改配置文件，通过服务名访问，IP无关

```properties
server.port=6001

# ========================alibaba.druid相关配置=====================
spring.datasource.type=com.alibaba.druid.pool.DruidDataSource
spring.datasource.driver-class-name=com.mysql.jdbc.Driver
#spring.datasource.url=jdbc:mysql://192.168.111.169:3306/db2021?useUnicode=true&characterEncoding=utf-8&useSSL=false
spring.datasource.url=jdbc:mysql://mysql:3306/db2021?useUnicode=true&characterEncoding=utf-8&useSSL=false
spring.datasource.username=root
spring.datasource.password=123456
spring.datasource.druid.test-while-idle=false

# ========================redis相关配置=====================
spring.redis.database=0
#spring.redis.host=192.168.111.169
spring.redis.host=redis
spring.redis.port=6379
spring.redis.password=
spring.redis.lettuce.pool.max-active=8
spring.redis.lettuce.pool.max-wait=-1ms
spring.redis.lettuce.pool.max-idle=8
spring.redis.lettuce.pool.min-idle=0

# ========================mybatis相关配置===================
mybatis.mapper-locations=classpath:mapper/*.xml
mybatis.type-aliases-package=com.atguigu.docker.entities

# ========================swagger=====================
spring.swagger2.enabled=true
```

mvn package命令将微服务形成新的jar包 并上传到Linux服务器/mydocker目录下

#### 编写Dockerfile

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

#### 构建镜像

docker build -t gm_docker:1.7 .

```sh
[root@192 mydocker]# docker build -t gm_docker:1.7 .
[+] Building 21.4s (8/8) FINISHED                                                             docker:default
 => [internal] load .dockerignore                                                                       0.0s
 => => transferring context: 2B                                                                         0.0s
 => [internal] load build definition from Dockerfile                                                    0.0s
 => => transferring dockerfile: 544B                                                                    0.0s
 => [internal] load metadata for docker.io/library/java:8                                              20.4s
 => [internal] load build context                                                                       0.2s
 => => transferring context: 56.16MB                                                                    0.2s
 => CACHED [1/3] FROM docker.io/library/java:8@sha256:c1ff613e8ba25833d2e1940da0940c3824f03f802c449f3d  0.0s
 => [2/3] ADD docker_boot-0.0.1-SNAPSHOT.jar gm_docker.jar                                              0.2s
 => [3/3] RUN bash -c 'touch /gm_docker.jar'                                                            0.4s
 => exporting to image                                                                                  0.2s
 => => exporting layers                                                                                 0.2s
 => => writing image sha256:915d1d8bc5c694dec2ddca2a76b9ba60eb456b7794920b8b327a2628140bd784            0.0s
 => => naming to docker.io/library/gm_docker:1.7                                                        0.0s
[root@192 mydocker]# docker images
REPOSITORY   TAG       IMAGE ID       CREATED          SIZE
gm_docker    1.7       915d1d8bc5c6   22 seconds ago   755MB
gm_docker    1.6       3a67d307fb08   26 minutes ago   755MB
tomcat       latest    fb5657adc892   23 months ago    680MB
mysql        5.7       c20987f18b13   24 months ago    448MB
registry     latest    b8604a3fe854   2 years ago      26.2MB
ubuntu       latest    ba6acccedd29   2 years ago      72.8MB
centos       latest    5d0da3dc9764   2 years ago      231MB
redis        6.0.8     16ecd2772934   3 years ago      104MB
```

#### 执行docker-compose

**执行 docker compose up 或者 执行 docker compose up -d**

```sh
[root@192 mydocker]# docker compose up -d
[+] Running 3/3
 ✔ Container mydocker-mysql-1  Started                                                                  0.1s
 ✔ Container mydocker-redis-1  Started                                                                  0.1s
 ✔ Container ms01              Started                                                                  0.1s
[root@192 ~]# docker ps
CONTAINER ID   IMAGE           COMMAND                   CREATED              STATUS              PORTS                                                  NAMES
8f8cacd70664   gm_docker:1.7   "java -jar /gm_docke…"   About a minute ago   Up About a minute   0.0.0.0:6001->6001/tcp, :::6001->6001/tcp              ms01
7e7c7a6a2440   mysql:5.7       "docker-entrypoint.s…"   About a minute ago   Up About a minute   0.0.0.0:3306->3306/tcp, :::3306->3306/tcp, 33060/tcp   mydocker-mysql-1
e6e15e425cfa   redis:6.0.8     "docker-entrypoint.s…"   About a minute ago   Up About a minute   0.0.0.0:6379->6379/tcp, :::6379->6379/tcp              mydocker-redis-1
```

**进入mysql容器实例并新建库db2021+新建表t_user**

```shell
docker exec -it 容器实例id /bin/bash

mysql -uroot -p

create database db2021;

use db2021;

CREATE TABLE `t_user` (
`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
`username` VARCHAR(50) NOT NULL DEFAULT '' COMMENT '用户名',
`password` VARCHAR(50) NOT NULL DEFAULT '' COMMENT '密码',
`sex` TINYINT(4) NOT NULL DEFAULT '0' COMMENT '性别 0=女 1=男 ',
`deleted` TINYINT(4) UNSIGNED NOT NULL DEFAULT '0' COMMENT '删除标志，默认0不删除，1删除',
`update_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
`create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
PRIMARY KEY (`id`)
) ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COMMENT='用户表';
```

#### swagger测试

http://192.168.11.132:6001/swagger-ui.html#/

#### 关停

docker compose stop

```sh
[root@192 mydocker]# docker compose stop
[+] Stopping 3/3
 ✔ Container ms01              Stopped                                                                  0.2s
 ✔ Container mydocker-mysql-1  Stopped                                                                  1.3s
 ✔ Container mydocker-redis-1  Stopped                                                                  0.2s
 
 [root@192 mydocker]# docker compose down
[+] Running 4/3
 ✔ Container ms01                Removed                                                                0.3s
 ✔ Container mydocker-redis-1    Removed                                                                0.2s
 ✔ Container mydocker-mysql-1    Removed                                                                1.2s
 ✔ Network mydocker_atguigu_net  Removed                                                                0.0s
[root@192 mydocker]# docker ps -a
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```

