(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{432:function(s,t,a){s.exports=a.p+"assets/img/Lusifer_20181029010826.2e0c6ca4.png"},433:function(s,t,a){s.exports=a.p+"assets/img/Lusifer_20181029010853.3ea67bc9.png"},434:function(s,t,a){s.exports=a.p+"assets/img/Lusifer_20181029012228.6aeb71fb.png"},435:function(s,t,a){s.exports=a.p+"assets/img/Lusifer_20181029013023.4598aded.png"},436:function(s,t,a){s.exports=a.p+"assets/img/Lusifer_20181029013257.3b019c7b.png"},437:function(s,t,a){s.exports=a.p+"assets/img/Lusifer_20181029013529.288e661a.png"},438:function(s,t,a){s.exports=a.p+"assets/img/Lusifer_20181029014606.534488ec.png"},439:function(s,t,a){s.exports=a.p+"assets/img/Lusifer_20181029014814.d8b0e6cf.png"},440:function(s,t,a){s.exports=a.p+"assets/img/Lusifer_20181029015721.464920fc.png"},441:function(s,t,a){s.exports=a.p+"assets/img/Lusifer_20181029015918.e1988b94.png"},442:function(s,t,a){s.exports=a.p+"assets/img/Lusifer_20181029020240.adbbb756.png"},443:function(s,t,a){s.exports=a.p+"assets/img/Lusifer_20181029021411.065af16f.png"},444:function(s,t,a){s.exports=a.p+"assets/img/Lusifer_20181029021906.3fcd2058.png"},445:function(s,t,a){s.exports=a.p+"assets/img/Lusifer_20181029022059.055ce7e5.png"},446:function(s,t,a){s.exports=a.p+"assets/img/Lusifer_20181029022309.365e63f6.png"},447:function(s,t,a){s.exports=a.p+"assets/img/Lusifer_20181029022410.9ef5f2a4.png"},448:function(s,t,a){s.exports=a.p+"assets/img/Lusifer_20181029021640.84b8d228.png"},863:function(s,t,a){"use strict";a.r(t);var e=a(26),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"基于-docker-安装-jenkins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于-docker-安装-jenkins"}},[s._v("#")]),s._v(" 基于 Docker 安装 Jenkins")]),s._v(" "),e("h2",{attrs:{id:"docker-compose"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[s._v("#")]),s._v(" docker-compose")]),s._v(" "),e("p",[s._v("Jenkins 是一个简单易用的持续集成软件平台，我们依然采用 Docker 的方式部署，"),e("code",[s._v("docker-compose.yml")]),s._v(" 配置文件如下：")]),s._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.1'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jenkins")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" jenkinsci/jenkins\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" jenkins\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发布端口")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 8080"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 基于 JNLP 的 Jenkins 代理通过 TCP 端口 50000 与 Jenkins master 进行通信")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 50000"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("50000")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("TZ")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Asia/Shanghai\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/jenkins_home\n")])])]),e("p",[s._v("安装过程中会出现 "),e("code",[s._v("Docker 数据卷")]),s._v(" 权限问题，用以下命令解决：")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" /usr/local/docker/jenkins/data\n")])])]),e("h2",{attrs:{id:"解锁-jenkins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解锁-jenkins"}},[s._v("#")]),s._v(" 解锁 Jenkins")]),s._v(" "),e("p",[s._v("Jenkins 第一次启动时需要输入一个初始密码用以解锁安装流程，使用 "),e("code",[s._v("docker logs jenkins")]),s._v(" 即可方便的查看到初始密码")]),s._v(" "),e("p",[e("img",{attrs:{src:a(432),alt:"img"}})]),s._v(" "),e("p",[e("img",{attrs:{src:a(433),alt:"img"}})]),s._v(" "),e("p",[e("strong",[s._v("注意：")]),s._v(" 安装时可能会因为网速等原因导致安装时间比较长，请大家耐心等待。如果长时间停留在安装页没反应，请尝试使用 "),e("code",[s._v("F5")]),s._v(" 刷新一下。")]),s._v(" "),e("h2",{attrs:{id:"使用自定义插件的方式安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用自定义插件的方式安装"}},[s._v("#")]),s._v(" 使用自定义插件的方式安装")]),s._v(" "),e("p",[s._v("插件是 Jenkins 的核心，其丰富的插件（截止到 "),e("code",[s._v("2018.10.29")]),s._v(" 共有 "),e("code",[s._v("77350")]),s._v(" 个插件）可以满足不同人群的不同需求")]),s._v(" "),e("p",[s._v("插件地址：https://plugins.jenkins.io/")]),s._v(" "),e("p",[e("img",{attrs:{src:a(434),alt:"img"}})]),s._v(" "),e("p",[e("strong",[s._v("注意：")]),s._v(" 除了默认勾选的插件外，一定要勾选 "),e("code",[s._v("Publish over SSH")]),s._v(" 插件，这是我们实现持续交付的重点插件。")]),s._v(" "),e("p",[e("img",{attrs:{src:a(435),alt:"img"}})]),s._v(" "),e("p",[e("strong",[s._v("开始安装了，根据网络情况，安装时间可能会比较长，请耐心等待")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(436),alt:"img"}})]),s._v(" "),e("p",[e("strong",[s._v("很多插件装不上怎么办？不要慌，记住这些插件的名字，咱们稍后可以手动安装")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(437),alt:"img"}})]),s._v(" "),e("h2",{attrs:{id:"安装成功效果图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装成功效果图"}},[s._v("#")]),s._v(" 安装成功效果图")]),s._v(" "),e("ul",[e("li",[s._v("创建管理员")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(438),alt:"img"}})]),s._v(" "),e("ul",[e("li",[s._v("安装完成，进入首页")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(439),alt:"img"}})]),s._v(" "),e("h2",{attrs:{id:"附-jenkins-手动安装插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#附-jenkins-手动安装插件"}},[s._v("#")]),s._v(" 附：Jenkins 手动安装插件")]),s._v(" "),e("h3",{attrs:{id:"使用插件管理器安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用插件管理器安装"}},[s._v("#")]),s._v(" 使用插件管理器安装")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("Manage Jenkins")]),s._v(" -> "),e("code",[s._v("Manage Plugins")]),s._v(" -> "),e("code",[s._v("Avaliable")])])]),s._v(" "),e("p",[e("img",{attrs:{src:a(440),alt:"img"}})]),s._v(" "),e("ul",[e("li",[s._v("过滤出想要安装的插件，然后点击 "),e("code",[s._v("Download now and install after restart")])])]),s._v(" "),e("p",[e("img",{attrs:{src:a(441),alt:"img"}})]),s._v(" "),e("p",[e("img",{attrs:{src:a(442),alt:"img"}})]),s._v(" "),e("h3",{attrs:{id:"手动上传-hpi-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#手动上传-hpi-文件"}},[s._v("#")]),s._v(" 手动上传 "),e("code",[s._v(".hpi")]),s._v(" 文件")]),s._v(" "),e("ul",[e("li",[s._v("点击进入插件中心")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(443),alt:"img"}})]),s._v(" "),e("ul",[e("li",[s._v("点击 "),e("code",[s._v("Archives")])])]),s._v(" "),e("p",[e("img",{attrs:{src:a(444),alt:"img"}})]),s._v(" "),e("ul",[e("li",[s._v("下载需要的版本")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(445),alt:"img"}})]),s._v(" "),e("ul",[e("li",[s._v("在插件管理器中选择 "),e("code",[s._v("Advanced")])])]),s._v(" "),e("p",[e("img",{attrs:{src:a(446),alt:"img"}})]),s._v(" "),e("ul",[e("li",[s._v("选择上传即可")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(447),alt:"img"}})]),s._v(" "),e("h3",{attrs:{id:"重启-jenkins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重启-jenkins"}},[s._v("#")]),s._v(" 重启 Jenkins")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("docker-compose down\ndocker-compose up -d\n")])])]),e("p",[e("strong",[s._v("注意：")]),s._v(" 请留意需要下载插件的警告信息，如果不满足安装条件，Jenkins 是会拒绝安装的。如下图：")]),s._v(" "),e("p",[e("img",{attrs:{src:a(448),alt:"img"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);