(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{480:function(t,s,a){t.exports=a.p+"assets/img/Lusifer1511797825.ed67bf35.png"},481:function(t,s,a){t.exports=a.p+"assets/img/Lusifer1511798229.bbb13df4.png"},653:function(t,s,a){"use strict";a.r(s);var n=a(26),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"基于-docker-安装-gitlab"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基于-docker-安装-gitlab"}},[t._v("#")]),t._v(" 基于 Docker 安装 GitLab")]),t._v(" "),n("p",[t._v("我们使用 Docker 来安装和运行 GitLab 中文版，由于新版本问题较多，这里我们使用目前相对稳定的 10.5 版本，"),n("code",[t._v("docker-compose.yml")]),t._v(" 配置如下：")]),t._v(" "),n("div",{staticClass:"language-yaml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("web")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'twang2218/gitlab-ce-zh:10.5'")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hostname")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'192.168.75.145'")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("TZ")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Asia/Shanghai'")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("GITLAB_OMNIBUS_CONFIG")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),n("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n          external_url 'http://192.168.75.145:8080'\n          gitlab_rails['gitlab_shell_ssh_port'] = 2222\n          unicorn['port'] = 8888\n          nginx['listen_port'] = 8080")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'8080:8080'")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'8443:443'")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2222:22'")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /usr/local/docker/gitlab/config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/etc/gitlab\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /usr/local/docker/gitlab/data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/opt/gitlab\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /usr/local/docker/gitlab/logs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/log/gitlab\n")])])]),n("h3",{attrs:{id:"安装完成后的工作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装完成后的工作"}},[t._v("#")]),t._v(" 安装完成后的工作")]),t._v(" "),n("ul",[n("li",[t._v("访问地址：http://ip:8080")]),t._v(" "),n("li",[t._v("端口 8080 是因为我在配置中设置的外部访问地址为 8080，默认是 80")]),t._v(" "),n("li",[t._v("初始化安装完成后效果如下：")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(480),alt:"img"}})]),t._v(" "),n("ul",[n("li",[t._v("设置管理员初始密码，这里的密码最好是 字母 + 数字 组合，并且 大于等于 8 位")]),t._v(" "),n("li",[t._v("配置完成后登录，管理员账号是 root")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(481),alt:"img"}})]),t._v(" "),n("p",[n("strong",[t._v("注意：")]),t._v(" 如果服务器配置较低，启动运行可能需要较长时间，请耐心等待")])])}),[],!1,null,null,null);s.default=e.exports}}]);