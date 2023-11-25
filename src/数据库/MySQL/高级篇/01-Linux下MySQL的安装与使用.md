---
date: 2021-09-10
category:
  - 数据库
  - MySQL
tag:
  - MySQL
order: 1
---

# Linux下MySQL的安装与使用

## 1.安装前说明

### 1.1 Linux系统及工具的准备

- 安装并启动好两台虚拟机： `CentOS 7`

  - 掌握克隆虚拟机的操作

    - mac地址

    - 主机名

    - ip地址

    - UUID


- 安装有 `Xshell` 和 `Xftp` 等访问CentOS系统的工具
- CentOS6和CentOS7在MySQL的使用中的区别

1.防火墙：6是iptables，7是firewalld

2.启动服务的命令：6是service，7是systemctl

### 1.2 查看是否安装过MySQL

- 如果你是用rpm安装, 检查一下RPM PACKAGE：

```bash
rpm -qa | grep -i mysql # -i 忽略大小写
```

- 检查mysql service：

```bash
systemctl status mysqld.service
```

- 如果存在mysql-libs的旧版本包，显示如下：

```sh
[root@hostname:130 ~]# rpm -qa | grep -i mysql
mysql-community-server-8.0.25-1.el7.x86_64
mysql-community-client-plugins-8.0.25-1.el7.x86_64
mysql-community-libs-8.0.25-1.el7.x86_64
mysql-community-client-8.0.25-1.el7.x86_64
mysql-community-common-8.0.25-1.el7.x86_64
```

- 如果不存在mysql-lib的版本，显示如下：

```sh
[root@hostname:130 ~]# rpm -qa | grep -i mysql
[root@hostname:130 ~]
```

### 1.3 MySQL的卸载

**1.关闭 mysql 服务**

```bash
systemctl stop mysqld.service
```

**2.查看当前 mysql 安装状况**

```bash
rpm -qa | grep -i mysql
# 或
yum list installed | grep mysql
```

**3.卸载上述命令查询出的已安装程序**

```bash
yum remove mysql-xxx mysql-xxx mysql-xxx mysqk-xxxx
```

务必卸载干净，反复执行 `rpm -qa | grep -i mysql` 确认是否有卸载残留

**4.删除 mysql 相关文件**

查找相关文件y

```bash
find / -name mysql
```

删除上述命令查找出的相关文件

```bash
rm -rf xxx
```

**5.删除 my.cnf**

```bash
rm -rf /etc/my.cnf
```

## 2. MySQL的Linux版安装

### 2.1 MySQL的4大版本

- **MySQL Community Server 社区版本**，开源免费，自由下载，但不提供官方技术支持，适用于大多数普通用户。
- **MySQL Enterprise Edition 企业版本**，需付费，不能在线下载，可以试用30天。提供了更多的功能和更完备的技术支持，更适合于对数据库的功能和可靠性要求较高的企业客户。
- **MySQL Cluster 集群版**，开源免费。用于架设集群服务器，可将几个MySQL Server封装成一个Server。需要在社区版或企业版的基础上使用。
- **MySQL Cluster CGE 高级集群版**，需付费。

- 截止目前，官方最新版本为 `8.0.27`。此前，`8.0.0` 在 2016.9.12日就发布了。
- 本课程中主要使用 `8.0.25版本` 。同时为了更好的说明MySQL8.0新特性，还会安装`MySQL5.7` 版本，作为对比。

此外，官方还提供了 `MySQL Workbench` （GUITOOL）一款专为MySQL设计的`ER/数据库建模工具`。它是著名的数据库设计工具DBDesigner4的继任者。MySQLWorkbench又分为两个版本，分别是 `社区版`（MySQL Workbench OSS）、 `商用版` （MySQL WorkbenchSE）。

### 2.2 下载MySQL指定版本

#### 1.下载地址

官网：https://www.mysql.com

#### 2.打开官网，点击DOWNLOADS

然后，点击`MySQL Community(GPL) Downloads`

#### 3.点击 MySQL Community Server

#### 4.在General Availability(GA) Releases中选择适合的版本

- 如果安装Windows 系统下MySQL ，推荐下载 `MSI安装程序` ；点击 `Go to Download Page` 进行下载即可

- Windows下的MySQL安装有两种安装程序

  - `mysql-installer-web-community-8.0.25.0.msi` 下载程序大小：2.4M；安装时需要联网安装组件。

  - `mysql-installer-community-8.0.25.0.msi` 下载程序大小：435.7M；安装时离线安装即可。推荐。


#### 5.Linux系统下安装MySQL的几种方式

5.1Linux系统下安装软件的常用三种方式：

方式1：rpm命令

使用rpm命令安装扩展名为".rpm"的软件包。

.rpm包的一般格式：

![image-20231125002822112](image/image-20231125002822112.png)

方式2：yum命令

需联网，从 `互联网`获取 的yum源，直接使用yum命令安装。

方式3：编译安装源码包

针对 `tar.gz` 这样的压缩格式，要用tar命令来解压；如果是其它压缩格式，就使用其它命令。

5.2 Linux系统下安装MySQL，官方给出多种安装方式

| 安装方式       | 特点                                                 |
| -------------- | ---------------------------------------------------- |
| rpm            | 安装简单，灵活性差，无法灵活选择版本、升级           |
| rpm repository | 安装包极小，版本安装简单灵活，升级方便，需要联网安装 |
| 通用二进制包   | 安装比较复杂，灵活性高，平台通用性好                 |
| 源码包         | 安装最复杂，时间长，参数设置灵活，性能好             |

- 这里不能直接选择CentOS 7系统的版本，所以选择与之对应的 `Red Hat Enterprise Linux`
- `https://downloads.mysql.com/archives/community/` 直接点Download下载RPM Bundle全量包。包括了所有下面的组件。不需要一个一个下载了。

![image-20231125003217194](image/image-20231125003217194.png)

#### 6.下载的tar包，用压缩工具打开

```sh
mysql-8.0.25-1.el7.x86_64.rpm-bundle.tar
```

- 解压后rpm安装包 （红框为抽取出来的安装包）

![image-20231125003309104](image/image-20231125003309104.png)

### 2.3 CentOS7下检查MySQL依赖

1.检查/tmp临时目录权限（必不可少）

由于mysql安装过程中，会通过mysql用户在/tmp目录下新建tmp_db文件，所以请给/tmp较大的权限。执

行 ：

```sh
chmod -R 777 /tmp

[root@hostname:130 /]# cd /
[root@hostname:130 /]# chmod -R 777 /tmp
[root@hostname:130 /]# ll
总用量 68
lrwxrwxrwx.   1 root root     7 6月  28 2022 bin -> usr/bin
dr-xr-xr-x.   6 root root  4096 6月  28 2022 boot
drwxr-xr-x.  19 root root  3260 11月 25 00:21 dev
drwxr-xr-x. 143 root root 12288 11月 25 00:21 etc
drwxr-xr-x.   3 root root  4096 6月  28 2022 home
lrwxrwxrwx.   1 root root     7 6月  28 2022 lib -> usr/lib
lrwxrwxrwx.   1 root root     9 6月  28 2022 lib64 -> usr/lib64
drwx------.   2 root root 16384 6月  28 2022 lost+found
drwxr-xr-x.   2 root root  4096 4月  11 2018 media
drwxr-xr-x.   2 root root  4096 4月  11 2018 mnt
drwxr-xr-x.   3 root root  4096 7月  22 2022 opt
dr-xr-xr-x. 177 root root     0 11月 25 00:21 proc
dr-xr-x---.  14 root root  4096 11月 25 00:22 root
drwxr-xr-x.  42 root root  1240 11月 25 00:22 run
lrwxrwxrwx.   1 root root     8 6月  28 2022 sbin -> usr/sbin
drwxr-xr-x.   2 root root  4096 4月  11 2018 srv
dr-xr-xr-x.  13 root root     0 11月 25 00:21 sys
drwxrwxrwx.  27 root root  4096 11月 25 00:23 tmp
drwxr-xr-x.  13 root root  4096 6月  28 2022 usr
drwxr-xr-x.  21 root root  4096 6月  28 2022 var
```

2.安装前，检查依赖

```bash
rpm -qa|grep libaio
```

- 如果存在libaio包如下：

```sh
[root@hostname:130 /]# rpm -qa|grep libaio
libaio-0.3.109-13.el7.x86_64
```



```sh
rpm -qa|grep net-tools
```

- 如果存在net-tools包如下：

```sh
[root@hostname:130 /]# rpm -qa|grep net-tools
net-tools-2.0-0.25.20131004git.el7.x86_64
```

- 如果不存在需要到centos安装盘里进行rpm安装。安装linux如果带图形化界面，这些都是安装好的。

### 2.4 CentOS7下MySQL安装过程

#### 1.将安装程序拷贝到/opt目录下

在mysql的安装文件目录下执行：（必须按照顺序执行）

```bash
# 8.0按如下顺序进行安装 5.7按相同顺序，排除client-plugins即可
rpm -ivh mysql-community-common-8.0.25-1.el7.x86_64.rpm
rpm -ivh mysql-community-client-plugins-8.0.25-1.el7.x86_64.rpm
rpm -ivh mysql-community-libs-8.0.25-1.el7.x86_64.rpm
rpm -ivh mysql-community-client-8.0.25-1.el7.x86_64.rpm
rpm -ivh mysql-community-server-8.0.25-1.el7.x86_64.rpm
```

- 注意: 如在检查工作时，没有检查mysql依赖环境在安装mysql-community-server会报错
- `rpm` 是Redhat Package Manage缩写，通过RPM的管理，用户可以把源代码包装成以rpm为扩展名的文件形式，易于安装。
- `-i` , --install 安装软件包
- `-v` , --verbose 提供更多的详细信息输出
- `-h` , --hash 软件包安装的时候列出哈希标记 (和 -v 一起使用效果更好)，展示进度条

```sh
[root@hostname:130 /]# cd /opt
[root@hostname:130 opt]# ll
总用量 489752
-rw-r--r--. 1 root root  47810444 7月  22 2022 mysql-community-client-8.0.25-1.el7.x86_64.rpm
-rw-r--r--. 1 root root    193616 7月  22 2022 mysql-community-client-plugins-8.0.25-1.el7.x86_64.rpm
-rw-r--r--. 1 root root    628904 7月  22 2022 mysql-community-common-8.0.25-1.el7.x86_64.rpm
-rw-r--r--. 1 root root   4240320 7月  22 2022 mysql-community-libs-8.0.25-1.el7.x86_64.rpm
-rw-r--r--. 1 root root 448614076 7月  22 2022 mysql-community-server-8.0.25-1.el7.x86_64.rpm
drwxr-xr-x. 2 root root      4096 10月 31 2018 rh
```

#### 2.安装过程

```sh
[root@hostname:130 opt]# rpm -ivh mysql-community-common-8.0.25-1.el7.x86_64.rpm
警告：mysql-community-common-8.0.25-1.el7.x86_64.rpm: 头V3 DSA/SHA1 Signature, 密钥 ID 5072e1f5: NOKEY
准备中...                          ################################# [100%]
正在升级/安装...
   1:mysql-community-common-8.0.25-1.e################################# [100%]
[root@hostname:130 opt]# rpm -ivh mysql-community-client-plugins-8.0.25-1.el7.x86_64.rpm
警告：mysql-community-client-plugins-8.0.25-1.el7.x86_64.rpm: 头V3 DSA/SHA1 Signature, 密钥 ID 5072e1f5: NOKEY
准备中...                          ################################# [100%]
正在升级/安装...
   1:mysql-community-client-plugins-8.################################# [100%]
[root@hostname:130 opt]# rpm -ivh mysql-community-libs-8.0.25-1.el7.x86_64.rpm
警告：mysql-community-libs-8.0.25-1.el7.x86_64.rpm: 头V3 DSA/SHA1 Signature, 密钥 ID 5072e1f5: NOKEY
准备中...                          ################################# [100%]
正在升级/安装...
   1:mysql-community-libs-8.0.25-1.el7################################# [100%]
[root@hostname:130 opt]# rpm -ivh mysql-community-client-8.0.25-1.el7.x86_64.rpm
警告：mysql-community-client-8.0.25-1.el7.x86_64.rpm: 头V3 DSA/SHA1 Signature, 密钥 ID 5072e1f5: NOKEY
准备中...                          ################################# [100%]
正在升级/安装...
   1:mysql-community-client-8.0.25-1.e################################# [100%]
[root@hostname:130 opt]# rpm -ivh mysql-community-server-8.0.25-1.el7.x86_64.rpm
警告：mysql-community-server-8.0.25-1.el7.x86_64.rpm: 头V3 DSA/SHA1 Signature, 密钥 ID 5072e1f5: NOKEY
准备中...                          ################################# [100%]
正在升级/安装...
   1:mysql-community-server-8.0.25-1.e################################# [100%]
```

8.0安装过程中可能的报错信息：

![img](image/1657194653539-8e68dc66-6b0a-4b9d-8ca8-0426ea6bdca2.png)

一个命令：**yum remove mysql-libs** 解决，清除之前安装过的依赖即可

5.7安装过程中可能的报错信息：

![img](image/1658498541711-9dacb5ff-9607-47b0-a9bb-c5b440a6810b.png)

#### 3.查看MySQL版本

执行如下命令，如果成功表示安装mysql成功。类似java -version如果打出版本等信息

```sh
[root@hostname:130 opt]# mysql --version
mysql  Ver 8.0.25 for Linux on x86_64 (MySQL Community Server - GPL)
[root@hostname:130 opt]# mysqladmin --version
mysqladmin  Ver 8.0.25 for Linux on x86_64 (MySQL Community Server - GPL)

```

执行如下命令，查看是否安装成功。需要增加 -i 不用去区分大小写，否则搜索不到。

```bash
rpm -qa|grep -i mysql

[root@hostname:130 opt]# rpm -qa|grep -i mysql
mysql-community-libs-8.0.25-1.el7.x86_64
mysql-community-common-8.0.25-1.el7.x86_64
mysql-community-server-8.0.25-1.el7.x86_64
mysql-community-client-plugins-8.0.25-1.el7.x86_64
mysql-community-client-8.0.25-1.el7.x86_64
```

#### 4.服务的初始化

为了保证数据库目录与文件的所有者为 mysql 登录用户，如果你是以 root 身份运行 mysql 服务，需要执

行下面的命令初始化：

```bash
mysqld --initialize --user=mysql
```

说明：`--initialize` 选项默认以“安全”模式来初始化，则会为 root 用户生成一个密码并将 `该密码标记为过期` ，登录后你需要设置一个新的密码。生成的`临时密码` 会往日志中记录一份。

查看密码：

```sh
cat /var/log/mysqld.log

[root@hostname:130 opt]# cat /var/log/mysqld.log
2022-07-22T13:50:50.094744Z 0 [System] [MY-013169] [Server] /usr/sbin/mysqld (mysqld 8.0.25) initializing of server in progress as process 53464
2022-07-22T13:50:50.100666Z 1 [System] [MY-013576] [InnoDB] InnoDB initialization has started.
2022-07-22T13:50:50.338274Z 1 [System] [MY-013577] [InnoDB] InnoDB initialization has ended.
2022-07-22T13:50:50.916562Z 6 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: O2jPt8tQ*(sh
```

root@localhost: 后面就是初始化的密码

#### 5.启动MySQL，查看状态

```bash
#加不加.service后缀都可以
启动：systemctl start mysqld.service
关闭：systemctl stop mysqld.service
重启：systemctl restart mysqld.service
查看状态：systemctl status mysqld.service
```

`mysqld` 这个可执行文件就代表着 `MySQL` 服务器程序，运行这个可执行文件就可以直接启动一个服务器进程。

```sh
[root@hostname:130 opt]# systemctl start mysqld.service
[root@hostname:130 opt]# systemctl status mysqld.service
● mysqld.service - MySQL Server
   Loaded: loaded (/usr/lib/systemd/system/mysqld.service; enabled; vendor preset: disabled)
   Active: active (running) since 六 2023-11-25 00:54:43 CST; 7s ago
     Docs: man:mysqld(8)
           http://dev.mysql.com/doc/refman/en/using-systemd.html
  Process: 14411 ExecStartPre=/usr/bin/mysqld_pre_systemd (code=exited, status=0/SUCCESS)
 Main PID: 14446 (mysqld)
   Status: "Server is operational"
    Tasks: 38
   CGroup: /system.slice/mysqld.service
           └─14446 /usr/sbin/mysqld

11月 25 00:54:42 hostname:130 systemd[1]: Starting MySQL Server...
11月 25 00:54:43 hostname:130 systemd[1]: Started MySQL Server.
```

查看进程：

```sh
ps -ef | grep -i mysql

[root@hostname:130 opt]# ps -ef | grep -i mysql
mysql     14446      1  1 00:54 ?        00:00:00 /usr/sbin/mysqld
root      14693   1727  0 00:55 pts/0    00:00:00 grep --color=auto -i mysql
```

#### 6.查看MySQL服务是否自启动

```sh
systemctl list-unit-files|grep mysqld.service

[root@hostname:130 opt]# systemctl list-unit-files|grep mysqld.service
mysqld.service                                enabled
```

默认是enabled。

- 如不是enabled可以运行如下命令设置自启动

```sh
systemctl enable mysqld.service

[root@hostname:130 opt]# systemctl enable mysqld.service
Created symlink from /etc/systemd/system/multi-user.target.wants/mysqld.service to /usr/lib/systemd/system/mysqld.service.
```

- 如果希望不进行自启动，运行如下命令设置

```sh
systemctl disable mysqld.service

[root@hostname:130 opt]# systemctl disable mysqld.service
Removed symlink /etc/systemd/system/multi-user.target.wants/mysqld.service.
[root@hostname:130 opt]# systemctl list-unit-files|grep mysqld.service
mysqld.service                                disabled
```

## 3.MySQL登录

### 3.1 首次登录

通过 `mysql -hlocalhost -P3306 -uroot -p` 进行登录，在Enter password：录入初始化密码

```sh
[root@hostname:130 opt]# mysql -hlocalhost -P3306 -uroot -p
Enter password:
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 10
Server version: 8.0.25

Copyright (c) 2000, 2021, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
```

### 3.2 修改密码

- 因为初始化密码默认是过期的，所以查看数据库会报错
- 修改密码：

```sh
ALTER USER 'root'@'localhost' IDENTIFIED BY 'root';
```

- 5.7版本之后（不含5.7），mysql加入了全新的密码安全机制。设置新密码太简单会报错。

```sql
mysgl> ALTER USER'root'@'localhost' IDENTIFIED BY 'HelloWorld';
ERROR 1819 (HY000): Your password does not satisfy the current policy requirements
mysgl> ALTER USER'root'@'localhost' IDENTIFIED BY 'Helloworld123';
ERROR 1819 (HY000): Your password does not satisfy the current policy requirements
mysql> ALTER USER'root'@'localhost' IDENTIFIED BY 'Hello_World';
ERROR 1819 (HYO00): Your password does not satisfy the current policy requirements
```

- 改为更复杂的密码规则之后，设置成功，可以正常使用数据库了

```sql
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'HelloWorld';
Query OK, 0 rows affected (0.00 sec)
```

### 3.3 设置远程登录

#### 1.当前问题

在用SQLyog或Navicat中配置远程连接Mysql数据库时遇到如下报错信息，这是由于Mysql配置了不支持远程连接引起的。

```sh
1130 - Host '192.168.11.1' is not allowed to connect to this MySQL server
```

#### 2.确认网络

1.在远程机器上使用ping ip地址 `保证网络畅通`

2.在远程机器上使用telnet命令 `保证端口号开放` 访问

```sh
telnet ip地址 端口号
```

拓展： `telnet命令开启` :

![image-20231125010934312](image/image-20231125010934312.png)

![image-20231125010940919](image/image-20231125010940919.png)

![image-20231125010943385](image/image-20231125010943385.png)



#### 3.关闭防火墙或开放端口

方式一：关闭防火墙

- CentOS6 ：

```sh
service iptables stop
```

- CentOS7：

```sh
systemctl start firewalld.service
systemctl status firewalld.service
systemctl stop firewalld.service
#设置开机启用防火墙
systemctl enable firewalld.service
#设置开机禁用防火墙
systemctl disable firewalld.service
```

方式二：开放端口

- 查看开放的端口号

```sh
firewall-cmd --list-all
```

- 设置开放的端口号

```sh
firewall-cmd --add-service=http --permanent
firewall-cmd --add-port=3306/tcp --permanent
```

- 重启防火墙

```sh
firewall-cmd --reload
```

#### 4.Linux下修改配置

在Linux系统MySQL下测试：

```sql
mysql> use mysql;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
mysql> select Host,User from user;
+-----------+------------------+
| Host      | User             |
+-----------+------------------+
| localhost | mysql.infoschema |
| localhost | mysql.session    |
| localhost | mysql.sys        |
| localhost | root             |
+-----------+------------------+
4 rows in set (0.00 sec)
```

可以看到root用户的当前主机配置信息为localhost。

- **修改Host为通配符%**

Host列指定了允许用户登录所使用的IP，比如user=root Host=192.168.1.1。这里的意思就是说root用户只能通过192.168.1.1的客户端去访问。 user=root Host=localhost，表示只能通过本机客户端去访问。而 `%`是个 `通配符` ，如果Host=192.168.1.%，那么就表示只要是IP地址前缀为“192.168.1.”的客户端都可以连接。如果 Host=% ，表示所有IP都有连接权限。

注意：在生产环境下不能为了省事将host设置为%，这样做会存在安全问题，具体的设置可以根据生产环境的IP进行设置。

Host设置了“%”后便可以允许远程访问。

```sql
mysql> update user set host = '%' where user ='root';
Query OK, 1 row affected (0.00 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select Host,User from user;
+-----------+------------------+
| Host      | User             |
+-----------+------------------+
| %         | root             |
| localhost | mysql.infoschema |
| localhost | mysql.session    |
| localhost | mysql.sys        |
+-----------+------------------+
4 rows in set (0.00 sec)
```

Host修改完成后记得执行flush privileges使配置立即生效：

```sql
mysql> flush privileges;
Query OK, 0 rows affected (0.00 sec)
```

#### 5.测试

- 如果是 MySQL5.7 版本，接下来就可以使用SQLyog或者Navicat成功连接至MySQL了。
- 如果是 MySQL8 版本，连接时还会出现如下问题：

```
错误号码2058
Plugin caching sha2 password could not be loaded:  X000900ge
```

配置新连接报错：错误号码 2058，分析是 mysql 密码加密方法变了。

**解决方法**：Linux下 mysql -u root -p 登录你的 mysql 数据库，然后 执行这条SQL：

```sql
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'root';
```

然后在重新配置SQLyog的连接，则可连接成功了，OK。





