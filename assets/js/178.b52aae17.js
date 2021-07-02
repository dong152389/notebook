(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{944:function(r,e,t){"use strict";t.r(e);var n=t(26),o=Object(n.a)({},(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"什么是-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-docker"}},[r._v("#")]),r._v(" 什么是 Docker")]),r._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[r._v("#")]),r._v(" 概述")]),r._v(" "),t("p",[r._v("Docker 最初是 dotCloud 公司创始人 Solomon Hykes 在法国期间发起的一个公司内部项目，它是基于 dotCloud 公司多年云服务技术的一次革新，并于 "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Docker_(software)",target:"_blank",rel:"noopener noreferrer"}},[r._v("2013 年 3 月以 Apache 2.0 授权协议开源"),t("OutboundLink")],1),r._v("，主要项目代码在 "),t("a",{attrs:{href:"https://github.com/moby/moby",target:"_blank",rel:"noopener noreferrer"}},[r._v("GitHub"),t("OutboundLink")],1),r._v(" 上进行维护。Docker 项目后来还加入了 Linux 基金会，并成立推动 "),t("a",{attrs:{href:"https://www.opencontainers.org/",target:"_blank",rel:"noopener noreferrer"}},[r._v("开放容器联盟（OCI）"),t("OutboundLink")],1),r._v("。")]),r._v(" "),t("p",[r._v("Docker 自开源后受到广泛的关注和讨论，至今其 GitHub 项目已经超过 4 万 6 千个星标和一万多个 fork。甚至由于 Docker 项目的火爆，在 2013 年底，"),t("a",{attrs:{href:"https://blog.docker.com/2013/10/dotcloud-is-becoming-docker-inc/",target:"_blank",rel:"noopener noreferrer"}},[r._v("dotCloud 公司决定改名为 Docker"),t("OutboundLink")],1),r._v("。Docker 最初是在 Ubuntu 12.04 上开发实现的；Red Hat 则从 RHEL 6.5 开始对 Docker 进行支持；Google 也在其 PaaS 产品中广泛应用 Docker。")]),r._v(" "),t("p",[r._v("Docker 使用 Google 公司推出的 "),t("a",{attrs:{href:"https://golang.org/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Go 语言"),t("OutboundLink")],1),r._v(" 进行开发实现，基于 Linux 内核的 "),t("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Cgroups",target:"_blank",rel:"noopener noreferrer"}},[r._v("cgroup"),t("OutboundLink")],1),r._v("，"),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Linux_namespaces",target:"_blank",rel:"noopener noreferrer"}},[r._v("namespace"),t("OutboundLink")],1),r._v("，以及 "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Aufs",target:"_blank",rel:"noopener noreferrer"}},[r._v("AUFS"),t("OutboundLink")],1),r._v(" 类的 "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Union_mount",target:"_blank",rel:"noopener noreferrer"}},[r._v("Union FS"),t("OutboundLink")],1),r._v(" 等技术，对进程进行封装隔离，属于 "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Operating-system-level_virtualization",target:"_blank",rel:"noopener noreferrer"}},[r._v("操作系统层面的虚拟化技术"),t("OutboundLink")],1),r._v("。由于隔离的进程独立于宿主和其它的隔离的进程，因此也称其为容器。最初实现是基于 "),t("a",{attrs:{href:"https://linuxcontainers.org/lxc/introduction/",target:"_blank",rel:"noopener noreferrer"}},[r._v("LXC"),t("OutboundLink")],1),r._v("，从 0.7 版本以后开始去除 LXC，转而使用自行开发的 "),t("a",{attrs:{href:"https://github.com/docker/libcontainer",target:"_blank",rel:"noopener noreferrer"}},[r._v("libcontainer"),t("OutboundLink")],1),r._v("，从 1.11 开始，则进一步演进为使用 "),t("a",{attrs:{href:"https://github.com/opencontainers/runc",target:"_blank",rel:"noopener noreferrer"}},[r._v("runC"),t("OutboundLink")],1),r._v(" 和 "),t("a",{attrs:{href:"https://github.com/containerd/containerd",target:"_blank",rel:"noopener noreferrer"}},[r._v("containerd"),t("OutboundLink")],1),r._v("。")]),r._v(" "),t("p",[r._v("Docker 在容器的基础上，进行了进一步的封装，从文件系统、网络互联到进程隔离等等，极大的简化了容器的创建和维护。使得 Docker 技术比虚拟机技术更为轻便、快捷。")]),r._v(" "),t("p",[r._v("下面的图片比较了 Docker 和传统虚拟化方式的不同之处。传统虚拟机技术是虚拟出一套硬件后，在其上运行一个完整操作系统，在该系统上再运行所需应用进程；而容器内的应用进程直接运行于宿主的内核，容器内没有自己的内核，而且也没有进行硬件虚拟。因此容器要比传统虚拟机更为轻便。")]),r._v(" "),t("p",[t("img",{attrs:{src:"https://www.dfd.com/assets/virtualization.png",alt:"传统虚拟化"}})]),r._v(" "),t("p",[t("img",{attrs:{src:"https://www.dfd.com/assets/docker.png",alt:"Docker"}})])])}),[],!1,null,null,null);e.default=o.exports}}]);