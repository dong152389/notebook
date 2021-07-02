(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{380:function(t,s,a){t.exports=a.p+"assets/img/983980-20170501200932257-1866725509.0c4f9ffe.png"},381:function(t,s,a){t.exports=a.p+"assets/img/983980-20170501201000148-1677353522.2618c101.png"},382:function(t,s,a){t.exports=a.p+"assets/img/983980-20170501201046898-281749162.10e2ffe6.png"},383:function(t,s,a){t.exports=a.p+"assets/img/983980-20170501201150117-1722000003.a5f1e6a5.png"},384:function(t,s,a){t.exports=a.p+"assets/img/983980-20170501201226507-2146929767.c7b92c32.png"},385:function(t,s,a){t.exports=a.p+"assets/img/983980-20170501201353945-1013665174.eb11f2e5.png"},386:function(t,s,a){t.exports=a.p+"assets/img/983980-20170501201415054-327655979.fb91f174.png"},849:function(t,s,a){"use strict";a.r(s);var v=a(26),_=Object(v.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"微服务架构设计模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#微服务架构设计模式"}},[t._v("#")]),t._v(" 微服务架构设计模式")]),t._v(" "),v("h2",{attrs:{id:"微服务架构需要考虑的问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#微服务架构需要考虑的问题"}},[t._v("#")]),t._v(" 微服务架构需要考虑的问题")]),t._v(" "),v("ul",[v("li",[t._v("API Gateway")]),t._v(" "),v("li",[t._v("服务间调用")]),t._v(" "),v("li",[t._v("服务发现")]),t._v(" "),v("li",[t._v("服务容错")]),t._v(" "),v("li",[t._v("服务部署")]),t._v(" "),v("li",[t._v("数据调用")])]),t._v(" "),v("p",[v("img",{attrs:{src:a(380),alt:"img"}})]),t._v(" "),v("h2",{attrs:{id:"聚合器微服务设计模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#聚合器微服务设计模式"}},[t._v("#")]),t._v(" 聚合器微服务设计模式")]),t._v(" "),v("p",[t._v("这是一种最常见也最简单的设计模式")]),t._v(" "),v("p",[v("img",{attrs:{src:a(381),alt:"img"}})]),t._v(" "),v("p",[t._v("聚合器调用多个服务实现应用程序所需的功能。它可以是一个简单的 WEB 页面，将检索到的数据进行处理展示。它也可以是一个更高层次的组合微服务，对检索到的数据增加业务逻辑后进一步发布成一个新的微服务，这符合 "),v("strong",[t._v("DRY")]),t._v(" 原则。另外，每个服务都有自己的缓存和数据库。如果聚合器是一个组合服务，那么它也有自己的缓存和数据库。聚合器可以沿 "),v("code",[t._v("X轴")]),t._v(" 和 "),v("code",[t._v("Z轴")]),t._v(" 独立扩展。")]),t._v(" "),v("h2",{attrs:{id:"代理微服务设计模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#代理微服务设计模式"}},[t._v("#")]),t._v(" 代理微服务设计模式")]),t._v(" "),v("p",[t._v("这是聚合模式的一个变种，如下图所示")]),t._v(" "),v("p",[v("img",{attrs:{src:a(382),alt:"img"}})]),t._v(" "),v("p",[t._v("在这种情况下，客户端并不聚合数据，但会根据业务需求的差别调用不同的微服务。代理可以仅仅委派请求，也可以进行数据转换工作。")]),t._v(" "),v("h2",{attrs:{id:"链式微服务设计模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#链式微服务设计模式"}},[t._v("#")]),t._v(" 链式微服务设计模式")]),t._v(" "),v("p",[t._v("这种模式在接收到请求后会产生一个经过合并的响应，如下图所示")]),t._v(" "),v("p",[v("img",{attrs:{src:a(383),alt:"img"}})]),t._v(" "),v("p",[t._v("在这种情况下，"),v("code",[t._v("服务A")]),t._v(" 接收到请求后会与 "),v("code",[t._v("服务B")]),t._v(" 进行通信，类似地，"),v("code",[t._v("服务B")]),t._v(" 会同 "),v("code",[t._v("服务C")]),t._v(" 进行通信。所有服务都使用同步消息传递。在整个链式调用完成之前，客户端会一直阻塞。因此，服务调用链不宜过长，以免客户端长时间等待。")]),t._v(" "),v("h2",{attrs:{id:"分支微服务设计模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分支微服务设计模式"}},[t._v("#")]),t._v(" 分支微服务设计模式")]),t._v(" "),v("p",[t._v("这种模式是聚合器模式的扩展，允许同时调用两个微服务链，如下图所示")]),t._v(" "),v("p",[v("img",{attrs:{src:a(384),alt:"img"}})]),t._v(" "),v("h2",{attrs:{id:"数据共享微服务设计模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据共享微服务设计模式"}},[t._v("#")]),t._v(" 数据共享微服务设计模式")]),t._v(" "),v("p",[t._v("自治是微服务的设计原则之一，就是说微服务是全栈式服务。但在重构现有的“单体应用（Monolithic Application）”时，SQL 数据库反规范化可能会导致数据重复和不一致。因此，在单体应用到微服务架构的过渡阶段，可以使用这种设计模式，如下图所示")]),t._v(" "),v("p",[v("img",{attrs:{src:a(385),alt:"img"}})]),t._v(" "),v("p",[t._v("在这种情况下，部分微服务可能会共享缓存和数据库存储。不过，这只有在两个服务之间存在强耦合关系时才可以。对于基于微服务的新建应用程序而言，这是一种反模式。")]),t._v(" "),v("h2",{attrs:{id:"异步消息传递微服务设计模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#异步消息传递微服务设计模式"}},[t._v("#")]),t._v(" 异步消息传递微服务设计模式")]),t._v(" "),v("p",[t._v("虽然 REST 设计模式非常流行，但它是同步的，会造成阻塞。因此部分基于微服务的架构可能会选择使用消息队列代替 REST 请求/响应，如下图所示")]),t._v(" "),v("p",[v("img",{attrs:{src:a(386),alt:"img"}})])])}),[],!1,null,null,null);s.default=_.exports}}]);