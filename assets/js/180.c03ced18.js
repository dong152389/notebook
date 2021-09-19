(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{971:function(t,a,e){"use strict";e.r(a);var s=e(26),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"zookeeper-配置说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-配置说明"}},[t._v("#")]),t._v(" Zookeeper 配置说明")]),t._v(" "),e("h2",{attrs:{id:"zookeeper-的三种工作模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-的三种工作模式"}},[t._v("#")]),t._v(" Zookeeper 的三种工作模式")]),t._v(" "),e("ul",[e("li",[t._v("单机模式：存在单点故障")]),t._v(" "),e("li",[t._v("集群模式：在多台机器上部署 Zookeeper 集群，适合线上环境使用。")]),t._v(" "),e("li",[t._v("伪集群模式：在一台机器同时运行多个 Zookeeper 实例，仍然有单点故障问题，当然，其中配置的端口号要错开的，适合实验环境模拟集群使用。")])]),t._v(" "),e("h2",{attrs:{id:"zookeeper-的三种端口号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-的三种端口号"}},[t._v("#")]),t._v(" Zookeeper 的三种端口号")]),t._v(" "),e("ul",[e("li",[t._v("2181：客户端连接 Zookeeper 集群使用的监听端口号")]),t._v(" "),e("li",[t._v("3888：选举 leader 使用")]),t._v(" "),e("li",[t._v("2888：集群内机器通讯使用（Leader 和 Follower 之间数据同步使用的端口号，Leader 监听此端口）")])]),t._v(" "),e("h2",{attrs:{id:"zookeeper-单机模式配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-单机模式配置文件"}},[t._v("#")]),t._v(" Zookeeper 单机模式配置文件")]),t._v(" "),e("p",[t._v("配置文件路径："),e("code",[t._v("/conf/zoo.cfg")])]),t._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("clientPort")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("2181")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("dataDir")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/data")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("dataLogDir")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/datalog")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tickTime")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("2000")]),t._v("\n")])])]),e("ul",[e("li",[t._v("clientPort：这个端口就是客户端连接 Zookeeper 服务器的端口，Zookeeper 会监听这个端口，接受客户端的访问请求。")]),t._v(" "),e("li",[t._v("dataDir：Zookeeper 保存数据的目录。")]),t._v(" "),e("li",[t._v("dataLogDir：Zookeeper 保存日志的目录。")]),t._v(" "),e("li",[t._v("tickTime：这个时间是作为 Zookeeper 服务器之间或客户端与服务器之间维持心跳的时间间隔，也就是每隔 tickTime 时间就会发送一个心跳。")])]),t._v(" "),e("h2",{attrs:{id:"zookeeper-集群模式配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-集群模式配置文件"}},[t._v("#")]),t._v(" Zookeeper 集群模式配置文件")]),t._v(" "),e("p",[t._v("配置文件路径："),e("code",[t._v("/conf/zoo.cfg")])]),t._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("clientPort")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("2181")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("dataDir")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/data")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("dataLogDir")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/datalog")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tickTime")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("2000")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("initLimit")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("5")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("syncLimit")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("2")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("autopurge.snapRetainCount")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("3")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("autopurge.purgeInterval")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("0")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("maxClientCnxns")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("60")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("server.1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("192.168.0.1:2888:3888")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("server.2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("192.168.0.2:2888:3888")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("server.3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("192.168.0.3:2888:3888")]),t._v("\n")])])]),e("ul",[e("li",[t._v("initLimit：配置 Zookeeper 接受客户端（这里所说的客户端不是用户连接 Zookeeper 服务器的客户端，而是 Zookeeper 服务器集群中连接到 Leader 的 Follower 服务器）初始化连接时最长能忍受多少个心跳时间间隔数。当已经超过 initLimit（默认为 10） 个心跳的时间（也就是 tickTime）长度后 Zookeeper 服务器还没有收到客户端的返回信息，那么表明这个客户端连接失败。总的时间长度就是 "),e("code",[t._v("5 * 2000 = 10")]),t._v(" 秒")]),t._v(" "),e("li",[t._v("syncLimit：配置 Leader 与 Follower 之间发送消息，请求和应答时间长度，最长不能超过多少个 tickTime 的时间长度，总的时间长度就是 "),e("code",[t._v("2 * 2000 = 4")]),t._v(" 秒")]),t._v(" "),e("li",[t._v("定时清理（Zookeeper 从 3.4.0 开始提供了自动清理快照和事务日志的功能）以下两个参数配合使用：\n"),e("ul",[e("li",[t._v("autopurge.purgeInterval：指定了清理频率，单位是小时，需要填写一个 1 或更大的整数，默认是 0，表示不开启自己清理功能。")]),t._v(" "),e("li",[t._v("autopurge.snapRetainCount：指定了需要保留的文件数目。默认是保留 3 个。")])])]),t._v(" "),e("li",[t._v("maxClientCnxns：限制连接到 Zookeeper 的客户端的数量，限制并发连接的数量，它通过 IP 来区分不同的客户端。此配置选项可以用来阻止某些类别的 Dos 攻击。将它设置为 0 或者忽略而不进行设置将会取消对并发连接的限制。")]),t._v(" "),e("li",[t._v("server.A=B：C：D：其中 A 是一个数字，表示这个是第几号服务器。B 是这个服务器的 IP 地址。C 表示的是这个服务器与集群中的 Leader 服务器交换信息的端口("),e("code",[t._v("2888")]),t._v(")；D 表示的是万一集群中的 Leader 服务器挂了，需要一个端口来重新进行选举，选出一个新的 Leader，而这个端口就是用来执行选举时服务器相互通信的端口("),e("code",[t._v("3888")]),t._v(")。如果是伪集群的配置方式，由于 B 都是一样，所以不同的 Zookeeper 实例通信端口号不能一样，所以要给它们分配不同的端口号。")])]),t._v(" "),e("p",[e("strong",[t._v("注意：")]),t._v(" "),e("code",[t._v("server.A")]),t._v(" 中的 A 是在 "),e("code",[t._v("dataDir")]),t._v(" 配置的目录中创建一个名为 "),e("code",[t._v("myid")]),t._v(" 的文件里的值（如：1）")]),t._v(" "),e("h2",{attrs:{id:"zookeeper-常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-常用命令"}},[t._v("#")]),t._v(" Zookeeper 常用命令")]),t._v(" "),e("h3",{attrs:{id:"zkserver"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zkserver"}},[t._v("#")]),t._v(" zkServer")]),t._v(" "),e("ul",[e("li",[t._v("启动服务")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./zkServer.sh start\n")])])]),e("ul",[e("li",[t._v("停止服务")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./zkServer.sh stop\n")])])]),e("ul",[e("li",[t._v("重启服务")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./zkServer.sh restart\n")])])]),e("ul",[e("li",[t._v("执行状态")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./zkServer.sh status\n")])])]),e("h3",{attrs:{id:"zkclient"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zkclient"}},[t._v("#")]),t._v(" zkClient")]),t._v(" "),e("ul",[e("li",[t._v("客户端连接服务器并进入 Bash 模式")])]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("./zkCli.sh -server <ip>:<port>\n\n# 命令参数\nZooKeeper -server host:port cmd args\n\tstat path [watch]\n\tset path data [version]\n\tls path [watch]\n\tdelquota [-n|-b] path\n\tls2 path [watch]\n\tsetAcl path acl\n\tsetquota -n|-b val path\n\thistory \n\tredo cmdno\n\tprintwatches on|off\n\tdelete path [version]\n\tsync path\n\tlistquota path\n\trmr path\n\tget path [watch]\n\tcreate [-s] [-e] path data acl\n\taddauth scheme auth\n\tquit \n\tgetAcl path\n\tclose \n\tconnect host:port\n")])])]),e("ul",[e("li",[t._v("创建节点（Bash 模式）")])]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('create /test "hello zookeeper"\n')])])]),e("ul",[e("li",[t._v("查询节点（Bash 模式）")])]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("get /test\n\n# 输出如下\nHello Zookeeper\ncZxid = 0x100000004\nctime = Fri Oct 19 05:11:47 GMT 2018\nmZxid = 0x100000004\nmtime = Fri Oct 19 05:11:47 GMT 2018\npZxid = 0x100000004\ncversion = 0\ndataVersion = 0\naclVersion = 0\nephemeralOwner = 0x0\ndataLength = 15\nnumChildren = 0\n")])])]),e("ul",[e("li",[t._v("删除节点（Bash 模式）")])]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("delete /test\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);