(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1106:function(e,t,a){"use strict";a.r(t);var s=a(26),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"mybatis-动态-sql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-动态-sql"}},[e._v("#")]),e._v(" MyBatis 动态 SQL")]),e._v(" "),s("p",[e._v("动态 SQL，主要用于解决查询条件不确定的情况：在程序运行期间，根据用户提交的查询条件进行查询。提交的查询条件不同，执行的 SQL 语句不同。若将每种可能的情况均逐一列出，对所有条件进行排列组合，将会出现大量的 SQL 语句。此时，可使用动态 SQL 来解决这样的问题。")]),e._v(" "),s("p",[s("img",{attrs:{src:a(720),alt:"img"}})]),e._v(" "),s("p",[e._v("动态 SQL，即通过 MyBatis 提供的各种标签对条件作出判断以实现动态拼接 SQL 语句。")]),e._v(" "),s("p",[e._v("这里的条件判断使用的表达式为 OGNL 表达式。常用的动态 SQL 标签有 "),s("code",[e._v("<if>")]),e._v("、"),s("code",[e._v("<where>")]),e._v("、"),s("code",[e._v("<choose>")]),e._v("、"),s("code",[e._v("<foreach>")]),e._v(" 等。")]),e._v(" "),s("h2",{attrs:{id:"注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[e._v("#")]),e._v(" 注意事项")]),e._v(" "),s("p",[e._v("在 mapper 的动态 SQL 中若出现大于号（"),s("code",[e._v(">")]),e._v("）、小于号（"),s("code",[e._v("<")]),e._v("）、大于等于号（"),s("code",[e._v(">=")]),e._v("），小于等于号（"),s("code",[e._v("<=")]),e._v("）等符号，最好将其转换为实体符号。否则，XML 可能会出现解析出错问题。")]),e._v(" "),s("p",[e._v("特别是对于小于号（"),s("code",[e._v("<")]),e._v("），在 XML 中是绝对不能出现的。否则，一定出错。")]),e._v(" "),s("p",[s("img",{attrs:{src:a(721),alt:"img"}})]),e._v(" "),s("h2",{attrs:{id:"if-标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#if-标签"}},[e._v("#")]),e._v(" if 标签")]),e._v(" "),s("p",[e._v("对于该标签的执行，当 test 的值为 true 时，会将其包含的 SQL 片断拼接到其所在的 SQL 语句中。")]),e._v(" "),s("p",[e._v("本例实现的功能是：查询出满足用户提交查询条件的所有学生。用户提交的查询条件可以包含一个姓名的模糊查询，同时还可以包含一个年龄的下限。当然，用户在提交表单时可能两个条件均做出了设定，也可能两个条件均不做设定，也可以只做其中一项设定。")]),e._v(" "),s("p",[e._v("这引发的问题是，查询条件不确定，查询条件依赖于用户提交的内容。此时，就可使用动态 SQL 语句，根据用户提交内容对将要执行的 SQL 进行拼接。")]),e._v(" "),s("h3",{attrs:{id:"定义映射文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义映射文件"}},[e._v("#")]),e._v(" 定义映射文件")]),e._v(" "),s("p",[e._v("为了解决两个条件均未做设定的情况，在 "),s("code",[e._v("where")]),e._v(" 后添加了一个“"),s("code",[e._v("1=1")]),e._v("”的条件。这样就不至于两个条件均未设定而出现只剩下一个 "),s("code",[e._v("where")]),e._v("，而没有任何可拼接的条件的不完整 SQL 语句。")]),e._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n<mapper namespace="com.dfd.mybatis.dao.DynamicStudentDao">\n    \x3c!-- if --\x3e\n    <select id="selectByIf" resultType="com.dfd.mybatis.entity.Student">\n        SELECT\n            id,\n            name,\n            age,\n            score\n        FROM\n            student\n        WHERE 1 = 1\n        <if test="name != null and name != \'\'">\n            AND name LIKE concat(\'%\', #{name}, \'%\')\n        </if>\n        <if test="age != null and age > 0">\n            AND age > #{age}\n        </if>\n    </select>\n</mapper>\n')])])]),s("h2",{attrs:{id:"where-标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#where-标签"}},[e._v("#")]),e._v(" where 标签")]),e._v(" "),s("p",[s("code",[e._v("<if/>")]),e._v(" 标签的中存在一个比较麻烦的地方：需要在 "),s("code",[e._v("where")]),e._v(" 后手工添加 "),s("code",[e._v("1=1")]),e._v(" 的子句。因为，若 "),s("code",[e._v("where")]),e._v(" 后的所有 "),s("code",[e._v("<if/>")]),e._v(" 条件均为 "),s("code",[e._v("false")]),e._v("，而 "),s("code",[e._v("where")]),e._v(" 后若又没有 "),s("code",[e._v("1=1")]),e._v(" 子句，则 SQL 中就会只剩下一个空的 "),s("code",[e._v("where")]),e._v("，SQL 出错。所以，在 "),s("code",[e._v("where")]),e._v(" 后，需要添加永为真子句 "),s("code",[e._v("1=1")]),e._v("，以防止这种情况的发生。但当数据量很大时，会严重影响查询效率。")]),e._v(" "),s("h3",{attrs:{id:"定义映射文件-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义映射文件-2"}},[e._v("#")]),e._v(" 定义映射文件")]),e._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('\x3c!-- where--\x3e\n<select id="selectByWhere" resultType="com.dfd.mybatis.entity.Student">\n    SELECT\n        id,\n        name,\n        age,\n        score\n    FROM\n      student\n    <where>\n        <if test="name != null and name != \'\'">\n            AND name LIKE concat(\'%\', #{name}, \'%\')\n        </if>\n        <if test="age != null and age > 0">\n            AND age > #{age}\n        </if>\n    </where>\n</select>\n')])])]),s("h2",{attrs:{id:"choose-标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#choose-标签"}},[e._v("#")]),e._v(" choose 标签")]),e._v(" "),s("p",[e._v("该标签中只可以包含 "),s("code",[e._v("<when/>")]),e._v(" "),s("code",[e._v("<otherwise/>")]),e._v("，可以包含多个 "),s("code",[e._v("<when/>")]),e._v(" 与一个 "),s("code",[e._v("<otherwise/>")]),e._v("。它们联合使用，完成 Java 中的开关语句 switch..case 功能。")]),e._v(" "),s("p",[e._v("本例要完成的需求是，若姓名不空，则按照姓名查询；若姓名为空，则按照年龄查询；若没有查询条件，则没有查询结果。")]),e._v(" "),s("h3",{attrs:{id:"定义映射文件-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义映射文件-3"}},[e._v("#")]),e._v(" 定义映射文件")]),e._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('\x3c!-- choose --\x3e\n<select id="selectByChoose" resultType="com.dfd.mybatis.entity.Student">\n    SELECT\n        id,\n        name,\n        age,\n        score\n    FROM\n      student\n    <where>\n        <choose>\n            <when test="name != null and name != \'\'">\n                AND name LIKE concat(\'%\', #{name}, \'%\')\n            </when>\n            <when test="age != null and age > 0">\n                AND age > #{age}\n            </when>\n            <otherwise>\n                AND 1 != 1\n            </otherwise>\n        </choose>\n    </where>\n</select>\n')])])]),s("h2",{attrs:{id:"foreach-标签-遍历数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#foreach-标签-遍历数组"}},[e._v("#")]),e._v(" foreach 标签-遍历数组")]),e._v(" "),s("p",[s("code",[e._v("<foreach/>")]),e._v(" 标签用于实现对于数组与集合的遍历。对其使用，需要注意：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("collection")]),e._v(" 表示要遍历的集合类型，这里是数组，即 array。")]),e._v(" "),s("li",[s("code",[e._v("open")]),e._v("、"),s("code",[e._v("close")]),e._v("、"),s("code",[e._v("separator")]),e._v(" 为对遍历内容的 SQL 拼接。")])]),e._v(" "),s("p",[e._v("本例实现的需求是，查询出 id 为 2 与 4 的学生信息。")]),e._v(" "),s("h3",{attrs:{id:"定义映射文件-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义映射文件-4"}},[e._v("#")]),e._v(" 定义映射文件")]),e._v(" "),s("p",[e._v("动态 SQL 的判断中使用的都是 OGNL 表达式。OGNL 表达式中的数组使用 "),s("code",[e._v("array")]),e._v(" 表示，数组长度使用 "),s("code",[e._v("array.length")]),e._v(" 表示。")]),e._v(" "),s("p",[s("img",{attrs:{src:a(722),alt:"img"}})]),e._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('\x3c!-- foreach --\x3e\n<select id="selectByForeach" resultType="com.dfd.mybatis.entity.Student">\n    \x3c!-- select * from student where id in (2, 4) --\x3e\n    SELECT\n        id,\n        name,\n        age,\n        score\n    FROM\n      student\n    <if test="array != null and array.length > 0">\n        WHERE id IN\n        <foreach collection="array" open="(" close=")" item="id" separator=",">\n            #{id}\n        </foreach>\n    </if>\n</select>\n')])])]),s("h2",{attrs:{id:"foreach-标签-遍历集合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#foreach-标签-遍历集合"}},[e._v("#")]),e._v(" foreach 标签-遍历集合")]),e._v(" "),s("p",[e._v("遍历集合的方式与遍历数组的方式相同，只不过是将 "),s("code",[e._v("array")]),e._v(" 替换成了 "),s("code",[e._v("list")])]),e._v(" "),s("h3",{attrs:{id:"遍历泛型为基本类型的-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#遍历泛型为基本类型的-list"}},[e._v("#")]),e._v(" 遍历泛型为基本类型的 List")]),e._v(" "),s("h4",{attrs:{id:"定义-dao-接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义-dao-接口"}},[e._v("#")]),e._v(" 定义 DAO 接口")]),e._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/**\n * 使用 foreach 标签以 list 基本类型的形式查询\n * @param ids\n * @return\n */\npublic List<Student> selectByForeachWithListBase(List<Long> ids);\n")])])]),s("h4",{attrs:{id:"定义映射文件-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义映射文件-5"}},[e._v("#")]),e._v(" 定义映射文件")]),e._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('\x3c!-- foreach --\x3e\n<select id="selectByForeachWithListBase" resultType="com.dfd.mybatis.entity.Student">\n    \x3c!-- select * from student where id in (2, 4) --\x3e\n    SELECT\n        id,\n        name,\n        age,\n        score\n    FROM\n      student\n    <if test="list != null and list.size > 0">\n        WHERE id IN\n        <foreach collection="list" open="(" close=")" item="id" separator=",">\n            #{id}\n        </foreach>\n    </if>\n</select>\n')])])]),s("h3",{attrs:{id:"遍历泛型为自定义类型的-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#遍历泛型为自定义类型的-list"}},[e._v("#")]),e._v(" 遍历泛型为自定义类型的 List")]),e._v(" "),s("h4",{attrs:{id:"定义-dao-接口-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义-dao-接口-2"}},[e._v("#")]),e._v(" 定义 DAO 接口")]),e._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/**\n * 使用 foreach 标签以 list 自定义类型的形式查询\n * @param students\n * @return\n */\npublic List<Student> selectByForeachWithListCustom(List<Student> students);\n")])])]),s("h4",{attrs:{id:"定义映射文件-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义映射文件-6"}},[e._v("#")]),e._v(" 定义映射文件")]),e._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('\x3c!-- foreach --\x3e\n<select id="selectByForeachWithListCustom" resultType="com.dfd.mybatis.entity.Student">\n    \x3c!-- select * from student where id in (2, 4) --\x3e\n    SELECT\n        id,\n        name,\n        age,\n        score\n    FROM\n      student\n    <if test="list != null and list.size > 0">\n        WHERE id IN\n        <foreach collection="list" open="(" close=")" item="student" separator=",">\n            #{student.id}\n        </foreach>\n    </if>\n</select>\n')])])]),s("h2",{attrs:{id:"sql-标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql-标签"}},[e._v("#")]),e._v(" sql 标签")]),e._v(" "),s("p",[s("code",[e._v("<sql/>")]),e._v(" 标签用于定义 SQL 片断，以便其它 SQL 标签复用。而其它标签使用该 SQL 片断， 需要使用 "),s("code",[e._v("<include/>")]),e._v(" 子标签。该 "),s("code",[e._v("<sql/>")]),e._v(" 标签可以定义 SQL 语句中的任何部分，所以 "),s("code",[e._v("<include/>")]),e._v(" 子标签可以放在动态 SQL 的任何位置。")]),e._v(" "),s("h3",{attrs:{id:"修改映射文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改映射文件"}},[e._v("#")]),e._v(" 修改映射文件")]),e._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<sql id="select">\n    SELECT\n        id,\n        name,\n        age,\n        score\n    FROM\n      student\n</sql>\n')])])]),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('\x3c!-- foreach --\x3e\n<select id="selectByForeachWithListCustom" resultType="com.dfd.mybatis.entity.Student">\n    \x3c!-- select * from student where id in (2, 4) --\x3e\n    <include refid="select" />\n\n    <if test="list != null and list.size > 0">\n        WHERE id IN\n        <foreach collection="list" open="(" close=")" item="student" separator=",">\n            #{student.id}\n        </foreach>\n    </if>\n</select>\n')])])]),s("p",[s("img",{attrs:{src:a(723),alt:"img"}})])])}),[],!1,null,null,null);t.default=n.exports},720:function(e,t){e.exports="data:image/png;base64,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"},721:function(e,t,a){e.exports=a.p+"assets/img/Lusifer1514409933.6bf217b8.png"},722:function(e,t,a){e.exports=a.p+"assets/img/Lusifer1514413085.3c3e4dab.png"},723:function(e,t,a){e.exports=a.p+"assets/img/Lusifer1514414809.407a953d.png"}}]);