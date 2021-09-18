(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{1179:function(a,s,t){"use strict";t.r(s);var n=t(26),p=Object(n.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"使用熔断器防止服务雪崩"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用熔断器防止服务雪崩"}},[a._v("#")]),a._v(" 使用熔断器防止服务雪崩")]),a._v(" "),n("h2",{attrs:{id:"概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),n("p",[a._v("在微服务架构中，根据业务来拆分成一个个的服务，服务与服务之间可以通过 "),n("code",[a._v("RPC")]),a._v(" 相互调用，在 Spring Cloud 中可以用 "),n("code",[a._v("RestTemplate + LoadBalanceClient")]),a._v(" 和 "),n("code",[a._v("Feign")]),a._v(" 来调用。为了保证其高可用，单个服务通常会集群部署。由于网络原因或者自身的原因，服务并不能保证 100% 可用，如果单个服务出现问题，调用这个服务就会出现线程阻塞，此时若有大量的请求涌入，"),n("code",[a._v("Servlet")]),a._v(" 容器的线程资源会被消耗完毕，导致服务瘫痪。服务与服务之间的依赖性，故障会传播，会对整个微服务系统造成灾难性的严重后果，这就是服务故障的 "),n("strong",[a._v("“雪崩”")]),a._v(" 效应。")]),a._v(" "),n("p",[a._v("为了解决这个问题，业界提出了熔断器模型。")]),a._v(" "),n("p",[a._v("阿里巴巴开源了 Sentinel 组件，实现了熔断器模式，Spring Cloud 对这一组件进行了整合。在微服务架构中，一个请求需要调用多个服务是非常常见的，如下图：")]),a._v(" "),n("p",[n("img",{attrs:{src:t(785),alt:"img"}})]),a._v(" "),n("p",[a._v("较底层的服务如果出现故障，会导致连锁故障。当对特定的服务的调用的不可用达到一个阀值熔断器将会被打开。")]),a._v(" "),n("p",[n("img",{attrs:{src:t(786),alt:"img"}})]),a._v(" "),n("p",[a._v("熔断器打开后，为了避免连锁故障，通过 "),n("code",[a._v("fallback")]),a._v(" 方法可以直接返回一个固定值。")]),a._v(" "),n("h2",{attrs:{id:"什么是-sentinel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是-sentinel"}},[a._v("#")]),a._v(" 什么是 Sentinel")]),a._v(" "),n("p",[a._v("随着微服务的流行，服务和服务之间的稳定性变得越来越重要。 Sentinel 以流量为切入点，从流量控制、熔断降级、系统负载保护等多个维度保护服务的稳定性。")]),a._v(" "),n("h2",{attrs:{id:"sentinel-的特征"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sentinel-的特征"}},[a._v("#")]),a._v(" Sentinel 的特征")]),a._v(" "),n("ul",[n("li",[n("strong",[a._v("丰富的应用场景：")]),a._v(" Sentinel 承接了阿里巴巴近 10 年的 "),n("strong",[a._v("双十一大促流量")]),a._v(" 的核心场景，例如秒杀（即突发流量控制在系统容量可以承受的范围）、消息削峰填谷、实时熔断下游不可用应用等。")]),a._v(" "),n("li",[n("strong",[a._v("完备的实时监控：")]),a._v(" Sentinel 同时提供实时的监控功能。您可以在控制台中看到接入应用的单台机器秒级数据，甚至 500 台以下规模的集群的汇总运行情况。")]),a._v(" "),n("li",[n("strong",[a._v("广泛的开源生态：")]),a._v(" Sentinel 提供开箱即用的与其它开源框架/库的整合模块，例如与 Spring Cloud、Dubbo、gRPC 的整合。您只需要引入相应的依赖并进行简单的配置即可快速地接入 Sentinel。")]),a._v(" "),n("li",[n("strong",[a._v("完善的 SPI 扩展点：")]),a._v(" Sentinel 提供简单易用、完善的 SPI 扩展点。您可以通过实现扩展点，快速的定制逻辑。例如定制规则管理、适配数据源等。")])]),a._v(" "),n("h2",{attrs:{id:"feign-中使用-sentinel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#feign-中使用-sentinel"}},[a._v("#")]),a._v(" Feign 中使用 Sentinel")]),a._v(" "),n("p",[a._v("如果要在您的项目中引入 Sentinel，使用 group ID 为 "),n("code",[a._v("org.springframework.cloud")]),a._v(" 和 artifact ID 为 "),n("code",[a._v("spring-cloud-starter-alibaba-sentinel")]),a._v(" 的 starter。")]),a._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("org.springframework.cloud"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("spring-cloud-starter-alibaba-sentinel"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),n("p",[a._v("Sentinel 适配了 Feign 组件。但默认是关闭的。需要在配置文件中配置打开它，在配置文件增加以下代码：")]),a._v(" "),n("div",{staticClass:"language-yaml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("feign")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("sentinel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("enabled")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n")])])]),n("h3",{attrs:{id:"在-service-中增加-fallback-指定类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在-service-中增加-fallback-指定类"}},[a._v("#")]),a._v(" 在 Service 中增加 fallback 指定类")]),a._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dfd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("hello"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("spring"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cloud"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("alibaba"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("nacos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("consumer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("feign"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("service")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dfd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("hello"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("spring"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cloud"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("alibaba"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("nacos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("consumer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("feign"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fallback"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("EchoServiceFallback")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cloud"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("openfeign"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FeignClient")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("web"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("bind"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("annotation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("GetMapping")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("web"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("bind"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("annotation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PathVariable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@FeignClient")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"nacos-provider"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" fallback "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("EchoServiceFallback")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("interface")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("EchoService")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@GetMapping")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/echo/{message}"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("echo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@PathVariable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"message"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),n("h3",{attrs:{id:"创建熔断器类并实现对应的-feign-接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建熔断器类并实现对应的-feign-接口"}},[a._v("#")]),a._v(" 创建熔断器类并实现对应的 Feign 接口")]),a._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dfd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("hello"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("spring"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cloud"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("alibaba"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("nacos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("consumer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("feign"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fallback")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dfd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("hello"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("spring"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cloud"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("alibaba"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("nacos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("consumer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("feign"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("EchoService")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("stereotype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Component")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Component")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("EchoServiceFallback")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("EchoService")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("echo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"echo fallback"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),n("h2",{attrs:{id:"测试熔断器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试熔断器"}},[a._v("#")]),a._v(" 测试熔断器")]),a._v(" "),n("p",[a._v("此时我们关闭服务提供者，再次请求 http://localhost:9092/echo/hi 浏览器会显示：")]),a._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[a._v("echo fallback\n")])])])])}),[],!1,null,null,null);s.default=p.exports},785:function(a,s){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqYAAAFtCAYAAADVvKh1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAB8GSURBVHhe7dvBr2VHnR/w/C/jELnHqInELqssIlYgWEQjeRsWWLLigHHDIpHGZDWAlEijkVALpBDcZhGzGZxoLKSAAtsQmSjKApDSThaYxQjPgu3NO6+7cFH63Vevx32rfl31+UhfnXN+51zfx3PNq+883/cPTgAAkMB1MX3xrYenT37rlzI4x/cdYHcvvX7/9KnPf00G5/i+E/v5n98//bd/8W9lcI7v+3UxjUqTjAnA7qLSJGNCLCpNMiaK6eQA7C4qTDImxKLCJGOimE4OwO6iwiRjQiwqTDImiunkAOwuKkwyJsSiwiRjophODsDuosIkY0IsKkwyJorp5ADsLipMMibEosIkY6KYTg7A7qLCJGNCLCpMMiaK6eQA7C4qTDImxKLCJGOimE4OwO6iwiRjQiwqTDImiunkAOwuKkwyJsSiwiRjophODsDuosIkY0IsKkwyJorp5ADsLipMMibEosIkY6KYTg7A7qLCJGNCLCpMMiaK6eQA7C4qTDImxKLCJGOimE4OwO6iwiRjQiwqTDImiunkAOwuKkwyJsSiwiRjophODsDuosIkY0IsKkwyJorp5ADsLipMMibEosIkY6KYTg7A7qLCJGNCLCpMMiaK6eQA7C4qTDImxKLCJGOimE4OwO6iwiRjQiwqTDIm04pp+77t9ZPM6/MorXOzGQHYXVSYMudZ/JrPhVhUmLLlWfk6nzRTf2Pavnd73c5uOm+V15x7XTm256MDsLuoMF06rWh26L2u1j77LIRYVJgukVY0O/ReV2uffdaS9j/ll6+rHG9zXo5tWudmMwKwu6gwXTr1+5bzcmzn7XU5tvO/Tz7Ka59GiEWF6RKp36ucl2M7b6/LsZ3/fXLTa2+6d4mkKKbnlHv1c+15Obbzm1I/U5/PSO2ddx+ePv31H55++8HvH08A1vH+1c+2z1z9jPvRLx4+njwSFaZLp37fcl6O7TxKLbp/23zU13/U1Hbcg86tyagwXSL1e5XzcmznUWrR/dvm3OuL6N6lkuYzpu28PbY5N79N2te21yNz+NVvfnf67DfePn3i3punj997cD0DWNELX35wuvuV758+9823T79+/4PrWVSYLp1WmdX36udLit7sNimvKccZOey+B0VrMipMl0irzOp79fMlRW92m5TXlGObc/NLJcVnTMsxmpVjfb/nSZ8v6teNymtv/PR09+qHwZ/8y++ennvlu6eXv/OTx18NwHq+8O0fn567+nl3/My7+9qbVz8DfxYWpkvn0J6XY5Sivq7vl9mhnZ9LebYcZ8QeFK/JqDBdIof2vByjFPV1fb/MDu38XMqz5djm3PxSSfMZ0/J1nDuWtNdtbnu/HGfmY1/9wen5L75x/X8MR+68+uAP55InL/7l31yvF1jVscajtX+p3Hn1w597z3/pe6c7L98PS9Mlc2jPI+WZNjfdu23KP6McR+f4vtuDHqVdk//s6nsTlaannUN7HinPtLnp3m1T/hnl2Obc/FJ55otp77qeH3qz0fH/reZ3/LuBlY1c45l+Y1ors+hY0lM/e5vUovsjYg+a/xvTWplFx5Ke+tnbpHbufjS/VKYX0/r9o/NybOdPcn2oZ22K6N6lc/ijz/dc/R8FuSimrG7kGr/+PN+9HJ8xbc/PHdtE82h2U9rn2+tROey+B0VrMipMl0j9XuX83LFNNI9mN6V9vr0+N7tkUnzGtD4vx3Yepdwrx3NpnZvNSO2dd9+7/utAf5Wfi2LK6kat8Q//Avq9x5NHosJ06dTvW87LsT1vE92LZjelfb69HpXajnvQuTUZFaZLpH6vcl6O7Xmb6F40uynt8+31udklM62Ytu9brsuxnbezQ33d3j93Xc7LsT0fHfJTTFnd7DUeFaZLp37fcn7uWCea3TSPUouuR4ZYVJgukfq9yvm5Y51odtM8Si26Pje7dFJ8xvTc11Ccu67T6t1r1c+PDPkppqxut2Jav2fRnrfPRddldmjnz0qIRYXpaad+n6I9b5+Lrsvs0M6fxaT546ddQ36KKavb8Tem8ijEosIkY6KYTg75KaasTjHdN8SiwiRjophODvkppqxOMd03xKLCJGOimE4O+SmmrE4x3TfEosIkY6KYTg75KaasTjHdN8SiwiRjophODvkppqxOMd03xKLCJGOimE4O+SmmrE4x3TfEosIkY6KYTg75KaasTjHdN8SiwiRjophODvkppqxOMd03xKLCJGOimE4O+SmmrE4x3TfEosIkY6KYTg75KaasTjHdN8SiwiRjophODvkppqxOMd03xKLCJGOimE4O+SmmrE4x3TfEosIkY6KYTg75KaasTjHdN8SiwiRjophODvkppqxOMd03xKLCJGOimE4O+SmmrE4x3TfEosIkY6KYTg75KaasTjHdN8SiwiRjophODvkppqxOMd03xKLCJGOimE4O+SmmrE4x3TfEosIkY6KYTg75KaasTjHdN8SiwiRjophODvkppqxOMd03xKLCJGOimE4O+SmmrE4x3TfEosIkY3JdTF9862FYmuSyOb7v5KeYsrrZa/yl1++HpUkum+P7Tuznf34/LE1y2Rzf9+tiCpynmLI6axzIQjGFDps2q7PGgSwUU+iwabM6axzIQjGFDps2q7PGgSwUU+iwabM6axzIQjGFDps2q7PGgSwUU+iwabM6axzIQjGFDps2q7PGgSwUU+iwabM6axzIQjGFDps2q7PGgSwUU+iwabM6axzIQjGFDps2q7PGgSwUU+iwabM6axzIQjGFDps2q7PGgSwUU+iwabM6axzIQjGFDps2q7PGgSwUU+iwabM6axzIQjGFDps2q7PGgSwUU+iwabM6axzIQjGFDps2q7PGgSwUU+iwabM6axzIQjGFDps2q7PGgSwUU+iwabM6axzIQjGFDps2q7PGgSwUU+iwabM6axzIQjGFDps2q7PGgSwUU+iwabM6axzIQjGFDps2q7PGgSwUU+iwabM6axzIQjGFDps2q7PGgSwUU+iwabM6axzIQjGFDps2q7PGgSwUU+iwabM6axzIQjGFDps2q7PGgSwUU+iwabM6axzIQjGFDps2q7PGgSwUU+iwabM6axzIQjGFDps2q7PGgSwUU+iwabM6axzIQjGFDps2q7PGgSwUU+iwabM6axzIQjGFDps2q7PGgSwUU+iwabM6axzIQjGFDps2q7PGgSwUU+iwabM6axzIQjGFDps2q7PGgSyui+mLbz08ffJbv5TBOb7v5GfTZnWz1/hLr98/ferzX5PBOb7vkM11MY1Kk4wJ+SmmrG72Go9Kk4wJZKOYTg75KaasTjHdN5CNYjo55KeYsjrFdN9ANorp5JCfYsrqFNN9A9koppNDfoopq1NM9w1ko5hODvkppqxOMd03kI1iOjnkp5iyOsV030A2iunkkJ9iyuoU030D2Simk0N+iimrU0z3DWSjmE4O+SmmrE4x3TeQjWI6OeSnmLI6xXTfQDaK6eSQ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"},786:function(a,s,t){a.exports=t.p+"assets/img/Lusifer201901080205008.a1d2712f.png"}}]);