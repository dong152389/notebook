(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{381:function(t,e,n){t.exports=n.p+"assets/img/Lusifer201807030001.68d20377.png"},589:function(t,e,n){"use strict";n.r(e);var a=n(26),p=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"apache-httpclient"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache-httpclient"}},[t._v("#")]),t._v(" Apache HttpClient")]),t._v(" "),a("h2",{attrs:{id:"简易架构图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简易架构图"}},[t._v("#")]),t._v(" 简易架构图")]),t._v(" "),a("p",[a("img",{attrs:{src:n(381),alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"apache-httpclient-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache-httpclient-简介"}},[t._v("#")]),t._v(" Apache HttpClient 简介")]),t._v(" "),a("blockquote",[a("p",[t._v("HttpClient 是 Apache Jakarta Common 下的子项目，用来提供高效的、最新的、功能丰富的支持 HTTP 协议的客户端编程工具包，并且它支持 HTTP 协议最新的版本和建议。HttpClient 已经应用在很多的项目中，比如 Apache Jakarta 上很著名的另外两个开源项目 Cactus 和 "),a("strong",[t._v("HTMLUnit")]),t._v(" 都使用了 HttpClient。")])]),t._v(" "),a("p",[t._v("HttpClient 相比传统 JDK 自带的 "),a("code",[t._v("URLConnection")]),t._v("，增加了易用性和灵活性，它不仅是客户端发送 HTTP 请求变得容易，而且也方便了开发人员测试接口（基于 HTTP 协议的），即提高了开发的效率，也方便提高代码的健壮性。因此熟练掌握 HttpClient 是很重要的必修内容，掌握 HttpClient 后，相信对于 HTTP 协议的了解会更加深入。")]),t._v(" "),a("h2",{attrs:{id:"apache-httpclient-特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache-httpclient-特性"}},[t._v("#")]),t._v(" Apache HttpClient 特性")]),t._v(" "),a("ul",[a("li",[t._v("基于标准、纯净的 Java 语言。实现了 HTTP 1.0 和 HTTP 1.1")]),t._v(" "),a("li",[t._v("以可扩展的面向对象的结构实现了 HTTP 全部的方法（GET, POST, PUT, DELETE, HEAD, OPTIONS, and TRACE）。")]),t._v(" "),a("li",[t._v("支持 HTTPS 协议。")]),t._v(" "),a("li",[t._v("通过 HTTP 代理建立透明的连接。")]),t._v(" "),a("li",[t._v("利用 CONNECT 方法通过 HTTP 代理建立隧道的 HTTPS 连接。")]),t._v(" "),a("li",[t._v("Basic, Digest, NTLMv1, NTLMv2, NTLM2 Session, SNPNEGO/Kerberos 认证方案。")]),t._v(" "),a("li",[t._v("插件式的自定义认证方案。")]),t._v(" "),a("li",[t._v("便携可靠的套接字工厂使它更容易的使用第三方解决方案。")]),t._v(" "),a("li",[t._v("连接管理器支持多线程应用。支持设置最大连接数，同时支持设置每个主机的最大连接数，发现并关闭过期的连接。")]),t._v(" "),a("li",[t._v("自动处理 Set-Cookie 中的 Cookie。")]),t._v(" "),a("li",[t._v("插件式的自定义 Cookie 策略。")]),t._v(" "),a("li",[t._v("Request 的输出流可以避免流中内容直接缓冲到 Socket 服务器。")]),t._v(" "),a("li",[t._v("Response 的输入流可以有效的从 Socket 服务器直接读取相应内容。")]),t._v(" "),a("li",[t._v("在 HTTP 1.0 和 HTTP 1.1 中利用 KeepAlive 保持持久连接。")]),t._v(" "),a("li",[t._v("直接获取服务器发送的 response code 和 headers。")]),t._v(" "),a("li",[t._v("设置连接超时的能力。")]),t._v(" "),a("li",[t._v("实验性的支持 HTTP 1.1 response caching。")]),t._v(" "),a("li",[t._v("源代码基于 Apache License 可免费获取。")])]),t._v(" "),a("h2",{attrs:{id:"apache-httpclient-使用流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache-httpclient-使用流程"}},[t._v("#")]),t._v(" Apache HttpClient 使用流程")]),t._v(" "),a("p",[t._v("使用 HttpClient 发送请求、接收响应很简单，一般需要如下几步即可。")]),t._v(" "),a("ul",[a("li",[t._v("创建 "),a("code",[t._v("HttpClient")]),t._v(" 对象。")]),t._v(" "),a("li",[t._v("创建请求方法的实例，并指定请求 URL。如果需要发送 GET 请求，创建 "),a("code",[t._v("HttpGet")]),t._v(" 对象；如果需要发送 POST 请求，创建 "),a("code",[t._v("HttpPost")]),t._v(" 对象。")]),t._v(" "),a("li",[t._v("如果需要发送请求参数，可调用 "),a("code",[t._v("HttpGet")]),t._v("、"),a("code",[t._v("HttpPost")]),t._v(" 共同的 "),a("code",[t._v("setParams(HttpParams params)")]),t._v(" 方法来添加请求参数；对于 "),a("code",[t._v("HttpPost")]),t._v(" 对象而言，也可调用 "),a("code",[t._v("setEntity(HttpEntity entity)")]),t._v(" 方法来设置请求参数。")]),t._v(" "),a("li",[t._v("调用 "),a("code",[t._v("HttpClient")]),t._v(" 对象的 "),a("code",[t._v("execute(HttpUriRequest request)")]),t._v(" 发送请求，该方法返回一个 "),a("code",[t._v("HttpResponse")]),t._v("。")]),t._v(" "),a("li",[t._v("调用 "),a("code",[t._v("HttpResponse")]),t._v(" 的 "),a("code",[t._v("getAllHeaders()")]),t._v("、"),a("code",[t._v("getHeaders(String name)")]),t._v(" 等方法可获取服务器的响应头；调用 "),a("code",[t._v("HttpResponse")]),t._v(" 的 "),a("code",[t._v("getEntity()")]),t._v(" 方法可获取 "),a("code",[t._v("HttpEntity")]),t._v(" 对象，该对象包装了服务器的响应内容。程序可通过该对象获取服务器的响应内容。")]),t._v(" "),a("li",[t._v("释放连接。无论执行方法是否成功，都必须释放连接")])]),t._v(" "),a("h2",{attrs:{id:"apache-httpclient-使用实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache-httpclient-使用实例"}},[t._v("#")]),t._v(" Apache HttpClient 使用实例")]),t._v(" "),a("h3",{attrs:{id:"pom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pom"}},[t._v("#")]),t._v(" POM")]),t._v(" "),a("p",[a("code",[t._v("pom.xml")]),t._v(" 配置如下：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\x3c!-- Apache Http Begin --\x3e\n<dependency>\n    <groupId>org.apache.httpcomponents</groupId>\n    <artifactId>httpclient</artifactId>\n    <version>4.5.5</version>\n</dependency>\n<dependency>\n    <groupId>org.apache.httpcomponents</groupId>\n    <artifactId>fluent-hc</artifactId>\n    <version>4.5.5</version>\n</dependency>\n<dependency>\n    <groupId>org.apache.httpcomponents</groupId>\n    <artifactId>httpmime</artifactId>\n    <version>4.5.5</version>\n</dependency>\n\x3c!-- Apache Http End --\x3e\n")])])]),a("p",[t._v("主要增加了 "),a("code",[t._v("org.apache.httpcomponents:httpclient")]),t._v("、"),a("code",[t._v("org.apache.httpcomponents:fluent-hc")]),t._v("、"),a("code",[t._v("org.apache.httpcomponents:httpmime")]),t._v(" 三个依赖")]),t._v(" "),a("h3",{attrs:{id:"创建-httpget-请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-httpget-请求"}},[t._v("#")]),t._v(" 创建 HttpGet 请求")]),t._v(" "),a("p",[t._v("案例代码如下：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('package com.funtl.hello.httpclient;\n\nimport org.apache.http.HttpEntity;\nimport org.apache.http.client.methods.CloseableHttpResponse;\nimport org.apache.http.client.methods.HttpGet;\nimport org.apache.http.impl.client.CloseableHttpClient;\nimport org.apache.http.impl.client.HttpClients;\nimport org.apache.http.util.EntityUtils;\n\nimport java.io.IOException;\n\npublic class MyTest {\n    public static void main(String[] args) {\n        get();\n    }\n\n    private static void get() {\n        // 创建 HttpClient 客户端\n        CloseableHttpClient httpClient = HttpClients.createDefault();\n\n        // 创建 HttpGet 请求\n        HttpGet httpGet = new HttpGet("http://localhost:8080/content/page?draw=1&start=0&length=10");\n        // 设置长连接\n        httpGet.setHeader("Connection", "keep-alive");\n        // 设置代理（模拟浏览器版本）\n        httpGet.setHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36");\n        // 设置 Cookie\n        httpGet.setHeader("Cookie", "UM_distinctid=16442706a09352-0376059833914f-3c604504-1fa400-16442706a0b345; CNZZDATA1262458286=1603637673-1530123020-%7C1530123020; JSESSIONID=805587506F1594AE02DC45845A7216A4");\n\n        CloseableHttpResponse httpResponse = null;\n        try {\n            // 请求并获得响应结果\n            httpResponse = httpClient.execute(httpGet);\n            HttpEntity httpEntity = httpResponse.getEntity();\n            // 输出请求结果\n            System.out.println(EntityUtils.toString(httpEntity));\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n\n        // 无论如何必须关闭连接\n        finally {\n            if (httpResponse != null) {\n                try {\n                    httpResponse.close();\n                } catch (IOException e) {\n                    e.printStackTrace();\n                }\n            }\n\n            if (httpClient != null) {\n                try {\n                    httpClient.close();\n                } catch (IOException e) {\n                    e.printStackTrace();\n                }\n            }\n        }\n    }\n}\n')])])]),a("p",[t._v("控制台输出结果：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{"draw":1,"recordsTotal":1,"recordsFiltered":1,"data":[{"id":33,"created":1530542074000,"updated":1530542074000,"title":"ad1","subTitle":"ad1","titleDesc":"ad1","url":"https://sale.jd.com/act/XkCzhoisOMSW.html","pic":"https://m.360buyimg.com/babel/jfs/t20164/187/1771326168/92964/b42fade7/5b359ab2N93be3a65.jpg","pic2":"","content":"<p><br></p>","tbContentCategory":{"id":89,"created":null,"updated":null,"parent":null,"isParent":null,"name":"幻灯片","status":null,"sortOrder":null}}],"error":null}\n')])])]),a("h3",{attrs:{id:"创建-httppost-请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-httppost-请求"}},[t._v("#")]),t._v(" 创建 HttpPost 请求")]),t._v(" "),a("p",[t._v("案例代码如下：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('package com.funtl.hello.httpclient;\n\nimport org.apache.http.HttpEntity;\nimport org.apache.http.client.ClientProtocolException;\nimport org.apache.http.client.entity.UrlEncodedFormEntity;\nimport org.apache.http.client.methods.CloseableHttpResponse;\nimport org.apache.http.client.methods.HttpPost;\nimport org.apache.http.impl.client.CloseableHttpClient;\nimport org.apache.http.impl.client.HttpClients;\nimport org.apache.http.message.BasicNameValuePair;\nimport org.apache.http.util.EntityUtils;\n\nimport java.io.IOException;\nimport java.io.UnsupportedEncodingException;\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic class MyTest {\n    public static void main(String[] args) {\n        post();\n    }\n\n    private static void post() {\n        // 创建 HttpClient 客户端\n        CloseableHttpClient httpClient = HttpClients.createDefault();\n\n        // 创建 HttpPost 请求\n        HttpPost httpPost = new HttpPost("http://localhost:8080/content/page");\n        // 设置长连接\n        httpPost.setHeader("Connection", "keep-alive");\n        // 设置代理（模拟浏览器版本）\n        httpPost.setHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36");\n        // 设置 Cookie\n        httpPost.setHeader("Cookie", "UM_distinctid=16442706a09352-0376059833914f-3c604504-1fa400-16442706a0b345; CNZZDATA1262458286=1603637673-1530123020-%7C1530123020; JSESSIONID=805587506F1594AE02DC45845A7216A4");\n\n        // 创建 HttpPost 参数\n        List<BasicNameValuePair> params = new ArrayList<BasicNameValuePair>();\n        params.add(new BasicNameValuePair("draw", "1"));\n        params.add(new BasicNameValuePair("start", "0"));\n        params.add(new BasicNameValuePair("length", "10"));\n\n        CloseableHttpResponse httpResponse = null;\n        try {\n            // 设置 HttpPost 参数\n            httpPost.setEntity(new UrlEncodedFormEntity(params, "UTF-8"));\n            httpResponse = httpClient.execute(httpPost);\n            HttpEntity httpEntity = httpResponse.getEntity();\n            // 输出请求结果\n            System.out.println(EntityUtils.toString(httpEntity));\n        } catch (UnsupportedEncodingException e) {\n            e.printStackTrace();\n        } catch (ClientProtocolException e) {\n            e.printStackTrace();\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n\n        // 无论如何必须关闭连接\n        finally {\n            try {\n                if (httpResponse != null) {\n                    httpResponse.close();\n                }\n            } catch (IOException e) {\n                e.printStackTrace();\n            }\n\n            try {\n                if (httpClient != null) {\n                    httpClient.close();\n                }\n            } catch (IOException e) {\n                e.printStackTrace();\n            }\n        }\n    }\n}\n')])])]),a("p",[t._v("控制台输出结果：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{"draw":1,"recordsTotal":1,"recordsFiltered":1,"data":[{"id":33,"created":1530542074000,"updated":1530542074000,"title":"ad1","subTitle":"ad1","titleDesc":"ad1","url":"https://sale.jd.com/act/XkCzhoisOMSW.html","pic":"https://m.360buyimg.com/babel/jfs/t20164/187/1771326168/92964/b42fade7/5b359ab2N93be3a65.jpg","pic2":"","content":"<p><br></p>","tbContentCategory":{"id":89,"created":null,"updated":null,"parent":null,"isParent":null,"name":"幻灯片","status":null,"sortOrder":null}}],"error":null}\n')])])])])}),[],!1,null,null,null);e.default=p.exports}}]);