(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{715:function(t,e,n){"use strict";n.r(e);var r=n(26),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"第一个-mybatis-对象关系映射"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第一个-mybatis-对象关系映射"}},[t._v("#")]),t._v(" 第一个 MyBatis 对象关系映射")]),t._v(" "),n("h2",{attrs:{id:"pom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pom"}},[t._v("#")]),t._v(" POM")]),t._v(" "),n("p",[t._v("编写完相关代码后，我们可以使用单元测试查看 MyBatis 的执行效果，需要增加单元测试相关依赖，配置如下：")]),t._v(" "),n("div",{staticClass:"language-text extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("<dependency>\n    <groupId>org.springframework</groupId>\n    <artifactId>spring-test</artifactId>\n    <version>4.3.17.RELEASE</version>\n</dependency>\n<dependency>\n    <groupId>junit</groupId>\n    <artifactId>junit</artifactId>\n    <version>4.12</version>\n</dependency>\n")])])]),n("h2",{attrs:{id:"导入-sql"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#导入-sql"}},[t._v("#")]),t._v(" 导入 SQL")]),t._v(" "),n("p",[t._v("位置： "),n("code",[t._v("Java 微服务架构相关环境资料-SQL/myshop.zip")])]),t._v(" "),n("h2",{attrs:{id:"定义实体类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定义实体类"}},[t._v("#")]),t._v(" 定义实体类")]),t._v(" "),n("p",[t._v("以 "),n("code",[t._v("tb_user")]),t._v(" 表为例，实体类代码如下：")]),t._v(" "),n("div",{staticClass:"language-text extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("package com.funtl.my.shop.domain;\n\nimport java.io.Serializable;\nimport java.util.Date;\n\npublic class TbUser implements Serializable {\n    private Long id;\n    private String username;\n    private String password;\n    private String phone;\n    private String email;\n    private Date created;\n    private Date update;\n\n    public Long getId() {\n        return id;\n    }\n\n    public void setId(Long id) {\n        this.id = id;\n    }\n\n    public String getUsername() {\n        return username;\n    }\n\n    public void setUsername(String username) {\n        this.username = username;\n    }\n\n    public String getPassword() {\n        return password;\n    }\n\n    public void setPassword(String password) {\n        this.password = password;\n    }\n\n    public String getPhone() {\n        return phone;\n    }\n\n    public void setPhone(String phone) {\n        this.phone = phone;\n    }\n\n    public String getEmail() {\n        return email;\n    }\n\n    public void setEmail(String email) {\n        this.email = email;\n    }\n\n    public Date getCreated() {\n        return created;\n    }\n\n    public void setCreated(Date created) {\n        this.created = created;\n    }\n\n    public Date getUpdate() {\n        return update;\n    }\n\n    public void setUpdate(Date update) {\n        this.update = update;\n    }\n}\n")])])]),n("h2",{attrs:{id:"定义数据访问接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定义数据访问接口"}},[t._v("#")]),t._v(" 定义数据访问接口")]),t._v(" "),n("p",[t._v("注意：Spring 集成 MyBatis 后，不需要手动实现 DAO 层的接口，所有的 SQL 执行语句都写在对应的关系映射配置文件中。")]),t._v(" "),n("div",{staticClass:"language-text extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("package com.funtl.my.shop.web.admin.dao;\n\nimport com.funtl.my.shop.domain.TbUser;\nimport org.springframework.stereotype.Repository;\n\nimport java.util.List;\n\n@Repository\npublic interface TbUserDao {\n\n    /**\n     * 查询全部用户信息\n     * @return\n     */\n    public List<TbUser> selectAll();\n}\n")])])]),n("h2",{attrs:{id:"第一个-mybatis-对象关系映射-html-定义业务逻辑接口-定义业务逻辑接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第一个-mybatis-对象关系映射-html-定义业务逻辑接口-定义业务逻辑接口"}},[t._v("#")]),t._v(" 第一个-MyBatis-对象关系映射.html#定义业务逻辑接口)定义业务逻辑接口")]),t._v(" "),n("div",{staticClass:"language-text extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("package com.funtl.my.shop.web.admin.service;\n\nimport com.funtl.my.shop.domain.TbUser;\n\nimport java.util.List;\n\npublic interface TbUserService {\n\n    /**\n     * 查询全部用户信息\n     * @return\n     */\n    public List<TbUser> selectAll();\n}\n")])])]),n("h2",{attrs:{id:"实现业务逻辑接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现业务逻辑接口"}},[t._v("#")]),t._v(" 实现业务逻辑接口")]),t._v(" "),n("div",{staticClass:"language-text extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("package com.funtl.my.shop.web.admin.service.impl;\n\nimport com.funtl.my.shop.domain.TbUser;\nimport com.funtl.my.shop.web.admin.dao.TbUserDao;\nimport com.funtl.my.shop.web.admin.service.TbUserService;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.stereotype.Service;\n\nimport java.util.List;\n\n@Service\npublic class TbUserServiceImpl implements TbUserService {\n\n    @Autowired\n    private TbUserDao tbUserDao;\n\n    @Override\n    public List<TbUser> selectAll() {\n        return tbUserDao.selectAll();\n    }\n}\n")])])]),n("h2",{attrs:{id:"定义映射文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定义映射文件"}},[t._v("#")]),t._v(" 定义映射文件")]),t._v(" "),n("p",[t._v("映射文件，简称为 Mapper，主要完成 DAO 层中 SQL 语句的映射。映射文件名随意，一般放在 "),n("code",[t._v("src/resources/mapper")]),t._v(" 文件夹中。这里映射文件名称定为 "),n("code",[t._v("TbUserMapper.xml")]),t._v("。")]),t._v(" "),n("div",{staticClass:"language-text extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n<mapper namespace="com.funtl.my.shop.web.admin.dao.TbUserDao">\n    <select id="selectAll" resultType="TbUser">\n        SELECT\n          a.id,\n          a.username,\n          a.password,\n          a.phone,\n          a.email,\n          a.created,\n          a.updated\n        FROM\n          tb_user AS a\n    </select>\n</mapper>\n')])])]),n("h2",{attrs:{id:"创建单元测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建单元测试"}},[t._v("#")]),t._v(" 创建单元测试")]),t._v(" "),n("p",[t._v("所有工作准备就绪，我们就可以测试 MyBatis 是否能够正常执行了。创建一个单元测试类，代码如下：")]),t._v(" "),n("div",{staticClass:"language-text extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('package com.funtl.my.shop.web.admin.service.test;\n\nimport com.funtl.my.shop.domain.TbUser;\nimport com.funtl.my.shop.web.admin.dao.TbUserDao;\nimport org.junit.Test;\nimport org.junit.runner.RunWith;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.test.context.ContextConfiguration;\nimport org.springframework.test.context.junit4.SpringJUnit4ClassRunner;\n\nimport java.util.List;\n\n@RunWith(SpringJUnit4ClassRunner.class)\n@ContextConfiguration({"classpath:spring-context.xml", "classpath:spring-context-druid.xml", "classpath:spring-context-mybatis.xml"})\npublic class TbUserServiceTest {\n\n    @Autowired\n    private TbUserDao tbUserDao;\n\n    @Test\n    public void testSelectAll() {\n        List<TbUser> tbUsers = tbUserDao.selectAll();\n        for (TbUser tbUser : tbUsers) {\n            System.out.println(tbUser.getUsername());\n        }\n    }\n}\n')])])]),n("p",[t._v("成功执行测试后，控制台输出如下：")]),t._v(" "),n("div",{staticClass:"language-text extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("2018-06-13 08:00:40,069 INFO [org.springframework.test.context.support.DefaultTestContextBootstrapper] - Loaded default TestExecutionListener class names from location [META-INF/spring.factories]: [org.springframework.test.context.web.ServletTestExecutionListener, org.springframework.test.context.support.DirtiesContextBeforeModesTestExecutionListener, org.springframework.test.context.support.DependencyInjectionTestExecutionListener, org.springframework.test.context.support.DirtiesContextTestExecutionListener, org.springframework.test.context.transaction.TransactionalTestExecutionListener, org.springframework.test.context.jdbc.SqlScriptsTestExecutionListener]\n2018-06-13 08:00:40,106 INFO [org.springframework.test.context.support.DefaultTestContextBootstrapper] - Using TestExecutionListeners: [org.springframework.test.context.web.ServletTestExecutionListener@4b9e13df, org.springframework.test.context.support.DirtiesContextBeforeModesTestExecutionListener@2b98378d, org.springframework.test.context.support.DependencyInjectionTestExecutionListener@475530b9, org.springframework.test.context.support.DirtiesContextTestExecutionListener@1d057a39, org.springframework.test.context.transaction.TransactionalTestExecutionListener@26be92ad, org.springframework.test.context.jdbc.SqlScriptsTestExecutionListener@4c70fda8]2018-06-13 08:00:40,213 INFO [org.springframework.beans.factory.xml.XmlBeanDefinitionReader] - Loading XML bean definitions from class path resource [spring-context.xml]\n2018-06-13 08:00:40,513 INFO [org.springframework.beans.factory.xml.XmlBeanDefinitionReader] - Loading XML bean definitions from class path resource [spring-context-druid.xml]\n2018-06-13 08:00:40,565 INFO [org.springframework.beans.factory.xml.XmlBeanDefinitionReader] - Loading XML bean definitions from class path resource [spring-context-mybatis.xml]\n2018-06-13 08:00:40,586 INFO [org.springframework.context.support.GenericApplicationContext] - Refreshing org.springframework.context.support.GenericApplicationContext@55d56113: startup date [Wed Jun 13 08:00:40 CST 2018]; root of context hierarchy\n2018-06-13 08:00:41,650 INFO [com.alibaba.druid.pool.DruidDataSource] - {dataSource-1} inited\nzhangsan\nzhangsan1\nzhangsan2\nzhangsan3\nzhangsan5\nlisi\nlisi1\njd_gogogo\ntidy\ntidy1\nniuniu\nniuniu2\nniuniu3\nniuniu4\ntest01\ntest02\n2018-06-13 08:00:42,143 INFO [org.springframework.context.support.GenericApplicationContext] - Closing org.springframework.context.support.GenericApplicationContext@55d56113: startup date [Wed Jun 13 08:00:40 CST 2018]; root of context hierarchy\n2018-06-13 08:00:42,149 INFO [com.alibaba.druid.pool.DruidDataSource] - {dataSource-1} closed\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);