---
date: 2021-09-10
category:
  - Docker
tag:
  - Docker
order: 7
---

# Docker容器数据卷

## 1 坑：容器卷记得加入

```
--privileged=true
```

 Docker挂载主机目录访问**如果出现cannot open directory .: Permission denied**

**解决办法：在挂载目录后多加一个--privileged=true参数即可**

如果是CentOS7，安全模块会比之前系统版本加强，不安全的会先禁止，所以目录挂载的情况被默认为不安全的行为，在SELinux里面挂载目录被禁止掉了，如果要开启，我们一般使用--privileged=true命令，扩大容器的权限，解决挂载目录没有权限的问题，也即使用该参数，container内的root拥有真正的root权限，否则，container内的root只是外部的一个普通用户权限。

## 2 回顾下上一讲的知识点，参数V

```sh
docker run -d -p 5000:5000  -v /zzyyuse/myregistry/:/tmp/registry --privileged=true registry

[root@192 ~]# docker run -d -p 5000:5000  -v /zzyyuse/myregistry/:/tmp/registry --privileged=true registry
2ee03a1af4cdb2697cbcbfadfe044ce46bcc640b9e284147d9e6d221defa66bc
[root@192 ~]# docker ps
CONTAINER ID   IMAGE      COMMAND                   CREATED          STATUS          PORTS                                       NAMES
2ee03a1af4cd   registry   "/entrypoint.sh /etc…"   13 seconds ago   Up 12 seconds   0.0.0.0:5000->5000/tcp, :::5000->5000/tcp   kind_ca                                                                        nnon
[root@192 ~]# docker ps
CONTAINER ID   IMAGE      COMMAND                   CREATED          STATUS          PORTS                                       NAMES
2ee03a1af4cd   registry   "/entrypoint.sh /etc…"   19 seconds ago   Up 18 seconds   0.0.0.0:5000->5000/tcp, :::5000->5000/tcp   kind_cannon
```

## 3 是什么

卷就是目录或文件，存在于一个或多个容器中，由docker挂载到容器，但不属于联合文件系统，因此能够绕过Union File System提供一些用于持续存储或共享数据的特性：

卷的设计目的就是**数据的持久化**，完全独立于容器的生存周期，因此Docker不会在容器删除时删除其挂载的数据卷。

**一句话：有点类似我们Redis里面的rdb和aof文件。**

将docker容器内的数据保存进宿主机的磁盘中，运行一个带有容器卷存储功能的容器实例。

```
docker run -it -v /宿主机绝对路径目录:/容器内目录 --privileged=true 镜像名
```

## 4 能干嘛

将运用与运行的环境打包镜像，run后形成容器实例运行 ，但是我们对数据的要求希望是持久化的。

Docker容器产生的数据，如果不备份，那么当容器实例删除后，容器内的数据自然也就没有了。为了能保存数据在docker中我们使用卷。

 特点：

1. **数据卷可在容器之间共享或重用数据**
2. **卷中的更改可以直接实时生效，爽**
3. **数据卷中的更改不会包含在镜像的更新中**
4. **数据卷的生命周期一直持续到没有容器使用它为止**

## 5 数据卷案例

### 5.1 宿主vs容器之间映射添加容器卷

1.直接命令添加

```
docker run -it --privileged=true -v /宿主机绝对路径目录:/容器内目录 镜像名
```

```sh
docker run -it --name myu3 --privileged=true -v /tmp/myHostData:/tmp/myDockerData ubuntu /bin/bash

[root@192 ~]# docker images
REPOSITORY                     TAG       IMAGE ID       CREATED          SIZE
192.168.11.132:5000/myubuntu   1.2       776f0b498306   52 minutes ago   122MB
tomcat                         latest    fb5657adc892   23 months ago    680MB
registry                       latest    b8604a3fe854   2 years ago      26.2MB
ubuntu                         latest    ba6acccedd29   2 years ago      72.8MB
centos                         latest    5d0da3dc9764   2 years ago      231MB
redis                          6.0.8     16ecd2772934   3 years ago      104MB
[root@192 ~]# docker run -it --name myu3 --privileged=true -v /tmp/myHostData:/tmp/myDockerData ubuntu /bin/bash
root@9f440e25bef8:/# cd /tmp/myDockerData/
# 容器内目录
root@9f440e25bef8:/tmp/myDockerData# pwd
/tmp/myDockerData
root@9f440e25bef8:/tmp/myDockerData#

# 宿主机目录
[root@192 ~]# cd /tmp/myHostData/
[root@192 myHostData]# pwd
/tmp/myHostData
```

2.查看数据卷是否挂载成功

```sh
docker inspect 容器ID

[root@192 myHostData]# docker inspect 9f440e25bef8
[
    {
        "Id": "9f440e25bef815363eb623a0ff0ec0a23c937ed062db941ab835bdb02fb1dc43",
        "Created": "2023-12-09T14:24:41.08495696Z",
        "Path": "/bin/bash",
        "Args": [],
        "State": {
            "Status": "running",
            "Running": true,
            "Paused": false,
...
        "Mounts": [
            {
                "Type": "bind",
                "Source": "/tmp/myHostData",
                "Destination": "/tmp/myDockerData",
                "Mode": "",
                "RW": true,
                "Propagation": "rprivate"
            }
        ],
...
```

3.容器和宿主机之间数据共享

- docker修改，主机同步获得 。
- 主机修改，docker同步获得。

- docker容器stop，主机修改，docker容器重启后同步数据

### 5.2 读写规则映射添加说明

**读写(默认)**： rw = read + write

```
docker run -it --privileged=true -v /宿主机绝对路径目录:/容器内目录:rw 镜像名
```

默认同上案例，默认就是rw

**只读**：ro = read only

容器实例内部被限制，只能读取不能写。

此时如果宿主机写入内容，可以同步给容器内，容器可以读取到。

```
docker run -it --privileged=true -v /宿主机绝对路径目录:/容器内目录:ro 镜像名
```

### 5.3 卷的继承和共享

容器1完成和宿主机的映射

```
docker run -it --privileged=true -v /mydocker/ubuntu:/tmp --name u1 ubuntu
```

器2继承容器1的卷规则

```
docker run -it  --privileged=true --volumes-from 父类  --name u2 ubuntu

docker run -it  --privileged=true --volumes-from u1 --name u2 ubuntu
```

```sh
# 容器1
[root@192 ubuntu]# docker inspect u1
[
    {
        "Id": "f02ce04d7ec7e7cbefe7441a3502c64c9e8d4132dc46e29e754a35fae8079610",
        "Created": "2023-12-09T14:40:55.028788632Z",
        "Path": "bash",
        "Args": [],
        "State": {
            "Status": "running",
            "Running": true,
...
        "Mounts": [
            {
                "Type": "bind",
                "Source": "/mydocker/ubuntu",
                "Destination": "/tmp",
                "Mode": "",
                "RW": true,
                "Propagation": "rprivate"
            }
        ],
...
[root@192 ubuntu]# docker inspect u2
[
    {
        "Id": "4d43588c69aa161a546ee86dab20ef0084c92239dbcc3ae406850216fd0de777",
        "Created": "2023-12-09T14:41:40.922894456Z",
        "Path": "bash",
        "Args": [],
        "State": {
            "Status": "running",
            "Running": true,
        "Mounts": [
            {
                "Type": "bind",
                "Source": "/mydocker/ubuntu",
                "Destination": "/tmp",
                "Mode": "",
                "RW": true,
                "Propagation": "rprivate"
            }
        ],
...
```



 