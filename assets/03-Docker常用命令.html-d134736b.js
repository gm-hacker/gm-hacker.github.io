import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c as o,a as n,b as s,d as c,e as a}from"./app-b510d4f8.js";const p="/assets/image-20231209155857022-010c561c.png",r="/assets/image-20231209165648308-5e921510.png",d="/assets/image-20231209165653024-6fd227ae.png",u="/assets/1658128808416-bc53f29a-c6b0-4b5f-966c-b6cb83a9e66b-bc03d7b1.png",m={},b=a(`<h1 id="docker常用命令" tabindex="-1"><a class="header-anchor" href="#docker常用命令" aria-hidden="true">#</a> Docker常用命令</h1><h2 id="_1-帮助启动类命令" tabindex="-1"><a class="header-anchor" href="#_1-帮助启动类命令" aria-hidden="true">#</a> 1 帮助启动类命令</h2><ul><li>启动docker： <code>systemctl start docker</code></li><li>停止docker： <code>systemctl stop docker</code></li><li>重启docker： <code>systemctl restart docker</code></li><li>查看docker状态： <code>systemctl status docker</code></li><li>开机启动： <code>systemctl enable docker</code></li><li>查看docker概要信息： <code>docker info</code></li><li>查看docker总体帮助文档： <code>docker --help</code></li><li>查看docker命令帮助文档：<code> docker 具体命令 --help</code></li></ul><h2 id="_2-镜像命令" tabindex="-1"><a class="header-anchor" href="#_2-镜像命令" aria-hidden="true">#</a> 2 镜像命令</h2><h3 id="_2-1-列出本地镜像" tabindex="-1"><a class="header-anchor" href="#_2-1-列出本地镜像" aria-hidden="true">#</a> 2.1 列出本地镜像</h3><p>命令：<code>docker images [OPTIONS]</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
hello-world   latest    9c7a54a9a43c   <span class="token number">7</span> months ago   <span class="token number">13</span>.3kB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>各个选项说明:</p><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>REPOSITORY</td><td>表示镜像的仓库源</td></tr><tr><td>TAG</td><td>镜像的标签版本号</td></tr><tr><td>IMAGE ID</td><td>镜像ID</td></tr><tr><td>CREATED</td><td>镜像创建时间</td></tr><tr><td>SIZE</td><td>镜像大小</td></tr></tbody></table><p>同一仓库源可以有多个 TAG版本，代表这个仓库源的不同个版本，我们使用 REPOSITORY:TAG 来定义不同的镜像。</p><p>如果你不指定一个镜像的版本标签，例如你只使用 ubuntu，docker 将默认使用 ubuntu:latest 镜像</p><p>OPTIONS说明：</p><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>-a</td><td>列出本地所有的镜像（含历史映像层）</td></tr><tr><td>-q</td><td>只显示镜像ID。</td></tr></tbody></table><h3 id="_2-2-搜索镜像" tabindex="-1"><a class="header-anchor" href="#_2-2-搜索镜像" aria-hidden="true">#</a> 2.2 搜索镜像</h3>`,14),v={href:"https://hub.docker.com",target:"_blank",rel:"noopener noreferrer"},k=a(`<p>命令：<code>docker search [OPTIONS] 镜像名字</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker search redis</span>
NAME                                DESCRIPTION                                      STARS     OFFICIAL   AUTOMATED
redis                               Redis is an <span class="token function">open</span> <span class="token builtin class-name">source</span> key-value store that…   <span class="token number">12532</span>     <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
redislabs/redisearch                Redis With the RedisSearch module pre-loaded…   <span class="token number">61</span>
redislabs/redisinsight              RedisInsight - The GUI <span class="token keyword">for</span> Redis                 <span class="token number">94</span>
redis/redis-stack-server            redis-stack-server installs a Redis server w…   <span class="token number">62</span>
redis/redis-stack                   redis-stack installs a Redis server with add…   <span class="token number">85</span>
redislabs/rebloom                   A probablistic datatypes module <span class="token keyword">for</span> Redis        <span class="token number">25</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
redislabs/redis                     Clustered in-memory database engine compatib…   <span class="token number">40</span>
redislabs/rejson                    RedisJSON - Enhanced JSON data <span class="token builtin class-name">type</span> processi…   <span class="token number">53</span>
redislabs/redisgraph                A graph database module <span class="token keyword">for</span> Redis                <span class="token number">26</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
redislabs/redismod                  An automated build of redismod - latest Redi…   <span class="token number">41</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
redislabs/redistimeseries           A <span class="token function">time</span> series database module <span class="token keyword">for</span> Redis          <span class="token number">12</span>
redislabs/operator                                                                   <span class="token number">7</span>
redislabs/operator-internal         This repository contains pre-released versio…   <span class="token number">1</span>
redislabs/redis-py                                                                   <span class="token number">5</span>
redislabs/redis-webcli              A tiny Flask app to provide access to Redis …   <span class="token number">5</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
redislabs/redisgears                An automated build of RedisGears                 <span class="token number">4</span>
redislabs/k8s-controller-internal                                                    <span class="token number">0</span>
redislabs/k8s-controller                                                             <span class="token number">2</span>
redislabs/memtier_benchmark         Docker image to run memtier_benchmark            <span class="token number">0</span>
redislabs/ng-redis-raft             Redis with redis raft module                     <span class="token number">0</span>
redislabs/redisai                                                                    <span class="token number">6</span>
redislabs/olmtest                   Test artefact <span class="token keyword">for</span> OLM CSV                        <span class="token number">1</span>
bitnami/redis                       Bitnami Redis Docker Image                       <span class="token number">271</span>                  <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
redislabs/olm-bundle                                                                 <span class="token number">0</span>
redislabs/redisml                   A Redis module that implements several machi…   <span class="token number">3</span>                    <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>各个选项说明:</p><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>NAME</td><td>镜像名称</td></tr><tr><td>DESCRIPTION</td><td>镜像说明</td></tr><tr><td>STARS</td><td>点赞数量</td></tr><tr><td>OFFICIAL</td><td>是否官方的</td></tr><tr><td>AUTOMATED</td><td>是否自动构建的</td></tr></tbody></table><p>OPTIONS说明：</p><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>--limit</td><td>只列出N个镜像，默认25个</td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker search --limit 5 redis</span>
NAME                       DESCRIPTION                                      STARS     OFFICIAL   AUTOMATED
redis                      Redis is an <span class="token function">open</span> <span class="token builtin class-name">source</span> key-value store that…   <span class="token number">12532</span>     <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
redislabs/redisearch       Redis With the RedisSearch module pre-loaded…   <span class="token number">61</span>
redislabs/redisinsight     RedisInsight - The GUI <span class="token keyword">for</span> Redis                 <span class="token number">94</span>
redis/redis-stack-server   redis-stack-server installs a Redis server w…   <span class="token number">62</span>
redis/redis-stack          redis-stack installs a Redis server with add…   <span class="token number">85</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-下载镜像" tabindex="-1"><a class="header-anchor" href="#_2-3-下载镜像" aria-hidden="true">#</a> 2.3 下载镜像</h3><p>命令：<code>docker pull 某个XXX镜像名字</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载指定版本镜像</span>
<span class="token function">docker</span> pull 镜像名字<span class="token punctuation">[</span>:TAG<span class="token punctuation">]</span>
<span class="token comment"># 没有TAG就是最新版</span>
<span class="token function">docker</span> pull 镜像名字
<span class="token comment"># 等价于</span>
<span class="token function">docker</span> pull 镜像名字:latest

<span class="token function">docker</span> pull ubuntu

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker pull ubuntu</span>
Using default tag: latest
latest: Pulling from library/ubuntu
7b1a6ab2e44d: Pull complete
Digest: sha256:626ffe58f6e7566e00254b638eb7e0f3b11d4da9675088f4781a50ae288f3322
Status: Downloaded newer image <span class="token keyword">for</span> ubuntu:latest
docker.io/library/ubuntu:latest
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
hello-world   latest    9c7a54a9a43c   <span class="token number">7</span> months ago   <span class="token number">13</span>.3kB
ubuntu        latest    ba6acccedd29   <span class="token number">2</span> years ago    <span class="token number">72</span>.8MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-查看镜像-容器-数据卷所占的空间" tabindex="-1"><a class="header-anchor" href="#_2-4-查看镜像-容器-数据卷所占的空间" aria-hidden="true">#</a> 2.4 查看镜像/容器/数据卷所占的空间</h3><p>命令：<code>docker system df </code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看镜像/容器/数据卷所占的空间</span>
<span class="token function">docker</span> system <span class="token function">df</span>

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker system df</span>
TYPE            TOTAL     ACTIVE    SIZE      RECLAIMABLE
Images          <span class="token number">2</span>         <span class="token number">1</span>         <span class="token number">72</span>.79MB   <span class="token number">72</span>.78MB <span class="token punctuation">(</span><span class="token number">99</span>%<span class="token punctuation">)</span>
Containers      <span class="token number">2</span>         <span class="token number">0</span>         0B        0B
Local Volumes   <span class="token number">0</span>         <span class="token number">0</span>         0B        0B
Build Cache     <span class="token number">0</span>         <span class="token number">0</span>         0B        0B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-删除镜像" tabindex="-1"><a class="header-anchor" href="#_2-5-删除镜像" aria-hidden="true">#</a> 2.5 删除镜像</h3><p>命令：<code>docker rmi 某个XXX镜像名字ID</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 删除单个</span>
<span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> 镜像ID
<span class="token comment"># 删除多个</span>
<span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> 镜像名1:TAG 镜像名2:TAG 
<span class="token comment"># 删除全部</span>
<span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images <span class="token parameter variable">-qa</span><span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-虚悬镜像" tabindex="-1"><a class="header-anchor" href="#_2-6-虚悬镜像" aria-hidden="true">#</a> 2.6 虚悬镜像</h3><p>定义：仓库名、标签都是<code>&lt;none&gt;</code>的镜像，俗称虚悬镜像dangling image</p><p>后续Dockerfile章节介绍</p><h2 id="_3-容器命令" tabindex="-1"><a class="header-anchor" href="#_3-容器命令" aria-hidden="true">#</a> 3 容器命令</h2><h3 id="_3-1-先下载镜像" tabindex="-1"><a class="header-anchor" href="#_3-1-先下载镜像" aria-hidden="true">#</a> 3.1 先下载镜像</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull centos
<span class="token function">docker</span> pull ubuntu

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker pull ubuntu</span>
Using default tag: latest
latest: Pulling from library/ubuntu
7b1a6ab2e44d: Pull complete
Digest: sha256:626ffe58f6e7566e00254b638eb7e0f3b11d4da9675088f4781a50ae288f3322
Status: Downloaded newer image <span class="token keyword">for</span> ubuntu:latest
docker.io/library/ubuntu:latest
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker pull centos</span>
Using default tag: latest
latest: Pulling from library/centos
a1d0c7532777: Pull complete
Digest: sha256:a27fd8080b517143cbbbab9dfb7c8571c40d67d534bbdee55bd6c473f432b177
Status: Downloaded newer image <span class="token keyword">for</span> centos:latest
docker.io/library/centos:latest
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
hello-world   latest    9c7a54a9a43c   <span class="token number">7</span> months ago   <span class="token number">13</span>.3kB
ubuntu        latest    ba6acccedd29   <span class="token number">2</span> years ago    <span class="token number">72</span>.8MB
centos        latest    5d0da3dc9764   <span class="token number">2</span> years ago    231MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-新建并启动容器" tabindex="-1"><a class="header-anchor" href="#_3-2-新建并启动容器" aria-hidden="true">#</a> 3.2 新建并启动容器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>OPTIONS说明</strong>：</p><p>有些是一个减号，有些是两个减号</p><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>--name</td><td>为容器指定一个名称</td></tr><tr><td>-d</td><td>后台运行容器并返回容器ID，也即启动守护式容器(后台运行)</td></tr><tr><td>-i</td><td>以交互模式运行容器，通常与 -t 同时使用</td></tr><tr><td>-t</td><td>为容器重新分配一个伪输入终端，通常与 -i 同时使用</td></tr><tr><td>-P</td><td>随机端口映射，大写P</td></tr><tr><td>-p</td><td>指定端口映射，小写p</td></tr></tbody></table><figure><img src="`+p+`" alt="image-20231209155857022" tabindex="0" loading="lazy"><figcaption>image-20231209155857022</figcaption></figure><p>启动交互式容器(前台命令行)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用镜像centos:latest以交互模式启动一个容器,在容器内执行/bin/bash命令。</span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> centos /bin/bash 

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker run -it centos /bin/bash</span>
<span class="token punctuation">[</span>root@d0fdd96c1acd /<span class="token punctuation">]</span><span class="token comment"># ps -ef</span>
<span class="token environment constant">UID</span>         PID   <span class="token environment constant">PPID</span>  C STIME TTY          TIME CMD
root          <span class="token number">1</span>      <span class="token number">0</span>  <span class="token number">0</span> 07:59 pts/0    00:00:00 /bin/bash
root         <span class="token number">15</span>      <span class="token number">1</span>  <span class="token number">0</span> 08:00 pts/0    00:00:00 <span class="token function">ps</span> <span class="token parameter variable">-ef</span>
<span class="token punctuation">[</span>root@d0fdd96c1acd /<span class="token punctuation">]</span><span class="token comment"># exit</span>
<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数说明：</strong></p><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>-i</td><td>交互式操作。</td></tr><tr><td>-t</td><td>终端</td></tr><tr><td>centos</td><td>centos 镜像。</td></tr><tr><td>/bin/bash</td><td>放在镜像名后的命令，这里我们希望有个交互式 Shell，因此用的是 /bin/bash</td></tr></tbody></table><p>要退出终端，直接输入 exit。</p><h3 id="_3-3-列出当前所有正在运行的容器" tabindex="-1"><a class="header-anchor" href="#_3-3-列出当前所有正在运行的容器" aria-hidden="true">#</a> 3.3 列出当前所有正在运行的容器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker ps [OPTIONS]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>OPTIONS说明（常用）：</p><p>-a ：列出当前所有正在运行的容器+<strong>历史上运行过</strong>的</p><p>-l ：显示最近创建的容器。</p><p>-n：显示最近n个创建的容器。</p><p>-q ：静默模式，只显示容器编号。</p><h3 id="_3-4-退出容器" tabindex="-1"><a class="header-anchor" href="#_3-4-退出容器" aria-hidden="true">#</a> 3.4 退出容器</h3><p>两种退出方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 方式一：run进入容器，exit退出，容器停止</span>
<span class="token builtin class-name">exit</span>
<span class="token comment"># 方式二：run进入容器，ctrl+p+q退出，容器不停止</span>
ctrl+p+q
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-启动已停止运行的容器" tabindex="-1"><a class="header-anchor" href="#_3-5-启动已停止运行的容器" aria-hidden="true">#</a> 3.5 启动已停止运行的容器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker start 容器ID或者容器名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-6-重启容器" tabindex="-1"><a class="header-anchor" href="#_3-6-重启容器" aria-hidden="true">#</a> 3.6 重启容器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> restart 容器ID或者容器名

<span class="token comment"># 创建容器的时候设置容器自动启动</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">--name</span> 容器名
<span class="token comment"># 已有容器设置容器自动启动</span>
<span class="token function">docker</span> update <span class="token parameter variable">--restart</span><span class="token operator">=</span>always 容器名（容器id）

--restart具体参数值详细信息：
no　　　　　　　   // 默认策略,容器退出时不重启容器；
on-failure　　   // 在容器非正常退出时（退出状态非0）才重新启动容器；
on-failure:3    // 在容器非正常退出时重启容器，最多重启3次；
always　　　　    // 无论退出状态是如何，都重启容器；
unless-stopped  // 在容器退出时总是重启容器，但是不考虑在 Docker 守护进程启动时就已经停止了的容器。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-7-停止容器" tabindex="-1"><a class="header-anchor" href="#_3-7-停止容器" aria-hidden="true">#</a> 3.7 停止容器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker stop 容器ID或者容器名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-8-强制停止容器" tabindex="-1"><a class="header-anchor" href="#_3-8-强制停止容器" aria-hidden="true">#</a> 3.8 强制停止容器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker kill 容器ID或容器名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-9-删除已停止的容器" tabindex="-1"><a class="header-anchor" href="#_3-9-删除已停止的容器" aria-hidden="true">#</a> 3.9 删除已停止的容器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 删除容器</span>
<span class="token function">docker</span> <span class="token function">rm</span> 容器ID
<span class="token comment"># 一次性删除多个容器实例</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-q</span><span class="token variable">)</span></span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-q</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">docker</span> <span class="token function">rm</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-10-前后台启动" tabindex="-1"><a class="header-anchor" href="#_3-10-前后台启动" aria-hidden="true">#</a> 3.10 前后台启动</h3><p><strong>启动守护式容器(后台服务器)</strong></p><p>在大部分的场景下，我们希望 docker 的服务是在后台运行的， 我们可以过 -d 指定容器的后台运行模式。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动守护式容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> 容器名
<span class="token comment"># 使用镜像centos:latest以后台模式启动一个容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> centos

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker run -d centos</span>
1ab739ee91994e9f0b9b871abfea2317a299b2822351167a2162125c56755924
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker ps -a</span>
CONTAINER ID   IMAGE         COMMAND       CREATED          STATUS                      PORTS     NAMES
1ab739ee9199   centos        <span class="token string">&quot;/bin/bash&quot;</span>   <span class="token number">32</span> seconds ago   Exited <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">31</span> seconds ago             busy_beaver
d0fdd96c1acd   centos        <span class="token string">&quot;/bin/bash&quot;</span>   <span class="token number">27</span> minutes ago   Exited <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">25</span> minutes ago             heuristic_euclid
8251c9623349   hello-world   <span class="token string">&quot;/hello&quot;</span>      <span class="token number">3</span> hours ago      Exited <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">3</span> hours ago                ecstatic_varahamihira
7c8de6523094   hello-world   <span class="token string">&quot;/hello&quot;</span>      <span class="token number">4</span> hours ago      Exited <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">4</span> hours ago                pedantic_thompson
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>问题</strong>：然后docker ps -a 进行查看, 会发现容器已经退出</p><p>很重要的要说明的一点: <strong>Docker容器后台运行,就必须有一个前台进程。</strong></p><p>容器运行的命令如果不是那些<strong>一直挂起的命令</strong>（比如运行top，tail），就是会自动退出的。</p><p>这个是docker的机制问题，比如你的web容器，我们以nginx为例，正常情况下,我们配置启动服务只需要启动响应的service即可。例如service nginx start。但是，这样做nginx为后台进程模式运行，就导致docker前台没有运行的应用，这样的容器后台启动后，会立即自杀因为他觉得他没事可做了。所以，最佳的解决方案是将你要运行的程序以前台进程的形式运行，常见就是命令行模式，表示我还有交互操作，别中断。</p><p><strong>redis 前后台启动演示case</strong></p><p>先下载一个Redis6.0.8镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker pull redis:6.0.8</span>
<span class="token number">6.0</span>.8: Pulling from library/redis
bb79b6b2107f: Pull complete
1ed3521a5dcb: Pull complete
5999b99cee8f: Pull complete
3f806f5245c9: Pull complete
f8a4497572b2: Pull complete
eafe3b6b8d06: Pull complete
Digest: sha256:21db12e5ab3cc343e9376d655e8eabbdbe5516801373e95a8a9e66010c5b8819
Status: Downloaded newer image <span class="token keyword">for</span> redis:6.0.8
docker.io/library/redis:6.0.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前台交互式启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> redis:6.0.8

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker run -it redis:6.0.8</span>
<span class="token number">1</span>:C 09 Dec <span class="token number">2023</span> 08:30:24.742 <span class="token comment"># oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo</span>
<span class="token number">1</span>:C 09 Dec <span class="token number">2023</span> 08:30:24.742 <span class="token comment"># Redis version=6.0.8, bits=64, commit=00000000, modified=0, pid=1, just started</span>
<span class="token number">1</span>:C 09 Dec <span class="token number">2023</span> 08:30:24.742 <span class="token comment"># Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf</span>
                _._
           _.-\`<span class="token variable"><span class="token variable">\`</span>__ <span class="token string">&#39;&#39;</span>-._
      _.-<span class="token variable">\`</span></span><span class="token variable"><span class="token variable">\`</span>    <span class="token variable">\`</span></span><span class="token builtin class-name">.</span>  <span class="token variable"><span class="token variable">\`</span>_.  <span class="token string">&#39;&#39;</span>-._           Redis <span class="token number">6.0</span>.8 <span class="token punctuation">(</span>00000000/0<span class="token punctuation">)</span> <span class="token number">64</span> bit
  .-<span class="token variable">\`</span></span><span class="token variable"><span class="token variable">\`</span> .-<span class="token variable">\`</span></span>\`<span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">.</span>  <span class="token variable">\`</span></span>\`<span class="token variable"><span class="token variable">\`</span><span class="token punctuation">\\</span>/    _.,_ <span class="token string">&#39;&#39;</span>-._
 <span class="token punctuation">(</span>    &#39;      ,       .-<span class="token variable">\`</span></span>  <span class="token operator">|</span> <span class="token variable"><span class="token variable">\`</span>,    <span class="token punctuation">)</span>     Running <span class="token keyword">in</span> standalone mode
 <span class="token operator">|</span><span class="token variable">\`</span></span>-._<span class="token variable"><span class="token variable">\`</span>-<span class="token punctuation">..</span>.-<span class="token variable">\`</span></span> __<span class="token punctuation">..</span>.-.\`<span class="token variable"><span class="token variable">\`</span>-._<span class="token operator">|</span>&#39;<span class="token variable">\`</span></span> _.-<span class="token string">&#39;|     Port: 6379
 |    \`-._   \`._    /     _.-&#39;</span>    <span class="token operator">|</span>     PID: <span class="token number">1</span>
  <span class="token variable"><span class="token variable">\`</span>-._    <span class="token variable">\`</span></span>-._  <span class="token variable"><span class="token variable">\`</span>-./  _.-<span class="token string">&#39;    _.-&#39;</span>
 <span class="token operator">|</span><span class="token variable">\`</span></span>-._<span class="token variable"><span class="token variable">\`</span>-._    <span class="token variable">\`</span></span>-.__.-<span class="token string">&#39;    _.-&#39;</span>_.-<span class="token string">&#39;|
 |    \`-._\`-._        _.-&#39;</span>_.-<span class="token string">&#39;    |           http://redis.io
  \`-._    \`-._\`-.__.-&#39;</span>_.-<span class="token string">&#39;    _.-&#39;</span>
 <span class="token operator">|</span><span class="token variable"><span class="token variable">\`</span>-._<span class="token variable">\`</span></span>-._    <span class="token variable"><span class="token variable">\`</span>-.__.-<span class="token string">&#39;    _.-&#39;</span>_.-&#39;<span class="token operator">|</span>
 <span class="token operator">|</span>    <span class="token variable">\`</span></span>-._<span class="token variable"><span class="token variable">\`</span>-._        _.-<span class="token string">&#39;_.-&#39;</span>    <span class="token operator">|</span>
  <span class="token variable">\`</span></span>-._    <span class="token variable"><span class="token variable">\`</span>-._<span class="token variable">\`</span></span>-.__.-<span class="token string">&#39;_.-&#39;</span>    _.-<span class="token string">&#39;
      \`-._    \`-.__.-&#39;</span>    _.-<span class="token string">&#39;
          \`-._        _.-&#39;</span>
              \`-.__.-<span class="token string">&#39;

1:M 09 Dec 2023 08:30:24.743 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
1:M 09 Dec 2023 08:30:24.743 # Server initialized
1:M 09 Dec 2023 08:30:24.743 # WARNING overcommit_memory is set to 0! Background save may fail under low memory condition. To fix this issue add &#39;</span>vm.overcommit_memory <span class="token operator">=</span> <span class="token number">1</span><span class="token string">&#39; to /etc/sysctl.conf and then reboot or run the command &#39;</span><span class="token function">sysctl</span> <span class="token assign-left variable">vm.overcommit_memory</span><span class="token operator">=</span><span class="token number">1</span><span class="token string">&#39; for this to take effect.
1:M 09 Dec 2023 08:30:24.743 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command &#39;</span><span class="token builtin class-name">echo</span> madvise <span class="token operator">&gt;</span> /sys/kernel/mm/transparent_hugepage/enabled<span class="token string">&#39; as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled (set to &#39;</span>madvise<span class="token string">&#39; or &#39;</span>never&#39;<span class="token punctuation">)</span>.
<span class="token number">1</span>:M 09 Dec <span class="token number">2023</span> 08:30:24.744 * Ready to accept connections
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后台守护式启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> redis:6.0.8

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker run -d redis:6.0.8</span>
d57d5938a2eeefb299b7d1a115a859f00cdba13286ebdb51cd61b4839d5351e3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-11-查看容器日志" tabindex="-1"><a class="header-anchor" href="#_3-11-查看容器日志" aria-hidden="true">#</a> 3.11 查看容器日志</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> logs 容器ID

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker logs d57d5938a2eeefb299b7d1a115a859f00cdba13286ebdb51cd61b4839d5351e3</span>
<span class="token number">1</span>:C 09 Dec <span class="token number">2023</span> 08:31:05.239 <span class="token comment"># oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo</span>
<span class="token number">1</span>:C 09 Dec <span class="token number">2023</span> 08:31:05.239 <span class="token comment"># Redis version=6.0.8, bits=64, commit=00000000, modified=0, pid=1, just started</span>
<span class="token number">1</span>:C 09 Dec <span class="token number">2023</span> 08:31:05.239 <span class="token comment"># Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf</span>
<span class="token number">1</span>:M 09 Dec <span class="token number">2023</span> 08:31:05.241 * Running <span class="token assign-left variable">mode</span><span class="token operator">=</span>standalone, <span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">6379</span>.
<span class="token number">1</span>:M 09 Dec <span class="token number">2023</span> 08:31:05.241 <span class="token comment"># WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.</span>
<span class="token number">1</span>:M 09 Dec <span class="token number">2023</span> 08:31:05.241 <span class="token comment"># Server initialized</span>
<span class="token number">1</span>:M 09 Dec <span class="token number">2023</span> 08:31:05.241 <span class="token comment"># WARNING overcommit_memory is set to 0! Background save may fail under low memory condition. To fix this issue add &#39;vm.overcommit_memory = 1&#39; to /etc/sysctl.conf and then reboot or run the command &#39;sysctl vm.overcommit_memory=1&#39; for this to take effect.</span>
<span class="token number">1</span>:M 09 Dec <span class="token number">2023</span> 08:31:05.241 <span class="token comment"># WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command &#39;echo madvise &gt; /sys/kernel/mm/transparent_hugepage/enabled&#39; as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled (set to &#39;madvise&#39; or &#39;never&#39;).</span>
<span class="token number">1</span>:M 09 Dec <span class="token number">2023</span> 08:31:05.242 * Ready to accept connections

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-12-查看容器内运行的进程" tabindex="-1"><a class="header-anchor" href="#_3-12-查看容器内运行的进程" aria-hidden="true">#</a> 3.12 查看容器内运行的进程</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">top</span> 容器ID

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker top d57d5938a2ee</span>
<span class="token environment constant">UID</span>                 PID                 <span class="token environment constant">PPID</span>                C                   STIME               TTY                 TIME                CMD
polkitd             <span class="token number">128967</span>              <span class="token number">128948</span>              <span class="token number">0</span>                   <span class="token number">16</span>:31               ?                   00:00:00            redis-server *:6379
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-13-查看容器内部细节" tabindex="-1"><a class="header-anchor" href="#_3-13-查看容器内部细节" aria-hidden="true">#</a> 3.13 查看容器内部细节</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> inspect 容器ID

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker inspect d57d5938a2ee</span>
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;Id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;d57d5938a2eeefb299b7d1a115a859f00cdba13286ebdb51cd61b4839d5351e3&quot;</span>,
        <span class="token string">&quot;Created&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2023-12-09T08:31:04.940199311Z&quot;</span>,
        <span class="token string">&quot;Path&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;docker-entrypoint.sh&quot;</span>,
        <span class="token string">&quot;Args&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;redis-server&quot;</span>
        <span class="token punctuation">]</span>,
        <span class="token string">&quot;State&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Status&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;running&quot;</span>,
            <span class="token string">&quot;Running&quot;</span><span class="token builtin class-name">:</span> true,
            <span class="token string">&quot;Paused&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;Restarting&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;OOMKilled&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;Dead&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;Pid&quot;</span><span class="token builtin class-name">:</span> <span class="token number">128967</span>,
            <span class="token string">&quot;ExitCode&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;Error&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;StartedAt&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2023-12-09T08:31:05.229035407Z&quot;</span>,
            <span class="token string">&quot;FinishedAt&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;0001-01-01T00:00:00Z&quot;</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;Image&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;sha256:16ecd277293476392b71021cdd585c40ad68f4a7488752eede95928735e39df4&quot;</span>,
        <span class="token string">&quot;ResolvConfPath&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/containers/d57d5938a2eeefb299b7d1a115a859f00cdba13286ebdb51cd61b4839d5351e3/resolv.conf&quot;</span>,
        <span class="token string">&quot;HostnamePath&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/containers/d57d5938a2eeefb299b7d1a115a859f00cdba13286ebdb51cd61b4839d5351e3/hostname&quot;</span>,
        <span class="token string">&quot;HostsPath&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/containers/d57d5938a2eeefb299b7d1a115a859f00cdba13286ebdb51cd61b4839d5351e3/hosts&quot;</span>,
        <span class="token string">&quot;LogPath&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/containers/d57d5938a2eeefb299b7d1a115a859f00cdba13286ebdb51cd61b4839d5351e3/d57d5938a2eeefb299b7d1a115a859f00cdba13286ebdb51cd61b4839d5351e3-json.log&quot;</span>,
        <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/objective_rhodes&quot;</span>,
        <span class="token string">&quot;RestartCount&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
        <span class="token string">&quot;Driver&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;overlay2&quot;</span>,
        <span class="token string">&quot;Platform&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;linux&quot;</span>,
        <span class="token string">&quot;MountLabel&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;ProcessLabel&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;AppArmorProfile&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;ExecIDs&quot;</span><span class="token builtin class-name">:</span> null,
        <span class="token string">&quot;HostConfig&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Binds&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;ContainerIDFile&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;LogConfig&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;Type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;json-file&quot;</span>,
                <span class="token string">&quot;Config&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;NetworkMode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;default&quot;</span>,
            <span class="token string">&quot;PortBindings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>,
            <span class="token string">&quot;RestartPolicy&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;no&quot;</span>,
                <span class="token string">&quot;MaximumRetryCount&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;AutoRemove&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;VolumeDriver&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;VolumesFrom&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;ConsoleSize&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token number">81</span>,
                <span class="token number">135</span>
            <span class="token punctuation">]</span>,
            <span class="token string">&quot;CapAdd&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;CapDrop&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;CgroupnsMode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;host&quot;</span>,
            <span class="token string">&quot;Dns&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">&quot;DnsOptions&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">&quot;DnsSearch&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">&quot;ExtraHosts&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;GroupAdd&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;IpcMode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;private&quot;</span>,
            <span class="token string">&quot;Cgroup&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;Links&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;OomScoreAdj&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;PidMode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;Privileged&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;PublishAllPorts&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;ReadonlyRootfs&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;SecurityOpt&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;UTSMode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;UsernsMode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;ShmSize&quot;</span><span class="token builtin class-name">:</span> <span class="token number">67108864</span>,
            <span class="token string">&quot;Runtime&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;runc&quot;</span>,
            <span class="token string">&quot;Isolation&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;CpuShares&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;Memory&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;NanoCpus&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;CgroupParent&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;BlkioWeight&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;BlkioWeightDevice&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">&quot;BlkioDeviceReadBps&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">&quot;BlkioDeviceWriteBps&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">&quot;BlkioDeviceReadIOps&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">&quot;BlkioDeviceWriteIOps&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">&quot;CpuPeriod&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;CpuQuota&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;CpuRealtimePeriod&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;CpuRealtimeRuntime&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;CpusetCpus&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;CpusetMems&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;Devices&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
            <span class="token string">&quot;DeviceCgroupRules&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;DeviceRequests&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;MemoryReservation&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;MemorySwap&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;MemorySwappiness&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;OomKillDisable&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;PidsLimit&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;Ulimits&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;CpuCount&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;CpuPercent&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;IOMaximumIOps&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;IOMaximumBandwidth&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;MaskedPaths&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;/proc/asound&quot;</span>,
                <span class="token string">&quot;/proc/acpi&quot;</span>,
                <span class="token string">&quot;/proc/kcore&quot;</span>,
                <span class="token string">&quot;/proc/keys&quot;</span>,
                <span class="token string">&quot;/proc/latency_stats&quot;</span>,
                <span class="token string">&quot;/proc/timer_list&quot;</span>,
                <span class="token string">&quot;/proc/timer_stats&quot;</span>,
                <span class="token string">&quot;/proc/sched_debug&quot;</span>,
                <span class="token string">&quot;/proc/scsi&quot;</span>,
                <span class="token string">&quot;/sys/firmware&quot;</span>,
                <span class="token string">&quot;/sys/devices/virtual/powercap&quot;</span>
            <span class="token punctuation">]</span>,
            <span class="token string">&quot;ReadonlyPaths&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;/proc/bus&quot;</span>,
                <span class="token string">&quot;/proc/fs&quot;</span>,
                <span class="token string">&quot;/proc/irq&quot;</span>,
                <span class="token string">&quot;/proc/sys&quot;</span>,
                <span class="token string">&quot;/proc/sysrq-trigger&quot;</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;GraphDriver&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Data&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;LowerDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/overlay2/61a7ebc36b282073014876746f26bdc4de54f72e3f7f660dd3deeda93e0fe611-init/diff:/var/lib/docker/overlay2/4e45bfa9ca59bda98d6b2fe03af2fa2ce287303e5bdff3513d82a4f760895021/diff:/var/lib/docker/overlay2/77f79090e95761d6c9e7cbb94fd1a86b3a1e80b08a7c576e8ebb8e827cf2247a/diff:/var/lib/docker/overlay2/bc9b1cf55c46bda07cb5b4abbe29dca5b5dd3e270fc2db13131240b5e47d8021/diff:/var/lib/docker/overlay2/5f070fabd74df8575674ad98674532f835c1bd6a6b706d3864feeb10e21533a2/diff:/var/lib/docker/overlay2/c6f03c472826e1e279e1bcc52263cd797a37641892d946abab23c9f80cdfe52f/diff:/var/lib/docker/overlay2/b83813e2065169bd59a8e110838d6e0837af494c979d1245f0fb2e2083c9f263/diff&quot;</span>,
                <span class="token string">&quot;MergedDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/overlay2/61a7ebc36b282073014876746f26bdc4de54f72e3f7f660dd3deeda93e0fe611/merged&quot;</span>,
                <span class="token string">&quot;UpperDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/overlay2/61a7ebc36b282073014876746f26bdc4de54f72e3f7f660dd3deeda93e0fe611/diff&quot;</span>,
                <span class="token string">&quot;WorkDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/overlay2/61a7ebc36b282073014876746f26bdc4de54f72e3f7f660dd3deeda93e0fe611/work&quot;</span>
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;overlay2&quot;</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;Mounts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token string">&quot;Type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;volume&quot;</span>,
                <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;a872635a8cdf45ec3a18b4dcd52d52f5ba6709965db2cb5f589a4385b7bac6d1&quot;</span>,
                <span class="token string">&quot;Source&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/volumes/a872635a8cdf45ec3a18b4dcd52d52f5ba6709965db2cb5f589a4385b7bac6d1/_data&quot;</span>,
                <span class="token string">&quot;Destination&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/data&quot;</span>,
                <span class="token string">&quot;Driver&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;local&quot;</span>,
                <span class="token string">&quot;Mode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                <span class="token string">&quot;RW&quot;</span><span class="token builtin class-name">:</span> true,
                <span class="token string">&quot;Propagation&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>,
        <span class="token string">&quot;Config&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Hostname&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;d57d5938a2ee&quot;</span>,
            <span class="token string">&quot;Domainname&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;User&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;AttachStdin&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;AttachStdout&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;AttachStderr&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;ExposedPorts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;6379/tcp&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;Tty&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;OpenStdin&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;StdinOnce&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;Env&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin&quot;</span>,
                <span class="token string">&quot;GOSU_VERSION=1.12&quot;</span>,
                <span class="token string">&quot;REDIS_VERSION=6.0.8&quot;</span>,
                <span class="token string">&quot;REDIS_DOWNLOAD_URL=http://download.redis.io/releases/redis-6.0.8.tar.gz&quot;</span>,
                <span class="token string">&quot;REDIS_DOWNLOAD_SHA=04fa1fddc39bd1aecb6739dd5dd73858a3515b427acd1e2947a66dadce868d68&quot;</span>
            <span class="token punctuation">]</span>,
            <span class="token string">&quot;Cmd&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;redis-server&quot;</span>
            <span class="token punctuation">]</span>,
            <span class="token string">&quot;Image&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;redis:6.0.8&quot;</span>,
            <span class="token string">&quot;Volumes&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;/data&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;WorkingDir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/data&quot;</span>,
            <span class="token string">&quot;Entrypoint&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;docker-entrypoint.sh&quot;</span>
            <span class="token punctuation">]</span>,
            <span class="token string">&quot;OnBuild&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;Labels&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;NetworkSettings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Bridge&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;SandboxID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;c311507c1479592690c63dd72d6f943d9ad0fc3a88baf6252307af643776b9e6&quot;</span>,
            <span class="token string">&quot;HairpinMode&quot;</span><span class="token builtin class-name">:</span> false,
            <span class="token string">&quot;LinkLocalIPv6Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;LinkLocalIPv6PrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;Ports&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;6379/tcp&quot;</span><span class="token builtin class-name">:</span> null
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;SandboxKey&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/run/docker/netns/c311507c1479&quot;</span>,
            <span class="token string">&quot;SecondaryIPAddresses&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;SecondaryIPv6Addresses&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;EndpointID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;158f3f892e664358ead2cb078846dd0f1e01a5c9664cc1440d28aa32f464151e&quot;</span>,
            <span class="token string">&quot;Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.17.0.1&quot;</span>,
            <span class="token string">&quot;GlobalIPv6Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;GlobalIPv6PrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
            <span class="token string">&quot;IPAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.17.0.2&quot;</span>,
            <span class="token string">&quot;IPPrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">16</span>,
            <span class="token string">&quot;IPv6Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
            <span class="token string">&quot;MacAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;02:42:ac:11:00:02&quot;</span>,
            <span class="token string">&quot;Networks&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;bridge&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                    <span class="token string">&quot;IPAMConfig&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;Links&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;Aliases&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;NetworkID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ec46267af6972d3e6ee14f5712b2b2681a3e381be9087a5f87d8c26c12dd3e8d&quot;</span>,
                    <span class="token string">&quot;EndpointID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;158f3f892e664358ead2cb078846dd0f1e01a5c9664cc1440d28aa32f464151e&quot;</span>,
                    <span class="token string">&quot;Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.17.0.1&quot;</span>,
                    <span class="token string">&quot;IPAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.17.0.2&quot;</span>,
                    <span class="token string">&quot;IPPrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">16</span>,
                    <span class="token string">&quot;IPv6Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                    <span class="token string">&quot;GlobalIPv6Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                    <span class="token string">&quot;GlobalIPv6PrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
                    <span class="token string">&quot;MacAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;02:42:ac:11:00:02&quot;</span>,
                    <span class="token string">&quot;DriverOpts&quot;</span><span class="token builtin class-name">:</span> null
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-14-进入正在运行的容器并以命令行交互" tabindex="-1"><a class="header-anchor" href="#_3-14-进入正在运行的容器并以命令行交互" aria-hidden="true">#</a> 3.14 进入正在运行的容器并以命令行交互</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 容器ID bashShell

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE         COMMAND                   CREATED          STATUS          PORTS      NAMES
d57d5938a2ee   redis:6.0.8   <span class="token string">&quot;docker-entrypoint.s…&quot;</span>   <span class="token number">15</span> minutes ago   Up <span class="token number">15</span> minutes   <span class="token number">6379</span>/tcp   objective_rhodes
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker exec -it d57d5938a2ee /bin/bash</span>
root@d57d5938a2ee:/data<span class="token comment">#</span>
root@d57d5938a2ee:/data<span class="token comment"># exit</span>
<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker exec --help</span>

Usage:  <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> CONTAINER COMMAND <span class="token punctuation">[</span>ARG<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

Execute a <span class="token builtin class-name">command</span> <span class="token keyword">in</span> a running container

Aliases:
  <span class="token function">docker</span> container exec, <span class="token function">docker</span> <span class="token builtin class-name">exec</span>

Options:
  -d, <span class="token parameter variable">--detach</span>               Detached mode: run <span class="token builtin class-name">command</span> <span class="token keyword">in</span> the background
      --detach-keys string   Override the key sequence <span class="token keyword">for</span> detaching a container
  -e, <span class="token parameter variable">--env</span> list             Set environment variables
      --env-file list        Read <span class="token keyword">in</span> a <span class="token function">file</span> of environment variables
  -i, <span class="token parameter variable">--interactive</span>          Keep STDIN <span class="token function">open</span> even <span class="token keyword">if</span> not attached
      <span class="token parameter variable">--privileged</span>           Give extended privileges to the <span class="token builtin class-name">command</span>
  -t, <span class="token parameter variable">--tty</span>                  Allocate a pseudo-TTY
  -u, <span class="token parameter variable">--user</span> string          Username or <span class="token environment constant">UID</span> <span class="token punctuation">(</span>format: <span class="token string">&quot;&lt;name|uid&gt;[:&lt;group|gid&gt;]&quot;</span><span class="token punctuation">)</span>
  -w, <span class="token parameter variable">--workdir</span> string       Working directory inside the container
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新进入<code>docker attach 容器ID</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker attach --help</span>

Usage:  <span class="token function">docker</span> attach <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> CONTAINER

Attach <span class="token builtin class-name">local</span> standard input, output, and error streams to a running container

Aliases:
  <span class="token function">docker</span> container attach, <span class="token function">docker</span> attach

Options:
      --detach-keys string   Override the key sequence <span class="token keyword">for</span> detaching a container
      --no-stdin             Do not attach STDIN
      --sig-proxy            Proxy all received signals to the process <span class="token punctuation">(</span>default <span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>上述两个区别？</strong></p><p>attach 直接进入容器启动命令的终端，不会启动新的进程 用exit退出，会导致容器的停止。</p><figure><img src="`+r+'" alt="image-20231209165648308" tabindex="0" loading="lazy"><figcaption>image-20231209165648308</figcaption></figure><p>exec 是在容器中打开新的终端，并且可以启动新的进程 用exit退出，不会导致容器的停止。</p><figure><img src="'+d+`" alt="image-20231209165653024" tabindex="0" loading="lazy"><figcaption>image-20231209165653024</figcaption></figure><p><strong>推荐大家使用 docker exec 命令，因为退出容器终端，不会导致容器的停止。</strong></p><p>用之前的redis容器实例进入试试</p><p>进入redis服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 容器ID /bin/bash
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 容器ID redis-cli

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE         COMMAND                   CREATED          STATUS         PORTS      NAMES
d57d5938a2ee   redis:6.0.8   <span class="token string">&quot;docker-entrypoint.s…&quot;</span>   <span class="token number">27</span> minutes ago   Up <span class="token number">6</span> seconds   <span class="token number">6379</span>/tcp   objective_rhodes
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker exec -it d57d5938a2ee /bin/bash</span>
root@d57d5938a2ee:/data<span class="token comment"># redis-cli -p 6379</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token function">ping</span>
PONG
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k1 v1
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get k1
<span class="token string">&quot;v1&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">exit</span>
root@d57d5938a2ee:/data<span class="token comment"># exit</span>
<span class="token builtin class-name">exit</span>

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker exec -it d57d5938a2ee redis-cli</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token function">ping</span>
PONG
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get k1
<span class="token string">&quot;v1&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-15-从容器内拷贝文件到主机上" tabindex="-1"><a class="header-anchor" href="#_3-15-从容器内拷贝文件到主机上" aria-hidden="true">#</a> 3.15 从容器内拷贝文件到主机上</h3><p>容器→主机</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">cp</span> 容器ID:容器内路径 目的主机路径

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker run -it ubuntu</span>
root@10f63e8136be:/<span class="token comment"># cd /tmp</span>
root@10f63e8136be:/tmp<span class="token comment"># touch a.txt</span>
root@10f63e8136be:/tmp<span class="token comment"># ls</span>
a.txt

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE     COMMAND   CREATED          STATUS          PORTS     NAMES
10f63e8136be   ubuntu    <span class="token string">&quot;bash&quot;</span>    <span class="token number">13</span> seconds ago   Up <span class="token number">13</span> seconds             elastic_heyrovsky
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker cp 10f63e8136be:/tmp/a.txt /tmp/a.txt</span>
Successfully copied <span class="token number">1</span>.54kB to /tmp/a.txt
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># cd /tmp</span>
<span class="token punctuation">[</span>root@192 tmp<span class="token punctuation">]</span><span class="token comment"># ll</span>
总用量 <span class="token number">0</span>
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">0</span> <span class="token number">12</span>月  <span class="token number">9</span> <span class="token number">17</span>:06 a.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-16-导入和导出容器" tabindex="-1"><a class="header-anchor" href="#_3-16-导入和导出容器" aria-hidden="true">#</a> 3.16 导入和导出容器</h3><p><code>export </code>导出容器的内容留作为一个tar归档文件[对应import命令]</p><p><code>import </code>从tar包中的内容创建一个新的文件系统再导入为镜像[对应export]</p><p>案例：</p><p>导出容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">export</span> 容器ID <span class="token operator">&gt;</span> 文件名.tar

<span class="token punctuation">[</span>root@192 tmp<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE     COMMAND   CREATED         STATUS         PORTS     NAMES
10f63e8136be   ubuntu    <span class="token string">&quot;bash&quot;</span>    <span class="token number">4</span> minutes ago   Up <span class="token number">4</span> minutes             elastic_heyrovsky
<span class="token punctuation">[</span>root@192 tmp<span class="token punctuation">]</span><span class="token comment"># docker export 10f63e8136be &gt; abcd.tar.gz</span>
<span class="token punctuation">[</span>root@192 tmp<span class="token punctuation">]</span><span class="token comment"># ll</span>
总用量 <span class="token number">73400</span>
-rw-r--r--. <span class="token number">1</span> root root <span class="token number">75158016</span> <span class="token number">12</span>月  <span class="token number">9</span> <span class="token number">17</span>:11 abcd.tar.gz
-rw-r--r--. <span class="token number">1</span> root root        <span class="token number">0</span> <span class="token number">12</span>月  <span class="token number">9</span> <span class="token number">17</span>:06 a.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导入镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> 文件名.tar <span class="token operator">|</span> <span class="token function">docker</span> <span class="token function">import</span> - 镜像用户/镜像名:镜像版本号

<span class="token punctuation">[</span>root@192 tmp<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE     COMMAND   CREATED         STATUS         PORTS     NAMES
10f63e8136be   ubuntu    <span class="token string">&quot;bash&quot;</span>    <span class="token number">5</span> minutes ago   Up <span class="token number">5</span> minutes             elastic_heyrovsky
<span class="token punctuation">[</span>root@192 tmp<span class="token punctuation">]</span><span class="token comment"># docker stop 10f63e8136be</span>
10f63e8136be
<span class="token punctuation">[</span>root@192 tmp<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
<span class="token punctuation">[</span>root@192 tmp<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
hello-world   latest    9c7a54a9a43c   <span class="token number">7</span> months ago   <span class="token number">13</span>.3kB
ubuntu        latest    ba6acccedd29   <span class="token number">2</span> years ago    <span class="token number">72</span>.8MB
centos        latest    5d0da3dc9764   <span class="token number">2</span> years ago    231MB
redis         <span class="token number">6.0</span>.8     16ecd2772934   <span class="token number">3</span> years ago    104MB
<span class="token punctuation">[</span>root@192 tmp<span class="token punctuation">]</span><span class="token comment"># docker rmi -f ubuntu</span>
Untagged: ubuntu:latest
Untagged: ubuntu@sha256:626ffe58f6e7566e00254b638eb7e0f3b11d4da9675088f4781a50ae288f3322
Deleted: sha256:ba6acccedd2923aee4c2acc6a23780b14ed4b8a5fa4e14e252a23b846df9b6c1
<span class="token punctuation">[</span>root@192 tmp<span class="token punctuation">]</span><span class="token comment"># cat abcd.tar.gz | docker import - gm/ubuntu:2.1</span>
sha256:30f0992678cbb79ace53d88dc0021602970daaf76fb75ccc7527702e8e540a5f
<span class="token punctuation">[</span>root@192 tmp<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY    TAG       IMAGE ID       CREATED         SIZE
gm/ubuntu     <span class="token number">2.1</span>       30f0992678cb   <span class="token number">3</span> seconds ago   <span class="token number">72</span>.8MB
hello-world   latest    9c7a54a9a43c   <span class="token number">7</span> months ago    <span class="token number">13</span>.3kB
centos        latest    5d0da3dc9764   <span class="token number">2</span> years ago     231MB
redis         <span class="token number">6.0</span>.8     16ecd2772934   <span class="token number">3</span> years ago     104MB
<span class="token punctuation">[</span>root@192 tmp<span class="token punctuation">]</span><span class="token comment"># docker run -it gm/ubuntu:2.1 /bin/bash</span>
root@bb24dfdf55fa:/<span class="token comment"># cd /tmp</span>
root@bb24dfdf55fa:/tmp<span class="token comment"># ls</span>
a.txt
root@bb24dfdf55fa:/tmp<span class="token comment"># exit</span>
<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-总结" tabindex="-1"><a class="header-anchor" href="#_4-总结" aria-hidden="true">#</a> 4 总结</h2><figure><img src="`+u+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>attach    Attach to a running container                 <span class="token comment"># 当前 shell 下 attach 连接指定运行镜像</span>

build     Build an image from a Dockerfile              <span class="token comment"># 通过 Dockerfile 定制镜像</span>

commit    Create a new image from a container changes   <span class="token comment"># 提交当前容器为新的镜像</span>

<span class="token function">cp</span>        Copy files/folders from the containers filesystem to the <span class="token function">host</span> path   <span class="token comment">#从容器中拷贝指定文件或者目录到宿主机中</span>

create    Create a new container                        <span class="token comment"># 创建一个新的容器，同 run，但不启动容器</span>

<span class="token function">diff</span>      Inspect changes on a container&#39;s filesystem   <span class="token comment"># 查看 docker 容器变化</span>

events    Get real <span class="token function">time</span> events from the server          <span class="token comment"># 从 docker 服务获取容器实时事件</span>

<span class="token builtin class-name">exec</span>      Run a <span class="token builtin class-name">command</span> <span class="token keyword">in</span> an existing container        <span class="token comment"># 在已存在的容器上运行命令</span>

<span class="token builtin class-name">export</span>    Stream the contents of a container as a <span class="token function">tar</span> archive   <span class="token comment"># 导出容器的内容流作为一个 tar 归档文件[对应 import ]</span>

<span class="token function">history</span>   Show the <span class="token function">history</span> of an image                  <span class="token comment"># 展示一个镜像形成历史</span>

images    List images                                   <span class="token comment"># 列出系统当前镜像</span>

<span class="token function">import</span>    Create a new filesystem image from the contents of a tarball <span class="token comment"># 从tar包中的内容创建一个新的文件系统映像[对应export]</span>

info      Display system-wide information               <span class="token comment"># 显示系统相关信息</span>

inspect   Return low-level information on a container   <span class="token comment"># 查看容器详细信息</span>

<span class="token function">kill</span>      Kill a running container                      <span class="token comment"># kill 指定 docker 容器</span>

load      Load an image from a <span class="token function">tar</span> archive              <span class="token comment"># 从一个 tar 包中加载一个镜像[对应 save]</span>

login     Register or Login to the <span class="token function">docker</span> registry server    <span class="token comment"># 注册或者登陆一个 docker 源服务器</span>

<span class="token builtin class-name">logout</span>    Log out from a Docker registry server          <span class="token comment"># 从当前 Docker registry 退出</span>

logs      Fetch the logs of a container                 <span class="token comment"># 输出当前容器日志信息</span>

port      Lookup the public-facing port <span class="token function">which</span> is NAT-ed to PRIVATE_PORT    <span class="token comment"># 查看映射端口对应的容器内部源端口</span>

pause     Pause all processes within a container        <span class="token comment"># 暂停容器</span>

<span class="token function">ps</span>        List containers                               <span class="token comment"># 列出容器列表</span>

pull      Pull an image or a repository from the <span class="token function">docker</span> registry server   <span class="token comment"># 从docker镜像源服务器拉取指定镜像或者库镜像</span>

push      Push an image or a repository to the <span class="token function">docker</span> registry server    <span class="token comment"># 推送指定镜像或者库镜像至docker源服务器</span>

restart   Restart a running container                   <span class="token comment"># 重启运行的容器</span>

<span class="token function">rm</span>        Remove one or <span class="token function">more</span> containers                 <span class="token comment"># 移除一个或者多个容器</span>

rmi       Remove one or <span class="token function">more</span> images       <span class="token comment"># 移除一个或多个镜像[无容器使用该镜像才可删除，否则需删除相关容器才可继续或 -f 强制删除]</span>

run       Run a <span class="token builtin class-name">command</span> <span class="token keyword">in</span> a new container              <span class="token comment"># 创建一个新的容器并运行一个命令</span>

save      Save an image to a <span class="token function">tar</span> archive                <span class="token comment"># 保存一个镜像为一个 tar 包[对应 load]</span>

search    Search <span class="token keyword">for</span> an image on the Docker Hub         <span class="token comment"># 在 docker hub 中搜索镜像</span>

start     Start a stopped containers                    <span class="token comment"># 启动容器</span>

stop      Stop a running containers                     <span class="token comment"># 停止容器</span>

tag       Tag an image into a repository                <span class="token comment"># 给源中镜像打标签</span>

<span class="token function">top</span>       Lookup the running processes of a container   <span class="token comment"># 查看容器中运行的进程信息</span>

unpause   Unpause a paused container                    <span class="token comment"># 取消暂停容器</span>

version   Show the <span class="token function">docker</span> version information           <span class="token comment"># 查看 docker 版本号</span>

<span class="token function">wait</span>      Block <span class="token keyword">until</span> a container stops, <span class="token keyword">then</span> print its <span class="token builtin class-name">exit</span> code   <span class="token comment"># 截取容器停止时的退出状态值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,102);function g(q,h){const e=i("ExternalLinkIcon");return l(),o("div",null,[b,n("p",null,[s("网站："),n("a",v,[s("https://hub.docker.com"),c(e)])]),k])}const y=t(m,[["render",g],["__file","03-Docker常用命令.html.vue"]]);export{y as default};
