(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{672:function(e,t,a){"use strict";a.r(t);var s=a(26),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"docker-hub"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-hub"}},[e._v("#")]),e._v(" Docker Hub")]),e._v(" "),a("p",[e._v("目前 Docker 官方维护了一个公共仓库 "),a("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Hub"),a("OutboundLink")],1),e._v("，其中已经包括了数量超过 15,000 的镜像。大部分需求都可以通过在 Docker Hub 中直接下载镜像来实现。")]),e._v(" "),a("h2",{attrs:{id:"注册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册"}},[e._v("#")]),e._v(" 注册")]),e._v(" "),a("p",[e._v("你可以在 https://cloud.docker.com 免费注册一个 Docker 账号。")]),e._v(" "),a("h2",{attrs:{id:"登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登录"}},[e._v("#")]),e._v(" 登录")]),e._v(" "),a("p",[e._v("可以通过执行 "),a("code",[e._v("docker login")]),e._v(" 命令交互式的输入用户名及密码来完成在命令行界面登录 Docker Hub。")]),e._v(" "),a("p",[e._v("你可以通过 "),a("code",[e._v("docker logout")]),e._v(" 退出登录。")]),e._v(" "),a("h2",{attrs:{id:"拉取镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉取镜像"}},[e._v("#")]),e._v(" 拉取镜像")]),e._v(" "),a("p",[e._v("你可以通过 "),a("code",[e._v("docker search")]),e._v(" 命令来查找官方仓库中的镜像，并利用 "),a("code",[e._v("docker pull")]),e._v(" 命令来将它下载到本地。")]),e._v(" "),a("p",[e._v("例如以 "),a("code",[e._v("centos")]),e._v(" 为关键词进行搜索：")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ docker search centos\nNAME                                            DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED\ncentos                                          The official build of CentOS.                   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("465")]),e._v("       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\ntianon/centos                                   CentOS "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v(" and "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v(", created using rinse instea"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("28")]),e._v("\nblalor/centos                                   Bare-bones base CentOS "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6.5")]),e._v(" image                "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v("                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\nsaltstack/centos-6-minimal                                                                      "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v("                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\ntutum/centos-6.4                                DEPRECATED. Use tutum/centos:6.4 instead. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v("                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),a("p",[e._v("可以看到返回了很多包含关键字的镜像，其中包括镜像名字、描述、收藏数（表示该镜像的受关注程度）、是否官方创建、是否自动创建。")]),e._v(" "),a("p",[e._v("官方的镜像说明是官方项目组创建和维护的，automated 资源允许用户验证镜像的来源和内容。")]),e._v(" "),a("p",[e._v("根据是否是官方提供，可将镜像资源分为两类。")]),e._v(" "),a("p",[e._v("一种是类似 "),a("code",[e._v("centos")]),e._v(" 这样的镜像，被称为基础镜像或根镜像。这些基础镜像由 Docker 公司创建、验证、支持、提供。这样的镜像往往使用单个单词作为名字。")]),e._v(" "),a("p",[e._v("还有一种类型，比如 "),a("code",[e._v("tianon/centos")]),e._v(" 镜像，它是由 Docker 的用户创建并维护的，往往带有用户名称前缀。可以通过前缀 "),a("code",[e._v("username/")]),e._v(" 来指定使用某个用户提供的镜像，比如 tianon 用户。")]),e._v(" "),a("p",[e._v("另外，在查找的时候通过 "),a("code",[e._v("--filter=stars=N")]),e._v(" 参数可以指定仅显示收藏数量为 "),a("code",[e._v("N")]),e._v(" 以上的镜像。")]),e._v(" "),a("p",[e._v("下载官方 "),a("code",[e._v("centos")]),e._v(" 镜像到本地。")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ docker pull centos\nPulling repository centos\n0b443ba03958: Download complete\n539c0211cd76: Download complete\n511136ea3c5a: Download complete\n7064731afe90: Download complete\n")])])]),a("h2",{attrs:{id:"推送镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推送镜像"}},[e._v("#")]),e._v(" 推送镜像")]),e._v(" "),a("p",[e._v("用户也可以在登录后通过 "),a("code",[e._v("docker push")]),e._v(" 命令来将自己的镜像推送到 Docker Hub。")]),e._v(" "),a("p",[e._v("以下命令中的 "),a("code",[e._v("username")]),e._v(" 请替换为你的 Docker 账号用户名。")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ docker tag ubuntu:17.10 username/ubuntu:17.10\n\n$ docker image "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v("\n\nREPOSITORY                                               TAG                    IMAGE ID            CREATED             SIZE\nubuntu                                                   "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("17.10")]),e._v("                  275d79972a86        "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v(" days ago          "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("94")]),e._v(".6MB\nusername/ubuntu                                          "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("17.10")]),e._v("                  275d79972a86        "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v(" days ago          "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("94")]),e._v(".6MB\n\n$ docker push username/ubuntu:17.10\n\n$ docker search username\n\nNAME                      DESCRIPTION                                     STARS               OFFICIAL            AUTOMATED\nusername/ubuntu\n")])])]),a("h2",{attrs:{id:"自动创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动创建"}},[e._v("#")]),e._v(" 自动创建")]),e._v(" "),a("p",[e._v("自动创建（Automated Builds）功能对于需要经常升级镜像内程序来说，十分方便。")]),e._v(" "),a("p",[e._v("有时候，用户创建了镜像，安装了某个软件，如果软件发布新版本则需要手动更新镜像。")]),e._v(" "),a("p",[e._v("而自动创建允许用户通过 Docker Hub 指定跟踪一个目标网站（目前支持 "),a("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),a("OutboundLink")],1),e._v(" 或 "),a("a",{attrs:{href:"https://bitbucket.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("BitBucket"),a("OutboundLink")],1),e._v("）上的项目，一旦项目发生新的提交或者创建新的标签（tag），Docker Hub 会自动构建镜像并推送到 Docker Hub 中。")]),e._v(" "),a("p",[e._v("要配置自动创建，包括如下的步骤：")]),e._v(" "),a("ul",[a("li",[e._v("创建并登录 Docker Hub，以及目标网站；")]),e._v(" "),a("li",[e._v("在目标网站中连接帐户到 Docker Hub；")]),e._v(" "),a("li",[e._v("在 Docker Hub 中 "),a("a",{attrs:{href:"https://registry.hub.docker.com/builds/add/",target:"_blank",rel:"noopener noreferrer"}},[e._v("配置一个自动创建"),a("OutboundLink")],1),e._v("；")]),e._v(" "),a("li",[e._v("选取一个目标网站中的项目（需要含 "),a("code",[e._v("Dockerfile")]),e._v("）和分支；")]),e._v(" "),a("li",[e._v("指定 "),a("code",[e._v("Dockerfile")]),e._v(" 的位置，并提交创建。")])]),e._v(" "),a("p",[e._v("之后，可以在 Docker Hub 的 "),a("a",{attrs:{href:"https://registry.hub.docker.com/builds/",target:"_blank",rel:"noopener noreferrer"}},[e._v("自动创建页面"),a("OutboundLink")],1),e._v(" 中跟踪每次创建的状态。")])])}),[],!1,null,null,null);t.default=r.exports}}]);