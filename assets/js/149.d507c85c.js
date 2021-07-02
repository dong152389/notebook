(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{910:function(n,t,e){"use strict";e.r(t);var a=e(26),r=Object(a.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"jackson"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jackson"}},[n._v("#")]),n._v(" Jackson")]),n._v(" "),e("h2",{attrs:{id:"jackson-简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jackson-简介"}},[n._v("#")]),n._v(" Jackson 简介")]),n._v(" "),e("p",[n._v("Jackson 是一个简单基于 Java 应用库，Jackson 可以轻松的将 Java 对象转换成 json 对象和 xml 文档，同样也可以将 json、xml 转换成 Java 对象。Jackson 所依赖的 jar 包较少，简单易用并且性能也要相对高些，并且 Jackson 社区相对比较活跃，更新速度也比较快。")]),n._v(" "),e("h2",{attrs:{id:"jackson-特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jackson-特点"}},[n._v("#")]),n._v(" Jackson 特点")]),n._v(" "),e("ul",[e("li",[n._v("容易使用 - jackson API 提供了一个高层次外观，以简化常用的用例。")]),n._v(" "),e("li",[n._v("无需创建映射 - API提供了默认的映射大部分对象序列化。")]),n._v(" "),e("li",[n._v("性能高 - 快速，低内存占用，适合大型对象图表或系统。")]),n._v(" "),e("li",[n._v("干净的 JSON - jackson 创建一个干净和紧凑的 JSON 结果，这是让人很容易阅读。")]),n._v(" "),e("li",[n._v("不依赖 - 库不需要任何其他的库，除了 JDK。")]),n._v(" "),e("li",[n._v("开源代码 - jackson 是开源的，可以免费使用。")])]),n._v(" "),e("h2",{attrs:{id:"jackson-注解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jackson-注解"}},[n._v("#")]),n._v(" Jackson 注解")]),n._v(" "),e("p",[n._v("Jackson 类库包含了很多注解，可以让我们快速建立 Java 类与 JSON 之间的关系。")]),n._v(" "),e("h3",{attrs:{id:"jsonproperty"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsonproperty"}},[n._v("#")]),n._v(" "),e("code",[n._v("@JsonProperty")])]),n._v(" "),e("p",[e("code",[n._v("@JsonProperty")]),n._v(" 注解指定一个属性用于 JSON 映射，默认情况下映射的 JSON 属性与注解的属性名称相同，不过可以使用该注解的 "),e("code",[n._v("value")]),n._v(" 值修改 JSON 属性名，该注解还有一个 "),e("code",[n._v("index")]),n._v(" 属性指定生成 JSON 属性的顺序，如果有必要的话。")]),n._v(" "),e("h3",{attrs:{id:"jsonignore"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsonignore"}},[n._v("#")]),n._v(" "),e("code",[n._v("@JsonIgnore")])]),n._v(" "),e("p",[e("code",[n._v("@JsonIgnore")]),n._v(" 注解用于排除某个属性，这样该属性就不会被 Jackson 序列化和反序列化。")]),n._v(" "),e("h3",{attrs:{id:"jsonignoreproperties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsonignoreproperties"}},[n._v("#")]),n._v(" "),e("code",[n._v("@JsonIgnoreProperties")])]),n._v(" "),e("p",[e("code",[n._v("@JsonIgnoreProperties")]),n._v(" 注解是类注解。在序列化为 JSON 的时候，"),e("code",[n._v('@JsonIgnoreProperties({"prop1", "prop2"})')]),n._v(" 会忽略 "),e("code",[n._v("pro1")]),n._v(" 和 "),e("code",[n._v("pro2")]),n._v(" 两个属性。在从 JSON 反序列化为 Java 类的时候，"),e("code",[n._v("@JsonIgnoreProperties(ignoreUnknown=true)")]),n._v(" 会忽略所有没有 "),e("code",[n._v("Getter")]),n._v(" 和 "),e("code",[n._v("Setter")]),n._v(" 的属性。该注解在 Java 类和 JSON 不完全匹配的时候很有用。")]),n._v(" "),e("h3",{attrs:{id:"jsonignoretype"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsonignoretype"}},[n._v("#")]),n._v(" "),e("code",[n._v("@JsonIgnoreType")])]),n._v(" "),e("p",[e("code",[n._v("@JsonIgnoreType")]),n._v(" 也是类注解，会排除所有指定类型的属性。")]),n._v(" "),e("h3",{attrs:{id:"jsonpropertyorder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsonpropertyorder"}},[n._v("#")]),n._v(" "),e("code",[n._v("@JsonPropertyOrder")])]),n._v(" "),e("p",[e("code",[n._v("@JsonPropertyOrder")]),n._v(" 和 "),e("code",[n._v("@JsonProperty")]),n._v(" 的 "),e("code",[n._v("index")]),n._v(" 属性类似，指定属性序列化时的顺序。")]),n._v(" "),e("h3",{attrs:{id:"jsonrootname"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsonrootname"}},[n._v("#")]),n._v(" "),e("code",[n._v("@JsonRootName")])]),n._v(" "),e("p",[e("code",[n._v("@JsonRootName")]),n._v(" 注解用于指定 JSON 根属性的名称。")]),n._v(" "),e("h2",{attrs:{id:"jackson-使用实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jackson-使用实例"}},[n._v("#")]),n._v(" Jackson 使用实例")]),n._v(" "),e("h3",{attrs:{id:"对象的序列化与反序列化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对象的序列化与反序列化"}},[n._v("#")]),n._v(" 对象的序列化与反序列化")]),n._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('package com.dfd.hello.httpclient;\n\nimport com.fasterxml.jackson.core.JsonParseException;\nimport com.fasterxml.jackson.databind.JsonMappingException;\nimport com.fasterxml.jackson.databind.ObjectMapper;\n\nimport java.io.IOException;\n\npublic class JsonTester {\n    public static void main(String[] args) {\n        // 创建 ObjectMapper 对象\n        ObjectMapper mapper = new ObjectMapper();\n        String jsonString = "{\\"name\\":\\"Mahesh\\", \\"age\\":21}";\n\n        try {\n            // 反序列化 JSON 到对象\n            Student student = mapper.readValue(jsonString, Student.class);\n            System.out.println(student);\n\n            // 序列化对象到 JSON\n            String json = mapper.writeValueAsString(student);\n            System.out.println(json);\n        } catch (JsonParseException e) {\n            e.printStackTrace();\n        } catch (JsonMappingException e) {\n            e.printStackTrace();\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}\n\nclass Student {\n    private String name;\n    private int age;\n\n    public Student() {\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    public int getAge() {\n        return age;\n    }\n\n    public void setAge(int age) {\n        this.age = age;\n    }\n\n    public String toString() {\n        return "Student [ name: " + name + ", age: " + age + " ]";\n    }\n}\n')])])]),e("h3",{attrs:{id:"集合的序列化与反序列化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集合的序列化与反序列化"}},[n._v("#")]),n._v(" 集合的序列化与反序列化")]),n._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('package com.dfd.hello.httpclient;\n\nimport com.fasterxml.jackson.databind.JavaType;\nimport com.fasterxml.jackson.databind.JsonNode;\nimport com.fasterxml.jackson.databind.ObjectMapper;\n\nimport java.io.IOException;\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic class JsonTester {\n    public static void main(String[] args) {\n        // 创建 ObjectMapper 对象\n        ObjectMapper mapper = new ObjectMapper();\n        String jsonString = "{\\"draw\\":1,\\"recordsTotal\\":1,\\"recordsFiltered\\":1,\\"data\\":[{\\"id\\":33,\\"title\\":\\"ad1\\",\\"subTitle\\":\\"ad1\\",\\"titleDesc\\":\\"ad1\\",\\"url\\":\\"https://sale.jd.com/act/XkCzhoisOMSW.html\\",\\"pic\\":\\"https://m.360buyimg.com/babel/jfs/t20164/187/1771326168/92964/b42fade7/5b359ab2N93be3a65.jpg\\",\\"pic2\\":\\"\\",\\"content\\":\\"<p><br></p>\\"}],\\"error\\":null}";\n\n        try {\n            // 反序列化 JSON 到树\n            JsonNode jsonNode = mapper.readTree(jsonString);\n\n            // 从树中读取 data 节点\n            JsonNode jsonData = jsonNode.findPath("data");\n            System.out.println(jsonData);\n\n            // 反序列化 JSON 到集合\n            JavaType javaType = mapper.getTypeFactory().constructParametricType(ArrayList.class, TbContent.class);\n            List<TbContent> tbContents = mapper.readValue(jsonData.toString(), javaType);\n            for (TbContent tbContent : tbContents) {\n                System.out.println(tbContent);\n            }\n\n            // 序列化集合到 JSON\n            String json = mapper.writeValueAsString(tbContents);\n            System.out.println(json);\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}\n\nclass TbContent {\n    private Long id;\n    private String title;\n    private String subTitle;\n    private String titleDesc;\n    private String url;\n    private String pic;\n    private String pic2;\n    private String content;\n\n    public Long getId() {\n        return id;\n    }\n\n    public void setId(Long id) {\n        this.id = id;\n    }\n\n    public String getTitle() {\n        return title;\n    }\n\n    public void setTitle(String title) {\n        this.title = title;\n    }\n\n    public String getSubTitle() {\n        return subTitle;\n    }\n\n    public void setSubTitle(String subTitle) {\n        this.subTitle = subTitle;\n    }\n\n    public String getTitleDesc() {\n        return titleDesc;\n    }\n\n    public void setTitleDesc(String titleDesc) {\n        this.titleDesc = titleDesc;\n    }\n\n    public String getUrl() {\n        return url;\n    }\n\n    public void setUrl(String url) {\n        this.url = url;\n    }\n\n    public String getPic() {\n        return pic;\n    }\n\n    public void setPic(String pic) {\n        this.pic = pic;\n    }\n\n    public String getPic2() {\n        return pic2;\n    }\n\n    public void setPic2(String pic2) {\n        this.pic2 = pic2;\n    }\n\n    public String getContent() {\n        return content;\n    }\n\n    public void setContent(String content) {\n        this.content = content;\n    }\n\n    @Override\n    public String toString() {\n        return "TbContent{" +\n                "id=" + id +\n                ", title=\'" + title + \'\\\'\' +\n                ", subTitle=\'" + subTitle + \'\\\'\' +\n                ", titleDesc=\'" + titleDesc + \'\\\'\' +\n                ", url=\'" + url + \'\\\'\' +\n                ", pic=\'" + pic + \'\\\'\' +\n                ", pic2=\'" + pic2 + \'\\\'\' +\n                ", content=\'" + content + \'\\\'\' +\n                \'}\';\n    }\n}\n')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);