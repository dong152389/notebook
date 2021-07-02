(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{919:function(v,_,t){"use strict";t.r(_);var a=t(26),e=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"媒体查询的用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#媒体查询的用法"}},[v._v("#")]),v._v(" 媒体查询的用法")]),v._v(" "),t("h2",{attrs:{id:"media-媒体查询的用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#media-媒体查询的用法"}},[v._v("#")]),v._v(" "),t("code",[v._v("@media")]),v._v(" 媒体查询的用法")]),v._v(" "),t("p",[v._v("媒体查询能在不同的条件下使用不同的样式，使页面在不同在终端设备下达到不同的渲染效果。")]),v._v(" "),t("h2",{attrs:{id:"浏览器支持"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器支持"}},[v._v("#")]),v._v(" 浏览器支持")]),v._v(" "),t("p",[v._v("表格中的数字表示支持 "),t("code",[v._v("@media")]),v._v(" 规则的第一个浏览器的版本号")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("Chrome")]),v._v(" "),t("th",[v._v("IE")]),v._v(" "),t("th",[v._v("Firefox")]),v._v(" "),t("th",[v._v("Safari")]),v._v(" "),t("th",[v._v("Opera")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("21")]),v._v(" "),t("td",[v._v("9")]),v._v(" "),t("td",[v._v("3.5")]),v._v(" "),t("td",[v._v("4.0")]),v._v(" "),t("td",[v._v("9")])])])]),v._v(" "),t("h2",{attrs:{id:"媒体类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#媒体类型"}},[v._v("#")]),v._v(" 媒体类型")]),v._v(" "),t("p",[v._v("媒体类型在 CSS2 中是一个常见属性，可以通过媒体类型对不同设备指定不同样式。")]),v._v(" "),t("ul",[t("li",[v._v("ALL：所有设备")]),v._v(" "),t("li",[v._v("Braille：盲人用点子法触觉回馈设备")]),v._v(" "),t("li",[v._v("Embossed：盲文打印机")]),v._v(" "),t("li",[v._v("Handheld：便携设备")]),v._v(" "),t("li",[v._v("Print：打印用纸或打印预览视图")]),v._v(" "),t("li",[v._v("Projection：各种投影设备")]),v._v(" "),t("li",[v._v("Screen：电脑显示器")]),v._v(" "),t("li",[v._v("Speech：语音或音频合成器")]),v._v(" "),t("li",[v._v("Tv：电视机类型设备")]),v._v(" "),t("li",[v._v("Tty：使用固定密度字母栅格的媒介，比如电传打字机和终端")])]),v._v(" "),t("p",[t("strong",[v._v("Screen")]),v._v("、"),t("strong",[v._v("All")]),v._v("、"),t("strong",[v._v("Print")]),v._v(" 为最常见的三种媒体类型。")]),v._v(" "),t("h2",{attrs:{id:"媒体特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#媒体特性"}},[v._v("#")]),v._v(" 媒体特性")]),v._v(" "),t("p",[v._v("媒体查询中的大部分接受 "),t("code",[v._v("min/max")]),v._v(" 前缀，用来表达其逻辑关系，表示应用大于等于或小于等于某个值的情况。没有特殊说明都支持 "),t("code",[v._v("min/max")]),v._v("。")]),v._v(" "),t("ul",[t("li",[v._v("width：Length 渲染界面的宽度")]),v._v(" "),t("li",[v._v("height：Length 渲染界面的高度")]),v._v(" "),t("li",[v._v("color：整数，表示色彩的字节数")]),v._v(" "),t("li",[v._v("color-index：整数， 色彩表中的色彩数")]),v._v(" "),t("li",[v._v("device-aspct-ratio：整数/整数，宽高比例")]),v._v(" "),t("li",[v._v("device-height：Length 设备屏幕的输出高度")]),v._v(" "),t("li",[v._v("device-width：Length 设备屏幕的输出宽度")]),v._v(" "),t("li",[v._v("grid（不支持 "),t("code",[v._v("min/max")]),v._v(" 前缀）：整数，是否基于栅格的设备")]),v._v(" "),t("li",[v._v("monochrome：整数，单色帧缓冲器中每像素字节数")]),v._v(" "),t("li",[v._v("resolution：分辨率（dpi/dpcm）分辨率")]),v._v(" "),t("li",[v._v("scan（不支持 "),t("code",[v._v("min/max")]),v._v(" 前缀）：Progressive interlaced，Tv 媒体类型的扫描方式")]),v._v(" "),t("li",[v._v("orientation（不支持 "),t("code",[v._v("min/max")]),v._v(" 前缀）：Portrait//landscape 横屏或竖屏")])]),v._v(" "),t("h2",{attrs:{id:"使用媒体查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用媒体查询"}},[v._v("#")]),v._v(" 使用媒体查询")]),v._v(" "),t("p",[v._v("语法："),t("code",[v._v("@media 媒体类型 and (媒体特性) {你的样式}")])]),v._v(" "),t("h3",{attrs:{id:"最大宽度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最大宽度"}},[v._v("#")]),v._v(" 最大宽度")]),v._v(" "),t("p",[t("code",[v._v("max-width")]),v._v(" 是媒体特性中最常用的一个特性，其意思是指媒体类型小于或等于指定的宽度时，样式生效。如：")]),v._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("@media screen and (max-width:480px) {\n .ads {\n   display:none;\n  }\n}\n")])])]),t("p",[v._v("上面表示的是：当屏幕小于或等于 480px 时，页面中包含类样式 "),t("code",[v._v(".ads")]),v._v(" 的元素都将被隐藏。")]),v._v(" "),t("h3",{attrs:{id:"最小宽度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最小宽度"}},[v._v("#")]),v._v(" 最小宽度")]),v._v(" "),t("p",[t("code",[v._v("min-width")]),v._v(" 与 "),t("code",[v._v("max-width")]),v._v(" 相反，指的是媒体类型大于或等于指定宽度时，样式生效。")]),v._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("@media screen and (min-width: 900px) {\n    .wrapper {width: 980px;}\n}\n")])])]),t("p",[v._v("上面表示的是：当屏幕大于或等于 900px 时，页面中包含类样式 "),t("code",[v._v(".wrapper")]),v._v(" 元素的宽度为 980px。")]),v._v(" "),t("h3",{attrs:{id:"多个媒体特性的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多个媒体特性的使用"}},[v._v("#")]),v._v(" 多个媒体特性的使用")]),v._v(" "),t("p",[v._v("媒体查询可以使用关键词 "),t("code",[v._v("and")]),v._v(" 将多个媒体特性结合在一起。也就是说，一个媒体查询中可以包含 0 到多个表达式，表达式又可以包含 0 到多个关键字，以及一种媒体类型。")]),v._v(" "),t("p",[v._v("当屏幕在 600px~900px 之间时，"),t("code",[v._v("body")]),v._v(" 的背景色渲染为 "),t("code",[v._v("#F5F5F5")]),v._v(" ，如下所示：")]),v._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("@media screen and (min-width:600px) and (max-width:900px) {\n  body {background-color:#F5F5F5;}\n}\n")])])])])}),[],!1,null,null,null);_.default=e.exports}}]);