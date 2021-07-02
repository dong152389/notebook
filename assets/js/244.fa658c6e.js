(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{1042:function(e,a,n){"use strict";n.r(a);var t=n(26),s=Object(t.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"spring-整合-mybatis"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring-整合-mybatis"}},[e._v("#")]),e._v(" Spring 整合 MyBatis")]),e._v(" "),n("h2",{attrs:{id:"pom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pom"}},[e._v("#")]),e._v(" POM")]),e._v(" "),n("p",[e._v("在 "),n("code",[e._v("pom.xml")]),e._v(" 文件中增加 MyBatis 相关依赖：")]),e._v(" "),n("div",{staticClass:"language-text extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("<dependency>\n    <groupId>org.mybatis</groupId>\n    <artifactId>mybatis</artifactId>\n    <version>3.2.8</version>\n</dependency>\n<dependency>\n    <groupId>org.mybatis</groupId>\n    <artifactId>mybatis-spring</artifactId>\n    <version>1.3.1</version>\n</dependency>\n<dependency>\n    <groupId>org.springframework</groupId>\n    <artifactId>spring-jdbc</artifactId>\n    <version>4.3.17.RELEASE</version>\n</dependency>\n")])])]),n("p",[e._v("主要增加了 3 个依赖，分别为 "),n("code",[e._v("org.mybatis:mybatis")]),e._v("、"),n("code",[e._v("org.mybatis:mybatis-spring")]),e._v("、"),n("code",[e._v("org.springframework:spring-jdbc")])]),e._v(" "),n("h2",{attrs:{id:"创建-mybatis-配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建-mybatis-配置文件"}},[e._v("#")]),e._v(" 创建 MyBatis 配置文件")]),e._v(" "),n("p",[e._v("创建一个名为 "),n("code",[e._v("mybatis-config.xml")]),e._v(" 的配置文件，内容如下：")]),e._v(" "),n("div",{staticClass:"language-text extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE configuration PUBLIC "-//mybatis.org//DTD Config 3.0//EN" "http://mybatis.org/dtd/mybatis-3-config.dtd">\n<configuration>\n    \x3c!-- 全局参数 --\x3e\n    <settings>\n        \x3c!-- 打印 SQL 语句 --\x3e\n        <setting name="logImpl" value="STDOUT_LOGGING" />\n    \n        \x3c!-- 使全局的映射器启用或禁用缓存。 --\x3e\n        <setting name="cacheEnabled" value="false"/>\n\n        \x3c!-- 全局启用或禁用延迟加载。当禁用时，所有关联对象都会即时加载。 --\x3e\n        <setting name="lazyLoadingEnabled" value="true"/>\n\n        \x3c!-- 当启用时，有延迟加载属性的对象在被调用时将会完全加载任意属性。否则，每种属性将会按需要加载。 --\x3e\n        <setting name="aggressiveLazyLoading" value="true"/>\n\n        \x3c!-- 是否允许单条 SQL 返回多个数据集 (取决于驱动的兼容性) default:true --\x3e\n        <setting name="multipleResultSetsEnabled" value="true"/>\n\n        \x3c!-- 是否可以使用列的别名 (取决于驱动的兼容性) default:true --\x3e\n        <setting name="useColumnLabel" value="true"/>\n\n        \x3c!-- 允许 JDBC 生成主键。需要驱动器支持。如果设为了 true，这个设置将强制使用被生成的主键，有一些驱动器不兼容不过仍然可以执行。 default:false  --\x3e\n        <setting name="useGeneratedKeys" value="false"/>\n\n        \x3c!-- 指定 MyBatis 如何自动映射 数据基表的列 NONE：不映射 PARTIAL：部分 FULL:全部  --\x3e\n        <setting name="autoMappingBehavior" value="PARTIAL"/>\n\n        \x3c!-- 这是默认的执行类型 （SIMPLE: 简单； REUSE: 执行器可能重复使用prepared statements语句；BATCH: 执行器可以重复执行语句和批量更新） --\x3e\n        <setting name="defaultExecutorType" value="SIMPLE"/>\n\n        \x3c!-- 使用驼峰命名法转换字段。 --\x3e\n        <setting name="mapUnderscoreToCamelCase" value="true"/>\n\n        \x3c!-- 设置本地缓存范围 session:就会有数据的共享 statement:语句范围 (这样就不会有数据的共享 ) defalut:session --\x3e\n        <setting name="localCacheScope" value="SESSION"/>\n\n        \x3c!-- 设置 JDBC 类型为空时,某些驱动程序 要指定值, default:OTHER，插入空值时不需要指定类型 --\x3e\n        <setting name="jdbcTypeForNull" value="NULL"/>\n    </settings>\n</configuration>\n')])])]),n("h2",{attrs:{id:"spring-集成-mybatis"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#spring-集成-mybatis"}},[e._v("#")]),e._v(" Spring 集成 MyBatis")]),e._v(" "),n("p",[e._v("创建一个名为 "),n("code",[e._v("spring-context-mybatis.xml")]),e._v(" 的 Spring 配置文件，内容如下：")]),e._v(" "),n("div",{staticClass:"language-text extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx.xsd">\n\n    \x3c!-- 配置 SqlSession --\x3e\n    <bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">\n        <property name="dataSource" ref="dataSource"/>\n        \x3c!-- 用于配置对应实体类所在的包，多个 package 之间可以用 \',\' 号分割 --\x3e\n        <property name="typeAliasesPackage" value="com.dfd.my.shop.domain"/>\n        \x3c!-- 用于配置对象关系映射配置文件所在目录 --\x3e\n        <property name="mapperLocations" value="classpath:/mapper/**/*.xml"/>\n        <property name="configLocation" value="classpath:/mybatis-config.xml"></property>\n    </bean>\n\n    \x3c!-- 扫描 Mapper --\x3e\n    <bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">\n        <property name="basePackage" value="com.dfd.my.shop.web.admin.dao" />\n    </bean>\n</beans>\n')])])])])}),[],!1,null,null,null);a.default=s.exports}}]);