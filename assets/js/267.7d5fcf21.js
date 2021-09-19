(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{1087:function(e,o,n){"use strict";n.r(o);var a=n(26),r=Object(a.a)({},(function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"第一个-log4j-日志文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第一个-log4j-日志文件"}},[e._v("#")]),e._v(" 第一个 Log4j 日志文件")]),e._v(" "),n("h2",{attrs:{id:"slf4j-简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#slf4j-简介"}},[e._v("#")]),e._v(" Slf4j 简介")]),e._v(" "),n("p",[e._v("slf4j 的全称是 Simple Loging Facade For Java，即它仅仅是一个为 Java 程序提供日志输出的统一接口，并不是一个具体的日志实现方案，就比如 JDBC 一样，只是一种规则而已。所以单独的 slf4j 是不能工作的，必须搭配其他具体的日志实现方案，比如 apache 的 "),n("code",[e._v("org.apache.log4j.Logger")]),e._v("，JDK 自带的 "),n("code",[e._v("java.util.logging.Logger")]),e._v(" 以及 "),n("code",[e._v("log4j")]),e._v(" 等。")]),e._v(" "),n("h2",{attrs:{id:"pom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pom"}},[e._v("#")]),e._v(" POM")]),e._v(" "),n("p",[e._v("继续之前的项目，"),n("code",[e._v("pom.xml")]),e._v(" 配置如下：")]),e._v(" "),n("div",{staticClass:"language-text extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>com.dfd</groupId>\n    <artifactId>hello-spring</artifactId>\n    <version>1.0.0-SNAPSHOT</version>\n    <packaging>jar</packaging>\n\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework</groupId>\n            <artifactId>spring-context</artifactId>\n            <version>4.3.17.RELEASE</version>\n        </dependency>\n        <dependency>\n            <groupId>junit</groupId>\n            <artifactId>junit</artifactId>\n            <version>4.12</version>\n            <scope>test</scope>\n        </dependency>\n        <dependency>\n            <groupId>org.slf4j</groupId>\n            <artifactId>slf4j-log4j12</artifactId>\n            <version>1.7.25</version>\n        </dependency>\n    </dependencies>\n</project>\n')])])]),n("p",[e._v("主要增加了 "),n("code",[e._v("org.slf4j:slf4j-log4j12")]),e._v(" 依赖")]),e._v(" "),n("h2",{attrs:{id:"创建-log4j-properties-配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建-log4j-properties-配置文件"}},[e._v("#")]),e._v(" 创建 "),n("code",[e._v("log4j.properties")]),e._v(" 配置文件")]),e._v(" "),n("p",[e._v("在 "),n("code",[e._v("src/main/resources")]),e._v(" 目录下创建名为 "),n("code",[e._v("log4j.properties")]),e._v(" 的属性配置文件")]),e._v(" "),n("div",{staticClass:"language-text extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("log4j.rootLogger=INFO, console, file\n\nlog4j.appender.console=org.apache.log4j.ConsoleAppender\nlog4j.appender.console.layout=org.apache.log4j.PatternLayout\nlog4j.appender.console.layout.ConversionPattern=%d %p [%c] - %m%n\n\nlog4j.appender.file=org.apache.log4j.DailyRollingFileAppender\nlog4j.appender.file.File=logs/log.log\nlog4j.appender.file.layout=org.apache.log4j.PatternLayout\nlog4j.appender.A3.MaxFileSize=1024KB\nlog4j.appender.A3.MaxBackupIndex=10\nlog4j.appender.file.layout.ConversionPattern=%d %p [%c] - %m%n\n")])])]),n("p",[e._v("日志配置相关说明：")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("log4j.rootLogger")]),e._v("：根日志，配置了日志级别为 "),n("code",[e._v("INFO")]),e._v("，预定义了名称为 "),n("code",[e._v("console")]),e._v("、"),n("code",[e._v("file")]),e._v(" 两种附加器")]),e._v(" "),n("li",[n("code",[e._v("log4j.appender.console")]),e._v("：console 附加器，日志输出位置在控制台")]),e._v(" "),n("li",[n("code",[e._v("log4j.appender.console.layout")]),e._v("：console 附加器，采用匹配器布局模式")]),e._v(" "),n("li",[n("code",[e._v("log4j.appender.console.layout.ConversionPattern")]),e._v("：console 附加器，日志输出格式为：日期 日志级别 [类名] - 消息"),n("code",[e._v("换行符")])]),e._v(" "),n("li",[n("code",[e._v("log4j.appender.file")]),e._v("：file 附加器，每天产生一个日志文件")]),e._v(" "),n("li",[n("code",[e._v("log4j.appender.file.File")]),e._v("：file 附加器，日志文件输出位置 "),n("code",[e._v("logs/log.log")])]),e._v(" "),n("li",[n("code",[e._v("log4j.appender.file.layout")]),e._v("：file 附加器，采用匹配器布局模式")]),e._v(" "),n("li",[n("code",[e._v("log4j.appender.A3.MaxFileSize")]),e._v("：日志文件最大值")]),e._v(" "),n("li",[n("code",[e._v("log4j.appender.A3.MaxBackupIndex")]),e._v("：最多纪录文件数")]),e._v(" "),n("li",[n("code",[e._v("log4j.appender.file.layout.ConversionPattern")]),e._v("：file 附加器，日志输出格式为：日期 日志级别 [类名] - 消息"),n("code",[e._v("换行符")])])]),e._v(" "),n("h2",{attrs:{id:"测试日志输出"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试日志输出"}},[e._v("#")]),e._v(" 测试日志输出")]),e._v(" "),n("p",[e._v("创建一个测试类，并测试日志输出效果，代码如下：")]),e._v(" "),n("div",{staticClass:"language-text extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('package com.dfd.hello.spring;\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class MyTest {\n\n    public static final Logger logger = LoggerFactory.getLogger(MyTest.class);\n\n    public static void main(String[] args) {\n        logger.info("slf4j for info");\n        logger.debug("slf4j for debug");\n        logger.error("slf4j for error");\n        logger.warn("slf4j for warn");\n\n        String message = "Hello SLF4J";\n        logger.info("slf4j message is : {}", message);\n    }\n}\n')])])]),n("p",[e._v("此时控制台显示为：")]),e._v(" "),n("div",{staticClass:"language-text extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("2018-06-07 05:15:42,914 INFO [com.dfd.hello.spring.MyTest] - slf4j for info\n2018-06-07 05:15:42,915 ERROR [com.dfd.hello.spring.MyTest] - slf4j for error\n2018-06-07 05:15:42,915 WARN [com.dfd.hello.spring.MyTest] - slf4j for warn\n2018-06-07 05:15:42,916 INFO [com.dfd.hello.spring.MyTest] - slf4j message is : Hello SLF4J\n")])])]),n("p",[e._v("项目根目录下也会多出 "),n("code",[e._v("logs/log.log")]),e._v(" 目录及文件")]),e._v(" "),n("h3",{attrs:{id:"附-占位符说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#附-占位符说明"}},[e._v("#")]),e._v(" 附：占位符说明")]),e._v(" "),n("p",[e._v("打日志的时候使用了 "),n("code",[e._v("{}")]),e._v(" 占位符，这样就不会有字符串拼接操作，减少了无用 "),n("code",[e._v("String")]),e._v(" 对象的数量，节省了内存。并且，记住，在生产最终日志信息的字符串之前，这个方法会检查一个特定的日志级别是不是打开了，这不仅降低了内存消耗而且预先降低了 "),n("code",[e._v("CPU")]),e._v(" 去处理字符串连接命令的时间。")])])}),[],!1,null,null,null);o.default=r.exports}}]);