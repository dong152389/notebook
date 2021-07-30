(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{1109:function(t,s,a){"use strict";a.r(s);var e=a(26),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"基于-docker-安装-nexus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于-docker-安装-nexus"}},[t._v("#")]),t._v(" 基于 Docker 安装 Nexus")]),t._v(" "),a("p",[t._v("我们使用 Docker 来安装和运行 Nexus，"),a("code",[t._v("docker-compose.yml")]),t._v(" 配置如下：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3.1'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nexus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sonatype/nexus3\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nexus\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 8081"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8081")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /usr/local/docker/nexus/data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/nexus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("data\n")])])]),a("p",[a("em",[t._v("注：")]),t._v(" 启动时如果出现权限问题可以使用："),a("code",[t._v("chmod 777 /usr/local/docker/nexus/data")]),t._v(" 赋予数据卷目录可读可写的权限")]),t._v(" "),a("h2",{attrs:{id:"登录控制台验证安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登录控制台验证安装"}},[t._v("#")]),t._v(" 登录控制台验证安装")]),t._v(" "),a("p",[t._v("地址：http://ip:port/ 用户名：admin 密码：admin123")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.dfd.com/assets/Lusifer1521047001.png",alt:"img"}})])])}),[],!1,null,null,null);s.default=n.exports}}]);