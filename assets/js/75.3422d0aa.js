(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{1104:function(A,l,e){"use strict";e.r(l);var y=e(26),W=Object(y.a)({},(function(){var A=this,l=A.$createElement,y=A._self._c||l;return y("ContentSlotsDistributor",{attrs:{"slot-key":A.$parent.slotKey}},[y("h1",{attrs:{id:"什么是-mvc-模式"}},[y("a",{staticClass:"header-anchor",attrs:{href:"#什么是-mvc-模式"}},[A._v("#")]),A._v(" 什么是 MVC 模式")]),A._v(" "),y("h2",{attrs:{id:"概述"}},[y("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[A._v("#")]),A._v(" 概述")]),A._v(" "),y("p",[A._v("MVC，即 Model 模型、View 视图，及 Controller 控制器。")]),A._v(" "),y("ul",[y("li",[A._v("View：视图，为用户提供使用界面，与用户直接进行交互。")]),A._v(" "),y("li",[A._v("Model：模型，承载数据，并对用户提交请求进行计算的模块。其分为两类，一类称为数据承载 Bean，一类称为业务处理 Bean。所谓数据承载 Bean 是指实体类，专门用户承载业务数据的，如 Student、User 等。而业务处理 Bean 则是指 Service 或 Dao 对象， 专门用于处理用户提交请求的。")]),A._v(" "),y("li",[A._v("Controller：控制器，用于将用户请求转发给相应的 Model 进行处理，并根据 Model 的计算结果向用户提供相应响应。")])]),A._v(" "),y("h2",{attrs:{id:"mvc-架构程序的工作流程"}},[y("a",{staticClass:"header-anchor",attrs:{href:"#mvc-架构程序的工作流程"}},[A._v("#")]),A._v(" MVC 架构程序的工作流程")]),A._v(" "),y("ul",[y("li",[A._v("用户通过 View 页面向服务端提出请求，可以是表单请求、超链接请求、AJAX 请求等")]),A._v(" "),y("li",[A._v("服务端 Controller 控制器接收到请求后对请求进行解析，找到相应的 Model 对用户请求进行处理")]),A._v(" "),y("li",[A._v("Model 处理后，将处理结果再交给 Controller")]),A._v(" "),y("li",[A._v("Controller 在接到处理结果后，根据处理结果找到要作为向客户端发回的响应 View 页面。页面经渲染（数据填充）后，再发送给客户端。")])]),A._v(" "),y("p",[y("img",{attrs:{src:e(717),alt:"img"}})]),A._v(" "),y("h2",{attrs:{id:"三层架构-mvc-示意图"}},[y("a",{staticClass:"header-anchor",attrs:{href:"#三层架构-mvc-示意图"}},[A._v("#")]),A._v(" 三层架构 + MVC 示意图")]),A._v(" "),y("p",[y("img",{attrs:{src:e(718),alt:"img"}})])])}),[],!1,null,null,null);l.default=W.exports},717:function(A,l){A.exports="data:image/png;base64,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"},718:function(A,l){A.exports="data:image/png;base64,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"}}]);