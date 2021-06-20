(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{635:function(t,a,s){"use strict";s.r(a);var e=s(26),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"获取镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取镜像"}},[t._v("#")]),t._v(" 获取镜像")]),t._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[t._v("之前提到过，"),s("a",{attrs:{href:"https://hub.docker.com/explore/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Hub"),s("OutboundLink")],1),t._v(" 上有大量的高质量的镜像可以用，这里我们就说一下怎么获取这些镜像。")]),t._v(" "),s("p",[t._v("从 Docker 镜像仓库获取镜像的命令是 "),s("code",[t._v("docker pull")]),t._v("。其命令格式为：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker pull "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("选项"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Docker Registry 地址"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(":端口号"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("仓库名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(":标签"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("具体的选项可以通过 "),s("code",[t._v("docker pull --help")]),t._v(" 命令看到，这里我们说一下镜像名称的格式。")]),t._v(" "),s("ul",[s("li",[t._v("Docker 镜像仓库地址：地址的格式一般是 "),s("code",[t._v("<域名/IP>[:端口号]")]),t._v("。默认地址是 Docker Hub。")]),t._v(" "),s("li",[t._v("仓库名：如之前所说，这里的仓库名是两段式名称，即 "),s("code",[t._v("<用户名>/<软件名>")]),t._v("。对于 Docker Hub，如果不给出用户名，则默认为 "),s("code",[t._v("library")]),t._v("，也就是官方镜像。")])]),t._v(" "),s("p",[t._v("比如：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ docker pull ubuntu:16.04\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.04")]),t._v(": Pulling from library/ubuntu\nbf5d46315322: Pull complete\n9f13e0ac480c: Pull complete\ne8988b5b3097: Pull complete\n40af181810e7: Pull complete\ne6f7c7e5c03e: Pull complete\nDigest: sha256:147913621d9cdea08853f6ba9116c2e27a3ceffecf3b492983ae97c3d643fbbe\nStatus: Downloaded newer image "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" ubuntu:16.04\n")])])]),s("p",[t._v("上面的命令中没有给出 Docker 镜像仓库地址，因此将会从 Docker Hub 获取镜像。而镜像名称是 "),s("code",[t._v("ubuntu:16.04")]),t._v("，因此将会获取官方镜像 "),s("code",[t._v("library/ubuntu")]),t._v(" 仓库中标签为 "),s("code",[t._v("16.04")]),t._v(" 的镜像。")]),t._v(" "),s("p",[t._v("从下载过程中可以看到我们之前提及的分层存储的概念，镜像是由多层存储所构成。下载也是一层层的去下载，并非单一文件。下载过程中给出了每一层的 ID 的前 12 位。并且下载结束后，给出该镜像完整的 "),s("code",[t._v("sha256")]),t._v(" 的摘要，以确保下载一致性。")]),t._v(" "),s("p",[t._v("在使用上面命令的时候，你可能会发现，你所看到的层 ID 以及 "),s("code",[t._v("sha256")]),t._v(" 的摘要和这里的不一样。这是因为官方镜像是一直在维护的，有任何新的 bug，或者版本更新，都会进行修复再以原来的标签发布，这样可以确保任何使用这个标签的用户可以获得更安全、更稳定的镜像。")]),t._v(" "),s("p",[s("em",[t._v("如果从 Docker Hub 下载镜像非常缓慢，可以参照 "),s("code",[t._v("镜像加速器")]),t._v(" 一节配置加速器。")])]),t._v(" "),s("h2",{attrs:{id:"运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[t._v("#")]),t._v(" 运行")]),t._v(" "),s("p",[t._v("有了镜像后，我们就能够以这个镜像为基础启动并运行一个容器。以上面的 "),s("code",[t._v("ubuntu:16.04")]),t._v(" 为例，如果我们打算启动里面的 "),s("code",[t._v("bash")]),t._v(" 并且进行交互式操作的话，可以执行下面的命令。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ docker run -it --rm "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    ubuntu:16.04 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n\nroot@e7009c6ce357:/"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat /etc/os-release")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ubuntu"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("VERSION")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"16.04.4 LTS, Trusty Tahr"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ubuntu\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ID_LIKE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("debian\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PRETTY_NAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ubuntu 16.04.4 LTS"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("VERSION_ID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"16.04"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("HOME_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.ubuntu.com/"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SUPPORT_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://help.ubuntu.com/"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BUG_REPORT_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://bugs.launchpad.net/ubuntu/"')]),t._v("\n")])])]),s("p",[s("code",[t._v("docker run")]),t._v(" 就是运行容器的命令，我们这里简要的说明一下上面用到的参数。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("-it")]),t._v("：这是两个参数，一个是 "),s("code",[t._v("-i")]),t._v("：交互式操作，一个是 "),s("code",[t._v("-t")]),t._v(" 终端。我们这里打算进入 "),s("code",[t._v("bash")]),t._v(" 执行一些命令并查看返回结果，因此我们需要交互式终端。")]),t._v(" "),s("li",[s("code",[t._v("--rm")]),t._v("：这个参数是说容器退出后随之将其删除。默认情况下，为了排障需求，退出的容器并不会立即删除，除非手动 "),s("code",[t._v("docker rm")]),t._v("。我们这里只是随便执行个命令，看看结果，不需要排障和保留结果，因此使用 "),s("code",[t._v("--rm")]),t._v(" 可以避免浪费空间。")]),t._v(" "),s("li",[s("code",[t._v("ubuntu:16.04")]),t._v("：这是指用 "),s("code",[t._v("ubuntu:16.04")]),t._v(" 镜像为基础来启动容器。")]),t._v(" "),s("li",[s("code",[t._v("bash")]),t._v("：放在镜像名后的是"),s("strong",[t._v("命令")]),t._v("，这里我们希望有个交互式 Shell，因此用的是 "),s("code",[t._v("bash")]),t._v("。")])]),t._v(" "),s("p",[t._v("进入容器后，我们可以在 Shell 下操作，执行任何所需的命令。这里，我们执行了 "),s("code",[t._v("cat /etc/os-release")]),t._v("，这是 Linux 常用的查看当前系统版本的命令，从返回的结果可以看到容器内是 "),s("code",[t._v("Ubuntu 16.04.4 LTS")]),t._v(" 系统。")]),t._v(" "),s("p",[t._v("最后我们通过 "),s("code",[t._v("exit")]),t._v(" 退出了这个容器。")])])}),[],!1,null,null,null);a.default=r.exports}}]);