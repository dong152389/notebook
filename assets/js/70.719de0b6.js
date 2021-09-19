(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{532:function(a,t,s){a.exports=s.p+"assets/img/Lusifer_20181022015716.3c758726.png"},533:function(a,t,s){a.exports=s.p+"assets/img/Lusifer_20181022015801.1a263118.png"},964:function(a,t,s){"use strict";s.r(t);var n=s(26),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"dubbo-的负载均衡"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dubbo-的负载均衡"}},[a._v("#")]),a._v(" Dubbo 的负载均衡")]),a._v(" "),n("h2",{attrs:{id:"概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),n("p",[a._v("在集群负载均衡时，Dubbo 提供了多种均衡策略，缺省为 "),n("code",[a._v("random")]),a._v(" 随机调用。")]),a._v(" "),n("h2",{attrs:{id:"负载均衡策略"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡策略"}},[a._v("#")]),a._v(" 负载均衡策略")]),a._v(" "),n("h3",{attrs:{id:"random-loadbalance"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#random-loadbalance"}},[a._v("#")]),a._v(" Random LoadBalance")]),a._v(" "),n("ul",[n("li",[n("strong",[a._v("随机")]),a._v("，按权重设置随机概率。")]),a._v(" "),n("li",[a._v("在一个截面上碰撞的概率高，但调用量越大分布越均匀，而且按概率使用权重后也比较均匀，有利于动态调整提供者权重。")])]),a._v(" "),n("h3",{attrs:{id:"roundrobin-loadbalance"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#roundrobin-loadbalance"}},[a._v("#")]),a._v(" RoundRobin LoadBalance")]),a._v(" "),n("ul",[n("li",[n("strong",[a._v("轮询")]),a._v("，按公约后的权重设置轮询比率。")]),a._v(" "),n("li",[a._v("存在慢的提供者累积请求的问题，比如：第二台机器很慢，但没挂，当请求调到第二台时就卡在那，久而久之，所有请求都卡在调到第二台上。")])]),a._v(" "),n("h3",{attrs:{id:"leastactive-loadbalance"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#leastactive-loadbalance"}},[a._v("#")]),a._v(" LeastActive LoadBalance")]),a._v(" "),n("ul",[n("li",[n("strong",[a._v("最少活跃调用数")]),a._v("，相同活跃数的随机，活跃数指调用前后计数差。")]),a._v(" "),n("li",[a._v("使慢的提供者收到更少请求，因为越慢的提供者的调用前后计数差会越大。")])]),a._v(" "),n("h3",{attrs:{id:"consistenthash-loadbalance"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#consistenthash-loadbalance"}},[a._v("#")]),a._v(" ConsistentHash LoadBalance")]),a._v(" "),n("ul",[n("li",[n("strong",[a._v("一致性 Hash")]),a._v("，相同参数的请求总是发到同一提供者。")]),a._v(" "),n("li",[a._v("当某一台提供者挂时，原本发往该提供者的请求，基于虚拟节点，平摊到其它提供者，不会引起剧烈变动。")]),a._v(" "),n("li",[a._v("算法参见：http://en.wikipedia.org/wiki/Consistent_hashing")]),a._v(" "),n("li",[a._v("缺省只对第一个参数 Hash，如果要修改，请配置 "),n("code",[a._v('<dubbo:parameter key="hash.arguments" value="0,1" />')])]),a._v(" "),n("li",[a._v("缺省用 160 份虚拟节点，如果要修改，请配置 "),n("code",[a._v('<dubbo:parameter key="hash.nodes" value="320" />')])])]),a._v(" "),n("h2",{attrs:{id:"配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[a._v("#")]),a._v(" 配置")]),a._v(" "),n("h3",{attrs:{id:"服务端服务级别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#服务端服务级别"}},[a._v("#")]),a._v(" 服务端服务级别")]),a._v(" "),n("div",{staticClass:"language-yaml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("dubbo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("provider")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("loadbalance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" leastactive\n")])])]),n("h3",{attrs:{id:"客户端服务级别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#客户端服务级别"}},[a._v("#")]),a._v(" 客户端服务级别")]),a._v(" "),n("div",{staticClass:"language-yaml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("dubbo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("consumer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("loadbalance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" leastactive\n")])])]),n("h2",{attrs:{id:"测试负载均衡"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试负载均衡"}},[a._v("#")]),a._v(" 测试负载均衡")]),a._v(" "),n("h3",{attrs:{id:"修改-userserviceimpl-代码为"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修改-userserviceimpl-代码为"}},[a._v("#")]),a._v(" 修改 "),n("code",[a._v("UserServiceImpl")]),a._v(" 代码为")]),a._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dfd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("hello"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dubbo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("provider"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("impl")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("alibaba"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dubbo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("annotation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Service")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dfd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("hello"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("dubbo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("service"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("user"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("UserService")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("org"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("beans"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("factory"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("annotation"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Value")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Service")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("version "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"${user.service.version}"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("UserServiceImpl")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("UserService")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Value")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"${dubbo.protocol.port}"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" port"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("sayHi")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello Dubbo , i am from port:"')]),a._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" port"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),n("p",[a._v("注入了端口属性，当消费者访问时可以看出是从哪个端口请求的数据。")]),a._v(" "),n("h3",{attrs:{id:"修改负载均衡策略为轮询"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修改负载均衡策略为轮询"}},[a._v("#")]),a._v(" 修改负载均衡策略为轮询")]),a._v(" "),n("div",{staticClass:"language-yaml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("dubbo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("provider")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("loadbalance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" roundrobin\n")])])]),n("h3",{attrs:{id:"测试访问"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试访问"}},[a._v("#")]),a._v(" 测试访问")]),a._v(" "),n("p",[a._v("修改端口号并分别启动服务提供者，此时访问服务消费者：http://localhost:9090/hi")]),a._v(" "),n("p",[a._v("浏览器会交替显示：")]),a._v(" "),n("div",{staticClass:"language-text extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("Hello Dubbo , i am from port:12345\nHello Dubbo , i am from port:12346\n")])])]),n("h2",{attrs:{id:"附-在-idea-中配置一个工程启动多个实例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#附-在-idea-中配置一个工程启动多个实例"}},[a._v("#")]),a._v(" 附：在 IDEA 中配置一个工程启动多个实例")]),a._v(" "),n("h3",{attrs:{id:"步骤一"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#步骤一"}},[a._v("#")]),a._v(" 步骤一")]),a._v(" "),n("p",[a._v("点击 "),n("code",[a._v("Run -> Edit Configurations...")])]),a._v(" "),n("p",[n("img",{attrs:{src:s(532),alt:"img"}})]),a._v(" "),n("h3",{attrs:{id:"步骤二"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#步骤二"}},[a._v("#")]),a._v(" 步骤二")]),a._v(" "),n("p",[a._v("选择需要启动多实例的项目并去掉 "),n("code",[a._v("Single instance only")]),a._v(" 前面的勾")]),a._v(" "),n("p",[n("img",{attrs:{src:s(533),alt:"img"}})]),a._v(" "),n("h3",{attrs:{id:"步骤三"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#步骤三"}},[a._v("#")]),a._v(" 步骤三")]),a._v(" "),n("p",[a._v("通过修改 "),n("code",[a._v("application.yml")]),a._v(" 配置文件的 "),n("code",[a._v("dubbo.protocol.port")]),a._v(" 的端口，启动多个实例，需要多个端口，分别进行启动即可。")])])}),[],!1,null,null,null);t.default=e.exports}}]);