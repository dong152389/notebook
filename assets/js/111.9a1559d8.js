(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{1006:function(t,a,e){"use strict";e.r(a);var c=e(26),o=Object(c.a)({},(function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[c("h1",{attrs:{id:"docker-构建-tomcat"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#docker-构建-tomcat"}},[t._v("#")]),t._v(" Docker 构建 Tomcat")]),t._v(" "),c("h2",{attrs:{id:"查找-docker-hub-上的-tomcat-镜像"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#查找-docker-hub-上的-tomcat-镜像"}},[t._v("#")]),t._v(" 查找 Docker Hub 上的 Tomcat 镜像")]),t._v(" "),c("div",{staticClass:"language-text extra-class"},[c("pre",{pre:!0,attrs:{class:"language-text"}},[c("code",[t._v('root@UbuntuBase:/usr/local/docker/tomcat# docker search tomcat\nNAME                           DESCRIPTION                                     STARS               OFFICIAL            AUTOMATED\ntomcat                         Apache Tomcat is an open source implementa...   1550                [OK]                \ndordoka/tomcat                 Ubuntu 14.04, Oracle JDK 8 and Tomcat 8 ba...   43                                      [OK]\ntomee                          Apache TomEE is an all-Apache Java EE cert...   42                  [OK]                \ndavidcaste/alpine-tomcat       Apache Tomcat 7/8 using Oracle Java 7/8 wi...   21                                      [OK]\nconsol/tomcat-7.0              Tomcat 7.0.57, 8080, "admin/admin"              16                                      [OK]\ncloudesire/tomcat              Tomcat server, 6/7/8                            15                                      [OK]\nmaluuba/tomcat7                                                                9                                       [OK]\ntutum/tomcat                   Base docker image to run a Tomcat applicat...   8                                       \njeanblanchard/tomcat           Minimal Docker image with Apache Tomcat         8                                       \nandreptb/tomcat                Debian Jessie based image with Apache Tomc...   7                                       [OK]\nbitnami/tomcat                 Bitnami Tomcat Docker Image                     5                                       [OK]\naallam/tomcat-mysql            Debian, Oracle JDK, Tomcat & MySQL              4                                       [OK]\nantoineco/tomcat-mod_cluster   Apache Tomcat with JBoss mod_cluster            1                                       [OK]\nmaluuba/tomcat7-java8          Tomcat7 with java8.                             1                                       \namd64/tomcat                   Apache Tomcat is an open source implementa...   1                                       \nprimetoninc/tomcat             Apache tomcat 8.5, 8.0, 7.0                     1                                       [OK]\ntrollin/tomcat                                                                 0                                       \nfabric8/tomcat-8               Fabric8 Tomcat 8 Image                          0                                       [OK]\nawscory/tomcat                 tomcat                                          0                                       \noobsri/tomcat8                 Testing CI Jobs with different names.           0                                       \nhegand/tomcat                  docker-tomcat                                   0                                       [OK]\ns390x/tomcat                   Apache Tomcat is an open source implementa...   0                                       \nppc64le/tomcat                 Apache Tomcat is an open source implementa...   0                                       \n99taxis/tomcat7                Tomcat7                                         0                                       [OK]\nqminderapp/tomcat7             Tomcat 7                                        0\n')])])]),c("p",[t._v("这里我们拉取官方的镜像")]),t._v(" "),c("div",{staticClass:"language-text extra-class"},[c("pre",{pre:!0,attrs:{class:"language-text"}},[c("code",[t._v("docker pull tomcat\n")])])]),c("p",[t._v("等待下载完成后，我们就可以在本地镜像列表里查到 REPOSITORY 为 tomcat 的镜像。")]),t._v(" "),c("h2",{attrs:{id:"运行容器"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#运行容器"}},[t._v("#")]),t._v(" 运行容器：")]),t._v(" "),c("div",{staticClass:"language-text extra-class"},[c("pre",{pre:!0,attrs:{class:"language-text"}},[c("code",[t._v("docker run --name tomcat -p 8080:8080 -v $PWD/test:/usr/local/tomcat/webapps/test -d tomcat\n")])])]),c("p",[t._v("命令说明：")]),t._v(" "),c("ul",[c("li",[t._v("-p 8080:8080：将容器的8080端口映射到主机的8080端口")]),t._v(" "),c("li",[t._v("-v $PWD/test:/usr/local/tomcat/webapps/test：将主机中当前目录下的test挂载到容器的/test")])]),t._v(" "),c("p",[t._v("查看容器启动情况")]),t._v(" "),c("div",{staticClass:"language-text extra-class"},[c("pre",{pre:!0,attrs:{class:"language-text"}},[c("code",[t._v('root@UbuntuBase:/usr/local/docker/tomcat/webapps# docker ps\nCONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS                    NAMES\n38498e53128c        tomcat              "catalina.sh run"   2 minutes ago       Up 2 minutes        0.0.0.0:8080->8080/tcp   tomcat\n')])])]),c("p",[t._v("通过浏览器访问")]),t._v(" "),c("p",[c("img",{attrs:{src:e(573),alt:"img"}})])])}),[],!1,null,null,null);a.default=o.exports},573:function(t,a,e){t.exports=e.p+"assets/img/20171103174843.bfe4965b.png"}}]);