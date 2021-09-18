(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{999:function(n,t,e){"use strict";e.r(t);var a=e(26),s=Object(a.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"附-为什么说-json-不适合做配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#附-为什么说-json-不适合做配置文件"}},[n._v("#")]),n._v(" 附：为什么说 JSON 不适合做配置文件？")]),n._v(" "),e("blockquote",[e("p",[n._v("很多项目使用 JSON 作为配置文件，最明显的例子就是 npm 和 yarn 使用的 package.json 文件。当然，还有很多其他文件，例如 CloudFormation（最初只有 JSON，但现在也支持 YAML）和 composer（PHP）。")])]),n._v(" "),e("p",[n._v("但是，JSON 实际上是一种非常糟糕的配置语言。别误会我的意思，我其实是喜欢 JSON 的。它是一种相对灵活的文本格式，对于机器和人类来说都很容易阅读，而且是一种非常好的数据交换和存储格式。但作为一种配置语言，它有它的不足。")]),n._v(" "),e("h2",{attrs:{id:"为什么流行使用-json-作为配置语言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么流行使用-json-作为配置语言"}},[n._v("#")]),n._v(" 为什么流行使用 JSON 作为配置语言？")]),n._v(" "),e("p",[n._v("将 JSON 用作配置文件有几个方面的原因，其中最大的原因可能是它很容易实现。很多编程语言的标准库都支持 JSON，开发人员或用户可能已经很熟悉 JSON，所以不需要学习新的配置格式就可以使用那些产品。现在几乎所有的工具都提供 JSON 支持，包括语法突出显示、自动格式化、验证工具等。")]),n._v(" "),e("p",[n._v("这些都是很好的理由，但这种无处不在的格式其实不适合用作配置。")]),n._v(" "),e("h2",{attrs:{id:"json-的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#json-的问题"}},[n._v("#")]),n._v(" JSON 的问题")]),n._v(" "),e("h3",{attrs:{id:"缺乏注释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缺乏注释"}},[n._v("#")]),n._v(" 缺乏注释")]),n._v(" "),e("p",[n._v("注释对于配置语言而言绝对是一个重要的功能。注释可用于标注不同的配置选项、解释为什么要配置成特定的值，更重要的是，在使用不同的配置进行测试和调试时需要临时注释掉部分配置。当然，如果只是把 JSON 当作是一种数据交换格式，那么就不需要用到注释。")]),n._v(" "),e("p",[n._v("我们可以通过一些方法给 JSON 添加注释。一种常见的方法是在对象中使用特殊的键作为注释，例如“//”或“__comment”。但是，这种语法的可读性不高，并且为了在单个对象中包含多个注释，需要为每个注释使用唯一的键。David Crockford（JSON 的发明者）建议使用预处理器来删除注释。如果你的应用程序需要使用 JSON 作为配置，那么完全没问题，不过这确实带来了一些额外的工作量。")]),n._v(" "),e("p",[n._v("一些 JSON 库允许将注释作为输入。例如，Ruby 的 JSON 模块和启用了 JsonParser.Feature.ALLOW_COMMENTS 功能的 Java Jackson 库可以处理 JavaScript 风格的注释。但是，这不是标准的方式，而且很多编辑器无法正确处理 JSON 文件中的注释，这让编辑它们变得更加困难。")]),n._v(" "),e("h3",{attrs:{id:"过于严格"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#过于严格"}},[n._v("#")]),n._v(" 过于严格")]),n._v(" "),e("p",[n._v("JSON 规范非常严格，这也是为什么实现 JSON 解析器会这么简单，但在我看来，它还会影响可读性，并且在较小程度上会影响可写性。")]),n._v(" "),e("h3",{attrs:{id:"低信噪比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#低信噪比"}},[n._v("#")]),n._v(" 低信噪比")]),n._v(" "),e("p",[n._v("与其他配置语言相比，JSON 显得非常嘈杂。JSON 的很多标点符号对可读性毫无帮助，况且，对象中的键几乎都是标识符，所以键的引号其实是多余的。")]),n._v(" "),e("p",[n._v("此外，JSON 需要使用花括号将整个文档包围起来，所以 JSON 是 JavaScript 的子集，并在流中发送多个对象时用于界定不同的对象。但是，对于配置文件来说，最外面的大括号其实没有任何用处。在配置文件中，键值对之间的逗号也是没有必要的。通常情况下，每行只有一个键值对，所以使用换行作为分隔符更有意义。")]),n._v(" "),e("p",[n._v("说到逗号，JSON 居然不允许在结尾出现逗号。如果你需要在每个键值对之后使用逗号，那么至少应该接受结尾的逗号，因为有了结尾的逗号，在添加新条目时会更容易，而且在进行 commit diff 时也更清晰。")]),n._v(" "),e("h3",{attrs:{id:"长字符串"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#长字符串"}},[n._v("#")]),n._v(" 长字符串")]),n._v(" "),e("p",[n._v("JSON 作为配置格式的另一个问题是，它不支持多行字符串。如果你想在字符串中换行，必须使用 “\\n” 进行转义，更糟糕的是，如果你想要一个字符串在文件中另起一行显示，那就彻底没办法了。如果你的配置项里没有很长的字符串，那就不是问题。但是，如果你的配置项里包括了长字符串，例如项目描述或 GPG 密钥，你可能不希望只是使用 “\\n” 来转义而不是使用真实的换行符。")]),n._v(" "),e("h3",{attrs:{id:"数字"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数字"}},[n._v("#")]),n._v(" 数字")]),n._v(" "),e("p",[n._v("此外，在某些情况下，JSON 对数字的定义可能会有问题。JSON 规范中将数字定义成使用十进制表示的任意精度有限浮点数。对于大多数应用程序来说，这没有问题。但是，如果你需要使用十六进制表示法或表示无穷大或 NaN 等值时，那么 TOML 或 YAML 将能够更好地处理它们。")]),n._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('{\n\n  "name": "example",\n\n  "description": "A really long description that needs multiple lines.\\nThis is a sample project to illustrate why JSON is not a good configuration format. This description is pretty long, but it doesn\'t have any way to go onto multiple lines.",\n\n  "version": "0.0.1",\n\n  "main": "index.js",\n\n  "//": "This is as close to a comment as you are going to get",\n\n  "keywords": ["example", "config"],\n\n  "scripts": {\n\n    "test": "./test.sh",\n\n    "do_stuff": "./do_stuff.sh"\n\n  },\n\n  "bugs": {\n\n    "url": "https://example.com/bugs"\n\n  },\n\n  "contributors": [{\n\n    "name": "John Doe",\n\n    "email": "johndoe@example.com"\n\n  }, {\n\n    "name": "Ivy Lane",\n\n    "url": "https://example.com/ivylane"\n\n  }],\n\n  "dependencies": {\n\n    "dep1": "^1.0.0",\n\n    "dep2": "3.40",\n\n    "dep3": "6.7"\n\n  }\n\n}\n')])])]),e("h2",{attrs:{id:"json-的替代方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#json-的替代方案"}},[n._v("#")]),n._v(" JSON 的替代方案")]),n._v(" "),e("p",[n._v("选择哪一种配置语言取决于你的应用程序。每种语言都有各自的优缺点，下面列出了一些可以考虑的选项。它们都是为配置而设计的语言，每一种都比 JSON 这样的数据语言更好。")]),n._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('name = "example"\n\ndescription = """\n\nA really long description that needs multiple lines.\n\nThis is a sample project to illustrate why JSON is not a \\\n\ngood configuration format. This description is pretty long, \\\n\nbut it doesn\'t have any way to go onto multiple lines."""\n\n\n\nversion = "0.0.1"\n\nmain = "index.js"\n\n# This is a comment\n\nkeywords = ["example", "config"]\n\n\n\n[bugs]\n\nurl = "https://example.com/bugs"\n\n\n\n[scripts]\n\n\n\ntest = "./test.sh"\n\ndo_stuff = "./do_stuff.sh"\n\n\n\n[[contributors]]\n\nname = "John Doe"\n\nemail = "johndow@example.com"\n\n\n\n[[contributors]]\n\nname = "Ivy Lane"\n\nurl = "https://example.com/ivylane"\n\n\n\n[dependencies]\n\n\n\ndep1 = "^1.0.0"\n\n# Why we depend on dep2\n\ndep2 = "3.40"\n\ndep3 = "6.7"\n')])])]),e("h3",{attrs:{id:"hjson"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hjson"}},[n._v("#")]),n._v(" HJSON")]),n._v(" "),e("p",[n._v("HJSON 是一种基于 JSON 的格式，但具有更大的灵活性，可读性也更强。它支持注释、多行字符串、不带引号的键和字符串，以及可选的逗号。如果你想要 JSON 结构的简单性，同时对配置文件更友好，那么可以考虑 HJSON。有一些可以将 HJSON 转换为 JSON 的命令行工具，如果你使用的工具是基于 JSON 的，可以先用 HJSON 编写配置，然后再转换成 JSON。JSON5 是另一个与 HJSON 非常相似的配置语言。")]),n._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('{\n\n  name: example\n\n  description: \'\'\'\n\n  A really long description that needs multiple lines.\n\n  This is a sample project to illustrate why JSON is \n\n  not a good configuration format.  This description \n\n  is pretty long, but it doesn\'t have any way to go \n\n  onto multiple lines.\n\n  \'\'\'\n\n  version: 0.0.1\n\n  main: index.js\n\n  # This is a a comment\n\n  keywords: ["example", "config"]\n\n  scripts: {\n\n    test: ./test.sh\n\n    do_stuff: ./do_stuff.sh\n\n  }\n\n  bugs: {\n\n    url: https://example.com/bugs\n\n  }\n\n  contributors: [{\n\n    name: John Doe\n\n    email: johndoe@example.com\n\n  } {\n\n    name: Ivy Lane\n\n    url: https://example.com/ivylane\n\n  }]\n\n  dependencies: {\n\n    dep1: ^1.0.0\n\n    # Why we have this dependency\n\n    dep2: "3.40"\n\n    dep3: "6.7"\n\n  }\n\n}\n')])])]),e("h3",{attrs:{id:"hocon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hocon"}},[n._v("#")]),n._v(" HOCON")]),n._v(" "),e("p",[n._v("HOCON 是为 Play 框架设计的配置格式，在 Scala 项目中非常流行。它是 JSON 的超集，因此可以使用现有的 JSON 文件。除了注释、可选逗号和多行字符串这些标准特性外，HOCON 还支持从其他文件导入和引用其他值的键，避免重复代码，并使用以点作为分隔符的键来指定值的路径，因此用户可以不必将所有值直接放在花括号对象中。")]),n._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('name = example\n\ndescription = """\n\nA really long description that needs multiple lines.\n\n\n\nThis is a sample project to illustrate why JSON is \n\nnot a good configuration format.  This description \n\nis pretty long, but it doesn\'t have any way to go \n\nonto multiple lines.\n\n"""\n\nversion = 0.0.1\n\nmain = index.js\n\n# This is a a comment\n\nkeywords = ["example", "config"]\n\nscripts {\n\n  test = ./test.sh\n\n  do_stuff = ./do_stuff.sh\n\n}\n\nbugs.url = "https://example.com/bugs"\n\ncontributors = [\n\n  {\n\n    name = John Doe\n\n    email = johndoe@example.com\n\n  }\n\n  {\n\n    name = Ivy Lane\n\n    url = "https://example.com/ivylane"\n\n  }\n\n]\n\ndependencies {\n\n  dep1 = ^1.0.0\n\n  # Why we have this dependency\n\n  dep2 = "3.40"\n\n  dep3 = "6.7"\n\n}\n')])])]),e("h3",{attrs:{id:"yaml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yaml"}},[n._v("#")]),n._v(" YAML")]),n._v(" "),e("p",[n._v("YAML（YAML 不是标记语言）是一种非常灵活的格式，几乎是 JSON 的超集，已经被用在一些著名的项目中，如 Travis CI、Circle CI 和 AWS CloudFormation。YAML 的库几乎和 JSON 一样无处不在。除了支持注释、换行符分隔、多行字符串、裸字符串和更灵活的类型系统之外，YAML 也支持引用文件，以避免重复代码。")]),n._v(" "),e("p",[n._v("YAML 的主要缺点是规范非常复杂，不同的实现之间可能存在不一致的情况。它将缩进视为严格语法的一部分（类似于 Python），有些人喜欢，有些人不喜欢。这会让复制和粘贴变得很麻烦。")]),n._v(" "),e("h3",{attrs:{id:"脚本语言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#脚本语言"}},[n._v("#")]),n._v(" 脚本语言")]),n._v(" "),e("p",[n._v("如果你的应用程序是使用 Python 或 Ruby 等脚本语言开发的，并且你知道配置的来源是可靠的，那么最好的选择可能就是使用这些语言进行配置。如果你需要一个真正灵活的配置选项，也可以在编译语言中嵌入诸如 Lua 之类的脚本语言。这样可以获得脚本语言的灵活性，而且比使用不同的配置语言更容易实现。使用脚本语言的缺点是它可能过于强大，当然，如果配置来源是不受信任的，可能会引入严重的安全问题。")]),n._v(" "),e("h3",{attrs:{id:"自定义配置格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义配置格式"}},[n._v("#")]),n._v(" 自定义配置格式")]),n._v(" "),e("p",[n._v("如果由于某种原因，键值配置格式不能满足你的要求，并且由于性能或大小限制而无法使用脚本语言，那么可以考虑自定义配置格式。如果是这种情况，那么在做出选择之前要想清楚，因为你不仅要编写和维护一个解析器，还要让你的用户熟悉另一种配置格式。")]),n._v(" "),e("h2",{attrs:{id:"结论"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[n._v("#")]),n._v(" 结论")]),n._v(" "),e("p",[n._v("有了这么多更好的配置语言，没有理由还要使用 JSON。如果要创建需要用到配置的新应用程序、框架或库，请选择 JSON 以外的其他选项。")]),n._v(" "),e("p",[n._v("英文原文：https://www.lucidchart.com/techblog/2018/07/16/why-json-isnt-a-good-configuration-language/")])])}),[],!1,null,null,null);t.default=s.exports}}]);