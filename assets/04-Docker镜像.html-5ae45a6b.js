import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,d as e}from"./app-d11308b4.js";const i="/assets/image-20231209173925598-ee916f9e.png",t="/assets/image-20231209173930746-db9796b6.png",o="/assets/image-20231209180045653-7a57b318.png",c={},l=e(`<h1 id="docker镜像" tabindex="-1"><a class="header-anchor" href="#docker镜像" aria-hidden="true">#</a> Docker镜像</h1><h2 id="_1-是什么" tabindex="-1"><a class="header-anchor" href="#_1-是什么" aria-hidden="true">#</a> 1 是什么</h2><p>镜像是一种轻量级、可执行的独立软件包，它包含运行某个软件所需的所有内容，我们把应用程序和配置依赖打包好形成一个可交付的运行环境(包括代码、运行时需要的库、环境变量和配置文件等)，这个打包好的运行环境就是image镜像文件。</p><p>只有通过这个镜像文件才能生成Docker容器实例(类似Java中new出来一个对象)。</p><h3 id="_1-1-分层的镜像" tabindex="-1"><a class="header-anchor" href="#_1-1-分层的镜像" aria-hidden="true">#</a> 1.1 分层的镜像</h3><p>以我们的pull为例，在下载的过程中我们可以看到docker的镜像好像是在一层一层的在下载</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 tmp<span class="token punctuation">]</span><span class="token comment"># docker pull tomcat</span>
Using default tag: latest
latest: Pulling from library/tomcat
0e29546d541c: Pull complete
9b829c73b52b: Pull complete
cb5b7ae36172: Pull complete
6494e4811622: Pull complete
668f6fcc5fa5: Pull complete
dc120c3e0290: Pull complete
8f7c0eebb7b1: Pull complete
77b694f83996: Pull complete
0f611256ec3a: Pull complete
4f25def12f23: Pull complete
Digest: sha256:9dee185c3b161cdfede1f5e35e8b56ebc9de88ed3a79526939701f3537a52324
Status: Downloaded newer image <span class="token keyword">for</span> tomcat:latest
docker.io/library/tomcat:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-unionfs-联合文件系统" tabindex="-1"><a class="header-anchor" href="#_1-2-unionfs-联合文件系统" aria-hidden="true">#</a> 1.2 UnionFS（联合文件系统）</h3><p><strong>UnionFS</strong>（联合文件系统）：Union文件系统（UnionFS）是一种分层、轻量级并且高性能的文件系统，<strong>它支持对文件系统的修改作为一次提交来一层层的叠加</strong>，同时可以将不同目录挂载到同一个虚拟文件系统下(unite several directories into a single virtual filesystem)。Union 文件系统是 Docker 镜像的基础。<strong>镜像可以通过分层来进行继承</strong>，基于基础镜像（没有父镜像），可以制作各种具体的应用镜像。</p><p>特性：一次同时加载多个文件系统，但从外面看起来，只能看到一个文件系统，联合加载会把各层文件系统叠加起来，这样最终的文件系统会包含所有底层的文件和目录</p><h3 id="_1-3-docker镜像加载原理" tabindex="-1"><a class="header-anchor" href="#_1-3-docker镜像加载原理" aria-hidden="true">#</a> 1.3 Docker镜像加载原理</h3><p>docker的镜像实际上由一层一层的文件系统组成，这种层级的文件系统UnionFS。</p><p><strong>bootfs(boot file system)<strong>主要包含</strong>bootloader</strong>和<strong>kernel</strong>, bootloader主要是引导加载kernel, Linux刚启动时会加载bootfs文件系统，在Docker镜像的最底层是引导文件系统bootfs。这一层与我们典型的Linux/Unix系统是一样的，包含boot加载器和内核。当boot加载完成之后整个内核就都在内存中了，此时内存的使用权已由bootfs转交给内核，此时系统也会卸载bootfs。</p><p>rootfs (root file system) ，在bootfs之上。包含的就是典型 Linux 系统中的 /dev, /proc, /bin, /etc 等标准目录和文件。rootfs就是各种不同的操作系统发行版，比如Ubuntu，Centos等等。</p><figure><img src="`+i+`" alt="image-20231209173925598" tabindex="0" loading="lazy"><figcaption>image-20231209173925598</figcaption></figure><p>平时我们安装进虚拟机的CentOS都是好几个G，为什么docker这里才200M？？</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 tmp<span class="token punctuation">]</span><span class="token comment"># docker images centos</span>
REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
centos       latest    5d0da3dc9764   <span class="token number">2</span> years ago   231MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于一个精简的OS，rootfs可以很小，只需要包括最基本的命令、工具和程序库就可以了，因为底层直接用Host的kernel，自己只需要提供 rootfs 就行了。由此可见对于不同的linux发行版, bootfs基本是一致的, rootfs会有差别, 因此不同的发行版可以公用bootfs。</p><h3 id="_1-4-为什么-docker-镜像要采用这种分层结构呢" tabindex="-1"><a class="header-anchor" href="#_1-4-为什么-docker-镜像要采用这种分层结构呢" aria-hidden="true">#</a> 1.4 为什么 Docker 镜像要采用这种分层结构呢</h3><p>镜像分层最大的一个好处就是共享资源，方便复制迁移，<strong>就是为了复用。</strong></p><p>比如说有多个镜像都从相同的 base 镜像构建而来，那么 Docker Host 只需在磁盘上保存一份 base 镜像；</p><p>同时内存中也只需加载一份 base 镜像，就可以为所有容器服务了。而且镜像的每一层都可以被共享。</p><h2 id="_2-重点理解" tabindex="-1"><a class="header-anchor" href="#_2-重点理解" aria-hidden="true">#</a> 2 重点理解</h2><p><strong>Docker镜像层都是只读的，容器层是可写的。</strong></p><p>当容器启动时，一个新的可写层被加载到镜像的顶部。 这一层通常被称作“容器层”，“容器层”之下的都叫“镜像层”。</p><p>所有对容器的改动 - 无论添加、删除、还是修改文件都只会发生在容器层中。只有容器层是可写的，容器层下面的所有镜像层都是只读的。</p><figure><img src="`+t+`" alt="image-20231209173930746" tabindex="0" loading="lazy"><figcaption>image-20231209173930746</figcaption></figure><h2 id="_3-docker镜像commit操作案例" tabindex="-1"><a class="header-anchor" href="#_3-docker镜像commit操作案例" aria-hidden="true">#</a> 3 Docker镜像commit操作案例</h2><p>docker commit 提交容器副本使之成为一个新的镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker commit -m=&quot;提交的描述信息&quot; -a=&quot;作者&quot; 容器ID 要创建的目标镜像名:[标签名]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-1-案例演示ubuntu安装vim" tabindex="-1"><a class="header-anchor" href="#_3-1-案例演示ubuntu安装vim" aria-hidden="true">#</a> 3.1 案例演示ubuntu安装vim</h3><p>1.从Hub上下载ubuntu镜像到本地并成功运行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 tmp<span class="token punctuation">]</span><span class="token comment"># docker pull ubuntu</span>
Using default tag: latest
latest: Pulling from library/ubuntu
7b1a6ab2e44d: Already exists
Digest: sha256:626ffe58f6e7566e00254b638eb7e0f3b11d4da9675088f4781a50ae288f3322
Status: Downloaded newer image <span class="token keyword">for</span> ubuntu:latest
docker.io/library/ubuntu:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.原始的默认Ubuntu镜像是不带着vim命令的</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 tmp<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY    TAG       IMAGE ID       CREATED         SIZE
hello-world   latest    9c7a54a9a43c   <span class="token number">7</span> months ago    <span class="token number">13</span>.3kB
tomcat        latest    fb5657adc892   <span class="token number">23</span> months ago   680MB
ubuntu        latest    ba6acccedd29   <span class="token number">2</span> years ago     <span class="token number">72</span>.8MB
centos        latest    5d0da3dc9764   <span class="token number">2</span> years ago     231MB
redis         <span class="token number">6.0</span>.8     16ecd2772934   <span class="token number">3</span> years ago     104MB
<span class="token punctuation">[</span>root@192 tmp<span class="token punctuation">]</span><span class="token comment"># docker run -it ubuntu /bin/bash</span>
root@7261a186130e:/<span class="token comment"># vim a.txt</span>
bash: vim: <span class="token builtin class-name">command</span> not found
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.外网连通的情况下，安装vim</p><p>docker容器内执行上述两条命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 先更新包管理工具</span>
<span class="token function">apt-get</span> update
<span class="token comment"># 然后安装vim</span>
<span class="token function">apt-get</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">vim</span>

root@7261a186130e:/<span class="token comment"># apt-get update</span>
Get:1 http://archive.ubuntu.com/ubuntu focal InRelease <span class="token punctuation">[</span><span class="token number">265</span> kB<span class="token punctuation">]</span>
Get:2 http://security.ubuntu.com/ubuntu focal-security InRelease <span class="token punctuation">[</span><span class="token number">114</span> kB<span class="token punctuation">]</span>
<span class="token punctuation">..</span>.
Get:17 http://archive.ubuntu.com/ubuntu focal-backports/main amd64 Packages <span class="token punctuation">[</span><span class="token number">55.2</span> kB<span class="token punctuation">]</span>
Get:18 http://archive.ubuntu.com/ubuntu focal-backports/universe amd64 Packages <span class="token punctuation">[</span><span class="token number">28.6</span> kB<span class="token punctuation">]</span>
Fetched <span class="token number">29.5</span> MB <span class="token keyword">in</span> 14s <span class="token punctuation">(</span><span class="token number">2147</span> kB/s<span class="token punctuation">)</span>
Reading package lists<span class="token punctuation">..</span>. Done

root@7261a186130e:/<span class="token comment"># apt-get -y install vim</span>
Reading package lists<span class="token punctuation">..</span>. Done
Building dependency tree
Reading state information<span class="token punctuation">..</span>. Done
The following additional packages will be installed:
  alsa-topology-conf alsa-ucm-conf <span class="token function">file</span> libasound2 libasound2-data libcanberra0 libexpat1 libgpm2 libltdl7
  libmagic-mgc libmagic1 libmpdec2 libogg0 libpython3.8 libpython3.8-minimal 
 <span class="token punctuation">..</span>. 
update-alternatives: warning: skip creation of /usr/share/man/ru/man1/editor.1.gz because associated <span class="token function">file</span> /usr/share/man/ru/man1/vim.1.gz <span class="token punctuation">(</span>of <span class="token function">link</span> group editor<span class="token punctuation">)</span> doesn<span class="token string">&#39;t exist
update-alternatives: warning: skip creation of /usr/share/man/man1/editor.1.gz because associated file /usr/share/man/man1/vim.1.gz (of link group editor) doesn&#39;</span>t exist
Processing triggers <span class="token keyword">for</span> libc-bin <span class="token punctuation">(</span><span class="token number">2.31</span>-0ubuntu9.2<span class="token punctuation">)</span> <span class="token punctuation">..</span>.
root@7261a186130e:/<span class="token comment"># vim a.txt</span>
root@7261a186130e:/<span class="token comment"># pwd</span>
/
root@7261a186130e:/<span class="token comment"># ls</span>
a.txt  boot  etc   lib    lib64   media  opt   root  sbin  sys  usr
bin    dev   home  lib32  libx32  mnt    proc  run   srv   tmp  var
root@7261a186130e:/<span class="token comment"># cat a.txt</span>
abcd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.安装完成后，commit我们自己的新镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE     COMMAND       CREATED         STATUS         PORTS     NAMES
7261a186130e   ubuntu    <span class="token string">&quot;/bin/bash&quot;</span>   <span class="token number">8</span> minutes ago   Up <span class="token number">8</span> minutes             exciting_hopper
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker commit -m=&quot;add vim cmd&quot; -a=&quot;gm&quot; 7261a186130e gm/myubuntu:1.1</span>
sha256:6bf1a66c3f230412c9408226329cf3a2843283ece488d2c7a14e03ba33924e2a
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY    TAG       IMAGE ID       CREATED          SIZE
gm/myubuntu   <span class="token number">1.1</span>       6bf1a66c3f23   <span class="token number">10</span> seconds ago   189MB
hello-world   latest    9c7a54a9a43c   <span class="token number">7</span> months ago     <span class="token number">13</span>.3kB
tomcat        latest    fb5657adc892   <span class="token number">23</span> months ago    680MB
ubuntu        latest    ba6acccedd29   <span class="token number">2</span> years ago      <span class="token number">72</span>.8MB
centos        latest    5d0da3dc9764   <span class="token number">2</span> years ago      231MB
redis         <span class="token number">6.0</span>.8     16ecd2772934   <span class="token number">3</span> years ago      104MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.启动我们的新镜像并和原来的对比</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY    TAG       IMAGE ID       CREATED         SIZE
gm/myubuntu   <span class="token number">1.1</span>       6bf1a66c3f23   <span class="token number">3</span> minutes ago   189MB
hello-world   latest    9c7a54a9a43c   <span class="token number">7</span> months ago    <span class="token number">13</span>.3kB
tomcat        latest    fb5657adc892   <span class="token number">23</span> months ago   680MB
ubuntu        latest    ba6acccedd29   <span class="token number">2</span> years ago     <span class="token number">72</span>.8MB
centos        latest    5d0da3dc9764   <span class="token number">2</span> years ago     231MB
redis         <span class="token number">6.0</span>.8     16ecd2772934   <span class="token number">3</span> years ago     104MB
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker run -it ubuntu /bin/bash</span>
root@1d4473e58e7f:/<span class="token comment"># vim a.txt</span>
bash: vim: <span class="token builtin class-name">command</span> not found
root@1d4473e58e7f:/<span class="token comment"># exit</span>
<span class="token builtin class-name">exit</span>
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker run -it 6bf1a66c3f23 /bin/bash</span>
vroot@c3d967508fc5:/<span class="token comment"># vim a.txt</span>
root@c3d967508fc5:/<span class="token comment"># ls</span>
a.txt  bin  boot  dev  etc  home  lib  lib32  lib64  libx32  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@c3d967508fc5:/<span class="token comment"># cat a.txt</span>
abcd
<span class="token number">1234</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>官网是默认下载的Ubuntu没有vim命令</p><p>我们自己commit构建的镜像，新增加了vim功能，可以成功使用。</p><h3 id="_3-2-小总结" tabindex="-1"><a class="header-anchor" href="#_3-2-小总结" aria-hidden="true">#</a> 3.2 小总结</h3><p>Docker中的镜像分层，支持通过扩展现有镜像，创建新的镜像。类似Java继承于一个Base基础类，自己再按需扩展。</p><p>新镜像是从 base 镜像一层一层叠加生成的。每安装一个软件，就在现有镜像的基础上增加一层</p><figure><img src="`+o+'" alt="image-20231209180045653" tabindex="0" loading="lazy"><figcaption>image-20231209180045653</figcaption></figure>',48),d=[l];function r(u,p){return s(),a("div",null,d)}const v=n(c,[["render",r],["__file","04-Docker镜像.html.vue"]]);export{v as default};
