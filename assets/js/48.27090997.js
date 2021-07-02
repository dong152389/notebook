(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1087:function(a,t,s){"use strict";s.r(t);var e=s(26),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"服务注册与发现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务注册与发现"}},[a._v("#")]),a._v(" 服务注册与发现")]),a._v(" "),e("h2",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),e("p",[a._v("在 Spring Cloud Netflix 阶段我们采用 Eureka 做作为我们的服务注册与发现服务器，现利用 Spring Cloud Alibaba 提供的 Nacos 组件替代该方案。")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://nacos.io/zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Nacos 官网"),e("OutboundLink")],1)]),a._v(" "),e("h2",{attrs:{id:"什么是-nacos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是-nacos"}},[a._v("#")]),a._v(" 什么是 Nacos")]),a._v(" "),e("p",[a._v("Nacos 致力于帮助您发现、配置和管理微服务。Nacos 提供了一组简单易用的特性集，帮助您快速实现动态服务发现、服务配置、服务元数据及流量管理。")]),a._v(" "),e("p",[a._v("Nacos 帮助您更敏捷和容易地构建、交付和管理微服务平台。 Nacos 是构建以“服务”为中心的现代应用架构 (例如微服务范式、云原生范式) 的服务基础设施。")]),a._v(" "),e("h2",{attrs:{id:"基本架构及概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本架构及概念"}},[a._v("#")]),a._v(" 基本架构及概念")]),a._v(" "),e("p",[e("img",{attrs:{src:s(784),alt:"img"}})]),a._v(" "),e("h3",{attrs:{id:"服务-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务-service"}},[a._v("#")]),a._v(" 服务 (Service)")]),a._v(" "),e("p",[a._v("服务是指一个或一组软件功能（例如特定信息的检索或一组操作的执行），其目的是不同的客户端可以为不同的目的重用（例如通过跨进程的网络调用）。Nacos 支持主流的服务生态，如 Kubernetes Service、gRPC|Dubbo RPC Service 或者 Spring Cloud RESTful Service.")]),a._v(" "),e("h3",{attrs:{id:"服务注册中心-service-registry"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务注册中心-service-registry"}},[a._v("#")]),a._v(" 服务注册中心 (Service Registry)")]),a._v(" "),e("p",[a._v("服务注册中心，它是服务，其实例及元数据的数据库。服务实例在启动时注册到服务注册表，并在关闭时注销。服务和路由器的客户端查询服务注册表以查找服务的可用实例。服务注册中心可能会调用服务实例的健康检查 API 来验证它是否能够处理请求。")]),a._v(" "),e("h3",{attrs:{id:"服务元数据-service-metadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务元数据-service-metadata"}},[a._v("#")]),a._v(" 服务元数据 (Service Metadata)")]),a._v(" "),e("p",[a._v("服务元数据是指包括服务端点(endpoints)、服务标签、服务版本号、服务实例权重、路由规则、安全策略等描述服务的数据")]),a._v(" "),e("h3",{attrs:{id:"服务提供方-service-provider"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务提供方-service-provider"}},[a._v("#")]),a._v(" 服务提供方 (Service Provider)")]),a._v(" "),e("p",[a._v("是指提供可复用和可调用服务的应用方")]),a._v(" "),e("h3",{attrs:{id:"服务消费方-service-consumer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务消费方-service-consumer"}},[a._v("#")]),a._v(" 服务消费方 (Service Consumer)")]),a._v(" "),e("p",[a._v("是指会发起对某个服务调用的应用方")]),a._v(" "),e("h3",{attrs:{id:"配置-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-configuration"}},[a._v("#")]),a._v(" 配置 (Configuration)")]),a._v(" "),e("p",[a._v("在系统开发过程中通常会将一些需要变更的参数、变量等从代码中分离出来独立管理，以独立的配置文件的形式存在。目的是让静态的系统工件或者交付物（如 WAR，JAR 包等）更好地和实际的物理运行环境进行适配。配置管理一般包含在系统部署的过程中，由系统管理员或者运维人员完成这个步骤。配置变更是调整系统运行时的行为的有效手段之一。")]),a._v(" "),e("h3",{attrs:{id:"配置管理-configuration-management"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置管理-configuration-management"}},[a._v("#")]),a._v(" 配置管理 (Configuration Management)")]),a._v(" "),e("p",[a._v("在数据中心中，系统中所有配置的编辑、存储、分发、变更管理、历史版本管理、变更审计等所有与配置相关的活动统称为配置管理。")]),a._v(" "),e("h3",{attrs:{id:"名字服务-naming-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#名字服务-naming-service"}},[a._v("#")]),a._v(" 名字服务 (Naming Service)")]),a._v(" "),e("p",[a._v("提供分布式系统中所有对象(Object)、实体(Entity)的“名字”到关联的元数据之间的映射管理服务，例如 ServiceName -> Endpoints Info, Distributed Lock Name -> Lock Owner/Status Info, DNS Domain Name -> IP List, 服务发现和 DNS 就是名字服务的2大场景。")]),a._v(" "),e("h3",{attrs:{id:"配置服务-configuration-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置服务-configuration-service"}},[a._v("#")]),a._v(" 配置服务 (Configuration Service)")]),a._v(" "),e("p",[a._v("在服务或者应用运行过程中，提供动态配置或者元数据以及配置管理的服务提供者。")]),a._v(" "),e("h2",{attrs:{id:"下载安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载安装"}},[a._v("#")]),a._v(" 下载安装")]),a._v(" "),e("h3",{attrs:{id:"准备环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备环境"}},[a._v("#")]),a._v(" 准备环境")]),a._v(" "),e("p",[a._v("Nacos 依赖 Java 环境来运行。如果您是从代码开始构建并运行 Nacos，还需要为此配置 Maven 环境，请确保是在以下版本环境中安装使用:")]),a._v(" "),e("ul",[e("li",[a._v("64 bit OS，支持 Linux/Unix/Mac/Windows，推荐选用 Linux/Unix/Mac。")]),a._v(" "),e("li",[a._v("64 bit JDK 1.8+")]),a._v(" "),e("li",[a._v("Maven 3.2.x+")])]),a._v(" "),e("h3",{attrs:{id:"下载并安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载并安装"}},[a._v("#")]),a._v(" 下载并安装")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 下载源码")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/alibaba/nacos.git\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装到本地仓库")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" nacos/\nmvn -Prelease-nacos clean "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -U\n")])])]),e("p",[e("strong",[a._v("注：下载依赖时间较长，请耐心等待...")])]),a._v(" "),e("h2",{attrs:{id:"启动服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动服务"}},[a._v("#")]),a._v(" 启动服务")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" distribution/target/nacos-server-0.7.0/nacos/bin\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Linux")]),a._v("\n./startup.sh -m standalone\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Windows")]),a._v("\nstartup.cmd\n")])])]),e("p",[e("img",{attrs:{src:s(785),alt:"img"}})]),a._v(" "),e("h2",{attrs:{id:"访问服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#访问服务"}},[a._v("#")]),a._v(" 访问服务")]),a._v(" "),e("p",[a._v("打开浏览器访问：http://localhost:8848/nacos")]),a._v(" "),e("p",[e("img",{attrs:{src:s(786),alt:"img"}})]),a._v(" "),e("p",[e("strong",[a._v("注：从 0.8.0 版本开始，需要登录才可访问，默认账号密码为 nacos/nacos")])])])}),[],!1,null,null,null);t.default=r.exports},784:function(a,t,s){a.exports=s.p+"assets/img/nacos-Arch.c1092b1f.jpg"},785:function(a,t,s){a.exports=s.p+"assets/img/Lusifer_20190105020351.fb2ad41f.png"},786:function(a,t,s){a.exports=s.p+"assets/img/Lusifer_20190105020523.6d839c90.png"}}]);