(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{999:function(s,t,a){"use strict";a.r(t);var e=a(26),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"docker-私有仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-私有仓库"}},[s._v("#")]),s._v(" Docker 私有仓库")]),s._v(" "),a("p",[s._v("有时候使用 Docker Hub 这样的公共仓库可能不方便，用户可以创建一个本地仓库供私人使用。")]),s._v(" "),a("p",[s._v("本节介绍如何使用本地仓库。")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://docs.docker.com/registry/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("docker-registry")]),a("OutboundLink")],1),s._v(" 是官方提供的工具，可以用于构建私有的镜像仓库。本文内容基于 "),a("a",{attrs:{href:"https://github.com/docker/distribution",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("docker-registry")]),a("OutboundLink")],1),s._v(" v2.x 版本。")]),s._v(" "),a("h2",{attrs:{id:"安装运行-docker-registry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装运行-docker-registry"}},[s._v("#")]),s._v(" 安装运行 docker-registry")]),s._v(" "),a("h3",{attrs:{id:"容器运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器运行"}},[s._v("#")]),s._v(" 容器运行")]),s._v(" "),a("p",[s._v("你可以通过获取官方 "),a("code",[s._v("registry")]),s._v(" 镜像来运行。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker run -d -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v(":5000 --restart"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always --name registry registry\n")])])]),a("p",[s._v("这将使用官方的 "),a("code",[s._v("registry")]),s._v(" 镜像来启动私有仓库。默认情况下，仓库会被创建在容器的 "),a("code",[s._v("/var/lib/registry")]),s._v(" 目录下。你可以通过 "),a("code",[s._v("-v")]),s._v(" 参数来将镜像文件存放在本地的指定路径。例如下面的例子将上传的镜像放到本地的 "),a("code",[s._v("/opt/data/registry")]),s._v(" 目录。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker run -d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v(":5000 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -v /opt/data/registry:/var/lib/registry "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    registry\n")])])]),a("h2",{attrs:{id:"在私有仓库上传、搜索、下载镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在私有仓库上传、搜索、下载镜像"}},[s._v("#")]),s._v(" 在私有仓库上传、搜索、下载镜像")]),s._v(" "),a("p",[s._v("创建好私有仓库之后，就可以使用 "),a("code",[s._v("docker tag")]),s._v(" 来标记一个镜像，然后推送它到仓库。例如私有仓库地址为 "),a("code",[s._v("127.0.0.1:5000")]),s._v("。")]),s._v(" "),a("p",[s._v("先在本机查看已有的镜像。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker image "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nREPOSITORY                        TAG                 IMAGE ID            CREATED             VIRTUAL SIZE\nubuntu                            latest              ba5877dc9bec        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" weeks ago         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.7")]),s._v(" MB\n")])])]),a("p",[s._v("使用 "),a("code",[s._v("docker tag")]),s._v(" 将 "),a("code",[s._v("ubuntu:latest")]),s._v(" 这个镜像标记为 "),a("code",[s._v("127.0.0.1:5000/ubuntu:latest")]),s._v("。")]),s._v(" "),a("p",[s._v("格式为 "),a("code",[s._v("docker tag IMAGE[:TAG] [REGISTRY_HOST[:REGISTRY_PORT]/]REPOSITORY[:TAG]")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker tag ubuntu:latest "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:5000/ubuntu:latest\n$ docker image "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nREPOSITORY                        TAG                 IMAGE ID            CREATED             VIRTUAL SIZE\nubuntu                            latest              ba5877dc9bec        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" weeks ago         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.7")]),s._v(" MB\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:5000/ubuntu:latest      latest              ba5877dc9bec        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" weeks ago         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.7")]),s._v(" MB\n")])])]),a("p",[s._v("使用 "),a("code",[s._v("docker push")]),s._v(" 上传标记的镜像。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker push "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:5000/ubuntu:latest\nThe push refers to repository "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:5000/ubuntu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n373a30c24545: Pushed\na9148f5200b0: Pushed\ncdd3de0940ab: Pushed\nfc56279bbb33: Pushed\nb38367233d37: Pushed\n2aebd096e0e2: Pushed\nlatest: digest: sha256:fe4277621f10b5026266932ddf760f5a756d2facd505a94d2da12f4f52f71f5a size: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1568")]),s._v("\n")])])]),a("p",[s._v("用 "),a("code",[s._v("curl")]),s._v(" 查看仓库中的镜像。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:5000/v2/_catalog\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"repositories"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ubuntu"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("这里可以看到 "),a("code",[s._v('{"repositories":["ubuntu"]}')]),s._v("，表明镜像已经被成功上传了。")]),s._v(" "),a("p",[s._v("先删除已有镜像，再尝试从私有仓库中下载这个镜像。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker image "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:5000/ubuntu:latest\n\n$ docker pull "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:5000/ubuntu:latest\nPulling repository "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:5000/ubuntu:latest\nba5877dc9bec: Download complete\n511136ea3c5a: Download complete\n9bad880da3d2: Download complete\n25f11f5fb0cb: Download complete\nebc34468f71d: Download complete\n2318d26665ef: Download complete\n\n$ docker image "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nREPOSITORY                         TAG                 IMAGE ID            CREATED             VIRTUAL SIZE\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:5000/ubuntu:latest       latest              ba5877dc9bec        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" weeks ago         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.7")]),s._v(" MB\n")])])]),a("h2",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),a("p",[s._v("如果你不想使用 "),a("code",[s._v("127.0.0.1:5000")]),s._v(" 作为仓库地址，比如想让本网段的其他主机也能把镜像推送到私有仓库。你就得把例如 "),a("code",[s._v("192.168.199.100:5000")]),s._v(" 这样的内网地址作为私有仓库地址，这时你会发现无法成功推送镜像。")]),s._v(" "),a("p",[s._v("这是因为 Docker 默认不允许非 "),a("code",[s._v("HTTPS")]),s._v(" 方式推送镜像。我们可以通过 Docker 的配置选项来取消这个限制，或者查看下一节配置能够通过 "),a("code",[s._v("HTTPS")]),s._v(" 访问的私有仓库。")]),s._v(" "),a("h3",{attrs:{id:"ubuntu-14-04-debian-7-wheezy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-14-04-debian-7-wheezy"}},[s._v("#")]),s._v(" Ubuntu 14.04, Debian 7 Wheezy")]),s._v(" "),a("p",[s._v("对于使用 "),a("code",[s._v("upstart")]),s._v(" 的系统而言，编辑 "),a("code",[s._v("/etc/default/docker")]),s._v(" 文件，在其中的 "),a("code",[s._v("DOCKER_OPTS")]),s._v(" 中增加如下内容：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DOCKER_OPTS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--registry-mirror=https://registry.docker-cn.com --insecure-registries=192.168.199.100:5000"')]),s._v("\n")])])]),a("p",[s._v("重新启动服务。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" docker restart\n")])])]),a("h3",{attrs:{id:"ubuntu-16-04-debian-8-centos-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-16-04-debian-8-centos-7"}},[s._v("#")]),s._v(" Ubuntu 16.04+, Debian 8+, centos 7")]),s._v(" "),a("p",[s._v("对于使用 "),a("code",[s._v("systemd")]),s._v(" 的系统，请在 "),a("code",[s._v("/etc/docker/daemon.json")]),s._v(" 中写入如下内容（如果文件不存在请新建该文件）")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"registry-mirrors"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://registry.docker-cn.com"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"insecure-registries"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.199.100:5000"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("注意：该文件必须符合 "),a("code",[s._v("json")]),s._v(" 规范，否则 Docker 将不能启动。")])]),s._v(" "),a("h2",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[s._v("#")]),s._v(" 其他")]),s._v(" "),a("p",[s._v("对于 Docker for Windows 、 Docker for Mac 在设置中编辑 "),a("code",[s._v("daemon.json")]),s._v(" 增加和上边一样的字符串即可。")])])}),[],!1,null,null,null);t.default=r.exports}}]);