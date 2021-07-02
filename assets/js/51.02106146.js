(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{1095:function(t,a,s){"use strict";s.r(a);var n=s(26),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"使用熔断器仪表盘监控"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用熔断器仪表盘监控"}},[t._v("#")]),t._v(" 使用熔断器仪表盘监控")]),t._v(" "),n("h2",{attrs:{id:"概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),n("p",[t._v("在 Ribbon 和 Feign 项目增加 Hystrix 仪表盘功能，两个项目的改造方式相同")]),t._v(" "),n("h2",{attrs:{id:"在-pom-xml-中增加依赖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在-pom-xml-中增加依赖"}},[t._v("#")]),t._v(" 在 "),n("code",[t._v("pom.xml")]),t._v(" 中增加依赖")]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.cloud"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-cloud-starter-netflix-hystrix-dashboard"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("h2",{attrs:{id:"在-application-中增加-enablehystrixdashboard-注解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在-application-中增加-enablehystrixdashboard-注解"}},[t._v("#")]),t._v(" 在 Application 中增加 "),n("code",[t._v("@EnableHystrixDashboard")]),t._v(" 注解")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dfd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hello"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spring"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cloud"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("web"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("admin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ribbon")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boot"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringApplication")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boot"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("autoconfigure"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringBootApplication")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cloud"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("client"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("discovery"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EnableDiscoveryClient")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cloud"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("netflix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hystrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EnableHystrix")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cloud"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("netflix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hystrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dashboard"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EnableHystrixDashboard")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@SpringBootApplication")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableDiscoveryClient")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableHystrix")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableHystrixDashboard")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebAdminRibbonApplication")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SpringApplication")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebAdminRibbonApplication")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"创建-hystrix-stream-的-servlet-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建-hystrix-stream-的-servlet-配置"}},[t._v("#")]),t._v(" 创建 "),n("code",[t._v("hystrix.stream")]),t._v(" 的 Servlet 配置")]),t._v(" "),n("p",[t._v("Spring Boot 2.x 版本开启 Hystrix Dashboard 与 Spring Boot 1.x 的方式略有不同，需要增加一个 "),n("code",[t._v("HystrixMetricsStreamServlet")]),t._v(" 的配置，代码如下：")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dfd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hello"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spring"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cloud"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("web"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("admin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ribbon"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("netflix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hystrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contrib"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("metrics"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eventstream"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HystrixMetricsStreamServlet")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boot"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("web"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("servlet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletRegistrationBean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Configuration")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HystrixDashboardConfiguration")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletRegistrationBean")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getServlet")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HystrixMetricsStreamServlet")]),t._v(" streamServlet "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HystrixMetricsStreamServlet")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletRegistrationBean")]),t._v(" registrationBean "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletRegistrationBean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("streamServlet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        registrationBean"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setLoadOnStartup")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        registrationBean"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addUrlMappings")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/hystrix.stream"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        registrationBean"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HystrixMetricsStreamServlet"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" registrationBean"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"测试-hystrix-dashboard"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试-hystrix-dashboard"}},[t._v("#")]),t._v(" 测试 Hystrix Dashboard")]),t._v(" "),n("p",[t._v("浏览器端访问 http://localhost:8764/hystrix 界面如下：")]),t._v(" "),n("p",[n("img",{attrs:{src:s(795),alt:"img"}})]),t._v(" "),n("p",[t._v("点击 Monitor Stream，进入下一个界面，访问 http://localhost:8764/hi?message=HelloRibbon 此时会出现监控界面：")]),t._v(" "),n("p",[n("img",{attrs:{src:s(796),alt:"img"}})]),t._v(" "),n("h2",{attrs:{id:"附-hystrix-说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#附-hystrix-说明"}},[t._v("#")]),t._v(" 附：Hystrix 说明")]),t._v(" "),n("h3",{attrs:{id:"什么情况下会触发-fallback-方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么情况下会触发-fallback-方法"}},[t._v("#")]),t._v(" 什么情况下会触发 "),n("code",[t._v("fallback")]),t._v(" 方法")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("名字")]),t._v(" "),n("th",[t._v("描述")]),t._v(" "),n("th",[t._v("触发fallback")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("EMIT")]),t._v(" "),n("td",[t._v("值传递")]),t._v(" "),n("td",[t._v("NO")])]),t._v(" "),n("tr",[n("td",[t._v("SUCCESS")]),t._v(" "),n("td",[t._v("执行完成，没有错误")]),t._v(" "),n("td",[t._v("NO")])]),t._v(" "),n("tr",[n("td",[t._v("FAILURE")]),t._v(" "),n("td",[t._v("执行抛出异常")]),t._v(" "),n("td",[t._v("YES")])]),t._v(" "),n("tr",[n("td",[t._v("TIMEOUT")]),t._v(" "),n("td",[t._v("执行开始，但没有在允许的时间内完成")]),t._v(" "),n("td",[t._v("YES")])]),t._v(" "),n("tr",[n("td",[t._v("BAD_REQUEST")]),t._v(" "),n("td",[t._v("执行抛出HystrixBadRequestException")]),t._v(" "),n("td",[t._v("NO")])]),t._v(" "),n("tr",[n("td",[t._v("SHORT_CIRCUITED")]),t._v(" "),n("td",[t._v("断路器打开，不尝试执行")]),t._v(" "),n("td",[t._v("YES")])]),t._v(" "),n("tr",[n("td",[t._v("THREAD_POOL_REJECTED")]),t._v(" "),n("td",[t._v("线程池拒绝，不尝试执行")]),t._v(" "),n("td",[t._v("YES")])]),t._v(" "),n("tr",[n("td",[t._v("SEMAPHORE_REJECTED")]),t._v(" "),n("td",[t._v("信号量拒绝，不尝试执行")]),t._v(" "),n("td",[t._v("YES")])])])]),t._v(" "),n("h3",{attrs:{id:"fallback-方法在什么情况下会抛出异常"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fallback-方法在什么情况下会抛出异常"}},[t._v("#")]),t._v(" "),n("code",[t._v("fallback")]),t._v(" 方法在什么情况下会抛出异常")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("名字")]),t._v(" "),n("th",[t._v("描述")]),t._v(" "),n("th",[t._v("抛异常")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("FALLBACK_EMIT")]),t._v(" "),n("td",[t._v("Fallback值传递")]),t._v(" "),n("td",[t._v("NO")])]),t._v(" "),n("tr",[n("td",[t._v("FALLBACK_SUCCESS")]),t._v(" "),n("td",[t._v("Fallback执行完成，没有错误")]),t._v(" "),n("td",[t._v("NO")])]),t._v(" "),n("tr",[n("td",[t._v("FALLBACK_FAILURE")]),t._v(" "),n("td",[t._v("Fallback执行抛出出错")]),t._v(" "),n("td",[t._v("YES")])]),t._v(" "),n("tr",[n("td",[t._v("FALLBACK_REJECTED")]),t._v(" "),n("td",[t._v("Fallback信号量拒绝，不尝试执行")]),t._v(" "),n("td",[t._v("YES")])]),t._v(" "),n("tr",[n("td",[t._v("FALLBACK_MISSING")]),t._v(" "),n("td",[t._v("没有Fallback实例")]),t._v(" "),n("td",[t._v("YES")])])])]),t._v(" "),n("h3",{attrs:{id:"hystrix-dashboard-界面监控参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hystrix-dashboard-界面监控参数"}},[t._v("#")]),t._v(" Hystrix Dashboard 界面监控参数")]),t._v(" "),n("p",[n("img",{attrs:{src:s(797),alt:"img"}})]),t._v(" "),n("h3",{attrs:{id:"hystrix-常用配置信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hystrix-常用配置信息"}},[t._v("#")]),t._v(" Hystrix 常用配置信息")]),t._v(" "),n("h4",{attrs:{id:"超时时间-默认1000ms-单位-ms"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#超时时间-默认1000ms-单位-ms"}},[t._v("#")]),t._v(" 超时时间（默认1000ms，单位：ms）")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("hystrix.command.default.execution.isolation.thread.timeoutInMilliseconds")]),t._v("：在调用方配置，被该调用方的所有方法的超时时间都是该值，优先级低于下边的指定配置")]),t._v(" "),n("li",[n("code",[t._v("hystrix.command.HystrixCommandKey.execution.isolation.thread.timeoutInMilliseconds")]),t._v("：在调用方配置，被该调用方的指定方法（HystrixCommandKey 方法名）的超时时间是该值")])]),t._v(" "),n("h4",{attrs:{id:"线程池核心线程数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#线程池核心线程数"}},[t._v("#")]),t._v(" 线程池核心线程数")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("hystrix.threadpool.default.coreSize")]),t._v("：默认为 10")])]),t._v(" "),n("h4",{attrs:{id:"queue"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#queue"}},[t._v("#")]),t._v(" Queue")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("hystrix.threadpool.default.maxQueueSize")]),t._v("：最大排队长度。默认 -1，使用 "),n("code",[t._v("SynchronousQueue")]),t._v("。其他值则使用 "),n("code",[t._v("LinkedBlockingQueue")]),t._v("。如果要从 -1 换成其他值则需重启，即该值不能动态调整，若要动态调整，需要使用到下边这个配置")]),t._v(" "),n("li",[n("code",[t._v("hystrix.threadpool.default.queueSizeRejectionThreshold")]),t._v("：排队线程数量阈值，默认为 5，达到时拒绝，如果配置了该选项，队列的大小是该队列")])]),t._v(" "),n("p",[n("strong",[t._v("注意：")]),t._v(" 如果 "),n("code",[t._v("maxQueueSize=-1")]),t._v(" 的话，则该选项不起作用")]),t._v(" "),n("h4",{attrs:{id:"断路器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#断路器"}},[t._v("#")]),t._v(" 断路器")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("hystrix.command.default.circuitBreaker.requestVolumeThreshold")]),t._v("：当在配置时间窗口内达到此数量的失败后，进行短路。默认 20 个（10s 内请求失败数量达到 20 个，断路器开）")]),t._v(" "),n("li",[n("code",[t._v("hystrix.command.default.circuitBreaker.sleepWindowInMilliseconds")]),t._v("：短路多久以后开始尝试是否恢复，默认 5s")]),t._v(" "),n("li",[n("code",[t._v("hystrix.command.default.circuitBreaker.errorThresholdPercentage")]),t._v("：出错百分比阈值，当达到此阈值后，开始短路。默认 50%")])]),t._v(" "),n("h4",{attrs:{id:"fallback"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fallback"}},[t._v("#")]),t._v(" fallback")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("hystrix.command.default.fallback.isolation.semaphore.maxConcurrentRequests")]),t._v("：调用线程允许请求 "),n("code",[t._v("HystrixCommand.GetFallback()")]),t._v(" 的最大数量，默认 10。超出时将会有异常抛出，注意：该项配置对于 THREAD 隔离模式也起作用")])]),t._v(" "),n("h4",{attrs:{id:"属性配置参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#属性配置参数"}},[t._v("#")]),t._v(" 属性配置参数")]),t._v(" "),n("ul",[n("li",[t._v("参数说明：https://github.com/Netflix/Hystrix/wiki/Configuration")]),t._v(" "),n("li",[t._v("HystrixProperty 参考代码：http://www.programcreek.com/java-api-examples/index.php?source_dir=Hystrix-master/hystrix-contrib/hystrix-javanica/src/test/java/com/netflix/hystrix/contrib/javanica/test/common/configuration/command/BasicCommandPropertiesTest.java")])])])}),[],!1,null,null,null);a.default=e.exports},795:function(t,a,s){t.exports=s.p+"assets/img/aHR0cHM6Ly93d3cuZmFuZ3poaXBlbmcuY29tL2ltZy9qaWFuc2h1LzIyNzk1OTQtNjRmNWZhOWQwZDk2ZWUyMS5wbmc.bc255484.png"},796:function(t,a,s){t.exports=s.p+"assets/img/aHR0cHM6Ly93d3cuZmFuZ3poaXBlbmcuY29tL2ltZy9qaWFuc2h1LzIyNzk1OTQtNzU1Y2Q3Y2U1YzA2NjY0OS5wbmc.0c37be90.png"},797:function(t,a,s){t.exports=s.p+"assets/img/20190813113644263.6d4b95b1.png"}}]);