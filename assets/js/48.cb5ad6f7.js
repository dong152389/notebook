(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{492:function(t,a,n){t.exports=n.p+"assets/img/Lusifer2018080517010001.e57d8482.png"},493:function(t,a,n){t.exports=n.p+"assets/img/Lusifer2018080517010002.4ca9baee.png"},494:function(t,a,n){t.exports=n.p+"assets/img/Lusifer2018080517010003.13c03970.png"},923:function(t,a,n){"use strict";n.r(a);var s=n(26),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"nginx-反向代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-反向代理"}},[t._v("#")]),t._v(" Nginx 反向代理")]),t._v(" "),s("h2",{attrs:{id:"什么是代理服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是代理服务器"}},[t._v("#")]),t._v(" 什么是代理服务器？")]),t._v(" "),s("p",[t._v("代理服务器，客户机在发送请求时，不会直接发送给目的主机，而是先发送给代理服务器，代理服务接受客户机请求之后，再向主机发出，并接收目的主机返回的数据，存放在代理服务器的硬盘中，再发送给客户机。")]),t._v(" "),s("p",[s("img",{attrs:{src:n(492),alt:"img"}})]),t._v(" "),s("h2",{attrs:{id:"为什么要使用代理服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用代理服务器"}},[t._v("#")]),t._v(" 为什么要使用代理服务器？")]),t._v(" "),s("h3",{attrs:{id:"提高访问速度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提高访问速度"}},[t._v("#")]),t._v(" 提高访问速度")]),t._v(" "),s("p",[t._v("由于目标主机返回的数据会存放在代理服务器的硬盘中，因此下一次客户再访问相同的站点数据时，会直接从代理服务器的硬盘中读取，起到了缓存的作用，尤其对于热门站点能明显提高请求速度。")]),t._v(" "),s("h3",{attrs:{id:"防火墙作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防火墙作用"}},[t._v("#")]),t._v(" 防火墙作用")]),t._v(" "),s("p",[t._v("由于所有的客户机请求都必须通过代理服务器访问远程站点，因此可在代理服务器上设限，过滤某些不安全信息。")]),t._v(" "),s("h3",{attrs:{id:"通过代理服务器访问不能访问的目标站点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过代理服务器访问不能访问的目标站点"}},[t._v("#")]),t._v(" 通过代理服务器访问不能访问的目标站点")]),t._v(" "),s("p",[t._v("互联网上有许多开放的代理服务器，客户机在访问受限时，可通过不受限的代理服务器访问目标站点，通俗说，我们使用的翻墙浏览器就是利用了代理服务器，虽然不能出国，但也可直接访问外网。")]),t._v(" "),s("h2",{attrs:{id:"什么是正向代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是正向代理"}},[t._v("#")]),t._v(" 什么是正向代理？")]),t._v(" "),s("p",[t._v("正向代理，架设在客户机与目标主机之间，只用于代理内部网络对 Internet 的连接请求，客户机必须指定代理服务器,并将本来要直接发送到 Web 服务器上的 Http 请求发送到代理服务器中。")]),t._v(" "),s("p",[s("img",{attrs:{src:n(493),alt:"img"}})]),t._v(" "),s("h2",{attrs:{id:"什么是反向代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是反向代理"}},[t._v("#")]),t._v(" 什么是反向代理？")]),t._v(" "),s("p",[t._v("反向代理服务器架设在服务器端，通过缓冲经常被请求的页面来缓解服务器的工作量，将客户机请求转发给内部网络上的目标服务器；并将从服务器上得到的结果返回给 Internet 上请求连接的客户端，此时代理服务器与目标主机一起对外表现为一个服务器。")]),t._v(" "),s("p",[s("img",{attrs:{src:n(494),alt:"img"}})]),t._v(" "),s("h2",{attrs:{id:"反向代理有哪些主要应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#反向代理有哪些主要应用"}},[t._v("#")]),t._v(" 反向代理有哪些主要应用？")]),t._v(" "),s("p",[t._v("现在许多大型 web 网站都用到反向代理。除了可以防止外网对内网服务器的恶性攻击、缓存以减少服务器的压力和访问安全控制之外，还可以进行负载均衡，将用户请求分配给多个服务器。")]),t._v(" "),s("h2",{attrs:{id:"使用-nginx-反向代理-tomcat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-nginx-反向代理-tomcat"}},[t._v("#")]),t._v(" 使用 Nginx 反向代理 Tomcat")]),t._v(" "),s("h3",{attrs:{id:"需求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#需求"}},[t._v("#")]),t._v(" 需求")]),t._v(" "),s("ul",[s("li",[t._v("两个 tomcat 服务通过 nginx 反向代理")]),t._v(" "),s("li",[t._v("nginx 服务器：192.168.75.145:80")]),t._v(" "),s("li",[t._v("tomcat1 服务器：192.168.75.145:9090")]),t._v(" "),s("li",[t._v("tomcat2 服务器：192.168.75.145:9091")])]),t._v(" "),s("h3",{attrs:{id:"启动-tomcat-容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动-tomcat-容器"}},[t._v("#")]),t._v(" 启动 Tomcat 容器")]),t._v(" "),s("p",[t._v("启动两个 Tomcat 容器，映射端口为 9090 和 9091，docker-compose.yml 如下：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tomcat1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tomcat\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tomcat1\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 9090"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tomcat2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tomcat\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tomcat2\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 9091"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n")])])]),s("h3",{attrs:{id:"配置-nginx-反向代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-nginx-反向代理"}},[t._v("#")]),t._v(" 配置 Nginx 反向代理")]),t._v(" "),s("p",[t._v("修改 "),s("code",[t._v("/usr/local/docker/nginx/conf")]),t._v(" 目录下的 nginx.conf 配置文件：")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("user  nginx;\nworker_processes  1;\n\nevents {\n    worker_connections  1024;\n}\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    sendfile        on;\n\n    keepalive_timeout  65;\n\t\n\t# 配置一个代理即 tomcat1 服务器\n\tupstream tomcatServer1 {\n\t\tserver 192.168.75.145:9090;\n\t}\n\n\t# 配置一个代理即 tomcat2 服务器\n\tupstream tomcatServer2 {\n\t\tserver 192.168.75.145:9091;\n\t}\n\n\t# 配置一个虚拟主机\n\tserver {\n\t\tlisten 80;\n\t\tserver_name admin.service.itoken.funtl.com;\n\t\tlocation / {\n\t\t\t\t# 域名 admin.service.itoken.funtl.com 的请求全部转发到 tomcat_server1 即 tomcat1 服务上\n\t\t\t\tproxy_pass http://tomcatServer1;\n\t\t\t\t# 欢迎页面，按照从左到右的顺序查找页面\n\t\t\t\tindex index.jsp index.html index.htm;\n\t\t}\n\t}\n\n\tserver {\n\t\tlisten 80;\n\t\tserver_name admin.web.itoken.funtl.com;\n\n\t\tlocation / {\n\t\t\t# 域名 admin.web.itoken.funtl.com 的请求全部转发到 tomcat_server2 即 tomcat2 服务上\n\t\t\tproxy_pass http://tomcatServer2;\n\t\t\tindex index.jsp index.html index.htm;\n\t\t}\n\t}\n}\n")])])]),s("p",[s("strong",[t._v("注意：新版 Nginx 的 "),s("code",[t._v("upstream")]),t._v(' 配置中的名称不可以有下划线("_")，否则会报 '),s("code",[t._v("400")]),t._v(" 错误")])])])}),[],!1,null,null,null);a.default=e.exports}}]);