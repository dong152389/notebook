(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{1216:function(a,t,s){"use strict";s.r(t);var r=s(26),n=Object(r.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"spring-boot-常用配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-常用配置"}},[a._v("#")]),a._v(" Spring Boot 常用配置")]),a._v(" "),r("h2",{attrs:{id:"概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),r("p",[a._v("本章节主要介绍一下 Spring Boot 中的一些常用配置，比如：自定义 Banner、配置日志、关闭特定的自动配置等。")]),a._v(" "),r("h2",{attrs:{id:"自定义-banner"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#自定义-banner"}},[a._v("#")]),a._v(" 自定义 Banner")]),a._v(" "),r("p",[a._v("在 Spring Boot 启动的时候会有一个默认的启动图案")]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[a._v("  "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("   ____          _            __ _ _\n /"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" / ___"),r("span",{pre:!0,attrs:{class:"token string"}},[a._v("'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\\n( ( )\\___ | '")]),a._v("_ "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[a._v("'_| | '")]),a._v("_ "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("/ _` "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("/  ___"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("_"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  '  "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("____"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" .__"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("__, "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" / / / /\n "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("___/"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/_/_/_/\n :: Spring Boot ::        "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("v1.5.8.RELEASE"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),r("p",[a._v("我们在 "),r("code",[a._v("src/main/resources")]),a._v(" 目录下新建一个 banner.txt")]),a._v(" "),r("p",[a._v("通过 http://patorjk.com/software/taag 网站生成字符串，将网站生成的字符复制到 banner.txt 中")]),a._v(" "),r("p",[a._v("再次运行这个程序")]),a._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${AnsiColor.BRIGHT_RED}")]),a._v("\n////////////////////////////////////////////////////////////////////\n//                          _ooOoo_                               //\n//                         o8888888o                              //\n//                         "),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("88")]),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('" . "')]),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("88")]),a._v("                              //\n//                         "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" ^_^ "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("                              //\n//                         O"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("  "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("  /O                              //\n//                      ____/"),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("---"),r("span",{pre:!0,attrs:{class:"token string"}},[a._v("'\\____                           //\n//                    .'")]),a._v("  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("     "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("//  "),r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("                         //\n//                   /  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("  "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v("  "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("//  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("                        //\n//                  /  _"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" -:- "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("-  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("                       //\n//                  "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("   "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("  -  /// "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("   "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("                       //\n//                  "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("_"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("  "),r("span",{pre:!0,attrs:{class:"token string"}},[a._v("''")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("---/"),r("span",{pre:!0,attrs:{class:"token string"}},[a._v("''")]),a._v("  "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("   "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("                       //\n//                  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("  .-"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("__  "),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("-"),r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("  ___/-. /                       //\n//                ___"),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" .'  /--.--"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("  "),r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" ___                     //\n//              "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[a._v("'<  "),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v(".___"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("_"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("_/___."),r("span",{pre:!0,attrs:{class:"token string"}},[a._v("'  >'")]),a._v('"".                  //\n//            '),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v("  "),r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("- \\"),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\\ _ /"),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("/ - "),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("                 //\n//            "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("-.   \\_ __\\ /__ _/   .-"),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v(" /  /                 //\n//      "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("-.____"),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("-.___"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("_____/___.-"),r("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("____.-'========         //\n//                           `=---='")]),a._v("                              //\n//      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^        //\n//            佛祖保佑       永不宕机     永无BUG                  //\n////////////////////////////////////////////////////////////////////\n")])])]),r("p",[a._v("常用属性设置：")]),a._v(" "),r("ul",[r("li",[r("code",[a._v("${AnsiColor.BRIGHT_RED}")]),a._v("：设置控制台中输出内容的颜色")]),a._v(" "),r("li",[r("code",[a._v("${application.version}")]),a._v("：用来获取 "),r("code",[a._v("MANIFEST.MF")]),a._v(" 文件中的版本号")]),a._v(" "),r("li",[r("code",[a._v("${application.formatted-version}")]),a._v("：格式化后的 "),r("code",[a._v("${application.version}")]),a._v(" 版本信息")]),a._v(" "),r("li",[r("code",[a._v("${spring-boot.version}")]),a._v("：Spring Boot 的版本号")]),a._v(" "),r("li",[r("code",[a._v("${spring-boot.formatted-version}")]),a._v("：格式化后的 "),r("code",[a._v("${spring-boot.version}")]),a._v(" 版本信息")])]),a._v(" "),r("h2",{attrs:{id:"配置文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[a._v("#")]),a._v(" 配置文件")]),a._v(" "),r("p",[a._v("Spring Boot 项目使用一个全局的配置文件 "),r("code",[a._v("application.properties")]),a._v(" 或者是 "),r("code",[a._v("application.yml")]),a._v("，在 "),r("code",[a._v("resources")]),a._v(" 目录下或者类路径下的 "),r("code",[a._v("/config")]),a._v(" 下，一般我们放到 "),r("code",[a._v("resources")]),a._v(" 下。")]),a._v(" "),r("p",[a._v('修改 Tomcat 的端口为 9090，并将默认的访问路径 "/" 修改为 "boot"，可以在 '),r("code",[a._v("application.properties")]),a._v(" 中添加：")]),a._v(" "),r("div",{staticClass:"language-properties extra-class"},[r("pre",{pre:!0,attrs:{class:"language-properties"}},[r("code",[r("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("server.port")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("9090")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("server.context-path")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("/boot")]),a._v("\n")])])]),r("p",[a._v("或在 application.yml 中添加：")]),a._v(" "),r("div",{staticClass:"language-yaml extra-class"},[r("pre",{pre:!0,attrs:{class:"language-yaml"}},[r("code",[r("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("server")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("port")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[a._v("9090")]),a._v("\n  "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("context-path")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" /boot\n")])])]),r("p",[a._v("测试效果：")]),a._v(" "),r("p",[r("img",{attrs:{src:s(826),alt:"img"}})]),a._v(" "),r("p",[r("a",{attrs:{href:"https://docs.spring.io/spring-boot/docs/2.0.2.RELEASE/reference/html/common-application-properties.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("更多配置"),r("OutboundLink")],1)]),a._v(" "),r("h2",{attrs:{id:"starter-pom"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#starter-pom"}},[a._v("#")]),a._v(" Starter POM")]),a._v(" "),r("p",[a._v("Spring Boot 为我们提供了简化企业级开发绝大多数场景的 starter pom ，只要使用了应用场景所需要的 starter pom ，相关的技术配置将会消除，就可以得到 Spring Boot 为我们提供的自动配置的 Bean。")]),a._v(" "),r("p",[r("a",{attrs:{href:"https://docs.spring.io/spring-boot/docs/2.0.2.RELEASE/reference/html/using-boot-build-systems.html#using-boot-starter",target:"_blank",rel:"noopener noreferrer"}},[a._v("更多 Starter POM"),r("OutboundLink")],1)]),a._v(" "),r("h2",{attrs:{id:"日志配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#日志配置"}},[a._v("#")]),a._v(" 日志配置")]),a._v(" "),r("p",[a._v("Spring Boot 对各种日志框架都做了支持，我们可以通过配置来修改默认的日志的配置")]),a._v(" "),r("p",[a._v("默认情况下，Spring Boot 使用 Logback 作为日志框架")]),a._v(" "),r("div",{staticClass:"language-yaml extra-class"},[r("pre",{pre:!0,attrs:{class:"language-yaml"}},[r("code",[r("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("logging")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("file")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ../logs/spring"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("boot"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("hello.log\n  "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("level.org.springframework.web")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" DEBUG\n")])])]),r("h2",{attrs:{id:"关闭特定的自动配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#关闭特定的自动配置"}},[a._v("#")]),a._v(" 关闭特定的自动配置")]),a._v(" "),r("p",[a._v("关闭特定的自动配置使用 "),r("code",[a._v("@SpringBootApplication")]),a._v(" 注解的 "),r("code",[a._v("exclude")]),a._v(" 参数即可，这里以关闭数据源的自动配置为例")]),a._v(" "),r("div",{staticClass:"language-java extra-class"},[r("pre",{pre:!0,attrs:{class:"language-java"}},[r("code",[r("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@SpringBootApplication")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("exclude "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),r("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DataSourceAutoConfiguration")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports},826:function(a,t){a.exports="data:image/png;base64,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"}}]);