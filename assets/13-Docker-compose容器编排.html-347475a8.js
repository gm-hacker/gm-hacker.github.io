import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a as n,b as s,d as t,e}from"./app-e40099bd.js";const i="/assets/image-20231212211135831-e2c3a87d.png",u={},r=e('<h1 id="docker-compose容器编排" tabindex="-1"><a class="header-anchor" href="#docker-compose容器编排" aria-hidden="true">#</a> Docker-compose容器编排</h1><h2 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述" aria-hidden="true">#</a> 1 概述</h2><p>Docker-Compose是Docker官方的开源项目， 负责实现对Docker容器集群的快速编排。</p><p>Compose 是 Docker 公司推出的一个工具软件，可以管理多个 Docker 容器组成一个应用。你需要定义一个 YAML 格式的配置文件docker-compose.yml，<strong>写好多个容器之间的调用关系</strong>。然后，只要一个命令，就能同时启动/关闭这些容器</p><h2 id="_2-作用" tabindex="-1"><a class="header-anchor" href="#_2-作用" aria-hidden="true">#</a> 2 作用</h2><p>docker建议我们每一个容器中只运行一个服务，因为docker容器本身占用资源极少，所以最好是将每个服务单独的分割开来但是这样我们又面临了一个问题？</p><p>如果我需要同时部署好多个服务，难道要每个服务单独写Dockerfile然后在构建镜像，构建容器，这样累都累死了,所以docker官方给我们提供了docker-compose多服务部署的工具。</p><p>例如要实现一个Web微服务项目，除了Web服务容器本身，往往还需要再加上后端的数据库mysql服务容器，redis服务器，注册中心eureka，甚至还包括负载均衡容器等等。</p><p>Compose允许用户通过一个单独的<strong>docker-compose.yml模板文件</strong>（YAML 格式）来定义<strong>一组相关联的应用容器为一个项目（project）</strong>。</p><p>可以很容易地用一个配置文件定义一个多容器的应用，然后使用一条指令安装这个应用的所有依赖，完成构建。Docker-Compose 解决了容器与容器之间如何管理编排的问题。</p><h2 id="_3-安装" tabindex="-1"><a class="header-anchor" href="#_3-安装" aria-hidden="true">#</a> 3 安装</h2>',11),k={href:"https://docs.docker.com/compose/compose-file/compose-file-v3/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"},m=e(`<p>安装与更新步骤：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> yum update
$ <span class="token function">sudo</span> yum <span class="token function">install</span> docker-compose-plugin

$ <span class="token function">docker</span> compose version

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker compose version</span>
Docker Compose version v2.21.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>卸载步骤：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> yum remove docker-compose-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-compose核心概念" tabindex="-1"><a class="header-anchor" href="#_4-compose核心概念" aria-hidden="true">#</a> 4 Compose核心概念</h2><p><strong>一文件：docker-compose.yml</strong></p><p><strong>两要素:</strong></p><ul><li>服务（service）:一个个应用容器实例，比如订单微服务、库存微服务、mysql容器、nginx容器或者redis容器</li><li>工程（project）：由一组关联的应用容器组成的一个<strong>完整业务单元</strong>，在 docker-compose.yml 文件中定义。</li></ul><p><strong>Compose使用的三个步骤</strong>：</p><ol><li>编写Dockerfile定义各个微服务应用并构建出对应的镜像文件</li><li>使用 docker-compose.yml 定义一个完整业务单元，安排好整体应用中的各个容器服务。</li><li>最后，执行docker-compose up命令 来启动并运行整个应用程序，完成一键部署上线</li></ol><h2 id="_5-compose常用命令" tabindex="-1"><a class="header-anchor" href="#_5-compose常用命令" aria-hidden="true">#</a> 5 Compose常用命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Compose常用命令：
<span class="token comment"># 查看帮助</span>
<span class="token function">docker</span> compose <span class="token parameter variable">-h</span>  
<span class="token comment"># 启动所有docker-compose服务</span>
<span class="token function">docker</span> compose up 
<span class="token comment"># 启动所有docker-compose服务并后台运行</span>
<span class="token function">docker</span> compose up <span class="token parameter variable">-d</span>   
<span class="token comment"># 停止并删除容器、网络、卷、镜像。</span>
<span class="token function">docker</span> compose down
<span class="token comment"># 进入容器实例内部  docker-compose exec docker-compose.yml文件中写的服务id /bin/bash</span>
<span class="token function">docker</span> compose <span class="token builtin class-name">exec</span>  yml里面的服务id                 
<span class="token comment"># 展示当前docker-compose编排过的运行的所有容器</span>
<span class="token function">docker</span> compose <span class="token function">ps</span>            
<span class="token comment"># 展示当前docker-compose编排过的容器进程 </span>
<span class="token function">docker</span> compose <span class="token function">top</span>
<span class="token comment"># 查看容器输出日志</span>
<span class="token function">docker</span> compose logs  yml里面的服务id
<span class="token comment"># 检查配置</span>
<span class="token function">docker</span> compose config
<span class="token comment"># 检查配置，有问题才有输出</span>
<span class="token function">docker</span> compose config <span class="token parameter variable">-q</span> 
<span class="token comment"># 重启服务</span>
<span class="token function">docker</span> compose restart   
<span class="token comment"># 启动服务</span>
<span class="token function">docker</span> compose start     
<span class="token comment"># 停止服务</span>
<span class="token function">docker</span> compose stop      
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-compose编排微服务" tabindex="-1"><a class="header-anchor" href="#_6-compose编排微服务" aria-hidden="true">#</a> 6 Compose编排微服务</h2><h3 id="_1-升级微服务工程docker-boot" tabindex="-1"><a class="header-anchor" href="#_1-升级微服务工程docker-boot" aria-hidden="true">#</a> 1.升级微服务工程docker_boot</h3><p>升级之后的样子：</p><figure><img src="`+i+`" alt="image-20231212211135831" tabindex="0" loading="lazy"><figcaption>image-20231212211135831</figcaption></figure><h4 id="建表建库" tabindex="-1"><a class="header-anchor" href="#建表建库" aria-hidden="true">#</a> 建表建库</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>t_user<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token keyword">unsigned</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>username<span class="token punctuation">\`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;用户名&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>password<span class="token punctuation">\`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;密码&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>sex<span class="token punctuation">\`</span></span> <span class="token keyword">tinyint</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;0&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;性别 0=女 1=男 &#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>deleted<span class="token punctuation">\`</span></span> <span class="token keyword">tinyint</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token keyword">unsigned</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;0&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;删除标志，默认0不删除，1删除&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>update_time<span class="token punctuation">\`</span></span> <span class="token keyword">timestamp</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CURRENT_TIMESTAMP</span> <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">CURRENT_TIMESTAMP</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;更新时间&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>create_time<span class="token punctuation">\`</span></span> <span class="token keyword">timestamp</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CURRENT_TIMESTAMP</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;创建时间&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token operator">=</span><span class="token number">1</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8 <span class="token keyword">COMMENT</span><span class="token operator">=</span><span class="token string">&#39;用户表&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="改pom" tabindex="-1"><a class="header-anchor" href="#改pom" aria-hidden="true">#</a> 改POM</h4><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-parent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.5.6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--&lt;version&gt;2.3.10.RELEASE&lt;/version&gt;--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>relativePath</span><span class="token punctuation">/&gt;</span></span> <span class="token comment">&lt;!-- lookup parent from repository --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.atguigu.docker<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>docker_boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.0.1-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project.build.sourceEncoding</span><span class="token punctuation">&gt;</span></span>UTF-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project.build.sourceEncoding</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.source</span><span class="token punctuation">&gt;</span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.source</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.target</span><span class="token punctuation">&gt;</span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.target</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>junit.version</span><span class="token punctuation">&gt;</span></span>4.12<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>junit.version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>log4j.version</span><span class="token punctuation">&gt;</span></span>1.2.17<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>log4j.version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lombok.version</span><span class="token punctuation">&gt;</span></span>1.16.18<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lombok.version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mysql.version</span><span class="token punctuation">&gt;</span></span>5.1.47<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mysql.version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>druid.version</span><span class="token punctuation">&gt;</span></span>1.1.16<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>druid.version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper.version</span><span class="token punctuation">&gt;</span></span>4.1.5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper.version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mybatis.spring.boot.version</span><span class="token punctuation">&gt;</span></span>1.3.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mybatis.spring.boot.version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--guava Google 开源的 Guava 中自带的布隆过滤器--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.google.guava<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>guava<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>23.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- redisson --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.redisson<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>redisson<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.13.4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--SpringBoot通用依赖模块--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-actuator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--swagger2--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.springfox<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springfox-swagger2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.9.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.springfox<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springfox-swagger-ui<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.9.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--SpringBoot与Redis整合依赖--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-data-redis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--springCache--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-cache<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--springCache连接池依赖包--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.commons<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>commons-pool2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- jedis --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>redis.clients<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jedis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.1.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--Mysql数据库驱动--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.1.47<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--SpringBoot集成druid连接池--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>druid-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.1.10<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>druid<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${druid.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--mybatis和springboot整合--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.mybatis.spring.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${mybatis.spring.boot.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- 添加springboot对amqp的支持 --&gt;</span>
<span class="token comment">&lt;!--        &lt;dependency&gt;--&gt;</span>
<span class="token comment">&lt;!--            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;--&gt;</span>
<span class="token comment">&lt;!--            &lt;artifactId&gt;spring-boot-starter-amqp&lt;/artifactId&gt;--&gt;</span>
<span class="token comment">&lt;!--        &lt;/dependency&gt;--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>commons-codec<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>commons-codec<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.10<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--通用基础配置junit/devtools/test/log4j/lombok/hutool--&gt;</span>
        <span class="token comment">&lt;!--hutool--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>cn.hutool<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>hutool-all<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.2.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>junit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>junit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${junit.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-devtools<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>runtime<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>log4j<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>log4j<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${log4j.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.projectlombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>lombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${lombok.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--persistence--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>javax.persistence<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>persistence-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--通用Mapper--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>tk.mybatis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mapper<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${mapper.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.maven.plugins<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>maven-resources-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.1.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="写yml" tabindex="-1"><a class="header-anchor" href="#写yml" aria-hidden="true">#</a> 写YML</h4><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">server.port</span><span class="token punctuation">=</span><span class="token value attr-value">6001</span>
<span class="token comment"># ========================alibaba.druid????=====================</span>
<span class="token key attr-name">spring.datasource.type</span><span class="token punctuation">=</span><span class="token value attr-value">com.alibaba.druid.pool.DruidDataSource</span>
<span class="token key attr-name">spring.datasource.driver-class-name</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.jdbc.Driver</span>
<span class="token key attr-name">spring.datasource.url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://192.168.11.132:3306/db2021?useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false</span>
<span class="token key attr-name">spring.datasource.username</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">spring.datasource.password</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">spring.datasource.druid.test-while-idle</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token comment"># ========================redis????=====================</span>
<span class="token key attr-name">spring.redis.database</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>
<span class="token key attr-name">spring.redis.host</span><span class="token punctuation">=</span><span class="token value attr-value">192.168.11.132</span>
<span class="token key attr-name">spring.redis.port</span><span class="token punctuation">=</span><span class="token value attr-value">6379</span>
<span class="token key attr-name">spring.redis.password</span><span class="token punctuation">=</span><span class="token value attr-value">123</span>
<span class="token key attr-name">spring.redis.lettuce.pool.max-active</span><span class="token punctuation">=</span><span class="token value attr-value">8</span>
<span class="token key attr-name">spring.redis.lettuce.pool.max-wait</span><span class="token punctuation">=</span><span class="token value attr-value">-1ms</span>
<span class="token key attr-name">spring.redis.lettuce.pool.max-idle</span><span class="token punctuation">=</span><span class="token value attr-value">8</span>
<span class="token key attr-name">spring.redis.lettuce.pool.min-idle</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>
<span class="token comment"># ========================mybatis????===================</span>
<span class="token key attr-name">mybatis.mapper-locations</span><span class="token punctuation">=</span><span class="token value attr-value">classpath:mapper/*.xml</span>
<span class="token key attr-name">mybatis.type-aliases-package</span><span class="token punctuation">=</span><span class="token value attr-value">com.atguigu.docker.entities</span>
<span class="token comment"># ========================swagger=====================</span>
<span class="token key attr-name">spring.swagger2.enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="主启动" tabindex="-1"><a class="header-anchor" href="#主启动" aria-hidden="true">#</a> 主启动</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>docker</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">tk<span class="token punctuation">.</span>mybatis<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">MapperScan</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@MapperScan</span><span class="token punctuation">(</span><span class="token string">&quot;com.atguigu.docker.mapper&quot;</span><span class="token punctuation">)</span> <span class="token comment">//import tk.mybatis.spring.annotation.MapperScan;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DockerBootApplication</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">DockerBootApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="业务类" tabindex="-1"><a class="header-anchor" href="#业务类" aria-hidden="true">#</a> 业务类</h4><p><strong>config配置类</strong></p><p>RedisConfig</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>docker<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Slf4j</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>connection<span class="token punctuation">.</span>lettuce<span class="token punctuation">.</span></span><span class="token class-name">LettuceConnectionFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">RedisTemplate</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>serializer<span class="token punctuation">.</span></span><span class="token class-name">GenericJackson2JsonRedisSerializer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>serializer<span class="token punctuation">.</span></span><span class="token class-name">StringRedisSerializer</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">Serializable</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedisConfig</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token parameter">lettuceConnectionFactory</span>
     * <span class="token keyword">@return</span> redis序列化的工具配置类，下面这个请一定开启配置
     * 127.0.0.1:6379&gt; keys *
     * 1) &quot;ord:102&quot;  序列化过
     * 2) &quot;\\xac\\xed\\x00\\x05t\\x00\\aord:102&quot;   野生，没有序列化过
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Serializable</span><span class="token punctuation">&gt;</span></span> <span class="token function">redisTemplate</span><span class="token punctuation">(</span><span class="token class-name">LettuceConnectionFactory</span> lettuceConnectionFactory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Serializable</span><span class="token punctuation">&gt;</span></span> redisTemplate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        redisTemplate<span class="token punctuation">.</span><span class="token function">setConnectionFactory</span><span class="token punctuation">(</span>lettuceConnectionFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//设置key序列化方式string</span>
        redisTemplate<span class="token punctuation">.</span><span class="token function">setKeySerializer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">StringRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//设置value的序列化方式json</span>
        redisTemplate<span class="token punctuation">.</span><span class="token function">setValueSerializer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">GenericJackson2JsonRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        redisTemplate<span class="token punctuation">.</span><span class="token function">setHashKeySerializer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">StringRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        redisTemplate<span class="token punctuation">.</span><span class="token function">setHashValueSerializer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">GenericJackson2JsonRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        redisTemplate<span class="token punctuation">.</span><span class="token function">afterPropertiesSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> redisTemplate<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SwaggerConfig</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>docker<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Value</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">springfox<span class="token punctuation">.</span>documentation<span class="token punctuation">.</span>builders<span class="token punctuation">.</span></span><span class="token class-name">ApiInfoBuilder</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">springfox<span class="token punctuation">.</span>documentation<span class="token punctuation">.</span>builders<span class="token punctuation">.</span></span><span class="token class-name">PathSelectors</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">springfox<span class="token punctuation">.</span>documentation<span class="token punctuation">.</span>builders<span class="token punctuation">.</span></span><span class="token class-name">RequestHandlerSelectors</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">springfox<span class="token punctuation">.</span>documentation<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">ApiInfo</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">springfox<span class="token punctuation">.</span>documentation<span class="token punctuation">.</span>spi<span class="token punctuation">.</span></span><span class="token class-name">DocumentationType</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">springfox<span class="token punctuation">.</span>documentation<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>web<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span></span><span class="token class-name">Docket</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">springfox<span class="token punctuation">.</span>documentation<span class="token punctuation">.</span>swagger2<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">EnableSwagger2</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">SimpleDateFormat</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableSwagger2</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SwaggerConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${spring.swagger2.enabled}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Boolean</span> enabled<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Docket</span> <span class="token function">createRestApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Docket</span><span class="token punctuation">(</span><span class="token class-name">DocumentationType</span><span class="token punctuation">.</span><span class="token constant">SWAGGER_2</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">enable</span><span class="token punctuation">(</span>enabled<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">apis</span><span class="token punctuation">(</span><span class="token class-name">RequestHandlerSelectors</span><span class="token punctuation">.</span><span class="token function">basePackage</span><span class="token punctuation">(</span><span class="token string">&quot;com.atguigu.docker&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//你自己的package</span>
                <span class="token punctuation">.</span><span class="token function">paths</span><span class="token punctuation">(</span><span class="token class-name">PathSelectors</span><span class="token punctuation">.</span><span class="token function">any</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">ApiInfo</span> <span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ApiInfoBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token string">&quot;尚硅谷Java大厂技术&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;\\t&quot;</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">description</span><span class="token punctuation">(</span><span class="token string">&quot;docker-compose&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">version</span><span class="token punctuation">(</span><span class="token string">&quot;1.0&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">termsOfServiceUrl</span><span class="token punctuation">(</span><span class="token string">&quot;https://www.atguigu.com/&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>新建entity</strong></p><p>User</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>docker<span class="token punctuation">.</span>entities</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>persistence<span class="token punctuation">.</span></span><span class="token class-name">Column</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>persistence<span class="token punctuation">.</span></span><span class="token class-name">GeneratedValue</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>persistence<span class="token punctuation">.</span></span><span class="token class-name">Id</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>persistence<span class="token punctuation">.</span></span><span class="token class-name">Table</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Table</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;t_user&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Id</span>
    <span class="token annotation punctuation">@GeneratedValue</span><span class="token punctuation">(</span>generator <span class="token operator">=</span> <span class="token string">&quot;JDBC&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 用户名
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> username<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 密码
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 性别 0=女 1=男
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Byte</span> sex<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 删除标志，默认0不删除，1删除
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Byte</span> deleted<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 更新时间
     */</span>
    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;update_time&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> updateTime<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 创建时间
     */</span>
    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;create_time&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> createTime<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@return</span> id
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setId</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取用户名
     *
     * <span class="token keyword">@return</span> username - 用户名
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> username<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 设置用户名
     *
     * <span class="token keyword">@param</span> <span class="token parameter">username</span> 用户名
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token class-name">String</span> username<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>username <span class="token operator">=</span> username<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取密码
     *
     * <span class="token keyword">@return</span> password - 密码
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> password<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 设置密码
     *
     * <span class="token keyword">@param</span> <span class="token parameter">password</span> 密码
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token class-name">String</span> password<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>password <span class="token operator">=</span> password<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取性别 0=女 1=男
     *
     * <span class="token keyword">@return</span> sex - 性别 0=女 1=男
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Byte</span> <span class="token function">getSex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> sex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 设置性别 0=女 1=男
     *
     * <span class="token keyword">@param</span> <span class="token parameter">sex</span> 性别 0=女 1=男
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setSex</span><span class="token punctuation">(</span><span class="token class-name">Byte</span> sex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取删除标志，默认0不删除，1删除
     *
     * <span class="token keyword">@return</span> deleted - 删除标志，默认0不删除，1删除
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Byte</span> <span class="token function">getDeleted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> deleted<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 设置删除标志，默认0不删除，1删除
     *
     * <span class="token keyword">@param</span> <span class="token parameter">deleted</span> 删除标志，默认0不删除，1删除
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setDeleted</span><span class="token punctuation">(</span><span class="token class-name">Byte</span> deleted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>deleted <span class="token operator">=</span> deleted<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取更新时间
     *
     * <span class="token keyword">@return</span> update_time - 更新时间
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Date</span> <span class="token function">getUpdateTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> updateTime<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 设置更新时间
     *
     * <span class="token keyword">@param</span> <span class="token parameter">updateTime</span> 更新时间
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUpdateTime</span><span class="token punctuation">(</span><span class="token class-name">Date</span> updateTime<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>updateTime <span class="token operator">=</span> updateTime<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取创建时间
     *
     * <span class="token keyword">@return</span> create_time - 创建时间
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Date</span> <span class="token function">getCreateTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> createTime<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 设置创建时间
     *
     * <span class="token keyword">@param</span> <span class="token parameter">createTime</span> 创建时间
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setCreateTime</span><span class="token punctuation">(</span><span class="token class-name">Date</span> createTime<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>createTime <span class="token operator">=</span> createTime<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>UserDto</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>docker<span class="token punctuation">.</span>entities</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>swagger<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">ApiModel</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>swagger<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">ApiModelProperty</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">AllArgsConstructor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">NoArgsConstructor</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">Serializable</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@ApiModel</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;用户信息&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserDTO</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;用户ID&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;用户名&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> username<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;密码&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;性别 0=女 1=男 &quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Byte</span> sex<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;删除标志，默认0不删除，1删除&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Byte</span> deleted<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;更新时间&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> updateTime<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@ApiModelProperty</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;创建时间&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> createTime<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@return</span> id
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setId</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取用户名
     *
     * <span class="token keyword">@return</span> username - 用户名
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> username<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 设置用户名
     *
     * <span class="token keyword">@param</span> <span class="token parameter">username</span> 用户名
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token class-name">String</span> username<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>username <span class="token operator">=</span> username<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取密码
     *
     * <span class="token keyword">@return</span> password - 密码
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> password<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 设置密码
     *
     * <span class="token keyword">@param</span> <span class="token parameter">password</span> 密码
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token class-name">String</span> password<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>password <span class="token operator">=</span> password<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取性别 0=女 1=男
     *
     * <span class="token keyword">@return</span> sex - 性别 0=女 1=男
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Byte</span> <span class="token function">getSex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> sex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 设置性别 0=女 1=男
     *
     * <span class="token keyword">@param</span> <span class="token parameter">sex</span> 性别 0=女 1=男
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setSex</span><span class="token punctuation">(</span><span class="token class-name">Byte</span> sex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取删除标志，默认0不删除，1删除
     *
     * <span class="token keyword">@return</span> deleted - 删除标志，默认0不删除，1删除
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Byte</span> <span class="token function">getDeleted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> deleted<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 设置删除标志，默认0不删除，1删除
     *
     * <span class="token keyword">@param</span> <span class="token parameter">deleted</span> 删除标志，默认0不删除，1删除
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setDeleted</span><span class="token punctuation">(</span><span class="token class-name">Byte</span> deleted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>deleted <span class="token operator">=</span> deleted<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取更新时间
     *
     * <span class="token keyword">@return</span> update_time - 更新时间
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Date</span> <span class="token function">getUpdateTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> updateTime<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 设置更新时间
     *
     * <span class="token keyword">@param</span> <span class="token parameter">updateTime</span> 更新时间
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUpdateTime</span><span class="token punctuation">(</span><span class="token class-name">Date</span> updateTime<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>updateTime <span class="token operator">=</span> updateTime<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取创建时间
     *
     * <span class="token keyword">@return</span> create_time - 创建时间
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Date</span> <span class="token function">getCreateTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> createTime<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 设置创建时间
     *
     * <span class="token keyword">@param</span> <span class="token parameter">createTime</span> 创建时间
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setCreateTime</span><span class="token punctuation">(</span><span class="token class-name">Date</span> createTime<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>createTime <span class="token operator">=</span> createTime<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;User{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;id=&quot;</span> <span class="token operator">+</span> id <span class="token operator">+</span>
                <span class="token string">&quot;, username=&#39;&quot;</span> <span class="token operator">+</span> username <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, password=&#39;&quot;</span> <span class="token operator">+</span> password <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, sex=&quot;</span> <span class="token operator">+</span> sex <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>新建mapper</strong></p><p>接口UserMapper</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>docker<span class="token punctuation">.</span>mapper</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>docker<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">tk<span class="token punctuation">.</span>mybatis<span class="token punctuation">.</span>mapper<span class="token punctuation">.</span>common<span class="token punctuation">.</span></span><span class="token class-name">Mapper</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token keyword">extends</span> <span class="token class-name">Mapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新增UserMapper.xml</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">&lt;</span><span class="token operator">?</span>xml version<span class="token operator">=</span><span class="token string">&quot;1.0&quot;</span> encoding<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">?</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> mapper <span class="token constant">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span> <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>mapper namespace<span class="token operator">=</span><span class="token string">&quot;com.atguigu.docker.mapper.UserMapper&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>resultMap id<span class="token operator">=</span><span class="token string">&quot;BaseResultMap&quot;</span> type<span class="token operator">=</span><span class="token string">&quot;com.atguigu.docker.entities.User&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>
          <span class="token constant">WARNING</span> <span class="token operator">-</span> <span class="token annotation punctuation">@mbg.generated</span>
        <span class="token operator">--</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>id column<span class="token operator">=</span><span class="token string">&quot;id&quot;</span> jdbcType<span class="token operator">=</span><span class="token string">&quot;INTEGER&quot;</span> property<span class="token operator">=</span><span class="token string">&quot;id&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>result column<span class="token operator">=</span><span class="token string">&quot;username&quot;</span> jdbcType<span class="token operator">=</span><span class="token string">&quot;VARCHAR&quot;</span> property<span class="token operator">=</span><span class="token string">&quot;username&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>result column<span class="token operator">=</span><span class="token string">&quot;password&quot;</span> jdbcType<span class="token operator">=</span><span class="token string">&quot;VARCHAR&quot;</span> property<span class="token operator">=</span><span class="token string">&quot;password&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>result column<span class="token operator">=</span><span class="token string">&quot;sex&quot;</span> jdbcType<span class="token operator">=</span><span class="token string">&quot;TINYINT&quot;</span> property<span class="token operator">=</span><span class="token string">&quot;sex&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>result column<span class="token operator">=</span><span class="token string">&quot;deleted&quot;</span> jdbcType<span class="token operator">=</span><span class="token string">&quot;TINYINT&quot;</span> property<span class="token operator">=</span><span class="token string">&quot;deleted&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>result column<span class="token operator">=</span><span class="token string">&quot;update_time&quot;</span> jdbcType<span class="token operator">=</span><span class="token string">&quot;TIMESTAMP&quot;</span> property<span class="token operator">=</span><span class="token string">&quot;updateTime&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>result column<span class="token operator">=</span><span class="token string">&quot;create_time&quot;</span> jdbcType<span class="token operator">=</span><span class="token string">&quot;TIMESTAMP&quot;</span> property<span class="token operator">=</span><span class="token string">&quot;createTime&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>resultMap<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>mapper<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>新建service</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>docker<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>docker<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>docker<span class="token punctuation">.</span>mapper<span class="token punctuation">.</span></span><span class="token class-name">UserMapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Slf4j</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">RedisTemplate</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Service</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Resource</span></span><span class="token punctuation">;</span>


<span class="token annotation punctuation">@Service</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">CACHE_KEY_USER</span> <span class="token operator">=</span> <span class="token string">&quot;user:&quot;</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">UserMapper</span> userMapper<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">RedisTemplate</span> redisTemplate<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * addUser
     *
     * <span class="token keyword">@param</span> <span class="token parameter">user</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addUser</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//1 先插入mysql并成功</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">insertSelective</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//2 需要再次查询一下mysql将数据捞回来并ok</span>
            user <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectByPrimaryKey</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//3 将捞出来的user存进redis，完成新增功能的数据一致性。</span>
            <span class="token class-name">String</span> key <span class="token operator">=</span> <span class="token constant">CACHE_KEY_USER</span> <span class="token operator">+</span> user<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * findUserById
     *
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">findUserById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> key <span class="token operator">=</span> <span class="token constant">CACHE_KEY_USER</span> <span class="token operator">+</span> id<span class="token punctuation">;</span>

        <span class="token comment">//1 先从redis里面查询，如果有直接返回结果，如果没有再去查询mysql</span>
        user <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">)</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>user <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//2 redis里面无，继续查询mysql</span>
            user <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectByPrimaryKey</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>user <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//3.1 redis+mysql 都无数据</span>
                <span class="token comment">//你具体细化，防止多次穿透，我们规定，记录下导致穿透的这个key回写redis</span>
                <span class="token keyword">return</span> user<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">//3.2 mysql有，需要将数据写回redis，保证下一次的缓存命中率</span>
                redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> user<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>新建controller</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>docker<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>core<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">IdUtil</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>docker<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>docker<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">UserService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>swagger<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">Api</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>swagger<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">ApiOperation</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Slf4j</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Resource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Random</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Api</span><span class="token punctuation">(</span>description <span class="token operator">=</span> <span class="token string">&quot;用户User接口&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@ApiOperation</span><span class="token punctuation">(</span><span class="token string">&quot;数据库新增3条记录&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/user/add&quot;</span><span class="token punctuation">,</span> method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span><span class="token constant">POST</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            user<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token string">&quot;zzyy&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            user<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token class-name">IdUtil</span><span class="token punctuation">.</span><span class="token function">simpleUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            user<span class="token punctuation">.</span><span class="token function">setSex</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            userService<span class="token punctuation">.</span><span class="token function">addUser</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@ApiOperation</span><span class="token punctuation">(</span><span class="token string">&quot;查询1条记录&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/user/find/{id}&quot;</span><span class="token punctuation">,</span> method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">findUserById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> userService<span class="token punctuation">.</span><span class="token function">findUserById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// @ApiOperation(&quot;删除1条记录&quot;)</span>
    <span class="token comment">// @RequestMapping(value = &quot;/user/delete/{id}&quot;, method = RequestMethod.POST)</span>
    <span class="token comment">// public void deleteUser(@PathVariable Integer id) {</span>
    <span class="token comment">//     userService.deleteUser(id);</span>
    <span class="token comment">// }</span>
    <span class="token comment">//</span>
    <span class="token comment">// @ApiOperation(&quot;修改1条记录&quot;)</span>
    <span class="token comment">// @RequestMapping(value = &quot;/user/update&quot;, method = RequestMethod.POST)</span>
    <span class="token comment">// public void updateUser(@RequestBody UserDTO userDTO) {</span>
    <span class="token comment">//     User user = new User();</span>
    <span class="token comment">//     BeanUtils.copyProperties(userDTO, user);</span>
    <span class="token comment">//     userService.updateUser(user);</span>
    <span class="token comment">// }</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mvn package命令将微服务形成新的jar包 并上传到Linux服务器/mydocker目录下</p><h4 id="编写dockerfile" tabindex="-1"><a class="header-anchor" href="#编写dockerfile" aria-hidden="true">#</a> 编写Dockerfile</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 基础镜像使用java</span>
FROM java:8
<span class="token comment"># 作者</span>
MAINTAINER gm
<span class="token comment"># VOLUME 指定临时文件目录为/tmp，在主机/var/lib/docker目录下创建了一个临时文件并链接到容器的/tmp</span>
VOLUME /tmp
<span class="token comment"># 将jar包添加到容器中并更名为gm_docker.jar</span>
ADD docker_boot-0.0.1-SNAPSHOT.jar gm_docker.jar
<span class="token comment"># 运行jar包</span>
RUN <span class="token function">bash</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;touch /gm_docker.jar&#39;</span>
ENTRYPOINT <span class="token punctuation">[</span><span class="token string">&quot;java&quot;</span>,<span class="token string">&quot;-jar&quot;</span>,<span class="token string">&quot;/gm_docker.jar&quot;</span><span class="token punctuation">]</span>
<span class="token comment">#暴露6001端口作为微服务</span>
EXPOSE <span class="token number">6001</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="构建镜像" tabindex="-1"><a class="header-anchor" href="#构建镜像" aria-hidden="true">#</a> 构建镜像</h4><p>docker build -t gm_docker:1.6 .</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 mydocker<span class="token punctuation">]</span><span class="token comment"># pwd</span>
/mydocker
<span class="token punctuation">[</span>root@192 mydocker<span class="token punctuation">]</span><span class="token comment"># ll</span>
总用量 <span class="token number">54836</span>
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">56146255</span> <span class="token number">12</span>月 <span class="token number">12</span> <span class="token number">21</span>:18 docker_boot-0.0.1-SNAPSHOT.jar
-rw-r--r--. <span class="token number">1</span> root root      <span class="token number">444</span> <span class="token number">12</span>月 <span class="token number">12</span> <span class="token number">21</span>:20 Dockerfile
<span class="token punctuation">[</span>root@192 mydocker<span class="token punctuation">]</span><span class="token comment"># cat Dockerfile</span>
<span class="token comment"># 基础镜像使用java</span>
FROM java:8
<span class="token comment"># 作者</span>
MAINTAINER gm
<span class="token comment"># VOLUME 指定临时文件目录为/tmp，在主机/var/lib/docker目录下创建了一个临时文件并链接到容器的/tmp</span>
VOLUME /tmp
<span class="token comment"># 将jar包添加到容器中并更名为gm_docker.jar</span>
ADD docker_boot-0.0.1-SNAPSHOT.jar gm_docker.jar
<span class="token comment"># 运行jar包</span>
RUN <span class="token function">bash</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;touch /gm_docker.jar&#39;</span>
ENTRYPOINT <span class="token punctuation">[</span><span class="token string">&quot;java&quot;</span>,<span class="token string">&quot;-jar&quot;</span>,<span class="token string">&quot;/gm_docker.jar&quot;</span><span class="token punctuation">]</span>
<span class="token comment">#暴露6001端口作为微服务</span>
EXPOSE <span class="token number">6001</span>
<span class="token punctuation">[</span>root@192 mydocker<span class="token punctuation">]</span><span class="token comment"># docker build -t gm_docker:1.6 .</span>
<span class="token punctuation">[</span>+<span class="token punctuation">]</span> Building <span class="token number">16</span>.9s <span class="token punctuation">(</span><span class="token number">8</span>/8<span class="token punctuation">)</span> FINISHED                                                             docker:default
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>internal<span class="token punctuation">]</span> load .dockerignore                                                                       <span class="token number">0</span>.0s
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> transferring context: 2B                                                                         <span class="token number">0</span>.0s
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>internal<span class="token punctuation">]</span> load build definition from Dockerfile                                                    <span class="token number">0</span>.0s
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> transferring dockerfile: 544B                                                                    <span class="token number">0</span>.0s
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>internal<span class="token punctuation">]</span> load metadata <span class="token keyword">for</span> docker.io/library/java:8                                              <span class="token number">15</span>.4s
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>internal<span class="token punctuation">]</span> load build context                                                                       <span class="token number">0</span>.4s
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> transferring context: <span class="token number">56</span>.16MB                                                                    <span class="token number">0</span>.4s
 <span class="token operator">=</span><span class="token operator">&gt;</span> CACHED <span class="token punctuation">[</span><span class="token number">1</span>/3<span class="token punctuation">]</span> FROM docker.io/library/java:8@sha256:c1ff613e8ba25833d2e1940da0940c3824f03f802c449f3d  <span class="token number">0</span>.0s
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">2</span>/3<span class="token punctuation">]</span> ADD docker_boot-0.0.1-SNAPSHOT.jar gm_docker.jar                                              <span class="token number">0</span>.3s
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">3</span>/3<span class="token punctuation">]</span> RUN <span class="token function">bash</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;touch /gm_docker.jar&#39;</span>                                                            <span class="token number">0</span>.6s
 <span class="token operator">=</span><span class="token operator">&gt;</span> exporting to image                                                                                  <span class="token number">0</span>.2s
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> exporting layers                                                                                 <span class="token number">0</span>.2s
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> writing image sha256:3a67d307fb080c947772e0f2f5d6da66bd7dabeb6841c681f39e31cc2378fe5e            <span class="token number">0</span>.0s
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> naming to docker.io/library/gm_docker:1.6                                                        <span class="token number">0</span>.0s
<span class="token punctuation">[</span>root@192 mydocker<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY   TAG       IMAGE ID       CREATED         SIZE
gm_docker    <span class="token number">1.6</span>       3a67d307fb08   <span class="token number">7</span> seconds ago   755MB
tomcat       latest    fb5657adc892   <span class="token number">23</span> months ago   680MB
mysql        <span class="token number">5.7</span>       c20987f18b13   <span class="token number">24</span> months ago   448MB
registry     latest    b8604a3fe854   <span class="token number">2</span> years ago     <span class="token number">26</span>.2MB
ubuntu       latest    ba6acccedd29   <span class="token number">2</span> years ago     <span class="token number">72</span>.8MB
centos       latest    5d0da3dc9764   <span class="token number">2</span> years ago     231MB
redis        <span class="token number">6.0</span>.8     16ecd2772934   <span class="token number">3</span> years ago     104MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-不用compose" tabindex="-1"><a class="header-anchor" href="#_2-不用compose" aria-hidden="true">#</a> 2.不用Compose</h3><h4 id="新建mysql容器实例" tabindex="-1"><a class="header-anchor" href="#新建mysql容器实例" aria-hidden="true">#</a> 新建mysql容器实例</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token parameter variable">--name</span> mysql57 <span class="token punctuation">\\</span>
<span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /zzyyuse/mysql/conf:/etc/mysql/conf.d <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /zzyyuse/mysql/logs:/logs <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /zzyyuse/mysql/data:/var/lib/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> mysql:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>进入mysql容器实例并新建库db2021+新建表t_user</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mysql57 /bin/bash

mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span>

create database db2021<span class="token punctuation">;</span>

use db2021<span class="token punctuation">;</span>

CREATE TABLE <span class="token variable"><span class="token variable">\`</span>t_user<span class="token variable">\`</span></span> <span class="token punctuation">(</span>
  <span class="token variable"><span class="token variable">\`</span><span class="token function">id</span><span class="token variable">\`</span></span> INT<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> UNSIGNED NOT NULL AUTO_INCREMENT,
  <span class="token variable"><span class="token variable">\`</span>username<span class="token variable">\`</span></span> VARCHAR<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> NOT NULL DEFAULT <span class="token string">&#39;&#39;</span> COMMENT <span class="token string">&#39;用户名&#39;</span>,
  <span class="token variable"><span class="token variable">\`</span>password<span class="token variable">\`</span></span> VARCHAR<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> NOT NULL DEFAULT <span class="token string">&#39;&#39;</span> COMMENT <span class="token string">&#39;密码&#39;</span>,
  <span class="token variable"><span class="token variable">\`</span>sex<span class="token variable">\`</span></span> TINYINT<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> NOT NULL DEFAULT <span class="token string">&#39;0&#39;</span> COMMENT <span class="token string">&#39;性别 0=女 1=男 &#39;</span>,
  <span class="token variable"><span class="token variable">\`</span>deleted<span class="token variable">\`</span></span> TINYINT<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> UNSIGNED NOT NULL DEFAULT <span class="token string">&#39;0&#39;</span> COMMENT <span class="token string">&#39;删除标志，默认0不删除，1删除&#39;</span>,
  <span class="token variable"><span class="token variable">\`</span>update_time<span class="token variable">\`</span></span> TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT <span class="token string">&#39;更新时间&#39;</span>,
  <span class="token variable"><span class="token variable">\`</span>create_time<span class="token variable">\`</span></span> TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT <span class="token string">&#39;创建时间&#39;</span>,
  PRIMARY KEY <span class="token punctuation">(</span><span class="token variable"><span class="token variable">\`</span><span class="token function">id</span><span class="token variable">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token assign-left variable">ENGINE</span><span class="token operator">=</span>INNODB <span class="token assign-left variable">AUTO_INCREMENT</span><span class="token operator">=</span><span class="token number">1</span> DEFAULT <span class="token assign-left variable">CHARSET</span><span class="token operator">=</span>utf8mb4 <span class="token assign-left variable">COMMENT</span><span class="token operator">=</span><span class="token string">&#39;用户表&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="新建redis容器实例" tabindex="-1"><a class="header-anchor" href="#新建redis容器实例" aria-hidden="true">#</a> 新建redis容器实例</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run  <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 <span class="token parameter variable">--name</span> redis608 <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-v</span> /app/redis/redis.conf:/etc/redis/redis.conf <span class="token parameter variable">-v</span> /app/redis/data:/data <span class="token parameter variable">-d</span> redis:6.0.8 redis-server /etc/redis/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="微服务工程" tabindex="-1"><a class="header-anchor" href="#微服务工程" aria-hidden="true">#</a> 微服务工程</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">6001</span>:6001 gm_docker:1.6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>上面三个容器实例依次顺序启动成功</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 mydocker<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE           COMMAND                   CREATED          STATUS          PORTS                                                  NAMES
8e62b6d83a0c   gm_docker:1.6   <span class="token string">&quot;java -jar /gm_docke…&quot;</span>   <span class="token number">18</span> seconds ago   Up <span class="token number">17</span> seconds   <span class="token number">0.0</span>.0.0:6001-<span class="token operator">&gt;</span><span class="token number">6001</span>/tcp, :::6001-<span class="token operator">&gt;</span><span class="token number">6001</span>/tcp              practical_napier
7acfb500b701   redis:6.0.8     <span class="token string">&quot;docker-entrypoint.s…&quot;</span>   <span class="token number">32</span> minutes ago   Up <span class="token number">32</span> minutes   <span class="token number">0.0</span>.0.0:6379-<span class="token operator">&gt;</span><span class="token number">6379</span>/tcp, :::6379-<span class="token operator">&gt;</span><span class="token number">6379</span>/tcp              myr3
6156e1121c8c   mysql:5.7       <span class="token string">&quot;docker-entrypoint.s…&quot;</span>   <span class="token number">35</span> minutes ago   Up <span class="token number">34</span> minutes   <span class="token number">0.0</span>.0.0:3306-<span class="token operator">&gt;</span><span class="token number">3306</span>/tcp, :::3306-<span class="token operator">&gt;</span><span class="token number">3306</span>/tcp, <span class="token number">33060</span>/tcp   mysql

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="swagger测试" tabindex="-1"><a class="header-anchor" href="#swagger测试" aria-hidden="true">#</a> swagger测试</h4>`,62),v={href:"http://192.168.11.132:6001/swagger-ui.html#/",target:"_blank",rel:"noopener noreferrer"},b=e(`<h4 id="成功了-有哪些问题" tabindex="-1"><a class="header-anchor" href="#成功了-有哪些问题" aria-hidden="true">#</a> 成功了，有哪些问题?</h4><ul><li><p>先后顺序要求固定，先mysql+redis才能微服务访问成功</p></li><li><p>多个run命令......</p></li><li><p>容器间的启停或宕机，有可能导致IP地址对应的容器实例变化，映射出错， 要么生产IP写死(可以但是不推荐)，要么通过服务调用</p></li></ul><h3 id="_3-使用compose" tabindex="-1"><a class="header-anchor" href="#_3-使用compose" aria-hidden="true">#</a> 3 使用Compose</h3><p>服务编排，一套带走，安排</p><h4 id="编写docker-compose-yml文件" tabindex="-1"><a class="header-anchor" href="#编写docker-compose-yml文件" aria-hidden="true">#</a> 编写docker-compose.yml文件</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>version: <span class="token string">&quot;3&quot;</span>

services:
  microService:
    image: gm_docker:1.7
    container_name: ms01
    ports:
      - <span class="token string">&quot;6001:6001&quot;</span>
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
      - <span class="token string">&quot;6379:6379&quot;</span>
    volumes:
      - /app/redis/redis.conf:/etc/redis/redis.conf
      - /app/redis/data:/data
    networks: 
      - atguigu_net
    command: redis-server /etc/redis/redis.conf
  mysql:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: <span class="token string">&#39;123456&#39;</span>
      MYSQL_ALLOW_EMPTY_PASSWORD: <span class="token string">&#39;no&#39;</span>
      MYSQL_DATABASE: <span class="token string">&#39;db2021&#39;</span>
      MYSQL_USER: <span class="token string">&#39;zzyy&#39;</span>
      MYSQL_PASSWORD: <span class="token string">&#39;zzyy123&#39;</span>
    ports:
       - <span class="token string">&quot;3306:3306&quot;</span>
    volumes:
       - /app/mysql/db:/var/lib/mysql
       - /app/mysql/conf/my.cnf:/etc/my.cnf
       - /app/mysql/init:/docker-entrypoint-initdb.d
    networks:
      - atguigu_net
    command: --default-authentication-plugin<span class="token operator">=</span>mysql_native_password <span class="token comment">#解决外部无法访问</span>
networks: 
   atguigu_net: 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改微服务工程docker-boot" tabindex="-1"><a class="header-anchor" href="#修改微服务工程docker-boot" aria-hidden="true">#</a> 修改微服务工程docker_boot</h4><p>修改配置文件，通过服务名访问，IP无关</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">server.port</span><span class="token punctuation">=</span><span class="token value attr-value">6001</span>

<span class="token comment"># ========================alibaba.druid相关配置=====================</span>
<span class="token key attr-name">spring.datasource.type</span><span class="token punctuation">=</span><span class="token value attr-value">com.alibaba.druid.pool.DruidDataSource</span>
<span class="token key attr-name">spring.datasource.driver-class-name</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.jdbc.Driver</span>
<span class="token comment">#spring.datasource.url=jdbc:mysql://192.168.111.169:3306/db2021?useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false</span>
<span class="token key attr-name">spring.datasource.url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://mysql:3306/db2021?useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=false</span>
<span class="token key attr-name">spring.datasource.username</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">spring.datasource.password</span><span class="token punctuation">=</span><span class="token value attr-value">123456</span>
<span class="token key attr-name">spring.datasource.druid.test-while-idle</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>

<span class="token comment"># ========================redis相关配置=====================</span>
<span class="token key attr-name">spring.redis.database</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>
<span class="token comment">#spring.redis.host=192.168.111.169</span>
<span class="token key attr-name">spring.redis.host</span><span class="token punctuation">=</span><span class="token value attr-value">redis</span>
<span class="token key attr-name">spring.redis.port</span><span class="token punctuation">=</span><span class="token value attr-value">6379</span>
<span class="token key attr-name">spring.redis.password</span><span class="token punctuation">=</span>
<span class="token key attr-name">spring.redis.lettuce.pool.max-active</span><span class="token punctuation">=</span><span class="token value attr-value">8</span>
<span class="token key attr-name">spring.redis.lettuce.pool.max-wait</span><span class="token punctuation">=</span><span class="token value attr-value">-1ms</span>
<span class="token key attr-name">spring.redis.lettuce.pool.max-idle</span><span class="token punctuation">=</span><span class="token value attr-value">8</span>
<span class="token key attr-name">spring.redis.lettuce.pool.min-idle</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>

<span class="token comment"># ========================mybatis相关配置===================</span>
<span class="token key attr-name">mybatis.mapper-locations</span><span class="token punctuation">=</span><span class="token value attr-value">classpath:mapper/*.xml</span>
<span class="token key attr-name">mybatis.type-aliases-package</span><span class="token punctuation">=</span><span class="token value attr-value">com.atguigu.docker.entities</span>

<span class="token comment"># ========================swagger=====================</span>
<span class="token key attr-name">spring.swagger2.enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mvn package命令将微服务形成新的jar包 并上传到Linux服务器/mydocker目录下</p><h4 id="编写dockerfile-1" tabindex="-1"><a class="header-anchor" href="#编写dockerfile-1" aria-hidden="true">#</a> 编写Dockerfile</h4><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment"># 基础镜像使用java</span>
<span class="token instruction"><span class="token keyword">FROM</span> java:8</span>
<span class="token comment"># 作者</span>
<span class="token instruction"><span class="token keyword">MAINTAINER</span> gm</span>
<span class="token comment"># VOLUME 指定临时文件目录为/tmp，在主机/var/lib/docker目录下创建了一个临时文件并链接到容器的/tmp</span>
<span class="token instruction"><span class="token keyword">VOLUME</span> /tmp</span>
<span class="token comment"># 将jar包添加到容器中并更名为gm_docker.jar</span>
<span class="token instruction"><span class="token keyword">ADD</span> docker_boot-0.0.1-SNAPSHOT.jar gm_docker.jar</span>
<span class="token comment"># 运行jar包</span>
<span class="token instruction"><span class="token keyword">RUN</span> bash -c <span class="token string">&#39;touch /gm_docker.jar&#39;</span></span>
<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [<span class="token string">&quot;java&quot;</span>,<span class="token string">&quot;-jar&quot;</span>,<span class="token string">&quot;/gm_docker.jar&quot;</span>]</span>
<span class="token comment">#暴露6001端口作为微服务</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 6001</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="构建镜像-1" tabindex="-1"><a class="header-anchor" href="#构建镜像-1" aria-hidden="true">#</a> 构建镜像</h4><p>docker build -t gm_docker:1.7 .</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 mydocker<span class="token punctuation">]</span><span class="token comment"># docker build -t gm_docker:1.7 .</span>
<span class="token punctuation">[</span>+<span class="token punctuation">]</span> Building <span class="token number">21</span>.4s <span class="token punctuation">(</span><span class="token number">8</span>/8<span class="token punctuation">)</span> FINISHED                                                             docker:default
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>internal<span class="token punctuation">]</span> load .dockerignore                                                                       <span class="token number">0</span>.0s
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> transferring context: 2B                                                                         <span class="token number">0</span>.0s
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>internal<span class="token punctuation">]</span> load build definition from Dockerfile                                                    <span class="token number">0</span>.0s
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> transferring dockerfile: 544B                                                                    <span class="token number">0</span>.0s
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>internal<span class="token punctuation">]</span> load metadata <span class="token keyword">for</span> docker.io/library/java:8                                              <span class="token number">20</span>.4s
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span>internal<span class="token punctuation">]</span> load build context                                                                       <span class="token number">0</span>.2s
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> transferring context: <span class="token number">56</span>.16MB                                                                    <span class="token number">0</span>.2s
 <span class="token operator">=</span><span class="token operator">&gt;</span> CACHED <span class="token punctuation">[</span><span class="token number">1</span>/3<span class="token punctuation">]</span> FROM docker.io/library/java:8@sha256:c1ff613e8ba25833d2e1940da0940c3824f03f802c449f3d  <span class="token number">0</span>.0s
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">2</span>/3<span class="token punctuation">]</span> ADD docker_boot-0.0.1-SNAPSHOT.jar gm_docker.jar                                              <span class="token number">0</span>.2s
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">3</span>/3<span class="token punctuation">]</span> RUN <span class="token function">bash</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;touch /gm_docker.jar&#39;</span>                                                            <span class="token number">0</span>.4s
 <span class="token operator">=</span><span class="token operator">&gt;</span> exporting to image                                                                                  <span class="token number">0</span>.2s
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> exporting layers                                                                                 <span class="token number">0</span>.2s
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> writing image sha256:915d1d8bc5c694dec2ddca2a76b9ba60eb456b7794920b8b327a2628140bd784            <span class="token number">0</span>.0s
 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> naming to docker.io/library/gm_docker:1.7                                                        <span class="token number">0</span>.0s
<span class="token punctuation">[</span>root@192 mydocker<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY   TAG       IMAGE ID       CREATED          SIZE
gm_docker    <span class="token number">1.7</span>       915d1d8bc5c6   <span class="token number">22</span> seconds ago   755MB
gm_docker    <span class="token number">1.6</span>       3a67d307fb08   <span class="token number">26</span> minutes ago   755MB
tomcat       latest    fb5657adc892   <span class="token number">23</span> months ago    680MB
mysql        <span class="token number">5.7</span>       c20987f18b13   <span class="token number">24</span> months ago    448MB
registry     latest    b8604a3fe854   <span class="token number">2</span> years ago      <span class="token number">26</span>.2MB
ubuntu       latest    ba6acccedd29   <span class="token number">2</span> years ago      <span class="token number">72</span>.8MB
centos       latest    5d0da3dc9764   <span class="token number">2</span> years ago      231MB
redis        <span class="token number">6.0</span>.8     16ecd2772934   <span class="token number">3</span> years ago      104MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="执行docker-compose" tabindex="-1"><a class="header-anchor" href="#执行docker-compose" aria-hidden="true">#</a> 执行docker-compose</h4><p><strong>执行 docker compose up 或者 执行 docker compose up -d</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 mydocker<span class="token punctuation">]</span><span class="token comment"># docker compose up -d</span>
<span class="token punctuation">[</span>+<span class="token punctuation">]</span> Running <span class="token number">3</span>/3
 ✔ Container mydocker-mysql-1  Started                                                                  <span class="token number">0</span>.1s
 ✔ Container mydocker-redis-1  Started                                                                  <span class="token number">0</span>.1s
 ✔ Container ms01              Started                                                                  <span class="token number">0</span>.1s
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE           COMMAND                   CREATED              STATUS              PORTS                                                  NAMES
8f8cacd70664   gm_docker:1.7   <span class="token string">&quot;java -jar /gm_docke…&quot;</span>   About a minute ago   Up About a minute   <span class="token number">0.0</span>.0.0:6001-<span class="token operator">&gt;</span><span class="token number">6001</span>/tcp, :::6001-<span class="token operator">&gt;</span><span class="token number">6001</span>/tcp              ms01
7e7c7a6a2440   mysql:5.7       <span class="token string">&quot;docker-entrypoint.s…&quot;</span>   About a minute ago   Up About a minute   <span class="token number">0.0</span>.0.0:3306-<span class="token operator">&gt;</span><span class="token number">3306</span>/tcp, :::3306-<span class="token operator">&gt;</span><span class="token number">3306</span>/tcp, <span class="token number">33060</span>/tcp   mydocker-mysql-1
e6e15e425cfa   redis:6.0.8     <span class="token string">&quot;docker-entrypoint.s…&quot;</span>   About a minute ago   Up About a minute   <span class="token number">0.0</span>.0.0:6379-<span class="token operator">&gt;</span><span class="token number">6379</span>/tcp, :::6379-<span class="token operator">&gt;</span><span class="token number">6379</span>/tcp              mydocker-redis-1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>进入mysql容器实例并新建库db2021+新建表t_user</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 容器实例id /bin/bash

mysql <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span>

create database db2021<span class="token punctuation">;</span>

use db2021<span class="token punctuation">;</span>

CREATE TABLE <span class="token variable"><span class="token variable">\`</span>t_user<span class="token variable">\`</span></span> <span class="token punctuation">(</span>
<span class="token variable"><span class="token variable">\`</span><span class="token function">id</span><span class="token variable">\`</span></span> INT<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> UNSIGNED NOT NULL AUTO_INCREMENT,
<span class="token variable"><span class="token variable">\`</span>username<span class="token variable">\`</span></span> VARCHAR<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> NOT NULL DEFAULT <span class="token string">&#39;&#39;</span> COMMENT <span class="token string">&#39;用户名&#39;</span>,
<span class="token variable"><span class="token variable">\`</span>password<span class="token variable">\`</span></span> VARCHAR<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> NOT NULL DEFAULT <span class="token string">&#39;&#39;</span> COMMENT <span class="token string">&#39;密码&#39;</span>,
<span class="token variable"><span class="token variable">\`</span>sex<span class="token variable">\`</span></span> TINYINT<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> NOT NULL DEFAULT <span class="token string">&#39;0&#39;</span> COMMENT <span class="token string">&#39;性别 0=女 1=男 &#39;</span>,
<span class="token variable"><span class="token variable">\`</span>deleted<span class="token variable">\`</span></span> TINYINT<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> UNSIGNED NOT NULL DEFAULT <span class="token string">&#39;0&#39;</span> COMMENT <span class="token string">&#39;删除标志，默认0不删除，1删除&#39;</span>,
<span class="token variable"><span class="token variable">\`</span>update_time<span class="token variable">\`</span></span> TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT <span class="token string">&#39;更新时间&#39;</span>,
<span class="token variable"><span class="token variable">\`</span>create_time<span class="token variable">\`</span></span> TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT <span class="token string">&#39;创建时间&#39;</span>,
PRIMARY KEY <span class="token punctuation">(</span><span class="token variable"><span class="token variable">\`</span><span class="token function">id</span><span class="token variable">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token assign-left variable">ENGINE</span><span class="token operator">=</span>INNODB <span class="token assign-left variable">AUTO_INCREMENT</span><span class="token operator">=</span><span class="token number">1</span> DEFAULT <span class="token assign-left variable">CHARSET</span><span class="token operator">=</span>utf8mb4 <span class="token assign-left variable">COMMENT</span><span class="token operator">=</span><span class="token string">&#39;用户表&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="swagger测试-1" tabindex="-1"><a class="header-anchor" href="#swagger测试-1" aria-hidden="true">#</a> swagger测试</h4>`,21),g={href:"http://192.168.11.132:6001/swagger-ui.html#/",target:"_blank",rel:"noopener noreferrer"},y=e(`<h4 id="关停" tabindex="-1"><a class="header-anchor" href="#关停" aria-hidden="true">#</a> 关停</h4><p>docker compose stop</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 mydocker<span class="token punctuation">]</span><span class="token comment"># docker compose stop</span>
<span class="token punctuation">[</span>+<span class="token punctuation">]</span> Stopping <span class="token number">3</span>/3
 ✔ Container ms01              Stopped                                                                  <span class="token number">0</span>.2s
 ✔ Container mydocker-mysql-1  Stopped                                                                  <span class="token number">1</span>.3s
 ✔ Container mydocker-redis-1  Stopped                                                                  <span class="token number">0</span>.2s
 
 <span class="token punctuation">[</span>root@192 mydocker<span class="token punctuation">]</span><span class="token comment"># docker compose down</span>
<span class="token punctuation">[</span>+<span class="token punctuation">]</span> Running <span class="token number">4</span>/3
 ✔ Container ms01                Removed                                                                <span class="token number">0</span>.3s
 ✔ Container mydocker-redis-1    Removed                                                                <span class="token number">0</span>.2s
 ✔ Container mydocker-mysql-1    Removed                                                                <span class="token number">1</span>.2s
 ✔ Network mydocker_atguigu_net  Removed                                                                <span class="token number">0</span>.0s
<span class="token punctuation">[</span>root@192 mydocker<span class="token punctuation">]</span><span class="token comment"># docker ps -a</span>
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function w(f,h){const a=o("ExternalLinkIcon");return c(),l("div",null,[r,n("p",null,[s("官网："),n("a",k,[s("https://docs.docker.com/compose/compose-file/compose-file-v3/"),t(a)])]),n("p",null,[s("官网下载："),n("a",d,[s("https://docs.docker.com/compose/install/"),t(a)])]),m,n("p",null,[n("a",v,[s("http://192.168.11.132:6001/swagger-ui.html#/"),t(a)])]),b,n("p",null,[n("a",g,[s("http://192.168.11.132:6001/swagger-ui.html#/"),t(a)])]),y])}const I=p(u,[["render",w],["__file","13-Docker-compose容器编排.html.vue"]]);export{I as default};
