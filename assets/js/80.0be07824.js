(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{451:function(a,t,v){a.exports=v.p+"assets/img/basic-architecture.6f29c597.png"},866:function(a,t,v){"use strict";v.r(t);var _=v(26),l=Object(_.a)({},(function(){var a=this,t=a.$createElement,_=a._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("h1",{attrs:{id:"apollo-简介"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#apollo-简介"}},[a._v("#")]),a._v(" Apollo 简介")]),a._v(" "),_("p",[_("strong",[a._v("注：该章节没有配视频教程，是因为希望我线下学员能够通过之前的课程将所学技能融汇贯通，利用所学思想通过官方文档自己搭建出分布式配置中心")])]),a._v(" "),_("h2",{attrs:{id:"什么是-apollo"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是-apollo"}},[a._v("#")]),a._v(" 什么是 Apollo")]),a._v(" "),_("p",[a._v("Apollo（阿波罗）是携程框架部门研发的分布式配置中心，能够集中化管理应用不同环境、不同集群的配置，配置修改后能够实时推送到应用端，并且具备规范的权限、流程治理等特性，适用于微服务配置管理场景")]),a._v(" "),_("p",[a._v("GitHub：https://github.com/ctripcorp/apollo")]),a._v(" "),_("h2",{attrs:{id:"为什么使用-apollo"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用-apollo"}},[a._v("#")]),a._v(" 为什么使用 Apollo")]),a._v(" "),_("p",[a._v("因为如今程序功能越来越复杂，程序的配置日益增多：各种功能的开关、参数配置、服务器地址、数据库链接等。对于配置的期望值越来越高：配置修改后实时生效、灰度发布、分环境、分集群管理配置、完善的权限、审核机制等。所以传统的配置文件越来越无法满足开发人员的需求。于是就有了 Apollo。")]),a._v(" "),_("h2",{attrs:{id:"配置的基本概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#配置的基本概念"}},[a._v("#")]),a._v(" 配置的基本概念")]),a._v(" "),_("p",[a._v("Apollo 支持 4 个维度管理 KV 格式的配置：")]),a._v(" "),_("ul",[_("li",[a._v("application：应用")]),a._v(" "),_("li",[a._v("environment：环境")]),a._v(" "),_("li",[a._v("cluster：集群")]),a._v(" "),_("li",[a._v("namespace：命名空间")])]),a._v(" "),_("p",[a._v("既然 Apollo 定位于配置中心，首先了解一下什么是配置")]),a._v(" "),_("h3",{attrs:{id:"配置是独立于程序的只读变量"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#配置是独立于程序的只读变量"}},[a._v("#")]),a._v(" 配置是独立于程序的只读变量")]),a._v(" "),_("ul",[_("li",[a._v("配置首先独立于程序的，同一份程序在不同的配置下会有不同的行为。")]),a._v(" "),_("li",[a._v("配置对于程序是只读，程序通过读取配置来改变自己的行为，但是程序不应该去改变配置。")]),a._v(" "),_("li",[a._v("常见的配置如：数据库连接、线程池大小、超时时间等")])]),a._v(" "),_("h3",{attrs:{id:"配置伴随应用的整个生命周期"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#配置伴随应用的整个生命周期"}},[a._v("#")]),a._v(" 配置伴随应用的整个生命周期")]),a._v(" "),_("ul",[_("li",[a._v("配置贯穿于应用的整个生命周期，应用启动时通过读取配置来初始化，在运行时根据配置调行为。")])]),a._v(" "),_("h3",{attrs:{id:"配置可有多种加载方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#配置可有多种加载方式"}},[a._v("#")]),a._v(" 配置可有多种加载方式")]),a._v(" "),_("ul",[_("li",[a._v("配置也有很多种加载方式，常见的有程序内部 "),_("strong",[a._v("硬编码")]),a._v("、配置文件、环境变量、启动参数、基于数据库等")])]),a._v(" "),_("h3",{attrs:{id:"配置需要治理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#配置需要治理"}},[a._v("#")]),a._v(" 配置需要治理")]),a._v(" "),_("ul",[_("li",[a._v("权限控制：由于配置能改变的程序的行为，不正确的配置甚至能引起灾难，所以对配置的修改必须有比较完善的权限控制")]),a._v(" "),_("li",[a._v("不同的环境、集群配置管理：同一份程序在不同的环境（开发、测试、生产）、不同的集群（如不同的数据中心）经常需要不同的配置，所以需要有完善的环境、集群配置管理")])]),a._v(" "),_("h2",{attrs:{id:"apollo-的特性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#apollo-的特性"}},[a._v("#")]),a._v(" Apollo 的特性")]),a._v(" "),_("h3",{attrs:{id:"统一管理不同环境、不同集群的配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#统一管理不同环境、不同集群的配置"}},[a._v("#")]),a._v(" 统一管理不同环境、不同集群的配置")]),a._v(" "),_("ul",[_("li",[a._v("Apollo 提供了一个统一界面集中式管理不同环境（environment）、不同集群（cluster）、不同命名空间（namespace）的配置。")]),a._v(" "),_("li",[a._v("同一份代码部署在不同的集群，可以有不同的配置，比如 zk 的地址等")]),a._v(" "),_("li",[a._v("通过命名空间（namespace）可以很方便的支持多个不同应用共享同一份配置，同时还允许应用对共享的配置进行覆盖")])]),a._v(" "),_("h3",{attrs:{id:"配置修改实时生效-热发布"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#配置修改实时生效-热发布"}},[a._v("#")]),a._v(" 配置修改实时生效（热发布）")]),a._v(" "),_("ul",[_("li",[a._v("用户在 Apollo 修改完配置并发布后，客户端能实时（1秒）接收到最新的配置，并通知到应用程序")])]),a._v(" "),_("h3",{attrs:{id:"版本发布管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#版本发布管理"}},[a._v("#")]),a._v(" 版本发布管理")]),a._v(" "),_("ul",[_("li",[a._v("所有的配置发布都有版本概念，从而可以方便地支持配置的回滚")])]),a._v(" "),_("h3",{attrs:{id:"灰度发布"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#灰度发布"}},[a._v("#")]),a._v(" 灰度发布")]),a._v(" "),_("ul",[_("li",[a._v("支持配置的灰度发布，比如点了发布后，只对部分应用实例生效，等观察一段时间没问题后再推给所有应用实例")])]),a._v(" "),_("h3",{attrs:{id:"权限管理、发布审核、操作审计"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#权限管理、发布审核、操作审计"}},[a._v("#")]),a._v(" 权限管理、发布审核、操作审计")]),a._v(" "),_("ul",[_("li",[a._v("应用和配置的管理都有完善的权限管理机制，对配置的管理还分为了编辑和发布两个环节，从而减少人为的错误。")]),a._v(" "),_("li",[a._v("所有的操作都有审计日志，可以方便的追踪问题")])]),a._v(" "),_("h3",{attrs:{id:"客户端配置信息监控"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#客户端配置信息监控"}},[a._v("#")]),a._v(" 客户端配置信息监控")]),a._v(" "),_("ul",[_("li",[a._v("可以在界面上方便地看到配置在被哪些实例使用")])]),a._v(" "),_("h3",{attrs:{id:"提供-java-和-net-原生客户端"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提供-java-和-net-原生客户端"}},[a._v("#")]),a._v(" 提供 Java 和 .Net 原生客户端")]),a._v(" "),_("ul",[_("li",[a._v("提供了 "),_("code",[a._v("Java")]),a._v(" 和 "),_("code",[a._v(".Net")]),a._v(" 的原生客户端，方便应用集成")]),a._v(" "),_("li",[a._v("支持 "),_("code",[a._v("Spring Placeholder")]),a._v(", "),_("code",[a._v("Annotation")]),a._v(" 和 "),_("code",[a._v("Spring Boot")]),a._v(" 的 "),_("code",[a._v("ConfigurationProperties")]),a._v("，方便应用使用（需要 Spring 3.1.1 +）")]),a._v(" "),_("li",[a._v("同时提供了 HTTP 接口，非 "),_("code",[a._v("Java")]),a._v(" 和 "),_("code",[a._v(".Net")]),a._v(" 应用也可以方便的使用")])]),a._v(" "),_("h3",{attrs:{id:"提供开放平台-api"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提供开放平台-api"}},[a._v("#")]),a._v(" 提供开放平台 API")]),a._v(" "),_("ul",[_("li",[a._v("Apollo 自身提供了比较完善的统一配置管理界面，支持多环境、多数据中心配置管理、权限、流程治理等特性。")]),a._v(" "),_("li",[a._v("不过 Apollo 出于通用性考虑，对配置的修改不会做过多限制，只要符合基本的格式就能够保存")]),a._v(" "),_("li",[a._v("对于有些使用方，它们的配置可能会有比较复杂的格式，而且对输入的值也需要进行校验后方可保存，如检查数据库、用户名和密码是否匹配；对于这类应用，Apollo 支持应用方通过开放接口在 Apollo 进行配置的修改和发布，并且具备完善的授权和权限控制")])]),a._v(" "),_("h3",{attrs:{id:"部署简单"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#部署简单"}},[a._v("#")]),a._v(" 部署简单")]),a._v(" "),_("ul",[_("li",[a._v("配置中心作为基础服务，可用性要求非常高，这就要求 Apollo 对外部依赖尽可能地少")]),a._v(" "),_("li",[a._v("目前唯一的外部依赖是 MySQL，所以部署非常简单，只要安装好 Java 和 MySQL 就可以让 Apollo 跑起来")]),a._v(" "),_("li",[a._v("Apollo 还提供了打包脚本，一键就可以生成所有需要的安装包，并且支持自定义运行时参数")])]),a._v(" "),_("h2",{attrs:{id:"apollo-的基础模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#apollo-的基础模型"}},[a._v("#")]),a._v(" Apollo 的基础模型")]),a._v(" "),_("ul",[_("li",[a._v("用户在配置中心对配置进行修改并发布")]),a._v(" "),_("li",[a._v("配置中心通知 Apollo 客户端有配置更新")]),a._v(" "),_("li",[a._v("Apollo 客户端从配置中心拉取最新的配置、更新本地配置并通知到应用")])]),a._v(" "),_("p",[_("img",{attrs:{src:v(451),alt:"img"}})])])}),[],!1,null,null,null);t.default=l.exports}}]);