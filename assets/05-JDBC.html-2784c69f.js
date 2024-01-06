import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o,c as l,a as n,b as s,d as e,e as a}from"./app-2b757837.js";const i="/assets/image-20231219212147168-c084dd89.png",u="/assets/image-20231219212206543-c1bb8390.png",r="/assets/image-20231219212304656-4b6c3015.png",d="/assets/image-46db268b.png",k="/assets/图片-471e3303.png",m="/assets/image-17043743390351-623fe94f.png",v="/assets/image-17043814419513-0cf59d3a.png",b="/assets/image-20240106145431382-a3e8db66.png",g="/assets/image-17043822428585-77f3767b.png",y="/assets/image-17043822563377-503464f7.png",f="/assets/image-17043824834699-4e2db00a.png",w="/assets/image-170438249336411-0dcbdd66.png",h="/assets/image-170438250223413-5ff8f304.png",S="/assets/image-170438251188615-014e3cab.png",q="/assets/image-170438252365417-7a70d857.png",j="/assets/image-170438253479619-957505a8.png",C="/assets/image-170438255119021-1bf6b363.png",D="/assets/image-170438256221323-3a87b8d2.png",x={},_=a('<h1 id="jdbc" tabindex="-1"><a class="header-anchor" href="#jdbc" aria-hidden="true">#</a> JDBC</h1><h2 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言" aria-hidden="true">#</a> 一、前言</h2><h3 id="_1-1-课程需要哪些前置技术" tabindex="-1"><a class="header-anchor" href="#_1-1-课程需要哪些前置技术" aria-hidden="true">#</a> 1.1 课程需要哪些前置技术</h3><table><thead><tr><th>技术</th><th>版本</th><th>备注</th></tr></thead><tbody><tr><td>idea</td><td>2022.2</td><td>最新版本</td></tr><tr><td>jdk</td><td>1.8</td><td></td></tr><tr><td>mysql-jdbc驱动</td><td>8.0.27</td><td>8.0.25+</td></tr><tr><td>druid</td><td>1.1.21</td><td></td></tr><tr><td>mysql</td><td>8.0.25</td><td></td></tr></tbody></table><ul><li>前置技术 <ul><li>需要软件 <ul><li>mysql软件安装(8+版本)</li><li>mysql可视化工具安装</li><li>idea工具安装(推荐2022版本)</li></ul></li><li>SQL语句 <ul><li>掌握数据库连接命令</li><li>掌握基本的DDL,DQL,DML等命令</li><li>掌握数据库事务概念</li></ul></li><li>Java基础语法 <ul><li>多态机制</li><li>基本容器使用(集合和数组等)</li><li>泛型</li><li>反射等技术</li></ul></li></ul></li></ul><h3 id="_1-2-课程学习路线设计" tabindex="-1"><a class="header-anchor" href="#_1-2-课程学习路线设计" aria-hidden="true">#</a> 1.2 课程学习路线设计</h3><blockquote><p><strong>学 悟 行</strong></p></blockquote><ul><li>课程学习路径图 <ul><li>阶段一： JDBC版本和概念理解 <ul><li>标题1：全新JDBC课程前言</li><li>标题2：全新JDBC技术概述</li></ul></li><li>阶段二：JDBC技术核心使用学习 <ul><li>标题3：全新JDBC技术核心API</li><li>标题4：全新JDBC扩展拔高</li></ul></li><li>阶段三：JDBC连接性能优化连接池使用 <ul><li>标题5：国货之光Druid连接池技术使用</li></ul></li><li>阶段四：JDBC使用极致优化工具类高阶封装 <ul><li>标题6: 全新JDBC使用优化以及工具类封装</li></ul></li><li>阶段五：实践出真知，CMS项目实战 <ul><li>标题7: 基于CMS项目JDBC实战练习</li></ul></li></ul></li></ul><h2 id="二、全新jdbc技术概述" tabindex="-1"><a class="header-anchor" href="#二、全新jdbc技术概述" aria-hidden="true">#</a> 二、全新JDBC技术概述</h2><h3 id="_2-1-jdbc技术概念和理解" tabindex="-1"><a class="header-anchor" href="#_2-1-jdbc技术概念和理解" aria-hidden="true">#</a> 2.1 jdbc技术概念和理解</h3><ul><li>jdbc技术理解</li></ul><p>JDBC：Java Database Connectivity | Java <strong>连接数据库技术!</strong></p><p>通俗点说,在Java代码中,使用<strong>JDBC提供的方法</strong>,可以<strong>发送</strong>字符串类型的SQL语句到数据库管理软件(MySQL,Oracle等),并且获取语句执行结果!</p><p>进而实现数据库数据CURD操作的技术!</p><figure><img src="'+i+'" alt="image-20231219212147168" tabindex="0" loading="lazy"><figcaption>image-20231219212147168</figcaption></figure><figure><img src="'+u+'" alt="image-20231219212206543" tabindex="0" loading="lazy"><figcaption>image-20231219212206543</figcaption></figure><figure><img src="'+r+'" alt="image-20231219212304656" tabindex="0" loading="lazy"><figcaption>image-20231219212304656</figcaption></figure><ul><li><strong>jdbc概念总结</strong><ol><li>jdbc是(Java Database Connectivity)单词的缩写,翻译为java连接数据库</li><li>jdbc是java程序连接数据库的<strong>技术统称</strong></li><li>jdbc由<strong>java语言的规范(接口)<strong>和</strong>各个数据库厂商的实现驱动(jar)组成</strong></li><li><strong>jdbc是一种典型的面向接口编程</strong></li><li>jdbc优势 <ol><li>只需要学习jdbc规范接口的方法,即可操作<strong>所有的数据库软件</strong></li><li>项目中期切换数据库软件,只需要更换对应的数据库驱动jar包,不需要更改代码</li></ol></li></ol></li></ul><h3 id="_2-2-jdbc核心api和使用路线" tabindex="-1"><a class="header-anchor" href="#_2-2-jdbc核心api和使用路线" aria-hidden="true">#</a> 2.2 jdbc核心api和使用路线</h3><ul><li><p><strong>jdbc技术组成</strong></p><ol><li><p>jdk下jdbc规范接口, 存储在java.sql和javax.sql包中的api</p><blockquote><p>为了项目代码的可移植性，可维护性，SUN公司从最初就制定了Java程序连接各种数据库的统一<strong>接口规范</strong>。这样的话，不管是连接哪一种DBMS软件，Java代码可以保持一致性。</p></blockquote></li><li><p>各个数据库厂商提供的驱动jar包</p><blockquote><p>因为各个数据库厂商的DBMS软件各有不同，那么内部如何通过sql实现增、删、改、查等管理数据，只有这个数据库厂商自己更清楚，因此把接口规范的实现交给各个数据库厂商自己实现。</p></blockquote><p>jar包是什么?</p><blockquote><p>java程序打成的一种压缩包格式，你可以将这些jar包引入你的项目中，然后你可以使用这个java程序中类和方法以及属性了!</p></blockquote></li></ol></li><li><p><strong>涉及具体核心类和接口</strong></p><p><strong>DriverManager获取连接；接着建立连接；PreparedStatement（最常用）发送sql语句；若是查询操作，则对应的查询结果放在Result中。</strong></p><ul><li><strong>DriverManager</strong><ol><li>将第三方数据库厂商的实现驱动jar注册到程序中</li><li>可以根据数据库连接信息获取connection</li></ol></li><li>Connection [建立连接] <ul><li>和数据库建立的连接,在连接对象上,可以多次执行数据库curd动作</li><li>可以获取statement和 preparedstatement,callablestatement对象</li></ul></li><li>Statement【适用静态sql路线 没有动态值的】 | <strong>PreparedStatement</strong>【预编译sql 有动态值语句】 | CallableStatement <ul><li>具体发送SQL语句到数据库管理软件的对象</li><li>不同发送方式稍有不同! **preparedstatement **使用为重点!</li></ul></li><li>Result【对查询语句才有】（查询的结果） <ul><li><strong>面向对象思维的产物</strong>(抽象成数据库的查询结果表)</li><li>存储DQL查询数据库结果的对象</li><li>需要我们进行解析,获取具体的数据库数据</li></ul></li></ul></li><li><p><strong>jdbc api使用路线</strong></p><ul><li>JDBC API使用路线 <ul><li>静态SQL路线(没有动态值语句)（没有条件值语句） <ul><li>DriverManager <ul><li>Connection <ul><li>Statement（静态sql语句） <ul><li>Result</li></ul></li></ul></li></ul></li></ul></li><li>预编译SQL路线(有动态值语句)（最常用） <ul><li>DriverManager <ul><li>Connection <ul><li>PreparedStatement <ul><li>Result</li></ul></li></ul></li></ul></li></ul></li><li>执行标准存储过SQL路线 <ul><li>DriverManager <ul><li>Connection <ul><li>CallableStatement <ul><li>Result</li></ul></li></ul></li></ul></li></ul></li></ul></li></ul></li></ul><h3 id="_2-3-为什么选择全新-8-版本mysql-jdbc驱动" tabindex="-1"><a class="header-anchor" href="#_2-3-为什么选择全新-8-版本mysql-jdbc驱动" aria-hidden="true">#</a> 2.3 为什么选择全新 8+版本mysql-jdbc驱动?</h3>',21),L={href:"https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-whats-new.html",target:"_blank",rel:"noopener noreferrer"},T=a(`<ul><li><strong>支持8.0+版本mysql数据管理软件</strong><ul><li>mysql软件知名版本迭代时间</li></ul></li></ul><table><thead><tr><th></th><th></th><th></th></tr></thead><tbody><tr><td>版本号</td><td>迭代时间</td><td>大小</td></tr><tr><td>mysql-8.0.25</td><td>4月 30, 2021</td><td>435.7M</td></tr><tr><td>mysql-5.7.25</td><td>1月 10, 2019</td><td>387.7M</td></tr><tr><td>mysql-5.5.30</td><td>9月 19, 2012</td><td>201.5M</td></tr></tbody></table><ul><li><p>mysql 8.x版本数据库性能提升介绍</p><p>**性能提升级。**官方表示MySQL 8.0 的速度要比 MySQL 5.7 快 2 倍。</p><p>MySQL 8.0 在读/写工作负载、IO 密集型工作负载、以及高竞争工作负载时相比MySQL5.7有更好的性能。</p></li><li><p><strong>支持java jdbc规范 4.2+版本新特性</strong></p><ul><li><p>java jdbc规范驱动版本和更新时间</p><p>Year JDBC Version JSR Specification JDK Implementation</p><p>2017 JDBC 4.3 JSR 221 Java SE 9</p><p>**2014 JDBC 4.2 JSR 221 ** <strong>Java SE 8</strong></p><p>2011 JDBC 4.1 JSR 221 Java SE 7</p><p>2006 JDBC 4.0 JSR 221 Java SE 6</p><p>2001 JDBC 3.0 JSR 54 JDK 1.4</p><p>1999 JDBC 2.1 JDK 1.2</p><p>1997 JDBC 1.2 JDK 1.1</p></li><li><p>jdbc规范版本更新内容(了解)</p></li></ul></li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>**JDBC 4.3 中引入的主要新功能包括：**
添加了对分片的支持
添加了 java.sql.连接生成器接口
添加了 java.sql.ShardigKey 接口
添加了 java.sql.分片密钥生成器接口
添加了.sql.XA 连接生成器接口
添加了 javax.sql.池连接生成器接口

**JDBC 4.2 中引入的主要新功能包括：**
添加了对引用光标的支持
添加了 java.sql.驱动程序操作接口
添加了.sql.SQLType 接口
添加 java.sql.JDBCType 枚举
一些 JDBC 接口更改

**JDBC 4.1 中引入的主要新功能包括：**
添加了对“使用资源试用”语句的支持
增强的日期值和时间戳值
从 Java 对象到 JDBC 类型的其他映射
一些 JDBC 接口更改

**JDBC 4.0 中引入的主要新功能包括：**
自动加载爪哇.sql.驱动程序
数据类型支持
国家字符集转换支持
支持

由于 JDBC 4.3 API 是向后兼容的，因此将 Java SE 9 或更高版本与 JDBC 4.2、4.1、4.0 
或 3.0 驱动程序一起使用没有问题，只要您不使用 JDBC 4.3 API 中引入的新方法或类。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><strong>支持 jdk1.8版本语法变更新特性</strong></p><p>Connector/J 8.0是专门为在Java 8平台上运行而创建的。</p><p>众所周知，Java8与早期的Java版本高度兼容，</p><p>但还是存在少量不兼容性，所以,驱动技术版本,尽量选择支持jdk 8.0+!</p></li><li><p><strong>支持全新的驱动api,增加自动时区选择和默认utf-8编码格式等配置</strong></p></li></ul><h2 id="三、全新jdbc核心api" tabindex="-1"><a class="header-anchor" href="#三、全新jdbc核心api" aria-hidden="true">#</a> 三、全新JDBC核心API</h2><h3 id="_3-1-引入mysql-jdbc驱动jar" tabindex="-1"><a class="header-anchor" href="#_3-1-引入mysql-jdbc驱动jar" aria-hidden="true">#</a> 3.1 引入mysql-jdbc驱动jar</h3><p>1、驱动jar版本选择</p><p>我们选择版本 8.0.27版本</p><table><thead><tr><th>mysql版本</th><th>推荐驱动版本</th><th>备注</th></tr></thead><tbody><tr><td>mysql 5.5.x</td><td>5.0.x</td><td>com.mysql.jdbc.Driver</td></tr><tr><td>mysql 5.7.x</td><td>5.1.x</td><td>com.mysql.jdbc.Driver</td></tr><tr><td>msyql 8.x</td><td>8.0.x</td><td><strong>建议: 8.0.25+省略时区设置</strong>com.mysql.cj.jdbc.Driver</td></tr></tbody></table><p>2、java工程导入依赖</p><p>a、<strong>项目创建lib文件夹</strong></p><p>b、<strong>导入驱动依赖jar包</strong></p><p>c、<strong>jar包右键-添加为项目依赖</strong></p><figure><img src="`+d+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="_3-2-jdbc基本使用步骤分析-6步" tabindex="-1"><a class="header-anchor" href="#_3-2-jdbc基本使用步骤分析-6步" aria-hidden="true">#</a> 3.2 jdbc基本使用步骤分析（6步）</h3><ol><li>注册驱动【依赖的jar包 进行安装】</li><li>获取连接【connection建立连接】</li><li>创建发送sql语句对象【statement 创建发送sql语句的statement】</li><li>发送sql语句，并获取返回结果【statement发送sql语句到数据库 并且取得返回结构】</li><li>结果集解析【将result结果解析出来】</li><li>资源关闭【释放resultset、statement、connection】</li></ol><figure><img src="'+k+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="_3-3-基于statement演示查询" tabindex="-1"><a class="header-anchor" href="#_3-3-基于statement演示查询" aria-hidden="true">#</a> 3.3 基于statement演示查询</h3><ul><li>准备数据库数据</li></ul><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>CREATE DATABASE atguigu;

USE atguigu;

CREATE TABLE t_user(
   id INT PRIMARY KEY AUTO_INCREMENT COMMENT &#39;用户主键&#39;,
   account VARCHAR(20) NOT NULL UNIQUE COMMENT &#39;账号&#39;,
   PASSWORD VARCHAR(64) NOT NULL COMMENT &#39;密码&#39;,
   nickname VARCHAR(20) NOT NULL COMMENT &#39;昵称&#39;);
   
INSERT INTO t_user(account,PASSWORD,nickname) VALUES
  (&#39;root&#39;,&#39;123456&#39;,&#39;经理&#39;),(&#39;admin&#39;,&#39;666666&#39;,&#39;管理员&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>查询目标</p><p>查询全部用户信息,进行控制台输出</p><table><thead><tr><th>id</th><th>account</th><th>PASSWORD</th><th>nickname</th></tr></thead><tbody><tr><td>1</td><td>root</td><td>123456</td><td>经理</td></tr><tr><td>2</td><td>admin</td><td>666666</td><td>管理员</td></tr></tbody></table></li><li><p>基于statement实现查询**(演示步骤)**</p></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 *
 * TODO: 步骤总结 (6步)
 *    1. 注册驱动
 *    2. 获取连接
 *    3. 创建statement
 *    4. 发送SQL语句,并获取结果
 *    5. 结果集解析
 *    6. 关闭资源
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JdbcBasePart</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>

        <span class="token comment">//1.注册驱动</span>
        <span class="token doc-comment comment">/**
         * TODO: 注意
         *   Driver -&gt; com.mysql.cj.jdbc.Driver
         */</span>
        <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">registerDriver</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Driver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//2.获取连接</span>
        <span class="token doc-comment comment">/**
         * TODO: 注意
         *   面向接口编程
         *   java.sql 接口 = 实现类
         *   connection 使用java.sql.Connection接口接收
         */</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:mysql://localhost:3306/atguigu&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//3.创建小车</span>
        <span class="token class-name">Statement</span> statement <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//4.发送SQL语句</span>
        <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;select id,account,password,nickname from t_user ;&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">ResultSet</span> resultSet <span class="token operator">=</span>  statement<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//5.结果集解析</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>resultSet<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> id <span class="token operator">=</span> resultSet<span class="token punctuation">.</span><span class="token function">getInt</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> account <span class="token operator">=</span> resultSet<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">&quot;account&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> password <span class="token operator">=</span> resultSet<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> nickname <span class="token operator">=</span> resultSet<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">&quot;nickname&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>id<span class="token operator">+</span><span class="token string">&quot;::&quot;</span><span class="token operator">+</span>account<span class="token operator">+</span><span class="token string">&quot;::&quot;</span><span class="token operator">+</span>password<span class="token operator">+</span><span class="token string">&quot;::&quot;</span><span class="token operator">+</span>nickname<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//6.关闭资源  【先开后关】</span>
        resultSet<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        statement<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-基于statement方式问题" tabindex="-1"><a class="header-anchor" href="#_3-4-基于statement方式问题" aria-hidden="true">#</a> 3.4 基于statement方式问题</h3><ul><li><p>本案例目标</p><ul><li>明确jdbc流程和详细讲解使用(<strong>注册驱动</strong>,<strong>获取连接</strong>,<strong>发送语句</strong>,<strong>结果解析</strong>)</li><li>发现问题,引出preparedstatement</li></ul></li><li><p>准备数据库数据</p><blockquote><p>上个案例相同的数据库</p></blockquote></li></ul><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>CREATE DATABASE atguigu;

USE atguigu;

CREATE TABLE t_user(
   id INT PRIMARY KEY AUTO_INCREMENT COMMENT &#39;用户主键&#39;,
   account VARCHAR(20) NOT NULL UNIQUE COMMENT &#39;账号&#39;,
   PASSWORD VARCHAR(64) NOT NULL COMMENT &#39;密码&#39;,
   nickname VARCHAR(20) NOT NULL COMMENT &#39;昵称&#39;);
   
INSERT INTO t_user(account,PASSWORD,nickname) VALUES
  (&#39;root&#39;,&#39;123456&#39;,&#39;经理&#39;),(&#39;admin&#39;,&#39;666666&#39;,&#39;管理员&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),E=a(`<li><p>演示目标</p><p>模拟登录,控制台输入账号和密码,判断是否登陆成功成功!</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>root
123456
登陆成功！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),A=n("p",null,"类加载知识补充",-1),O={href:"http://t.csdnimg.cn/Hfe8X",target:"_blank",rel:"noopener noreferrer"},B=n("p",null,[s("类加载：就是将类的class文件读入内存，并创建一个"),n("code",null,"Java.lang.class"),s("对象。类在运行期第一次使用时，首先会被类加载器动态加载至JVM。类的加载过程又分为了五个阶段：加载、验证、准备、解析、初始化。为了方便记忆可以编为一个口诀：家(加载)宴(验证)准备(准备)了西(解析)式(初始化)菜。")],-1),M=n("p",null,"类的生命周期被分为了七个阶段：加载、验证、准备、解析、初始化、使用、限载",-1),Q=n("li",null,[n("p",null,"基于statement实现模拟登录")],-1),J=a(`<div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>/**
 * @Author 赵伟风
 * Description: 输入账号密码,模拟用户登录!
 */
public class JdbcStatementLoginPart {

    public static void main(String[] args) throws ClassNotFoundException, SQLException {

        //1.输入账号和密码
        Scanner scanner = new Scanner(System.in);
        String account = scanner.nextLine();
        String password = scanner.nextLine();
        scanner.close();

        //2.jdbc的查询使用
        /**
         * 类加载： java文件 -&gt; 编译 -&gt; 【 class字节码文件 --&gt;  类加载 --&gt; jvm虚拟中  --&gt; Class对象】
         * 类加载具体步骤：  加载 【class文件转成对象加载到虚拟机中】-&gt;
         *                连接 【验证（检查类文件） -&gt; 准备 (静态变量赋默认值) -&gt; 解析 (调用静态代码块) 】 -&gt;
         *                初始化 -&gt; (赋真实值)
         * 以下7种方式会触发类加载：
         *new指令：程序创建一个类的实例对象时\\n\\ngetstatic指令：当程序访问类的静态变量时\\n\\nputstatic指令：当程序给静态变量赋值时\\n\\n
         *invokestatic指令：当程序调用静态方法时\\n\\n注：程序访问类的静态常量不会触发类加载机制
         *    1. new关键字
         *    2. 调用静态属性
         *    3. 调用静态方法
         *    4. 接口 包含1.8 新特性 default关键字
         *    5. 反射 【Class.forName() 类名.class】
         *    6. 子类调用会触发父类的静态代码块
         *    7. 触发类的入口方法main
         */
         
         //1:DriverManager.registerDriver(new Driver());调用两次。不用
         //2:new Driver()  频繁修改不优雅
        //注册一次驱动 方法三
        Class.forName(&quot;com.mysql.cj.jdbc.Driver&quot;);



        /**获取数据库连接
         * 重写： 为了子类扩展父类的方法！父类也间接的规范了子类方法的参数和返回！
         * 重载： 重载一般应用在第三方的工具类上，为了方便用户多种方式传递参数形式！简化形式！
         */
        /**
         * 三个参数：
         *    String URL: 连接数据库地址
         *    String user: 连接数据库用户名
         *    String password: 连接数据库用户对应的密码
         * 数据库URL语法：
         *    JDBC:
         *        ip port
         *        jdbc:mysql | jdbc:oracle :// 127.0.0.1 | localhost : 3306 / 数据库名
         *        jdbc:mysql://localhost:3306/day01
         *        192.168.33.45
         *        jdbc:mysql://192.168.33.45/3306/day01
         *        当前电脑的省略写法！ 注意：本机和端口3306
         *        jdbc:mysql://localhost:3306/day01 = jdbc:mysql:///day01
         *
         * 两个参数：
         *     String URL : 写法还是jdbc的路径写法！
         *     Properties : 就是一个参数封装容器！至少要包含 user / password key!存储连接账号信息！
         *
         * 一个参数：
         *    String URL: URl可以携带目标地址，可以通过?分割，在后面key=value&amp;key=value形式传递参数
         *                jdbc:mysql:///day01?user=root&amp;password=123456
         * 扩展路径参数(了解):
         *    serverTimezone=Asia/Shanghai&amp;useUnicode=true&amp;characterEncoding=utf8&amp;useSSL=true
         *
         */
        //获取连接
        Connection connection = DriverManager.getConnection(&quot;jdbc:mysql:///atguigu&quot;, &quot;root&quot;, &quot;root&quot;);

        //固定方法固定剂
        //创建statement
        Statement statement = connection.createStatement();

        //执行SQL语句 [动态SQL语句,需要字符串拼接]
        String sql = &quot;select * from t_user where account = &#39;&quot;+account+&quot;&#39; and password = &#39;&quot;+password+&quot;&#39; ;&quot;;


        /**
         *  ResultSet 结果集对象 = executeQuery(DQL语句)
         *  int响应行数  = executeUpdate(非DQL语句)
         */
        ResultSet resultSet = statement.executeQuery(sql);


        //ResultSet == 小海豚  你必须有面向对象的思维：Java是面向对象编程的语言 OOP！
        /**
         *
         * TODO:1.需要理解ResultSet的数据结构和小海豚查询出来的是一样，需要在脑子里构建结果表！
         * TODO:2.有一个光标指向的操作数据行，默认指向第一行的上边！我们需要移动光标，指向行，在获取列即可！
         *        boolean = next()
         *              false: 没有数据，也不移动了！
         *              true:  有更多行，并且移动到下一行！
         *       推荐：推荐使用if 或者 while循环，嵌套next方法，循环和判断体内获取数据！
         *       if(next()){获取列的数据！} ||  while(next()){获取列的数据！}
         *
         * TODO：3.获取当前行列的数据！
         *         get类型(int columnIndex | String columnLabel)
         *        列名获取  //lable 如果没有别名，等于列名， 有别名label就是别名，他就是查询结果的标识！
         *        列的角标  //从左到右 从1开始！ 数据库全是从1开始！
         */

        //进行结果集对象解析
        if (resultSet.next()){
            //只要向下移动，就是有数据 就是登录成功！
            System.out.println(&quot;登录成功！&quot;);
        }else{
            System.out.println(&quot;登录失败！&quot;);
        }

        //关闭资源
        resultSet.close();
        statement.close();
        connection.close();
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>存在问题</p><ol><li><p>SQL语句需要字符串拼接,比较麻烦（示例代码在：执行SQL语句 [动态SQL语句,需要字符串拼接]）</p></li><li><p>只能拼接字符串类型,其他的数据库类型无法处理</p></li><li><p><strong>可能发生注入攻击</strong></p><blockquote><p>动态值充当了SQL语句结构,影响了原有的查询结果!</p></blockquote></li></ol></li></ul><h3 id="_3-5-基于preparedstatement方式优化" tabindex="-1"><a class="header-anchor" href="#_3-5-基于preparedstatement方式优化" aria-hidden="true">#</a> 3.5 <strong>基于preparedStatement方式优化</strong></h3><blockquote><p>利用<strong>preparedStatement</strong>解决上述案<strong>例注入攻击</strong>和<strong>SQL语句拼接问题</strong>! (重点掌握)</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * @Author 赵伟风
 * Description: 使用预编译Statement解决注入攻击问题
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JdbcPreparedStatementLoginPart</span> <span class="token punctuation">{</span>


    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span><span class="token punctuation">,</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>

        <span class="token comment">//1.输入账号和密码</span>
        <span class="token class-name">Scanner</span> scanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> account <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> password <span class="token operator">=</span> scanner<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        scanner<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//2.jdbc的查询使用</span>
        <span class="token comment">//注册驱动</span>
        <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.mysql.cj.jdbc.Driver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//获取连接</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:mysql:///atguigu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//创建preparedStatement</span>
        <span class="token comment">//connection.createStatement();</span>
        <span class="token comment">//TODO 需要传入SQL语句结构</span>
        <span class="token comment">//TODO 要的是SQL语句结构，动态值的部分使用 ? ,  占位符！</span>
        <span class="token comment">//TODO ?  不能加 &#39;?&#39;  ? 只能替代值，不能替代关键字和容器名</span>
        <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;select * from t_user where account = ? and password = ? ;&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">PreparedStatement</span> preparedStatement <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//占位符赋值</span>
        <span class="token comment">//给占位符赋值！ 从左到右，从1开始！</span>
        <span class="token doc-comment comment">/**
         *  int 占位符的下角标
         *  object 占位符的值
         */</span>
        preparedStatement<span class="token punctuation">.</span><span class="token function">setObject</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span>password<span class="token punctuation">)</span><span class="token punctuation">;</span>
        preparedStatement<span class="token punctuation">.</span><span class="token function">setObject</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span>account<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//这哥们内部完成SQL语句拼接！</span>
        <span class="token comment">//执行SQL语句即可</span>
        <span class="token class-name">ResultSet</span> resultSet <span class="token operator">=</span> preparedStatement<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//preparedStatement.executeUpdate()</span>

        <span class="token comment">//进行结果集对象解析</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>resultSet<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//只要向下移动，就是有数据 就是登录成功！</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;登录成功！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;登录失败！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//关闭资源</span>
        resultSet<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        preparedStatement<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+m+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="_3-6-基于preparedstatement演示curd" tabindex="-1"><a class="header-anchor" href="#_3-6-基于preparedstatement演示curd" aria-hidden="true">#</a> 3.6 基于preparedStatement演示curd</h3><ul><li>数据库数据插入</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 插入一条用户数据!
 * 账号: test
 * 密码: test
 * 昵称: 测试
 */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testInsert</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>

    <span class="token comment">//注册驱动</span>
    <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.mysql.cj.jdbc.Driver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//获取连接</span>
    <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:mysql:///atguigu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//TODO: 切记, ? 只能代替 值!!!!!  不能代替关键字 特殊符号 容器名</span>
    <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;insert into t_user(account,password,nickname) values (?,?,?);&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">PreparedStatement</span> preparedStatement <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//占位符赋值</span>
    preparedStatement<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    preparedStatement<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    preparedStatement<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&quot;测试&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//发送SQL语句</span>
    <span class="token keyword">int</span> rows <span class="token operator">=</span> preparedStatement<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//输出结果</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>rows<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//关闭资源close</span>
    preparedStatement<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>数据库数据修改</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 修改一条用户数据!
 * 修改账号: test的用户,将nickname改为tomcat
 */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>

    <span class="token comment">//注册驱动</span>
    <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.mysql.cj.jdbc.Driver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//获取连接</span>
    <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:mysql:///atguigu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//TODO: 切记, ? 只能代替 值!!!!!  不能代替关键字 特殊符号 容器名</span>
    <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;update t_user set nickname = ? where account = ? ;&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">PreparedStatement</span> preparedStatement <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//占位符赋值</span>
    preparedStatement<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;tomcat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    preparedStatement<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//发送SQL语句</span>
    <span class="token keyword">int</span> rows <span class="token operator">=</span> preparedStatement<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//输出结果</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>rows<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>&quot;修改成功”<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>&quot;修改失败”<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token comment">//关闭资源close</span>
    preparedStatement<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>数据库数据删除</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 删除一条用户数据!
 * 根据账号: test
 */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testDelete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>

    <span class="token comment">//注册驱动</span>
    <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.mysql.cj.jdbc.Driver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//获取连接</span>
    <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:mysql:///atguigu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//TODO: 切记, ? 只能代替 值!!!!!  不能代替关键字 特殊符号 容器名</span>
    <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;delete from t_user where account = ? ;&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">PreparedStatement</span> preparedStatement <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//占位符赋值</span>
    preparedStatement<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//发送SQL语句</span>
    <span class="token keyword">int</span> rows <span class="token operator">=</span> preparedStatement<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//输出结果</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>rows<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//关闭资源close</span>
    preparedStatement<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>数据库数据查询</strong></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 查询全部数据!
 *   将数据存到List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Map</span><span class="token punctuation">&gt;</span></span>中
 *   map -&gt; 对应一行数据
 *      map key -&gt; 数据库列名或者别名
 *      map value -&gt; 数据库列的值
 * TODO: 思路分析
 *    1.先创建一个List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Map</span><span class="token punctuation">&gt;</span></span>集合
 *    2.遍历resultSet对象的行数据
 *    3.将每一行数据存储到一个map对象中!
 *    4.将对象存到List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Map</span><span class="token punctuation">&gt;</span></span>中
 *    5.最终返回
 *注：如何获取列名？！！！！！！！！！
 * TODO:
 *    初体验,结果存储!
 *    学习获取结果表头信息(列名和数量等信息)
 */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testQueryMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>

    <span class="token comment">//注册驱动</span>
    <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.mysql.cj.jdbc.Driver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//获取连接</span>
    <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:mysql:///atguigu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//TODO: 切记, ? 只能代替 值!!!!!  不能代替关键字 特殊符号 容器名</span>
    <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;select id,account,password,nickname from t_user ;&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">PreparedStatement</span> preparedStatement <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//占位符赋值 本次没有占位符,省略</span>

    <span class="token comment">//发送查询语句</span>
    <span class="token class-name">ResultSet</span> resultSet <span class="token operator">=</span> preparedStatement<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//创建一个集合</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&gt;</span></span> mapList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//获取列信息对象</span>
    <span class="token comment">//metaData装的是当前列的信息对象（通过他可以获取列对应的下角标，或者是列的数量）</span>
    <span class="token class-name">ResultSetMetaData</span> metaData <span class="token operator">=</span> resultSet<span class="token punctuation">.</span><span class="token function">getMetaData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//获取列的数量</span>
    <span class="token keyword">int</span> columnCount <span class="token operator">=</span> metaData<span class="token punctuation">.</span><span class="token function">getColumnCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>resultSet<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//一行数据对应一个map</span>
        <span class="token class-name">Map</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> columnCount<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//笨蛋写法：</span>
        <span class="token comment">//map.put(&quot;id&quot;,resultSet.getInt(&quot;id&quot;));好几行，写法固定</span>
        <span class="token comment">//value:获取指定下角标的值 key；用metaData</span>
        <span class="token comment">//getColumnLabel先获取列的别名，没有别名用列名，而getColumnName只是列名</span>
            map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>metaData<span class="token punctuation">.</span><span class="token function">getColumnLabel</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span> resultSet<span class="token punctuation">.</span><span class="token function">getObject</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        mapList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>mapList<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//关闭资源close</span>
    preparedStatement<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    resultSet<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-7-preparedstatement使用方式总结" tabindex="-1"><a class="header-anchor" href="#_3-7-preparedstatement使用方式总结" aria-hidden="true">#</a> 3.7 preparedStatement使用方式总结</h3><ul><li>使用步骤总结</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>//1.注册驱动

//2.获取连接

//3.编写SQL语句

//4.创建preparedstatement并且传入SQL语句结构

//5.占位符赋值

//6.发送SQL语句,并且获取结果 

//7.结果集解析

//8.关闭资源
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用API总结</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//1.注册驱动</span>
方案<span class="token number">1</span><span class="token operator">:</span> 调用静态方法<span class="token punctuation">,</span>但是会注册两次
<span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">registerDriver</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>mysql<span class="token punctuation">.</span>cj<span class="token punctuation">.</span>jdbc<span class="token punctuation">.</span></span>Driver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
方案<span class="token number">2</span><span class="token operator">:</span> 反射触发
<span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.mysql.cj.jdbc.Driver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//2.获取连接</span>

<span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token number">3</span> <span class="token punctuation">(</span><span class="token class-name">String</span> url<span class="token punctuation">,</span><span class="token class-name">String</span> user<span class="token punctuation">,</span><span class="token class-name">String</span> password<span class="token punctuation">)</span>
<span class="token number">2</span> <span class="token punctuation">(</span><span class="token class-name">String</span> url<span class="token punctuation">,</span><span class="token class-name">Properties</span> <span class="token function">info</span><span class="token punctuation">(</span>user password<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token number">1</span> <span class="token punctuation">(</span><span class="token class-name">String</span> url<span class="token operator">?</span>user<span class="token operator">=</span>账号<span class="token operator">&amp;</span>password<span class="token operator">=</span>密码 <span class="token punctuation">)</span>

<span class="token comment">//3.创建statement</span>

<span class="token comment">//静态</span>
<span class="token class-name">Statement</span> statement <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//预编译</span>
<span class="token class-name">PreparedStatement</span> preparedstatement <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">preparedStatement</span><span class="token punctuation">(</span>sql语句结构<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//4.占位符赋值</span>

preparedstatement<span class="token punctuation">.</span><span class="token function">setObject</span><span class="token punctuation">(</span><span class="token operator">?</span>的位置 从左到右 从<span class="token number">1</span>开始<span class="token punctuation">,</span>值<span class="token punctuation">)</span>

<span class="token comment">//5.发送sql语句获取结果</span>

<span class="token keyword">int</span> rows <span class="token operator">=</span> <span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//非DQL</span>
<span class="token class-name">Resultset</span> <span class="token operator">=</span> <span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//DQL</span>

<span class="token comment">//6.查询结果集解析</span>

<span class="token comment">//移动光标指向行数据 next();  if(next())  while(next())</span>
<span class="token comment">//获取列的数据即可   get类型(int 列的下角标 从1开始 | int 列的label (别名或者列名))</span>
<span class="token comment">//获取列的信息   getMetadata(); ResultsetMetaData对象 包含的就是列的信息</span>
                <span class="token function">getColumnCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">|</span> <span class="token function">getCloumnLebal</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
<span class="token comment">//7.关闭资源</span>
<span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、全新jdbc扩展提升" tabindex="-1"><a class="header-anchor" href="#四、全新jdbc扩展提升" aria-hidden="true">#</a> 四、全新JDBC扩展提升</h2><h3 id="_4-1-自增长主键回显实现" tabindex="-1"><a class="header-anchor" href="#_4-1-自增长主键回显实现" aria-hidden="true">#</a> 4.1 自增长主键回显实现</h3><ul><li><p>功能需求</p><ol><li><strong>java程序</strong>获取<strong>插入</strong>数据时mysql维护<strong>自增长</strong>维护的主键<strong>id值</strong>,这就是主键回显</li><li>作用: 在多表关联插入数据时,一般主表的主键都是自动生成的,所以在插入数据之前无法知道这条数据的主键,但是从表需要在插入数据之前就绑定主表的主键,这是可以使用主键回显技术</li></ol></li><li><p>功能实现</p><blockquote><p>继续沿用之前的表数据</p></blockquote></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 返回插入的主键！
 * 主键：数据库帮助维护的自增长的整数主键！
 * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
 */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span>  <span class="token function">returnPrimaryKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>

    <span class="token comment">//1.注册驱动</span>
    <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.mysql.cj.jdbc.Driver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//2.获取连接</span>
    <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:mysql:///atguigu?user=root&amp;password=root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//3.编写SQL语句结构</span>
    <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;insert into t_user (account,password,nickname) values (?,?,?);&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">//4.创建预编译的statement，传入SQL语句结构</span>
    <span class="token doc-comment comment">/**
     * TODO: 第二个参数填入 1 | Statement.RETURN_GENERATED_KEYS
     *       告诉statement携带回数据库生成的主键！
     */</span>
    <span class="token class-name">PreparedStatement</span> statement <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token class-name">Statement</span><span class="token punctuation">.</span><span class="token constant">RETURN_GENERATED_KEYS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//5.占位符赋值</span>
    statement<span class="token punctuation">.</span><span class="token function">setObject</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&quot;towgog&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    statement<span class="token punctuation">.</span><span class="token function">setObject</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    statement<span class="token punctuation">.</span><span class="token function">setObject</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">&quot;二狗子&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//6.执行SQL语句 【注意：不需要传入SQL语句】 DML</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> statement<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//7.结果集解析</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;i = &quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//一行一列的数据！里面就装主键值！固定用getGeneratedKeys</span>
    <span class="token class-name">ResultSet</span> resultSet <span class="token operator">=</span> statement<span class="token punctuation">.</span><span class="token function">getGeneratedKeys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    resultSet<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> anInt <span class="token operator">=</span> resultSet<span class="token punctuation">.</span><span class="token function">getInt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//指向第一列</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;anInt = &quot;</span> <span class="token operator">+</span> anInt<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token comment">//8.释放资源</span>
    statement<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-批量数据插入性能提升" tabindex="-1"><a class="header-anchor" href="#_4-2-批量数据插入性能提升" aria-hidden="true">#</a> 4.2 批量数据插入性能提升</h3><ul><li>功能需求 <ol><li>批量数据插入优化</li><li>提升大量数据插入效率</li></ol></li><li>功能实现</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 *改动了三处：（1）路径（2）必写values，且后面不加;（3）装货addBatch()最后executeBatch();
 * 批量细节：
 *    1.url?rewriteBatchedStatements=true
 *    2.insert 语句必须使用 values
 *    3.语句后面不能添加分号;
 *    4.语句不能直接执行，每次需要装货  addBatch() 最后 executeBatch();
 *
 * 批量插入优化！
 * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
 */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span>  <span class="token function">batchInsertYH</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>

    <span class="token comment">//1.注册驱动</span>
    <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.mysql.cj.jdbc.Driver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//2.获取连接</span>
    <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:mysql:///atguigu?rewriteBatchedStatements=true&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//3.编写SQL语句结构</span>
    <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;insert into t_user (account,password,nickname) values (?,?,?)&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">//4.创建预编译的statement，传入SQL语句结构</span>
    <span class="token doc-comment comment">/**
     * TODO: 第二个参数填入 1 | Statement.RETURN_GENERATED_KEYS
     *       告诉statement携带回数据库生成的主键！
     */</span>
    <span class="token keyword">long</span> start <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">PreparedStatement</span> statement <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">//5.占位符赋值</span>
        statement<span class="token punctuation">.</span><span class="token function">setObject</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&quot;ergouzi&quot;</span><span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        statement<span class="token punctuation">.</span><span class="token function">setObject</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&quot;lvdandan&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        statement<span class="token punctuation">.</span><span class="token function">setObject</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string">&quot;驴蛋蛋&quot;</span><span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//6.装车</span>
        statement<span class="token punctuation">.</span><span class="token function">addBatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//发车！ 批量操作！</span>
    statement<span class="token punctuation">.</span><span class="token function">executeBatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">long</span> end <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;消耗时间：&quot;</span><span class="token operator">+</span><span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token comment">//7.结果集解析</span>

    <span class="token comment">//8.释放资源</span>
    connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-jdbc中数据库事务实现" tabindex="-1"><a class="header-anchor" href="#_4-3-jdbc中数据库事务实现" aria-hidden="true">#</a> 4.3 jdbc中数据库事务实现</h3><ul><li><p>章节目标</p><p>使用jdbc代码,添加数据库事务动作!</p><p>开启事务</p><p>事务提交 / 事务回滚</p></li><li><p>事务概念回顾</p></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 事务概念</span>
   数据库事务就是一种<span class="token constant">SQL</span>语句执行的缓存机制<span class="token punctuation">,</span>不会单条执行完毕就更新数据库数据<span class="token punctuation">,</span>最终根据缓
   存内的多条语句执行结果统一判定<span class="token operator">!</span>
   一个事务内所有语句都成功及事务成功<span class="token punctuation">,</span>我们可以触发commit提交事务来结束事务<span class="token punctuation">,</span>更新数据<span class="token operator">!</span>
   一个事务内任意一条语句失败<span class="token punctuation">,</span>及事务失败<span class="token punctuation">,</span>我们可以触发rollback回滚结束事务<span class="token punctuation">,</span>
   数据回到事务之前状态<span class="token operator">!</span>
   
   举个例子<span class="token operator">:</span> 
           临近高考<span class="token punctuation">,</span>你好吃懒做<span class="token punctuation">,</span>偶尔还瞎花钱<span class="token punctuation">,</span>父母也只会说<span class="token char">&#39;你等着!&#39;</span><span class="token punctuation">,</span>待到高考完毕<span class="token operator">!</span>
           成绩<span class="token number">600</span><span class="token operator">+</span><span class="token punctuation">,</span>翻篇<span class="token punctuation">,</span>庆祝<span class="token operator">!</span>
           成绩<span class="token number">200</span><span class="token operator">+</span><span class="token punctuation">,</span>翻旧账<span class="token punctuation">,</span>男女混合双打<span class="token operator">!</span>
           
<span class="token comment">//优势</span>
   允许我们在失败情况下<span class="token punctuation">,</span>数据回归到业务之前的状态<span class="token operator">!</span> 
   
<span class="token comment">//场景</span>
   <span class="token operator">*</span><span class="token operator">*</span>一个业务<span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>涉及<span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>多条修改<span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span>数据库语句<span class="token operator">!</span><span class="token operator">*</span><span class="token operator">*</span>
   例如<span class="token operator">:</span> 经典的转账案例<span class="token punctuation">,</span>转账业务<span class="token punctuation">(</span>加钱和减钱<span class="token punctuation">)</span>   
         批量删除<span class="token punctuation">(</span>涉及多个删除<span class="token punctuation">)</span>
         批量添加<span class="token punctuation">(</span>涉及多个插入<span class="token punctuation">)</span>     
         
<span class="token comment">// 事务特性</span>
  <span class="token number">1.</span> 原子性（<span class="token class-name">Atomicity</span>）原子性是指事务是一个不可分割的工作单位，事务中的操作要么都发生，要么都不发生。 

  <span class="token number">2.</span> 一致性（<span class="token class-name">Consistency</span>）事务必须使数据库从一个一致性状态变换到另外一个一致性状态。

  <span class="token number">3.</span> 隔离性（<span class="token class-name">Isolation</span>）事务的隔离性是指一个事务的执行不能被其他事务干扰，即一个事务内部的操作及使用的数据对并发的其他事务是隔离的，并发执行的各个事务之间不能互相干扰。

  <span class="token number">4.</span> 持久性（<span class="token class-name">Durability</span>）持久性是指一个事务一旦被提交，它对数据库中数据的改变就是永久性的，接下来的其他操作和数据库故障不应该对其有任何影响

<span class="token comment">// 事务类型</span>
  
  自动提交 <span class="token operator">:</span> 每条语句自动存储一个事务中<span class="token punctuation">,</span>执行成功自动提交<span class="token punctuation">,</span>执行失败自动回滚<span class="token operator">!</span> <span class="token punctuation">(</span><span class="token class-name">MySQL</span><span class="token punctuation">)</span>
  手动提交<span class="token operator">:</span>  手动开启事务<span class="token punctuation">,</span>添加语句<span class="token punctuation">,</span>手动提交或者手动回滚即可<span class="token operator">!</span>
  
<span class="token comment">// sql开启事务方式【事务都在一个连接中】</span>
   针对自动提交<span class="token operator">:</span> 关闭自动提交即可<span class="token punctuation">,</span>多条语句添加以后<span class="token punctuation">,</span>最终手动提交或者回滚<span class="token operator">!</span> <span class="token punctuation">(</span>推荐<span class="token punctuation">)</span>
     
      <span class="token class-name">SET</span> autocommit <span class="token operator">=</span> off<span class="token punctuation">;</span> <span class="token comment">//关闭当前连接自动事务提交方式</span>
      # 只有当前连接有效
      # 编写<span class="token constant">SQL</span>语句即可
      <span class="token constant">SQL</span>
      <span class="token constant">SQL</span>
      <span class="token constant">SQL</span>
      #手动提交或者回滚 【结束当前的事务】
      <span class="token constant">COMMIT</span> <span class="token operator">/</span> <span class="token constant">ROLLBACK</span> <span class="token punctuation">;</span>  
     
   手动开启事务<span class="token operator">:</span> 开启事务代码<span class="token punctuation">,</span>添加<span class="token constant">SQL</span>语句<span class="token punctuation">,</span>事务提交或者事务回滚<span class="token operator">!</span> <span class="token punctuation">(</span>不推荐<span class="token punctuation">)</span>

<span class="token comment">// 呼应jdbc技术</span>
 
  <span class="token keyword">try</span><span class="token punctuation">{</span>
    connection<span class="token punctuation">.</span><span class="token function">setAutoCommit</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//关闭自动提交了</span>
    <span class="token comment">//connection.setAutoCommit(false)也就类型于SET autocommit = off</span>
    
    <span class="token comment">//注意,只要当前connection对象,进行数据库操作,都不会自动提交事务</span>
    <span class="token comment">//数据库动作!</span>
    <span class="token comment">//statement - 单一的数据库动作 c u r d </span>
    <span class="token comment">//connection - 操作事务 </span>
    
    connection<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">Execption</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
    connection<span class="token punctuation">.</span><span class="token function">rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>数据库表数据</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 继续在atguigu的库中创建银行表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> t_bank<span class="token punctuation">(</span>
   id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;账号主键&#39;</span><span class="token punctuation">,</span>
   account <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">UNIQUE</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;账号&#39;</span><span class="token punctuation">,</span>
   money  <span class="token keyword">INT</span> <span class="token keyword">UNSIGNED</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;金额,不能为负值&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
   
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> t_bank<span class="token punctuation">(</span>account<span class="token punctuation">,</span>money<span class="token punctuation">)</span> <span class="token keyword">VALUES</span>
  <span class="token punctuation">(</span><span class="token string">&#39;ergouzi&#39;</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">&#39;lvdandan&#39;</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>代码结构设计</p><figure><img src="`+v+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure></li><li><p>jdbc事务实现</p><ul><li>测试类</li></ul></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * @Author 赵伟风
 * Description: 测试类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BankTest</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testBank</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">BankService</span> bankService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BankService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        bankService<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span><span class="token string">&quot;ergouzi&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;lvdandan&quot;</span><span class="token punctuation">,</span>
                <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
<span class="token operator">-</span> <span class="token class-name">BankService</span>
<span class="token doc-comment comment">/**
 * @Author 赵伟风
 * Description: bank表业务类,添加转账业务
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BankService</span> <span class="token punctuation">{</span>

<span class="token comment">//一个事物最基本的是在同一个连接中connection，一个转账方法是一个事物，将connection传入dao</span>
<span class="token comment">//实现层即可，dao层不用关闭connection，由事物统一关闭</span>
    <span class="token doc-comment comment">/**
     * 转账业务方法
     * <span class="token keyword">@param</span> <span class="token parameter">addAccount</span>  加钱账号
     * <span class="token keyword">@param</span> <span class="token parameter">subAccount</span>  减钱账号
     * <span class="token keyword">@param</span> <span class="token parameter">money</span>  金额
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">transfer</span><span class="token punctuation">(</span><span class="token class-name">String</span> addAccount<span class="token punctuation">,</span><span class="token class-name">String</span> subAccount<span class="token punctuation">,</span> <span class="token keyword">int</span> money<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span><span class="token punctuation">,</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;addAccount = &quot;</span> <span class="token operator">+</span> addAccount <span class="token operator">+</span> <span class="token string">&quot;, subAccount = &quot;</span> <span class="token operator">+</span> subAccount <span class="token operator">+</span> <span class="token string">&quot;, money = &quot;</span> <span class="token operator">+</span> money<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//注册驱动</span>
        <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.mysql.cj.jdbc.Driver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//获取连接</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:mysql:///atguigu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> flag <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

        <span class="token comment">//利用try代码块,调用dao</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">//开启事务(关闭事务自动提交)</span>
            connection<span class="token punctuation">.</span><span class="token function">setAutoCommit</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">BankDao</span> bankDao <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BankDao</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//调用加钱 和 减钱</span>
            bankDao<span class="token punctuation">.</span><span class="token function">addMoney</span><span class="token punctuation">(</span>addAccount<span class="token punctuation">,</span>money<span class="token punctuation">,</span>connection<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            bankDao<span class="token punctuation">.</span><span class="token function">subMoney</span><span class="token punctuation">(</span>subAccount<span class="token punctuation">,</span>money<span class="token punctuation">,</span>connection<span class="token punctuation">)</span><span class="token punctuation">;</span>
            flag <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token comment">//不报错,提交事务</span>
            connection<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>

            <span class="token comment">//报错回滚事务</span>
            connection<span class="token punctuation">.</span><span class="token function">rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">throw</span> e<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">finally</span> <span class="token punctuation">{</span>
            connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>flag <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;转账成功!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;转账失败!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
<span class="token operator">-</span> <span class="token class-name">BankDao</span>：具体操作方法
<span class="token doc-comment comment">/**
 * @Author 赵伟风
 * Description: 数据库访问dao类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BankDao</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 加钱方法
     * <span class="token keyword">@param</span> <span class="token parameter">account</span>
     * <span class="token keyword">@param</span> <span class="token parameter">money</span>
     * <span class="token keyword">@param</span> <span class="token parameter">connection</span> 业务传递的connection和减钱是同一个! 才可以在一个事务中!
     * <span class="token keyword">@return</span> 影响行数
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">addMoney</span><span class="token punctuation">(</span><span class="token class-name">String</span> account<span class="token punctuation">,</span> <span class="token keyword">int</span> money<span class="token punctuation">,</span><span class="token class-name">Connection</span> connection<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span><span class="token punctuation">,</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>


        <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;update t_bank set money = money + ? where account = ? ;&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">PreparedStatement</span> preparedStatement <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//占位符赋值</span>
        preparedStatement<span class="token punctuation">.</span><span class="token function">setObject</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> money<span class="token punctuation">)</span><span class="token punctuation">;</span>
        preparedStatement<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> account<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//发送SQL语句</span>
        <span class="token keyword">int</span> rows <span class="token operator">=</span> preparedStatement<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//输出结果</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;加钱执行完毕!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//关闭资源close</span>
        preparedStatement<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> rows<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 减钱方法
     * <span class="token keyword">@param</span> <span class="token parameter">account</span>
     * <span class="token keyword">@param</span> <span class="token parameter">money</span>
     * <span class="token keyword">@param</span> <span class="token parameter">connection</span> 业务传递的connection和加钱是同一个! 才可以在一个事务中!
     * <span class="token keyword">@return</span> 影响行数
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">subMoney</span><span class="token punctuation">(</span><span class="token class-name">String</span> account<span class="token punctuation">,</span> <span class="token keyword">int</span> money<span class="token punctuation">,</span><span class="token class-name">Connection</span> connection<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span><span class="token punctuation">,</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>

        <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;update t_bank set money = money - ? where account = ? ;&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">PreparedStatement</span> preparedStatement <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//占位符赋值</span>
        preparedStatement<span class="token punctuation">.</span><span class="token function">setObject</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> money<span class="token punctuation">)</span><span class="token punctuation">;</span>
        preparedStatement<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> account<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//发送SQL语句</span>
        <span class="token keyword">int</span> rows <span class="token operator">=</span> preparedStatement<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//输出结果</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;减钱执行完毕!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//关闭资源close</span>
        preparedStatement<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> rows<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、国货之光druid连接池技术使用" tabindex="-1"><a class="header-anchor" href="#五、国货之光druid连接池技术使用" aria-hidden="true">#</a> 五、国货之光Druid连接池技术使用</h2><p>[从创建连接变成了获取连接 销毁链接变成了回收连接]</p><p>【javax.sql.DataSource接口 规范了连接池获取连接的方法 规范了连接池回收连接的方法</p><p>DataSource = 第三方连接池】</p><h3 id="_5-1-连接性能消耗问题分析" tabindex="-1"><a class="header-anchor" href="#_5-1-连接性能消耗问题分析" aria-hidden="true">#</a> 5.1 连接性能消耗问题分析</h3><figure><img src="`+b+'" alt="image-20240106145431382" tabindex="0" loading="lazy"><figcaption>image-20240106145431382</figcaption></figure><h3 id="_5-2-数据库连接池作用" tabindex="-1"><a class="header-anchor" href="#_5-2-数据库连接池作用" aria-hidden="true">#</a> 5.2 数据库连接池作用</h3><p><strong>总结缺点:</strong><br> （1）不使用数据库连接池，每次都通过DriverManager获取新连接，用完直接抛弃断开，连接的利用率太低，太浪费。</p><p>（2）对于数据库服务器来说，压力太大了。我们数据库服务器和Java程序对连接数也无法控制，很容易导致数据库服务器崩溃。</p><p><strong>我们就希望能管理连接。</strong></p><ul><li>我们可以建立一个连接池，这个池中可以容纳一定数量的连接对象，一开始，我们可以先替用户先创建好一些连接对象，等用户要拿连接对象时，就直接从池中拿，不用新建了，这样也可以节省时间。然后用户用完后，放回去，别人可以接着用。</li><li>可以提高连接的使用率。当池中的现有的连接都用完了，<strong>那么连接池可以向服务器申请新的连接放到池中。</strong></li><li>直到池中的连接达到“最大连接数”，就不能在申请新的连接了，如果没有拿到连接的用户只能等待。</li></ul><h3 id="_5-3-市面常见连接池产品和对比" tabindex="-1"><a class="header-anchor" href="#_5-3-市面常见连接池产品和对比" aria-hidden="true">#</a> 5.3 市面常见连接池产品和对比</h3><p>JDBC 的数据库连接池使用 javax.sql.<strong>DataSource</strong>接口进行规范，所有<strong>的第三方</strong>连接池<strong>都实现此接口</strong>，自行添加具体实现!也就是说，<strong>所有连接池获取连接的和回收连接方法都一样</strong>，不同的只有性能和扩展功能！</p><ul><li>DBCP 是Apache提供的数据库连接池，速度相对c3p0较快，但因自身存在BUG</li><li>C3P0 是一个开源组织提供的一个数据库连接池，速度相对较慢，稳定性还可以</li><li>Proxool 是sourceforge下的一个开源项目数据库连接池，有监控连接池状态的功能，稳定性较c3p0差一点</li><li>Druid 是阿里提供的数据库连接池，据说是集DBCP 、C3P0 、Proxool 优点于一身的数据库连接池,<strong>妥妥国货之光!!!!</strong></li></ul><figure><img src="'+g+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><figure><img src="'+y+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="_5-4-国货之光druid连接池使用" tabindex="-1"><a class="header-anchor" href="#_5-4-国货之光druid连接池使用" aria-hidden="true">#</a> 5.4 国货之光druid连接池使用</h3><blockquote><p>记得导入druid工具类jar</p></blockquote><ul><li>硬编码方式(了解,不推荐)</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 创建druid连接池对象，使用硬编码进行核心参数设置！
 *   必须参数： 账号
 *             密码
 *             url
 *             driverClass
 *   非必须参数：
 *           初始化个数
 *           最大数量等等  不推荐设置
 注意他要做的，注册驱动，获取连接，规定最大数量
 直接使用代码设置连接池连接参数方式
 */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">druidHard</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
   <span class="token comment">//1.连接池对象</span>
   <span class="token class-name">DruidDataSource</span> dataSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DruidDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token comment">//2.设置四个必须参数</span>
   dataSource<span class="token punctuation">.</span><span class="token function">setDriverClassName</span><span class="token punctuation">(</span><span class="token string">&quot;com.mysql.cj.jdbc.Driver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   dataSource<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   dataSource<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   dataSource<span class="token punctuation">.</span><span class="token function">setUrl</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:mysql:///day01&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token comment">//非必须</span>
   dataSource<span class="token punctuation">.</span><span class="token function">setInitialSize</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 初始化数量
   dataSource<span class="token punctuation">.</span><span class="token function">setMaxActive</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 最大数量
   
   <span class="token comment">//3.获取连接</span>
   <span class="token class-name">Connection</span> connection <span class="token operator">=</span> dataSource<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token comment">// JDBC的步骤 正常curd</span>
   <span class="token comment">//4.回收连接</span>
   connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>软编码方式</p><ul><li>外部配置：存放在<strong>src/druid.properties</strong></li></ul></li></ul><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># druid连接池需要的配置参数,key固定命名</span>
<span class="token key attr-name">driverClassName</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.cj.jdbc.Driver</span>
<span class="token key attr-name">username</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">password</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql:///atguigu</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>druid声明代码</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 不直接在java代码编写配置文件！
 * 利用工厂模式，传入配置文件对象，创建连接池！
 * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
 */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">druidSoft</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token class-name">Properties</span> properties <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">InputStream</span> ips <span class="token operator">=</span> <span class="token class-name">DruidDemo</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">&quot;druid.properties&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    properties<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>ips<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">DataSource</span> dataSource <span class="token operator">=</span> <span class="token class-name">DruidDataSourceFactory</span><span class="token punctuation">.</span><span class="token function">createDataSource</span><span class="token punctuation">(</span>properties<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>druid配置(了解)</li></ul>`,59),R=n("thead",null,[n("tr",null,[n("th",null,"配置"),n("th",null,"缺省"),n("th",null,"说明")])],-1),N=n("tr",null,[n("td",null,"name"),n("td"),n("td",null,"配置这个属性的意义在于，如果存在多个数据源，监控的时候可以通过名字来区分开来。 如果没有配置，将会生成一个名字，格式是：”DataSource-” + System.identityHashCode(this)")],-1),P=n("tr",null,[n("td",null,"jdbcUrl"),n("td"),n("td",null,"连接数据库的url，不同数据库不一样。例如：mysql : jdbc:mysql://10.20.153.104:3306/druid2 oracle : jdbc:oracle:thin:@10.20.149.85:1521:ocnauto")],-1),I=n("tr",null,[n("td",null,"username"),n("td"),n("td",null,"连接数据库的用户名")],-1),z=n("td",null,"password",-1),U=n("td",null,null,-1),F={href:"https://github.com/alibaba/druid/wiki/%E4%BD%BF%E7%94%A8ConfigFilter",target:"_blank",rel:"noopener noreferrer"},V=n("tr",null,[n("td",null,"driverClassName"),n("td"),n("td",null,"根据url自动识别 这一项可配可不配，如果不配置druid会根据url自动识别dbType，然后选择相应的driverClassName(建议配置下)")],-1),K=n("tr",null,[n("td",null,"initialSize"),n("td",null,"0"),n("td",null,"初始化时建立物理连接的个数。初始化发生在显示调用init方法，或者第一次getConnection时")],-1),H=n("tr",null,[n("td",null,"maxActive"),n("td",null,"8"),n("td",null,"最大连接池数量")],-1),Y=n("tr",null,[n("td",null,"maxIdle"),n("td",null,"8"),n("td",null,"已经不再使用，配置了也没效果")],-1),W=n("tr",null,[n("td",null,"minIdle"),n("td"),n("td",null,"最小连接池数量")],-1),G=n("tr",null,[n("td",null,"maxWait"),n("td"),n("td",null,"获取连接时最大等待时间，单位毫秒。配置了maxWait之后，缺省启用公平锁，并发效率会有所下降，如果需要可以通过配置useUnfairLock属性为true使用非公平锁。")],-1),X=n("tr",null,[n("td",null,"poolPreparedStatements"),n("td",null,"false"),n("td",null,"是否缓存preparedStatement，也就是PSCache。PSCache对支持游标的数据库性能提升巨大，比如说oracle。在mysql下建议关闭。")],-1),Z=n("tr",null,[n("td",null,"maxOpenPreparedStatements"),n("td",null,"-1"),n("td",null,"要启用PSCache，必须配置大于0，当大于0时，poolPreparedStatements自动触发修改为true。在Druid中，不会存在Oracle下PSCache占用内存过多的问题，可以把这个数值配置大一些，比如说100")],-1),$=n("tr",null,[n("td",null,"validationQuery"),n("td"),n("td",null,"用来检测连接是否有效的sql，要求是一个查询语句。如果validationQuery为null，testOnBorrow、testOnReturn、testWhileIdle都不会其作用。")],-1),nn=n("tr",null,[n("td",null,"testOnBorrow"),n("td",null,"true"),n("td",null,"申请连接时执行validationQuery检测连接是否有效，做了这个配置会降低性能。")],-1),sn=n("tr",null,[n("td",null,"testOnReturn"),n("td",null,"false"),n("td",null,"归还连接时执行validationQuery检测连接是否有效，做了这个配置会降低性能")],-1),an=n("tr",null,[n("td",null,"testWhileIdle"),n("td",null,"false"),n("td",null,"建议配置为true，不影响性能，并且保证安全性。申请连接的时候检测，如果空闲时间大于timeBetweenEvictionRunsMillis，执行validationQuery检测连接是否有效。")],-1),tn=n("tr",null,[n("td",null,"timeBetweenEvictionRunsMillis"),n("td"),n("td",null,"有两个含义： 1)Destroy线程会检测连接的间隔时间2)testWhileIdle的判断依据，详细看testWhileIdle属性的说明")],-1),en=n("tr",null,[n("td",null,"numTestsPerEvictionRun"),n("td"),n("td",null,"不再使用，一个DruidDataSource只支持一个EvictionRun")],-1),pn=n("tr",null,[n("td",null,"minEvictableIdleTimeMillis"),n("td"),n("td")],-1),cn=n("tr",null,[n("td",null,"connectionInitSqls"),n("td"),n("td",null,"物理连接初始化的时候执行的sql")],-1),on=n("tr",null,[n("td",null,"exceptionSorter"),n("td"),n("td",null,"根据dbType自动识别 当数据库抛出一些不可恢复的异常时，抛弃连接")],-1),ln=n("tr",null,[n("td",null,"filters"),n("td"),n("td",null,"属性类型是字符串，通过别名的方式配置扩展插件，常用的插件有： 监控统计用的filter:stat日志用的filter:log4j防御sql注入的filter:wall")],-1),un=n("tr",null,[n("td",null,"proxyFilters"),n("td"),n("td",null,"类型是List，如果同时配置了filters和proxyFilters，是组合关系，并非替换关系")],-1),rn=a(`<h2 id="六、全新jdbc使用优化以及工具类封装" tabindex="-1"><a class="header-anchor" href="#六、全新jdbc使用优化以及工具类封装" aria-hidden="true">#</a> 六、全新JDBC使用优化以及工具类封装</h2><p>过程：1.注册驱动 2.获取连接 3.编写SQL语句 4.创建statement 5.占位符赋值 6.发送SQL语句 7.结果解析 8.回收资源</p><p>下面v1.0和v2.0针对128进行封装</p><p>BaseDao针对34567进行封装，进行增删改查</p><h3 id="_6-1-jdbc工具类封装v1-0" tabindex="-1"><a class="header-anchor" href="#_6-1-jdbc工具类封装v1-0" aria-hidden="true">#</a> 6.1 jdbc工具类封装v1.0</h3><blockquote><p>我们封装一个工具类,内部包含<strong>连接池对象</strong>,同时对外提供连接的方法和回收连接的方法!</p></blockquote><p>外部配置文件，位置: src/druid.properties</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># druid连接池需要的配置参数,key固定命名</span>
<span class="token key attr-name">driverClassName</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.cj.jdbc.Driver</span>
<span class="token key attr-name">username</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">password</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql:///atguigu</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>工具类代码</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>druid<span class="token punctuation">.</span>pool<span class="token punctuation">.</span></span><span class="token class-name">DruidDataSourceFactory</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">DataSource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Connection</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">SQLException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Properties</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JDBCToolsVersion1</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">DataSource</span> ds<span class="token punctuation">;</span>
    <span class="token keyword">static</span><span class="token punctuation">{</span><span class="token comment">//静态代码块，JDBCToolsVersion1类初始化执行</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Properties</span> pro <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            pro<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token class-name">ClassLoader</span><span class="token punctuation">.</span><span class="token function">getSystemResourceAsStream</span><span class="token punctuation">(</span><span class="token string">&quot;druid.properties&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            ds <span class="token operator">=</span> <span class="token class-name">DruidDataSourceFactory</span><span class="token punctuation">.</span><span class="token function">createDataSource</span><span class="token punctuation">(</span>pro<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Connection</span> <span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> ds<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//这么写，不能保证同一个线程，两次getConnection()得到的是同一个Connection对象</span>
        <span class="token comment">//如果不能保证是同一个连接对象，就无法保证事务的管理</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">free</span><span class="token punctuation">(</span><span class="token class-name">Connection</span> conn<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
        conn<span class="token punctuation">.</span><span class="token function">setAutoCommit</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        conn<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//还给连接池</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-jdbc工具类封装v-2-0" tabindex="-1"><a class="header-anchor" href="#_6-2-jdbc工具类封装v-2-0" aria-hidden="true">#</a> 6.2 jdbc工具类封装v.2.0</h3><blockquote><p>优化工具类v1.0版本,考虑事务的情况下!如何一个线程的不同方法获取同一个连接!</p></blockquote><p>ThreadLocal的介绍：</p><p>线程本地变量：为同一个线程存储共享变量</p><p>JDK 1.2的版本中就提供java.lang.ThreadLocal，为解决多线程程序的并发问题提供了一种新的思路。</p><p>使用这个工具类可以很简洁地编写出优美的多线程程序。通常用来在在多线程中管理共享数据库连接、Session等</p><p>ThreadLocal用于保存某个线程共享变量，原因是在Java中，每一个线程对象中都有一个ThreadLocalMap&lt;ThreadLocal, Object&gt;，其key就是一个ThreadLocal，而Object即为该线程的共享变量。而这个map是通过ThreadLocal的set和get方法操作的。对于同一个static ThreadLocal，不同线程只能从中get，set，remove自己的变量，而不会影响其他线程的变量。</p><p>1、ThreadLocal对象.get: 获取ThreadLocal中当前线程共享变量的值。</p><p>2、ThreadLocal对象.set: 设置ThreadLocal中当前线程共享变量的值。</p><p>3、ThreadLocal对象.remove: 移除ThreadLocal中当前线程共享变量的值。</p><p>v2.0版本工具类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>druid<span class="token punctuation">.</span>pool<span class="token punctuation">.</span></span><span class="token class-name">DruidDataSourceFactory</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">DataSource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Connection</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">SQLException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Properties</span></span><span class="token punctuation">;</span>
<span class="token comment">//事物时，Service和dao属于同一线程，不用再传参数了</span>
<span class="token comment">/*
这个工具类的作用就是用来给所有的SQL操作提供“连接”，和释放连接。
这里使用ThreadLocal的目的是为了让同一个线程，在多个地方getConnection得到的是同一个连接。
这里使用DataSource的目的是为了（1）限制服务器的连接的上限（2）连接的重用性等
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JDBCTools</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">DataSource</span> ds<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Connection</span><span class="token punctuation">&gt;</span></span> tl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span><span class="token punctuation">{</span><span class="token comment">//静态代码块，JDBCToolsVersion1类初始化执行</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Properties</span> pro <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            pro<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token class-name">ClassLoader</span><span class="token punctuation">.</span><span class="token function">getSystemResourceAsStream</span><span class="token punctuation">(</span><span class="token string">&quot;druid.properties&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            ds <span class="token operator">=</span> <span class="token class-name">DruidDataSourceFactory</span><span class="token punctuation">.</span><span class="token function">createDataSource</span><span class="token punctuation">(</span>pro<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Connection</span> <span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
         <span class="token class-name">Connection</span> connection <span class="token operator">=</span> tl<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token keyword">if</span><span class="token punctuation">(</span>connection  <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//当前线程还没有拿过连接，就给它从数据库连接池拿一个</span>
             connection <span class="token operator">=</span> ds<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             tl<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>connection<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
         <span class="token keyword">return</span> connection<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">free</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> tl<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>connection <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            tl<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            connection<span class="token punctuation">.</span><span class="token function">setAutoCommit</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//避免还给数据库连接池的连接不是自动提交模式（建议）</span>
            connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意: 修改转账业务,使用此工具类</strong></p><h3 id="_6-3-高级应用层封装basedao" tabindex="-1"><a class="header-anchor" href="#_6-3-高级应用层封装basedao" aria-hidden="true">#</a> 6.3 高级应用层封装BaseDao</h3><blockquote><p>基本上每一个数据表都应该有一个对应的DAO接口及其实现类，发现对所有表的操作（增、删、改、查）代码重复度很高，所以可以<strong>抽取公共代码</strong>，给这些DAO的实现类可以抽取一个公共的父类，我们称为BaseDao</p></blockquote><p>针对DQL查询和非DQL进行，分成两类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">BaseDao</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
    通用的增、删、改的方法
    String sql：sql
    Object... args：给sql中的?设置的值列表，可以是0~n
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">int</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token class-name">String</span> sql<span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
<span class="token comment">//        创建PreparedStatement对象，对sql预编译</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">JDBCTools</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">PreparedStatement</span> ps <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//设置?的值</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>args <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> args<span class="token punctuation">.</span>length<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>args<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ps<span class="token punctuation">.</span><span class="token function">setObject</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> args<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//?的编号从1开始，不是从0开始，数组的下标是从0开始</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//执行sql</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> ps<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ps<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//这里检查下是否开启事务,开启不关闭连接,业务方法关闭!</span>
        <span class="token comment">//没有开启事务的话,直接回收关闭即可!</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>connection<span class="token punctuation">.</span><span class="token function">getAutoCommit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//回收</span>
            <span class="token class-name">JDBCTools</span><span class="token punctuation">.</span><span class="token function">free</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> len<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
    通用的查询多个Javabean对象的方法，例如：多个员工对象，多个部门对象等
    这里的clazz接收的是T类型的Class对象，
    如果查询员工信息，clazz代表Employee.class，
    如果查询部门信息，clazz代表Department.class，
    返回List&lt;T&gt; list
     */</span>
    <span class="token keyword">protected</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">,</span><span class="token class-name">String</span> sql<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">//        创建PreparedStatement对象，对sql预编译</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">JDBCTools</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">PreparedStatement</span> ps <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//设置?的值</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>args <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> args<span class="token punctuation">.</span>length<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>args<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ps<span class="token punctuation">.</span><span class="token function">setObject</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> args<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//?的编号从1开始，不是从0开始，数组的下标是从0开始</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ResultSet</span> res <span class="token operator">=</span> ps<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">/*
        获取结果集的元数据对象。
        元数据对象中有该结果集一共有几列、列名称是什么等信息
         */</span>
         <span class="token class-name">ResultSetMetaData</span> metaData <span class="token operator">=</span> res<span class="token punctuation">.</span><span class="token function">getMetaData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> columnCount <span class="token operator">=</span> metaData<span class="token punctuation">.</span><span class="token function">getColumnCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//获取结果集列数</span>

        <span class="token comment">//遍历结果集ResultSet，把查询结果中的一条一条记录，变成一个一个T 对象，放到list中。</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//循环一次代表有一行，代表有一个T对象</span>
            <span class="token class-name">T</span> t <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//要求这个类型必须有公共的无参构造</span>

            <span class="token comment">//把这条记录的每一个单元格的值取出来，设置到t对象对应的属性中。</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span>columnCount<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">//for循环一次，代表取某一行的1个单元格的值</span>
                <span class="token class-name">Object</span> value <span class="token operator">=</span> res<span class="token punctuation">.</span><span class="token function">getObject</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">//这个值应该是t对象的某个属性值</span>
                <span class="token comment">//获取该属性对应的Field对象</span>
<span class="token comment">//                String columnName = metaData.getColumnName(i);//获取第i列的字段名</span>
                <span class="token class-name">String</span> columnName <span class="token operator">=</span> metaData<span class="token punctuation">.</span><span class="token function">getColumnLabel</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//获取第i列的字段名或字段的别名</span>
                <span class="token class-name">Field</span> field <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span>columnName<span class="token punctuation">)</span><span class="token punctuation">;</span>
                field<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//这么做可以操作private的属性</span>

                field<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        res<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ps<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//这里检查下是否开启事务,开启不关闭连接,业务方法关闭!</span>
        <span class="token comment">//没有开启事务的话,直接回收关闭即可!</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>connection<span class="token punctuation">.</span><span class="token function">getAutoCommit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//回收</span>
            <span class="token class-name">JDBCTools</span><span class="token punctuation">.</span><span class="token function">free</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">queryBean</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">,</span><span class="token class-name">String</span> sql<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token function">query</span><span class="token punctuation">(</span>clazz<span class="token punctuation">,</span> sql<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>list <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七、基于cms项目jdbc实战练习" tabindex="-1"><a class="header-anchor" href="#七、基于cms项目jdbc实战练习" aria-hidden="true">#</a> 七、基于CMS项目JDBC实战练习</h2><h3 id="_7-1-cms项目介绍和导入" tabindex="-1"><a class="header-anchor" href="#_7-1-cms项目介绍和导入" aria-hidden="true">#</a> 7.1 cms项目介绍和导入.</h3><ul><li><p><strong>项目介绍</strong></p><blockquote><p>利用JavaSE技术,进行控制台输出的客户管理系统! 主要功能让包含<strong>客户展示</strong>,<strong>客户删除</strong>,<strong>客户添加</strong>,<strong>客户修改</strong>,<strong>退出系统</strong>!</p></blockquote><p>添加客户</p><figure><img src="`+f+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>修改客户</p><figure><img src="'+w+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>展示客户列表</p><figure><img src="'+h+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>删除客户</p><figure><img src="'+S+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>退出系统</p><figure><img src="'+q+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure></li><li><p><strong>项目导入</strong></p><ol><li><p>打开项目</p><figure><img src="'+j+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure></li><li><p>配置jdk</p><figure><img src="'+C+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><figure><img src="'+D+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure></li></ol></li></ul><h3 id="_7-2-基于cms项目添加数据库相关配置" tabindex="-1"><a class="header-anchor" href="#_7-2-基于cms项目添加数据库相关配置" aria-hidden="true">#</a> 7.2 基于cms项目添加数据库相关配置</h3><ul><li>准备数据库脚本</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 员工表</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> t_customer<span class="token punctuation">(</span>
  id <span class="token keyword">INT</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;客户主键&#39;</span><span class="token punctuation">,</span>
  NAME <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>  <span class="token keyword">COMMENT</span> <span class="token string">&#39;客户名称&#39;</span><span class="token punctuation">,</span>
  gender <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;客户性别&#39;</span><span class="token punctuation">,</span>
  age <span class="token keyword">INT</span>  <span class="token keyword">COMMENT</span> <span class="token string">&#39;客户年龄&#39;</span><span class="token punctuation">,</span>
  salary <span class="token keyword">DOUBLE</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;客户工资&#39;</span><span class="token punctuation">,</span>
  phone <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;客户电话&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>添加配置文件</p><blockquote><p>位置: src下, druid.properties</p></blockquote></li></ul><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># druid连接池需要的配置参数,key固定命名</span>
<span class="token key attr-name">driverClassName</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.cj.jdbc.Driver</span>
<span class="token key attr-name">username</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">password</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql:///atguigu</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>导入jdbcv2.0工具类</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>druid<span class="token punctuation">.</span>pool<span class="token punctuation">.</span></span><span class="token class-name">DruidDataSourceFactory</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">DataSource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Connection</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">SQLException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Properties</span></span><span class="token punctuation">;</span>

<span class="token comment">/*
这个工具类的作用就是用来给所有的SQL操作提供“连接”，和释放连接。
这里使用ThreadLocal的目的是为了让同一个线程，在多个地方getConnection得到的是同一个连接。
这里使用DataSource的目的是为了（1）限制服务器的连接的上限（2）连接的重用性等
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JDBCTools</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">DataSource</span> ds<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Connection</span><span class="token punctuation">&gt;</span></span> tl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span><span class="token punctuation">{</span><span class="token comment">//静态代码块，JDBCToolsVersion1类初始化执行</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Properties</span> pro <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            pro<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token class-name">ClassLoader</span><span class="token punctuation">.</span><span class="token function">getSystemResourceAsStream</span><span class="token punctuation">(</span><span class="token string">&quot;druid.properties&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            ds <span class="token operator">=</span> <span class="token class-name">DruidDataSourceFactory</span><span class="token punctuation">.</span><span class="token function">createDataSource</span><span class="token punctuation">(</span>pro<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Connection</span> <span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
         <span class="token class-name">Connection</span> connection <span class="token operator">=</span> tl<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token keyword">if</span><span class="token punctuation">(</span>connection  <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//当前线程还没有拿过连接，就给它从数据库连接池拿一个</span>
             connection <span class="token operator">=</span> ds<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             tl<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>connection<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
         <span class="token keyword">return</span> connection<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">free</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> tl<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>connection <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            tl<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            connection<span class="token punctuation">.</span><span class="token function">setAutoCommit</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//避免还给数据库连接池的连接不是自动提交模式（建议）</span>
            connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>导入baseDao工具类</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">BaseDao</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
    通用的增、删、改的方法
    String sql：sql
    Object... args：给sql中的?设置的值列表，可以是0~n
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">int</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token class-name">String</span> sql<span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
<span class="token comment">//        创建PreparedStatement对象，对sql预编译</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">JDBCTools</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">PreparedStatement</span> ps <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//设置?的值</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>args <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> args<span class="token punctuation">.</span>length<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>args<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ps<span class="token punctuation">.</span><span class="token function">setObject</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> args<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//?的编号从1开始，不是从0开始，数组的下标是从0开始</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//执行sql</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> ps<span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ps<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//这里检查下是否开启事务,开启不关闭连接,业务方法关闭!</span>
        <span class="token comment">//没有开启事务的话,直接回收关闭即可!</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>connection<span class="token punctuation">.</span><span class="token function">getAutoCommit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//回收</span>
            <span class="token class-name">JDBCTools</span><span class="token punctuation">.</span><span class="token function">free</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> len<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
    通用的查询多个Javabean对象的方法，例如：多个员工对象，多个部门对象等
    这里的clazz接收的是T类型的Class对象，
    如果查询员工信息，clazz代表Employee.class，
    如果查询部门信息，clazz代表Department.class，
     */</span>
    <span class="token keyword">protected</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">,</span><span class="token class-name">String</span> sql<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">//        创建PreparedStatement对象，对sql预编译</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">JDBCTools</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">PreparedStatement</span> ps <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//设置?的值</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>args <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> args<span class="token punctuation">.</span>length<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>args<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ps<span class="token punctuation">.</span><span class="token function">setObject</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> args<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//?的编号从1开始，不是从0开始，数组的下标是从0开始</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ResultSet</span> res <span class="token operator">=</span> ps<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">/*
        获取结果集的元数据对象。
        元数据对象中有该结果集一共有几列、列名称是什么等信息
         */</span>
         <span class="token class-name">ResultSetMetaData</span> metaData <span class="token operator">=</span> res<span class="token punctuation">.</span><span class="token function">getMetaData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> columnCount <span class="token operator">=</span> metaData<span class="token punctuation">.</span><span class="token function">getColumnCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//获取结果集列数</span>

        <span class="token comment">//遍历结果集ResultSet，把查询结果中的一条一条记录，变成一个一个T 对象，放到list中。</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//循环一次代表有一行，代表有一个T对象</span>
            <span class="token class-name">T</span> t <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//要求这个类型必须有公共的无参构造</span>

            <span class="token comment">//把这条记录的每一个单元格的值取出来，设置到t对象对应的属性中。</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span>columnCount<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">//for循环一次，代表取某一行的1个单元格的值</span>
                <span class="token class-name">Object</span> value <span class="token operator">=</span> res<span class="token punctuation">.</span><span class="token function">getObject</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">//这个值应该是t对象的某个属性值</span>
                <span class="token comment">//获取该属性对应的Field对象</span>
<span class="token comment">//                String columnName = metaData.getColumnName(i);//获取第i列的字段名</span>
                <span class="token class-name">String</span> columnName <span class="token operator">=</span> metaData<span class="token punctuation">.</span><span class="token function">getColumnLabel</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//获取第i列的字段名或字段的别名</span>
                <span class="token class-name">Field</span> field <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span>columnName<span class="token punctuation">)</span><span class="token punctuation">;</span>
                field<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//这么做可以操作private的属性</span>

                field<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        res<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ps<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//这里检查下是否开启事务,开启不关闭连接,业务方法关闭!</span>
        <span class="token comment">//没有开启事务的话,直接回收关闭即可!</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>connection<span class="token punctuation">.</span><span class="token function">getAutoCommit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//回收</span>
            <span class="token class-name">JDBCTools</span><span class="token punctuation">.</span><span class="token function">free</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">queryBean</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> clazz<span class="token punctuation">,</span><span class="token class-name">String</span> sql<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token function">query</span><span class="token punctuation">(</span>clazz<span class="token punctuation">,</span> sql<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>list <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3-基于cms项目实战" tabindex="-1"><a class="header-anchor" href="#_7-3-基于cms项目实战" aria-hidden="true">#</a> 7.3 基于cms项目实战</h3><ul><li>customerService</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>cms<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>cms<span class="token punctuation">.</span>dao<span class="token punctuation">.</span></span><span class="token class-name">CustomerDao</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>cms<span class="token punctuation">.</span>javabean<span class="token punctuation">.</span></span><span class="token class-name">Customer</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">SQLException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 这是一个具有管理功能的功能类. 内部数据不允许外部随意修改, 具有更好的封装性.
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CustomerService</span> <span class="token punctuation">{</span>


    <span class="token keyword">private</span> <span class="token class-name">CustomerDao</span> customerDao <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CustomerDao</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 用途：返回所有客户对象
     * 返回：集合
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Customer</span><span class="token punctuation">&gt;</span></span> <span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> customerDao<span class="token punctuation">.</span><span class="token function">queryList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>



    <span class="token doc-comment comment">/**
     * 用途：添加新客户
     * 参数：customer指定要添加的客户对象
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addCustomer</span><span class="token punctuation">(</span><span class="token class-name">Customer</span> customer<span class="token punctuation">)</span>  <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            customerDao<span class="token punctuation">.</span><span class="token function">insertCustomer</span><span class="token punctuation">(</span>customer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 用途：返回指定id的客户对象记录
     * 参数： id 就是要获取的客户的id号.
     * 返回：封装了客户信息的Customer对象
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Customer</span> <span class="token function">getCustomer</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> customerDao<span class="token punctuation">.</span><span class="token function">queryById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 修改指定id号的客户对象的信息
     * <span class="token keyword">@param</span> <span class="token parameter">id</span> 客户id
     * <span class="token keyword">@param</span> <span class="token parameter">cust</span> 对象
     * <span class="token keyword">@return</span> 修改成功返回true, false表明指定id的客户未找到
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">modifyCustomer</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">,</span> <span class="token class-name">Customer</span> cust<span class="token punctuation">)</span>  <span class="token punctuation">{</span>
        <span class="token keyword">int</span> rows <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            rows <span class="token operator">=</span> customerDao<span class="token punctuation">.</span><span class="token function">updateCustomer</span><span class="token punctuation">(</span>cust<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> rows <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 用途：删除指定id号的的客户对象记录
     * 参数： id 要删除的客户的id号
     * 返回：删除成功返回true；false表示没有找到
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">removeCustomer</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> rows <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            rows <span class="token operator">=</span> customerDao<span class="token punctuation">.</span><span class="token function">deleteCustomer</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> rows <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>customerDao</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>cms<span class="token punctuation">.</span>dao</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>cms<span class="token punctuation">.</span>javabean<span class="token punctuation">.</span></span><span class="token class-name">Customer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>cms<span class="token punctuation">.</span>utils<span class="token punctuation">.</span></span><span class="token class-name">BaseDao</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">SQLException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @Author 赵伟风
 * Description: 客户进行数据库操作的类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CustomerDao</span> <span class="token keyword">extends</span> <span class="token class-name">BaseDao</span> <span class="token punctuation">{</span>


    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Customer</span><span class="token punctuation">&gt;</span></span> <span class="token function">queryList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Customer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token class-name">Customer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string">&quot;select * from t_customer&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">insertCustomer</span><span class="token punctuation">(</span><span class="token class-name">Customer</span> customer<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
       <span class="token keyword">int</span> rows <span class="token operator">=</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token string">&quot;insert into t_customer(name,gender,age,salary,phone) values (?,?,?,?,?)&quot;</span><span class="token punctuation">,</span>
                customer<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> customer<span class="token punctuation">.</span><span class="token function">getGender</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>customer<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>customer<span class="token punctuation">.</span><span class="token function">getSalary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>customer<span class="token punctuation">.</span><span class="token function">getPhone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Customer</span> <span class="token function">queryById</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">Customer</span> customer <span class="token operator">=</span> <span class="token function">queryBean</span><span class="token punctuation">(</span><span class="token class-name">Customer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string">&quot;select * from t_customer where id = ?&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> customer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">deleteCustomer</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token string">&quot;delete from t_customer where id =?&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">updateCustomer</span><span class="token punctuation">(</span><span class="token class-name">Customer</span> cust<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token string">&quot;update t_customer set name = ? , gender = ? , age = ? ,&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;salary = ? , phone = ? where id = ? ;&quot;</span><span class="token punctuation">,</span> cust<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cust<span class="token punctuation">.</span><span class="token function">getGender</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                cust<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cust<span class="token punctuation">.</span><span class="token function">getSalary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cust<span class="token punctuation">.</span><span class="token function">getPhone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cust<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,44);function dn(kn,mn){const t=c("ExternalLinkIcon");return o(),l("div",null,[_,n("p",null,[n("a",L,[s("https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-whats-new.html"),e(t)])]),T,n("ul",null,[E,n("li",null,[A,n("p",null,[s("【Java类加载机制 - CSDN App】"),n("a",O,[s("http://t.csdnimg.cn/Hfe8X"),e(t)])]),B,M]),Q]),J,n("table",null,[R,n("tbody",null,[N,P,I,n("tr",null,[z,U,n("td",null,[s("连接数据库的密码。如果你不希望密码直接写在配置文件中，可以使用ConfigFilter。详细看这里："),n("a",F,[s("https://github.com/alibaba/druid/wiki/%E4%BD%BF%E7%94%A8ConfigFilter"),e(t)])])]),V,K,H,Y,W,G,X,Z,$,nn,sn,an,tn,en,pn,cn,on,ln,un])]),rn])}const gn=p(x,[["render",dn],["__file","05-JDBC.html.vue"]]);export{gn as default};
