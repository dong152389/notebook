(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{926:function(t,e,n){"use strict";n.r(e);var a=n(26),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"nginx-负载均衡"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-负载均衡"}},[t._v("#")]),t._v(" Nginx 负载均衡")]),t._v(" "),n("h2",{attrs:{id:"什么是负载均衡"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是负载均衡"}},[t._v("#")]),t._v(" 什么是负载均衡")]),t._v(" "),n("p",[t._v("负载均衡建立在现有网络结构之上，它提供了一种廉价有效透明的方法扩展网络设备和服务器的带宽、增加吞吐量、加强网络数据处理能力、提高网络的灵活性和可用性。")]),t._v(" "),n("p",[t._v("负载均衡，英文名称为 Load Balance，其意思就是分摊到多个操作单元上进行执行，例如 Web 服务器、FTP 服务器、企业关键应用服务器和其它关键任务服务器等，从而共同完成工作任务。")]),t._v(" "),n("h2",{attrs:{id:"nginx-实现负载均衡"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-实现负载均衡"}},[t._v("#")]),t._v(" Nginx 实现负载均衡")]),t._v(" "),n("ul",[n("li",[t._v("nginx 作为负载均衡服务器，用户请求先到达 nginx，再由 nginx 根据负载配置将请求转发至 tomcat 服务器")]),t._v(" "),n("li",[t._v("nginx 负载均衡服务器：192.168.75.145:80")]),t._v(" "),n("li",[t._v("tomcat1 服务器：192.168.75.145:9090")]),t._v(" "),n("li",[t._v("tomcat2 服务器：192.168.75.145:9091")])]),t._v(" "),n("h3",{attrs:{id:"nginx-配置负载均衡"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置负载均衡"}},[t._v("#")]),t._v(" Nginx 配置负载均衡")]),t._v(" "),n("p",[t._v("修改 "),n("code",[t._v("/usr/local/docker/nginx/conf")]),t._v(" 目录下的 nginx.conf 配置文件：")]),t._v(" "),n("div",{staticClass:"language-text extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("user  nginx;\nworker_processes  1;\n\nevents {\n    worker_connections  1024;\n}\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    sendfile        on;\n\n    keepalive_timeout  65;\n\t\n\tupstream myapp1 {\n\t\tserver 192.168.75.145:9090 weight=10;\n\t\tserver 192.168.75.145:9091 weight=10;\n\t}\n\n\tserver {\n\t\tlisten 80;\n\t\tserver_name nginx.funtl.com;\n\t\tlocation / {\n\t\t\tproxy_pass http://myapp1;\n\t\t\tindex index.jsp index.html index.htm;\n\t\t}\n\t}\n}\n")])])]),n("h3",{attrs:{id:"相关配置说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#相关配置说明"}},[t._v("#")]),t._v(" 相关配置说明")]),t._v(" "),n("div",{staticClass:"language-text extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# 定义负载均衡设备的 Ip及设备状态 \nupstream myServer {\n    server 127.0.0.1:9090 down;\n    server 127.0.0.1:8080 weight=2;\n    server 127.0.0.1:6060;\n    server 127.0.0.1:7070 backup;\n}\n")])])]),n("p",[t._v("在需要使用负载的 Server 节点下添加")]),t._v(" "),n("div",{staticClass:"language-text extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("proxy_pass http://myServer;\n")])])]),n("ul",[n("li",[n("code",[t._v("upstream")]),t._v("：每个设备的状态:")]),t._v(" "),n("li",[n("code",[t._v("down")]),t._v("：表示当前的 "),n("code",[t._v("server")]),t._v(" 暂时不参与负载")]),t._v(" "),n("li",[n("code",[t._v("weight")]),t._v("：默认为 1 "),n("code",[t._v("weight")]),t._v(" 越大，负载的权重就越大。")]),t._v(" "),n("li",[n("code",[t._v("max_fails")]),t._v("：允许请求失败的次数默认为 1 当超过最大次数时，返回 "),n("code",[t._v("proxy_next_upstream")]),t._v(" 模块定义的错误")]),t._v(" "),n("li",[n("code",[t._v("fail_timeout")]),t._v(":"),n("code",[t._v("max_fails")]),t._v(" 次失败后，暂停的时间。")]),t._v(" "),n("li",[n("code",[t._v("backup")]),t._v("：其它所有的非 "),n("code",[t._v("backup")]),t._v(" 机器 "),n("code",[t._v("down")]),t._v(" 或者忙的时候，请求 "),n("code",[t._v("backup")]),t._v(" 机器。所以这台机器压力会最轻")])])])}),[],!1,null,null,null);e.default=s.exports}}]);