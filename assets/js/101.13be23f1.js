(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{669:function(o,e,c){"use strict";c.r(e);var v=c(26),_=Object(v.a)({},(function(){var o=this,e=o.$createElement,c=o._self._c||e;return c("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[c("h1",{attrs:{id:"什么是-docker-compose"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#什么是-docker-compose"}},[o._v("#")]),o._v(" 什么是 Docker Compose")]),o._v(" "),c("p",[c("code",[o._v("Docker Compose")]),o._v(" 是 Docker 官方编排（Orchestration）项目之一，负责快速的部署分布式应用。")]),o._v(" "),c("h2",{attrs:{id:"概述"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[o._v("#")]),o._v(" 概述")]),o._v(" "),c("p",[c("code",[o._v("Compose")]),o._v(" 项目是 Docker 官方的开源项目，负责实现对 Docker 容器集群的快速编排。从功能上看，跟 "),c("code",[o._v("OpenStack")]),o._v(" 中的 "),c("code",[o._v("Heat")]),o._v(" 十分类似。")]),o._v(" "),c("p",[o._v("其代码目前在 https://github.com/docker/compose 上开源。")]),o._v(" "),c("p",[c("code",[o._v("Compose")]),o._v(" 定位是 「定义和运行多个 Docker 容器的应用（Defining and running multi-container Docker applications）」，其前身是开源项目 Fig。")]),o._v(" "),c("p",[o._v("通过第一部分中的介绍，我们知道使用一个 "),c("code",[o._v("Dockerfile")]),o._v(" 模板文件，可以让用户很方便的定义一个单独的应用容器。然而，在日常工作中，经常会碰到需要多个容器相互配合来完成某项任务的情况。例如要实现一个 Web 项目，除了 Web 服务容器本身，往往还需要再加上后端的数据库服务容器，甚至还包括负载均衡容器等。")]),o._v(" "),c("p",[c("code",[o._v("Compose")]),o._v(" 恰好满足了这样的需求。它允许用户通过一个单独的 "),c("code",[o._v("docker-compose.yml")]),o._v(" 模板文件（YAML 格式）来定义一组相关联的应用容器为一个项目（project）。")]),o._v(" "),c("p",[c("code",[o._v("Compose")]),o._v(" 中有两个重要的概念：")]),o._v(" "),c("ul",[c("li",[o._v("服务 ("),c("code",[o._v("service")]),o._v(")：一个应用的容器，实际上可以包括若干运行相同镜像的容器实例。")]),o._v(" "),c("li",[o._v("项目 ("),c("code",[o._v("project")]),o._v(")：由一组关联的应用容器组成的一个完整业务单元，在 "),c("code",[o._v("docker-compose.yml")]),o._v(" 文件中定义。")])]),o._v(" "),c("p",[c("code",[o._v("Compose")]),o._v(" 的默认管理对象是项目，通过子命令对项目中的一组容器进行便捷地生命周期管理。")]),o._v(" "),c("p",[c("code",[o._v("Compose")]),o._v(" 项目由 Python 编写，实现上调用了 Docker 服务提供的 API 来对容器进行管理。因此，只要所操作的平台支持 Docker API，就可以在其上利用 "),c("code",[o._v("Compose")]),o._v(" 来进行编排管理。")])])}),[],!1,null,null,null);e.default=_.exports}}]);