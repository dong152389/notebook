(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{630:function(e,t,r){"use strict";r.r(t);var a=r(26),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"使用-dockerfile-定制镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-dockerfile-定制镜像"}},[e._v("#")]),e._v(" 使用 Dockerfile 定制镜像")]),e._v(" "),r("h2",{attrs:{id:"dockerfile-定制镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-定制镜像"}},[e._v("#")]),e._v(" Dockerfile 定制镜像")]),e._v(" "),r("p",[e._v("从刚才的 "),r("code",[e._v("docker commit")]),e._v(" 的学习中，我们可以了解到，镜像的定制实际上就是定制每一层所添加的配置、文件。如果我们可以把每一层修改、安装、构建、操作的命令都写入一个脚本，用这个脚本来构建、定制镜像，那么之前提及的无法重复的问题、镜像构建透明性的问题、体积的问题就都会解决。这个脚本就是 Dockerfile。")]),e._v(" "),r("p",[e._v("Dockerfile 是一个文本文件，其内包含了一条条的"),r("strong",[e._v("指令(Instruction)")]),e._v("，每一条指令构建一层，因此每一条指令的内容，就是描述该层应当如何构建。")]),e._v(" "),r("p",[e._v("还以之前定制 "),r("code",[e._v("nginx")]),e._v(" 镜像为例，这次我们使用 Dockerfile 来定制。")]),e._v(" "),r("p",[e._v("在一个空白目录中，建立一个文本文件，并命名为 "),r("code",[e._v("Dockerfile")]),e._v("：")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" mynginx\n$ "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" mynginx\n$ "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("touch")]),e._v(" Dockerfile\n")])])]),r("p",[e._v("其内容为：")]),e._v(" "),r("div",{staticClass:"language-dockerfile extra-class"},[r("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" nginx\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("RUN")]),e._v(" echo "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'<h1>Hello, Docker!</h1>'")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v(" /usr/share/nginx/html/index.html\n")])])]),r("p",[e._v("这个 Dockerfile 很简单，一共就两行。涉及到了两条指令，"),r("code",[e._v("FROM")]),e._v(" 和 "),r("code",[e._v("RUN")]),e._v("。")]),e._v(" "),r("h2",{attrs:{id:"from-指定基础镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#from-指定基础镜像"}},[e._v("#")]),e._v(" FROM 指定基础镜像")]),e._v(" "),r("p",[e._v("所谓定制镜像，那一定是以一个镜像为基础，在其上进行定制。就像我们之前运行了一个 "),r("code",[e._v("nginx")]),e._v(" 镜像的容器，再进行修改一样，基础镜像是必须指定的。而 "),r("code",[e._v("FROM")]),e._v(" 就是指定"),r("strong",[e._v("基础镜像")]),e._v("，因此一个 "),r("code",[e._v("Dockerfile")]),e._v(" 中 "),r("code",[e._v("FROM")]),e._v(" 是必备的指令，并且必须是第一条指令。")]),e._v(" "),r("p",[e._v("在 "),r("a",{attrs:{href:"https://store.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Store"),r("OutboundLink")],1),e._v(" 上有非常多的高质量的官方镜像，有可以直接拿来使用的服务类的镜像，如 "),r("a",{attrs:{href:"https://store.docker.com/images/nginx/",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("nginx")]),r("OutboundLink")],1),e._v("、"),r("a",{attrs:{href:"https://store.docker.com/images/redis/",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("redis")]),r("OutboundLink")],1),e._v("、"),r("a",{attrs:{href:"https://store.docker.com/images/mongo/",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("mongo")]),r("OutboundLink")],1),e._v("、"),r("a",{attrs:{href:"https://store.docker.com/images/mysql/",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("mysql")]),r("OutboundLink")],1),e._v("、"),r("a",{attrs:{href:"https://store.docker.com/images/httpd/",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("httpd")]),r("OutboundLink")],1),e._v("、"),r("a",{attrs:{href:"https://store.docker.com/images/php/",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("php")]),r("OutboundLink")],1),e._v("、"),r("a",{attrs:{href:"https://store.docker.com/images/tomcat/",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("tomcat")]),r("OutboundLink")],1),e._v(" 等；也有一些方便开发、构建、运行各种语言应用的镜像，如 "),r("a",{attrs:{href:"https://store.docker.com/images/node",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("node")]),r("OutboundLink")],1),e._v("、"),r("a",{attrs:{href:"https://store.docker.com/images/openjdk/",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("openjdk")]),r("OutboundLink")],1),e._v("、"),r("a",{attrs:{href:"https://store.docker.com/images/python/",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("python")]),r("OutboundLink")],1),e._v("、"),r("a",{attrs:{href:"https://store.docker.com/images/ruby/",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("ruby")]),r("OutboundLink")],1),e._v("、"),r("a",{attrs:{href:"https://store.docker.com/images/golang/",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("golang")]),r("OutboundLink")],1),e._v(" 等。可以在其中寻找一个最符合我们最终目标的镜像为基础镜像进行定制。")]),e._v(" "),r("p",[e._v("如果没有找到对应服务的镜像，官方镜像中还提供了一些更为基础的操作系统镜像，如 "),r("a",{attrs:{href:"https://store.docker.com/images/ubuntu/",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("ubuntu")]),r("OutboundLink")],1),e._v("、"),r("a",{attrs:{href:"https://store.docker.com/images/debian/",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("debian")]),r("OutboundLink")],1),e._v("、"),r("a",{attrs:{href:"https://store.docker.com/images/centos/",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("centos")]),r("OutboundLink")],1),e._v("、"),r("a",{attrs:{href:"https://store.docker.com/images/fedora/",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("fedora")]),r("OutboundLink")],1),e._v("、"),r("a",{attrs:{href:"https://store.docker.com/images/alpine/",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("alpine")]),r("OutboundLink")],1),e._v(" 等，这些操作系统的软件库为我们提供了更广阔的扩展空间。")]),e._v(" "),r("p",[e._v("除了选择现有镜像为基础镜像外，Docker 还存在一个特殊的镜像，名为 "),r("code",[e._v("scratch")]),e._v("。这个镜像是虚拟的概念，并不实际存在，它表示一个空白的镜像。")]),e._v(" "),r("div",{staticClass:"language-dockerfile extra-class"},[r("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" scratch\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("...")]),e._v("\n")])])]),r("p",[e._v("如果你以 "),r("code",[e._v("scratch")]),e._v(" 为基础镜像的话，意味着你不以任何镜像为基础，接下来所写的指令将作为镜像第一层开始存在。")]),e._v(" "),r("p",[e._v("不以任何系统为基础，直接将可执行文件复制进镜像的做法并不罕见，比如 "),r("a",{attrs:{href:"https://hub.docker.com/_/swarm/",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("swarm")]),r("OutboundLink")],1),e._v("、"),r("a",{attrs:{href:"https://quay.io/repository/coreos/etcd",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("coreos/etcd")]),r("OutboundLink")],1),e._v("。对于 Linux 下静态编译的程序来说，并不需要有操作系统提供运行时支持，所需的一切库都已经在可执行文件里了，因此直接 "),r("code",[e._v("FROM scratch")]),e._v(" 会让镜像体积更加小巧。使用 "),r("a",{attrs:{href:"https://golang.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Go 语言"),r("OutboundLink")],1),e._v(" 开发的应用很多会使用这种方式来制作镜像，这也是为什么有人认为 Go 是特别适合容器微服务架构的语言的原因之一。")]),e._v(" "),r("h2",{attrs:{id:"run-执行命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#run-执行命令"}},[e._v("#")]),e._v(" RUN 执行命令")]),e._v(" "),r("p",[r("code",[e._v("RUN")]),e._v(" 指令是用来执行命令行命令的。由于命令行的强大能力，"),r("code",[e._v("RUN")]),e._v(" 指令在定制镜像时是最常用的指令之一。其格式有两种：")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("shell")]),e._v(" 格式："),r("code",[e._v("RUN <命令>")]),e._v("，就像直接在命令行中输入的命令一样。刚才写的 Dockerfile 中的 "),r("code",[e._v("RUN")]),e._v(" 指令就是这种格式。")])]),e._v(" "),r("div",{staticClass:"language-dockerfile extra-class"},[r("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("RUN")]),e._v(" echo "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'<h1>Hello, Docker!</h1>'")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v(" /usr/share/nginx/html/index.html\n")])])]),r("ul",[r("li",[r("em",[e._v("exec")]),e._v(" 格式："),r("code",[e._v('RUN ["可执行文件", "参数1", "参数2"]')]),e._v("，这更像是函数调用中的格式。")])]),e._v(" "),r("p",[e._v("既然 "),r("code",[e._v("RUN")]),e._v(" 就像 Shell 脚本一样可以执行命令，那么我们是否就可以像 Shell 脚本一样把每个命令对应一个 RUN 呢？比如这样：")]),e._v(" "),r("div",{staticClass:"language-dockerfile extra-class"},[r("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" debian"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("jessie\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("RUN")]),e._v(" apt"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("get update\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("RUN")]),e._v(" apt"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("get install "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("y gcc libc6"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("dev make\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("RUN")]),e._v(" wget "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("O redis.tar.gz "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"http://download.redis.io/releases/redis-3.2.5.tar.gz"')]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("RUN")]),e._v(" mkdir "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("p /usr/src/redis\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("RUN")]),e._v(" tar "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("xzf redis.tar.gz "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("C /usr/src/redis "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("strip"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("components=1\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("RUN")]),e._v(" make "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("C /usr/src/redis\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("RUN")]),e._v(" make "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("C /usr/src/redis install\n")])])]),r("p",[e._v("之前说过，Dockerfile 中每一个指令都会建立一层，"),r("code",[e._v("RUN")]),e._v(" 也不例外。每一个 "),r("code",[e._v("RUN")]),e._v(" 的行为，就和刚才我们手工建立镜像的过程一样：新建立一层，在其上执行这些命令，执行结束后，"),r("code",[e._v("commit")]),e._v(" 这一层的修改，构成新的镜像。")]),e._v(" "),r("p",[e._v("而上面的这种写法，创建了 7 层镜像。这是完全没有意义的，而且很多运行时不需要的东西，都被装进了镜像里，比如编译环境、更新的软件包等等。结果就是产生非常臃肿、非常多层的镜像，不仅仅增加了构建部署的时间，也很容易出错。 这是很多初学 Docker 的人常犯的一个错误。")]),e._v(" "),r("p",[r("em",[e._v("Union FS 是有最大层数限制的，比如 AUFS，曾经是最大不得超过 42 层，现在是不得超过 127 层。")])]),e._v(" "),r("p",[e._v("上面的 "),r("code",[e._v("Dockerfile")]),e._v(" 正确的写法应该是这样：")]),e._v(" "),r("div",{staticClass:"language-dockerfile extra-class"},[r("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" debian"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("jessie\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("RUN")]),e._v(" buildDeps="),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'gcc libc6-dev make'")]),e._v(" \\\n    && apt"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("get update \\\n    && apt"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("get install "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("y $buildDeps \\\n    && wget "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("O redis.tar.gz "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"http://download.redis.io/releases/redis-3.2.5.tar.gz"')]),e._v(" \\\n    && mkdir "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("p /usr/src/redis \\\n    && tar "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("xzf redis.tar.gz "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("C /usr/src/redis "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("strip"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("components=1 \\\n    && make "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("C /usr/src/redis \\\n    && make "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("C /usr/src/redis install \\\n    && rm "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("rf /var/lib/apt/lists/* \\\n    && rm redis.tar.gz \\\n    && rm "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("r /usr/src/redis \\\n    && apt"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("get purge "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("y "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("auto"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("remove $buildDeps\n")])])]),r("p",[e._v("首先，之前所有的命令只有一个目的，就是编译、安装 redis 可执行文件。因此没有必要建立很多层，这只是一层的事情。因此，这里没有使用很多个 "),r("code",[e._v("RUN")]),e._v(" 对一一对应不同的命令，而是仅仅使用一个 "),r("code",[e._v("RUN")]),e._v(" 指令，并使用 "),r("code",[e._v("&&")]),e._v(" 将各个所需命令串联起来。将之前的 7 层，简化为了 1 层。在撰写 Dockerfile 的时候，要经常提醒自己，这并不是在写 Shell 脚本，而是在定义每一层该如何构建。")]),e._v(" "),r("p",[e._v("并且，这里为了格式化还进行了换行。Dockerfile 支持 Shell 类的行尾添加 "),r("code",[e._v("\\")]),e._v(" 的命令换行方式，以及行首 "),r("code",[e._v("#")]),e._v(" 进行注释的格式。良好的格式，比如换行、缩进、注释等，会让维护、排障更为容易，这是一个比较好的习惯。")]),e._v(" "),r("p",[e._v("此外，还可以看到这一组命令的最后添加了清理工作的命令，删除了为了编译构建所需要的软件，清理了所有下载、展开的文件，并且还清理了 "),r("code",[e._v("apt")]),e._v(" 缓存文件。这是很重要的一步，我们之前说过，镜像是多层存储，每一层的东西并不会在下一层被删除，会一直跟随着镜像。因此镜像构建时，一定要确保每一层只添加真正需要添加的东西，任何无关的东西都应该清理掉。")]),e._v(" "),r("p",[e._v("很多人初学 Docker 制作出了很臃肿的镜像的原因之一，就是忘记了每一层构建的最后一定要清理掉无关文件。")]),e._v(" "),r("h2",{attrs:{id:"构建镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#构建镜像"}},[e._v("#")]),e._v(" 构建镜像")]),e._v(" "),r("p",[e._v("好了，让我们再回到之前定制的 nginx 镜像的 Dockerfile 来。现在我们明白了这个 Dockerfile 的内容，那么让我们来构建这个镜像吧。")]),e._v(" "),r("p",[e._v("在 "),r("code",[e._v("Dockerfile")]),e._v(" 文件所在目录执行：")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ docker build -t nginx:v3 "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\nSending build context to Docker daemon "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("2.048")]),e._v(" kB\nStep "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" FROM nginx\n ---"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" e43d811ce2f4\nStep "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" RUN "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'<h1>Hello, Docker!</h1>'")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" /usr/share/nginx/html/index.html\n ---"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Running "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" 9cdc27646c7b\n ---"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" 44aa4490ce2c\nRemoving intermediate container 9cdc27646c7b\nSuccessfully built 44aa4490ce2c\n")])])]),r("p",[e._v("从命令的输出结果中，我们可以清晰的看到镜像的构建过程。在 "),r("code",[e._v("Step 2")]),e._v(" 中，如同我们之前所说的那样，"),r("code",[e._v("RUN")]),e._v(" 指令启动了一个容器 "),r("code",[e._v("9cdc27646c7b")]),e._v("，执行了所要求的命令，并最后提交了这一层 "),r("code",[e._v("44aa4490ce2c")]),e._v("，随后删除了所用到的这个容器 "),r("code",[e._v("9cdc27646c7b")]),e._v("。")]),e._v(" "),r("p",[e._v("这里我们使用了 "),r("code",[e._v("docker build")]),e._v(" 命令进行镜像构建。其格式为：")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("docker build "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("选项"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("上下文路径/URL/-"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),r("p",[e._v("在这里我们指定了最终镜像的名称 "),r("code",[e._v("-t nginx:v3")]),e._v("，构建成功后，我们可以像之前运行 "),r("code",[e._v("nginx:v2")]),e._v(" 那样来运行这个镜像，其结果会和 "),r("code",[e._v("nginx:v2")]),e._v(" 一样。")]),e._v(" "),r("h2",{attrs:{id:"镜像构建上下文-context"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#镜像构建上下文-context"}},[e._v("#")]),e._v(" 镜像构建上下文（Context）")]),e._v(" "),r("p",[e._v("如果注意，会看到 "),r("code",[e._v("docker build")]),e._v(" 命令最后有一个 "),r("code",[e._v(".")]),e._v("。"),r("code",[e._v(".")]),e._v(" 表示当前目录，而 "),r("code",[e._v("Dockerfile")]),e._v(" 就在当前目录，因此不少初学者以为这个路径是在指定 "),r("code",[e._v("Dockerfile")]),e._v(" 所在路径，这么理解其实是不准确的。如果对应上面的命令格式，你可能会发现，这是在指定"),r("strong",[e._v("上下文路径")]),e._v("。那么什么是上下文呢？")]),e._v(" "),r("p",[e._v("首先我们要理解 "),r("code",[e._v("docker build")]),e._v(" 的工作原理。Docker 在运行时分为 Docker 引擎（也就是服务端守护进程）和客户端工具。Docker 的引擎提供了一组 REST API，被称为 "),r("a",{attrs:{href:"https://docs.docker.com/engine/reference/api/docker_remote_api/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Remote API"),r("OutboundLink")],1),e._v("，而如 "),r("code",[e._v("docker")]),e._v(" 命令这样的客户端工具，则是通过这组 API 与 Docker 引擎交互，从而完成各种功能。因此，虽然表面上我们好像是在本机执行各种 "),r("code",[e._v("docker")]),e._v(" 功能，但实际上，一切都是使用的远程调用形式在服务端（Docker 引擎）完成。也因为这种 C/S 设计，让我们操作远程服务器的 Docker 引擎变得轻而易举。")]),e._v(" "),r("p",[e._v("当我们进行镜像构建的时候，并非所有定制都会通过 "),r("code",[e._v("RUN")]),e._v(" 指令完成，经常会需要将一些本地文件复制进镜像，比如通过 "),r("code",[e._v("COPY")]),e._v(" 指令、"),r("code",[e._v("ADD")]),e._v(" 指令等。而 "),r("code",[e._v("docker build")]),e._v(" 命令构建镜像，其实并非在本地构建，而是在服务端，也就是 Docker 引擎中构建的。那么在这种客户端/服务端的架构中，如何才能让服务端获得本地文件呢？")]),e._v(" "),r("p",[e._v("这就引入了上下文的概念。当构建的时候，用户会指定构建镜像上下文的路径，"),r("code",[e._v("docker build")]),e._v(" 命令得知这个路径后，会将路径下的所有内容打包，然后上传给 Docker 引擎。这样 Docker 引擎收到这个上下文包后，展开就会获得构建镜像所需的一切文件。")]),e._v(" "),r("p",[e._v("如果在 "),r("code",[e._v("Dockerfile")]),e._v(" 中这么写：")]),e._v(" "),r("div",{staticClass:"language-dockerfile extra-class"},[r("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("COPY")]),e._v(" ./package.json /app/\n")])])]),r("p",[e._v("这并不是要复制执行 "),r("code",[e._v("docker build")]),e._v(" 命令所在的目录下的 "),r("code",[e._v("package.json")]),e._v("，也不是复制 "),r("code",[e._v("Dockerfile")]),e._v(" 所在目录下的 "),r("code",[e._v("package.json")]),e._v("，而是复制 "),r("strong",[e._v("上下文（context）")]),e._v(" 目录下的 "),r("code",[e._v("package.json")]),e._v("。")]),e._v(" "),r("p",[e._v("因此，"),r("code",[e._v("COPY")]),e._v(" 这类指令中的源文件的路径都是"),r("em",[e._v("相对路径")]),e._v("。这也是初学者经常会问的为什么 "),r("code",[e._v("COPY ../package.json /app")]),e._v(" 或者 "),r("code",[e._v("COPY /opt/xxxx /app")]),e._v(" 无法工作的原因，因为这些路径已经超出了上下文的范围，Docker 引擎无法获得这些位置的文件。如果真的需要那些文件，应该将它们复制到上下文目录中去。")]),e._v(" "),r("p",[e._v("现在就可以理解刚才的命令 "),r("code",[e._v("docker build -t nginx:v3 .")]),e._v(" 中的这个 "),r("code",[e._v(".")]),e._v("，实际上是在指定上下文的目录，"),r("code",[e._v("docker build")]),e._v(" 命令会将该目录下的内容打包交给 Docker 引擎以帮助构建镜像。")]),e._v(" "),r("p",[e._v("如果观察 "),r("code",[e._v("docker build")]),e._v(" 输出，我们其实已经看到了这个发送上下文的过程：")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ docker build -t nginx:v3 "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\nSending build context to Docker daemon "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("2.048")]),e._v(" kB\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])])]),r("p",[e._v("理解构建上下文对于镜像构建是很重要的，避免犯一些不应该的错误。比如有些初学者在发现 "),r("code",[e._v("COPY /opt/xxxx /app")]),e._v(" 不工作后，于是干脆将 "),r("code",[e._v("Dockerfile")]),e._v(" 放到了硬盘根目录去构建，结果发现 "),r("code",[e._v("docker build")]),e._v(" 执行后，在发送一个几十 GB 的东西，极为缓慢而且很容易构建失败。那是因为这种做法是在让 "),r("code",[e._v("docker build")]),e._v(" 打包整个硬盘，这显然是使用错误。")]),e._v(" "),r("p",[e._v("一般来说，应该会将 "),r("code",[e._v("Dockerfile")]),e._v(" 置于一个空目录下，或者项目根目录下。如果该目录下没有所需文件，那么应该把所需文件复制一份过来。如果目录下有些东西确实不希望构建时传给 Docker 引擎，那么可以用 "),r("code",[e._v(".gitignore")]),e._v(" 一样的语法写一个 "),r("code",[e._v(".dockerignore")]),e._v("，该文件是用于剔除不需要作为上下文传递给 Docker 引擎的。")]),e._v(" "),r("p",[e._v("那么为什么会有人误以为 "),r("code",[e._v(".")]),e._v(" 是指定 "),r("code",[e._v("Dockerfile")]),e._v(" 所在目录呢？这是因为在默认情况下，如果不额外指定 "),r("code",[e._v("Dockerfile")]),e._v(" 的话，会将上下文目录下的名为 "),r("code",[e._v("Dockerfile")]),e._v(" 的文件作为 Dockerfile。")]),e._v(" "),r("p",[e._v("这只是默认行为，实际上 "),r("code",[e._v("Dockerfile")]),e._v(" 的文件名并不要求必须为 "),r("code",[e._v("Dockerfile")]),e._v("，而且并不要求必须位于上下文目录中，比如可以用 "),r("code",[e._v("-f ../Dockerfile.php")]),e._v(" 参数指定某个文件作为 "),r("code",[e._v("Dockerfile")]),e._v("。")]),e._v(" "),r("p",[e._v("当然，一般大家习惯性的会使用默认的文件名 "),r("code",[e._v("Dockerfile")]),e._v("，以及会将其置于镜像构建上下文目录中。")]),e._v(" "),r("h2",{attrs:{id:"其它-docker-build-的用法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其它-docker-build-的用法"}},[e._v("#")]),e._v(" 其它 "),r("code",[e._v("docker build")]),e._v(" 的用法")]),e._v(" "),r("h3",{attrs:{id:"直接用-git-repo-进行构建"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#直接用-git-repo-进行构建"}},[e._v("#")]),e._v(" 直接用 Git repo 进行构建")]),e._v(" "),r("p",[e._v("或许你已经注意到了，"),r("code",[e._v("docker build")]),e._v(" 还支持从 URL 构建，比如可以直接从 Git repo 中构建：")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ docker build https://github.com/twang2218/gitlab-ce-zh.git"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#:8.14")]),e._v("\ndocker build https://github.com/twang2218/gitlab-ce-zh.git"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("#:8.14\nSending build context to Docker daemon "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("2.048")]),e._v(" kB\nStep "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" FROM gitlab/gitlab-ce:8.14.0-ce.0\n"),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("8.14")]),e._v(".0-ce.0: Pulling from gitlab/gitlab-ce\naed15891ba52: Already exists\n773ae8583d14: Already exists\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])])]),r("p",[e._v("这行命令指定了构建所需的 Git repo，并且指定默认的 "),r("code",[e._v("master")]),e._v(" 分支，构建目录为 "),r("code",[e._v("/8.14/")]),e._v("，然后 Docker 就会自己去 "),r("code",[e._v("git clone")]),e._v(" 这个项目、切换到指定分支、并进入到指定目录后开始构建。")]),e._v(" "),r("h3",{attrs:{id:"用给定的-tar-压缩包构建"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#用给定的-tar-压缩包构建"}},[e._v("#")]),e._v(" 用给定的 tar 压缩包构建")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ docker build http://server/context.tar.gz\n")])])]),r("p",[e._v("如果所给出的 URL 不是个 Git repo，而是个 "),r("code",[e._v("tar")]),e._v(" 压缩包，那么 Docker 引擎会下载这个包，并自动解压缩，以其作为上下文，开始构建。")]),e._v(" "),r("h3",{attrs:{id:"从标准输入中读取-dockerfile-进行构建"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#从标准输入中读取-dockerfile-进行构建"}},[e._v("#")]),e._v(" 从标准输入中读取 Dockerfile 进行构建")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("docker build - "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" Dockerfile\n")])])]),r("p",[e._v("或")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" Dockerfile "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" docker build -\n")])])]),r("p",[e._v("如果标准输入传入的是文本文件，则将其视为 "),r("code",[e._v("Dockerfile")]),e._v("，并开始构建。这种形式由于直接从标准输入中读取 Dockerfile 的内容，它没有上下文，因此不可以像其他方法那样可以将本地文件 "),r("code",[e._v("COPY")]),e._v(" 进镜像之类的事情。")]),e._v(" "),r("h3",{attrs:{id:"从标准输入中读取上下文压缩包进行构建"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#从标准输入中读取上下文压缩包进行构建"}},[e._v("#")]),e._v(" 从标准输入中读取上下文压缩包进行构建")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ docker build - "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" context.tar.gz\n")])])]),r("p",[e._v("如果发现标准输入的文件格式是 "),r("code",[e._v("gzip")]),e._v("、"),r("code",[e._v("bzip2")]),e._v(" 以及 "),r("code",[e._v("xz")]),e._v(" 的话，将会使其为上下文压缩包，直接将其展开，将里面视为上下文，并开始构建。")])])}),[],!1,null,null,null);t.default=s.exports}}]);