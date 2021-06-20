(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{751:function(t,a,s){"use strict";s.r(a);var n=s(26),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"使用-spring-注解管理事务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-spring-注解管理事务"}},[t._v("#")]),t._v(" 使用 Spring 注解管理事务")]),t._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[t._v("通过 "),s("code",[t._v("@Transactional")]),t._v(" 注解方式，也可将事务织入到相应方法中。而使用注解方式，只需在配置文件中加入一个 "),s("code",[t._v("tx")]),t._v(" 标签，以告诉 Spring 使用注解来完成事务的织入。该标签只需指定一个属性，事务管理器。")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('\x3c!-- 开启事务注解驱动 --\x3e\n<tx:annotation-driven transaction-manager="transactionManager" />\n')])])]),s("h2",{attrs:{id:"transactional-注解简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transactional-注解简介"}},[t._v("#")]),t._v(" "),s("code",[t._v("@Transactional")]),t._v(" 注解简介")]),t._v(" "),s("p",[s("code",[t._v("@Transactional")]),t._v(" 的所有可选属性：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("propagation")]),t._v("：用于设置事务传播属性。该属性类型为 Propagation 枚举，默认值为 "),s("code",[t._v("Propagation.REQUIRED")]),t._v("。")]),t._v(" "),s("li",[s("code",[t._v("isolation")]),t._v("：用于设置事务的隔离级别。该属性类型为 Isolation 枚举 ，默认值为 "),s("code",[t._v("Isolation.DEFAULT")]),t._v("。")]),t._v(" "),s("li",[s("code",[t._v("readOnly")]),t._v("：用于设置该方法对数据库的操作是否是只读的。该属性为 boolean，默认值为 "),s("code",[t._v("false")]),t._v("。")]),t._v(" "),s("li",[s("code",[t._v("timeout")]),t._v("：用于设置本操作与数据库连接的超时时限。单位为秒，类型为 int，默认值为 -1，即没有时限。")]),t._v(" "),s("li",[s("code",[t._v("rollbackFor")]),t._v("：指定需要回滚的异常类。类型为 "),s("code",[t._v("Class[]")]),t._v("，默认值为空数组。当然，若只有一个异常类时，可以不使用数组。")]),t._v(" "),s("li",[s("code",[t._v("rollbackForClassName")]),t._v("：指定需要回滚的异常类类名。类型为 "),s("code",[t._v("String[]")]),t._v("，默认值为空数组。当然，若只有一个异常类时，可以不使用数组。")]),t._v(" "),s("li",[s("code",[t._v("noRollbackFor")]),t._v("：指定不需要回滚的异常类。类型为 "),s("code",[t._v("Class[]")]),t._v("，默认值为空数组。当然，若只有一个异常类时，可以不使用数组。")]),t._v(" "),s("li",[s("code",[t._v("noRollbackForClassName")]),t._v("： 指定不需要回滚的异常类类名。类型为 "),s("code",[t._v("String[]")]),t._v("，默认值为空数组。当然，若只有一个异常类时，可以不使用数组。")])]),t._v(" "),s("p",[t._v("需要注意的是，"),s("code",[t._v("@Transactional")]),t._v(" 若用在方法上，只能用于 "),s("code",[t._v("public")]),t._v(" 方法上。对于其他非 "),s("code",[t._v("public")]),t._v(" 方法，如果加上了注解 "),s("code",[t._v("@Transactional")]),t._v("，虽然 Spring 不会报错，但不会将指定事务织入到该方法中。因为 Spring 会忽略掉所有非 "),s("code",[t._v("public")]),t._v(" 方法上的 "),s("code",[t._v("@Transaction")]),t._v(" 注解。")]),t._v(" "),s("p",[t._v("若 "),s("code",[t._v("@Transaction")]),t._v(" 注解在类上，则表示该类上所有的方法均将在执行时织入事务。")]),t._v(" "),s("h2",{attrs:{id:"使用-transaction-注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-transaction-注解"}},[t._v("#")]),t._v(" 使用 "),s("code",[t._v("@Transaction")]),t._v(" 注解")]),t._v(" "),s("p",[t._v("使用起来很简单，只需要在需要增加事务的业务类上增加 "),s("code",[t._v("@Transaction")]),t._v(" 注解即可，案例代码如下：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transaction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aspectsj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("impl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transaction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aspectsj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dao"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TbContentCategoryDao")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transaction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aspectsj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TbContent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transaction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aspectsj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TbContentCategory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transaction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aspectsj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TbContentCategoryService")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transaction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aspectsj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TbContentService")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("beans"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("factory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Autowired")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stereotype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Service")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transaction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Transactional")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Transactional")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Service")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tbContentCategoryService"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TbContentCategoryServiceImpl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TbContentCategoryService")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Autowired")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TbContentCategoryDao")]),t._v(" tbContentCategoryDao"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Autowired")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TbContentService")]),t._v(" tbContentService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TbContentCategory")]),t._v(" tbContentCategory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TbContent")]),t._v(" tbContent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        tbContentCategoryDao"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tbContentCategory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        tbContentService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tbContent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);