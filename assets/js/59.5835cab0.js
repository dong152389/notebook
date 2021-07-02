(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{472:function(s,a,t){s.exports=t.p+"assets/img/Lusifer1512700142.c6da39ac.png"},473:function(s,a,t){s.exports=t.p+"assets/img/Lusifer1520779234.09349f55.png"},883:function(s,a,t){"use strict";t.r(a);var r=t(26),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,r=s._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"基于-docker-安装-solr"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基于-docker-安装-solr"}},[s._v("#")]),s._v(" 基于 Docker 安装 Solr")]),s._v(" "),r("h2",{attrs:{id:"基本部署"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本部署"}},[s._v("#")]),s._v(" 基本部署")]),s._v(" "),r("h3",{attrs:{id:"docker-compose-yml"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml"}},[s._v("#")]),s._v(" docker-compose.yml")]),s._v(" "),r("div",{staticClass:"language-yaml extra-class"},[r("pre",{pre:!0,attrs:{class:"language-yaml"}},[r("code",[r("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.1'")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("solr")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" solr\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" solr\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 8983"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("8983")]),s._v("\n")])])]),r("h3",{attrs:{id:"部署成功效果图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#部署成功效果图"}},[s._v("#")]),s._v(" 部署成功效果图")]),s._v(" "),r("p",[s._v("访问地址：http://192.168.10.131:8983/")]),s._v(" "),r("p",[r("img",{attrs:{src:t(472),alt:"img"}})]),s._v(" "),r("h2",{attrs:{id:"什么是分词技术"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是分词技术"}},[s._v("#")]),s._v(" 什么是分词技术？")]),s._v(" "),r("p",[s._v("分词技术就是搜索引擎针对用户提交查询的关键词串进行的查询处理后根据用户的关键词串用各种匹配方法进行分词的一种技术。")]),s._v(" "),r("h3",{attrs:{id:"中文分词算法分类"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#中文分词算法分类"}},[s._v("#")]),s._v(" 中文分词算法分类")]),s._v(" "),r("ul",[r("li",[s._v("基于字符串匹配")])]),s._v(" "),r("p",[s._v("基于字符串匹配，即扫描字符串，如果发现字符串的子串和词相同，就算匹配，这类分词通常会加入一些启发式规则，比如“正向/反向最大匹配”,“长词优先”等策略，这类算法优点是速度块，都是O(n)时间复杂度，实现简单，效果尚可。缺点，就是对歧义和未登录词处理不好")]),s._v(" "),r("p",[s._v('歧义的列子：歧义的例子很简单"长春市/长春/药店" "长春/市长/春药/店" 未登录：即词典中没有出现的词，当然也就处理不好')]),s._v(" "),r("p",[s._v("ikanalyzer, paoding 等就是基于字符串匹配的分词")]),s._v(" "),r("ul",[r("li",[s._v("基于统计以及机器学习的分词方式")])]),s._v(" "),r("p",[s._v("这类分词基于人工标注的词性和统计特征，对中文进行建模，即根据观测到的数据（标注好的语料）对模型参数进行估计，即训练。在分词阶段再通过模型计算各种分词出现的概率，将概率最大的分词结果作为最终结果。常见的序列标注模型有 HMM 和 CRF。")]),s._v(" "),r("p",[s._v("这类分词算法能很好处理歧义和未登录词问题，效果比前一类效果好，但是需要大量的人工标注数据，以及较慢的分词速度。")]),s._v(" "),r("h3",{attrs:{id:"什么是-ikanalyzer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是-ikanalyzer"}},[s._v("#")]),s._v(" 什么是 IKAnalyzer")]),s._v(" "),r("p",[s._v("IKAnalyzer 是一个开源的，基于 Java 语言开发的轻量级的中文分词工具包，基于文本匹配，不需要投入大量人力进行训练和标注可以自定词典，方便加入特定领域的词语，能分出多粒度的结果")]),s._v(" "),r("h2",{attrs:{id:"部署-solr-并安装-ikanalyzer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#部署-solr-并安装-ikanalyzer"}},[s._v("#")]),s._v(" 部署 Solr 并安装 IKAnalyzer")]),s._v(" "),r("p",[s._v("创建一个名为 "),r("code",[s._v("/usr/local/docker/solr/ikanalyzer")]),s._v(" 目录")]),s._v(" "),r("ul",[r("li",[r("code",[s._v("/usr/local/docker/solr")]),s._v("：用于存放 docker-compose.yml 配置文件")]),s._v(" "),r("li",[r("code",[s._v("/usr/local/docker/solr/ikanalyzer")]),s._v("：用于存放 Dockerfile 镜像配置文件")])]),s._v(" "),r("h3",{attrs:{id:"docker-compose-yml-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml-2"}},[s._v("#")]),s._v(" docker-compose.yml")]),s._v(" "),r("div",{staticClass:"language-yaml extra-class"},[r("pre",{pre:!0,attrs:{class:"language-yaml"}},[r("code",[r("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.1'")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("solr")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ikanalyzer\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" solr\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 8983"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("8983")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./solrdata"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/opt/solrdata\n")])])]),r("h3",{attrs:{id:"dockerfile"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[s._v("#")]),s._v(" Dockerfile")]),s._v(" "),r("div",{staticClass:"language-dockerfile extra-class"},[r("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" solr\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("MAINTAINER")]),s._v(" Lusifer <topsale@vip.qq.com"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建 Core")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /opt/solr/server/solr\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" mkdir ik_core\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /opt/solr/server/solr/ik_core\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" echo "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v("'name=ik_core'")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v(" core.properties\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" mkdir data\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" cp "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("r ../configsets/sample_techproducts_configs/conf/ .\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装中文分词")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /opt/solr/server/solr"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("webapp/webapp/WEB"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("INF/lib\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" ik"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("analyzer"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("solr5"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("5.x.jar .\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" solr"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("analyzer"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ik"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("5.1.0.jar .\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /opt/solr/server/solr"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("webapp/webapp/WEB"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("INF\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" ext.dic .\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" stopword.dic .\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" IKAnalyzer.cfg.xml .\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 增加分词配置")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" managed"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("schema /opt/solr/server/solr/ik_core/conf\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /opt/solr\n")])])]),r("h3",{attrs:{id:"部署成功效果图-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#部署成功效果图-2"}},[s._v("#")]),s._v(" 部署成功效果图")]),s._v(" "),r("p",[s._v("访问地址：http://192.168.10.131:8983/")]),s._v(" "),r("p",[r("img",{attrs:{src:t(473),alt:"img"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);