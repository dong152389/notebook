(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{420:function(t,s,a){t.exports=a.p+"assets/img/Lusifer2018052805390001.8e497817.png"},421:function(t,s,a){t.exports=a.p+"assets/img/Lusifer2018052805390002.1107b28f.png"},422:function(t,s,a){t.exports=a.p+"assets/img/0714fcab4f6d5951014e5613657c8289.4608885c.png"},914:function(t,s,a){"use strict";a.r(s);var r=a(26),v=Object(r.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"传统架构与微服务架构的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#传统架构与微服务架构的区别"}},[t._v("#")]),t._v(" 传统架构与微服务架构的区别")]),t._v(" "),r("h2",{attrs:{id:"系统架构需要遵循的三个标准"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#系统架构需要遵循的三个标准"}},[t._v("#")]),t._v(" 系统架构需要遵循的三个标准")]),t._v(" "),r("ul",[r("li",[t._v("提高敏捷性：及时响应业务需求，促进企业发展")]),t._v(" "),r("li",[t._v("提升用户体验：提升用户体验，减少用户流失")]),t._v(" "),r("li",[t._v("降低成本：降低增加产品、客户或业务方案的成本")])]),t._v(" "),r("h2",{attrs:{id:"传统的开发模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#传统的开发模式"}},[t._v("#")]),t._v(" 传统的开发模式")]),t._v(" "),r("p",[t._v("先来看看传统的 WEB 开发方式，通过对比比较容易理解什么是 "),r("strong",[t._v("微服务架构")]),t._v("。和 "),r("strong",[t._v("微服务")]),t._v(" 相对应的，这种方式一般被称为 "),r("strong",[t._v("单体式开发（Monolithic）")]),t._v("。")]),t._v(" "),r("p",[t._v("既所有的功能打包在一个 WAR 包里，基本没有外部依赖（除了容器），部署在一个 JavaEE 容器（Tomcat，JBoss，WebLogic）里，包含了 DO/DAO，Service，UI 等所有逻辑。")]),t._v(" "),r("p",[r("img",{attrs:{src:a(420),alt:"img"}})]),t._v(" "),r("h3",{attrs:{id:"优点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),r("ul",[r("li",[t._v("开发简单，集中式管理")]),t._v(" "),r("li",[t._v("基本不会重复开发")]),t._v(" "),r("li",[t._v("功能都在本地，没有分布式的管理和调用消耗")])]),t._v(" "),r("h3",{attrs:{id:"缺点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),r("ul",[r("li",[t._v("效率低：开发都在同一个项目改代码，相互等待，冲突不断")]),t._v(" "),r("li",[t._v("维护难：代码功功能耦合在一起，新人不知道何从下手")]),t._v(" "),r("li",[t._v("不灵活：构建时间长，任何小修改都要重构整个项目，耗时")]),t._v(" "),r("li",[t._v("稳定性差：一个微小的问题，都可能导致整个应用挂掉")]),t._v(" "),r("li",[t._v("扩展性不够：无法满足高并发下的业务需求")])]),t._v(" "),r("h2",{attrs:{id:"微服务架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#微服务架构"}},[t._v("#")]),t._v(" 微服务架构")]),t._v(" "),r("h3",{attrs:{id:"目的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#目的"}},[t._v("#")]),t._v(" 目的")]),t._v(" "),r("p",[t._v("有效的拆分应用，实现敏捷开发和部署")]),t._v(" "),r("p",[r("img",{attrs:{src:a(421),alt:"img"}})]),t._v(" "),r("h3",{attrs:{id:"开发和交付中的伸缩立方"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开发和交付中的伸缩立方"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://www.dfd.com/zh/micro-service-about/%E5%86%8D%E8%B0%88%E5%BE%AE%E6%9C%8D%E5%8A%A1-%E4%BC%A0%E7%BB%9F%E6%9E%B6%E6%9E%84%E4%B8%8E%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%9E%B6%E6%9E%84%E7%9A%84%E5%8C%BA%E5%88%AB.html#%E5%BC%80%E5%8F%91%E5%92%8C%E4%BA%A4%E4%BB%98%E4%B8%AD%E7%9A%84%E4%BC%B8%E7%BC%A9%E7%AB%8B%E6%96%B9",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),r("OutboundLink")],1),t._v("开发和交付中的伸缩立方")]),t._v(" "),r("p",[r("img",{attrs:{src:a(422),alt:"img"}})]),t._v(" "),r("p",[r("strong",[t._v("X轴：")]),t._v(" 运行多个负载均衡器之后的运行实例 "),r("strong",[t._v("Y轴：")]),t._v(" 将应用进一步分解为微服务（分库） "),r("strong",[t._v("Z轴：")]),t._v(" 大数据量时，将服务分区（分表）")])])}),[],!1,null,null,null);s.default=v.exports}}]);