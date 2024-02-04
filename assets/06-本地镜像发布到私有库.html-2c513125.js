import{_ as t}from"./image-20231209180424529-4160243f.js";import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as l,c as i,a as n,b as s,d as o,e as a}from"./app-af5679fc.js";const u={},r=a('<h1 id="本地镜像发布到私有库" tabindex="-1"><a class="header-anchor" href="#本地镜像发布到私有库" aria-hidden="true">#</a> 本地镜像发布到私有库</h1><p>阿里云ECS Docker生态如下图所示：</p><figure><img src="'+t+'" alt="image-20231209180424529" tabindex="0" loading="lazy"><figcaption>image-20231209180424529</figcaption></figure><h2 id="_1-是什么" tabindex="-1"><a class="header-anchor" href="#_1-是什么" aria-hidden="true">#</a> 1 是什么</h2>',4),d={href:"https://hub.docker.com/%EF%BC%8C%E4%B8%AD%E5%9B%BD%E5%A4%A7%E9%99%86%E8%AE%BF%E9%97%AE%E5%A4%AA%E6%85%A2%E4%BA%86%E4%B8%94%E5%87%86%E5%A4%87%E8%A2%AB%E9%98%BF%E9%87%8C%E4%BA%91%E5%8F%96%E4%BB%A3%E7%9A%84%E8%B6%8B%E5%8A%BF%EF%BC%8C%E4%B8%8D%E5%A4%AA%E4%B8%BB%E6%B5%81%E3%80%82",target:"_blank",rel:"noopener noreferrer"},m=a(`<p>Dockerhub、阿里云这样的公共镜像仓库可能不太方便，涉及机密的公司不可能提供镜像给公网，所以需要创建一个本地私人仓库供给团队使用，基于公司内部项目构建镜像。</p><p>Docker Registry是官方提供的工具，可以用于构建私有镜像仓库。</p><h2 id="_2-将本地镜像推送到私有库" tabindex="-1"><a class="header-anchor" href="#_2-将本地镜像推送到私有库" aria-hidden="true">#</a> 2 将本地镜像推送到私有库</h2><h3 id="_2-1-下载registry" tabindex="-1"><a class="header-anchor" href="#_2-1-下载registry" aria-hidden="true">#</a> 2.1 下载Registry</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull registry 

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker pull registry</span>
Using default tag: latest
latest: Pulling from library/registry
79e9f2f55bf5: Pull complete
0d96da54f60b: Pull complete
5b27040df4a2: Pull complete
e2ead8259a04: Pull complete
3790aef225b9: Pull complete
Digest: sha256:169211e20e2f2d5d115674681eb79d21a217b296b43374b8e39f97fcf866b375
Status: Downloaded newer image <span class="token keyword">for</span> registry:latest
docker.io/library/registry:latest

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY                                              TAG       IMAGE ID       CREATED         SIZE
registry.cn-hangzhou.aliyuncs.com/gm-namespace/ubuntu   <span class="token number">1.1</span>       6bf1a66c3f23   <span class="token number">3</span> hours ago     189MB
hello-world                                             latest    9c7a54a9a43c   <span class="token number">7</span> months ago    <span class="token number">13</span>.3kB
tomcat                                                  latest    fb5657adc892   <span class="token number">23</span> months ago   680MB
registry                                                latest    b8604a3fe854   <span class="token number">2</span> years ago     <span class="token number">26</span>.2MB
ubuntu                                                  latest    ba6acccedd29   <span class="token number">2</span> years ago     <span class="token number">72</span>.8MB
centos                                                  latest    5d0da3dc9764   <span class="token number">2</span> years ago     231MB
redis                                                   <span class="token number">6.0</span>.8     16ecd2772934   <span class="token number">3</span> years ago     104MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-运行registry" tabindex="-1"><a class="header-anchor" href="#_2-2-运行registry" aria-hidden="true">#</a> 2.2 运行Registry</h3><p>Registry相当于本地私有Docker hub。</p><p>默认情况，仓库被创建在容器的/var/lib/registry目录下，建议自行用容器卷映射，方便于宿主机联调</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">5000</span>:5000  <span class="token parameter variable">-v</span> /zzyyuse/myregistry/:/tmp/registry <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true registry

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker run -d -p 5000:5000  -v /zzyyuse/myregistry/:/tmp/registry --privileged=true registry</span>
2ee03a1af4cdb2697cbcbfadfe044ce46bcc640b9e284147d9e6d221defa66bc
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE      COMMAND                   CREATED          STATUS          PORTS                                       NAMES
2ee03a1af4cd   registry   <span class="token string">&quot;/entrypoint.sh /etc…&quot;</span>   <span class="token number">13</span> seconds ago   Up <span class="token number">12</span> seconds   <span class="token number">0.0</span>.0.0:5000-<span class="token operator">&gt;</span><span class="token number">5000</span>/tcp, :::5000-<span class="token operator">&gt;</span><span class="token number">5000</span>/tcp   kind_ca                                                                        nnon
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE      COMMAND                   CREATED          STATUS          PORTS                                       NAMES
2ee03a1af4cd   registry   <span class="token string">&quot;/entrypoint.sh /etc…&quot;</span>   <span class="token number">19</span> seconds ago   Up <span class="token number">18</span> seconds   <span class="token number">0.0</span>.0.0:5000-<span class="token operator">&gt;</span><span class="token number">5000</span>/tcp, :::5000-<span class="token operator">&gt;</span><span class="token number">5000</span>/tcp   kind_cannon

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-案例" tabindex="-1"><a class="header-anchor" href="#_2-3-案例" aria-hidden="true">#</a> 2.3 案例</h3><p>创建一个新镜像，ubuntu安装ifconfig命令</p><p>1.从Hub上下载ubuntu镜像到本地并成功运行</p><p>2.原始的Ubuntu镜像是不带着ifconfig命令的</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY                                              TAG       IMAGE ID       CREATED         SIZE
registry.cn-hangzhou.aliyuncs.com/gm-namespace/ubuntu   <span class="token number">1.1</span>       6bf1a66c3f23   <span class="token number">3</span> hours ago     189MB
hello-world                                             latest    9c7a54a9a43c   <span class="token number">7</span> months ago    <span class="token number">13</span>.3kB
tomcat                                                  latest    fb5657adc892   <span class="token number">23</span> months ago   680MB
registry                                                latest    b8604a3fe854   <span class="token number">2</span> years ago     <span class="token number">26</span>.2MB
ubuntu                                                  latest    ba6acccedd29   <span class="token number">2</span> years ago     <span class="token number">72</span>.8MB
centos                                                  latest    5d0da3dc9764   <span class="token number">2</span> years ago     231MB
redis                                                   <span class="token number">6.0</span>.8     16ecd2772934   <span class="token number">3</span> years ago     104MB
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker run -it ubuntu /bin/bash</span>
root@fad75dbb3bd1:/<span class="token comment"># ifconfig</span>
bash: ifconfig: <span class="token builtin class-name">command</span> not found
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.外网连通的情况下，安装ifconfig命令并测试通过</p><p>docker容器内执行上述两条命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt-get</span> update
<span class="token function">apt-get</span> <span class="token function">install</span> net-tools

root@fad75dbb3bd1:/<span class="token comment"># apt-get update</span>
Get:1 http://security.ubuntu.com/ubuntu focal-security InRelease <span class="token punctuation">[</span><span class="token number">114</span> kB<span class="token punctuation">]</span>
Get:2 http://security.ubuntu.com/ubuntu focal-security/multiverse amd64 Packages <span class="token punctuation">[</span><span class="token number">29.3</span> kB<span class="token punctuation">]</span>
Get:3 http://security.ubuntu.com/ubuntu focal-security/universe amd64 Packages <span class="token punctuation">[</span><span class="token number">1148</span> kB<span class="token punctuation">]</span>
Hit:4 http://archive.ubuntu.com/ubuntu focal InRelease
Hit:5 http://archive.ubuntu.com/ubuntu focal-updates InRelease
Hit:6 http://archive.ubuntu.com/ubuntu focal-backports InRelease
Get:7 http://security.ubuntu.com/ubuntu focal-security/restricted amd64 Packages <span class="token punctuation">[</span><span class="token number">3079</span> kB<span class="token punctuation">]</span>
Get:8 http://security.ubuntu.com/ubuntu focal-security/main amd64 Packages <span class="token punctuation">[</span><span class="token number">3245</span> kB<span class="token punctuation">]</span>
Fetched <span class="token number">7615</span> kB <span class="token keyword">in</span> 40s <span class="token punctuation">(</span><span class="token number">192</span> kB/s<span class="token punctuation">)</span>
Reading package lists<span class="token punctuation">..</span>. Done

root@fad75dbb3bd1:/<span class="token comment"># apt-get install net-tools</span>
Reading package lists<span class="token punctuation">..</span>. Done
Building dependency tree
Reading state information<span class="token punctuation">..</span>. Done
The following NEW packages will be installed:
  net-tools
<span class="token number">0</span> upgraded, <span class="token number">1</span> newly installed, <span class="token number">0</span> to remove and <span class="token number">51</span> not upgraded.
Need to get <span class="token number">196</span> kB of archives.
After this operation, <span class="token number">864</span> kB of additional disk space will be used.
Get:1 http://archive.ubuntu.com/ubuntu focal/main amd64 net-tools amd64 <span class="token number">1.60</span>+git20180626.aebd88e-1ubuntu1 <span class="token punctuation">[</span><span class="token number">196</span> kB<span class="token punctuation">]</span>
Fetched <span class="token number">196</span> kB <span class="token keyword">in</span> 2s <span class="token punctuation">(</span><span class="token number">89.8</span> kB/s<span class="token punctuation">)</span>
debconf: delaying package configuration, since apt-utils is not installed
Selecting previously unselected package net-tools.
<span class="token punctuation">(</span>Reading database <span class="token punctuation">..</span>. <span class="token number">4127</span> files and directories currently installed.<span class="token punctuation">)</span>
Preparing to unpack <span class="token punctuation">..</span>./net-tools_1.60+git20180626.aebd88e-1ubuntu1_amd64.deb <span class="token punctuation">..</span>.
Unpacking net-tools <span class="token punctuation">(</span><span class="token number">1.60</span>+git20180626.aebd88e-1ubuntu1<span class="token punctuation">)</span> <span class="token punctuation">..</span>.
Setting up net-tools <span class="token punctuation">(</span><span class="token number">1.60</span>+git20180626.aebd88e-1ubuntu1<span class="token punctuation">)</span> <span class="token punctuation">..</span>.

root@fad75dbb3bd1:/<span class="token comment"># ifconfig</span>
eth0: <span class="token assign-left variable">flags</span><span class="token operator">=</span><span class="token number">416</span><span class="token operator"><span class="token file-descriptor important">3</span>&lt;</span>UP,BROADCAST,RUNNING,MULTICAST<span class="token operator">&gt;</span>  mtu <span class="token number">1500</span>
        inet <span class="token number">172.17</span>.0.3  netmask <span class="token number">255.255</span>.0.0  broadcast <span class="token number">172.17</span>.255.255
        ether 02:42:ac:11:00:03  txqueuelen <span class="token number">0</span>  <span class="token punctuation">(</span>Ethernet<span class="token punctuation">)</span>
        RX packets <span class="token number">4976</span>  bytes <span class="token number">29987662</span> <span class="token punctuation">(</span><span class="token number">29.9</span> MB<span class="token punctuation">)</span>
        RX errors <span class="token number">0</span>  dropped <span class="token number">0</span>  overruns <span class="token number">0</span>  frame <span class="token number">0</span>
        TX packets <span class="token number">3549</span>  bytes <span class="token number">197647</span> <span class="token punctuation">(</span><span class="token number">197.6</span> KB<span class="token punctuation">)</span>
        TX errors <span class="token number">0</span>  dropped <span class="token number">0</span> overruns <span class="token number">0</span>  carrier <span class="token number">0</span>  collisions <span class="token number">0</span>

lo: <span class="token assign-left variable">flags</span><span class="token operator">=</span><span class="token number">7</span><span class="token operator"><span class="token file-descriptor important">3</span>&lt;</span>UP,LOOPBACK,RUNNING<span class="token operator">&gt;</span>  mtu <span class="token number">65536</span>
        inet <span class="token number">127.0</span>.0.1  netmask <span class="token number">255.0</span>.0.0
        loop  txqueuelen <span class="token number">1000</span>  <span class="token punctuation">(</span>Local Loopback<span class="token punctuation">)</span>
        RX packets <span class="token number">0</span>  bytes <span class="token number">0</span> <span class="token punctuation">(</span><span class="token number">0.0</span> B<span class="token punctuation">)</span>
        RX errors <span class="token number">0</span>  dropped <span class="token number">0</span>  overruns <span class="token number">0</span>  frame <span class="token number">0</span>
        TX packets <span class="token number">0</span>  bytes <span class="token number">0</span> <span class="token punctuation">(</span><span class="token number">0.0</span> B<span class="token punctuation">)</span>
        TX errors <span class="token number">0</span>  dropped <span class="token number">0</span> overruns <span class="token number">0</span>  carrier <span class="token number">0</span>  collisions <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.安装完成后，commit我们自己的新镜像</p><p>公式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker commit -m=&quot;提交的描述信息&quot; -a=&quot;作者&quot; 容器ID 要创建的目标镜像名:[标签名]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令：在容器外执行，记得</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker commit -m=&quot;add ifconfig cmd&quot; -a=&quot;gm&quot; fad75dbb3bd1 myubuntu:1.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE      COMMAND                   CREATED         STATUS         PORTS                                       NAMES
fad75dbb3bd1   ubuntu     <span class="token string">&quot;/bin/bash&quot;</span>               <span class="token number">5</span> minutes ago   Up <span class="token number">5</span> minutes                                               strange_euler
2ee03a1af4cd   registry   <span class="token string">&quot;/entrypoint.sh /etc…&quot;</span>   <span class="token number">8</span> minutes ago   Up <span class="token number">8</span> minutes   <span class="token number">0.0</span>.0.0:5000-<span class="token operator">&gt;</span><span class="token number">5000</span>/tcp, :::5000-<span class="token operator">&gt;</span><span class="token number">5000</span>/tcp   kind_cannon
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker commit -m=&quot;add ifconfig cmd&quot; -a=&quot;gm&quot; fad75dbb3bd1 myubuntu:1.2</span>
sha256:776f0b498306310caf24d99ae41f0170811867210f204bdd4b2cea6fc4d44983
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY                                              TAG       IMAGE ID       CREATED         SIZE
myubuntu                                                <span class="token number">1.2</span>       776f0b498306   <span class="token number">8</span> seconds ago   122MB
registry.cn-hangzhou.aliyuncs.com/gm-namespace/ubuntu   <span class="token number">1.1</span>       6bf1a66c3f23   <span class="token number">4</span> hours ago     189MB
hello-world                                             latest    9c7a54a9a43c   <span class="token number">7</span> months ago    <span class="token number">13</span>.3kB
tomcat                                                  latest    fb5657adc892   <span class="token number">23</span> months ago   680MB
registry                                                latest    b8604a3fe854   <span class="token number">2</span> years ago     <span class="token number">26</span>.2MB
ubuntu                                                  latest    ba6acccedd29   <span class="token number">2</span> years ago     <span class="token number">72</span>.8MB
centos                                                  latest    5d0da3dc9764   <span class="token number">2</span> years ago     231MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.启动我们的新镜像并和原来的对比</p><ul><li>官网是默认下载的Ubuntu没有ifconfig命令。</li><li>我们自己commit构建的新镜像，新增加了ifconfig功能，可以成功使用。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY                                              TAG       IMAGE ID       CREATED              SIZE
myubuntu                                                <span class="token number">1.2</span>       776f0b498306   About a minute ago   122MB
registry.cn-hangzhou.aliyuncs.com/gm-namespace/ubuntu   <span class="token number">1.1</span>       6bf1a66c3f23   <span class="token number">4</span> hours ago          189MB
hello-world                                             latest    9c7a54a9a43c   <span class="token number">7</span> months ago         <span class="token number">13</span>.3kB
tomcat                                                  latest    fb5657adc892   <span class="token number">23</span> months ago        680MB
registry                                                latest    b8604a3fe854   <span class="token number">2</span> years ago          <span class="token number">26</span>.2MB
ubuntu                                                  latest    ba6acccedd29   <span class="token number">2</span> years ago          <span class="token number">72</span>.8MB
centos                                                  latest    5d0da3dc9764   <span class="token number">2</span> years ago          231MB
redis                                                   <span class="token number">6.0</span>.8     16ecd2772934   <span class="token number">3</span> years ago          104MB
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker run -it 776f0b498306 /bin/bash</span>
root@fb40f305d8bc:/<span class="token comment"># ifconfig</span>
eth0: <span class="token assign-left variable">flags</span><span class="token operator">=</span><span class="token number">416</span><span class="token operator"><span class="token file-descriptor important">3</span>&lt;</span>UP,BROADCAST,RUNNING,MULTICAST<span class="token operator">&gt;</span>  mtu <span class="token number">1500</span>
        inet <span class="token number">172.17</span>.0.3  netmask <span class="token number">255.255</span>.0.0  broadcast <span class="token number">172.17</span>.255.255
        ether 02:42:ac:11:00:03  txqueuelen <span class="token number">0</span>  <span class="token punctuation">(</span>Ethernet<span class="token punctuation">)</span>
        RX packets <span class="token number">7</span>  bytes <span class="token number">586</span> <span class="token punctuation">(</span><span class="token number">586.0</span> B<span class="token punctuation">)</span>
        RX errors <span class="token number">0</span>  dropped <span class="token number">0</span>  overruns <span class="token number">0</span>  frame <span class="token number">0</span>
        TX packets <span class="token number">0</span>  bytes <span class="token number">0</span> <span class="token punctuation">(</span><span class="token number">0.0</span> B<span class="token punctuation">)</span>
        TX errors <span class="token number">0</span>  dropped <span class="token number">0</span> overruns <span class="token number">0</span>  carrier <span class="token number">0</span>  collisions <span class="token number">0</span>

lo: <span class="token assign-left variable">flags</span><span class="token operator">=</span><span class="token number">7</span><span class="token operator"><span class="token file-descriptor important">3</span>&lt;</span>UP,LOOPBACK,RUNNING<span class="token operator">&gt;</span>  mtu <span class="token number">65536</span>
        inet <span class="token number">127.0</span>.0.1  netmask <span class="token number">255.0</span>.0.0
        loop  txqueuelen <span class="token number">1000</span>  <span class="token punctuation">(</span>Local Loopback<span class="token punctuation">)</span>
        RX packets <span class="token number">0</span>  bytes <span class="token number">0</span> <span class="token punctuation">(</span><span class="token number">0.0</span> B<span class="token punctuation">)</span>
        RX errors <span class="token number">0</span>  dropped <span class="token number">0</span>  overruns <span class="token number">0</span>  frame <span class="token number">0</span>
        TX packets <span class="token number">0</span>  bytes <span class="token number">0</span> <span class="token punctuation">(</span><span class="token number">0.0</span> B<span class="token punctuation">)</span>
        TX errors <span class="token number">0</span>  dropped <span class="token number">0</span> overruns <span class="token number">0</span>  carrier <span class="token number">0</span>  collisions <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-查看私服库镜像" tabindex="-1"><a class="header-anchor" href="#_2-4-查看私服库镜像" aria-hidden="true">#</a> 2.4 查看私服库镜像</h3><p>curl验证私服库上有什么镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -XGET http://192.168.11.132:5000/v2/_catalog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以看到，目前私服库没有任何镜像上传过。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE      COMMAND                   CREATED          STATUS          PORTS                                       NAMES
2ee03a1af4cd   registry   <span class="token string">&quot;/entrypoint.sh /etc…&quot;</span>   <span class="token number">15</span> minutes ago   Up <span class="token number">15</span> minutes   <span class="token number">0.0</span>.0.0:5000-<span class="token operator">&gt;</span><span class="token number">5000</span>/tcp, :::5000-<span class="token operator">&gt;</span><span class="token number">5000</span>/tcp   kind_cannon
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># curl -XGET http://192.168.11.132:5000/v2/_catalog</span>
<span class="token punctuation">{</span><span class="token string">&quot;repositories&quot;</span>:<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-修改镜像tag" tabindex="-1"><a class="header-anchor" href="#_2-5-修改镜像tag" aria-hidden="true">#</a> 2.5 修改镜像Tag</h3><p>将新镜像myubuntu:1.2修改符合私服规范的Tag</p><p>按照公式： <code>docker tag 镜像:Tag Host:Port/Repository:Tag</code></p><p>自己host主机IP地址，填写同学你们自己的，不要粘贴错误。</p><p>使用命令 docker tag 将myubuntu:1.2 这个镜像修改为192.168.11.132:5000/myubuntu:1.2</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> tag myubuntu:1.2 <span class="token number">192.168</span>.11.132:5000/myubuntu:1.2

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY                                              TAG       IMAGE ID       CREATED         SIZE
myubuntu                                                <span class="token number">1.2</span>       776f0b498306   <span class="token number">8</span> minutes ago   122MB
registry.cn-hangzhou.aliyuncs.com/gm-namespace/ubuntu   <span class="token number">1.1</span>       6bf1a66c3f23   <span class="token number">4</span> hours ago     189MB
hello-world                                             latest    9c7a54a9a43c   <span class="token number">7</span> months ago    <span class="token number">13</span>.3kB
tomcat                                                  latest    fb5657adc892   <span class="token number">23</span> months ago   680MB
registry                                                latest    b8604a3fe854   <span class="token number">2</span> years ago     <span class="token number">26</span>.2MB
ubuntu                                                  latest    ba6acccedd29   <span class="token number">2</span> years ago     <span class="token number">72</span>.8MB
centos                                                  latest    5d0da3dc9764   <span class="token number">2</span> years ago     231MB
redis                                                   <span class="token number">6.0</span>.8     16ecd2772934   <span class="token number">3</span> years ago     104MB
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker tag myubuntu:1.2 192.168.11.132:5000/myubuntu:1.2</span>
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY                                              TAG       IMAGE ID       CREATED         SIZE
<span class="token number">192.168</span>.11.132:5000/myubuntu                            <span class="token number">1.2</span>       776f0b498306   <span class="token number">8</span> minutes ago   122MB
myubuntu                                                <span class="token number">1.2</span>       776f0b498306   <span class="token number">8</span> minutes ago   122MB
registry.cn-hangzhou.aliyuncs.com/gm-namespace/ubuntu   <span class="token number">1.1</span>       6bf1a66c3f23   <span class="token number">4</span> hours ago     189MB
hello-world                                             latest    9c7a54a9a43c   <span class="token number">7</span> months ago    <span class="token number">13</span>.3kB
tomcat                                                  latest    fb5657adc892   <span class="token number">23</span> months ago   680MB
registry                                                latest    b8604a3fe854   <span class="token number">2</span> years ago     <span class="token number">26</span>.2MB
ubuntu                                                  latest    ba6acccedd29   <span class="token number">2</span> years ago     <span class="token number">72</span>.8MB
centos                                                  latest    5d0da3dc9764   <span class="token number">2</span> years ago     231MB
redis                                                   <span class="token number">6.0</span>.8     16ecd2772934   <span class="token number">3</span> years ago     104MB

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-修改配置文件" tabindex="-1"><a class="header-anchor" href="#_2-6-修改配置文件" aria-hidden="true">#</a> 2.6 修改配置文件</h3><p>docker私服库默认不支持http推送镜像，现在修改配置文件使之支持http</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/docker/daemon.json</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;registry-mirrors&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://fk5l5ng0.mirror.aliyuncs.com&quot;</span><span class="token punctuation">]</span>,
  <span class="token string">&quot;insecure-registries&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;192.168.11.132:5000&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>registry-mirrors 配置的是国内阿里提供的镜像加速地址，不用加速的话访问官网的会很慢。</p><p>2个配置中间有个逗号 &#39;,&#39;别漏了，这个配置是json格式的。</p><p>vim命令新增如下红色内容:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/docker/daemon.json
<span class="token punctuation">{</span>
  <span class="token string">&quot;registry-mirrors&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://fk5l5ng0.mirror.aliyuncs.com&quot;</span><span class="token punctuation">]</span>,
  <span class="token string">&quot;insecure-registries&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;192.168.11.132:5000&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改完后如果不生效，建议重启docker。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker push 192.168.11.132:5000/myubuntu:1.2</span>
The push refers to repository <span class="token punctuation">[</span><span class="token number">192.168</span>.11.132:5000/myubuntu<span class="token punctuation">]</span>
Get <span class="token string">&quot;https://192.168.11.132:5000/v2/&quot;</span><span class="token builtin class-name">:</span> http: server gave HTTP response to HTTPS client

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># systemctl restart docker</span>
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker start 2ee03a1af4cd</span>
2ee03a1af4cd
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE      COMMAND                   CREATED          STATUS         PORTS                                       NAMES
2ee03a1af4cd   registry   <span class="token string">&quot;/entrypoint.sh /etc…&quot;</span>   <span class="token number">28</span> minutes ago   Up <span class="token number">3</span> seconds   <span class="token number">0.0</span>.0.0:5000-<span class="token operator">&gt;</span><span class="token number">5000</span>/tcp, :::5000-<span class="token operator">&gt;</span><span class="token number">5000</span>/tcp   kind_cannon
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-7-push推送到私服库" tabindex="-1"><a class="header-anchor" href="#_2-7-push推送到私服库" aria-hidden="true">#</a> 2.7 push推送到私服库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> push <span class="token number">192.168</span>.11.132:5000/myubuntu:1.2

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker push 192.168.11.132:5000/myubuntu:1.2</span>
The push refers to repository <span class="token punctuation">[</span><span class="token number">192.168</span>.11.132:5000/myubuntu<span class="token punctuation">]</span>
c0cad072b196: Pushed
9f54eef41275: Pushed
<span class="token number">1.2</span>: digest: sha256:5ef0403b9d7aa64db30b9030e2b1fe6b1923dbe5accbdd551ae619dff7f4f207 size: <span class="token number">741</span>

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY                                              TAG       IMAGE ID       CREATED          SIZE
<span class="token number">192.168</span>.11.132:5000/myubuntu                            <span class="token number">1.2</span>       776f0b498306   <span class="token number">22</span> minutes ago   122MB
myubuntu                                                <span class="token number">1.2</span>       776f0b498306   <span class="token number">22</span> minutes ago   122MB
registry.cn-hangzhou.aliyuncs.com/gm-namespace/ubuntu   <span class="token number">1.1</span>       6bf1a66c3f23   <span class="token number">4</span> hours ago      189MB
hello-world                                             latest    9c7a54a9a43c   <span class="token number">7</span> months ago     <span class="token number">13</span>.3kB
tomcat                                                  latest    fb5657adc892   <span class="token number">23</span> months ago    680MB
registry                                                latest    b8604a3fe854   <span class="token number">2</span> years ago      <span class="token number">26</span>.2MB
ubuntu                                                  latest    ba6acccedd29   <span class="token number">2</span> years ago      <span class="token number">72</span>.8MB
centos                                                  latest    5d0da3dc9764   <span class="token number">2</span> years ago      231MB
redis                                                   <span class="token number">6.0</span>.8     16ecd2772934   <span class="token number">3</span> years ago      104MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-8-验证私服库镜像" tabindex="-1"><a class="header-anchor" href="#_2-8-验证私服库镜像" aria-hidden="true">#</a> 2.8 验证私服库镜像</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-XGET</span> http://192.168.11.132:5000/v2/_catalog

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># curl -XGET http://192.168.11.132:5000/v2/_catalog</span>
<span class="token punctuation">{</span><span class="token string">&quot;repositories&quot;</span>:<span class="token punctuation">[</span><span class="token string">&quot;myubuntu&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-9-pull到本地并运行" tabindex="-1"><a class="header-anchor" href="#_2-9-pull到本地并运行" aria-hidden="true">#</a> 2.9 pull到本地并运行</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull <span class="token number">192.168</span>.11.132:5000/myubuntu:1.2

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY   TAG       IMAGE ID       CREATED         SIZE
tomcat       latest    fb5657adc892   <span class="token number">23</span> months ago   680MB
registry     latest    b8604a3fe854   <span class="token number">2</span> years ago     <span class="token number">26</span>.2MB
ubuntu       latest    ba6acccedd29   <span class="token number">2</span> years ago     <span class="token number">72</span>.8MB
centos       latest    5d0da3dc9764   <span class="token number">2</span> years ago     231MB
redis        <span class="token number">6.0</span>.8     16ecd2772934   <span class="token number">3</span> years ago     104MB
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker pull 192.168.11.132:5000/myubuntu:1.2</span>
<span class="token number">1.2</span>: Pulling from myubuntu
7b1a6ab2e44d: Already exists
ef70d08a6714: Already exists
Digest: sha256:5ef0403b9d7aa64db30b9030e2b1fe6b1923dbe5accbdd551ae619dff7f4f207
Status: Downloaded newer image <span class="token keyword">for</span> <span class="token number">192.168</span>.11.132:5000/myubuntu:1.2
<span class="token number">192.168</span>.11.132:5000/myubuntu:1.2
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY                     TAG       IMAGE ID       CREATED          SIZE
<span class="token number">192.168</span>.11.132:5000/myubuntu   <span class="token number">1.2</span>       776f0b498306   <span class="token number">25</span> minutes ago   122MB
tomcat                         latest    fb5657adc892   <span class="token number">23</span> months ago    680MB
registry                       latest    b8604a3fe854   <span class="token number">2</span> years ago      <span class="token number">26</span>.2MB
ubuntu                         latest    ba6acccedd29   <span class="token number">2</span> years ago      <span class="token number">72</span>.8MB
centos                         latest    5d0da3dc9764   <span class="token number">2</span> years ago      231MB
redis                          <span class="token number">6.0</span>.8     16ecd2772934   <span class="token number">3</span> years ago      104MB
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker run -it 776f0b498306 /bin/bash</span>
root@4df6c363ba49:/<span class="token comment"># ifconfig</span>
eth0: <span class="token assign-left variable">flags</span><span class="token operator">=</span><span class="token number">416</span><span class="token operator"><span class="token file-descriptor important">3</span>&lt;</span>UP,BROADCAST,RUNNING,MULTICAST<span class="token operator">&gt;</span>  mtu <span class="token number">1500</span>
        inet <span class="token number">172.17</span>.0.3  netmask <span class="token number">255.255</span>.0.0  broadcast <span class="token number">172.17</span>.255.255
        ether 02:42:ac:11:00:03  txqueuelen <span class="token number">0</span>  <span class="token punctuation">(</span>Ethernet<span class="token punctuation">)</span>
        RX packets <span class="token number">6</span>  bytes <span class="token number">516</span> <span class="token punctuation">(</span><span class="token number">516.0</span> B<span class="token punctuation">)</span>
        RX errors <span class="token number">0</span>  dropped <span class="token number">0</span>  overruns <span class="token number">0</span>  frame <span class="token number">0</span>
        TX packets <span class="token number">0</span>  bytes <span class="token number">0</span> <span class="token punctuation">(</span><span class="token number">0.0</span> B<span class="token punctuation">)</span>
        TX errors <span class="token number">0</span>  dropped <span class="token number">0</span> overruns <span class="token number">0</span>  carrier <span class="token number">0</span>  collisions <span class="token number">0</span>

lo: <span class="token assign-left variable">flags</span><span class="token operator">=</span><span class="token number">7</span><span class="token operator"><span class="token file-descriptor important">3</span>&lt;</span>UP,LOOPBACK,RUNNING<span class="token operator">&gt;</span>  mtu <span class="token number">65536</span>
        inet <span class="token number">127.0</span>.0.1  netmask <span class="token number">255.0</span>.0.0
        loop  txqueuelen <span class="token number">1000</span>  <span class="token punctuation">(</span>Local Loopback<span class="token punctuation">)</span>
        RX packets <span class="token number">0</span>  bytes <span class="token number">0</span> <span class="token punctuation">(</span><span class="token number">0.0</span> B<span class="token punctuation">)</span>
        RX errors <span class="token number">0</span>  dropped <span class="token number">0</span>  overruns <span class="token number">0</span>  frame <span class="token number">0</span>
        TX packets <span class="token number">0</span>  bytes <span class="token number">0</span> <span class="token punctuation">(</span><span class="token number">0.0</span> B<span class="token punctuation">)</span>
        TX errors <span class="token number">0</span>  dropped <span class="token number">0</span> overruns <span class="token number">0</span>  carrier <span class="token number">0</span>  collisions <span class="token number">0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,52);function b(k,v){const e=c("ExternalLinkIcon");return l(),i("div",null,[r,n("p",null,[s("官方Docker Hub地址："),n("a",d,[s("https://hub.docker.com/，中国大陆访问太慢了且准备被阿里云取代的趋势，不太主流。"),o(e)])]),m])}const y=p(u,[["render",b],["__file","06-本地镜像发布到私有库.html.vue"]]);export{y as default};
