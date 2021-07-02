(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{395:function(t,s,a){t.exports=a.p+"assets/img/Lusifer1521043282.5491b8bc.png"},396:function(t,s,a){t.exports=a.p+"assets/img/clipboard1.3a18f82f.png"},856:function(t,s,a){"use strict";a.r(s);var n=a(26),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"基于-docker-安装-gitlab-runner"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基于-docker-安装-gitlab-runner"}},[t._v("#")]),t._v(" 基于 Docker 安装 GitLab Runner")]),t._v(" "),n("h2",{attrs:{id:"gitlab-runner-简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-runner-简介"}},[t._v("#")]),t._v(" GitLab Runner 简介")]),t._v(" "),n("p",[t._v("理解了上面的基本概念之后，有没有觉得少了些什么东西 —— 由谁来执行这些构建任务呢？")]),t._v(" "),n("p",[t._v("答案就是 GitLab Runner 了！")]),t._v(" "),n("p",[t._v("想问为什么不是 GitLab CI 来运行那些构建任务？")]),t._v(" "),n("p",[t._v("一般来说，构建任务都会占用很多的系统资源 (譬如编译代码)，而 GitLab CI 又是 GitLab 的一部分，如果由 GitLab CI 来运行构建任务的话，在执行构建任务的时候，GitLab 的性能会大幅下降。")]),t._v(" "),n("p",[t._v("GitLab CI 最大的作用是管理各个项目的构建状态，因此，运行构建任务这种浪费资源的事情就交给 GitLab Runner 来做拉！")]),t._v(" "),n("p",[t._v("因为 GitLab Runner 可以安装到不同的机器上，所以在构建任务运行期间并不会影响到 GitLab 的性能")]),t._v(" "),n("h2",{attrs:{id:"基于-docker-安装-gitlab-runner-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基于-docker-安装-gitlab-runner-2"}},[t._v("#")]),t._v(" 基于 Docker 安装 GitLab Runner")]),t._v(" "),n("h3",{attrs:{id:"环境准备"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[t._v("#")]),t._v(" 环境准备")]),t._v(" "),n("ul",[n("li",[t._v("创建工作目录 "),n("code",[t._v("/usr/local/docker/runner")])]),t._v(" "),n("li",[t._v("创建构建目录 "),n("code",[t._v("/usr/local/docker/runner/environment")])]),t._v(" "),n("li",[t._v("下载 "),n("code",[t._v("jdk-8u152-linux-x64.tar.gz")]),t._v(" 并复制到 "),n("code",[t._v("/usr/local/docker/runner/environment")])]),t._v(" "),n("li",[t._v("下载 "),n("code",[t._v("apache-maven-3.5.3-bin.tar.gz")]),t._v(" 并复制到 "),n("code",[t._v("/usr/local/docker/runner/environment")])])]),t._v(" "),n("h3",{attrs:{id:"daemon-json"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#daemon-json"}},[t._v("#")]),t._v(" daemon.json")]),t._v(" "),n("p",[t._v("在 "),n("code",[t._v("/usr/local/docker/runner/environment")]),t._v(" 目录下创建 "),n("code",[t._v("daemon.json")]),t._v("，用于配置加速器和仓库地址")]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"registry-mirrors"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://registry.docker-cn.com"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"insecure-registries"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.10.133:5000"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"dockerfile"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[t._v("#")]),t._v(" Dockerfile")]),t._v(" "),n("p",[t._v("在 "),n("code",[t._v("/usr/local/docker/runner/environment")]),t._v(" 目录下创建 "),n("code",[t._v("Dockerfile")])]),t._v(" "),n("div",{staticClass:"language-dockerfile extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" gitlab/gitlab"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("runner\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("MAINTAINER")]),t._v(" Lusifer <topsale@vip.qq.com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改软件源")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" echo "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deb http://mirrors.aliyun.com/ubuntu/ xenial main restricted universe multiverse'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" /etc/apt/sources.list && \\\n    echo "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deb http://mirrors.aliyun.com/ubuntu/ xenial-security main restricted universe multiverse'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" /etc/apt/sources.list && \\\n    echo "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deb http://mirrors.aliyun.com/ubuntu/ xenial-updates main restricted universe multiverse'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" /etc/apt/sources.list && \\\n    echo "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deb http://mirrors.aliyun.com/ubuntu/ xenial-backports main restricted universe multiverse'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" /etc/apt/sources.list && \\\n    apt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("get update "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("y && \\\n    apt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("get clean\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 Docker")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" apt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("get "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("y install apt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("transport"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("https ca"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("certificates curl software"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("properties"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("common && \\\n    curl "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("fsSL http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//mirrors.aliyun.com/docker"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ce/linux/ubuntu/gpg "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" apt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("key add "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" && \\\n    add"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("apt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("repository "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"')]),t._v(" && \\\n    apt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("get update "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("y && \\\n    apt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("get install "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("y docker"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ce\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" daemon.json /etc/docker/daemon.json\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 Docker Compose")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /usr/local/bin\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" wget https"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//raw.githubusercontent.com/topsale/resources/master/docker/docker"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("compose\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" chmod +x docker"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("compose\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 Java")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" mkdir "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("p /usr/local/java\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /usr/local/java\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" jdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("8u152"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("linux"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("x64.tar.gz /usr/local/java\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" tar "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("zxvf jdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("8u152"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("linux"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("x64.tar.gz && \\\n    rm "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("fr jdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("8u152"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("linux"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("x64.tar.gz\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 Maven")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" mkdir "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("p /usr/local/maven\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /usr/local/maven\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# RUN wget https://raw.githubusercontent.com/topsale/resources/master/maven/apache-maven-3.5.3-bin.tar.gz")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" apache"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("maven"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("3.5.3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("bin.tar.gz /usr/local/maven\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" tar "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("zxvf apache"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("maven"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("3.5.3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("bin.tar.gz && \\\n    rm "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("fr apache"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("maven"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("3.5.3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("bin.tar.gz\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# COPY settings.xml /usr/local/maven/apache-maven-3.5.3/conf/settings.xml")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置环境变量")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENV")]),t._v(" JAVA_HOME /usr/local/java/jdk1.8.0_152\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENV")]),t._v(" MAVEN_HOME /usr/local/maven/apache"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("maven"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("3.5.3\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENV")]),t._v(" PATH $PATH"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("$JAVA_HOME/bin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("$MAVEN_HOME/bin\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /\n")])])]),n("h3",{attrs:{id:"docker-compose-yml"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml"}},[t._v("#")]),t._v(" docker-compose.yml")]),t._v(" "),n("p",[t._v("在 "),n("code",[t._v("/usr/local/docker/runner")]),t._v(" 目录下创建 "),n("code",[t._v("docker-compose.yml")])]),t._v(" "),n("div",{staticClass:"language-yaml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3.1'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gitlab-runner")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" environment\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gitlab"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("runner\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("privileged")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/etc/gitlab"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("runner\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /var/run/docker.sock"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/run/docker.sock\n")])])]),n("h2",{attrs:{id:"注册-runner"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注册-runner"}},[t._v("#")]),t._v(" 注册 Runner")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("docker "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it gitlab-runner gitlab-runner register\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输入 GitLab 地址")]),t._v("\nPlease enter the gitlab-ci coordinator URL "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e.g. https://gitlab.com/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\nhttp://192.168.10.132/\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输入 GitLab Token")]),t._v("\nPlease enter the gitlab-ci token "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" this runner:\n1Lxq_f1NRfCfeNbE5WRh\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输入 Runner 的说明")]),t._v("\nPlease enter the gitlab-ci description "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" this runner:\n可以为空\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置 Tag，可以用于指定在构建规定的 tag 时触发 ci")]),t._v("\nPlease enter the gitlab-ci tags "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" this runner "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("comma separated"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\ndeploy\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这里选择 true ，可以用于代码上传后直接执行")]),t._v("\nWhether to run untagged builds "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("true/false"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":\n"),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这里选择 false，可以直接回车，默认为 false")]),t._v("\nWhether to lock Runner to current project "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("true/false"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":\n"),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 选择 runner 执行器，这里我们选择的是 shell")]),t._v("\nPlease enter the executor: virtualbox, docker+machine, parallels, shell, ssh, docker-ssh+machine, kubernetes, docker, docker-ssh:\nshell\n")])])]),n("h2",{attrs:{id:"使用-runner"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-runner"}},[t._v("#")]),t._v(" 使用 Runner")]),t._v(" "),n("h3",{attrs:{id:"gitlab-ci-地址与令牌参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-ci-地址与令牌参数"}},[t._v("#")]),t._v(" GitLab CI 地址与令牌参数")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("项目` –> `设置` –> `CI/CD` –> `Runner 设置\n")])])]),n("p",[n("img",{attrs:{src:a(395),alt:"img"}})]),t._v(" "),n("h3",{attrs:{id:"gitlab-ci-yml"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-ci-yml"}},[t._v("#")]),t._v(" .gitlab-ci.yml")]),t._v(" "),n("p",[t._v("在项目工程下编写 "),n("code",[t._v(".gitlab-ci.yml")]),t._v(" 配置文件：")]),t._v(" "),n("div",{staticClass:"language-yaml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stages")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" install_deps\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" test\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" build\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" deploy_test\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" deploy_production\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cache")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("CI_BUILD_REF_NAME"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("paths")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" node_modules/\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" dist/\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装依赖")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("install_deps")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" install_deps\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("only")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" develop\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm install\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行测试用例")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("test")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("only")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" develop\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm run test\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 编译")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" build\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("only")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" develop\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm run clean\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm run build"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("client\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm run build"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("server\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 部署测试服务器")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy_test")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" deploy_test\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("only")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" develop\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" pm2 delete app "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" true\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" pm2 start app.js "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("name app\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 部署生产服务器")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy_production")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stage")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" deploy_production\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("only")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" bash scripts/deploy/deploy.sh\n")])])]),n("p",[t._v("上面的配置把一次 Pipeline 分成五个阶段：")]),t._v(" "),n("ul",[n("li",[t._v("安装依赖(install_deps)")]),t._v(" "),n("li",[t._v("运行测试(test)")]),t._v(" "),n("li",[t._v("编译(build)")]),t._v(" "),n("li",[t._v("部署测试服务器(deploy_test)")]),t._v(" "),n("li",[t._v("部署生产服务器(deploy_production)")])]),t._v(" "),n("p",[n("strong",[t._v("注意：")]),t._v(" 设置 Job.only 后，只有当 develop 分支和 master 分支有提交的时候才会触发相关的 Jobs。")]),t._v(" "),n("p",[t._v("节点说明：")]),t._v(" "),n("ul",[n("li",[t._v("stages：定义构建阶段，这里只有一个阶段 deploy")]),t._v(" "),n("li",[t._v("deploy：构建阶段 deploy 的详细配置也就是任务配置")]),t._v(" "),n("li",[t._v("script：需要执行的 shell 脚本")]),t._v(" "),n("li",[t._v("only：这里的 master 指在提交到 master 时执行")]),t._v(" "),n("li",[t._v("tags：与注册 runner 时的 tag 匹配")])]),t._v(" "),n("h3",{attrs:{id:"测试集成效果"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试集成效果"}},[t._v("#")]),t._v(" 测试集成效果")]),t._v(" "),n("p",[t._v("所有操作完成后 push 代码到服务器，查看是否成功：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(396),alt:"img"}})]),t._v(" "),n("p",[t._v("passed 表示执行成功")]),t._v(" "),n("h3",{attrs:{id:"其它命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其它命令"}},[t._v("#")]),t._v(" 其它命令")]),t._v(" "),n("ul",[n("li",[t._v("删除注册信息")])]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("gitlab-ci-multi-runner unregister --name "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"名称"')]),t._v("\n")])])]),n("ul",[n("li",[t._v("查看注册列表")])]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("gitlab-ci-multi-runner list\n")])])]),n("h2",{attrs:{id:"附-项目配置-dockerfile-案例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#附-项目配置-dockerfile-案例"}},[t._v("#")]),t._v(" 附：项目配置 Dockerfile 案例")]),t._v(" "),n("div",{staticClass:"language-dockerfile extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" openjdk"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("8"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("jre\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("MAINTAINER")]),t._v(" Lusifer <topsale@vip.qq.com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENV")]),t._v(" APP_VERSION 1.0.0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("SNAPSHOT\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENV")]),t._v(" DOCKERIZE_VERSION v0.6.1\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" wget https"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("linux"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("amd64"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("$DOCKERIZE_VERSION.tar.gz \\\n    && tar "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("C /usr/local/bin "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("xzvf dockerize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("linux"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("amd64"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("$DOCKERIZE_VERSION.tar.gz \\\n    && rm dockerize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("linux"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("amd64"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("$DOCKERIZE_VERSION.tar.gz\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" mkdir /app\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" myshop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("provider"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("$APP_VERSION.jar /app/app.jar\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENTRYPOINT")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dockerize"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-timeout"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5m"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-wait"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tcp://192.168.10.131:3306"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"java"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-Djava.security.egd=file:/dev/./urandom"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-jar"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/app/app.jar"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXPOSE")]),t._v(" 8501\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);