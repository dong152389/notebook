(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{1003:function(r,e,t){"use strict";t.r(e);var s=t(26),a=Object(s.a)({},(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"docker-镜像加速器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-镜像加速器"}},[r._v("#")]),r._v(" Docker 镜像加速器")]),r._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[r._v("#")]),r._v(" 概述")]),r._v(" "),t("p",[r._v("国内从 Docker Hub 拉取镜像有时会遇到困难，此时可以配置镜像加速器。Docker 官方和国内很多云服务商都提供了国内加速器服务，例如：")]),r._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://docs.docker.com/registry/recipes/mirror/#use-case-the-china-registry-mirror",target:"_blank",rel:"noopener noreferrer"}},[r._v("Docker 官方提供的中国 registry mirror"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://cr.console.aliyun.com/#/accelerator",target:"_blank",rel:"noopener noreferrer"}},[r._v("阿里云加速器"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://www.daocloud.io/mirror#accelerator-doc",target:"_blank",rel:"noopener noreferrer"}},[r._v("DaoCloud 加速器"),t("OutboundLink")],1)])]),r._v(" "),t("p",[r._v("我们以 Docker 官方加速器为例进行介绍。")]),r._v(" "),t("h2",{attrs:{id:"ubuntu-14-04、debian-7-wheezy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-14-04、debian-7-wheezy"}},[r._v("#")]),r._v(" Ubuntu 14.04、Debian 7 Wheezy")]),r._v(" "),t("p",[r._v("对于使用 "),t("a",{attrs:{href:"http://upstart.ubuntu.com/",target:"_blank",rel:"noopener noreferrer"}},[r._v("upstart"),t("OutboundLink")],1),r._v(" 的系统而言，编辑 "),t("code",[r._v("/etc/default/docker")]),r._v(" 文件，在其中的 "),t("code",[r._v("DOCKER_OPTS")]),r._v(" 中配置加速器地址：")]),r._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[r._v("DOCKER_OPTS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[r._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[r._v('"--registry-mirror=https://registry.docker-cn.com"')]),r._v("\n")])])]),t("p",[r._v("重新启动服务。")]),r._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[r._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[r._v("sudo")]),r._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[r._v("service")]),r._v(" docker restart\n")])])]),t("h2",{attrs:{id:"ubuntu-16-04-、debian-8-、centos-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-16-04-、debian-8-、centos-7"}},[r._v("#")]),r._v(" Ubuntu 16.04+、Debian 8+、CentOS 7")]),r._v(" "),t("p",[r._v("对于使用 "),t("a",{attrs:{href:"https://www.freedesktop.org/wiki/Software/systemd/",target:"_blank",rel:"noopener noreferrer"}},[r._v("systemd"),t("OutboundLink")],1),r._v(" 的系统，请在 "),t("code",[r._v("/etc/docker/daemon.json")]),r._v(" 中写入如下内容（如果文件不存在请新建该文件）")]),r._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v("{")]),r._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[r._v('"registry-mirrors"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[r._v(":")]),r._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v("[")]),r._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[r._v('"https://registry.docker-cn.com"')]),r._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v("]")]),r._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[r._v("}")]),r._v("\n")])])]),t("blockquote",[t("p",[r._v("注意，一定要保证该文件符合 json 规范，否则 Docker 将不能启动。")])]),r._v(" "),t("p",[r._v("之后重新启动服务。")]),r._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[r._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[r._v("sudo")]),r._v(" systemctl daemon-reload\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[r._v("sudo")]),r._v(" systemctl restart docker\n")])])]),t("blockquote",[t("p",[r._v("注意：如果您之前查看旧教程，修改了 "),t("code",[r._v("docker.service")]),r._v(" 文件内容，请去掉您添加的内容（"),t("code",[r._v("--registry-mirror=https://registry.docker-cn.com")]),r._v("），这里不再赘述。")])]),r._v(" "),t("h2",{attrs:{id:"windows-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows-10"}},[r._v("#")]),r._v(" Windows 10")]),r._v(" "),t("p",[r._v("对于使用 Windows 10 的系统，在系统右下角托盘 Docker 图标内右键菜单选择 "),t("code",[r._v("Settings")]),r._v("，打开配置窗口后左侧导航菜单选择 "),t("code",[r._v("Daemon")]),r._v("。在 "),t("code",[r._v("Registry mirrors")]),r._v(" 一栏中填写加速器地址 "),t("code",[r._v("https://registry.docker-cn.com")]),r._v("，之后点击 "),t("code",[r._v("Apply")]),r._v(" 保存后 Docker 就会重启并应用配置的镜像地址了。")]),r._v(" "),t("h2",{attrs:{id:"macos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[r._v("#")]),r._v(" macOS")]),r._v(" "),t("p",[r._v("对于使用 macOS 的用户，在任务栏点击 Docker for mac 应用图标 -> Perferences... -> Daemon -> Registry mirrors。在列表中填写加速器地址 "),t("code",[r._v("https://registry.docker-cn.com")]),r._v("。修改完成之后，点击 "),t("code",[r._v("Apply & Restart")]),r._v(" 按钮，Docker 就会重启并应用配置的镜像地址了。")]),r._v(" "),t("h2",{attrs:{id:"检查加速器是否生效"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查加速器是否生效"}},[r._v("#")]),r._v(" 检查加速器是否生效")]),r._v(" "),t("p",[r._v("配置加速器之后，如果拉取镜像仍然十分缓慢，请手动检查加速器配置是否生效，在命令行执行 "),t("code",[r._v("docker info")]),r._v("，如果从结果中看到了如下内容，说明配置成功。")]),r._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[r._v("Registry Mirrors:\n https://registry.docker-cn.com/\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);