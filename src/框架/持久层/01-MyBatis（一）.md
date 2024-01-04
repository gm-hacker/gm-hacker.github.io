---
date: 2021-09-10
category:
  - MyBatis
tag:
  - MyBatis
order: 2
---

# MyBatis（一）

## 1、MyBatis简介 

### 1.1、MyBatis历史

MyBatis最初是Apache的一个开源项目iBatis, 2010年6月这个项目由Apache Software Foundation迁移到了Google Code。随着开发团队转投Google Code旗下， iBatis3.x正式更名为MyBatis。代码于2013年11月迁移到Github。

iBatis一词来源于“internet”和“abatis”的组合，是一个基于Java的持久层框架。 iBatis提供的持久层框架包括SQL Maps和Data Access Objects（DAO）。

### 1.2、MyBatis特性

1） MyBatis 是支持定制化 SQL、存储过程以及高级映射的优秀的持久层框架

2） MyBatis 避免了几乎所有的 JDBC 代码和手动设置参数以及获取结果集

3） MyBatis可以使用简单的XML或注解用于配置和原始映射，将接口和Java的POJO（Plain Old JavaObjects，普通的Java对象）映射成数据库中的记录

4） MyBatis 是一个 半自动的ORM（Object Relation Mapping）框架 

### 1.3、MyBatis下载 

MyBatis下载地址：https://github.com/mybatis/mybatis-3 

### 1.4、和其它持久化层技术对比

- JDBC
  - SQL 夹杂在Java代码中耦合度高，导致硬编码内伤
  - 维护不易且实际开发需求中 SQL 有变化，频繁修改的情况多见
  - 代码冗长，开发效率低

- Hibernate 和 JPA
  - 操作简便，开发效率高
  - 程序中的长难复杂 SQL 需要绕过框架 
  - 内部自动生产的 SQL，不容易做特殊优化
  - 基于全映射的全自动框架，大量字段的 POJO 进行部分映射时比较困难。
  - 反射操作太多，导致数据库性能下降

- MyBatis
  - 轻量级，性能出色
  - SQL 和 Java 编码分开，功能边界清晰。Java代码专注业务、SQL语句专注数据
  - 开发效率稍逊于HIbernate，但是完全能够接受  


## 2、搭建MyBatis

### 2.1、开发环境

IDE：idea 2019.2

构建工具：maven 3.5.4

MySQL版本：MySQL 8

MyBatis版本：MyBatis 3.5.7 



**MySQL不同版本的注意事项**

1、驱动类driver-class-name

MySQL 5版本使用jdbc5驱动，驱动类使用：com.mysql.jdbc.Driver

MySQL 8版本使用jdbc8驱动，驱动类使用：com.mysql.cj.jdbc.Driver

2、连接地址url

MySQL 5版本的url：

jdbc:mysql://localhost:3306/ssm

MySQL 8版本的url：

jdbc:mysql://localhost:3306/ssm?serverTimezone=UTC

否则运行测试用例报告如下错误：

```java
java.sql.SQLException: The server time zone value 'ÖÐ¹ú±ê×¼Ê±¼ä' is unrecognized or represents more 
```

### 2.2、创建maven工程

打包方式：jar

引入依赖 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.atguigu.mybatis</groupId>
    <artifactId>mybatis_helloworld</artifactId>
    <version>1.0-SNAPSHOT</version>

    <dependencies>
        <!-- Mybatis核心 -->
        <dependency>
            <groupId>org.mybatis</groupId>
            <artifactId>mybatis</artifactId>
            <version>3.5.7</version>
        </dependency>
        <!-- junit测试 -->
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.12</version>
            <scope>test</scope>
        </dependency>
        <!-- MySQL驱动 -->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.16</version>
        </dependency>
    </dependencies>

</project>
```

创建数据库、表语句

```sql
CREATE DATABASE IF NOT EXISTS ssm;

CREATE TABLE IF	NOT EXISTS `t_user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR ( 20 ) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` VARCHAR ( 20 ) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `age` INT DEFAULT NULL,
  `gender` CHAR ( 1 ) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` VARCHAR ( 50 ) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY ( `id` )
) ENGINE = INNODB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;
```

创建实体类

```java
package com.atguigu.mybatis.pojo;

public class User {
    private Integer id;
    private String username;
    private String password;
    private Integer age;
    private String gender;
    private String email;
}
```

### 2.3、创建MyBatis的核心配置文件 

习惯上命名为mybatis-config.xml，这个文件名仅仅只是建议，并非强制要求。将来整合Spring之后，这个配置文件可以省略，所以大家操作时可以直接复制、粘贴。

核心配置文件主要用于配置连接数据库的环境以及MyBatis的全局配置信息

核心配置文件存放的位置是src/main/resources目录下 

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <!--设置连接数据库的环境-->
    <environments default="development">
        <environment id="development">
            <transactionManager type="JDBC"/>
            <dataSource type="POOLED">
                <property name="driver" value="com.mysql.cj.jdbc.Driver"/>
                <property name="url" value="jdbc:mysql://192.168.11.130:3306/ssm?serverTimezone=UTC"/>
                <property name="username" value="root"/>
                <property name="password" value="root"/>
            </dataSource>
        </environment>
    </environments>
    <!--引入映射文件-->
    <mappers>
        <mapper resource="mappers/UserMapper.xml"/>
    </mappers>
</configuration>
```

### 2.4、创建mapper接口 

MyBatis中的mapper接口相当于以前的dao。但是区别在于，mapper仅仅是接口，我们不需要提供实现类。 

```java
package com.atguigu.mybatis.mapper;

public interface UserMapper {

    /**
     * 添加用户信息
     *
     * @return
     */
    int insertUser();
}
```

### 2.5、创建MyBatis的映射文件 

相关概念：ORM（Object Relationship Mapping）对象关系映射。

- 对象：Java的实体类对象
- 关系：关系型数据库
- 映射：二者之间的对应关系  

| Java概念 | 数据库概念 |
| -------- | ---------- |
| 类       | 表         |
| 属性     | 字段/列    |
| 对象     | 记录/行    |

1、映射文件的命名规则：

**表所对应的实体类的类名+Mapper.xml**

例如：表t_user，映射的实体类为User，所对应的映射文件为UserMapper.xml

因此一个映射文件对应一个实体类，对应一张表的操作

MyBatis映射文件用于编写SQL，访问以及操作表中的数据

MyBatis映射文件存放的位置是src/main/resources/mappers目录下

2、 MyBatis中可以面向接口操作数据，要保证两个一致：

a>**mapper接口的全类名和映射文件的命名空间（namespace）保持一致**

b>**mapper接口中方法的方法名和映射文件中编写SQL的标签的id属性保持一致**  

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.atguigu.mybatis.mapper.UserMapper">

    <!--
        mapper接口和映射文件要保证两个一致：
        1、mapper接口的全类名和映射文件的namespace一致
        2、mapper接口中的方法的方法名要和映射文件中的sql的id保持一致
    -->

    <!--int insertUser();-->
    <insert id="insertUser">
        insert into t_user
        values (null, 'admin', '123456', 23, '男', '12345@qq.com')
    </insert>
</mapper>
```

### 2.6、通过junit测试功能 

```java
package com.atguigu.mybatis.test;

import com.atguigu.mybatis.mapper.UserMapper;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Test;

import java.io.IOException;
import java.io.InputStream;

public class MyBatisTest {

    @Test
    public void testInsert() throws IOException {
        //读取MyBatis的核心配置文件
        InputStream is = Resources.getResourceAsStream("mybatis-config.xml");
        //创建SqlSessionFactoryBuilder对象
        SqlSessionFactoryBuilder sqlSessionFactoryBuilder = new SqlSessionFactoryBuilder();
        //通过核心配置文件所对应的字节输入流创建工厂类SqlSessionFactory，生产SqlSession对象
        SqlSessionFactory sqlSessionFactory = sqlSessionFactoryBuilder.build(is);
        //创建SqlSession对象，此时通过SqlSession对象所操作的sql都必须手动提交或回滚事务
        SqlSession sqlSession = sqlSessionFactory.openSession();
        //创建SqlSession对象，此时通过SqlSession对象所操作的sql都会自动提交
        // SqlSession sqlSession = sqlSessionFactory.openSession(true);
        //通过代理模式创建UserMapper接口的代理实现类对象
        UserMapper userMapper = sqlSession.getMapper(UserMapper.class);
        //调用UserMapper接口中的方法，就可以根据UserMapper的全类名匹配元素文件，通过调用的方法名匹配映射文件中的SQL标签，并执行标签中的SQL语句
        int result = userMapper.insertUser();
        //提供sql以及的唯一标识找到sql并执行，唯一标识是namespace.sqlId
        /*int result = sqlSession.insert("com.atguigu.mybatis.mapper.UserMapper.insertUser");*/
        //sqlSession.commit();
        System.out.println("结果：" + result);
        //提交事务
        sqlSession.commit();
        //关闭SqlSession
        sqlSession.close();
    }
}
```

SqlSession：代表Java程序和数据库之间的会话。（HttpSession是Java程序和浏览器之间的会话）

SqlSessionFactory：是“生产”SqlSession的“工厂”。

工厂模式：如果创建某一个对象，使用的过程基本固定，那么我们就可以把创建这个对象的相关代码封装到一个“工厂类”中，以后都使用这个工厂类来“生产”我们需要的对象。  

### 2.7、加入log4j日志功能 

①加入依赖 

```xml
<!-- log4j日志 -->
<dependency>
  <groupId>log4j</groupId>
  <artifactId>log4j</artifactId>
  <version>1.2.17</version>
</dependency>
```

②加入log4j的配置文件 

log4j的配置文件名为log4j.xml，存放的位置是src/main/resources目录下 

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE log4j:configuration SYSTEM "log4j.dtd">

<log4j:configuration xmlns:log4j="http://jakarta.apache.org/log4j/">

  <appender name="STDOUT" class="org.apache.log4j.ConsoleAppender">
    <param name="Encoding" value="UTF-8"/>
    <layout class="org.apache.log4j.PatternLayout">
      <param name="ConversionPattern" value="%-5p %d{MM-dd HH:mm:ss,SSS} %m  (%F:%L) \n"/>
    </layout>
  </appender>
  <logger name="java.sql">
    <level value="debug"/>
  </logger>
  <logger name="org.apache.ibatis">
    <level value="info"/>
  </logger>
  <root>
    <level value="debug"/>
    <appender-ref ref="STDOUT"/>
  </root>
</log4j:configuration>
```

日志的级别

FATAL(致命)>ERROR(错误)>WARN(警告)>INFO(信息)>DEBUG(调试)

从左到右打印的内容越来越详细  

## 3、MyBatis的增删改查

### 3.1、新增 

```xml
<!--int insertUser();-->
<insert id="insertUser">
  insert into t_user values(null,'admin','123456',23,'男')
</insert>
```

### 3.2、删除 

```xml
<!--int deleteUser();-->
<delete id="deleteUser">
  delete from t_user where id = 7
</delete>
```

### 3.3、修改 

```xml
<!--int updateUser();-->
<update id="updateUser">
  update t_user set username='ybc',password='123' where id = 6
</update>
```

### 3.4、查询一个实体类对象 

```xml
<!--User getUserById();-->
<select id="getUserById" resultType="com.atguigu.mybatis.bean.User">
  select * from t_user where id = 2
</select>
```

### 3.5、查询list集合

```xml
<!--List<User> getUserList();-->
<select id="getUserList" resultType="com.atguigu.mybatis.bean.User">
  select * from t_user
</select>
```

注意：

1、查询的标签select必须设置属性resultType或resultMap，用于设置实体类和数据库表的映射关系

resultType：自动映射，用于属性名和表中字段名一致的情况

resultMap：自定义映射，用于一对多或多对一或字段名和属性名不一致的情况  

### 案例代码

```java
package com.atguigu.mybatis.mapper;

import com.atguigu.mybatis.pojo.User;

import java.util.List;


public interface UserMapper {

    /**
     * 添加用户信息
     *
     * @return
     */
    int insertUser();

    /**
     * 修改用户信息
     */
    void updateUser();

    /**
     * 删除用户信息
     */
    void deleteUser();

    /**
     * 根据id查询用户信息
     *
     * @return
     */
    User getUserById();

    /**
     * 查询所有的用户信息
     *
     * @return
     */
    List<User> getAllUser();

}
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
"http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.atguigu.mybatis.mapper.UserMapper">

  <!--
  mapper接口和映射文件要保证两个一致：
  1、mapper接口的全类名和映射文件的namespace一致
  2、mapper接口中的方法的方法名要和映射文件中的sql的id保持一致
  -->

  <!--int insertUser();-->
  <insert id="insertUser">
    insert into t_user
    values (null, 'admin', '123456', 23, '男', '12345@qq.com')
  </insert>

  <!--void updateUser();-->
  <update id="updateUser">
    update t_user
    set username='root',
    password='123'
    where id = 3
  </update>

  <!--void deleteUser();-->
  <delete id="deleteUser">
    delete
    from t_user
    where id = 3
  </delete>

  <!--User getUserById();-->
  <!--
  resultType：设置结果类型，即查询的数据要转换为的java类型
  resultMap：自定义映射，处理多对一或一对多的映射关系
  -->
  <select id="getUserById" resultType="com.atguigu.mybatis.pojo.User">
    select *
    from t_user
    where id = 1
  </select>

  <!--List<User> getAllUser();-->
  <select id="getAllUser" resultType="com.atguigu.mybatis.pojo.User">
    select *
    from t_user
  </select>

</mapper>
package com.atguigu.mybatis.test;

import com.atguigu.mybatis.mapper.UserMapper;
import com.atguigu.mybatis.pojo.User;
import com.atguigu.mybatis.utils.SqlSessionUtil;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Test;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

public class MyBatisTest {

    @Test
    public void testInsert() throws IOException {
        //获取核心配置文件的输入流
        InputStream is = Resources.getResourceAsStream("mybatis-config.xml");
        //获取SqlSessionFactoryBuilder对象
        SqlSessionFactoryBuilder sqlSessionFactoryBuilder = new SqlSessionFactoryBuilder();
        //获取SqlSessionFactory对象
        SqlSessionFactory sqlSessionFactory = sqlSessionFactoryBuilder.build(is);
        //获取sql的会话对象SqlSession(不会自动提交事务)，是MyBatis提供的操作数据库的对象
        //SqlSession sqlSession = sqlSessionFactory.openSession();
        //获取sql的会话对象SqlSession(会自动提交事务)，是MyBatis提供的操作数据库的对象
        SqlSession sqlSession = sqlSessionFactory.openSession(true);
        //获取UserMapper的代理实现类对象
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        //调用mapper接口中的方法，实现添加用户信息的功能
        int result = mapper.insertUser();
        //提供sql以及的唯一标识找到sql并执行，唯一标识是namespace.sqlId
        /*int result = sqlSession.insert("com.atguigu.mybatis.mapper.UserMapper.insertUser");*/
        System.out.println("结果：" + result);
        //提交事务
        //sqlSession.commit();
        //关闭SqlSession
        sqlSession.close();
    }

    @Test
    public void testUpdate() {
        SqlSession sqlSession = SqlSessionUtil.getSqlSession();
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        mapper.updateUser();
        sqlSession.close();
    }

    @Test
    public void testDelete() {
        SqlSession sqlSession = SqlSessionUtil.getSqlSession();
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        mapper.deleteUser();
        sqlSession.close();
    }

    @Test
    public void testGetUserById() {
        SqlSession sqlSession = SqlSessionUtil.getSqlSession();
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        User user = mapper.getUserById();
        System.out.println(user);
    }

    @Test
    public void testGetAllUser() {
        SqlSession sqlSession = SqlSessionUtil.getSqlSession();
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        List<User> list = mapper.getAllUser();
        // list.forEach(System.out::println);
    }

}
```

## 4、核心配置文件详解 

**核心配置文件中的标签必须按照固定的顺序：**

properties?,settings?,typeAliases?,typeHandlers?,objectFactory?,objectWrapperFactory?,reflectorFactory?,plugins?,environments?,databaseIdProvider?,mappers?  

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
"http://mybatis.org/dtd/mybatis-3-config.dtd">

<configuration>

  <!--
  MyBatis核心配置文件中的标签必须要按照指定的顺序配置：
  properties?,settings?,typeAliases?,typeHandlers?,
  objectFactory?,objectWrapperFactory?,reflectorFactory?,
  plugins?,environments?,databaseIdProvider?,mappers?
  -->

  <!--引入properties文件，此后就可以在当前文件中使用${key}的方式访问value-->
  <properties resource="jdbc.properties" />

  <!--
  typeAliases：设置类型别名，即为某个具体的类型设置一个别名
  在MyBatis的范围中，就可以使用别名表示一个具体的类型
  -->
  <typeAliases>
    <!--
    type：设置需要起别名的类型
    alias：设置某个类型的别名
    -->
    <!--<typeAlias type="com.atguigu.mybatis.pojo.User" alias="abc"></typeAlias>-->
    <!--若不设置alias，当前的类型拥有默认的别名，即类名且不区分大小写-->
    <!--<typeAlias type="com.atguigu.mybatis.pojo.User"></typeAlias>-->
    <!--通过包设置类型别名，指定包下所有的类型将全部拥有默认的别名，即类名且不区分大小写-->
    <package name="com.atguigu.mybatis.pojo"/>
  </typeAliases>

  <!--
  environments：配置连接数据库的环境
  属性：
  default：设置默认使用的环境的id
  -->
  <environments default="development">
    <!--
    environment：设置一个具体的连接数据库的环境
    属性：
    id：设置环境的唯一标识，不能重复
    -->
    <environment id="development">
      <!--
      transactionManager：设置事务管理器
      属性：
      type：设置事务管理的方式
      type="JDBC|MANAGED"
      JDBC：表示使用JDBC中原生的事务管理方式
      MANAGED：被管理，例如Spring
      -->
      <transactionManager type="JDBC"/>
      <!--
      dataSource：设置数据源
      属性：
      type：设置数据源的类型
      type="POOLED|UNPOOLED|JNDI"
      POOLED：表示使用数据库连接池
      UNPOOLED：表示不使用数据库连接池
      JNDI：表示使用上下文中的数据源
      -->
      <dataSource type="POOLED">
        <property name="driver" value="${jdbc.driver}"/>
        <property name="url" value="${jdbc.url}"/>
        <property name="username" value="${jdbc.username}"/>
        <property name="password" value="${jdbc.password}"/>
      </dataSource>
    </environment>

    <environment id="test">
      <transactionManager type="JDBC"/>
      <dataSource type="POOLED">
        <property name="driver" value="com.mysql.cj.jdbc.Driver"/>
        <property name="url" value="jdbc:mysql://localhost:3306/ssm?serverTimezone=UTC"/>
        <property name="username" value="root"/>
        <property name="password" value="123456"/>
      </dataSource>
    </environment>
  </environments>

  <!--引入mybatis的映射文件-->
  <mappers>
    <!--<mapper resource="mappers/UserMapper.xml"/>-->
    <!--
    以包的方式引入映射文件，但是必须满足两个条件：
    1、mapper接口和映射文件所在的包必须一致
    2、mapper接口的名字和映射文件的名字必须一致
    -->
    <package name="com.atguigu.mybatis.mapper"/>
      <!--在resources文件夹下创建路径如下：com/atguigu/mybatis/mapper,如果“/”换成“.”则找不到对应的mapper文件-->
      </mappers>
      </configuration>
```

## 5、MyBatis获取参数值的两种方式 

MyBatis获取参数值的两种方式：`${}`和`#{}` 

**${}的本质就是字符串拼接，#{}的本质就是占位符赋值**

`${}`使用字符串拼接的方式拼接sql，若为字符串类型或日期类型的字段进行赋值时，需要**手动加单引号；**

`#{}`使用占位符赋值的方式拼接sql，此时为字符串类型或日期类型的字段进行赋值时，可以**自动添加单引号** 

### 5.1、单个字面量类型的参数  

若mapper接口中的方法参数为单个的字面量类型

此时可以使用`${}`和`#{}`以任意的名称获取参数的值，注意`${}`需要手动加单引号

### 5.2、多个字面量类型的参数

若mapper接口中的方法参数为多个时

此时MyBatis会自动将这些参数放在一个map集合中，以arg0,arg1...为键，以参数为值；以param1,param2...为键，以参数为值；因此只需要通过`${}`和`#{}`访问map集合的键就可以获取相对应的值，注意`${}`需要手动加单引号

### 5.3、map集合类型的参数

若mapper接口中的方法需要的参数为多个时，此时可以手动创建map集合，将这些数据放在map中只需要通过`${}`和`#{}`访问map集合的键就可以获取相对应的值，注意${}需要手动加单引号

### 5.4、实体类类型的参数

若mapper接口中的方法参数为实体类对象时此时

可以使用`${}`和`#{}`，通过访问实体类对象中的属性名获取属性值，注意${}需要手动加单引号

### 5.5、使用@Param标识参数

可以通过@Param注解标识mapper接口中的方法参数

此时，会将这些参数放在map集合中，以@Param注解的value属性值为键，以参数为值；以param1,param2...为键，以参数为值；只需要通过`${}`和`#{}`访问map集合的键就可以获取相对应的值，注意`${}`需要手动加单引号 

### 案例代码

```java
package com.atguigu.mybatis.mapper;

import com.atguigu.mybatis.pojo.User;
import org.apache.ibatis.annotations.Param;

import java.util.Map;

/**
 * MyBatis获取参数值的两种方式：#{}和${}
 * #{}的本质是占位符赋值，${}的本质是字符串拼接
 * 1、若mapper接口方法的参数为单个的字面量类型
 * 此时可以通过#{}和${}以任意的内容获取参数值，一定要注意${}的单引号问题
 * 2、若mapper接口方法的参数为多个的字面量类型
 * 此时MyBatis会将参数放在map集合中，以两种方式存储数据
 * a>以arg0,arg1...为键，以参数为值
 * b>以param1,param2...为键，以参数为值
 * 因此，只需要通过#{}和${}访问map集合的键，就可以获取相对应的值,一定要注意${}的单引号问题
 * 3、若mapper接口方法的参数为map集合类型的参数
 * 只需要通过#{}和${}访问map集合的键，就可以获取相对应的值,一定要注意${}的单引号问题
 * 4、若mapper接口方法的参数为实体类类型的参数
 * 只需要通过#{}和${}访问实体类中的属性名，就可以获取相对应的属性值，一定要注意${}的单引号问题
 * 5、可以在mapper接口方法的参数上设置@Param注解
 * 此时MyBatis会将这些参数放在map中，以两种方式进行存储
 * a>以@Param注解的value属性值为键，以参数为值
 * b>以param1,param2...为键，以参数为值
 * 只需要通过#{}和${}访问map集合的键，就可以获取相对应的值,一定要注意${}的单引号问题
 */
public interface UserMapper {

    /**
     * 根据用户名查询用户信息
     *
     * @param username
     * @return
     */
    User getUserByUsername(String username);

    /**
     * 验证登录
     *
     * @param username
     * @param password
     * @return
     */
    User checkLogin(String username, String password);

    /**
     * 验证登录（以map集合作为参数）
     *
     * @param map
     * @return
     */
    User checkLoginByMap(Map<String, Object> map);

    /**
     * 添加用户信息
     *
     * @param user
     */
    void insertUser(User user);

    /**
     * 验证登录（使用@Param）
     *
     * @param username
     * @param password
     * @return
     */
    User checkLoginByParam(@Param("username") String username, @Param("password") String password);
}
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.atguigu.mybatis.mapper.UserMapper">

    <!--User getUserByUsername(String username);-->
    <select id="getUserByUsername" resultType="User">
        <!--select * from t_user where username = #{username}-->
        select * from t_user where username = '${username}'
    </select>

    <!--User checkLogin(String username, String password);-->
    <select id="checkLogin" resultType="User">
        <!--select * from t_user where username = #{param1} and password = #{param2}-->
        select * from t_user where username = '${param1}' and password = '${param2}'
    </select>

    <!--User checkLoginByMap(Map<String, Object> map);-->
    <select id="checkLoginByMap" resultType="User">
        select *
        from t_user
        where username = #{username}
          and password = #{password}
    </select>

    <!--void insertUser(User user);-->
    <insert id="insertUser">
        insert into t_user
        values (null, #{username}, #{password}, #{age}, #{gender}, #{email})
    </insert>

    <!--User checkLoginByParam(@Param("username") String username, @Param("password") String password);-->
    <select id="checkLoginByParam" resultType="User">
        select *
        from t_user
        where username = #{username}
          and password = #{password}
    </select>

</mapper>
package com.atguigu.mybatis.test;

import com.atguigu.mybatis.mapper.UserMapper;
import com.atguigu.mybatis.pojo.User;
import com.atguigu.mybatis.utils.SqlSessionUtil;
import org.apache.ibatis.session.SqlSession;
import org.junit.Test;

import java.util.HashMap;
import java.util.Map;

public class ParameterTest {

    @Test
    public void testGetUserByUsername() {
        SqlSession sqlSession = SqlSessionUtil.getSqlSession();
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        User user = mapper.getUserByUsername("admin");
        System.out.println(user);
    }

    @Test
    public void testCheckLogin() {
        SqlSession sqlSession = SqlSessionUtil.getSqlSession();
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        User user = mapper.checkLogin("admin", "123456");
        System.out.println(user);
    }

    @Test
    public void testCheckLoginByMap() {
        SqlSession sqlSession = SqlSessionUtil.getSqlSession();
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        Map<String, Object> map = new HashMap<>();
        map.put("username", "admin");
        map.put("password", "123456");
        User user = mapper.checkLoginByMap(map);
        System.out.println(user);
    }

    @Test
    public void testInsertUser() {
        SqlSession sqlSession = SqlSessionUtil.getSqlSession();
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        User user = new User(null, "root", "123456", 33, "女", "123@qq.com");
        mapper.insertUser(user);
    }

    @Test
    public void testCheckLoginByParam() {
        SqlSession sqlSession = SqlSessionUtil.getSqlSession();
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        User user = mapper.checkLoginByParam("admin", "123456");
        System.out.println(user);
    }

}
```

## 6、MyBatis的各种查询功能

### 6.1、查询一个实体类对象

```java
/**
* 根据用户id查询用户信息
* @param id
* @return
*/
User getUserById(@Param("id") int id);
<!--User getUserById(@Param("id") int id);-->
<select id="getUserById" resultType="User">
  select * from t_user where id = #{id}
</select>
```

### 6.2、查询一个list集合 

```java
/**
* 查询所有用户信息
* @return
*/
List<User> getUserList();
<!--List<User> getUserList();-->
<select id="getUserList" resultType="User">
  select * from t_user
</select>
```

 当查询的数据为多条时，不能使用实体类作为返回值，否则会抛出异常

TooManyResultsException；但是若查询的数据只有一条，可以使用实体类或集合作为返回值  

### 6.3、查询单个数据 

```java
/**
* 查询用户的总记录数
* @return
* 在MyBatis中，对于Java中常用的类型都设置了类型别名
* 例如： java.lang.Integer-->int|integer
* 例如： int-->_int|_integer
* 例如： Map-->map,List-->list
*/
int getCount();
<!--int getCount();-->
<select id="getCount" resultType="_integer">
  select count(id) from t_user
</select>
```

### 6.4、查询一条数据为map集合 

```java
/**
* 根据用户id查询用户信息为map集合
* @param id
* @return
*/
Map<String, Object> getUserToMap(@Param("id") int id);
<!--Map<String, Object> getUserToMap(@Param("id") int id);-->
<!--结果： {password=123456, sex=男 , id=1, age=23, username=admin}-->
<select id="getUserToMap" resultType="map">
  select * from t_user where id = #{id}
</select>
```

### 6.5、查询多条数据为map集合 

方式一 

```java
/**
* 查询所有用户信息为map集合
* @return
* 将表中的数据以map集合的方式查询，一条数据对应一个map；若有多条数据，就会产生多个map集合，此
时可以将这些map放在一个list集合中获取
*/
List<Map<String, Object>> getAllUserToMap();
<!--Map<String, Object> getAllUserToMap();-->
<select id="getAllUserToMap" resultType="map">
  select * from t_user
</select>
```

方式二 

```java
/**
* 查询所有用户信息为map集合
* @return
* 将表中的数据以map集合的方式查询，一条数据对应一个map；若有多条数据，就会产生多个map集合，并
且最终要以一个map的方式返回数据，此时需要通过@MapKey注解设置map集合的键，值是每条数据所对应的
map集合
*/
@MapKey("id")
Map<String, Object> getAllUserToMap();
<!--Map<String, Object> getAllUserToMap();-->
<!--
{
1={password=123456, sex=男, id=1, age=23, username=admin},
2={password=123456, sex=男, id=2, age=23, username=张三},
3={password=123456, sex=男, id=3, age=23, username=张三}
} -->
<select id="getAllUserToMap" resultType="map">
  select * from t_user
</select>
```

## 案例代码

```java
package com.atguigu.mybatis.mapper;

import com.atguigu.mybatis.pojo.User;
import org.apache.ibatis.annotations.MapKey;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

public interface SelectMapper {

    /**
     * 若sql语句查询的结果为多条时，一定不能以实体类类型作为方法的返回值
     * 否则会抛出异常TooManyResultsException
     * 若sql语句查询的结果为1条时，此时可以使用实体类类型或list集合类型作为方法的返回值
     */

    /**
     * 根据id查询用户信息
     *
     * @param id
     * @return
     */
    User getUserById(@Param("id") Integer id);

    /**
     * 查询所有的用户信息
     *
     * @return
     */
    List<User> getAllUser();

    /**
     * 查询用户的总数量
     *
     * @return
     */
    Integer getCount();

    /**
     * 根据id查询用户信息为map集合
     *
     * @param id
     * @return
     */
    Map<String, Object> getUserByIdToMap(@Param("id") Integer id);

    /**
     * 查询所有的用户信息为map集合
     * <p>
     * 若查询的数据有多条时，并且要将每条数据转换为map集合
     * 此时有两种解决方案：
     * 1、将mapper接口方法的返回值设置为泛型是map的list集合
     * List<Map<String, Object>> getAllUserToMap();
     * 结果：{password=123456, gender=男, id=1, age=23, email=12345@qq.com, username=admin},{password=123456, gender=男, id=1, age=23, email=12345@qq.com, username=admin}
     * 2、可以将每条数据转换的map集合放在一个大的map中，但是必须要通过@MapKey注解
     * 将查询的某个字段的值作为大的map的键
     *
     * @MapKey("id") Map<String, Object> getAllUserToMap();
     * 结果：
     * {
     * 1={password=123456, gender=男, id=1, age=23, email=12345@qq.com, username=admin},
     * 2={password=123, gender=男, id=2, age=23, email=12345@qq.com, username=zhangsan},
     * 3={password=123456, gender=女, id=3, age=33, email=123@qq.com, username=root},
     * 4={password=123, id=4, username=lisi}
     * }
     */
    //List<Map<String, Object>> getAllUserToMap();
    @MapKey("id")
    Map<String, Object> getAllUserToMap();
}
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.atguigu.mybatis.mapper.SelectMapper">

    <!--User getUserById(@Param("id") Integer id);-->
    <select id="getUserById" resultType="User">
        select *
        from t_user
        where id = #{id}
    </select>

    <!--List<User> getAllUser();-->
    <select id="getAllUser" resultType="User">
        select *
        from t_user
    </select>

    <!--Integer getCount();-->
    <!--
        MyBatis中为Java中常用的类型设置了类型别名
        Integer：Integer，int
        int：_int,_integer
        Map：map
        String：string
    -->
    <select id="getCount" resultType="int">
        select count(*)
        from t_user
    </select>

    <!--Map<String, Object> getUserByIdToMap(@Param("id") Integer id);-->
    <select id="getUserByIdToMap" resultType="map">
        select *
        from t_user
        where id = #{id}
    </select>

    <!--Map<String, Object> getAllUserToMap();-->
    <select id="getAllUserToMap" resultType="map">
        select *
        from t_user
    </select>

</mapper>
package com.atguigu.mybatis.test;

import com.atguigu.mybatis.mapper.UserMapper;
import com.atguigu.mybatis.pojo.User;
import com.atguigu.mybatis.utils.SqlSessionUtil;
import org.apache.ibatis.session.SqlSession;
import org.junit.Test;

import java.util.HashMap;
import java.util.Map;

public class ParameterTest {

    @Test
    public void testGetUserByUsername() {
        SqlSession sqlSession = SqlSessionUtil.getSqlSession();
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        User user = mapper.getUserByUsername("admin");
        System.out.println(user);
    }

    @Test
    public void testCheckLogin() {
        SqlSession sqlSession = SqlSessionUtil.getSqlSession();
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        User user = mapper.checkLogin("admin", "123456");
        System.out.println(user);
    }

    @Test
    public void testCheckLoginByMap() {
        SqlSession sqlSession = SqlSessionUtil.getSqlSession();
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        Map<String, Object> map = new HashMap<>();
        map.put("username", "admin");
        map.put("password", "123456");
        User user = mapper.checkLoginByMap(map);
        System.out.println(user);
    }

    @Test
    public void testInsertUser() {
        SqlSession sqlSession = SqlSessionUtil.getSqlSession();
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        User user = new User(null, "root", "123456", 33, "女", "123@qq.com");
        mapper.insertUser(user);
    }

    @Test
    public void testCheckLoginByParam() {
        SqlSession sqlSession = SqlSessionUtil.getSqlSession();
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        User user = mapper.checkLoginByParam("admin", "123456");
        System.out.println(user);
    }

}
```

## 7、特殊SQL的执行 

### 7.1、模糊查询 

```java
/**
* 测试模糊查询
* @param mohu
* @return
*/
List<User> testMohu(@Param("mohu") String mohu);
<!--List<User> testMohu(@Param("mohu") String mohu);-->
<select id="testMohu" resultType="User">
  <!--select * from t_user where username like '%${mohu}%'-->
  <!--select * from t_user where username like concat('%',#{mohu},'%')-->
  select * from t_user where username like "%"#{mohu}"%"
</select>
```

### 7.2、批量删除 

```java
/**
* 批量删除
* @param ids
* @return
*/
int deleteMore(@Param("ids") String
<!--int deleteMore(@Param("ids") String ids);-->
<delete id="deleteMore">
  delete from t_user where id in (${ids})
</delete>
```

### 7.3、动态设置表名 

```java
/**
* 动态设置表名，查询所有的用户信息
* @param tableName
* @return
*/
List<User> getAllUser(@Param("tableName") String tableName);
<!--List<User> getAllUser(@Param("tableName") String tableName);-->
<select id="getAllUser" resultType="User">
  select * from ${tableName}
</select>
```

### 7.4、添加功能获取自增的主键 

场景模拟：

t_clazz(clazz_id,clazz_name)

t_student(student_id,student_name,clazz_id)

1、添加班级信息

2、获取新添加的班级的id

3、为班级分配学生，即将某学的班级id修改为新添加的班级的id 

```java
/**
* 添加用户信息
* @param user
* @return
* useGeneratedKeys：设置使用自增的主键
* keyProperty：因为增删改有统一的返回值是受影响的行数，因此只能将获取的自增的主键放在传输的参
数user对象的某个属性中
*/
int insertUser(User user);
<!--int insertUser(User user);-->
<insert id="insertUser" useGeneratedKeys="true" keyProperty="id">
  insert into t_user values(null,#{username},#{password},#{age},#{sex})
</insert>
```

### 案例代码

```java
package com.atguigu.mybatis.mapper;

import com.atguigu.mybatis.pojo.User;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface SpecialSQLMapper {

    /**
     * 通过用户名模糊查询用户信息
     *
     * @param mohu
     * @return
     */
    List<User> getUserByLike(@Param("mohu") String mohu);

    /**
     * 批量删除
     *
     * @param ids
     */
    void deleteMoreUser(@Param("ids") String ids);

    /**
     * 动态设置表名，查询用户信息
     *
     * @param tableName
     * @return
     */
    List<User> getUserList(@Param("tableName") String tableName);

    /**
     * 添加用户信息并获取自增的主键
     *
     * @param user
     */
    void insertUser(User user);

}
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.atguigu.mybatis.mapper.SpecialSQLMapper">

    <!--List<User> getUserByLike(@Param("mohu") String mohu);-->
    <select id="getUserByLike" resultType="User">
        <!--select * from t_user where username like '%${mohu}%'-->
        <!--select * from t_user where username like concat('%',#{mohu},'%')-->
        select * from t_user where username like "%"#{mohu}"%"
    </select>

    <!--void deleteMoreUser(@Param("ids") String ids);//ids:9,10-->
    <delete id="deleteMoreUser">
        delete
        from t_user
        where id in (${ids})
    </delete>

    <!--List<User> getUserList(@Param("tableName") String tableName);-->
    <select id="getUserList" resultType="User">
        select *
        from ${tableName}
    </select>

    <!--void insertUser(User user);-->
    <!--
        useGeneratedKeys:表示当前添加功能使用自增的主键
        keyProperty:将添加的数据的自增主键为实体类类型的参数的属性赋值
    -->
    <insert id="insertUser" useGeneratedKeys="true" keyProperty="id">
        insert into t_user
        values (null, #{username}, #{password}, #{age}, #{gender}, #{email})
    </insert>

</mapper>
package com.atguigu.mybatis.test;

import com.atguigu.mybatis.mapper.SpecialSQLMapper;
import com.atguigu.mybatis.pojo.User;
import com.atguigu.mybatis.utils.SqlSessionUtil;
import org.apache.ibatis.session.SqlSession;
import org.junit.Test;

import java.sql.*;
import java.util.List;

public class SpecialSQLMapperTest {

    @Test
    public void testGetUserByLike() {
        SqlSession sqlSession = SqlSessionUtil.getSqlSession();
        SpecialSQLMapper mapper = sqlSession.getMapper(SpecialSQLMapper.class);
        List<User> list = mapper.getUserByLike("a");
        list.forEach(System.out::println);
    }

    @Test
    public void testDeleteMoreUser() {
        SqlSession sqlSession = SqlSessionUtil.getSqlSession();
        SpecialSQLMapper mapper = sqlSession.getMapper(SpecialSQLMapper.class);
        mapper.deleteMoreUser("9,10");
    }

    @Test
    public void testGetUserList() {
        SqlSession sqlSession = SqlSessionUtil.getSqlSession();
        SpecialSQLMapper mapper = sqlSession.getMapper(SpecialSQLMapper.class);
        List<User> list = mapper.getUserList("t_user");
        list.forEach(System.out::println);
    }

    @Test
    public void testInsertUser() {
        SqlSession sqlSession = SqlSessionUtil.getSqlSession();
        SpecialSQLMapper mapper = sqlSession.getMapper(SpecialSQLMapper.class);
        User user = new User(null, "xiaoming", "123456", 23, "男", "123@qq.com");
        mapper.insertUser(user);
        System.out.println(user);
    }

    public void testJDBC() {
        try {
            Class.forName("");
            Connection connection = DriverManager.getConnection("", "", "");
            /*String sql = "select * from t_user where username like '%?%'";
            PreparedStatement ps = connection.prepareStatement(sql);*/
            //ps.setString(1, "a");
            String sql = "insert into t_user values()";
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.executeUpdate();
            ResultSet resultSet = ps.getGeneratedKeys();
            resultSet.next();
            int id = resultSet.getInt(1);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
```

