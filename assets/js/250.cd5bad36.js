(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{1068:function(a,t,s){"use strict";s.r(t);var e=s(26),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"linux-安装-java"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-安装-java"}},[a._v("#")]),a._v(" Linux 安装 Java")]),a._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),s("p",[a._v("此处以 JDK 1.8.0_152 为例")]),a._v(" "),s("h2",{attrs:{id:"下载地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载地址"}},[a._v("#")]),a._v(" 下载地址")]),a._v(" "),s("p",[a._v("http://www.oracle.com/technetwork/java/javase/downloads/index.html")]),a._v(" "),s("h2",{attrs:{id:"解压缩并移动到指定目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解压缩并移动到指定目录"}},[a._v("#")]),a._v(" 解压缩并移动到指定目录")]),a._v(" "),s("h3",{attrs:{id:"解压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解压缩"}},[a._v("#")]),a._v(" 解压缩")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("tar -zxvf jdk-8u152-linux-x64.tar.gz\n")])])]),s("h3",{attrs:{id:"创建目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建目录"}},[a._v("#")]),a._v(" 创建目录")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mkdir -p /usr/local/java\n")])])]),s("h3",{attrs:{id:"移动安装包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移动安装包"}},[a._v("#")]),a._v(" 移动安装包")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mv jdk1.8.0_152/ /usr/local/java/\n")])])]),s("h3",{attrs:{id:"设置所有者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置所有者"}},[a._v("#")]),a._v(" 设置所有者")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("chown -R root:root /usr/local/java/\n")])])]),s("h2",{attrs:{id:"配置环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置环境变量"}},[a._v("#")]),a._v(" 配置环境变量")]),a._v(" "),s("h3",{attrs:{id:"配置系统环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置系统环境变量"}},[a._v("#")]),a._v(" 配置系统环境变量")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("nano /etc/environment\n")])])]),s("h3",{attrs:{id:"添加如下语句"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加如下语句"}},[a._v("#")]),a._v(" 添加如下语句")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games"\nexport JAVA_HOME=/usr/local/java/jdk1.8.0_152\nexport JRE_HOME=/usr/local/java/jdk1.8.0_152/jre\nexport CLASSPATH=$CLASSPATH:$JAVA_HOME/lib:$JAVA_HOME/jre/lib\n')])])]),s("h3",{attrs:{id:"配置用户环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置用户环境变量"}},[a._v("#")]),a._v(" 配置用户环境变量")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("nano /etc/profile\n")])])]),s("h3",{attrs:{id:"添加如下语句-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加如下语句-2"}},[a._v("#")]),a._v(" 添加如下语句")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('if [ "$PS1" ]; then\n  if [ "$BASH" ] && [ "$BASH" != "/bin/sh" ]; then\n    # The file bash.bashrc already sets the default PS1.\n    # PS1=\'\\h:\\w\\$ \'\n    if [ -f /etc/bash.bashrc ]; then\n      . /etc/bash.bashrc\n    fi\n  else\n    if [ "`id -u`" -eq 0 ]; then\n      PS1=\'# \'\n    else\n      PS1=\'$ \'\n    fi\n  fi\nfi\n\nexport JAVA_HOME=/usr/local/java/jdk1.8.0_152\nexport JRE_HOME=/usr/local/java/jdk1.8.0_152/jre\nexport CLASSPATH=$CLASSPATH:$JAVA_HOME/lib:$JAVA_HOME/jre/lib\nexport PATH=$JAVA_HOME/bin:$JAVA_HOME/jre/bin:$PATH:$HOME/bin\n\nif [ -d /etc/profile.d ]; then\n  for i in /etc/profile.d/*.sh; do\n    if [ -r $i ]; then\n      . $i\n    fi\n  done\n  unset i\nfi\n')])])]),s("h3",{attrs:{id:"使用户环境变量生效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用户环境变量生效"}},[a._v("#")]),a._v(" 使用户环境变量生效")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("source /etc/profile\n")])])]),s("h2",{attrs:{id:"测试是否安装成功"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试是否安装成功"}},[a._v("#")]),a._v(" 测试是否安装成功")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('root@UbuntuBase:/usr/local/java# java -version\njava version "1.8.0_152"\nJava(TM) SE Runtime Environment (build 1.8.0_152-b16)\nJava HotSpot(TM) 64-Bit Server VM (build 25.152-b16, mixed mode)\n')])])]),s("h2",{attrs:{id:"为其他用户更新用户环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为其他用户更新用户环境变量"}},[a._v("#")]),a._v(" 为其他用户更新用户环境变量")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("su lusifer\nsource /etc/profile\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);