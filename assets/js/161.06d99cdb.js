(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{717:function(e,t,a){"use strict";a.r(t);var s=a(26),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"mybatis-单表-crud-操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-单表-crud-操作"}},[e._v("#")]),e._v(" MyBatis 单表 CRUD 操作")]),e._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),a("p",[e._v("MyBatis 的单表 CRUD 的相关操作方法")]),e._v(" "),a("h2",{attrs:{id:"insert"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#insert"}},[e._v("#")]),e._v(" INSERT")]),e._v(" "),a("p",[e._v("继续以 "),a("code",[e._v("tb_user")]),e._v(" 表为例，修改映射文件，增加如下配置：")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<insert id="insert">\n    INSERT INTO tb_user (\n      id,\n      username,\n      password,\n      phone,\n      email,\n      created,\n      updated\n    )\n    VALUES\n      (\n        #{id},\n        #{username},\n        #{password},\n        #{phone},\n        #{email},\n        #{created},\n        #{update}\n      )\n</insert>\n')])])]),a("p",[e._v("单元测试代码如下：")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('@Test\npublic void testInsert() {\n    TbUser tbUser = new TbUser();\n    tbUser.setEmail("admin@admin.com");\n    tbUser.setPassword("admin");\n    tbUser.setPhone("15888888888");\n    tbUser.setUsername("Lusifer");\n    tbUser.setCreated(new Date());\n    tbUser.setUpdate(new Date());\n\n    tbUserDao.insert(tbUser);\n}\n')])])]),a("h2",{attrs:{id:"delete"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[e._v("#")]),e._v(" DELETE")]),e._v(" "),a("p",[e._v("继续以 "),a("code",[e._v("tb_user")]),e._v(" 表为例，修改映射文件，增加如下配置：")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<delete id="delete">\n    DELETE FROM tb_user WHERE id = #{id}\n</delete>\n')])])]),a("p",[e._v("单元测试代码如下：")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("@Test\npublic void testDelete() {\n    TbUser tbUser = new TbUser();\n    tbUser.setId(37L);\n\n    tbUserDao.delete(tbUser);\n}\n")])])]),a("h2",{attrs:{id:"查询单个对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询单个对象"}},[e._v("#")]),e._v(" 查询单个对象")]),e._v(" "),a("p",[e._v("继续以 "),a("code",[e._v("tb_user")]),e._v(" 表为例，修改映射文件，增加如下配置：")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<select id="getById" resultType="TbUser">\n    SELECT\n      a.id,\n      a.username,\n      a.password,\n      a.phone,\n      a.email,\n      a.created,\n      a.updated AS "update"\n    FROM\n      tb_user AS a\n    WHERE\n      a.id = #{id}\n</select>\n')])])]),a("p",[e._v("单元测试代码如下：")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("@Test\npublic void testGetById() {\n    TbUser tbUser = tbUserDao.getById(36L);\n    System.out.println(tbUser.getUsername());\n}\n")])])]),a("h2",{attrs:{id:"update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update"}},[e._v("#")]),e._v(" UPDATE")]),e._v(" "),a("p",[e._v("继续以 "),a("code",[e._v("tb_user")]),e._v(" 表为例，修改映射文件，增加如下配置：")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<update id="update">\n    UPDATE\n      tb_user\n    SET\n      username = #{username},\n      password = #{password},\n      phone = #{phone},\n      email = #{email},\n      created = #{created},\n      updated = #{update}\n    WHERE id = #{id}\n</update>\n')])])]),a("p",[e._v("单元测试代码如下：")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('@Test\npublic void testUpdate() {\n    TbUser tbUser = tbUserDao.getById(36L);\n    tbUser.setUsername("Lusifer");\n\n    tbUserDao.update(tbUser);\n}\n')])])]),a("h2",{attrs:{id:"使用模糊查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用模糊查询"}},[e._v("#")]),e._v(" 使用模糊查询")]),e._v(" "),a("p",[e._v("继续以 "),a("code",[e._v("tb_user")]),e._v(" 表为例，修改映射文件，增加如下配置：")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<select id="selectByName" resultType="TbUser">\n    SELECT\n      a.id,\n      a.username,\n      a.password,\n      a.phone,\n      a.email,\n      a.created,\n      a.updated AS "update"\n    FROM\n      tb_user AS a\n    WHERE\n      a.username LIKE CONCAT (\'%\', #{username}, \'%\')\n</select>\n')])])]),a("p",[e._v("在进行模糊查询时，需要进行字符串的拼接。SQL 中的字符串的拼接使用的是函数 "),a("code",[e._v("concat(arg1, arg2, …)")]),e._v(" 。注意不能使用 Java 中的字符串连接符 "),a("code",[e._v("+")]),e._v("。")]),e._v(" "),a("p",[e._v("单元测试代码如下：")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('@Test\npublic void testSelectByName() {\n    List<TbUser> tbUsers = tbUserDao.selectByName("uni");\n    for (TbUser tbUser : tbUsers) {\n        System.out.println(tbUser.getUsername());\n    }\n}\n')])])])])}),[],!1,null,null,null);t.default=n.exports}}]);