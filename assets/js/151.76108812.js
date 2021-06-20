(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{699:function(t,a,e){"use strict";e.r(a);var v=e(26),r=Object(v.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"maven-pom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maven-pom"}},[t._v("#")]),t._v(" Maven POM")]),t._v(" "),e("h2",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),e("p",[t._v("POM 代表项目对象模型。它是 Maven 中工作的基本单位，这是一个 XML 文件。它始终保存在该项目基本目录中的 pom.xml 文件。")]),t._v(" "),e("p",[t._v("POM 包含的项目是使用 Maven 来构建的，它用来包含各种配置信息。")]),t._v(" "),e("p",[t._v("POM 也包含了目标和插件。在执行任务或目标时，Maven 会使用当前目录中的 POM。它读取POM得到所需要的配置信息，然后执行目标。部分的配置可以在 POM 使用如下：")]),t._v(" "),e("ul",[e("li",[t._v("project dependencies")]),t._v(" "),e("li",[t._v("plugins")]),t._v(" "),e("li",[t._v("goals")]),t._v(" "),e("li",[t._v("build profiles")]),t._v(" "),e("li",[t._v("project version")]),t._v(" "),e("li",[t._v("developers")]),t._v(" "),e("li",[t._v("mailing list")])]),t._v(" "),e("p",[t._v("创建一个POM之前，应该要先决定项目组(groupId)，它的名字(artifactId)和版本，因为这些属性在项目仓库是唯一标识的。")]),t._v(" "),e("h2",{attrs:{id:"pom-的例子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pom-的例子"}},[t._v("#")]),t._v(" POM 的例子")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<project xmlns="http://maven.apache.org/POM/4.0.0"\n   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n   xsi:schemaLocation="http://maven.apache.org/POM/4.0.0\n   http://maven.apache.org/xsd/maven-4.0.0.xsd">\n   <modelVersion>4.0.0</modelVersion>\n   <groupId>com.lusifer</groupId>\n   <artifactId>project</artifactId>\n   <version>1.0</version>\n<project>\n')])])]),e("p",[t._v("要注意的是，每个项目只有一个 POM 文件")]),t._v(" "),e("ul",[e("li",[t._v("所有的 POM 文件要项目元素必须有三个必填字段: groupId，artifactId，version")]),t._v(" "),e("li",[t._v("在库中的项目符号是："),e("code",[t._v("groupId:artifactId:version")])]),t._v(" "),e("li",[e("code",[t._v("pom.xml")]),t._v(" 的根元素是 project，它有三个主要的子节点。")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("节点")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("groupId")]),t._v(" "),e("td",[t._v("这是项目组的编号，这在组织或项目中通常是独一无二的。 例如，一家银行集团 "),e("code",[t._v("com.company.bank")]),t._v(" 拥有所有银行相关项目。")])]),t._v(" "),e("tr",[e("td",[t._v("artifactId")]),t._v(" "),e("td",[t._v("这是项目的 ID。这通常是项目的名称。 例如，"),e("code",[t._v("consumer-banking")]),t._v("。 除了 groupId 之外，artifactId 还定义了 artifact 在存储库中的位置。")])]),t._v(" "),e("tr",[e("td",[t._v("version")]),t._v(" "),e("td",[t._v("这是项目的版本。与 groupId 一起使用，artifact 在存储库中用于将版本彼此分离。 例如："),e("code",[t._v("com.company.bank:consumer-banking:1.0")]),t._v("，"),e("code",[t._v("com.company.bank:consumer-banking:1.1")])])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);