(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{1008:function(a,t,e){"use strict";e.r(t);var s=e(26),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"linux-软件包管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-软件包管理"}},[a._v("#")]),a._v(" Linux 软件包管理")]),a._v(" "),e("h2",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),e("p",[a._v("APT(Advanced Packaging Tool) 是 Debian/Ubuntu 类 Linux 系统中的软件包管理程序, 使用它可以找到想要的软件包, 而且安装、卸载、更新都很简便；也可以用来对 Ubuntu 进行升级; APT 的源文件为 "),e("code",[a._v("/etc/apt/")]),a._v(" 目录下的 "),e("code",[a._v("sources.list")]),a._v(" 文件。")]),a._v(" "),e("h2",{attrs:{id:"修改数据源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改数据源"}},[a._v("#")]),a._v(" 修改数据源")]),a._v(" "),e("p",[a._v("由于国内的网络环境问题，我们需要将 Ubuntu 的数据源修改为国内数据源，操作步骤如下：")]),a._v(" "),e("h3",{attrs:{id:"查看系统版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看系统版本"}},[a._v("#")]),a._v(" 查看系统版本")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("lsb_release -a\n")])])]),e("p",[a._v("输出结果为")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("No LSB modules are available.\nDistributor ID:\tUbuntu\nDescription:\tUbuntu 16.04 LTS\nRelease:\t16.04\nCodename:\txenial\n")])])]),e("p",[e("strong",[a._v("注意：")]),a._v(" Codename 为 "),e("code",[a._v("xenial")]),a._v("，该名称为我们 Ubuntu 系统的名称，修改数据源需要用到该名称")]),a._v(" "),e("h3",{attrs:{id:"编辑数据源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编辑数据源"}},[a._v("#")]),a._v(" 编辑数据源")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("vi /etc/apt/sources.list\n")])])]),e("p",[a._v("删除全部内容并修改为")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("deb http://mirrors.aliyun.com/ubuntu/ xenial main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ xenial-security main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ xenial-updates main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ xenial-backports main restricted universe multiverse\n")])])]),e("h3",{attrs:{id:"更新数据源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新数据源"}},[a._v("#")]),a._v(" 更新数据源")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("apt-get update\n")])])]),e("h2",{attrs:{id:"常用-apt-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用-apt-命令"}},[a._v("#")]),a._v(" 常用 APT 命令")]),a._v(" "),e("h3",{attrs:{id:"安装软件包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装软件包"}},[a._v("#")]),a._v(" 安装软件包")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("apt-get install packagename\n")])])]),e("h3",{attrs:{id:"删除软件包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除软件包"}},[a._v("#")]),a._v(" 删除软件包")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("apt-get remove packagename\n")])])]),e("h3",{attrs:{id:"更新软件包列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新软件包列表"}},[a._v("#")]),a._v(" 更新软件包列表")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("apt-get update\n")])])]),e("h3",{attrs:{id:"升级有可用更新的系统-慎用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#升级有可用更新的系统-慎用"}},[a._v("#")]),a._v(" 升级有可用更新的系统（慎用）")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("apt-get upgrade\n")])])]),e("h2",{attrs:{id:"其它-apt-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其它-apt-命令"}},[a._v("#")]),a._v(" 其它 APT 命令")]),a._v(" "),e("h3",{attrs:{id:"搜索"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搜索"}},[a._v("#")]),a._v(" 搜索")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("apt-cache search package\n")])])]),e("h3",{attrs:{id:"获取包信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取包信息"}},[a._v("#")]),a._v(" 获取包信息")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("apt-cache show package\n")])])]),e("h3",{attrs:{id:"删除包及配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除包及配置文件"}},[a._v("#")]),a._v(" 删除包及配置文件")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("apt-get remove package --purge\n")])])]),e("h3",{attrs:{id:"了解使用依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#了解使用依赖"}},[a._v("#")]),a._v(" 了解使用依赖")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("apt-cache depends package\n")])])]),e("h3",{attrs:{id:"查看被哪些包依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看被哪些包依赖"}},[a._v("#")]),a._v(" 查看被哪些包依赖")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("apt-cache rdepends package\n")])])]),e("h3",{attrs:{id:"安装相关的编译环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装相关的编译环境"}},[a._v("#")]),a._v(" 安装相关的编译环境")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("apt-get build-dep package\n")])])]),e("h3",{attrs:{id:"下载源代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载源代码"}},[a._v("#")]),a._v(" 下载源代码")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("apt-get source package\n")])])]),e("h3",{attrs:{id:"清理无用的包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#清理无用的包"}},[a._v("#")]),a._v(" 清理无用的包")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("apt-get clean && apt-get autoclean\n")])])]),e("h3",{attrs:{id:"检查是否有损坏的依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#检查是否有损坏的依赖"}},[a._v("#")]),a._v(" 检查是否有损坏的依赖")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("apt-get check\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);