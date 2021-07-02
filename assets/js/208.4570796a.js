(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{992:function(t,a,e){"use strict";e.r(a);var s=e(26),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"junit-断言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#junit-断言"}},[t._v("#")]),t._v(" JUnit 断言")]),t._v(" "),e("h2",{attrs:{id:"什么是断言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是断言"}},[t._v("#")]),t._v(" 什么是断言")]),t._v(" "),e("blockquote",[e("p",[t._v("断言是编程术语，表示为一些布尔表达式，程序员相信在程序中的某个特定点该表达式值为真，可以在任何时候启用和禁用断言验证，因此可以在测试时启用断言而在部署时禁用断言。同样，程序投入运行后，最终用户在遇到问题时可以重新启用断言。")])]),t._v(" "),e("p",[t._v("使用断言可以创建更稳定、品质更好且 不易于出错的代码。当需要在一个值为 "),e("code",[t._v("false")]),t._v(" 时中断当前操作的话，可以使用断言。单元测试必须使用断言（Junit/JunitX）。")]),t._v(" "),e("h2",{attrs:{id:"常用断言方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用断言方法"}},[t._v("#")]),t._v(" 常用断言方法")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("断言")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("void assertEquals([String message], expected value, actual value)")]),t._v(" "),e("td",[t._v("断言两个值相等。值可能是类型有 int, short, long, byte, char or java.lang.Object. 第一个参数是一个可选的字符串消息")])]),t._v(" "),e("tr",[e("td",[t._v("void assertTrue([String message], boolean condition)")]),t._v(" "),e("td",[t._v("断言一个条件为真")])]),t._v(" "),e("tr",[e("td",[t._v("void assertFalse([String message],boolean condition)")]),t._v(" "),e("td",[t._v("断言一个条件为假")])]),t._v(" "),e("tr",[e("td",[t._v("void assertNotNull([String message], java.lang.Object object)")]),t._v(" "),e("td",[t._v("断言一个对象不为空(null)")])]),t._v(" "),e("tr",[e("td",[t._v("void assertNull([String message], java.lang.Object object)")]),t._v(" "),e("td",[t._v("断言一个对象为空(null)")])]),t._v(" "),e("tr",[e("td",[t._v("void assertSame([String message], java.lang.Object expected, java.lang.Object actual)")]),t._v(" "),e("td",[t._v("断言，两个对象引用相同的对象")])]),t._v(" "),e("tr",[e("td",[t._v("void assertNotSame([String message], java.lang.Object unexpected, java.lang.Object actual)")]),t._v(" "),e("td",[t._v("断言，两个对象不是引用同一个对象")])]),t._v(" "),e("tr",[e("td",[t._v("void assertArrayEquals([String message], expectedArray, resultArray)")]),t._v(" "),e("td",[t._v("断言预期数组和结果数组相等。数组的类型可能是 int, long, short, char, byte or java.lang.Object.")])])])]),t._v(" "),e("h2",{attrs:{id:"测试断言效果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试断言效果"}},[t._v("#")]),t._v(" 测试断言效果")]),t._v(" "),e("p",[t._v("在之前的单元测试类中创建一个名为 "),e("code",[t._v("testAssert")]),t._v(" 方法来查看断言效果")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('/**\n * 测试断言\n */\n@Test\npublic void testAssert() {\n    String obj1 = "junit";\n    String obj2 = "junit";\n    String obj3 = "test";\n    String obj4 = "test";\n    String obj5 = null;\n    int var1 = 1;\n    int var2 = 2;\n    int[] arithmetic1 = {1, 2, 3};\n    int[] arithmetic2 = {1, 2, 3};\n\n    assertEquals(obj1, obj2);\n\n    assertSame(obj3, obj4);\n\n    assertNotSame(obj2, obj4);\n\n    assertNotNull(obj1);\n\n    assertNull(obj5);\n\n    assertTrue("为真", var1 == var2);\n\n    assertArrayEquals(arithmetic1, arithmetic2);\n}\n')])])])])}),[],!1,null,null,null);a.default=r.exports}}]);