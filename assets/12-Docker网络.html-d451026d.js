import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c as i,a as n,b as a,d as e,e as t}from"./app-53ef2baa.js";const c="/assets/image-20231211230804743-1fd1b874.png",r="/assets/image-20231211231629023-6b3d1ba9.png",u="/assets/image-20231211234159263-38fe447c.png",d={},m=t(`<h1 id="docker网络" tabindex="-1"><a class="header-anchor" href="#docker网络" aria-hidden="true">#</a> Docker网络</h1><h2 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述" aria-hidden="true">#</a> 1 概述</h2><p><strong>在停止docker时提示：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># systemctl stop docker</span>
Warning: Stopping docker.service, but it can still be activated by:
  docker.socket
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>原因：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>This is because in addition to the docker.service unit file, there is a docker.socket unit file… this is for socket activation. The warning means if you try to connect to the docker socket while the docker service is not running, then systemd will automatically start docker for you. You can get rid of this by removing /lib/systemd/system/docker.socket… you may also need to remove -H fd:// from the docker.service unit file.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>解释</strong></p><p>这是因为除了docker.service单元文件，还有一个docker.socket单元文件…docker.socket这是用于套接字激活。<br> 该警告意味着：如果你试图连接到docker socket，而docker服务没有运行，系统将自动启动docker。</p><p><strong>解决方案</strong></p><ul><li>方案一</li></ul><p>你可以删除 /lib/systemd/system/docker.socket</p><p>从docker中 docker.service 文件 删除 fd://，即remove -H fd://</p><ul><li>方案二</li></ul><p>如果不想被访问时自动启动服务</p><p>输入命令：sudo systemctl stop docker.socket</p><p><strong>docker不启动，默认网络情况</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker images</span>
Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the <span class="token function">docker</span> daemon running?
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># ifconfig</span>
ens33: <span class="token assign-left variable">flags</span><span class="token operator">=</span><span class="token number">416</span><span class="token operator"><span class="token file-descriptor important">3</span>&lt;</span>UP,BROADCAST,RUNNING,MULTICAST<span class="token operator">&gt;</span>  mtu <span class="token number">1500</span>
        inet <span class="token number">192.168</span>.11.132  netmask <span class="token number">255.255</span>.255.0  broadcast <span class="token number">192.168</span>.11.255
        inet6 fe80::479b:a71c:fa6b:e660  prefixlen <span class="token number">64</span>  scopeid 0x2<span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span>link<span class="token operator">&gt;</span>
        ether 00:50:56:2f:34:83  txqueuelen <span class="token number">1000</span>  <span class="token punctuation">(</span>Ethernet<span class="token punctuation">)</span>
        RX packets <span class="token number">211</span>  bytes <span class="token number">19674</span> <span class="token punctuation">(</span><span class="token number">19.2</span> KiB<span class="token punctuation">)</span>
        RX errors <span class="token number">0</span>  dropped <span class="token number">0</span>  overruns <span class="token number">0</span>  frame <span class="token number">0</span>
        TX packets <span class="token number">267</span>  bytes <span class="token number">36824</span> <span class="token punctuation">(</span><span class="token number">35.9</span> KiB<span class="token punctuation">)</span>
        TX errors <span class="token number">0</span>  dropped <span class="token number">0</span> overruns <span class="token number">0</span>  carrier <span class="token number">0</span>  collisions <span class="token number">0</span>

lo: <span class="token assign-left variable">flags</span><span class="token operator">=</span><span class="token number">7</span><span class="token operator"><span class="token file-descriptor important">3</span>&lt;</span>UP,LOOPBACK,RUNNING<span class="token operator">&gt;</span>  mtu <span class="token number">65536</span>
        inet <span class="token number">127.0</span>.0.1  netmask <span class="token number">255.0</span>.0.0
        inet6 ::1  prefixlen <span class="token number">128</span>  scopeid 0x1<span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span>host<span class="token operator">&gt;</span>
        loop  txqueuelen <span class="token number">1000</span>  <span class="token punctuation">(</span>Local Loopback<span class="token punctuation">)</span>
        RX packets <span class="token number">48</span>  bytes <span class="token number">4080</span> <span class="token punctuation">(</span><span class="token number">3.9</span> KiB<span class="token punctuation">)</span>
        RX errors <span class="token number">0</span>  dropped <span class="token number">0</span>  overruns <span class="token number">0</span>  frame <span class="token number">0</span>
        TX packets <span class="token number">48</span>  bytes <span class="token number">4080</span> <span class="token punctuation">(</span><span class="token number">3.9</span> KiB<span class="token punctuation">)</span>
        TX errors <span class="token number">0</span>  dropped <span class="token number">0</span> overruns <span class="token number">0</span>  carrier <span class="token number">0</span>  collisions <span class="token number">0</span>

virbr0: <span class="token assign-left variable">flags</span><span class="token operator">=</span><span class="token number">409</span><span class="token operator"><span class="token file-descriptor important">9</span>&lt;</span>UP,BROADCAST,MULTICAST<span class="token operator">&gt;</span>  mtu <span class="token number">1500</span>
        inet <span class="token number">192.168</span>.122.1  netmask <span class="token number">255.255</span>.255.0  broadcast <span class="token number">192.168</span>.122.255
        ether <span class="token number">52</span>:54:00:50:70:8e  txqueuelen <span class="token number">1000</span>  <span class="token punctuation">(</span>Ethernet<span class="token punctuation">)</span>
        RX packets <span class="token number">0</span>  bytes <span class="token number">0</span> <span class="token punctuation">(</span><span class="token number">0.0</span> B<span class="token punctuation">)</span>
        RX errors <span class="token number">0</span>  dropped <span class="token number">0</span>  overruns <span class="token number">0</span>  frame <span class="token number">0</span>
        TX packets <span class="token number">0</span>  bytes <span class="token number">0</span> <span class="token punctuation">(</span><span class="token number">0.0</span> B<span class="token punctuation">)</span>
        TX errors <span class="token number">0</span>  dropped <span class="token number">0</span> overruns <span class="token number">0</span>  carrier <span class="token number">0</span>  collisions <span class="token number">0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ens33：192.168.11.132宿主机的地址</p><p>lo：local：本地回环链路：127.0.0.1</p><p>virbr0：在CentOS7的安装过程中如果有<strong>选择相关虚拟化的的服务安装系统后</strong>，启动网卡时会发现有一个以网桥连接的私网地址的virbr0网卡(virbr0网卡：它还有一个固定的默认IP地址192.168.122.1)，是做虚拟机网桥的使用的，其作用是为连接其上的虚机网卡提供 NAT访问外网的功能。</p><p>我们之前学习Linux安装，勾选安装系统的时候附带了libvirt服务才会生成的一个东西，如果不需要可以直接将libvirtd服务卸载，<code>yum remove libvirt-libs.x86_64</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># ip addr</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope <span class="token function">host</span>
       valid_lft forever preferred_lft forever
<span class="token number">2</span>: ens33: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc pfifo_fast state UP group default qlen <span class="token number">1000</span>
    link/ether 00:50:56:2f:34:83 brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">192.168</span>.11.132/24 brd <span class="token number">192.168</span>.11.255 scope global noprefixroute ens33
       valid_lft forever preferred_lft forever
    inet6 fe80::479b:a71c:fa6b:e660/64 scope <span class="token function">link</span> noprefixroute
       valid_lft forever preferred_lft forever
<span class="token number">3</span>: virbr0: <span class="token operator">&lt;</span>NO-CARRIER,BROADCAST,MULTICAST,UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue state DOWN group default qlen <span class="token number">1000</span>
    link/ether <span class="token number">52</span>:54:00:50:70:8e brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">192.168</span>.122.1/24 brd <span class="token number">192.168</span>.122.255 scope global virbr0
       valid_lft forever preferred_lft forever
<span class="token number">4</span>: virbr0-nic: <span class="token operator">&lt;</span>BROADCAST,MULTICAST<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc pfifo_fast master virbr0 state DOWN group default qlen <span class="token number">1000</span>
    link/ether <span class="token number">52</span>:54:00:50:70:8e brd ff:ff:ff:ff:ff:ff
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>docker启动后，网络情况</strong></p><p>会产生一个名为docker0的虚拟网桥</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># ifconfig</span>
docker0: <span class="token assign-left variable">flags</span><span class="token operator">=</span><span class="token number">409</span><span class="token operator"><span class="token file-descriptor important">9</span>&lt;</span>UP,BROADCAST,MULTICAST<span class="token operator">&gt;</span>  mtu <span class="token number">1500</span>
        inet <span class="token number">172.17</span>.0.1  netmask <span class="token number">255.255</span>.0.0  broadcast <span class="token number">172.17</span>.255.255
        ether 02:42:25:b3:56:3b  txqueuelen <span class="token number">0</span>  <span class="token punctuation">(</span>Ethernet<span class="token punctuation">)</span>
        RX packets <span class="token number">0</span>  bytes <span class="token number">0</span> <span class="token punctuation">(</span><span class="token number">0.0</span> B<span class="token punctuation">)</span>
        RX errors <span class="token number">0</span>  dropped <span class="token number">0</span>  overruns <span class="token number">0</span>  frame <span class="token number">0</span>
        TX packets <span class="token number">0</span>  bytes <span class="token number">0</span> <span class="token punctuation">(</span><span class="token number">0.0</span> B<span class="token punctuation">)</span>
        TX errors <span class="token number">0</span>  dropped <span class="token number">0</span> overruns <span class="token number">0</span>  carrier <span class="token number">0</span>  collisions <span class="token number">0</span>

ens33: <span class="token assign-left variable">flags</span><span class="token operator">=</span><span class="token number">416</span><span class="token operator"><span class="token file-descriptor important">3</span>&lt;</span>UP,BROADCAST,RUNNING,MULTICAST<span class="token operator">&gt;</span>  mtu <span class="token number">1500</span>
        inet <span class="token number">192.168</span>.11.132  netmask <span class="token number">255.255</span>.255.0  broadcast <span class="token number">192.168</span>.11.255
        inet6 fe80::479b:a71c:fa6b:e660  prefixlen <span class="token number">64</span>  scopeid 0x2<span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span>link<span class="token operator">&gt;</span>
        ether 00:50:56:2f:34:83  txqueuelen <span class="token number">1000</span>  <span class="token punctuation">(</span>Ethernet<span class="token punctuation">)</span>
        RX packets <span class="token number">2277</span>  bytes <span class="token number">160994</span> <span class="token punctuation">(</span><span class="token number">157.2</span> KiB<span class="token punctuation">)</span>
        RX errors <span class="token number">0</span>  dropped <span class="token number">0</span>  overruns <span class="token number">0</span>  frame <span class="token number">0</span>
        TX packets <span class="token number">3397</span>  bytes <span class="token number">406350</span> <span class="token punctuation">(</span><span class="token number">396.8</span> KiB<span class="token punctuation">)</span>
        TX errors <span class="token number">0</span>  dropped <span class="token number">0</span> overruns <span class="token number">0</span>  carrier <span class="token number">0</span>  collisions <span class="token number">0</span>

lo: <span class="token assign-left variable">flags</span><span class="token operator">=</span><span class="token number">7</span><span class="token operator"><span class="token file-descriptor important">3</span>&lt;</span>UP,LOOPBACK,RUNNING<span class="token operator">&gt;</span>  mtu <span class="token number">65536</span>
        inet <span class="token number">127.0</span>.0.1  netmask <span class="token number">255.0</span>.0.0
        inet6 ::1  prefixlen <span class="token number">128</span>  scopeid 0x1<span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span>host<span class="token operator">&gt;</span>
        loop  txqueuelen <span class="token number">1000</span>  <span class="token punctuation">(</span>Local Loopback<span class="token punctuation">)</span>
        RX packets <span class="token number">48</span>  bytes <span class="token number">4080</span> <span class="token punctuation">(</span><span class="token number">3.9</span> KiB<span class="token punctuation">)</span>
        RX errors <span class="token number">0</span>  dropped <span class="token number">0</span>  overruns <span class="token number">0</span>  frame <span class="token number">0</span>
        TX packets <span class="token number">48</span>  bytes <span class="token number">4080</span> <span class="token punctuation">(</span><span class="token number">3.9</span> KiB<span class="token punctuation">)</span>
        TX errors <span class="token number">0</span>  dropped <span class="token number">0</span> overruns <span class="token number">0</span>  carrier <span class="token number">0</span>  collisions <span class="token number">0</span>

virbr0: <span class="token assign-left variable">flags</span><span class="token operator">=</span><span class="token number">409</span><span class="token operator"><span class="token file-descriptor important">9</span>&lt;</span>UP,BROADCAST,MULTICAST<span class="token operator">&gt;</span>  mtu <span class="token number">1500</span>
        inet <span class="token number">192.168</span>.122.1  netmask <span class="token number">255.255</span>.255.0  broadcast <span class="token number">192.168</span>.122.255
        ether <span class="token number">52</span>:54:00:50:70:8e  txqueuelen <span class="token number">1000</span>  <span class="token punctuation">(</span>Ethernet<span class="token punctuation">)</span>
        RX packets <span class="token number">0</span>  bytes <span class="token number">0</span> <span class="token punctuation">(</span><span class="token number">0.0</span> B<span class="token punctuation">)</span>
        RX errors <span class="token number">0</span>  dropped <span class="token number">0</span>  overruns <span class="token number">0</span>  frame <span class="token number">0</span>
        TX packets <span class="token number">0</span>  bytes <span class="token number">0</span> <span class="token punctuation">(</span><span class="token number">0.0</span> B<span class="token punctuation">)</span>
        TX errors <span class="token number">0</span>  dropped <span class="token number">0</span> overruns <span class="token number">0</span>  carrier <span class="token number">0</span>  collisions <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看docker网络模式命令，默认创建3大网络模式。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker network ls</span>
NETWORK ID     NAME      DRIVER    SCOPE
747ee8aa1e50   bridge    bridge    <span class="token builtin class-name">local</span>
fe569c6d7d60   <span class="token function">host</span>      <span class="token function">host</span>      <span class="token builtin class-name">local</span>
3193701f6959   none      null      <span class="token builtin class-name">local</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-常用基本命令" tabindex="-1"><a class="header-anchor" href="#_2-常用基本命令" aria-hidden="true">#</a> 2 常用基本命令</h2><p><strong>All命令</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker network --help</span>

Usage:  <span class="token function">docker</span> network COMMAND

Manage networks

Commands:
  connect     Connect a container to a network
  create      Create a network
  disconnect  Disconnect a container from a network
  inspect     Display detailed information on one or <span class="token function">more</span> networks
  <span class="token function">ls</span>          List networks
  prune       Remove all unused networks
  <span class="token function">rm</span>          Remove one or <span class="token function">more</span> networks

Run <span class="token string">&#39;docker network COMMAND --help&#39;</span> <span class="token keyword">for</span> <span class="token function">more</span> information on a command.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>创建网络</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> network create XXX网络名字

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker network create aa_network</span>
69d5b1e7969b8ab285436b9de26715e5d9762b855f026dc4a22c58fcb5d57bab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看网络</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> network <span class="token function">ls</span>

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker network ls</span>
NETWORK ID     NAME         DRIVER    SCOPE
69d5b1e7969b   aa_network   bridge    <span class="token builtin class-name">local</span>
747ee8aa1e50   bridge       bridge    <span class="token builtin class-name">local</span>
fe569c6d7d60   <span class="token function">host</span>         <span class="token function">host</span>      <span class="token builtin class-name">local</span>
3193701f6959   none         null      <span class="token builtin class-name">local</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看网络源数据</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> network inspect XXX网络名字

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker network inspect aa_network</span>
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;aa_network&quot;</span>,
        <span class="token string">&quot;Id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;69d5b1e7969b8ab285436b9de26715e5d9762b855f026dc4a22c58fcb5d57bab&quot;</span>,
        <span class="token string">&quot;Created&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2023-12-11T22:30:13.821670767+08:00&quot;</span>,
        <span class="token string">&quot;Scope&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;local&quot;</span>,
        <span class="token string">&quot;Driver&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;bridge&quot;</span>,
        <span class="token string">&quot;EnableIPv6&quot;</span><span class="token builtin class-name">:</span> false,
        <span class="token string">&quot;IPAM&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Driver&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;default&quot;</span>,
            <span class="token string">&quot;Options&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>,
            <span class="token string">&quot;Config&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token string">&quot;Subnet&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.18.0.0/16&quot;</span>,
                    <span class="token string">&quot;Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.18.0.1&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;Internal&quot;</span><span class="token builtin class-name">:</span> false,
        <span class="token string">&quot;Attachable&quot;</span><span class="token builtin class-name">:</span> false,
        <span class="token string">&quot;Ingress&quot;</span><span class="token builtin class-name">:</span> false,
        <span class="token string">&quot;ConfigFrom&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Network&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;ConfigOnly&quot;</span><span class="token builtin class-name">:</span> false,
        <span class="token string">&quot;Containers&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>,
        <span class="token string">&quot;Options&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>,
        <span class="token string">&quot;Labels&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>删除网络</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> network <span class="token function">rm</span> XXX网络名字

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker network rm aa_network</span>
aa_network
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-作用" tabindex="-1"><a class="header-anchor" href="#_3-作用" aria-hidden="true">#</a> 3 作用</h2><p>容器间的互联和通信以及端口映射</p><p>容器IP变动时候可以通过服务名直接网络通信而不受到影响</p><h2 id="_4-网络模式" tabindex="-1"><a class="header-anchor" href="#_4-网络模式" aria-hidden="true">#</a> 4 网络模式</h2><h3 id="_4-1-总体介绍" tabindex="-1"><a class="header-anchor" href="#_4-1-总体介绍" aria-hidden="true">#</a> 4.1 总体介绍</h3><table><thead><tr><th>网络模式</th><th>简介</th></tr></thead><tbody><tr><td>bridge</td><td>为每一个容器分配、设置IP等，并将容器连接到<code>docker0</code><br>虚拟网桥，默认为该模式。</td></tr><tr><td>host</td><td>容器将不会虚拟出自己的网卡，配置自己的IP等，而是使用宿主机的IP和端口。</td></tr><tr><td>none</td><td>容器有独立的Network namespace，但并没有对其进行任何网络设置，如分配veth pair和网桥连接，IP等。</td></tr><tr><td>container</td><td>新创建的容器不会创建自己的网卡和配置自己的IP，而是和一个指定的容器共享IP、端口范围等。</td></tr></tbody></table><p>bridge模式：使用--network bridge指定，默认使用docker0</p><p>host模式：使用--network host指定</p><p>none模式：使用--network none指定</p><p>container模式：使用--network container:NAME或者容器ID指定</p><h3 id="_4-2-容器内默认网络ip生产规则" tabindex="-1"><a class="header-anchor" href="#_4-2-容器内默认网络ip生产规则" aria-hidden="true">#</a> 4.2 容器内默认网络IP生产规则</h3><p>1、先启动两个ubuntu容器实例</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker run -it --name u1 ubuntu bash</span>
root@1f23f97fddb0:/<span class="token comment"># [root@192 ~]#</span>
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker run -it --name u2 ubuntu bash</span>
root@d709730ebe09:/<span class="token comment"># [root@192 ~]#</span>
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE     COMMAND   CREATED          STATUS          PORTS     NAMES
d709730ebe09   ubuntu    <span class="token string">&quot;bash&quot;</span>    <span class="token number">9</span> seconds ago    Up <span class="token number">8</span> seconds              u2
1f23f97fddb0   ubuntu    <span class="token string">&quot;bash&quot;</span>    <span class="token number">18</span> seconds ago   Up <span class="token number">17</span> seconds             u1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、docker inspect 容器ID or 容器名字</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker inspect u1 | tail -n 20</span>
            <span class="token string">&quot;Networks&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;bridge&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                    <span class="token string">&quot;IPAMConfig&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;Links&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;Aliases&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;NetworkID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;747ee8aa1e50b138707a1b858b8d5a467a83849ee4258aa54a14c51c7e44eeec&quot;</span>,
                    <span class="token string">&quot;EndpointID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;a87814307525e47eba7a2ec6512bfcdff758f9e9ec01a476ef54dd8e614928da&quot;</span>,
                    <span class="token string">&quot;Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.17.0.1&quot;</span>,
                    <span class="token string">&quot;IPAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.17.0.2&quot;</span>,  <span class="token comment">#u1 IP地址</span>
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
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker inspect u2 | tail -n 20</span>
            <span class="token string">&quot;Networks&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;bridge&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                    <span class="token string">&quot;IPAMConfig&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;Links&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;Aliases&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;NetworkID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;747ee8aa1e50b138707a1b858b8d5a467a83849ee4258aa54a14c51c7e44eeec&quot;</span>,
                    <span class="token string">&quot;EndpointID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1c71f8d0ef9c2b105232377cd97ceb36be5e96abb8f2ac7767a8d65f987f2129&quot;</span>,
                    <span class="token string">&quot;Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.17.0.1&quot;</span>,
                    <span class="token string">&quot;IPAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.17.0.3&quot;</span>, <span class="token comment">#u2 IP地址</span>
                    <span class="token string">&quot;IPPrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">16</span>,
                    <span class="token string">&quot;IPv6Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                    <span class="token string">&quot;GlobalIPv6Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                    <span class="token string">&quot;GlobalIPv6PrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
                    <span class="token string">&quot;MacAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;02:42:ac:11:00:03&quot;</span>,
                    <span class="token string">&quot;DriverOpts&quot;</span><span class="token builtin class-name">:</span> null
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、关闭u2实例，新建u3，查看ip变化</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker stop u2</span>
u2
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE     COMMAND   CREATED         STATUS         PORTS     NAMES
1f23f97fddb0   ubuntu    <span class="token string">&quot;bash&quot;</span>    <span class="token number">4</span> minutes ago   Up <span class="token number">4</span> minutes             u1
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker run -it --name u3 ubuntu bash</span>
root@3d293c585a93:/<span class="token comment"># [root@192 ~]#</span>
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment">#</span>
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker inspect u3 | tail -n 20</span>
            <span class="token string">&quot;Networks&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;bridge&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                    <span class="token string">&quot;IPAMConfig&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;Links&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;Aliases&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;NetworkID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;747ee8aa1e50b138707a1b858b8d5a467a83849ee4258aa54a14c51c7e44eeec&quot;</span>,
                    <span class="token string">&quot;EndpointID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;f7f75b574cd0bc7ca484c5590ce4ef2497f13e9e067780ede63003028532def5&quot;</span>,
                    <span class="token string">&quot;Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.17.0.1&quot;</span>,
                    <span class="token string">&quot;IPAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.17.0.3&quot;</span>, <span class="token comment">#u3 IP地址</span>
                    <span class="token string">&quot;IPPrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">16</span>,
                    <span class="token string">&quot;IPv6Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                    <span class="token string">&quot;GlobalIPv6Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                    <span class="token string">&quot;GlobalIPv6PrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
                    <span class="token string">&quot;MacAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;02:42:ac:11:00:03&quot;</span>,
                    <span class="token string">&quot;DriverOpts&quot;</span><span class="token builtin class-name">:</span> null
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结论：docker容器内部的ip是有可能会发生改变的</p><h3 id="_4-3-bridge" tabindex="-1"><a class="header-anchor" href="#_4-3-bridge" aria-hidden="true">#</a> 4.3 bridge</h3><p>Docker 服务默认会创建一个 docker0 网桥（其上有一个 docker0 内部接口），该桥接网络的名称为docker0，它在<strong>内核层</strong>连通了其他的物理或虚拟网卡，这就将所有容器和本地主机都放到<strong>同一个物理网络</strong>。Docker 默认指定了 docker0 接口 的 IP 地址和子网掩码，<strong>让主机和容器之间可以通过网桥相互通信。</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看 bridge 网络的详细信息，并通过 grep 获取名称项</span>

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker network inspect bridge</span>
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;bridge&quot;</span>,
        <span class="token string">&quot;Id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;747ee8aa1e50b138707a1b858b8d5a467a83849ee4258aa54a14c51c7e44eeec&quot;</span>,
        <span class="token string">&quot;Created&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2023-12-11T22:23:31.137536958+08:00&quot;</span>,
        <span class="token string">&quot;Scope&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;local&quot;</span>,
        <span class="token string">&quot;Driver&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;bridge&quot;</span>,
        <span class="token string">&quot;EnableIPv6&quot;</span><span class="token builtin class-name">:</span> false,
        <span class="token string">&quot;IPAM&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Driver&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;default&quot;</span>,
            <span class="token string">&quot;Options&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;Config&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token string">&quot;Subnet&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.17.0.0/16&quot;</span>,
                    <span class="token string">&quot;Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.17.0.1&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;Internal&quot;</span><span class="token builtin class-name">:</span> false,
        <span class="token string">&quot;Attachable&quot;</span><span class="token builtin class-name">:</span> false,
        <span class="token string">&quot;Ingress&quot;</span><span class="token builtin class-name">:</span> false,
        <span class="token string">&quot;ConfigFrom&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Network&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;ConfigOnly&quot;</span><span class="token builtin class-name">:</span> false,
        <span class="token string">&quot;Containers&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;1f23f97fddb04d1ca1fc3653a96608bf27f28d32aab2876a08f5e586c42cc52a&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;u1&quot;</span>,
                <span class="token string">&quot;EndpointID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;a87814307525e47eba7a2ec6512bfcdff758f9e9ec01a476ef54dd8e614928da&quot;</span>,
                <span class="token string">&quot;MacAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;02:42:ac:11:00:02&quot;</span>,
                <span class="token string">&quot;IPv4Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.17.0.2/16&quot;</span>,
                <span class="token string">&quot;IPv6Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;3d293c585a93e194eff4f165d629d59bfdb8d1cb49da2afa7bbaf6633819ff50&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;u3&quot;</span>,
                <span class="token string">&quot;EndpointID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;f7f75b574cd0bc7ca484c5590ce4ef2497f13e9e067780ede63003028532def5&quot;</span>,
                <span class="token string">&quot;MacAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;02:42:ac:11:00:03&quot;</span>,
                <span class="token string">&quot;IPv4Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.17.0.3/16&quot;</span>,
                <span class="token string">&quot;IPv6Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;Options&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;com.docker.network.bridge.default_bridge&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;true&quot;</span>,
            <span class="token string">&quot;com.docker.network.bridge.enable_icc&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;true&quot;</span>,
            <span class="token string">&quot;com.docker.network.bridge.enable_ip_masquerade&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;true&quot;</span>,
            <span class="token string">&quot;com.docker.network.bridge.host_binding_ipv4&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;0.0.0.0&quot;</span>,
            <span class="token string">&quot;com.docker.network.bridge.name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;docker0&quot;</span>,
            <span class="token string">&quot;com.docker.network.driver.mtu&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1500&quot;</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;Labels&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker network inspect bridge | grep name</span>
            <span class="token string">&quot;com.docker.network.bridge.name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;docker0&quot;</span>,

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># ifconfig</span>
docker0: <span class="token assign-left variable">flags</span><span class="token operator">=</span><span class="token number">416</span><span class="token operator"><span class="token file-descriptor important">3</span>&lt;</span>UP,BROADCAST,RUNNING,MULTICAST<span class="token operator">&gt;</span>  mtu <span class="token number">1500</span>
        inet <span class="token number">172.17</span>.0.1  netmask <span class="token number">255.255</span>.0.0  broadcast <span class="token number">172.17</span>.255.255
        inet6 fe80::42:25ff:feb3:563b  prefixlen <span class="token number">64</span>  scopeid 0x2<span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span>link<span class="token operator">&gt;</span>
        ether 02:42:25:b3:56:3b  txqueuelen <span class="token number">0</span>  <span class="token punctuation">(</span>Ethernet<span class="token punctuation">)</span>
        RX packets <span class="token number">0</span>  bytes <span class="token number">0</span> <span class="token punctuation">(</span><span class="token number">0.0</span> B<span class="token punctuation">)</span>
        RX errors <span class="token number">0</span>  dropped <span class="token number">0</span>  overruns <span class="token number">0</span>  frame <span class="token number">0</span>
        TX packets <span class="token number">13</span>  bytes <span class="token number">1752</span> <span class="token punctuation">(</span><span class="token number">1.7</span> KiB<span class="token punctuation">)</span>
        TX errors <span class="token number">0</span>  dropped <span class="token number">0</span> overruns <span class="token number">0</span>  carrier <span class="token number">0</span>  collisions <span class="token number">0</span>

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># ifconfig | grep docker</span>
docker0: <span class="token assign-left variable">flags</span><span class="token operator">=</span><span class="token number">416</span><span class="token operator"><span class="token file-descriptor important">3</span>&lt;</span>UP,BROADCAST,RUNNING,MULTICAST<span class="token operator">&gt;</span>  mtu <span class="token number">1500</span>        
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>说明</strong></p><ol><li><p>Docker使用Linux桥接，在宿主机虚拟一个Docker容器网桥(docker0)，Docker启动一个容器时会根据Docker网桥的网段分配给容器一个IP地址，称为Container-IP，同时Docker网桥是每个容器的默认网关。因为在同一宿主机内的容器都接入同一个网桥，这样容器之间就能够通过容器的Container-IP直接通信。</p></li><li><p>docker run 的时候，没有指定network的话默认使用的网桥模式就是bridge，使用的就是docker0。在宿主机ifconfig，就可以看到docker0和自己create的network(后面讲)eth0，eth1，eth2……代表网卡一，网卡二，网卡三……，lo代表127.0.0.1，即localhost，inet addr用来表示网卡的IP地址</p></li><li><p>网桥docker0创建一对对等虚拟设备接口一个叫veth，另一个叫eth0，成对匹配。</p><ul><li><p>整个宿主机的网桥模式都是docker0，类似一个交换机有一堆接口，每个接口叫veth，在本地主机和容器内分别创建一个虚拟接口，并让他们彼此联通（这样一对接口叫veth pair）；</p></li><li><p>每个容器实例内部也有一块网卡，每个接口叫eth0；</p></li><li><p>docker0上面的每个veth匹配某个容器实例内部的eth0，两两配对，一一匹配。</p></li></ul></li></ol><p>通过上述，将宿主机上的所有容器都连接到这个内部网络上，两个容器在同一个网络下,会从这个网关下各自拿到分配的ip，此时两个容器的网络是互通的。</p><figure><img src="`+c+`" alt="image-20231211230804743" tabindex="0" loading="lazy"><figcaption>image-20231211230804743</figcaption></figure><p><strong>代码</strong></p><p>docker run -d -p 8081:8080 --name tomcat81 billygoo/tomcat8-jdk8</p><p>docker run -d -p 8082:8080 --name tomcat82 billygoo/tomcat8-jdk8</p><p><strong>两两匹配验证</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker run -d -p 8081:8080 --name tomcat81 billygoo/tomcat8-jdk8</span>
465ff5f3348023a7568e05725dd552fa67968a90d9240668e2dcb57057eae7c6
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker run -d -p 8082:8080 --name tomcat82 billygoo/tomcat8-jdk8</span>
be3b6163e007001f3d68223bba0850216e81badefaf07e7ddb9fdb302b69dda7
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE                   COMMAND             CREATED          STATUS          PORTS                                       NAMES
be3b6163e007   billygoo/tomcat8-jdk8   <span class="token string">&quot;catalina.sh run&quot;</span>   <span class="token number">11</span> seconds ago   Up <span class="token number">10</span> seconds   <span class="token number">0.0</span>.0.0:8082-<span class="token operator">&gt;</span><span class="token number">8080</span>/tcp, :::8082-<span class="token operator">&gt;</span><span class="token number">8080</span>/tcp   tomcat82
465ff5f33480   billygoo/tomcat8-jdk8   <span class="token string">&quot;catalina.sh run&quot;</span>   <span class="token number">15</span> seconds ago   Up <span class="token number">14</span> seconds   <span class="token number">0.0</span>.0.0:8081-<span class="token operator">&gt;</span><span class="token number">8080</span>/tcp, :::8081-<span class="token operator">&gt;</span><span class="token number">8080</span>/tcp   tomcat81
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># ip addr | tail -n 8</span>
<span class="token number">18</span>: veth65f09a9@if17: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue master docker0 state UP group default
    link/ether ba:c9:57:8a:cb:38 brd ff:ff:ff:ff:ff:ff link-netnsid <span class="token number">0</span>
    inet6 fe80::b8c9:57ff:fe8a:cb38/64 scope <span class="token function">link</span>
       valid_lft forever preferred_lft forever
<span class="token number">20</span>: vethde93240@if19: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue master docker0 state UP group default
    link/ether 6a:f7:31:bc:2b:9b brd ff:ff:ff:ff:ff:ff link-netnsid <span class="token number">1</span>
    inet6 fe80::68f7:31ff:febc:2b9b/64 scope <span class="token function">link</span>
       valid_lft forever preferred_lft forever

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker exec -it tomcat81 bash</span>
root@465ff5f33480:/usr/local/tomcat<span class="token comment"># ip addr</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
<span class="token number">17</span>: eth0@if18: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue state UP group default
    link/ether 02:42:ac:11:00:02 brd ff:ff:ff:ff:ff:ff link-netnsid <span class="token number">0</span>
    inet <span class="token number">172.17</span>.0.2/16 brd <span class="token number">172.17</span>.255.255 scope global eth0
       valid_lft forever preferred_lft forever
root@465ff5f33480:/usr/local/tomcat<span class="token comment"># exit</span>
<span class="token builtin class-name">exit</span>

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker exec -it tomcat82 bash</span>
root@be3b6163e007:/usr/local/tomcat<span class="token comment"># ip addr</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
<span class="token number">19</span>: eth0@if20: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue state UP group default
    link/ether 02:42:ac:11:00:03 brd ff:ff:ff:ff:ff:ff link-netnsid <span class="token number">0</span>
    inet <span class="token number">172.17</span>.0.3/16 brd <span class="token number">172.17</span>.255.255 scope global eth0
       valid_lft forever preferred_lft forever

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-host" tabindex="-1"><a class="header-anchor" href="#_4-4-host" aria-hidden="true">#</a> 4.4 host</h3><p>直接使用宿主机的 IP 地址与外界进行通信，不再需要额外进行NAT 转换。</p><p>容器将<strong>不会获得</strong>一个独立的Network Namespace， 而是和宿主机共用一个Network Namespace。<strong>容器将不会虚拟出自己的网卡而是使用宿主机的IP和端口。</strong></p><figure><img src="`+r+`" alt="image-20231211231629023" tabindex="0" loading="lazy"><figcaption>image-20231211231629023</figcaption></figure><p><strong>告警代码</strong>：docker run -d -p 8083:8080 --network host --name tomcat83 billygoo/tomcat8-jdk8</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker run -d -p 8083:8080 --network host --name tomcat83 billygoo/tomcat8-jdk8</span>
WARNING: Published ports are discarded when using <span class="token function">host</span> network mode
d37d287674777e4a5a70887ac0d070e6ef634e793b8e01eb7b050ba455283031
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE                   COMMAND             CREATED          STATUS          PORTS                                       NAMES
d37d28767477   billygoo/tomcat8-jdk8   <span class="token string">&quot;catalina.sh run&quot;</span>   <span class="token number">6</span> seconds ago    Up <span class="token number">5</span> seconds                                                tomcat83
be3b6163e007   billygoo/tomcat8-jdk8   <span class="token string">&quot;catalina.sh run&quot;</span>   <span class="token number">13</span> minutes ago   Up <span class="token number">13</span> minutes   <span class="token number">0.0</span>.0.0:8082-<span class="token operator">&gt;</span><span class="token number">8080</span>/tcp, :::8082-<span class="token operator">&gt;</span><span class="token number">8080</span>/tcp   tomcat82
465ff5f33480   billygoo/tomcat8-jdk8   <span class="token string">&quot;catalina.sh run&quot;</span>   <span class="token number">13</span> minutes ago   Up <span class="token number">13</span> minutes   <span class="token number">0.0</span>.0.0:8081-<span class="token operator">&gt;</span><span class="token number">8080</span>/tcp, :::8081-<span class="token operator">&gt;</span><span class="token number">8080</span>/tcp   tomcat81
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**问题：**docke启动时遇见标题中的警告</p><p>**原因：**docker启动时指定--network=host或-net=host，如果还指定了-p映射端口，那这个时候就会有此警告，并且通过-p设置的参数将不会起到任何作用，端口号会以主机端口号为主，重复时则递增。</p><p>**解决:**解决的办法就是使用docker的其他网络模式，例如--network=bridge，这样就可以解决问题，或者直接无视</p><p><strong>正确代码</strong>：docker run -d --network host --name tomcat83 billygoo/tomcat8-jdk8</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker run -d --network host --name tomcat83 billygoo/tomcat8-jdk8</span>
44b01b732afd649d74101aa9b30aa0996d30b9043f900a418172ef2f922bdb28
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE                   COMMAND             CREATED          STATUS          PORTS                                       NAMES
44b01b732afd   billygoo/tomcat8-jdk8   <span class="token string">&quot;catalina.sh run&quot;</span>   <span class="token number">10</span> seconds ago   Up <span class="token number">9</span> seconds                                                tomcat83
be3b6163e007   billygoo/tomcat8-jdk8   <span class="token string">&quot;catalina.sh run&quot;</span>   <span class="token number">17</span> minutes ago   Up <span class="token number">17</span> minutes   <span class="token number">0.0</span>.0.0:8082-<span class="token operator">&gt;</span><span class="token number">8080</span>/tcp, :::8082-<span class="token operator">&gt;</span><span class="token number">8080</span>/tcp   tomcat82
465ff5f33480   billygoo/tomcat8-jdk8   <span class="token string">&quot;catalina.sh run&quot;</span>   <span class="token number">17</span> minutes ago   Up <span class="token number">17</span> minutes   <span class="token number">0.0</span>.0.0:8081-<span class="token operator">&gt;</span><span class="token number">8080</span>/tcp, :::8081-<span class="token operator">&gt;</span><span class="token number">8080</span>/tcp   tomcat81
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看宿主机Ip地址发现没有新增的地址</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># ip addr</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope <span class="token function">host</span>
       valid_lft forever preferred_lft forever
<span class="token number">2</span>: ens33: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc pfifo_fast state UP group default qlen <span class="token number">1000</span>
    link/ether 00:50:56:2f:34:83 brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">192.168</span>.11.132/24 brd <span class="token number">192.168</span>.11.255 scope global noprefixroute ens33
       valid_lft forever preferred_lft forever
    inet6 fe80::479b:a71c:fa6b:e660/64 scope <span class="token function">link</span> noprefixroute
       valid_lft forever preferred_lft forever
<span class="token number">3</span>: virbr0: <span class="token operator">&lt;</span>NO-CARRIER,BROADCAST,MULTICAST,UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue state DOWN group default qlen <span class="token number">1000</span>
    link/ether <span class="token number">52</span>:54:00:50:70:8e brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">192.168</span>.122.1/24 brd <span class="token number">192.168</span>.122.255 scope global virbr0
       valid_lft forever preferred_lft forever
<span class="token number">4</span>: virbr0-nic: <span class="token operator">&lt;</span>BROADCAST,MULTICAST<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc pfifo_fast master virbr0 state DOWN group default qlen <span class="token number">1000</span>
    link/ether <span class="token number">52</span>:54:00:50:70:8e brd ff:ff:ff:ff:ff:ff
<span class="token number">5</span>: docker0: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue state UP group default
    link/ether 02:42:25:b3:56:3b brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">172.17</span>.0.1/16 brd <span class="token number">172.17</span>.255.255 scope global docker0
       valid_lft forever preferred_lft forever
    inet6 fe80::42:25ff:feb3:563b/64 scope <span class="token function">link</span>
       valid_lft forever preferred_lft forever
<span class="token number">18</span>: veth65f09a9@if17: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue master docker0 state UP group default
    link/ether ba:c9:57:8a:cb:38 brd ff:ff:ff:ff:ff:ff link-netnsid <span class="token number">0</span>
    inet6 fe80::b8c9:57ff:fe8a:cb38/64 scope <span class="token function">link</span>
       valid_lft forever preferred_lft forever
<span class="token number">20</span>: vethde93240@if19: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue master docker0 state UP group default
    link/ether 6a:f7:31:bc:2b:9b brd ff:ff:ff:ff:ff:ff link-netnsid <span class="token number">1</span>
    inet6 fe80::68f7:31ff:febc:2b9b/64 scope <span class="token function">link</span>
       valid_lft forever preferred_lft forever
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>进入容器内部查看网络配置</strong>：网络配置与宿主机网络配置相同，说明用的宿主机的网络</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker exec -it tomcat83 bash</span>
root@192:/usr/local/tomcat<span class="token comment"># ip addr</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope <span class="token function">host</span>
       valid_lft forever preferred_lft forever
<span class="token number">2</span>: ens33: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc pfifo_fast state UP group default qlen <span class="token number">1000</span>
    link/ether 00:50:56:2f:34:83 brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">192.168</span>.11.132/24 brd <span class="token number">192.168</span>.11.255 scope global noprefixroute ens33
       valid_lft forever preferred_lft forever
    inet6 fe80::479b:a71c:fa6b:e660/64 scope <span class="token function">link</span> noprefixroute
       valid_lft forever preferred_lft forever
<span class="token number">3</span>: virbr0: <span class="token operator">&lt;</span>NO-CARRIER,BROADCAST,MULTICAST,UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue state DOWN group default qlen <span class="token number">1000</span>
    link/ether <span class="token number">52</span>:54:00:50:70:8e brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">192.168</span>.122.1/24 brd <span class="token number">192.168</span>.122.255 scope global virbr0
       valid_lft forever preferred_lft forever
<span class="token number">4</span>: virbr0-nic: <span class="token operator">&lt;</span>BROADCAST,MULTICAST<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc pfifo_fast master virbr0 state DOWN group default qlen <span class="token number">1000</span>
    link/ether <span class="token number">52</span>:54:00:50:70:8e brd ff:ff:ff:ff:ff:ff
<span class="token number">5</span>: docker0: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue state UP group default
    link/ether 02:42:25:b3:56:3b brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">172.17</span>.0.1/16 brd <span class="token number">172.17</span>.255.255 scope global docker0
       valid_lft forever preferred_lft forever
    inet6 fe80::42:25ff:feb3:563b/64 scope <span class="token function">link</span>
       valid_lft forever preferred_lft forever
<span class="token number">18</span>: veth65f09a9@if17: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue master docker0 state UP group default
    link/ether ba:c9:57:8a:cb:38 brd ff:ff:ff:ff:ff:ff link-netnsid <span class="token number">0</span>
    inet6 fe80::b8c9:57ff:fe8a:cb38/64 scope <span class="token function">link</span>
       valid_lft forever preferred_lft forever
<span class="token number">20</span>: vethde93240@if19: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue master docker0 state UP group default
    link/ether 6a:f7:31:bc:2b:9b brd ff:ff:ff:ff:ff:ff link-netnsid <span class="token number">1</span>
    inet6 fe80::68f7:31ff:febc:2b9b/64 scope <span class="token function">link</span>
       valid_lft forever preferred_lft forever
root@192:/usr/local/tomcat<span class="token comment"># exit</span>
<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>看容器实例内部</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker inspect tomcat83 | tail -n 20</span>
            <span class="token string">&quot;Networks&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;host&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                    <span class="token string">&quot;IPAMConfig&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;Links&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;Aliases&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;NetworkID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;fe569c6d7d6098d04f104ccdf8f2551c5e079f02d7f7bbe99410ffda1ddfc40c&quot;</span>,
                    <span class="token string">&quot;EndpointID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;5eb4585c607b397847421494441c7d13f600b1cc9ed687aaf5781ac316591f55&quot;</span>,
                    <span class="token string">&quot;Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                    <span class="token string">&quot;IPAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                    <span class="token string">&quot;IPPrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
                    <span class="token string">&quot;IPv6Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                    <span class="token string">&quot;GlobalIPv6Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                    <span class="token string">&quot;GlobalIPv6PrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
                    <span class="token string">&quot;MacAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                    <span class="token string">&quot;DriverOpts&quot;</span><span class="token builtin class-name">:</span> null
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>没有设置-p的端口映射了，如何访问启动的tomcat83？？</strong></p>`,86),b={href:"http://xn--IP-wz2c754c5qn:8080/",target:"_blank",rel:"noopener noreferrer"},k={href:"http://192.168.11.132:8080/",target:"_blank",rel:"noopener noreferrer"},v=t(`<p>在CentOS里面用默认的火狐浏览器访问容器内的tomcat83看到访问成功，因为此时容器的IP借用主机的，</p><p>所以容器共享宿主机网络IP，这样的好处是<strong>外部主机与容器可以直接通信</strong>。</p><h3 id="_4-5-none" tabindex="-1"><a class="header-anchor" href="#_4-5-none" aria-hidden="true">#</a> 4.5 none</h3><p>禁用网络功能，只有lo标识(就是127.0.0.1表示本地回环)</p><p>在none模式下，并不为Docker容器进行任何网络配置。</p><p>也就是说，这个Docker容器没有网卡、IP、路由等信息，只有一个lo</p><p>需要我们自己为Docker容器添加网卡、配置IP等。</p><p><strong>代码</strong></p><p>docker run -d -p 8084:8080 --network none --name tomcat84 billygoo/tomcat8-jdk8</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker run -d -p 8084:8080 --network none --name tomcat84 billygoo/tomcat8-jdk8</span>
e4ff2fa83ad68ac09c8fc510a82b8a147ce5b82e270dd5eb28646320efbbd7a0
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE                   COMMAND             CREATED          STATUS          PORTS                                       NAMES
e4ff2fa83ad6   billygoo/tomcat8-jdk8   <span class="token string">&quot;catalina.sh run&quot;</span>   <span class="token number">13</span> seconds ago   Up <span class="token number">12</span> seconds                                               tomcat84
44b01b732afd   billygoo/tomcat8-jdk8   <span class="token string">&quot;catalina.sh run&quot;</span>   <span class="token number">10</span> minutes ago   Up <span class="token number">10</span> minutes                                               tomcat83
be3b6163e007   billygoo/tomcat8-jdk8   <span class="token string">&quot;catalina.sh run&quot;</span>   <span class="token number">27</span> minutes ago   Up <span class="token number">27</span> minutes   <span class="token number">0.0</span>.0.0:8082-<span class="token operator">&gt;</span><span class="token number">8080</span>/tcp, :::8082-<span class="token operator">&gt;</span><span class="token number">8080</span>/tcp   tomcat82
465ff5f33480   billygoo/tomcat8-jdk8   <span class="token string">&quot;catalina.sh run&quot;</span>   <span class="token number">27</span> minutes ago   Up <span class="token number">27</span> minutes   <span class="token number">0.0</span>.0.0:8081-<span class="token operator">&gt;</span><span class="token number">8080</span>/tcp, :::8081-<span class="token operator">&gt;</span><span class="token number">8080</span>/tcp   tomcat81
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>进入容器内部查看</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker exec -it tomcat84 bash</span>
root@e4ff2fa83ad6:/usr/local/tomcat<span class="token comment"># ip addr</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在容器外部查看</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker inspect tomcat84 | tail -n 20</span>
            <span class="token string">&quot;Networks&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;none&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                    <span class="token string">&quot;IPAMConfig&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;Links&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;Aliases&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;NetworkID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;3193701f69596da933ed9da24232dd4c97bd4a945441f3e459b5ca3e60c2108d&quot;</span>,
                    <span class="token string">&quot;EndpointID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;24342ac95aee739d6c11fab4f0d6c1a34835bcbbeeeffab8e63ed8a43958b8b1&quot;</span>,
                    <span class="token string">&quot;Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                    <span class="token string">&quot;IPAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                    <span class="token string">&quot;IPPrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
                    <span class="token string">&quot;IPv6Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                    <span class="token string">&quot;GlobalIPv6Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                    <span class="token string">&quot;GlobalIPv6PrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
                    <span class="token string">&quot;MacAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                    <span class="token string">&quot;DriverOpts&quot;</span><span class="token builtin class-name">:</span> null
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-6-container" tabindex="-1"><a class="header-anchor" href="#_4-6-container" aria-hidden="true">#</a> 4.6 container</h3><p>新建的容器和已经存在的一个容器共享一个网络ip配置而不是和宿主机共享。新创建的容器不会创建自己的网卡、配置自己的IP，而是和一个指定的容器共享IP、端口范围等。同样，两个容器除了网络方面，其他的如文件系统、进程列表等还是隔离的。</p><figure><img src="`+u+`" alt="image-20231211234159263" tabindex="0" loading="lazy"><figcaption>image-20231211234159263</figcaption></figure><p><strong>错误案例</strong>：</p><p>docker run -d -p 8085:8080 --name tomcat85 billygoo/tomcat8-jdk8</p><p>docker run -d -p 8086:8080 --network container:tomcat85 --name tomcat86 billygoo/tomcat8-jdk8</p><p><strong>运行结果</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker run -d -p 8085:8080 --name tomcat85 billygoo/tomcat8-jdk8</span>
a4ed5b8dcd2d51868a8e5eff932c0d3cd63e8a797252004b726c0d4ebb3b5d20
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker run -d -p 8086:8080 --network container:tomcat85 --name tomcat86 billygoo/tomcat8-jdk8</span>
docker: Error response from daemon: conflicting options: port publishing and the container <span class="token builtin class-name">type</span> network mode.
See <span class="token string">&#39;docker run --help&#39;</span><span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相当于tomcat86和tomcat85公用同一个ip同一个端口，导致端口冲突</p><p>本案例用tomcat演示不合适</p><p>换一个镜像给大家演示</p><p><strong>正确案例</strong>：</p><p><strong>Alpine操作系统是一个面向安全的轻型 Linux发行版</strong></p><p>Alpine Linux 是一款独立的、非商业的通用 Linux 发行版，专为追求安全性、简单性和资源效率的用户而设计。 可能很多人没听说过这个 Linux 发行版本，但是经常用 Docker 的朋友可能都用过，因为他小，简单，安全而著称，所以作为基础镜像是非常好的一个选择，可谓是麻雀虽小但五脏俱全，镜像非常小巧，不到 6M的大小，所以特别适合容器打包。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span>                             <span class="token parameter variable">--name</span> alpine1 alpine /bin/sh
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--network</span> container:alpine1 <span class="token parameter variable">--name</span> alpine2 alpine /bin/sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果，验证共用搭桥</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker run -it                             --name alpine1 alpine /bin/sh</span>
/ <span class="token comment"># ipaddr</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
<span class="token number">23</span>: eth0@if24: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue state UP
    link/ether 02:42:ac:11:00:02 brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">172.17</span>.0.2/16 brd <span class="token number">172.17</span>.255.255 scope global eth0
       valid_lft forever preferred_lft forever
/ <span class="token comment">#</span>

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker run -it --network container:alpine1 --name alpine2 alpine /bin/sh</span>
/ <span class="token comment"># ip addr</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
<span class="token number">23</span>: eth0@if24: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue state UP
    link/ether 02:42:ac:11:00:02 brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">172.17</span>.0.2/16 brd <span class="token number">172.17</span>.255.255 scope global eth0
       valid_lft forever preferred_lft forever
/ <span class="token comment">#</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>假如此时关闭alpine1，再看看alpine2</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE     COMMAND     CREATED         STATUS         PORTS     NAMES
61623d40a9bf   alpine    <span class="token string">&quot;/bin/sh&quot;</span>   <span class="token number">2</span> minutes ago   Up <span class="token number">2</span> minutes             alpine2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>23: eth0@if24: 消失了</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker run -it --network container:alpine1 --name alpine2 alpine /bin/sh</span>
/ <span class="token comment"># ip addr</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
<span class="token number">23</span>: eth0@if24: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP,M-DOWN<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue state UP
    link/ether 02:42:ac:11:00:02 brd ff:ff:ff:ff:ff:ff
    inet <span class="token number">172.17</span>.0.2/16 brd <span class="token number">172.17</span>.255.255 scope global eth0
       valid_lft forever preferred_lft forever
/ <span class="token comment"># ip addr</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
/ <span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-7-自定义网络" tabindex="-1"><a class="header-anchor" href="#_4-7-自定义网络" aria-hidden="true">#</a> 4.7 自定义网络</h3><h4 id="before" tabindex="-1"><a class="header-anchor" href="#before" aria-hidden="true">#</a> before</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8081</span>:8080 <span class="token parameter variable">--name</span> tomcat81 billygoo/tomcat8-jdk8
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8082</span>:8080 <span class="token parameter variable">--name</span> tomcat82 billygoo/tomcat8-jdk8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上述成功启动并用docker exec进入各自容器实例内部</p><p><strong>按照IP地址ping是OK的</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker exec -it tomcat81 bash</span>
root@c0994243389a:/usr/local/tomcat<span class="token comment"># ip addr</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
<span class="token number">25</span>: eth0@if26: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue state UP group default
    link/ether 02:42:ac:11:00:02 brd ff:ff:ff:ff:ff:ff link-netnsid <span class="token number">0</span>
    inet <span class="token number">172.17</span>.0.2/16 brd <span class="token number">172.17</span>.255.255 scope global eth0
       valid_lft forever preferred_lft forever
root@c0994243389a:/usr/local/tomcat<span class="token comment"># ping 172.17.0.3</span>
PING <span class="token number">172.17</span>.0.3 <span class="token punctuation">(</span><span class="token number">172.17</span>.0.3<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from <span class="token number">172.17</span>.0.3: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.067</span> ms
<span class="token number">64</span> bytes from <span class="token number">172.17</span>.0.3: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.098</span> ms
<span class="token number">64</span> bytes from <span class="token number">172.17</span>.0.3: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.095</span> ms
^C
--- <span class="token number">172.17</span>.0.3 <span class="token function">ping</span> statistics ---
<span class="token number">4</span> packets transmitted, <span class="token number">4</span> received, <span class="token number">0</span>% packet loss, <span class="token function">time</span> 3005ms
rtt min/avg/max/mdev <span class="token operator">=</span> <span class="token number">0.067</span>/0.084/0.098/0.014 ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker exec -it tomcat82 bash</span>
root@5e8e72fc7988:/usr/local/tomcat<span class="token comment"># ip addr</span>
<span class="token number">1</span>: lo: <span class="token operator">&lt;</span>LOOPBACK,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">65536</span> qdisc noqueue state UNKNOWN group default qlen <span class="token number">1000</span>
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet <span class="token number">127.0</span>.0.1/8 scope <span class="token function">host</span> lo
       valid_lft forever preferred_lft forever
<span class="token number">27</span>: eth0@if28: <span class="token operator">&lt;</span>BROADCAST,MULTICAST,UP,LOWER_UP<span class="token operator">&gt;</span> mtu <span class="token number">1500</span> qdisc noqueue state UP group default
    link/ether 02:42:ac:11:00:03 brd ff:ff:ff:ff:ff:ff link-netnsid <span class="token number">0</span>
    inet <span class="token number">172.17</span>.0.3/16 brd <span class="token number">172.17</span>.255.255 scope global eth0
       valid_lft forever preferred_lft forever
root@5e8e72fc7988:/usr/local/tomcat<span class="token comment"># ping 172.17.0.2</span>
PING <span class="token number">172.17</span>.0.2 <span class="token punctuation">(</span><span class="token number">172.17</span>.0.2<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from <span class="token number">172.17</span>.0.2: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.084</span> ms
<span class="token number">64</span> bytes from <span class="token number">172.17</span>.0.2: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.097</span> ms
<span class="token number">64</span> bytes from <span class="token number">172.17</span>.0.2: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.120</span> ms
^C
--- <span class="token number">172.17</span>.0.2 <span class="token function">ping</span> statistics ---
<span class="token number">7</span> packets transmitted, <span class="token number">7</span> received, <span class="token number">0</span>% packet loss, <span class="token function">time</span> 6007ms
rtt min/avg/max/mdev <span class="token operator">=</span> <span class="token number">0.074</span>/0.091/0.120/0.014 ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按照服务名ping，结果：Name or service not known</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>root@c0994243389a:/usr/local/tomcat<span class="token comment"># ping tomcat82</span>
ping: tomcat82: Name or <span class="token function">service</span> not known

root@5e8e72fc7988:/usr/local/tomcat<span class="token comment"># ping tomcat81</span>
ping: tomcat81: Name or <span class="token function">service</span> not known
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="after" tabindex="-1"><a class="header-anchor" href="#after" aria-hidden="true">#</a> after</h4><p>自定义桥接网络，自定义网络默认使用的是桥接网络bridge</p><p><strong>新建自定义网络gm_network</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker network ls</span>
NETWORK ID     NAME      DRIVER    SCOPE
747ee8aa1e50   bridge    bridge    <span class="token builtin class-name">local</span>
fe569c6d7d60   <span class="token function">host</span>      <span class="token function">host</span>      <span class="token builtin class-name">local</span>
3193701f6959   none      null      <span class="token builtin class-name">local</span>
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker network create gm_network</span>
1e0f05386b5b0fec62f600365bd4f7fe07692c4c0ab9937a130a049830345137
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker network ls</span>
NETWORK ID     NAME         DRIVER    SCOPE
747ee8aa1e50   bridge       bridge    <span class="token builtin class-name">local</span>
1e0f05386b5b   gm_network   bridge    <span class="token builtin class-name">local</span>
fe569c6d7d60   <span class="token function">host</span>         <span class="token function">host</span>      <span class="token builtin class-name">local</span>
3193701f6959   none         null      <span class="token builtin class-name">local</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>新建容器加入上一步新建的自定义网络</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8081</span>:8080 <span class="token parameter variable">--network</span> gm_network <span class="token parameter variable">--name</span> tomcat81 billygoo/tomcat8-jdk8
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8082</span>:8080 <span class="token parameter variable">--network</span> gm_network <span class="token parameter variable">--name</span> tomcat82 billygoo/tomcat8-jdk8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>互相ping测试</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker ps</span>
CONTAINER ID   IMAGE                   COMMAND             CREATED          STATUS          PORTS                                       NAMES
c60e474c0503   billygoo/tomcat8-jdk8   <span class="token string">&quot;catalina.sh run&quot;</span>   <span class="token number">26</span> seconds ago   Up <span class="token number">26</span> seconds   <span class="token number">0.0</span>.0.0:8082-<span class="token operator">&gt;</span><span class="token number">8080</span>/tcp, :::8082-<span class="token operator">&gt;</span><span class="token number">8080</span>/tcp   tomcat82
e4c900d68bd5   billygoo/tomcat8-jdk8   <span class="token string">&quot;catalina.sh run&quot;</span>   <span class="token number">45</span> seconds ago   Up <span class="token number">44</span> seconds   <span class="token number">0.0</span>.0.0:8081-<span class="token operator">&gt;</span><span class="token number">8080</span>/tcp, :::8081-<span class="token operator">&gt;</span><span class="token number">8080</span>/tcp   tomcat81

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker exec -it tomcat81 bash</span>
root@e4c900d68bd5:/usr/local/tomcat<span class="token comment"># ping tomcat82</span>
PING tomcat82 <span class="token punctuation">(</span><span class="token number">172.19</span>.0.3<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from tomcat82.gm_network <span class="token punctuation">(</span><span class="token number">172.19</span>.0.3<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.210</span> ms
<span class="token number">64</span> bytes from tomcat82.gm_network <span class="token punctuation">(</span><span class="token number">172.19</span>.0.3<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.070</span> ms
<span class="token number">64</span> bytes from tomcat82.gm_network <span class="token punctuation">(</span><span class="token number">172.19</span>.0.3<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.076</span> ms
^C
--- tomcat82 <span class="token function">ping</span> statistics ---
<span class="token number">3</span> packets transmitted, <span class="token number">3</span> received, <span class="token number">0</span>% packet loss, <span class="token function">time</span> 2003ms
rtt min/avg/max/mdev <span class="token operator">=</span> <span class="token number">0.070</span>/0.118/0.210/0.065 ms
root@e4c900d68bd5:/usr/local/tomcat<span class="token comment">#</span>


root@c60e474c0503:/usr/local/tomcat<span class="token comment"># ping tomcat81</span>
PING tomcat81 <span class="token punctuation">(</span><span class="token number">172.19</span>.0.2<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from tomcat81.gm_network <span class="token punctuation">(</span><span class="token number">172.19</span>.0.2<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.060</span> ms
<span class="token number">64</span> bytes from tomcat81.gm_network <span class="token punctuation">(</span><span class="token number">172.19</span>.0.2<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.072</span> ms
<span class="token number">64</span> bytes from tomcat81.gm_network <span class="token punctuation">(</span><span class="token number">172.19</span>.0.2<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.085</span> ms
^C
--- tomcat81 <span class="token function">ping</span> statistics ---
<span class="token number">3</span> packets transmitted, <span class="token number">3</span> received, <span class="token number">0</span>% packet loss, <span class="token function">time</span> 2001ms
rtt min/avg/max/mdev <span class="token operator">=</span> <span class="token number">0.060</span>/0.072/0.085/0.012 ms
root@c60e474c0503:/usr/local/tomcat<span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>结论：自定义网络本身就维护好了主机名和ip的对应关系（ip和域名都能通）</strong></p><p><strong>结论：自定义网络本身就维护好了主机名和ip的对应关系（ip和域名都能通）</strong></p><p><strong>结论：自定义网络本身就维护好了主机名和ip的对应关系（ip和域名都能通）</strong></p>`,55);function f(g,q){const s=o("ExternalLinkIcon");return p(),i("div",null,[m,n("p",null,[n("a",b,[a("http://宿主机IP:8080/"),e(s)])]),n("p",null,[n("a",k,[a("http://192.168.11.132:8080/"),e(s)])]),v])}const A=l(d,[["render",f],["__file","12-Docker网络.html.vue"]]);export{A as default};
