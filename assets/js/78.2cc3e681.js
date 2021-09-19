(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{1136:function(t,v,_){"use strict";_.r(v);var e=_(26),s=Object(e.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"什么是-kubernetes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是-kubernetes"}},[t._v("#")]),t._v(" 什么是 Kubernetes")]),t._v(" "),e("h2",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),e("p",[e("img",{attrs:{src:_(736),alt:"img"}})]),t._v(" "),e("p",[t._v("Kubernetes 是 "),e("strong",[t._v("Google 2014 年创建管理的")]),t._v("，是 Google 10 多年大规模容器管理技术 Borg 的开源版本。")]),t._v(" "),e("p",[t._v("Kubernetes 是容器集群管理系统，是一个开源的平台，可以实现容器集群的自动化部署、自动扩缩容、维护等功能。使用 Kubernetes 我们可以：")]),t._v(" "),e("ul",[e("li",[t._v("快速部署应用")]),t._v(" "),e("li",[t._v("快速扩展应用")]),t._v(" "),e("li",[t._v("无缝对接新的应用功能")]),t._v(" "),e("li",[t._v("节省资源，优化硬件资源的使用")])]),t._v(" "),e("p",[t._v("Kubernetes 的目标是促进完善组件和工具的生态系统，以减轻应用程序在公有云或私有云中运行的负担。")]),t._v(" "),e("h2",{attrs:{id:"特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("可移植：")]),t._v(" 支持公有云，私有云，混合云，多重云（多个公共云）")]),t._v(" "),e("li",[e("strong",[t._v("可扩展：")]),t._v(" 模块化，插件化，可挂载，可组合")]),t._v(" "),e("li",[e("strong",[t._v("自动化：")]),t._v(" 自动部署，自动重启，自动复制，自动伸缩/扩展")])]),t._v(" "),e("h2",{attrs:{id:"从传统到容器化部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从传统到容器化部署"}},[t._v("#")]),t._v(" 从传统到容器化部署")]),t._v(" "),e("p",[e("img",{attrs:{src:_(737),alt:"img"}})]),t._v(" "),e("h3",{attrs:{id:"传统的部署方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#传统的部署方式"}},[t._v("#")]),t._v(" 传统的部署方式")]),t._v(" "),e("p",[t._v("传统的应用部署方式是通过插件或脚本来安装应用。这样做的缺点是应用的运行、配置、管理、所有生存周期将与当前操作系统绑定，这样做并不利于应用的升级更新/回滚等操作，当然也可以通过创建虚机的方式来实现某些功能，但是虚拟机非常重，并不利于可移植性。")]),t._v(" "),e("h3",{attrs:{id:"容器化部署的优势"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器化部署的优势"}},[t._v("#")]),t._v(" 容器化部署的优势")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("快速创建/部署应用：")]),t._v(" 与虚拟机相比，容器镜像的创建更加容易。")]),t._v(" "),e("li",[e("strong",[t._v("持续开发、集成和部署：")]),t._v(" 提供可靠且频繁的容器镜像构建/部署，并使用快速和简单的回滚(由于镜像不可变性)。")]),t._v(" "),e("li",[e("strong",[t._v("开发和运行相分离：")]),t._v(" 在 build 或者 release 阶段创建容器镜像，使得应用和基础设施解耦。")]),t._v(" "),e("li",[e("strong",[t._v("开发，测试和生产环境一致性：")]),t._v(" 在本地或外网（生产环境）运行的一致性。")]),t._v(" "),e("li",[e("strong",[t._v("云平台或其他操作系统：")]),t._v(" 可以在 Ubuntu、RHEL、CoreOS、on-prem、Google Container Engine 或其它任何环境中运行。")]),t._v(" "),e("li",[e("strong",[t._v("分布式，弹性，微服务化：")]),t._v(" 应用程序分为更小的、独立的部件，可以动态部署和管理。")]),t._v(" "),e("li",[e("strong",[t._v("资源隔离")])]),t._v(" "),e("li",[e("strong",[t._v("资源利用更高效")])])]),t._v(" "),e("h2",{attrs:{id:"为什么需要-kubernetes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要-kubernetes"}},[t._v("#")]),t._v(" 为什么需要 Kubernetes")]),t._v(" "),e("p",[t._v("可以在物理或虚拟机的 Kubernetes 集群上运行容器化应用，Kubernetes 能提供一个以 "),e("strong",[t._v("“容器为中心的基础架构”")]),t._v("，满足在生产环境中运行应用的一些常见需求，如：")]),t._v(" "),e("ul",[e("li",[t._v("多个进程协同工作")]),t._v(" "),e("li",[t._v("存储系统挂载")]),t._v(" "),e("li",[t._v("应用健康检查")]),t._v(" "),e("li",[t._v("应用实例的复制")]),t._v(" "),e("li",[t._v("自动伸缩/扩展")]),t._v(" "),e("li",[t._v("注册与发现")]),t._v(" "),e("li",[t._v("负载均衡")]),t._v(" "),e("li",[t._v("滚动更新")]),t._v(" "),e("li",[t._v("资源监控")]),t._v(" "),e("li",[t._v("日志访问")]),t._v(" "),e("li",[t._v("调试应用程序")]),t._v(" "),e("li",[t._v("提供认证和授权")])])])}),[],!1,null,null,null);v.default=s.exports},736:function(t,v,_){t.exports=_.p+"assets/img/clipart1469859.65a15e83.png"},737:function(t,v,_){t.exports=_.p+"assets/img/why_containers.dbf7d592.svg"}}]);