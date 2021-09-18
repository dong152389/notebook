(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1250:function(t,e,s){"use strict";s.r(e);var a=s(26),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"第一个-vue-cli-应用程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一个-vue-cli-应用程序"}},[t._v("#")]),t._v(" 第一个 vue-cli 应用程序")]),t._v(" "),a("h2",{attrs:{id:"什么是-vue-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-vue-cli"}},[t._v("#")]),t._v(" 什么是 vue-cli")]),t._v(" "),a("p",[a("code",[t._v("vue-cli")]),t._v(" 官方提供的一个脚手架（预先定义好的目录结构及基础代码，咱们在创建 Maven 项目时可以选择创建一个骨架项目，这个骨架项目就是脚手架；可以参考这个人写的 "),a("a",{attrs:{href:"https://github.com/topsale/leesite-archetype-webapp",target:"_blank",rel:"noopener noreferrer"}},[t._v("LeeSite 项目骨架生成工具"),a("OutboundLink")],1),t._v("），用于快速生成一个 vue 的项目模板")]),t._v(" "),a("h3",{attrs:{id:"主要功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要功能"}},[t._v("#")]),t._v(" 主要功能")]),t._v(" "),a("ul",[a("li",[t._v("统一的目录结构")]),t._v(" "),a("li",[t._v("本地调试")]),t._v(" "),a("li",[t._v("热部署")]),t._v(" "),a("li",[t._v("单元测试")]),t._v(" "),a("li",[t._v("集成打包上线")])]),t._v(" "),a("h3",{attrs:{id:"环境准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[t._v("#")]),t._v(" 环境准备")]),t._v(" "),a("ul",[a("li",[t._v("Node.js（>= 6.x，首选 8.x）")]),t._v(" "),a("li",[t._v("git")])]),t._v(" "),a("h3",{attrs:{id:"安装-vue-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-vue-cli"}},[t._v("#")]),t._v(" 安装 vue-cli")]),t._v(" "),a("ul",[a("li",[t._v("安装 Node.js")])]),t._v(" "),a("p",[t._v("请自行前往 http://nodejs.cn/download 官网下载安装，此处不再赘述")]),t._v(" "),a("p",[a("img",{attrs:{src:s(852),alt:"img"}})]),t._v(" "),a("ul",[a("li",[t._v("安装 Node.js 淘宝镜像加速器（"),a("code",[t._v("cnpm")]),t._v("）")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" cnpm -g\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或使用如下语句解决 npm 速度慢的问题")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --registry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://registry.npm.taobao.org\n")])])]),a("p",[a("img",{attrs:{src:s(853),alt:"img"}})]),t._v(" "),a("ul",[a("li",[t._v("安装 vue-cli")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("cnpm "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" vue-cli -g\n")])])]),a("ul",[a("li",[t._v("测试是否安装成功")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看可以基于哪些模板创建 vue 应用程序，通常我们选择 webpack")]),t._v("\nvue list\n")])])]),a("p",[a("img",{attrs:{src:s(854),alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"第一个-vue-cli-应用程序-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一个-vue-cli-应用程序-2"}},[t._v("#")]),t._v(" 第一个 vue-cli 应用程序")]),t._v(" "),a("h3",{attrs:{id:"创建一个基于-webpack-模板的-vue-应用程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建一个基于-webpack-模板的-vue-应用程序"}},[t._v("#")]),t._v(" 创建一个基于 webpack 模板的 vue 应用程序")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这里的 myvue 是项目名称，可以根据自己的需求起名")]),t._v("\nvue init webpack myvue\n")])])]),a("p",[a("img",{attrs:{src:s(855),alt:"img"}})]),t._v(" "),a("h4",{attrs:{id:"说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Project name")]),t._v("：项目名称，默认 "),a("code",[t._v("回车")]),t._v(" 即可")]),t._v(" "),a("li",[a("code",[t._v("Project description")]),t._v("：项目描述，默认 "),a("code",[t._v("回车")]),t._v(" 即可")]),t._v(" "),a("li",[a("code",[t._v("Author")]),t._v("：项目作者，默认 "),a("code",[t._v("回车")]),t._v(" 即可")]),t._v(" "),a("li",[a("code",[t._v("Install vue-router")]),t._v("：是否安装 "),a("code",[t._v("vue-router")]),t._v("，选择 "),a("code",[t._v("n")]),t._v(" 不安装（后期需要再手动添加）")]),t._v(" "),a("li",[a("code",[t._v("Use ESLint to lint your code")]),t._v("：是否使用 "),a("code",[t._v("ESLint")]),t._v(" 做代码检查，选择 "),a("code",[t._v("n")]),t._v(" 不安装（后期需要再手动添加）")]),t._v(" "),a("li",[a("code",[t._v("Set up unit tests")]),t._v("：单元测试相关，选择 "),a("code",[t._v("n")]),t._v(" 不安装（后期需要再手动添加）")]),t._v(" "),a("li",[a("code",[t._v("Setup e2e tests with Nightwatch")]),t._v("：单元测试相关，选择 "),a("code",[t._v("n")]),t._v(" 不安装（后期需要再手动添加）")]),t._v(" "),a("li",[a("code",[t._v("Should we run npm install for you after the project has been created")]),t._v("：创建完成后直接初始化，选择 "),a("code",[t._v("n")]),t._v("，我们手动执行")])]),t._v(" "),a("h3",{attrs:{id:"初始化并运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化并运行"}},[t._v("#")]),t._v(" 初始化并运行")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" myvue\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n")])])]),a("p",[a("img",{attrs:{src:s(856),alt:"img"}})]),t._v(" "),a("p",[t._v("安装并运行成功后在浏览器输入：http://localhost:8080")])])}),[],!1,null,null,null);e.default=v.exports},852:function(t,e,s){t.exports=s.p+"assets/img/Lusifer_20181224052651.816b9167.png"},853:function(t,e,s){t.exports=s.p+"assets/img/Lusifer_20181224053021.b8be346a.png"},854:function(t,e,s){t.exports=s.p+"assets/img/Lusifer_20181224053315.e61bffba.png"},855:function(t,e,s){t.exports=s.p+"assets/img/Lusifer_20181224054035.ac4bfe7a.png"},856:function(t,e,s){t.exports=s.p+"assets/img/Lusifer_20181224060151.e084e29f.png"}}]);