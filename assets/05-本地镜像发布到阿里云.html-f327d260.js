import{_ as i}from"./image-20231209180424529-4160243f.js";import{_ as c}from"./image-20231209125326291-2320dd36.js";import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c as r,a as n,b as a,d as u,e as s}from"./app-4dd575ac.js";const d="/assets/image-20231209181022358-169c0f5f.png",p="/assets/image-20231209181123278-e386e404.png",m="/assets/image-20231209181126695-39e1713e.png",g="/assets/image-20231209181222078-a4508c7b.png",b="/assets/image-20231209181227647-6dafcd33.png",v="/assets/1658139971022-400de815-a008-4fbd-8ac3-16d2337d68a3-c6bada7e.png",h="/assets/1658139979398-d997e648-e878-44bf-97a9-99a9b4cc182b-aee10aca.png",k="/assets/image-20231209182831237-aeeef084.png",f={},y=s('<h1 id="本地镜像发布到阿里云" tabindex="-1"><a class="header-anchor" href="#本地镜像发布到阿里云" aria-hidden="true">#</a> 本地镜像发布到阿里云</h1><h2 id="_1-本地镜像发布到阿里云流程" tabindex="-1"><a class="header-anchor" href="#_1-本地镜像发布到阿里云流程" aria-hidden="true">#</a> 1 本地镜像发布到阿里云流程</h2><p>阿里云ECS Docker生态如下图所示：</p><figure><img src="'+i+`" alt="image-20231209180424529" tabindex="0" loading="lazy"><figcaption>image-20231209180424529</figcaption></figure><h2 id="_2-镜像的生成方法" tabindex="-1"><a class="header-anchor" href="#_2-镜像的生成方法" aria-hidden="true">#</a> 2 镜像的生成方法</h2><p>基于当前容器创建一个新的镜像，新功能增强 <code>docker commit [OPTIONS] 容器ID [REPOSITORY[:TAG]]</code></p><p>OPTIONS说明：</p><p>-a :提交的镜像作者；</p><p>-m :提交时的说明文字；</p><h2 id="_3-将本地镜像推送到阿里云" tabindex="-1"><a class="header-anchor" href="#_3-将本地镜像推送到阿里云" aria-hidden="true">#</a> 3 将本地镜像推送到阿里云</h2><p>本地镜像素材原型</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY    TAG       IMAGE ID       CREATED          SIZE
gm/myubuntu   <span class="token number">1.1</span>       6bf1a66c3f23   <span class="token number">11</span> minutes ago   189MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),_={href:"https://promotion.aliyun.com/ntms/act/kubernetes.html",target:"_blank",rel:"noopener noreferrer"},x=s('<h3 id="_3-1-创建仓库镜像" tabindex="-1"><a class="header-anchor" href="#_3-1-创建仓库镜像" aria-hidden="true">#</a> 3.1 创建仓库镜像</h3><p>1.选择控制台，进入容器镜像服务</p><figure><img src="'+c+'" alt="image-20231209125326291" tabindex="0" loading="lazy"><figcaption>image-20231209125326291</figcaption></figure><p>2.选择个人实例</p><figure><img src="'+d+'" alt="image-20231209181022358" tabindex="0" loading="lazy"><figcaption>image-20231209181022358</figcaption></figure><p>3.命名空间</p><figure><img src="'+p+'" alt="image-20231209181123278" tabindex="0" loading="lazy"><figcaption>image-20231209181123278</figcaption></figure><figure><img src="'+m+'" alt="image-20231209181126695" tabindex="0" loading="lazy"><figcaption>image-20231209181126695</figcaption></figure><p>4.仓库名称</p><figure><img src="'+g+'" alt="image-20231209181222078" tabindex="0" loading="lazy"><figcaption>image-20231209181222078</figcaption></figure><figure><img src="'+b+'" alt="image-20231209181227647" tabindex="0" loading="lazy"><figcaption>image-20231209181227647</figcaption></figure><figure><img src="'+v+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>5.进入管理界面获得脚本</p><figure><img src="'+h+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="_3-2-将镜像推送到阿里云" tabindex="-1"><a class="header-anchor" href="#_3-2-将镜像推送到阿里云" aria-hidden="true">#</a> 3.2 将镜像推送到阿里云</h3><p>1.管理界面脚本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>. 登录阿里云Docker Registry
$ <span class="token function">docker</span> login <span class="token parameter variable">--username</span><span class="token operator">=</span>gm_hacker registry.cn-hangzhou.aliyuncs.com
用于登录的用户名为阿里云账号全名，密码为开通服务时设置的密码。
您可以在访问凭证页面修改凭证密码。

<span class="token number">2</span>. 从Registry中拉取镜像
$ <span class="token function">docker</span> pull registry.cn-hangzhou.aliyuncs.com/gm-namespace/ubuntu:<span class="token punctuation">[</span>镜像版本号<span class="token punctuation">]</span>

<span class="token number">3</span>. 将镜像推送到Registry
$ <span class="token function">docker</span> login <span class="token parameter variable">--username</span><span class="token operator">=</span>gm_hacker registry.cn-hangzhou.aliyuncs.com
$ <span class="token function">docker</span> tag <span class="token punctuation">[</span>ImageId<span class="token punctuation">]</span> registry.cn-hangzhou.aliyuncs.com/gm-namespace/ubuntu:<span class="token punctuation">[</span>镜像版本号<span class="token punctuation">]</span>
$ <span class="token function">docker</span> push registry.cn-hangzhou.aliyuncs.com/gm-namespace/ubuntu:<span class="token punctuation">[</span>镜像版本号<span class="token punctuation">]</span>
请根据实际镜像信息替换示例中的<span class="token punctuation">[</span>ImageId<span class="token punctuation">]</span>和<span class="token punctuation">[</span>镜像版本号<span class="token punctuation">]</span>参数。

<span class="token number">4</span>. 选择合适的镜像仓库地址
从ECS推送镜像时，可以选择使用镜像仓库内网地址。推送速度将得到提升并且将不会损耗您的公网流量。
如果您使用的机器位于VPC网络，请使用 registry-vpc.cn-hangzhou.aliyuncs.com 作为Registry的域名登录。

<span class="token number">5</span>. 示例
使用<span class="token string">&quot;docker tag&quot;</span>命令重命名镜像，并将它通过专有网络地址推送至Registry。

$ <span class="token function">docker</span> images
REPOSITORY                                                         TAG                 IMAGE ID            CREATED             VIRTUAL SIZE
registry.aliyuncs.com/acs/agent                                    <span class="token number">0.7</span>-dfb6816         37bb9c63c8b2        <span class="token number">7</span> days ago          <span class="token number">37.89</span> MB

$ <span class="token function">docker</span> tag 37bb9c63c8b2 registry-vpc.cn-hangzhou.aliyuncs.com/acs/agent:0.7-dfb6816

使用 <span class="token string">&quot;docker push&quot;</span> 命令将该镜像推送至远程。
$ <span class="token function">docker</span> push registry-vpc.cn-hangzhou.aliyuncs.com/acs/agent:0.7-dfb6816
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.脚本实例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ docker login --username=gm_hacker registry.cn-hangzhou.aliyuncs.com
$ docker tag 6bf1a66c3f23 registry.cn-hangzhou.aliyuncs.com/gm-namespace/ubuntu:1.1
$ docker push registry.cn-hangzhou.aliyuncs.com/gm-namespace/ubuntu:1.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker login --username=gm_hacker registry.cn-hangzhou.aliyuncs.com</span>
Password:
WARNING<span class="token operator">!</span> Your password will be stored unencrypted <span class="token keyword">in</span> /root/.docker/config.json.
Configure a credential helper to remove this warning. See
https://docs.docker.com/engine/reference/commandline/login/<span class="token comment">#credentials-store</span>

Login Succeeded
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker tag 6bf1a66c3f23 registry.cn-hangzhou.aliyuncs.com/gm-namespace/ubuntu:1.1</span>
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker push registry.cn-hangzhou.aliyuncs.com/gm-namespace/ubuntu:1.1</span>
The push refers to repository <span class="token punctuation">[</span>registry.cn-hangzhou.aliyuncs.com/gm-namespace/ubuntu<span class="token punctuation">]</span>
e9ea2504fa75: Pushed
9f54eef41275: Pushed
<span class="token number">1.1</span>: digest: sha256:1f73aa2b2941c8f294d11663d67deb982b8c071ca847735bae8678691a9618bf size: <span class="token number">741</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.镜像信息</p><figure><img src="`+k+`" alt="image-20231209182831237" tabindex="0" loading="lazy"><figcaption>image-20231209182831237</figcaption></figure><h2 id="_4-将阿里云上的镜像下载到本地" tabindex="-1"><a class="header-anchor" href="#_4-将阿里云上的镜像下载到本地" aria-hidden="true">#</a> 4 将阿里云上的镜像下载到本地</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> pull registry.cn-hangzhou.aliyuncs.com/gm-namespace/ubuntu:1.1

<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker rmi -f 6bf1a66c3f23</span>
Untagged: gm/myubuntu:1.1
Untagged: registry.cn-hangzhou.aliyuncs.com/gm-namespace/ubuntu:1.1
Untagged: registry.cn-hangzhou.aliyuncs.com/gm-namespace/ubuntu@sha256:1f73aa2b2941c8f294d11663d67deb982b8c071ca847735bae8678691a9618bf
Deleted: sha256:6bf1a66c3f230412c9408226329cf3a2843283ece488d2c7a14e03ba33924e2a
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY    TAG       IMAGE ID       CREATED         SIZE
hello-world   latest    9c7a54a9a43c   <span class="token number">7</span> months ago    <span class="token number">13</span>.3kB
tomcat        latest    fb5657adc892   <span class="token number">23</span> months ago   680MB
ubuntu        latest    ba6acccedd29   <span class="token number">2</span> years ago     <span class="token number">72</span>.8MB
centos        latest    5d0da3dc9764   <span class="token number">2</span> years ago     231MB
redis         <span class="token number">6.0</span>.8     16ecd2772934   <span class="token number">3</span> years ago     104MB
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker pull registry.cn-hangzhou.aliyuncs.com/gm-namespace/ubuntu:1.1</span>
<span class="token number">1.1</span>: Pulling from gm-namespace/ubuntu
7b1a6ab2e44d: Already exists
07773d7148ed: Already exists
Digest: sha256:1f73aa2b2941c8f294d11663d67deb982b8c071ca847735bae8678691a9618bf
Status: Downloaded newer image <span class="token keyword">for</span> registry.cn-hangzhou.aliyuncs.com/gm-namespace/ubuntu:1.1
registry.cn-hangzhou.aliyuncs.com/gm-namespace/ubuntu:1.1
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY                                              TAG       IMAGE ID       CREATED          SIZE
registry.cn-hangzhou.aliyuncs.com/gm-namespace/ubuntu   <span class="token number">1.1</span>       6bf1a66c3f23   <span class="token number">36</span> minutes ago   189MB
hello-world                                             latest    9c7a54a9a43c   <span class="token number">7</span> months ago     <span class="token number">13</span>.3kB
tomcat                                                  latest    fb5657adc892   <span class="token number">23</span> months ago    680MB
ubuntu                                                  latest    ba6acccedd29   <span class="token number">2</span> years ago      <span class="token number">72</span>.8MB
centos                                                  latest    5d0da3dc9764   <span class="token number">2</span> years ago      231MB
redis                                                   <span class="token number">6.0</span>.8     16ecd2772934   <span class="token number">3</span> years ago      104MB
<span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># docker run -it 6bf1a66c3f23 /bin/bash</span>
root@c580ffa33150:/<span class="token comment"># ls</span>
a.txt  bin  boot  dev  etc  home  lib  lib32  lib64  libx32  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@c580ffa33150:/<span class="token comment"># cat a.txt</span>
abcd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function z(I,E){const e=o("ExternalLinkIcon");return l(),r("div",null,[y,n("p",null,[a("登录阿里云开发者平台"),n("a",_,[a("https://promotion.aliyun.com/ntms/act/kubernetes.html"),u(e)])]),x])}const B=t(f,[["render",z],["__file","05-本地镜像发布到阿里云.html.vue"]]);export{B as default};
