(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{1100:function(v,_,e){"use strict";e.r(_);var a=e(26),o=Object(a.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"log4j-日志输出控制文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#log4j-日志输出控制文件"}},[v._v("#")]),v._v(" Log4j 日志输出控制文件")]),v._v(" "),e("h2",{attrs:{id:"日志输出简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#日志输出简介"}},[v._v("#")]),v._v(" 日志输出简介")]),v._v(" "),e("p",[v._v("Log4j 的日志输出控制文件，主要由三个部分构成：")]),v._v(" "),e("ul",[e("li",[v._v("日志信息的输出位置：控制日志信息将要输出的位置，是控制台还是文件等。")]),v._v(" "),e("li",[v._v("日志信息的输出格式：控制日志信息的显示格式，即以怎样的字符串形式显示。")]),v._v(" "),e("li",[v._v("日志信息的输出级别：控制日志信息的显示内容，即显示哪些级别的日志信息。")])]),v._v(" "),e("p",[v._v("有了日志输出控制文件，代码中只要设置好日志信息内容及其级别即可，通过控制文件便可控制这些日志信息的输出了。")]),v._v(" "),e("h2",{attrs:{id:"日志属性配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#日志属性配置文件"}},[v._v("#")]),v._v(" 日志属性配置文件")]),v._v(" "),e("p",[v._v("日志属性文件 "),e("code",[v._v("log4j.properties")]),v._v(" 是专门用于控制日志输出的。其主要进行三方面控制：")]),v._v(" "),e("ul",[e("li",[v._v("输出位置：控制日志将要输出的位置，是控制台还是文件等。")]),v._v(" "),e("li",[v._v("输出布局：控制日志信息的显示形式。")]),v._v(" "),e("li",[v._v("输出级别：控制要输出的日志级别。")])]),v._v(" "),e("p",[v._v("日志属性文件由两个对象组成：日志附加器与根日志。")]),v._v(" "),e("p",[v._v("根日志，即为 Java 代码中的日志记录器，其主要由两个属性构成：日志输出级别与日志附加器。")]),v._v(" "),e("p",[v._v("日志附加器，则由日志输出位置定义，由其它很多属性进行修饰，如输出布局、文件位置、文件大小等。")]),v._v(" "),e("h2",{attrs:{id:"什么是日志附加器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是日志附加器"}},[v._v("#")]),v._v(" 什么是日志附加器？")]),v._v(" "),e("p",[v._v("所谓日志附加器，就是为日志记录器附加上很多其它设置信息。附加器的本质是一个接口，其定义语法为："),e("code",[v._v("log4j.appender.appenderName")]),v._v(" = "),e("code",[v._v("输出位置")])]),v._v(" "),e("h3",{attrs:{id:"常用的附加器实现类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用的附加器实现类"}},[v._v("#")]),v._v(" 常用的附加器实现类")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("org.apache.log4j.ConsoleAppender")]),v._v("：日志输出到控制台")]),v._v(" "),e("li",[e("code",[v._v("org.apache.log4j.FileAppender")]),v._v("：日志输出到文件")]),v._v(" "),e("li",[e("code",[v._v("org.apache.log4j.RollingFileAppender")]),v._v("：当日志文件大小到达指定尺寸的时候将产生一个新的日志文件")]),v._v(" "),e("li",[e("code",[v._v("org.apache.log4j.DailyRollingFileAppender")]),v._v("：每天产生一个日志文件")])]),v._v(" "),e("h2",{attrs:{id:"常用布局类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用布局类型"}},[v._v("#")]),v._v(" 常用布局类型")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("org.apache.log4j.HTMLLayout")]),v._v("：网页布局，以 HTML 表格形式布局")]),v._v(" "),e("li",[e("code",[v._v("org.apache.log4j.SimpleLayout")]),v._v("：简单布局，包含日志信息的级别和信息字符串")]),v._v(" "),e("li",[e("code",[v._v("org.apache.log4j.PatternLayout")]),v._v("：匹配器布局，可以灵活地指定布局模式。其主要是通过设置 PatternLayout 的 ConversionPattern 属性值来控制具体输出格式的 。")])]),v._v(" "),e("p",[v._v("打印参数: Log4J 采用类似 C 语言中的 printf 函数的打印格式格式化日志信息")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("%m")]),v._v("：输出代码中指定的消息")]),v._v(" "),e("li",[e("code",[v._v("%p")]),v._v("：输出优先级，即 "),e("code",[v._v("DEBUG")]),v._v("，"),e("code",[v._v("INFO")]),v._v("，"),e("code",[v._v("WARN")]),v._v("，"),e("code",[v._v("ERROR")]),v._v("，"),e("code",[v._v("FATAL")])]),v._v(" "),e("li",[e("code",[v._v("%r")]),v._v("：输出自应用启动到输出该 log 信息耗费的毫秒数")]),v._v(" "),e("li",[e("code",[v._v("%c")]),v._v("：输出所属的类目，通常就是所在类的全名")]),v._v(" "),e("li",[e("code",[v._v("%t")]),v._v("：输出产生该日志事件的线程名")]),v._v(" "),e("li",[e("code",[v._v("%n")]),v._v("：输出一个回车换行符，Windows 平台为 "),e("code",[v._v("/r/n")]),v._v("，Unix 平台为 "),e("code",[v._v("/n")])]),v._v(" "),e("li",[e("code",[v._v("%d")]),v._v("：输出日志时间点的日期或时间，默认格式为 ISO8601，也可以在其后指定格式，比如：%d{yyy MMM dd HH:mm:ss , SSS}，输出类似：2002年10月18日 22:10:28,921")]),v._v(" "),e("li",[e("code",[v._v("%l")]),v._v("：输出日志事件的发生位置，包括类目名、发生的线程，以及在代码中的行数。举例：Testlog4.main(TestLog4.java: 10 )")])])])}),[],!1,null,null,null);_.default=o.exports}}]);