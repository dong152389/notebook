(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{924:function(t,n,e){"use strict";e.r(n);var s=e(26),a=Object(s.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"nginx-虚拟主机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx-虚拟主机"}},[t._v("#")]),t._v(" Nginx 虚拟主机")]),t._v(" "),e("h2",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),e("p",[t._v("我们使用 Docker 来安装和运行 Nginx，"),e("code",[t._v("docker-compose.yml")]),t._v(" 配置如下：")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3.1'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nginx")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token datetime number"}},[t._v("81:80")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./conf/nginx.conf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/etc/nginx/nginx.conf\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./wwwroot"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/usr/share/nginx/wwwroot\n")])])]),e("h2",{attrs:{id:"什么是虚拟主机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是虚拟主机"}},[t._v("#")]),t._v(" 什么是虚拟主机？")]),t._v(" "),e("p",[t._v("虚拟主机是一种特殊的软硬件技术，它可以将网络上的每一台计算机分成多个虚拟主机，每个虚拟主机可以独立对外提供 www 服务，这样就可以实现一台主机对外提供多个 web 服务，每个虚拟主机之间是独立的，互不影响的。")]),t._v(" "),e("p",[t._v("通过 Nginx 可以实现虚拟主机的配置，Nginx 支持三种类型的虚拟主机配置")]),t._v(" "),e("ul",[e("li",[t._v("基于 IP 的虚拟主机")]),t._v(" "),e("li",[t._v("基于域名的虚拟主机")]),t._v(" "),e("li",[t._v("基于端口的虚拟主机")])]),t._v(" "),e("h2",{attrs:{id:"nginx-配置文件的结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置文件的结构"}},[t._v("#")]),t._v(" Nginx 配置文件的结构")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# ...\nevents {\n\t# ...\n}\n\nhttp {\n\t# ...\n\tserver{\n\t\t# ...\n\t}\n\t\n\t# ...\n\tserver{\n\t\t# ...\n\t}\n}\n")])])]),e("p",[e("strong",[t._v("注：")]),t._v(" 每个 server 就是一个虚拟主机")]),t._v(" "),e("h2",{attrs:{id:"基于端口的虚拟主机配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于端口的虚拟主机配置"}},[t._v("#")]),t._v(" 基于端口的虚拟主机配置")]),t._v(" "),e("h3",{attrs:{id:"需求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#需求"}},[t._v("#")]),t._v(" 需求")]),t._v(" "),e("ul",[e("li",[t._v("Nginx 对外提供 80 和 8080 两个端口监听服务")]),t._v(" "),e("li",[t._v("请求 80 端口则请求 html80 目录下的 html")]),t._v(" "),e("li",[t._v("请求 8080 端口则请求 html8080 目录下的 html")])]),t._v(" "),e("h3",{attrs:{id:"创建目录及文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建目录及文件"}},[t._v("#")]),t._v(" 创建目录及文件")]),t._v(" "),e("p",[t._v("在 "),e("code",[t._v("/usr/local/docker/nginx/wwwroot")]),t._v(" 目录下创建 "),e("code",[t._v("html80")]),t._v(" 和 "),e("code",[t._v("html8080")]),t._v(" 两个目录，并分辨创建两个 index.html 文件")]),t._v(" "),e("h3",{attrs:{id:"配置虚拟主机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置虚拟主机"}},[t._v("#")]),t._v(" 配置虚拟主机")]),t._v(" "),e("p",[t._v("修改 "),e("code",[t._v("/usr/local/docker/nginx/conf")]),t._v(" 目录下的 nginx.conf 配置文件：")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 启动进程,通常设置成和 CPU 的数量相等\nworker_processes  1;\n\nevents {\n    # epoll 是多路复用 IO(I/O Multiplexing) 中的一种方式\n    # 但是仅用于 linux2.6 以上内核,可以大大提高 nginx 的性能\n    use epoll;\n    # 单个后台 worker process 进程的最大并发链接数\n    worker_connections  1024;\n}\n\nhttp {\n    # 设定 mime 类型,类型由 mime.type 文件定义\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    # sendfile 指令指定 nginx 是否调用 sendfile 函数（zero copy 方式）来输出文件，对于普通应用，\n    # 必须设为 on，如果用来进行下载等应用磁盘 IO 重负载应用，可设置为 off，以平衡磁盘与网络 I/O 处理速度，降低系统的 uptime.\n    sendfile        on;\n    \n    # 连接超时时间\n    keepalive_timeout  65;\n    # 设定请求缓冲\n    client_header_buffer_size 2k;\n\n    # 配置虚拟主机 192.168.75.145\n    server {\n\t# 监听的ip和端口，配置 192.168.75.145:80\n        listen       80;\n\t# 虚拟主机名称这里配置ip地址\n        server_name  192.168.75.145;\n\t# 所有的请求都以 / 开始，所有的请求都可以匹配此 location\n        location / {\n\t    # 使用 root 指令指定虚拟主机目录即网页存放目录\n\t    # 比如访问 http://ip/index.html 将找到 /usr/local/docker/nginx/wwwroot/html80/index.html\n\t    # 比如访问 http://ip/item/index.html 将找到 /usr/local/docker/nginx/wwwroot/html80/item/index.html\n\n            root   /usr/share/nginx/wwwroot/html80;\n\t    # 指定欢迎页面，按从左到右顺序查找\n            index  index.html index.htm;\n        }\n\n    }\n    # 配置虚拟主机 192.168.75.245\n    server {\n        listen       8080;\n        server_name  192.168.75.145;\n\n        location / {\n            root   /usr/share/nginx/wwwroot/html8080;\n            index  index.html index.htm;\n        }\n    }\n}\n")])])]),e("h2",{attrs:{id:"基于域名的虚拟主机配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于域名的虚拟主机配置"}},[t._v("#")]),t._v(" 基于域名的虚拟主机配置")]),t._v(" "),e("h3",{attrs:{id:"需求-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#需求-2"}},[t._v("#")]),t._v(" 需求")]),t._v(" "),e("ul",[e("li",[t._v("两个域名指向同一台 Nginx 服务器，用户访问不同的域名显示不同的网页内容")]),t._v(" "),e("li",[t._v("两个域名是 admin.service.itoken.funtl.com 和 admin.web.itoken.funtl.com")]),t._v(" "),e("li",[t._v("Nginx 服务器使用虚拟机 192.168.75.145")])]),t._v(" "),e("h3",{attrs:{id:"配置-windows-hosts-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-windows-hosts-文件"}},[t._v("#")]),t._v(" 配置 Windows Hosts 文件")]),t._v(" "),e("ul",[e("li",[t._v("通过 host 文件指定 admin.service.itoken.funtl.com 和 admin.web.itoken.funtl.com 对应 192.168.75.145 虚拟机：")]),t._v(" "),e("li",[t._v("修改 window 的 hosts 文件：（C:\\Windows\\System32\\drivers\\etc）")])]),t._v(" "),e("h3",{attrs:{id:"创建目录及文件-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建目录及文件-2"}},[t._v("#")]),t._v(" 创建目录及文件")]),t._v(" "),e("p",[t._v("在 "),e("code",[t._v("/usr/local/docker/nginx/wwwroot")]),t._v(" 目录下创建 "),e("code",[t._v("htmlservice")]),t._v(" 和 "),e("code",[t._v("htmlweb")]),t._v(" 两个目录，并分辨创建两个 index.html 文件")]),t._v(" "),e("h3",{attrs:{id:"配置虚拟主机-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置虚拟主机-2"}},[t._v("#")]),t._v(" 配置虚拟主机")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("user  nginx;\nworker_processes  1;\n\nevents {\n    worker_connections  1024;\n}\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    sendfile        on;\n\n    keepalive_timeout  65;\n    server {\n        listen       80;\n        server_name  admin.service.itoken.funtl.com;\n        location / {\n            root   /usr/share/nginx/wwwroot/htmlservice;\n            index  index.html index.htm;\n        }\n\n    }\n\n    server {\n        listen       80;\n        server_name  admin.web.itoken.funtl.com;\n\n        location / {\n            root   /usr/share/nginx/wwwroot/htmlweb;\n            index  index.html index.htm;\n        }\n    }\n}\n")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);