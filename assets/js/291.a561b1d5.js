(window.webpackJsonp=window.webpackJsonp||[]).push([[291],{1122:function(t,a,e){"use strict";e.r(a);var s=e(26),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"配置-docker-registry-客户端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-docker-registry-客户端"}},[t._v("#")]),t._v(" 配置 Docker Registry 客户端")]),t._v(" "),e("h2",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),e("p",[t._v("我们的教学案例使用的是 Ubuntu Server 16.04 LTS 版本，属于 "),e("code",[t._v("systemd")]),t._v(" 系统，需要在 "),e("code",[t._v("/etc/docker/daemon.json")]),t._v(" 中增加如下内容（如果文件不存在请新建该文件）")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n  "registry-mirrors": [\n    "https://registry.docker-cn.com"\n  ],\n  "insecure-registries": [\n    "ip:5000"\n  ]\n}\n')])])]),e("blockquote",[e("p",[t._v("注意：该文件必须符合 json 规范，否则 Docker 将不能启动。")])]),t._v(" "),e("p",[t._v("之后重新启动服务。")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ sudo systemctl daemon-reload\n$ sudo systemctl restart docker\n")])])]),e("h2",{attrs:{id:"检查客户端配置是否生效"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#检查客户端配置是否生效"}},[t._v("#")]),t._v(" 检查客户端配置是否生效")]),t._v(" "),e("p",[t._v("使用 "),e("code",[t._v("docker info")]),t._v(" 命令手动检查，如果从配置中看到如下内容，说明配置成功（192.168.75.133 为教学案例 IP）")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Insecure Registries:\n 192.168.75.133:5000\n 127.0.0.0/8\n")])])]),e("h2",{attrs:{id:"测试镜像上传"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试镜像上传"}},[t._v("#")]),t._v(" 测试镜像上传")]),t._v(" "),e("p",[t._v("我们以 Nginx 为例测试镜像上传功能")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("## 拉取一个镜像\ndocker pull nginx\n\n## 查看全部镜像\ndocker images\n\n## 标记本地镜像并指向目标仓库（ip:port/image_name:tag，该格式为标记版本号）\ndocker tag nginx 192.168.75.133:5000/nginx\n\n## 提交镜像到仓库\ndocker push 192.168.75.133:5000/nginx\n")])])]),e("h2",{attrs:{id:"查看全部镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看全部镜像"}},[t._v("#")]),t._v(" 查看全部镜像")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("curl -XGET http://192.168.75.133:5000/v2/_catalog\n")])])]),e("h2",{attrs:{id:"查看指定镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看指定镜像"}},[t._v("#")]),t._v(" 查看指定镜像")]),t._v(" "),e("p",[t._v("以 Nginx 为例，查看已提交的列表")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("curl -XGET http://192.168.75.133:5000/v2/nginx/tags/list\n")])])]),e("h2",{attrs:{id:"测试拉取镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试拉取镜像"}},[t._v("#")]),t._v(" 测试拉取镜像")]),t._v(" "),e("ul",[e("li",[t._v("先删除镜像")])]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("docker rmi nginx\ndocker rmi 192.168.75.133:5000/nginx\n")])])]),e("ul",[e("li",[t._v("再拉取镜像")])]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("docker pull 192.168.75.133:5000/nginx\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);