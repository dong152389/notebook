(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{1273:function(v,e,t){"use strict";t.r(e);var _=t(26),r=Object(_.a)({},(function(){var v=this,e=v.$createElement,_=v._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"什么是-vue"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是-vue"}},[v._v("#")]),v._v(" 什么是 Vue")]),v._v(" "),_("h2",{attrs:{id:"简介"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[v._v("#")]),v._v(" 简介")]),v._v(" "),_("p",[v._v("Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的"),_("strong",[v._v("渐进式框架")]),v._v("，发布于 2014 年 2 月。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。"),_("strong",[v._v("Vue 的核心库只关注视图层")]),v._v("，不仅易于上手，还便于与第三方库（如："),_("code",[v._v("vue-router")]),v._v("，"),_("code",[v._v("vue-resource")]),v._v("，"),_("code",[v._v("vuex")]),v._v("）或既有项目整合。")]),v._v(" "),_("h2",{attrs:{id:"mvvm-模式的实现者"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mvvm-模式的实现者"}},[v._v("#")]),v._v(" MVVM 模式的实现者")]),v._v(" "),_("p",[v._v("我们知道（不知道的请移步 【"),_("RouterLink",{attrs:{to:"/vue-prepare/了解前端-MVVM-模式.html#了解前端-mvvm-模式"}},[v._v("了解前端 MVVM 模式")]),v._v("】） MVVM 表示如下：")],1),v._v(" "),_("ul",[_("li",[v._v("Model：模型层，在这里表示 JavaScript 对象")]),v._v(" "),_("li",[v._v("View：视图层，在这里表示 DOM（HTML 操作的元素）")]),v._v(" "),_("li",[v._v("ViewModel：连接视图和数据的中间件，"),_("strong",[v._v("Vue.js 就是 MVVM 中的 ViewModel 层的实现者")])])]),v._v(" "),_("p",[_("img",{attrs:{src:t(885),alt:"img"}})]),v._v(" "),_("p",[v._v("在 MVVM 架构中，是不允许 "),_("strong",[v._v("数据")]),v._v(" 和 "),_("strong",[v._v("视图")]),v._v(" 直接通信的，只能通过 "),_("code",[v._v("ViewModel")]),v._v(" 来通信，而 ViewModel 就是定义了一个 "),_("code",[v._v("Observer")]),v._v(" 观察者")]),v._v(" "),_("ul",[_("li",[v._v("ViewModel 能够观察到数据的变化，并对视图对应的内容进行更新")]),v._v(" "),_("li",[v._v("ViewModel 能够监听到视图的变化，并能够通知数据发生改变")])]),v._v(" "),_("p",[v._v("至此，我们就明白了，Vue.js 就是一个 MVVM 的实现者，他的核心就是实现了 "),_("code",[v._v("DOM 监听")]),v._v(" 与 "),_("code",[v._v("数据绑定")])]),v._v(" "),_("h3",{attrs:{id:"其它-mvvm-实现者"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其它-mvvm-实现者"}},[v._v("#")]),v._v(" 其它 MVVM 实现者")]),v._v(" "),_("ul",[_("li",[v._v("AngularJS")]),v._v(" "),_("li",[v._v("ReactJS")]),v._v(" "),_("li",[v._v("微信小程序")])]),v._v(" "),_("h2",{attrs:{id:"为什么要使用-vue-js"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用-vue-js"}},[v._v("#")]),v._v(" 为什么要使用 Vue.js")]),v._v(" "),_("ul",[_("li",[v._v("轻量级，体积小是一个重要指标。Vue.js 压缩后有只有 "),_("strong",[v._v("20多kb")]),v._v(" （Angular 压缩后 "),_("strong",[v._v("56kb+")]),v._v("，React 压缩后 "),_("strong",[v._v("44kb+")]),v._v("）")]),v._v(" "),_("li",[v._v("移动优先。更适合移动端，比如移动端的 Touch 事件")]),v._v(" "),_("li",[v._v("易上手，学习曲线平稳，文档齐全")]),v._v(" "),_("li",[v._v("吸取了 Angular（"),_("code",[v._v("模块化")]),v._v("）和 React（"),_("code",[v._v("虚拟 DOM")]),v._v("）的长处，并拥有自己独特的功能，如："),_("code",[v._v("计算属性")])]),v._v(" "),_("li",[v._v("开源，社区活跃度高")])]),v._v(" "),_("h2",{attrs:{id:"vue-js-的两大核心要素"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vue-js-的两大核心要素"}},[v._v("#")]),v._v(" Vue.js 的两大核心要素")]),v._v(" "),_("h3",{attrs:{id:"数据驱动"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据驱动"}},[v._v("#")]),v._v(" 数据驱动")]),v._v(" "),_("p",[_("img",{attrs:{src:t(886),alt:"img"}})]),v._v(" "),_("p",[v._v("当你把一个普通的 JavaScript 对象传给 Vue 实例的 "),_("code",[v._v("data")]),v._v(" 选项，Vue 将遍历此对象所有的属性，并使用 "),_("code",[v._v("Object.defineProperty")]),v._v(" 把这些属性全部转为 "),_("code",[v._v("getter/setter")]),v._v("。"),_("strong",[v._v("Object.defineProperty 是 ES5 中一个无法 shim 的特性，这也就是为什么 Vue 不支持 IE8 以及更低版本浏览器")]),v._v("。")]),v._v(" "),_("p",[v._v("这些 getter/setter 对用户来说是不可见的，但是在内部它们让 Vue 追踪依赖，在属性被访问和修改时通知变化。这里需要注意的问题是浏览器控制台在打印数据对象时 getter/setter 的格式化并不同，所以你可能需要安装 "),_("code",[v._v("vue-devtools")]),v._v(" 来获取更加友好的检查接口。")]),v._v(" "),_("p",[v._v("每个组件实例都有相应的 "),_("strong",[v._v("watcher")]),v._v(" 实例对象，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 "),_("code",[v._v("setter")]),v._v(" 被调用时，会通知 "),_("code",[v._v("watcher")]),v._v(" 重新计算，从而致使它关联的组件得以更新。")]),v._v(" "),_("h3",{attrs:{id:"组件化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#组件化"}},[v._v("#")]),v._v(" 组件化")]),v._v(" "),_("ul",[_("li",[v._v("页面上每个独立的可交互的区域视为一个组件")]),v._v(" "),_("li",[v._v("每个组件对应一个工程目录，组件所需的各种资源在这个目录下就近维护")]),v._v(" "),_("li",[v._v("页面不过是组件的容器，组件可以嵌套自由组合（复用）形成完整的页面")])])])}),[],!1,null,null,null);e.default=r.exports},885:function(v,e,t){v.exports=t.p+"assets/img/Lusifer201812170001.edd0080f.png"},886:function(v,e,t){v.exports=t.p+"assets/img/Lusifer201812170002.5de7af21.png"}}]);