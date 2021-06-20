(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{561:function(t,a,s){t.exports=s.p+"assets/img/Lusifer1512345603.5f2586e0.png"},562:function(t,a,s){t.exports=s.p+"assets/img/Lusifer1512345786.9f139859.png"},563:function(t,a,s){t.exports=s.p+"assets/img/Lusifer1512346835.0f8704fb.png"},772:function(t,a,s){"use strict";s.r(a);var n=s(26),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"lombok"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lombok"}},[t._v("#")]),t._v(" Lombok")]),t._v(" "),n("p",[t._v("Lombok 是一个可以通过简单的注解形式来帮助我们简化消除一些必须有但显得很臃肿的 Java 代码的工具，通过使用对应的注解，可以在编译源码的时候生成对应的方法。")]),t._v(" "),n("ul",[n("li",[t._v("官网地址：https://projectlombok.org/")]),t._v(" "),n("li",[t._v("GitHub：https://github.com/rzwitserloot/lombok")])]),t._v(" "),n("h2",{attrs:{id:"idea-安装-lombok-插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#idea-安装-lombok-插件"}},[t._v("#")]),t._v(" IDEA 安装 Lombok 插件")]),t._v(" "),n("p",[t._v("IDEA 中依次点击 "),n("code",[t._v("File")]),t._v(" --\x3e "),n("code",[t._v("Settings")]),t._v(" --\x3e "),n("code",[t._v("Plugins")]),t._v(" 搜索 Lombok 安装即可")]),t._v(" "),n("p",[n("img",{attrs:{src:s(561),alt:"img"}})]),t._v(" "),n("h2",{attrs:{id:"查看是否安装成功"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看是否安装成功"}},[t._v("#")]),t._v(" 查看是否安装成功")]),t._v(" "),n("p",[n("img",{attrs:{src:s(562),alt:"img"}})]),t._v(" "),n("h2",{attrs:{id:"使用-lombok"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-lombok"}},[t._v("#")]),t._v(" 使用 Lombok")]),t._v(" "),n("h3",{attrs:{id:"pom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pom"}},[t._v("#")]),t._v(" POM")]),t._v(" "),n("p",[n("code",[t._v("pom.xml")]),t._v(" 中增加所需依赖，坐标如下：")]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.projectlombok"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("lombok"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.16.18"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("h3",{attrs:{id:"使用-data-注解简化-pojo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-data-注解简化-pojo"}},[t._v("#")]),t._v(" 使用 "),n("code",[t._v("@Data")]),t._v(" 注解简化 POJO")]),t._v(" "),n("p",[n("code",[t._v("@Data")]),t._v(" 包含了 "),n("code",[t._v("@ToString")]),t._v("，"),n("code",[t._v("@EqualsAndHashCode")]),t._v("，"),n("code",[t._v("@Getter/@Setter")]),t._v(" 和 "),n("code",[t._v("@RequiredArgsConstructor")]),t._v(" 的功能")]),t._v(" "),n("p",[t._v("其他相关注解请自行查阅：http://jnb.ociweb.com/jnb/jnbJan2010.html")]),t._v(" "),n("h3",{attrs:{id:"使用案例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用案例"}},[t._v("#")]),t._v(" 使用案例")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Data")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ItemCatNode")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Serializable")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@JsonProperty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"u"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@JsonProperty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@JsonProperty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"i"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:s(563),alt:"img"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);