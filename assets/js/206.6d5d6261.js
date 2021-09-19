(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{1e3:function(r,e,t){"use strict";t.r(e);var o=t(26),n=Object(o.a)({},(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"docker-仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-仓库"}},[r._v("#")]),r._v(" Docker 仓库")]),r._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[r._v("#")]),r._v(" 概述")]),r._v(" "),t("p",[r._v("镜像构建完成后，可以很容易的在当前宿主机上运行，但是，如果需要在其它服务器上使用这个镜像，我们就需要一个集中的存储、分发镜像的服务，"),t("code",[r._v("Docker Registry")]),r._v(" 就是这样的服务。")]),r._v(" "),t("p",[r._v("一个 "),t("strong",[r._v("Docker Registry")]),r._v(" 中可以包含多个"),t("strong",[r._v("仓库")]),r._v("（"),t("code",[r._v("Repository")]),r._v("）；每个仓库可以包含多个"),t("strong",[r._v("标签")]),r._v("（"),t("code",[r._v("Tag")]),r._v("）；每个标签对应一个镜像。")]),r._v(" "),t("p",[r._v("通常，一个仓库会包含同一个软件不同版本的镜像，而标签就常用于对应该软件的各个版本。我们可以通过 "),t("code",[r._v("<仓库名>:<标签>")]),r._v(" 的格式来指定具体是这个软件哪个版本的镜像。如果不给出标签，将以 "),t("code",[r._v("latest")]),r._v(" 作为默认标签。")]),r._v(" "),t("p",[r._v("以 "),t("a",{attrs:{href:"https://store.docker.com/images/ubuntu",target:"_blank",rel:"noopener noreferrer"}},[r._v("Ubuntu 镜像"),t("OutboundLink")],1),r._v(" 为例，"),t("code",[r._v("ubuntu")]),r._v(" 是仓库的名字，其内包含有不同的版本标签，如，"),t("code",[r._v("14.04")]),r._v(", "),t("code",[r._v("16.04")]),r._v("。我们可以通过 "),t("code",[r._v("ubuntu:14.04")]),r._v("，或者 "),t("code",[r._v("ubuntu:16.04")]),r._v(" 来具体指定所需哪个版本的镜像。如果忽略了标签，比如 "),t("code",[r._v("ubuntu")]),r._v("，那将视为 "),t("code",[r._v("ubuntu:latest")]),r._v("。")]),r._v(" "),t("p",[r._v("仓库名经常以 "),t("em",[r._v("两段式路径")]),r._v(" 形式出现，比如 "),t("code",[r._v("jwilder/nginx-proxy")]),r._v("，前者往往意味着 Docker Registry 多用户环境下的用户名，后者则往往是对应的软件名。但这并非绝对，取决于所使用的具体 Docker Registry 的软件或服务。")]),r._v(" "),t("h2",{attrs:{id:"公有-docker-registry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#公有-docker-registry"}},[r._v("#")]),r._v(" 公有 Docker Registry")]),r._v(" "),t("p",[r._v("Docker Registry 公开服务是开放给用户使用、允许用户管理镜像的 Registry 服务。一般这类公开服务允许用户免费上传、下载公开的镜像，并可能提供收费服务供用户管理私有镜像。")]),r._v(" "),t("p",[r._v("最常使用的 Registry 公开服务是官方的 "),t("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Docker Hub"),t("OutboundLink")],1),r._v("，这也是默认的 Registry，并拥有大量的高质量的官方镜像。除此以外，还有 "),t("a",{attrs:{href:"https://coreos.com/",target:"_blank",rel:"noopener noreferrer"}},[r._v("CoreOS"),t("OutboundLink")],1),r._v(" 的 "),t("a",{attrs:{href:"https://quay.io/repository/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Quay.io"),t("OutboundLink")],1),r._v("，CoreOS 相关的镜像存储在这里；Google 的 "),t("a",{attrs:{href:"https://cloud.google.com/container-registry/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Google Container Registry"),t("OutboundLink")],1),r._v("，"),t("a",{attrs:{href:"http://kubernetes.io/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Kubernetes"),t("OutboundLink")],1),r._v(" 的镜像使用的就是这个服务。")]),r._v(" "),t("p",[r._v("由于某些原因，在国内访问这些服务可能会比较慢。国内的一些云服务商提供了针对 Docker Hub 的镜像服务（"),t("code",[r._v("Registry Mirror")]),r._v("），这些镜像服务被称为"),t("strong",[r._v("加速器")]),r._v("。常见的有 "),t("a",{attrs:{href:"https://cr.console.aliyun.com/#/accelerator",target:"_blank",rel:"noopener noreferrer"}},[r._v("阿里云加速器"),t("OutboundLink")],1),r._v("、"),t("a",{attrs:{href:"https://www.daocloud.io/mirror#accelerator-doc",target:"_blank",rel:"noopener noreferrer"}},[r._v("DaoCloud 加速器"),t("OutboundLink")],1),r._v(" 等。使用加速器会直接从国内的地址下载 Docker Hub 的镜像，比直接从 Docker Hub 下载速度会提高很多。")]),r._v(" "),t("p",[r._v("国内也有一些云服务商提供类似于 Docker Hub 的公开服务。比如 "),t("a",{attrs:{href:"https://hub.tenxcloud.com/",target:"_blank",rel:"noopener noreferrer"}},[r._v("时速云镜像仓库"),t("OutboundLink")],1),r._v("、"),t("a",{attrs:{href:"https://c.163.com/hub#/m/library/",target:"_blank",rel:"noopener noreferrer"}},[r._v("网易云镜像服务"),t("OutboundLink")],1),r._v("、"),t("a",{attrs:{href:"https://hub.daocloud.io/",target:"_blank",rel:"noopener noreferrer"}},[r._v("DaoCloud 镜像市场"),t("OutboundLink")],1),r._v("、"),t("a",{attrs:{href:"https://cr.console.aliyun.com/",target:"_blank",rel:"noopener noreferrer"}},[r._v("阿里云镜像库"),t("OutboundLink")],1),r._v(" 等。")]),r._v(" "),t("h2",{attrs:{id:"私有-docker-registry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#私有-docker-registry"}},[r._v("#")]),r._v(" 私有 Docker Registry")]),r._v(" "),t("p",[r._v("除了使用公开服务外，用户还可以在本地搭建私有 Docker Registry。Docker 官方提供了 "),t("a",{attrs:{href:"https://store.docker.com/images/registry/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Docker Registry"),t("OutboundLink")],1),r._v(" 镜像，可以直接使用做为私有 Registry 服务。")]),r._v(" "),t("p",[r._v("开源的 Docker Registry 镜像只提供了 "),t("a",{attrs:{href:"https://docs.docker.com/registry/spec/api/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Docker Registry API"),t("OutboundLink")],1),r._v(" 的服务端实现，足以支持 "),t("code",[r._v("docker")]),r._v(" 命令，不影响使用。但不包含图形界面，以及镜像维护、用户管理、访问控制等高级功能。在官方的商业化版本 "),t("a",{attrs:{href:"https://docs.docker.com/datacenter/dtr/2.0/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Docker Trusted Registry"),t("OutboundLink")],1),r._v(" 中，提供了这些高级功能。")]),r._v(" "),t("p",[r._v("除了官方的 Docker Registry 外，还有第三方软件实现了 Docker Registry API，甚至提供了用户界面以及一些高级功能。比如，"),t("a",{attrs:{href:"https://github.com/vmware/harbor",target:"_blank",rel:"noopener noreferrer"}},[r._v("VMWare Harbor"),t("OutboundLink")],1),r._v(" 和 "),t("a",{attrs:{href:"https://www.sonatype.com/docker",target:"_blank",rel:"noopener noreferrer"}},[r._v("Sonatype Nexus"),t("OutboundLink")],1),r._v("。")])])}),[],!1,null,null,null);e.default=n.exports}}]);