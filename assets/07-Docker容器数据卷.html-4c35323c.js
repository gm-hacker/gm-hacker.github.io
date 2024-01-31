import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-b3b1d6c2.js";const t={},i=e(`<h1 id="docker容器数据卷" tabindex="-1"><a class="header-anchor" href="#docker容器数据卷" aria-hidden="true">#</a> Docker容器数据卷</h1><h2 id="_1-坑-容器卷记得加入" tabindex="-1"><a class="header-anchor" href="#_1-坑-容器卷记得加入" aria-hidden="true">#</a> 1 坑：容器卷记得加入</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--privileged=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Docker挂载主机目录访问<strong>如果出现cannot open directory .: Permission denied</strong></p><p><strong>解决办法：在挂载目录后多加一个--privileged=true参数即可</strong></p><p>如果是CentOS7，安全模块会比之前系统版本加强，不安全的会先禁止，所以目录挂载的情况被默认为不安全的行为，在SELinux里面挂载目录被禁止掉了，如果要开启，我们一般使用--privileged=true命令，扩大容器的权限，解决挂载目录没有权限的问题，也即使用该参数，container内的root拥有真正的root权限，否则，container内的root只是外部的一个普通用户权限。</p><h2 id="_2-回顾下上一讲的知识点-参数v" tabindex="-1"><a class="header-anchor" href="#_2-回顾下上一讲的知识点-参数v" aria-hidden="true">#</a> 2 回顾下上一讲的知识点，参数V</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">5000</span>:5000  <span class="token parameter variable">-v</span> /zzyyuse/myregistry/:/tmp/registry <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true registry

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker run -d -p 5000:5000  -v /zzyyuse/myregistry/:/tmp/registry --privileged=true registry</span>
2ee03a1af4cdb2697cbcbfadfe044ce46bcc640b9e284147d9e6d221defa66bc
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE      COMMAND                   CREATED          STATUS          PORTS                                       NAMES
2ee03a1af4cd   registry   <span class="token string">&quot;/entrypoint.sh /etc…&quot;</span>   <span class="token number">13</span> seconds ago   Up <span class="token number">12</span> seconds   <span class="token number">0.0</span>.0.0:5000-<span class="token operator">&gt;</span><span class="token number">5000</span>/tcp, :::5000-<span class="token operator">&gt;</span><span class="token number">5000</span>/tcp   kind_ca                                                                        nnon
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE      COMMAND                   CREATED          STATUS          PORTS                                       NAMES
2ee03a1af4cd   registry   <span class="token string">&quot;/entrypoint.sh /etc…&quot;</span>   <span class="token number">19</span> seconds ago   Up <span class="token number">18</span> seconds   <span class="token number">0.0</span>.0.0:5000-<span class="token operator">&gt;</span><span class="token number">5000</span>/tcp, :::5000-<span class="token operator">&gt;</span><span class="token number">5000</span>/tcp   kind_cannon
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-是什么" tabindex="-1"><a class="header-anchor" href="#_3-是什么" aria-hidden="true">#</a> 3 是什么</h2><p>卷就是目录或文件，存在于一个或多个容器中，由docker挂载到容器，但不属于联合文件系统，因此能够绕过Union File System提供一些用于持续存储或共享数据的特性：</p><p>卷的设计目的就是<strong>数据的持久化</strong>，完全独立于容器的生存周期，因此Docker不会在容器删除时删除其挂载的数据卷。</p><p><strong>一句话：有点类似我们Redis里面的rdb和aof文件。</strong></p><p>将docker容器内的数据保存进宿主机的磁盘中，运行一个带有容器卷存储功能的容器实例。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -it -v /宿主机绝对路径目录:/容器内目录 --privileged=true 镜像名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-能干嘛" tabindex="-1"><a class="header-anchor" href="#_4-能干嘛" aria-hidden="true">#</a> 4 能干嘛</h2><p>将运用与运行的环境打包镜像，run后形成容器实例运行 ，但是我们对数据的要求希望是持久化的。</p><p>Docker容器产生的数据，如果不备份，那么当容器实例删除后，容器内的数据自然也就没有了。为了能保存数据在docker中我们使用卷。</p><p>特点：</p><ol><li><strong>数据卷可在容器之间共享或重用数据</strong></li><li><strong>卷中的更改可以直接实时生效，爽</strong></li><li><strong>数据卷中的更改不会包含在镜像的更新中</strong></li><li><strong>数据卷的生命周期一直持续到没有容器使用它为止</strong></li></ol><h2 id="_5-数据卷案例" tabindex="-1"><a class="header-anchor" href="#_5-数据卷案例" aria-hidden="true">#</a> 5 数据卷案例</h2><h3 id="_5-1-宿主vs容器之间映射添加容器卷" tabindex="-1"><a class="header-anchor" href="#_5-1-宿主vs容器之间映射添加容器卷" aria-hidden="true">#</a> 5.1 宿主vs容器之间映射添加容器卷</h3><p>1.直接命令添加</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -it --privileged=true -v /宿主机绝对路径目录:/容器内目录 镜像名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--name</span> myu3 <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-v</span> /tmp/myHostData:/tmp/myDockerData ubuntu /bin/bash

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY                     TAG       IMAGE ID       CREATED          SIZE
<span class="token number">192.168</span>.11.132:5000/myubuntu   <span class="token number">1.2</span>       776f0b498306   <span class="token number">52</span> minutes ago   122MB
tomcat                         latest    fb5657adc892   <span class="token number">23</span> months ago    680MB
registry                       latest    b8604a3fe854   <span class="token number">2</span> years ago      <span class="token number">26</span>.2MB
ubuntu                         latest    ba6acccedd29   <span class="token number">2</span> years ago      <span class="token number">72</span>.8MB
centos                         latest    5d0da3dc9764   <span class="token number">2</span> years ago      231MB
redis                          <span class="token number">6.0</span>.8     16ecd2772934   <span class="token number">3</span> years ago      104MB
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker run -it --name myu3 --privileged=true -v /tmp/myHostData:/tmp/myDockerData ubuntu /bin/bash</span>
root@9f440e25bef8:/<span class="token comment"># cd /tmp/myDockerData/</span>
<span class="token comment"># 容器内目录</span>
root@9f440e25bef8:/tmp/myDockerData<span class="token comment"># pwd</span>
/tmp/myDockerData
root@9f440e25bef8:/tmp/myDockerData<span class="token comment">#</span>

<span class="token comment"># 宿主机目录</span>
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># cd /tmp/myHostData/</span>
<span class="token punctuation">[</span>root@192 myHostData<span class="token punctuation">]</span><span class="token comment"># pwd</span>
/tmp/myHostData
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.查看数据卷是否挂载成功</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> inspect 容器ID

<span class="token punctuation">[</span>root@192 myHostData<span class="token punctuation">]</span><span class="token comment"># docker inspect 9f440e25bef8</span>
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;Id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;9f440e25bef815363eb623a0ff0ec0a23c937ed062db941ab835bdb02fb1dc43&quot;</span>,
        <span class="token string">&quot;Created&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2023-12-09T14:24:41.08495696Z&quot;</span>,
        <span class="token string">&quot;Path&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/bin/bash&quot;</span>,
        <span class="token string">&quot;Args&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
        <span class="token string">&quot;State&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Status&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;running&quot;</span>,
            <span class="token string">&quot;Running&quot;</span><span class="token builtin class-name">:</span> true,
            <span class="token string">&quot;Paused&quot;</span><span class="token builtin class-name">:</span> false,
<span class="token punctuation">..</span>.
        <span class="token string">&quot;Mounts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token string">&quot;Type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;bind&quot;</span>,
                <span class="token string">&quot;Source&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/tmp/myHostData&quot;</span>,
                <span class="token string">&quot;Destination&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/tmp/myDockerData&quot;</span>,
                <span class="token string">&quot;Mode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                <span class="token string">&quot;RW&quot;</span><span class="token builtin class-name">:</span> true,
                <span class="token string">&quot;Propagation&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;rprivate&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>,
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.容器和宿主机之间数据共享</p><ul><li><p>docker修改，主机同步获得 。</p></li><li><p>主机修改，docker同步获得。</p></li><li><p>docker容器stop，主机修改，docker容器重启后同步数据</p></li></ul><h3 id="_5-2-读写规则映射添加说明" tabindex="-1"><a class="header-anchor" href="#_5-2-读写规则映射添加说明" aria-hidden="true">#</a> 5.2 读写规则映射添加说明</h3><p><strong>读写(默认)</strong>： rw = read + write</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -it --privileged=true -v /宿主机绝对路径目录:/容器内目录:rw 镜像名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认同上案例，默认就是rw</p><p><strong>只读</strong>：ro = read only</p><p>容器实例内部被限制，只能读取不能写。</p><p>此时如果宿主机写入内容，可以同步给容器内，容器可以读取到。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -it --privileged=true -v /宿主机绝对路径目录:/容器内目录:ro 镜像名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-3-卷的继承和共享" tabindex="-1"><a class="header-anchor" href="#_5-3-卷的继承和共享" aria-hidden="true">#</a> 5.3 卷的继承和共享</h3><p>容器1完成和宿主机的映射</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -it --privileged=true -v /mydocker/ubuntu:/tmp --name u1 ubuntu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>器2继承容器1的卷规则</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -it  --privileged=true --volumes-from 父类  --name u2 ubuntu

docker run -it  --privileged=true --volumes-from u1 --name u2 ubuntu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 容器1</span>
<span class="token punctuation">[</span>root@192 ubuntu<span class="token punctuation">]</span><span class="token comment"># docker inspect u1</span>
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;Id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;f02ce04d7ec7e7cbefe7441a3502c64c9e8d4132dc46e29e754a35fae8079610&quot;</span>,
        <span class="token string">&quot;Created&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2023-12-09T14:40:55.028788632Z&quot;</span>,
        <span class="token string">&quot;Path&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;bash&quot;</span>,
        <span class="token string">&quot;Args&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
        <span class="token string">&quot;State&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Status&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;running&quot;</span>,
            <span class="token string">&quot;Running&quot;</span><span class="token builtin class-name">:</span> true,
<span class="token punctuation">..</span>.
        <span class="token string">&quot;Mounts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token string">&quot;Type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;bind&quot;</span>,
                <span class="token string">&quot;Source&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/mydocker/ubuntu&quot;</span>,
                <span class="token string">&quot;Destination&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/tmp&quot;</span>,
                <span class="token string">&quot;Mode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                <span class="token string">&quot;RW&quot;</span><span class="token builtin class-name">:</span> true,
                <span class="token string">&quot;Propagation&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;rprivate&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>,
<span class="token punctuation">..</span>.
<span class="token punctuation">[</span>root@192 ubuntu<span class="token punctuation">]</span><span class="token comment"># docker inspect u2</span>
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;Id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;4d43588c69aa161a546ee86dab20ef0084c92239dbcc3ae406850216fd0de777&quot;</span>,
        <span class="token string">&quot;Created&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2023-12-09T14:41:40.922894456Z&quot;</span>,
        <span class="token string">&quot;Path&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;bash&quot;</span>,
        <span class="token string">&quot;Args&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
        <span class="token string">&quot;State&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Status&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;running&quot;</span>,
            <span class="token string">&quot;Running&quot;</span><span class="token builtin class-name">:</span> true,
        <span class="token string">&quot;Mounts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token string">&quot;Type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;bind&quot;</span>,
                <span class="token string">&quot;Source&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/mydocker/ubuntu&quot;</span>,
                <span class="token string">&quot;Destination&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/tmp&quot;</span>,
                <span class="token string">&quot;Mode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                <span class="token string">&quot;RW&quot;</span><span class="token builtin class-name">:</span> true,
                <span class="token string">&quot;Propagation&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;rprivate&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>,
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,42),l=[i];function o(p,c){return s(),a("div",null,l)}const d=n(t,[["render",o],["__file","07-Docker容器数据卷.html.vue"]]);export{d as default};
