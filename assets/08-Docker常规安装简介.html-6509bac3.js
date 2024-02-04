import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c as i,a as n,b as s,d as t,e as a}from"./app-af5679fc.js";const c="/assets/1671285076794-366d4ce8-605b-4d41-bb14-2bb5ec776f54-7ab53ff4.png",r={},d=a(`<h1 id="docker常规安装简介" tabindex="-1"><a class="header-anchor" href="#docker常规安装简介" aria-hidden="true">#</a> Docker常规安装简介</h1><h2 id="_1-总体步骤" tabindex="-1"><a class="header-anchor" href="#_1-总体步骤" aria-hidden="true">#</a> 1 总体步骤</h2><ol><li>搜索镜像</li><li>拉取镜像</li><li>查看镜像</li><li>启动镜像 - 服务端口映射</li><li>停止容器</li><li>移除容器</li></ol><h2 id="_2-安装tomcat" tabindex="-1"><a class="header-anchor" href="#_2-安装tomcat" aria-hidden="true">#</a> 2 安装tomcat</h2><p>1.docker hub上面查找tomcat镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> search tomcat

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker search tomcat</span>
NAME                          DESCRIPTION                                      STARS     OFFICIAL   AUTOMATED
tomcat                        Apache Tomcat is an <span class="token function">open</span> <span class="token builtin class-name">source</span> implementati…   <span class="token number">3615</span>      <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
tomee                         Apache TomEE is an all-Apache Java EE certif…   <span class="token number">113</span>       <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
bitnami/tomcat                Bitnami Tomcat Docker Image                      <span class="token number">51</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
bitnamicharts/tomcat                                                           <span class="token number">0</span>
secoresearch/tomcat-varnish   Tomcat and Varnish <span class="token number">5.0</span>                           <span class="token number">0</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
vulhub/tomcat                                                                  <span class="token number">0</span>
islandora/tomcat                                                               <span class="token number">0</span>
wnprcehr/tomcat                                                                <span class="token number">0</span>
hivdb/tomcat-with-nucamino                                                     <span class="token number">0</span>
jumpserver/tomcat                                                              <span class="token number">0</span>
sismics/tomcat                Apache Tomcat Servlet Container                  <span class="token number">1</span>
eclipse/rdf4j-workbench       Dockerfile <span class="token keyword">for</span> Eclipse RDF4J Server and Work…   <span class="token number">6</span>
semoss/docker-tomcat          Tomcat, Java, Maven, and Git on <span class="token function">top</span> of debian    <span class="token number">0</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
eclipse/hadoop-dev            Ubuntu <span class="token number">14.04</span>, Maven <span class="token number">3.3</span>.9, JDK8, Tomcat <span class="token number">8</span>        <span class="token number">0</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
gbif/ipt                      The GBIF Integrated Publishing Toolkit <span class="token punctuation">(</span>IPT<span class="token punctuation">)</span>…   <span class="token number">2</span>
dhis2/base-dev                Images <span class="token keyword">in</span> this repository contains DHIS2 WAR…   <span class="token number">0</span>
eclipse/alpine_jdk8           Based on Alpine <span class="token number">3.3</span>. JDK <span class="token number">1.8</span>, Maven <span class="token number">3.3</span>.9, T…   <span class="token number">1</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
misolims/miso-base            MySQL <span class="token number">5.7</span> Database and Tomcat <span class="token number">8</span> Server neede…   <span class="token number">0</span>
dhis2/base                    Images <span class="token keyword">in</span> this repository contains DHIS2 WAR…   <span class="token number">0</span>
jelastic/tomcat               An image of the Tomcat Java application serv…   <span class="token number">4</span>
cfje/tomcat-resource          Tomcat Concourse Resource                        <span class="token number">2</span>
rightctrl/tomcat              CentOS , Oracle Java, tomcat application ssl…   <span class="token number">7</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
amd64/tomcat                  Apache Tomcat is an <span class="token function">open</span> <span class="token builtin class-name">source</span> implementati…   <span class="token number">8</span>
arm64v8/tomcat                Apache Tomcat is an <span class="token function">open</span> <span class="token builtin class-name">source</span> implementati…   <span class="token number">9</span>
softwareplant/tomcat          Tomcat images <span class="token keyword">for</span> jira-cloud testing             <span class="token number">0</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.从docker hub上拉取tomcat镜像到本地</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.docker images查看是否有拉取到的tomcat</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker images tomcat</span>
REPOSITORY   TAG       IMAGE ID       CREATED         SIZE
tomcat       latest    fb5657adc892   <span class="token number">23</span> months ago   680MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.使用tomcat镜像创建容器实例(也叫运行镜像)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 tomcat

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker run -it -p 8080:8080 tomcat</span>
Using CATALINA_BASE:   /usr/local/tomcat
Using CATALINA_HOME:   /usr/local/tomcat
Using CATALINA_TMPDIR: /usr/local/tomcat/temp
Using JRE_HOME:        /usr/local/openjdk-11
Using CLASSPATH:       /usr/local/tomcat/bin/bootstrap.jar:/usr/local/tomcat/bin/tomcat-juli.jar
Using CATALINA_OPTS:
NOTE: Picked up JDK_JAVA_OPTIONS:  --add-opens<span class="token operator">=</span>java.base/java.lang<span class="token operator">=</span>ALL-UNNAMED --add-opens<span class="token operator">=</span>java.base/java.io<span class="token operator">=</span>ALL-UNNAMED --add-opens<span class="token operator">=</span>java.base/java.util<span class="token operator">=</span>ALL-UNNAMED --add-opens<span class="token operator">=</span>java.base/java.util.concurrent<span class="token operator">=</span>ALL-UNNAMED --add-opens<span class="token operator">=</span>java.rmi/sun.rmi.transport<span class="token operator">=</span>ALL-UNNAMED
09-Dec-2023 <span class="token number">14</span>:53:26.503 INFO <span class="token punctuation">[</span>main<span class="token punctuation">]</span> org.apache.catalina.startup.VersionLoggerListener.log Server version name:   Apache Tomcat/10.0.14
09-Dec-2023 <span class="token number">14</span>:53:26.505 INFO <span class="token punctuation">[</span>main<span class="token punctuation">]</span> org.apache.catalina.startup.VersionLoggerListener.log Server built:          Dec <span class="token number">2</span> <span class="token number">2021</span> <span class="token number">22</span>:01:36 UTC
09-Dec-2023 <span class="token number">14</span>:53:26.506 INFO <span class="token punctuation">[</span>main<span class="token punctuation">]</span> org.apache.catalina.startup.VersionLoggerListener.log Server version number: <span class="token number">10.0</span>.14.0
<span class="token punctuation">..</span>.
09-Dec-2023 <span class="token number">14</span>:53:26.832 INFO <span class="token punctuation">[</span>main<span class="token punctuation">]</span> org.apache.catalina.core.StandardEngine.startInternal Starting Servlet engine: <span class="token punctuation">[</span>Apache Tomcat/10.0.14<span class="token punctuation">]</span>
09-Dec-2023 <span class="token number">14</span>:53:26.839 INFO <span class="token punctuation">[</span>main<span class="token punctuation">]</span> org.apache.coyote.AbstractProtocol.start Starting ProtocolHandler <span class="token punctuation">[</span><span class="token string">&quot;http-nio-8080&quot;</span><span class="token punctuation">]</span>
09-Dec-2023 <span class="token number">14</span>:53:26.847 INFO <span class="token punctuation">[</span>main<span class="token punctuation">]</span> org.apache.catalina.startup.Catalina.start Server startup <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token number">58</span><span class="token punctuation">]</span> milliseconds

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE      COMMAND                   CREATED              STATUS              PORTS                                       NAMES
30ed7159d98f   tomcat     <span class="token string">&quot;catalina.sh run&quot;</span>         About a minute ago   Up About a minute   <span class="token number">0.0</span>.0.0:8080-<span class="token operator">&gt;</span><span class="token number">8080</span>/tcp, :::8080-<span class="token operator">&gt;</span><span class="token number">8080</span>/tcp   nice_bassi
2ee03a1af4cd   registry   <span class="token string">&quot;/entrypoint.sh /etc…&quot;</span>   <span class="token number">2</span> hours ago          Up About an hour    <span class="token number">0.0</span>.0.0:5000-<span class="token operator">&gt;</span><span class="token number">5000</span>/tcp, :::5000-<span class="token operator">&gt;</span><span class="token number">5000</span>/tcp   kind_cannon

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.访问tomcat首页</p>`,13),u={href:"http://192.168.11.132:8080",target:"_blank",rel:"noopener noreferrer"},m=a(`<p>问题：HTTP状态 404 - 未找到</p><p>解决：</p><ul><li>可能没有映射端口或者没有关闭防火墙</li><li>把webapps.dist目录换成webapps</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE      COMMAND                   CREATED          STATUS             PORTS                                       NAMES
30ed7159d98f   tomcat     <span class="token string">&quot;catalina.sh run&quot;</span>         <span class="token number">12</span> minutes ago   Up <span class="token number">12</span> minutes      <span class="token number">0.0</span>.0.0:8080-<span class="token operator">&gt;</span><span class="token number">8080</span>/tcp, :::8080-<span class="token operator">&gt;</span><span class="token number">8080</span>/tcp   nice_bassi
2ee03a1af4cd   registry   <span class="token string">&quot;/entrypoint.sh /etc…&quot;</span>   <span class="token number">2</span> hours ago      Up About an hour   <span class="token number">0.0</span>.0.0:5000-<span class="token operator">&gt;</span><span class="token number">5000</span>/tcp, :::5000-<span class="token operator">&gt;</span><span class="token number">5000</span>/tcp   kind_cannon
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker exec -it 30ed7159d98f /bin/bash</span>
root@30ed7159d98f:/usr/local/tomcat<span class="token comment"># pwd</span>
/usr/local/tomcat
root@30ed7159d98f:/usr/local/tomcat<span class="token comment"># ls -l</span>
total <span class="token number">196</span>
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">18994</span> Dec  <span class="token number">2</span>  <span class="token number">2021</span> BUILDING.txt
-rw-r--r--. <span class="token number">1</span> root root  <span class="token number">6210</span> Dec  <span class="token number">2</span>  <span class="token number">2021</span> CONTRIBUTING.md
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">60269</span> Dec  <span class="token number">2</span>  <span class="token number">2021</span> LICENSE
-rw-r--r--. <span class="token number">1</span> root root  <span class="token number">2333</span> Dec  <span class="token number">2</span>  <span class="token number">2021</span> NOTICE
-rw-r--r--. <span class="token number">1</span> root root  <span class="token number">3378</span> Dec  <span class="token number">2</span>  <span class="token number">2021</span> README.md
-rw-r--r--. <span class="token number">1</span> root root  <span class="token number">6905</span> Dec  <span class="token number">2</span>  <span class="token number">2021</span> RELEASE-NOTES
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">16517</span> Dec  <span class="token number">2</span>  <span class="token number">2021</span> RUNNING.txt
drwxr-xr-x. <span class="token number">2</span> root root  <span class="token number">4096</span> Dec <span class="token number">22</span>  <span class="token number">2021</span> bin
drwxr-xr-x. <span class="token number">1</span> root root  <span class="token number">4096</span> Dec  <span class="token number">9</span> <span class="token number">14</span>:53 conf
drwxr-xr-x. <span class="token number">2</span> root root  <span class="token number">4096</span> Dec <span class="token number">22</span>  <span class="token number">2021</span> lib
drwxrwxrwx. <span class="token number">1</span> root root  <span class="token number">4096</span> Dec  <span class="token number">9</span> <span class="token number">14</span>:53 logs
drwxr-xr-x. <span class="token number">2</span> root root  <span class="token number">4096</span> Dec <span class="token number">22</span>  <span class="token number">2021</span> native-jni-lib
drwxrwxrwx. <span class="token number">2</span> root root  <span class="token number">4096</span> Dec <span class="token number">22</span>  <span class="token number">2021</span> temp
drwxr-xr-x. <span class="token number">2</span> root root  <span class="token number">4096</span> Dec <span class="token number">22</span>  <span class="token number">2021</span> webapps
drwxr-xr-x. <span class="token number">7</span> root root  <span class="token number">4096</span> Dec  <span class="token number">2</span>  <span class="token number">2021</span> webapps.dist
drwxrwxrwx. <span class="token number">2</span> root root  <span class="token number">4096</span> Dec  <span class="token number">2</span>  <span class="token number">2021</span> work
root@30ed7159d98f:/usr/local/tomcat<span class="token comment"># rm -r webapps</span>
root@30ed7159d98f:/usr/local/tomcat<span class="token comment"># mv webapps.dist webapps</span>
root@30ed7159d98f:/usr/local/tomcat<span class="token comment"># ls -l</span>
total <span class="token number">188</span>
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">18994</span> Dec  <span class="token number">2</span>  <span class="token number">2021</span> BUILDING.txt
-rw-r--r--. <span class="token number">1</span> root root  <span class="token number">6210</span> Dec  <span class="token number">2</span>  <span class="token number">2021</span> CONTRIBUTING.md
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">60269</span> Dec  <span class="token number">2</span>  <span class="token number">2021</span> LICENSE
-rw-r--r--. <span class="token number">1</span> root root  <span class="token number">2333</span> Dec  <span class="token number">2</span>  <span class="token number">2021</span> NOTICE
-rw-r--r--. <span class="token number">1</span> root root  <span class="token number">3378</span> Dec  <span class="token number">2</span>  <span class="token number">2021</span> README.md
-rw-r--r--. <span class="token number">1</span> root root  <span class="token number">6905</span> Dec  <span class="token number">2</span>  <span class="token number">2021</span> RELEASE-NOTES
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">16517</span> Dec  <span class="token number">2</span>  <span class="token number">2021</span> RUNNING.txt
drwxr-xr-x. <span class="token number">2</span> root root  <span class="token number">4096</span> Dec <span class="token number">22</span>  <span class="token number">2021</span> bin
drwxr-xr-x. <span class="token number">1</span> root root  <span class="token number">4096</span> Dec  <span class="token number">9</span> <span class="token number">14</span>:53 conf
drwxr-xr-x. <span class="token number">2</span> root root  <span class="token number">4096</span> Dec <span class="token number">22</span>  <span class="token number">2021</span> lib
drwxrwxrwx. <span class="token number">1</span> root root  <span class="token number">4096</span> Dec  <span class="token number">9</span> <span class="token number">15</span>:07 logs
drwxr-xr-x. <span class="token number">2</span> root root  <span class="token number">4096</span> Dec <span class="token number">22</span>  <span class="token number">2021</span> native-jni-lib
drwxrwxrwx. <span class="token number">2</span> root root  <span class="token number">4096</span> Dec <span class="token number">22</span>  <span class="token number">2021</span> temp
drwxr-xr-x. <span class="token number">7</span> root root  <span class="token number">4096</span> Dec  <span class="token number">2</span>  <span class="token number">2021</span> webapps
drwxrwxrwx. <span class="token number">1</span> root root  <span class="token number">4096</span> Dec  <span class="token number">9</span> <span class="token number">15</span>:07 work
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),b={href:"http://192.168.11.132:8080",target:"_blank",rel:"noopener noreferrer"},v=a(`<p>6.免修改版说明</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull billygoo/tomcat8-jdk8
docker run -d -p 8080:8080 --name tomcat8 billygoo/tomcat8-jdk8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>问题：</p><p>创建容器时报错：</p><figure><img src="`+c+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>iptables: No chain/target/match by that name.</p><p>问题原因：再docker运行的时候，关闭了防火墙，docker chain 设置未更新 ！</p><p>解决方案：重启docker</p>',8),k={href:"https://blog.csdn.net/qq_24452475/article/details/83901620",target:"_blank",rel:"noopener noreferrer"},h=a(`<h2 id="_3-安装mysql" tabindex="-1"><a class="header-anchor" href="#_3-安装mysql" aria-hidden="true">#</a> 3 安装mysql</h2><h3 id="_3-1-搜索mysql镜像" tabindex="-1"><a class="header-anchor" href="#_3-1-搜索mysql镜像" aria-hidden="true">#</a> 3.1 搜索mysql镜像</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker search mysql</span>
NAME                            DESCRIPTION                                      STARS     OFFICIAL   AUTOMATED
mysql                           MySQL is a widely used, open-source relation…   <span class="token number">14685</span>     <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
mariadb                         MariaDB Server is a high performing <span class="token function">open</span> sou…   <span class="token number">5600</span>      <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
percona                         Percona Server is a fork of the MySQL relati…   <span class="token number">623</span>       <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
phpmyadmin                      phpMyAdmin - A web interface <span class="token keyword">for</span> MySQL and M…   <span class="token number">910</span>       <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
bitnami/mysql                   Bitnami MySQL Docker Image                       <span class="token number">105</span>                  <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
bitnami/mysqld-exporter                                                          <span class="token number">5</span>
cimg/mysql                                                                       <span class="token number">2</span>
ubuntu/mysql                    MySQL <span class="token function">open</span> <span class="token builtin class-name">source</span> fast, stable, multi-thread…   <span class="token number">55</span>
rapidfort/mysql                 RapidFort optimized, hardened image <span class="token keyword">for</span> MySQL    <span class="token number">25</span>
rapidfort/mysql8-ib             RapidFort optimized, hardened image <span class="token keyword">for</span> MySQ…   <span class="token number">9</span>
google/mysql                    MySQL server <span class="token keyword">for</span> Google Compute Engine           <span class="token number">25</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
rapidfort/mysql-official        RapidFort optimized, hardened image <span class="token keyword">for</span> MySQ…   <span class="token number">9</span>
hashicorp/mysql-portworx-demo                                                    <span class="token number">0</span>
elestio/mysql                   Mysql, verified and packaged by Elestio          <span class="token number">0</span>
bitnamicharts/mysql                                                              <span class="token number">0</span>
newrelic/mysql-plugin           New Relic Plugin <span class="token keyword">for</span> monitoring MySQL databa…   <span class="token number">1</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
databack/mysql-backup           Back up mysql databases to<span class="token punctuation">..</span>. anywhere<span class="token operator">!</span>          <span class="token number">104</span>
linuxserver/mysql               A Mysql container, brought to you by LinuxSe…   <span class="token number">41</span>
mirantis/mysql                                                                   <span class="token number">0</span>
docksal/mysql                   MySQL <span class="token function">service</span> images <span class="token keyword">for</span> Docksal - https://d…   <span class="token number">0</span>
linuxserver/mysql-workbench                                                      <span class="token number">54</span>
vitess/mysqlctld                vitess/mysqlctld                                 <span class="token number">1</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
eclipse/mysql                   Mysql <span class="token number">5.7</span>, curl, <span class="token function">rsync</span>                           <span class="token number">1</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
drupalci/mysql-5.5              https://www.drupal.org/project/drupalci          <span class="token number">3</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
drupalci/mysql-5.7              https://www.drupal.org/project/drupalci          <span class="token number">0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-拉取mysql-5-7镜像" tabindex="-1"><a class="header-anchor" href="#_3-2-拉取mysql-5-7镜像" aria-hidden="true">#</a> 3.2 拉取mysql:5.7镜像</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker pull mysql:5.7</span>
<span class="token number">5.7</span>: Pulling from library/mysql
72a69066d2fe: Pull complete
93619dbc5b36: Pull complete
99da31dd6142: Pull complete
626033c43d70: Pull complete
37d5d7efb64e: Pull complete
ac563158d721: Pull complete
d2ba16033dad: Pull complete
0ceb82207cd7: Pull complete
37f2405cae96: Pull complete
e2482e017e53: Pull complete
70deed891d42: Pull complete
Digest: sha256:f2ad209efe9c67104167fc609cca6973c8422939491c9345270175a300419f94
Status: Downloaded newer image <span class="token keyword">for</span> mysql:5.7
docker.io/library/mysql:5.7
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY                     TAG       IMAGE ID       CREATED         SIZE
<span class="token number">192.168</span>.11.132:5000/myubuntu   <span class="token number">1.2</span>       776f0b498306   <span class="token number">2</span> hours ago     122MB
tomcat                         latest    fb5657adc892   <span class="token number">23</span> months ago   680MB
mysql                          <span class="token number">5.7</span>       c20987f18b13   <span class="token number">23</span> months ago   448MB
registry                       latest    b8604a3fe854   <span class="token number">2</span> years ago     <span class="token number">26</span>.2MB
ubuntu                         latest    ba6acccedd29   <span class="token number">2</span> years ago     <span class="token number">72</span>.8MB
centos                         latest    5d0da3dc9764   <span class="token number">2</span> years ago     231MB
redis                          <span class="token number">6.0</span>.8     16ecd2772934   <span class="token number">3</span> years ago     104MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-创建容器" tabindex="-1"><a class="header-anchor" href="#_3-3-创建容器" aria-hidden="true">#</a> 3.3 创建容器</h3><h4 id="简单版" tabindex="-1"><a class="header-anchor" href="#简单版" aria-hidden="true">#</a> 简单版</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:5.7
docker ps
docker exec -it 容器ID /bin/bash
mysql -uroot -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:5.7</span>
eb8d0f4c7bd642a103a33e4ee1871464e7709ac85c34f5f6bb65df97cebee713

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE       COMMAND                   CREATED         STATUS         PORTS                                                  NAMES
eb8d0f4c7bd6   mysql:5.7   <span class="token string">&quot;docker-entrypoint.s…&quot;</span>   <span class="token number">4</span> seconds ago   Up <span class="token number">3</span> seconds   <span class="token number">0.0</span>.0.0:3306-<span class="token operator">&gt;</span><span class="token number">3306</span>/tcp, :::3306-<span class="token operator">&gt;</span><span class="token number">3306</span>/tcp, <span class="token number">33060</span>/tcp   determined_raman

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker exec -it eb8d0f4c7bd6 /bin/bash</span>
root@eb8d0f4c7bd6:/<span class="token comment"># mysql -uroot -p</span>
Enter password:
Welcome to the MySQL monitor.  Commands end with <span class="token punctuation">;</span> or <span class="token punctuation">\\</span>g.
Your MySQL connection <span class="token function">id</span> is <span class="token number">2</span>
Server version: <span class="token number">5.7</span>.36 MySQL Community Server <span class="token punctuation">(</span>GPL<span class="token punctuation">)</span>

Copyright <span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token number">2000</span>, <span class="token number">2021</span>, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type <span class="token string">&#39;help;&#39;</span> or <span class="token string">&#39;\\h&#39;</span> <span class="token keyword">for</span> help. Type <span class="token string">&#39;\\c&#39;</span> to <span class="token function">clear</span> the current input statement.

mysql<span class="token operator">&gt;</span> create database db01<span class="token punctuation">;</span>
Query OK, <span class="token number">1</span> row affected <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

mysql<span class="token operator">&gt;</span> use db01<span class="token punctuation">;</span>
Database changed
mysql<span class="token operator">&gt;</span> create table aa<span class="token punctuation">(</span>id int,name varchar<span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">))</span><span class="token punctuation">;</span>
Query OK, <span class="token number">0</span> rows affected <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

mysql<span class="token operator">&gt;</span> insert into aa values<span class="token punctuation">(</span><span class="token number">1</span>,<span class="token string">&#39;gm&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Query OK, <span class="token number">1</span> row affected <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>

mysql<span class="token operator">&gt;</span> <span class="token keyword">select</span> * from aa<span class="token punctuation">;</span>
+------+------+
<span class="token operator">|</span> <span class="token function">id</span>   <span class="token operator">|</span> name <span class="token operator">|</span>
+------+------+
<span class="token operator">|</span>    <span class="token number">1</span> <span class="token operator">|</span> gm   <span class="token operator">|</span>
+------+------+
<span class="token number">1</span> row <span class="token keyword">in</span> <span class="token builtin class-name">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>外部客户端也可连接运行在dokcer上的mysql容器实例服务。</p><p><strong>问题</strong>：</p><p>插入中文数据报错：</p><p>insert into aa values(2,&#39;张三&#39;)</p><p>1366 - Incorrect string value: &#39;\\xE5\\xBC\\xA0\\xE4\\xB8\\x89&#39; for column &#39;name&#39; at row 1</p><p><strong>为什么报错?</strong></p><p>docker上默认字符集编码隐患，docker里面的mysql容器实例查看，内容如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> VARIABLES <span class="token operator">LIKE</span> <span class="token string">&#39;character%&#39;</span><span class="token punctuation">;</span>

mysql<span class="token operator">&gt;</span> <span class="token keyword">SHOW</span> VARIABLES <span class="token operator">LIKE</span> <span class="token string">&#39;character%&#39;</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">--------------------------+----------------------------+</span>
<span class="token operator">|</span> Variable_name            <span class="token operator">|</span> <span class="token keyword">Value</span>                      <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">--------------------------+----------------------------+</span>
<span class="token operator">|</span> character_set_client     <span class="token operator">|</span> latin1                     <span class="token operator">|</span>
<span class="token operator">|</span> character_set_connection <span class="token operator">|</span> latin1                     <span class="token operator">|</span>
<span class="token operator">|</span> character_set_database   <span class="token operator">|</span> latin1                     <span class="token operator">|</span>
<span class="token operator">|</span> character_set_filesystem <span class="token operator">|</span> <span class="token keyword">binary</span>                     <span class="token operator">|</span>
<span class="token operator">|</span> character_set_results    <span class="token operator">|</span> latin1                     <span class="token operator">|</span>
<span class="token operator">|</span> character_set_server     <span class="token operator">|</span> latin1                     <span class="token operator">|</span>
<span class="token operator">|</span> character_set_system     <span class="token operator">|</span> utf8                       <span class="token operator">|</span>
<span class="token operator">|</span> character_sets_dir       <span class="token operator">|</span> <span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">share</span><span class="token operator">/</span>mysql<span class="token operator">/</span>charsets<span class="token operator">/</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">--------------------------+----------------------------+</span>
<span class="token number">8</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除容器后，里面的mysql数据怎么办？</p><h4 id="实战版" tabindex="-1"><a class="header-anchor" href="#实战版" aria-hidden="true">#</a> 实战版</h4><p>新建mysql容器实例</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-v</span> /data/mysql/log:/var/log/mysql <span class="token parameter variable">-v</span> /data/mysql/data:/var/lib/mysql <span class="token parameter variable">-v</span> /data/mysql/conf:/etc/mysql/conf.d <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root <span class="token parameter variable">--name</span> mysql mysql:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY                     TAG       IMAGE ID       CREATED         SIZE
<span class="token number">192.168</span>.11.132:5000/myubuntu   <span class="token number">1.2</span>       776f0b498306   <span class="token number">2</span> hours ago     122MB
tomcat                         latest    fb5657adc892   <span class="token number">23</span> months ago   680MB
mysql                          <span class="token number">5.7</span>       c20987f18b13   <span class="token number">23</span> months ago   448MB
registry                       latest    b8604a3fe854   <span class="token number">2</span> years ago     <span class="token number">26</span>.2MB
ubuntu                         latest    ba6acccedd29   <span class="token number">2</span> years ago     <span class="token number">72</span>.8MB
centos                         latest    5d0da3dc9764   <span class="token number">2</span> years ago     231MB
redis                          <span class="token number">6.0</span>.8     16ecd2772934   <span class="token number">3</span> years ago     104MB
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker run -d -p 3306:3306 --privileged=true -v /data/mysql/log:/var/log/mysql -v /data/mysql/data:/var/lib/mysql -v /data/mysql/conf:/etc/mysql/conf.d -e MYSQL_ROOT_PASSWORD=root --name mysql mysql:5.7</span>
80439175ed68999f1c51d5eed78ed7db5fba50cc139c103c42164d6a415a16cc
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># cd /data/mysql/conf</span>
<span class="token punctuation">[</span>root@192 conf<span class="token punctuation">]</span><span class="token comment"># vim my.cnf</span>
<span class="token punctuation">[</span>root@192 conf<span class="token punctuation">]</span><span class="token comment"># cat my.cnf</span>
<span class="token punctuation">[</span>client<span class="token punctuation">]</span>
<span class="token assign-left variable">default_character_set</span><span class="token operator">=</span>utf8
<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
collation_server <span class="token operator">=</span> utf8_general_ci
character_set_server <span class="token operator">=</span> utf8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建my.cnf，通过容器卷同步给mysql容器实例</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>client<span class="token punctuation">]</span>
<span class="token assign-left variable">default_character_set</span><span class="token operator">=</span>utf8
<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
collation_server <span class="token operator">=</span> utf8_general_ci
character_set_server <span class="token operator">=</span> utf8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新启动mysql容器实例再重新进入并查看字符编码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 conf<span class="token punctuation">]</span><span class="token comment"># docker restart mysql</span>
mysql
<span class="token punctuation">[</span>root@192 conf<span class="token punctuation">]</span><span class="token comment"># docker exec -it mysql /bin/bash</span>
root@80439175ed68:/<span class="token comment"># mysql -uroot -p</span>
Enter password:
Welcome to the MySQL monitor.  Commands end with <span class="token punctuation">;</span> or <span class="token punctuation">\\</span>g.
Your MySQL connection <span class="token function">id</span> is <span class="token number">3</span>
Server version: <span class="token number">5.7</span>.36 MySQL Community Server <span class="token punctuation">(</span>GPL<span class="token punctuation">)</span>

Copyright <span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token number">2000</span>, <span class="token number">2021</span>, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type <span class="token string">&#39;help;&#39;</span> or <span class="token string">&#39;\\h&#39;</span> <span class="token keyword">for</span> help. Type <span class="token string">&#39;\\c&#39;</span> to <span class="token function">clear</span> the current input statement.

mysql<span class="token operator">&gt;</span> SHOW VARIABLES LIKE <span class="token string">&#39;character%&#39;</span><span class="token punctuation">;</span>
+--------------------------+----------------------------+
<span class="token operator">|</span> Variable_name            <span class="token operator">|</span> Value                      <span class="token operator">|</span>
+--------------------------+----------------------------+
<span class="token operator">|</span> character_set_client     <span class="token operator">|</span> utf8                       <span class="token operator">|</span>
<span class="token operator">|</span> character_set_connection <span class="token operator">|</span> utf8                       <span class="token operator">|</span>
<span class="token operator">|</span> character_set_database   <span class="token operator">|</span> utf8                       <span class="token operator">|</span>
<span class="token operator">|</span> character_set_filesystem <span class="token operator">|</span> binary                     <span class="token operator">|</span>
<span class="token operator">|</span> character_set_results    <span class="token operator">|</span> utf8                       <span class="token operator">|</span>
<span class="token operator">|</span> character_set_server     <span class="token operator">|</span> utf8                       <span class="token operator">|</span>
<span class="token operator">|</span> character_set_system     <span class="token operator">|</span> utf8                       <span class="token operator">|</span>
<span class="token operator">|</span> character_sets_dir       <span class="token operator">|</span> /usr/share/mysql/charsets/ <span class="token operator">|</span>
+--------------------------+----------------------------+
<span class="token number">8</span> rows <span class="token keyword">in</span> <span class="token builtin class-name">set</span> <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再新建库新建表即可插入中文</p><h2 id="_4-安装redis" tabindex="-1"><a class="header-anchor" href="#_4-安装redis" aria-hidden="true">#</a> 4 安装redis</h2><p>1.从docker hub上(阿里云加速器)拉取redis镜像到本地标签为6.0.8</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 conf<span class="token punctuation">]</span><span class="token comment"># docker pull redis:6.0.8</span>
<span class="token number">6.0</span>.8: Pulling from library/redis
Digest: sha256:21db12e5ab3cc343e9376d655e8eabbdbe5516801373e95a8a9e66010c5b8819
Status: Image is up to <span class="token function">date</span> <span class="token keyword">for</span> redis:6.0.8
docker.io/library/redis:6.0.8
<span class="token punctuation">[</span>root@192 conf<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY                     TAG       IMAGE ID       CREATED         SIZE
<span class="token number">192.168</span>.11.132:5000/myubuntu   <span class="token number">1.2</span>       776f0b498306   <span class="token number">2</span> hours ago     122MB
tomcat                         latest    fb5657adc892   <span class="token number">23</span> months ago   680MB
mysql                          <span class="token number">5.7</span>       c20987f18b13   <span class="token number">23</span> months ago   448MB
registry                       latest    b8604a3fe854   <span class="token number">2</span> years ago     <span class="token number">26</span>.2MB
ubuntu                         latest    ba6acccedd29   <span class="token number">2</span> years ago     <span class="token number">72</span>.8MB
centos                         latest    5d0da3dc9764   <span class="token number">2</span> years ago     231MB
redis                          <span class="token number">6.0</span>.8     16ecd2772934   <span class="token number">3</span> years ago     104MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.入门命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 conf<span class="token punctuation">]</span><span class="token comment"># docker run -d -p 6379:6379 redis:6.0.8</span>
882c54bfdeab3a71474bb784261b02af118dbccd5d0d3e61045026c5e3539c76
<span class="token punctuation">[</span>root@192 conf<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE         COMMAND                   CREATED         STATUS         PORTS                                                  NAMES
882c54bfdeab   redis:6.0.8   <span class="token string">&quot;docker-entrypoint.s…&quot;</span>   <span class="token number">4</span> seconds ago   Up <span class="token number">3</span> seconds   <span class="token number">0.0</span>.0.0:6379-<span class="token operator">&gt;</span><span class="token number">6379</span>/tcp, :::6379-<span class="token operator">&gt;</span><span class="token number">6379</span>/tcp              nervous_wilson
80439175ed68   mysql:5.7     <span class="token string">&quot;docker-entrypoint.s…&quot;</span>   <span class="token number">8</span> minutes ago   Up <span class="token number">6</span> minutes   <span class="token number">0.0</span>.0.0:3306-<span class="token operator">&gt;</span><span class="token number">3306</span>/tcp, :::3306-<span class="token operator">&gt;</span><span class="token number">3306</span>/tcp, <span class="token number">33060</span>/tcp   mysql
<span class="token punctuation">[</span>root@192 conf<span class="token punctuation">]</span><span class="token comment"># docker exec -it 882c54bfdeab /bin/bash</span>
root@882c54bfdeab:/data<span class="token comment"># redis-cli</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k1 v1
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get k1
<span class="token string">&quot;v1&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token function">ping</span>
PONG
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.命令提醒：容器卷记得加入--privileged=true</p><p>Docker挂载主机目录Docker访问出现cannot open directory .: Permission denied</p><p>解决办法：在挂载目录后多加一个--privileged=true参数即可</p><p>4.在CentOS宿主机下新建目录/app/redis</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /app/redis

<span class="token punctuation">[</span>root@192 conf<span class="token punctuation">]</span><span class="token comment"># mkdir -p /app/redis</span>
<span class="token punctuation">[</span>root@192 conf<span class="token punctuation">]</span><span class="token comment"># cd /app/redis/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.将一个redis.conf文件模板拷贝进/app/redis目录下</p><p>将准备好的redis.conf文件放进/app/redis目录下</p><p>6.修改redis.conf文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span> 开启redis验证 可选
requirepass <span class="token number">123</span>
<span class="token number">2</span> 允许redis外地连接  必须
注释掉 <span class="token comment"># bind 127.0.0.1</span>
<span class="token number">3</span> daemonize no
将daemonize yes注释起来或者 daemonize no设置，因为该配置和docker run中-d参数冲突，会导致容器一直启动失败
<span class="token number">4</span> 开启redis数据持久化  appendonly <span class="token function">yes</span>  可选
<span class="token number">5</span> 关闭保护模式 protected-mode no
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改后的配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>requirepass <span class="token number">123</span>
protected-mode no
port <span class="token number">6379</span>
tcp-backlog <span class="token number">511</span>
<span class="token function">timeout</span> <span class="token number">0</span>
tcp-keepalive <span class="token number">300</span>
daemonize no
supervised no
pidfile /var/run/redis_6379.pid
loglevel notice
logfile <span class="token string">&quot;&quot;</span>
databases <span class="token number">16</span>
always-show-logo <span class="token function">yes</span> 
save <span class="token number">900</span> <span class="token number">1</span>
save <span class="token number">300</span> <span class="token number">10</span>
save <span class="token number">60</span> <span class="token number">10000</span>
stop-writes-on-bgsave-error <span class="token function">yes</span>
rdbcompression <span class="token function">yes</span>
rdbchecksum <span class="token function">yes</span>
dbfilename dump.rdb
<span class="token function">dir</span> ./
replica-serve-stale-data <span class="token function">yes</span>
replica-read-only <span class="token function">yes</span>
repl-diskless-sync no
repl-diskless-sync-delay <span class="token number">5</span>
repl-disable-tcp-nodelay no
replica-priority <span class="token number">100</span> 
lazyfree-lazy-eviction no
lazyfree-lazy-expire no
lazyfree-lazy-server-del no
replica-lazy-flush no 
appendonly <span class="token function">yes</span> 
appendfilename <span class="token string">&quot;appendonly.aof&quot;</span>
appendfsync everysec 
no-appendfsync-on-rewrite no 
auto-aof-rewrite-percentage <span class="token number">100</span>
auto-aof-rewrite-min-size 64mb 
aof-load-truncated <span class="token function">yes</span>
aof-use-rdb-preamble <span class="token function">yes</span> 
lua-time-limit <span class="token number">5000</span>
slowlog-log-slower-than <span class="token number">10000</span>
slowlog-max-len <span class="token number">128</span> 
latency-monitor-threshold <span class="token number">0</span>
notify-keyspace-events Ex
hash-max-ziplist-entries <span class="token number">512</span>
hash-max-ziplist-value <span class="token number">64</span>
list-max-ziplist-size <span class="token parameter variable">-2</span>
list-compress-depth <span class="token number">0</span> 
set-max-intset-entries <span class="token number">512</span>
zset-max-ziplist-entries <span class="token number">128</span>
zset-max-ziplist-value <span class="token number">64</span>
hll-sparse-max-bytes <span class="token number">3000</span>
stream-node-max-bytes <span class="token number">4096</span>
stream-node-max-entries <span class="token number">100</span>
activerehashing <span class="token function">yes</span>
client-output-buffer-limit normal <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span>
client-output-buffer-limit replica 256mb 64mb <span class="token number">60</span>
client-output-buffer-limit pubsub 32mb 8mb <span class="token number">60</span>
hz <span class="token number">10</span>
dynamic-hz <span class="token function">yes</span>
aof-rewrite-incremental-fsync <span class="token function">yes</span>
rdb-save-incremental-fsync <span class="token function">yes</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7.使用redis6.0.8镜像创建容器(也叫运行镜像)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 <span class="token parameter variable">--name</span> myr3 <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-v</span> /app/redis/redis.conf:/etc/redis/redis.conf <span class="token parameter variable">-v</span> /app/redis/data:/data <span class="token parameter variable">-d</span> redis:6.0.8 redis-server /etc/redis/redis.conf

<span class="token punctuation">[</span>root@192 redis<span class="token punctuation">]</span><span class="token comment"># docker run -p 6379:6379 --name myr3 --privileged=true -v /app/redis/redis.conf:/etc/redis/redis.conf -v /app/redis/data:/data -d redis:6.0.8 redis-server /etc/redis/redis.conf</span>
08d0615c96ea69dafc45a01735b96465f906aa68dfd3700b0c95935264414d8f
<span class="token punctuation">[</span>root@192 redis<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE         COMMAND                   CREATED          STATUS          PORTS                                                  NAMES
08d0615c96ea   redis:6.0.8   <span class="token string">&quot;docker-entrypoint.s…&quot;</span>   <span class="token number">4</span> seconds ago    Up <span class="token number">3</span> seconds    <span class="token number">0.0</span>.0.0:6379-<span class="token operator">&gt;</span><span class="token number">6379</span>/tcp, :::6379-<span class="token operator">&gt;</span><span class="token number">6379</span>/tcp              myr3
80439175ed68   mysql:5.7     <span class="token string">&quot;docker-entrypoint.s…&quot;</span>   <span class="token number">30</span> minutes ago   Up <span class="token number">28</span> minutes   <span class="token number">0.0</span>.0.0:3306-<span class="token operator">&gt;</span><span class="token number">3306</span>/tcp, :::3306-<span class="token operator">&gt;</span><span class="token number">3306</span>/tcp, <span class="token number">33060</span>/tcp   mysql

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8.测试redis-cli连接上来</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 redis<span class="token punctuation">]</span><span class="token comment"># docker exec -it myr3 /bin/bash</span>
root@08d0615c96ea:/data<span class="token comment"># redis-cli</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k1 v1
<span class="token punctuation">(</span>error<span class="token punctuation">)</span> NOAUTH Authentication required.
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> auth <span class="token number">123</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k1 v1
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get k1
<span class="token string">&quot;v1&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-安装nginx" tabindex="-1"><a class="header-anchor" href="#_5-安装nginx" aria-hidden="true">#</a> 5 安装Nginx</h2><p>见高级篇Portainer</p>`,49);function g(f,y){const e=o("ExternalLinkIcon");return l(),i("div",null,[d,n("p",null,[n("a",u,[s("http://192.168.11.132:8080"),t(e)])]),m,n("p",null,[s("再次访问："),n("a",b,[s("http://192.168.11.132:8080"),t(e)]),s("，访问成功。")]),v,n("p",null,[s("解决问题的帖子："),n("a",k,[s("https://blog.csdn.net/qq_24452475/article/details/83901620"),t(e)])]),h])}const _=p(r,[["render",g],["__file","08-Docker常规安装简介.html.vue"]]);export{_ as default};
