(window.webpackJsonp=window.webpackJsonp||[]).push([[370],{1253:function(t,a,s){"use strict";s.r(a);var n=s(26),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"webpack-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-简介"}},[t._v("#")]),t._v(" Webpack 简介")]),t._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[t._v("本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。")]),t._v(" "),s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("p",[t._v("Webpack 是当下最热门的前端资源模块化管理和打包工具，它可以将许多松散耦合的模块按照依赖和规则打包成符合生产环境部署的前端资源。还可以将按需加载的模块进行代码分离，等到实际需要时再异步加载。通过 loader 转换，任何形式的资源都可以当做模块，比如 CommonsJS、AMD、ES6、CSS、JSON、CoffeeScript、LESS 等；")]),t._v(" "),s("h2",{attrs:{id:"现状"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#现状"}},[t._v("#")]),t._v(" 现状")]),t._v(" "),s("p",[t._v("伴随着移动互联网的大潮，当今越来越多的网站已经从网页模式进化到了 WebApp 模式。它们运行在现代浏览器里，使用 HTML5、CSS3、ES6 等新的技术来开发丰富的功能，网页已经不仅仅是完成浏览器的基本需求；WebApp 通常是一个 SPA （单页面应用），每一个视图通过异步的方式加载，这导致页面初始化和使用过程中会加载越来越多的 JS 代码，这给前端的开发流程和资源组织带来了巨大挑战。")]),t._v(" "),s("p",[t._v("前端开发和其他开发工作的主要区别，首先是前端基于多语言、多层次的编码和组织工作，其次前端产品的交付是基于浏览器的，这些资源是通过增量加载的方式运行到浏览器端，如何在开发环境组织好这些碎片化的代码和资源，并且保证他们在浏览器端快速、优雅的加载和更新，就需要一个模块化系统，这个理想中的模块化系统是前端工程师多年来一直探索的难题。")]),t._v(" "),s("h2",{attrs:{id:"模块化的演进"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块化的演进"}},[t._v("#")]),t._v(" 模块化的演进")]),t._v(" "),s("h3",{attrs:{id:"script-标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#script-标签"}},[t._v("#")]),t._v(" Script 标签")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("module1.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scirpt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("module2.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scirpt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("module3.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scirpt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("module4.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scirpt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("这是最原始的 JavaScript 文件加载方式，如果把每一个文件看做是一个模块，那么他们的接口通常是暴露在全局作用域下，也就是定义在 "),s("code",[t._v("window")]),t._v(" 对象中，不同模块的调用都是一个作用域。")]),t._v(" "),s("p",[t._v("这种原始的加载方式暴露了一些显而易见的弊端：")]),t._v(" "),s("ul",[s("li",[t._v("全局作用域下容易造成变量冲突")]),t._v(" "),s("li",[t._v("文件只能按照 "),s("code",[t._v("<script>")]),t._v(" 的书写顺序进行加载")]),t._v(" "),s("li",[t._v("开发人员必须主观解决模块和代码库的依赖关系")]),t._v(" "),s("li",[t._v("在大型项目中各种资源难以管理，长期积累的问题导致代码库混乱不堪")])]),t._v(" "),s("h3",{attrs:{id:"commonsjs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commonsjs"}},[t._v("#")]),t._v(" CommonsJS")]),t._v(" "),s("p",[t._v("服务器端的 NodeJS 遵循 CommonsJS 规范，该规范核心思想是允许模块通过 "),s("code",[t._v("require")]),t._v(" 方法来同步加载所需依赖的其它模块，然后通过 "),s("code",[t._v("exports")]),t._v(" 或 "),s("code",[t._v("module.exports")]),t._v(" 来导出需要暴露的接口。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"module"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../module.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("doStuff")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" someValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),s("ul",[s("li",[t._v("服务器端模块便于重用")]),t._v(" "),s("li",[t._v("NPM 中已经有超过 45 万个可以使用的模块包")]),t._v(" "),s("li",[t._v("简单易用")])]),t._v(" "),s("h4",{attrs:{id:"缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),s("ul",[s("li",[t._v("同步的模块加载方式不适合在浏览器环境中，同步意味着阻塞加载，浏览器资源是异步加载的")]),t._v(" "),s("li",[t._v("不能非阻塞的并行加载多个模块")])]),t._v(" "),s("h4",{attrs:{id:"实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),s("ul",[s("li",[t._v("服务端的 NodeJS")]),t._v(" "),s("li",[t._v("Browserify，浏览器端的 CommonsJS 实现，可以使用 NPM 的模块，但是编译打包后的文件体积较大")]),t._v(" "),s("li",[t._v("modules-webmake，类似 Browserify，但不如 Browserify 灵活")]),t._v(" "),s("li",[t._v("wreq，Browserify 的前身")])]),t._v(" "),s("h3",{attrs:{id:"amd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amd"}},[t._v("#")]),t._v(" AMD")]),t._v(" "),s("p",[t._v("Asynchronous Module Definition 规范其实主要一个主要接口 "),s("code",[t._v("define(id?, dependencies?, factory);")]),t._v(" 它要在声明模块的时候指定所有的依赖 "),s("code",[t._v("dependencies")]),t._v("，并且还要当做形参传到 "),s("code",[t._v("factory")]),t._v(" 中，对于依赖的模块提前执行。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"module"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dep1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dep2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("d1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" someExportedValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"module"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../file.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"优点-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优点-2"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),s("ul",[s("li",[t._v("适合在浏览器环境中异步加载模块")]),t._v(" "),s("li",[t._v("可以并行加载多个模块")])]),t._v(" "),s("h4",{attrs:{id:"缺点-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缺点-2"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),s("ul",[s("li",[t._v("提高了开发成本，代码的阅读和书写比较困难，模块定义方式的语义不畅")]),t._v(" "),s("li",[t._v("不符合通用的模块化思维方式，是一种妥协的实现")])]),t._v(" "),s("h4",{attrs:{id:"实现-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现-2"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),s("ul",[s("li",[t._v("RequireJS")]),t._v(" "),s("li",[t._v("curl")])]),t._v(" "),s("h3",{attrs:{id:"cmd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cmd"}},[t._v("#")]),t._v(" CMD")]),t._v(" "),s("p",[t._v("Commons Module Definition 规范和 AMD 很相似，尽量保持简单，并与 CommonsJS 和 NodeJS 的 Modules 规范保持了很大的兼容性。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("require"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" module")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" $ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jquery"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Spinning "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./spinning"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  exports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("doSomething "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"优点-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优点-3"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),s("ul",[s("li",[t._v("依赖就近，延迟执行")]),t._v(" "),s("li",[t._v("可以很容易在 NodeJS 中运行")])]),t._v(" "),s("h4",{attrs:{id:"缺点-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缺点-3"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),s("ul",[s("li",[t._v("依赖 SPM 打包，模块的加载逻辑偏重")])]),t._v(" "),s("h4",{attrs:{id:"实现-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现-3"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),s("ul",[s("li",[t._v("Sea.js")]),t._v(" "),s("li",[t._v("coolie")])]),t._v(" "),s("h3",{attrs:{id:"es6-模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es6-模块"}},[t._v("#")]),t._v(" ES6 模块")]),t._v(" "),s("p",[t._v("EcmaScript6 标准增加了 JavaScript 语言层面的模块体系定义。 ES6 模块的设计思想，是尽量静态化，使编译时就能确定模块的依赖关系，以及输入和输出的变量。CommonsJS 和 AMD 模块，都只能在运行时确定这些东西。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jquery"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doStuff")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nmodule "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localModule"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"优点-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优点-4"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),s("ul",[s("li",[t._v("容易进行静态分析")]),t._v(" "),s("li",[t._v("面向未来的 EcmaScript 标准")])]),t._v(" "),s("h4",{attrs:{id:"缺点-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缺点-4"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),s("ul",[s("li",[t._v("原生浏览器端还没有实现该标准")]),t._v(" "),s("li",[t._v("全新的命令，新版的 NodeJS 才支持")])]),t._v(" "),s("h4",{attrs:{id:"实现-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现-4"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),s("ul",[s("li",[t._v("Babel")])]),t._v(" "),s("h3",{attrs:{id:"期望的模块系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#期望的模块系统"}},[t._v("#")]),t._v(" 期望的模块系统")]),t._v(" "),s("p",[t._v("可以兼容多种模块风格，尽量可以利用已有的代码，不仅仅只是 JavaScript 模块化，还有 CSS、图片、字体等资源也需要模块化。")])])}),[],!1,null,null,null);a.default=r.exports}}]);