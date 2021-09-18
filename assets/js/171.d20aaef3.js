(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{949:function(s,t,a){"use strict";a.r(t);var n=a(26),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"基于-docker-安装-fastdfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于-docker-安装-fastdfs"}},[s._v("#")]),s._v(" 基于 Docker 安装 FastDFS")]),s._v(" "),a("h2",{attrs:{id:"环境准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[s._v("#")]),s._v(" 环境准备")]),s._v(" "),a("p",[a("strong",[s._v("所需全部环境配置文件已上传至群中，通过首页扫码加群下载即可")])]),s._v(" "),a("ul",[a("li",[s._v("libfastcommon.tar.gz")]),s._v(" "),a("li",[s._v("fastdfs-5.11.tar.gz")]),s._v(" "),a("li",[s._v("nginx-1.13.6.tar.gz")]),s._v(" "),a("li",[s._v("fastdfs-nginx-module_v1.16.tar.gz")])]),s._v(" "),a("h2",{attrs:{id:"创建工作目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建工作目录"}},[s._v("#")]),s._v(" 创建工作目录")]),s._v(" "),a("p",[s._v("在 Linux 服务器上创建 "),a("code",[s._v("/usr/local/docker/fastdfs/environmen")]),s._v(" 目录")]),s._v(" "),a("p",[s._v("说明：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("/usr/local/docker/fastdfs")]),s._v("：用于存放 "),a("code",[s._v("docker-compose.yml")]),s._v(" 配置文件及 FastDFS 的数据卷")]),s._v(" "),a("li",[a("code",[s._v("/usr/local/docker/fastdfs/environmen")]),s._v("：用于存放 "),a("code",[s._v("Dockerfile")]),s._v(" 镜像配置文件及 FastDFS 所需环境")])]),s._v(" "),a("h2",{attrs:{id:"docker-compose-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml"}},[s._v("#")]),s._v(" docker-compose.yml")]),s._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.1'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("fastdfs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" environment\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" fastdfs\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./storage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/fastdfs/storage\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("network_mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" host\n")])])]),a("h2",{attrs:{id:"dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[s._v("#")]),s._v(" Dockerfile")]),s._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("xenial\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("MAINTAINER")]),s._v(" topsale@vip.qq.com\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新数据源")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /etc/apt\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" echo "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deb http://mirrors.aliyun.com/ubuntu/ xenial main restricted universe multiverse'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v(" sources.list\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" echo "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deb http://mirrors.aliyun.com/ubuntu/ xenial-security main restricted universe multiverse'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v(" sources.list\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" echo "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deb http://mirrors.aliyun.com/ubuntu/ xenial-updates main restricted universe multiverse'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v(" sources.list\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" echo "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deb http://mirrors.aliyun.com/ubuntu/ xenial-backports main restricted universe multiverse'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v(" sources.list\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("get update\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装依赖")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("get install make gcc libpcre3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("dev zlib1g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("dev "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("assume"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("yes\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制工具包")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" fastdfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("5.11.tar.gz /usr/local/src\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" fastdfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("module_v1.16.tar.gz /usr/local/src\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" libfastcommon.tar.gz /usr/local/src\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("1.13.6.tar.gz /usr/local/src\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 libfastcommon")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /usr/local/src/libfastcommon\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" ./make.sh && ./make.sh install\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 FastDFS")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /usr/local/src/fastdfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("5.11\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" ./make.sh && ./make.sh install\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置 FastDFS 跟踪器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" tracker.conf /etc/fdfs\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" mkdir "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("p /fastdfs/tracker\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置 FastDFS 存储")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" storage.conf /etc/fdfs\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" mkdir "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("p /fastdfs/storage\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置 FastDFS 客户端")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" client.conf /etc/fdfs\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置 fastdfs-nginx-module")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" config /usr/local/src/fastdfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("module/src\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# FastDFS 与 Nginx 集成")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /usr/local/src/nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("1.13.6\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" ./configure "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("module=/usr/local/src/fastdfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("module/src\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" make && make install\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" mod_fastdfs.conf /etc/fdfs\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /usr/local/src/fastdfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("5.11/conf\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" cp http.conf mime.types /etc/fdfs/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置 Nginx")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" nginx.conf /usr/local/nginx/conf\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" entrypoint.sh /usr/local/bin/\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENTRYPOINT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/bin/entrypoint.sh"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXPOSE")]),s._v(" 8888\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/bash"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("h2",{attrs:{id:"entrypoint-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entrypoint-sh"}},[s._v("#")]),s._v(" entrypoint.sh")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh")]),s._v("\n/etc/init.d/fdfs_trackerd start\n/etc/init.d/fdfs_storaged start\n/usr/local/nginx/sbin/nginx -g "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'daemon off;'")]),s._v("\n")])])]),a("p",[s._v("注：Shell 创建后是无法直接使用的，需要赋予执行的权限，使用 "),a("code",[s._v("chmod +x entrypoint.sh")]),s._v(" 命令")]),s._v(" "),a("h2",{attrs:{id:"各种配置文件说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#各种配置文件说明"}},[s._v("#")]),s._v(" 各种配置文件说明")]),s._v(" "),a("h3",{attrs:{id:"tracker-conf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tracker-conf"}},[s._v("#")]),s._v(" tracker.conf")]),s._v(" "),a("p",[s._v("FastDFS 跟踪器配置，容器中路径为：/etc/fdfs，修改为：")]),s._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("base_path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("/fastdfs/tracker")]),s._v("\n")])])]),a("h3",{attrs:{id:"storage-conf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-conf"}},[s._v("#")]),s._v(" storage.conf")]),s._v(" "),a("p",[s._v("FastDFS 存储配置，容器中路径为：/etc/fdfs，修改为：")]),s._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("base_path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("/fastdfs/storage")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("store_path0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("/fastdfs/storage")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("tracker_server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("192.168.75.128:22122")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("http.server_port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("8888")]),s._v("\n")])])]),a("h3",{attrs:{id:"client-conf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-conf"}},[s._v("#")]),s._v(" client.conf")]),s._v(" "),a("p",[s._v("FastDFS 客户端配置，容器中路径为：/etc/fdfs，修改为：")]),s._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("base_path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("/fastdfs/tracker")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("tracker_server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("192.168.75.128:22122")]),s._v("\n")])])]),a("h3",{attrs:{id:"config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[s._v("#")]),s._v(" config")]),s._v(" "),a("p",[s._v("fastdfs-nginx-module 配置文件，容器中路径为：/usr/local/src/fastdfs-nginx-module/src，修改为：")]),s._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改前")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("CORE_INCS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v('"$CORE_INCS /usr/local/include/fastdfs /usr/local/include/fastcommon/"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("CORE_LIBS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v('"$CORE_LIBS -L/usr/local/lib -lfastcommon -lfdfsclient"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改后")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("CORE_INCS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v('"$CORE_INCS /usr/include/fastdfs /usr/include/fastcommon/"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("CORE_LIBS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v('"$CORE_LIBS -L/usr/lib -lfastcommon -lfdfsclient"')]),s._v("\n")])])]),a("h3",{attrs:{id:"mod-fastdfs-conf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mod-fastdfs-conf"}},[s._v("#")]),s._v(" mod_fastdfs.conf")]),s._v(" "),a("p",[s._v("fastdfs-nginx-module 配置文件，容器中路径为：/usr/local/src/fastdfs-nginx-module/src，修改为：")]),s._v(" "),a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("connect_timeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("10")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("tracker_server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("192.168.75.128:22122")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("url_have_group_name")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("store_path0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("/fastdfs/storage")]),s._v("\n")])])]),a("h3",{attrs:{id:"nginx-conf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-conf"}},[s._v("#")]),s._v(" nginx.conf")]),s._v(" "),a("p",[s._v("Nginx 配置文件，容器中路径为：/usr/local/src/nginx-1.13.6/conf，修改为：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("user  root;\nworker_processes  1;\n\nevents {\n    worker_connections  1024;\n}\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    sendfile        on;\n\n    keepalive_timeout  65;\n\n    server {\n        listen       8888;\n        server_name  localhost;\n\n        location ~/group([0-9])/M00 {\n            ngx_fastdfs_module;\n        }\n\n        error_page   500 502 503 504  /50x.html;\n        location = /50x.html {\n            root   html;\n        }\n    }\n}\n")])])]),a("h2",{attrs:{id:"启动容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动容器"}},[s._v("#")]),s._v(" 启动容器")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker-compose up -d\n")])])]),a("h2",{attrs:{id:"测试上传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试上传"}},[s._v("#")]),s._v(" 测试上传")]),s._v(" "),a("h3",{attrs:{id:"交互式进入容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#交互式进入容器"}},[s._v("#")]),s._v(" 交互式进入容器")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it fastdfs /bin/bash\n")])])]),a("h3",{attrs:{id:"测试文件上传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试文件上传"}},[s._v("#")]),s._v(" 测试文件上传")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/usr/bin/fdfs_upload_file /etc/fdfs/client.conf /usr/local/src/fastdfs-5.11/INSTALL\n")])])]),a("h3",{attrs:{id:"服务器反馈上传地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器反馈上传地址"}},[s._v("#")]),s._v(" 服务器反馈上传地址")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("group1/M00/00/00/wKhLi1oHVMCAT2vrAAAeSwu9TgM3976771\n")])])]),a("h2",{attrs:{id:"测试-nginx-访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试-nginx-访问"}},[s._v("#")]),s._v(" 测试 Nginx 访问")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("http://192.168.75.128:8888/group1/M00/00/00/wKhLi1oHVMCAT2vrAAAeSwu9TgM3976771\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);