(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{715:function(v,_,t){"use strict";t.r(_);var d=t(26),r=Object(d.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"druid-简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#druid-简介"}},[v._v("#")]),v._v(" Druid 简介")]),v._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[v._v("#")]),v._v(" 概述")]),v._v(" "),t("p",[v._v("Druid 是阿里巴巴开源平台上的一个项目，整个项目由数据库连接池、插件框架和 SQL 解析器组成。该项目主要是为了扩展 JDBC 的一些限制，可以让程序员实现一些特殊的需求，比如向密钥服务请求凭证、统计 SQL 信息、SQL 性能收集、SQL 注入检查、SQL 翻译等，程序员可以通过定制来实现自己需要的功能。")]),v._v(" "),t("h2",{attrs:{id:"各种连接池性能对比测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#各种连接池性能对比测试"}},[v._v("#")]),v._v(" 各种连接池性能对比测试")]),v._v(" "),t("p",[v._v("测试执行申请归还连接 1,000,000（一百万）次总耗时性能对比。")]),v._v(" "),t("h3",{attrs:{id:"测试环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试环境"}},[v._v("#")]),v._v(" 测试环境")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("环境")]),v._v(" "),t("th",[v._v("版本")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("OS")]),v._v(" "),t("td",[v._v("OS X 10.8.2")])]),v._v(" "),t("tr",[t("td",[v._v("CPU")]),v._v(" "),t("td",[v._v("Intel i7 2GHz 4 Core")])]),v._v(" "),t("tr",[t("td",[v._v("JVM")]),v._v(" "),t("td",[v._v("Java Version 1.7.0_05")])])])]),v._v(" "),t("h3",{attrs:{id:"基准测试结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基准测试结果"}},[v._v("#")]),v._v(" 基准测试结果")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("Jdbc Connection Pool")]),v._v(" "),t("th",[v._v("1 thread")]),v._v(" "),t("th",[v._v("2 threads")]),v._v(" "),t("th",[v._v("5 threads")]),v._v(" "),t("th",[v._v("10 threads")]),v._v(" "),t("th",[v._v("20 threads")]),v._v(" "),t("th",[v._v("50 threads")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("Druid")]),v._v(" "),t("td",[v._v("898")]),v._v(" "),t("td",[v._v("1,191")]),v._v(" "),t("td",[v._v("1,324")]),v._v(" "),t("td",[v._v("1,362")]),v._v(" "),t("td",[v._v("1,325")]),v._v(" "),t("td",[v._v("1,459")])]),v._v(" "),t("tr",[t("td",[v._v("tomcat-jdbc")]),v._v(" "),t("td",[v._v("1,269")]),v._v(" "),t("td",[v._v("1,378")]),v._v(" "),t("td",[v._v("2,029")]),v._v(" "),t("td",[v._v("2,103")]),v._v(" "),t("td",[v._v("1,879")]),v._v(" "),t("td",[v._v("2,025")])]),v._v(" "),t("tr",[t("td",[v._v("DBCP")]),v._v(" "),t("td",[v._v("2,324")]),v._v(" "),t("td",[v._v("5,055")]),v._v(" "),t("td",[v._v("5,446")]),v._v(" "),t("td",[v._v("5,471")]),v._v(" "),t("td",[v._v("5,524")]),v._v(" "),t("td",[v._v("5,415")])]),v._v(" "),t("tr",[t("td",[v._v("BoneCP")]),v._v(" "),t("td",[v._v("3,738")]),v._v(" "),t("td",[v._v("3,150")]),v._v(" "),t("td",[v._v("3,194")]),v._v(" "),t("td",[v._v("5,681")]),v._v(" "),t("td",[v._v("11,018")]),v._v(" "),t("td",[v._v("23,125")])]),v._v(" "),t("tr",[t("td",[v._v("jboss-datasource")]),v._v(" "),t("td",[v._v("4,377")]),v._v(" "),t("td",[v._v("2,988")]),v._v(" "),t("td",[v._v("3,680")]),v._v(" "),t("td",[v._v("3,980")]),v._v(" "),t("td",[v._v("32,708")]),v._v(" "),t("td",[v._v("37,742")])]),v._v(" "),t("tr",[t("td",[v._v("C3P0")]),v._v(" "),t("td",[v._v("10,841")]),v._v(" "),t("td",[v._v("13,637")]),v._v(" "),t("td",[v._v("10,682")]),v._v(" "),t("td",[v._v("11,055")]),v._v(" "),t("td",[v._v("14,497")]),v._v(" "),t("td",[v._v("20,351")])]),v._v(" "),t("tr",[t("td",[v._v("Proxool")]),v._v(" "),t("td",[v._v("16,337")]),v._v(" "),t("td",[v._v("16,187")]),v._v(" "),t("td",[v._v("18,310(Exception)")]),v._v(" "),t("td",[v._v("25,945")]),v._v(" "),t("td",[v._v("33,706(Exception)")]),v._v(" "),t("td",[v._v("39,501 (Exception)")])])])]),v._v(" "),t("h3",{attrs:{id:"结论"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[v._v("#")]),v._v(" 结论")]),v._v(" "),t("ul",[t("li",[v._v("Druid 是性能最好的数据库连接池，tomcat-jdbc 和 druid 性能接近。")]),v._v(" "),t("li",[v._v("proxool 在激烈并发时会抛异常，完全不靠谱。")]),v._v(" "),t("li",[v._v("c3p0 和 proxool 都相当慢，慢到影响 sql 执行效率的地步。")]),v._v(" "),t("li",[v._v("bonecp 性能并不优越，采用 LinkedTransferQueue 并没有能够获得性能提升。")]),v._v(" "),t("li",[v._v("除了 bonecp，其他的在 JDK 7 上跑得比 JDK 6 上快")]),v._v(" "),t("li",[v._v("jboss-datasource 虽然稳定，但是性能很糟糕")])])])}),[],!1,null,null,null);_.default=r.exports}}]);