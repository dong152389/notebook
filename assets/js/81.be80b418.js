(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{452:function(e,t,s){e.exports=s.p+"assets/img/20150620161606990.91469c03.jpg"},867:function(e,t,s){"use strict";s.r(t);var i=s(26),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"redis-ha-方案"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#redis-ha-方案"}},[e._v("#")]),e._v(" Redis HA 方案")]),e._v(" "),i("h2",{attrs:{id:"概述"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),i("p",[e._v("HA(High Available，高可用性群集)机集群系统简称，是保证业务连续性的有效解决方案，一般有两个或两个以上的节点，且分为活动节点及备用节点。通常把正在执 行业务的称为活动节点，而作为活动节点的一个备份的则称为备用节点。当活动节点出现问题，导致正在运行的业务（任务）不能正常运行时，备用节点此时就会侦测到，并立即接续活动节点来执行业务。从而实现业务的不中断或短暂中断。")]),e._v(" "),i("p",[e._v("Redis 一般以主/从方式部署（这里讨论的应用从实例主要用于备份，主实例提供读写）该方式要实现 HA 主要有如下几种方案：")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("keepalived：")]),e._v(" 通过 keepalived 的虚拟 IP，提供主从的统一访问，在主出现问题时， 通过 keepalived 运行脚本将从提升为主，待主恢复后先同步后自动变为主，该方案的好处是主从切换后，应用程序不需要知道(因为访问的虚拟 IP 不变)，坏处是引入 keepalived 增加部署复杂性，在有些情况下会导致数据丢失")]),e._v(" "),i("li",[i("strong",[e._v("zookeeper：")]),e._v(" 通过 zookeeper 来监控主从实例， 维护最新有效的 IP， 应用通过 zookeeper 取得 IP，对 Redis 进行访问，该方案需要编写大量的监控代码")]),e._v(" "),i("li",[i("strong",[e._v("sentinel：")]),e._v(" 通过 Sentinel 监控主从实例，自动进行故障恢复，该方案有个缺陷：因为主从实例地址( IP & PORT )是不同的，当故障发生进行主从切换后，应用程序无法知道新地址，故在 Jedis2.2.2 中新增了对 Sentinel 的支持，应用通过 "),i("code",[e._v("redis.clients.jedis.JedisSentinelPool.getResource()")]),e._v(" 取得的 Jedis 实例会及时更新到新的主实例地址")])]),e._v(" "),i("p",[i("img",{attrs:{src:s(452),alt:"部署逻辑图"}})]),e._v(" "),i("p",[i("strong",[e._v("注意：")]),e._v(" sentinel 是解决 HA 问题的，cluster 是解决主从复制问题的，不重复，并且经常一起用")])])}),[],!1,null,null,null);t.default=r.exports}}]);