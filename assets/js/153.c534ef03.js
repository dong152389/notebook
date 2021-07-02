(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{743:function(t,a,s){"use strict";s.r(a);var r=s(26),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"linux-用户和组管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-用户和组管理"}},[t._v("#")]),t._v(" Linux 用户和组管理")]),t._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[t._v("Linux 操作系统是一个多用户操作系统，它允许多用户同时登录到系统上并使用资源。系统会根据账户来区分每个用户的文件，进程，任务和工作环境，使得每个用户工作都不受干扰。")]),t._v(" "),s("h2",{attrs:{id:"使用-root-用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-root-用户"}},[t._v("#")]),t._v(" 使用 Root 用户")]),t._v(" "),s("p",[t._v("在实际生产操作中，我们基本上都是使用超级管理员账户操作 Linux 系统，也就是 Root 用户，Linux 系统默认是关闭 Root 账户的，我们需要为 Root 用户设置一个初始密码以方便我们使用。")]),t._v(" "),s("h3",{attrs:{id:"设置-root-账户密码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置-root-账户密码"}},[t._v("#")]),t._v(" 设置 Root 账户密码")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo passwd root\n")])])]),s("h3",{attrs:{id:"切换到-root"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切换到-root"}},[t._v("#")]),t._v(" 切换到 Root")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("su\n")])])]),s("h3",{attrs:{id:"设置允许远程登录-root"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置允许远程登录-root"}},[t._v("#")]),t._v(" 设置允许远程登录 Root")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("nano /etc/ssh/sshd_config\n\n# Authentication:\nLoginGraceTime 120\n#PermitRootLogin without-password     //注释此行\nPermitRootLogin yes                             //加入此行\nStrictModes yes\n\n重启服务\nservice ssh restart\n")])])]),s("h2",{attrs:{id:"用户账户说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户账户说明"}},[t._v("#")]),t._v(" 用户账户说明")]),t._v(" "),s("h3",{attrs:{id:"普通用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#普通用户"}},[t._v("#")]),t._v(" 普通用户")]),t._v(" "),s("p",[t._v("普通用户在系统上的任务是进行普通操作")]),t._v(" "),s("h3",{attrs:{id:"超级管理员"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#超级管理员"}},[t._v("#")]),t._v(" 超级管理员")]),t._v(" "),s("p",[t._v("管理员在系统上的任务是对普通用户和整个系统进行管理。对系统具有绝对的控制权，能够对系统进行一切操作。用 root 表示，root 用户在系统中拥有最高权限，默认下 Ubuntu 用户的 root 用户是不能登录的。")]),t._v(" "),s("h3",{attrs:{id:"安装时创建的系统用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装时创建的系统用户"}},[t._v("#")]),t._v(" 安装时创建的系统用户")]),t._v(" "),s("p",[t._v("此用户创建时被添加到 admin 组中，在 Ubuntu 中，admin 组中的用户默认是可以使用 "),s("code",[t._v("sudo")]),t._v(" 命令来执行只有管理员才能执行的命令的。如果不使用 "),s("code",[t._v("sudo")]),t._v(" 就是一个普通用户。")]),t._v(" "),s("h2",{attrs:{id:"组账户说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组账户说明"}},[t._v("#")]),t._v(" 组账户说明")]),t._v(" "),s("h3",{attrs:{id:"私有组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#私有组"}},[t._v("#")]),t._v(" 私有组")]),t._v(" "),s("p",[t._v("当创建一个用户时没有指定属于哪个组，Linux 就会建立一个与用户同名的私有组，此私有组只含有该用户。")]),t._v(" "),s("h3",{attrs:{id:"标准组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标准组"}},[t._v("#")]),t._v(" 标准组")]),t._v(" "),s("p",[t._v("当创建一个用户时可以选定一个标准组，如果一个用户同时属于多个组时，登录后所属的组为主组，其他的为附加组。")]),t._v(" "),s("h2",{attrs:{id:"账户系统文件说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#账户系统文件说明"}},[t._v("#")]),t._v(" 账户系统文件说明")]),t._v(" "),s("h3",{attrs:{id:"etc-passwd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etc-passwd"}},[t._v("#")]),t._v(" /etc/passwd")]),t._v(" "),s("p",[t._v("每一行代表一个账号，众多账号是系统正常运行所必须的，例如 bin，nobody 每行定义一个用户账户，此文件对所有用户可读。每行账户包含如下信息：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("root:x:0:0:root:/root:/bin/bash\n")])])]),s("ul",[s("li",[s("strong",[t._v("用户名：")]),t._v(" 就是账号，用来对应 UID，root UID 是 0。")]),t._v(" "),s("li",[s("strong",[t._v("口令：")]),t._v(" 密码，早期 UNIX 系统密码存在此字段，由于此文件所有用户都可以读取，密码容易泄露，后来这个字段数据就存放到 /etc/shadow 中，这里只能看到 X。")]),t._v(" "),s("li",[s("strong",[t._v("用户标示号（UID）：")]),t._v(" 系统内唯一，root 用户的 UID 为 0，普通用户从 1000 开始，1-999 是系统的标准账户，500-65536 是可登陆账号。")]),t._v(" "),s("li",[s("strong",[t._v("组标示号（GID）：")]),t._v(" 与 /etc/group 相关用来规定组名和 GID 相对应。")]),t._v(" "),s("li",[s("strong",[t._v("注释：")]),t._v(" 注释账号")]),t._v(" "),s("li",[s("strong",[t._v("宿主目录（主文件夹）：")]),t._v(" 用户登录系统后所进入的目录 root 在 /root/itcast")]),t._v(" "),s("li",[s("strong",[t._v("命令解释器（shell）：")]),t._v(" 指定该用户使用的 shell ，默认的是 /bin/bash")])]),t._v(" "),s("h3",{attrs:{id:"etc-shadow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etc-shadow"}},[t._v("#")]),t._v(" /etc/shadow")]),t._v(" "),s("p",[t._v("为了增加系统的安全性，用户口令通常用 shadow passwords 保护。只有 root 可读。每行包含如下信息：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("root:$6$Reu571.V$Ci/kd.OTzaSGU.TagZ5KjYx2MLzQv2IkZ24E1.yeTT3Pp4o/yniTjus/rRaJ92Z18MVy6suf1W5uxxurqssel.:17465:0:99999:7:::\n")])])]),s("ul",[s("li",[s("p",[s("strong",[t._v("账号名称：")]),t._v(" 需要和 /etc/passwd 一致。")])]),t._v(" "),s("li",[s("p",[t._v("密码：")]),t._v(" "),s("p",[t._v("经过加密，虽然加密，但不表示不会被破解，该文件默认权限如下：")]),t._v(" "),s("ul",[s("li",[t._v("-rw------- 1 root root 1560 Oct 26 17:20 passwd-")]),t._v(" "),s("li",[t._v("只有root能都读写")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("最近修改密码日期：")]),t._v(" 从1970-1-1起，到用户最后一次更改口令的天数")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("密码最小时间间隔：")]),t._v(" 从1970-1-1起，到用户可以更改口令的天数")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("密码最大时间间隔：")]),t._v(" 从1970-1-1起，必须更改的口令天数")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("密码到期警告时间：")]),t._v(" 在口令过期之前几天通知")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("密码到期后账号宽限时间")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("密码到期禁用账户时间：")]),t._v(" 在用户口令过期后到禁用账户的天数")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("保留")])])])]),t._v(" "),s("h3",{attrs:{id:"etc-group"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etc-group"}},[t._v("#")]),t._v(" /etc/group")]),t._v(" "),s("p",[t._v("用户组的配置文件")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("root:x:0:\n")])])]),s("ul",[s("li",[s("strong",[t._v("用户组名称")])]),t._v(" "),s("li",[s("strong",[t._v("用户组密码：")]),t._v(" 给用户组管理员使用，通常不用")]),t._v(" "),s("li",[s("strong",[t._v("GID：")]),t._v(" 用户组的ID")]),t._v(" "),s("li",[s("strong",[t._v("此用户支持的账号名称：")]),t._v(" 一个账号可以加入多个用户组，例如想要 itcast 加入 root 这个用户组，将该账号填入该字段即可 root❌0:root, icast 将用户进行分组是 Linux 对用户进行管理及控制访问权限的一种手段。一个中可以有多个用户，一个用户可以同时属于多个组。该文件对所有用户可读。")])]),t._v(" "),s("h3",{attrs:{id:"etc-gshadow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etc-gshadow"}},[t._v("#")]),t._v(" /etc/gshadow")]),t._v(" "),s("p",[t._v("该文件用户定义用户组口令，组管理员等信息只有root用户可读。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("root:\\*::\n")])])]),s("ul",[s("li",[s("strong",[t._v("用户组名")])]),t._v(" "),s("li",[s("strong",[t._v("密码列")])]),t._v(" "),s("li",[s("strong",[t._v("用户组管理员的账号")])]),t._v(" "),s("li",[s("strong",[t._v("用户组所属账号")])])]),t._v(" "),s("h2",{attrs:{id:"账户管理常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#账户管理常用命令"}},[t._v("#")]),t._v(" 账户管理常用命令")]),t._v(" "),s("h3",{attrs:{id:"增加用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#增加用户"}},[t._v("#")]),t._v(" 增加用户")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("useradd 用户名\nuseradd -u (UID号)\nuseradd -p (口令)\nuseradd -g (分组)\nuseradd -s (SHELL)\nuseradd -d (用户目录)\n")])])]),s("p",[t._v("如："),s("code",[t._v("useradd lusifer")])]),t._v(" "),s("p",[t._v("增加用户名为 lusifer 的账户")]),t._v(" "),s("h3",{attrs:{id:"修改用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改用户"}},[t._v("#")]),t._v(" 修改用户")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("usermod -u (新UID)\nusermod -d (用户目录)\nusermod -g (组名)\nusermod -s (SHELL)\nusermod -p (新口令)\nusermod -l (新登录名)\nusermod -L (锁定用户账号密码)\nusermod -U (解锁用户账号)\n")])])]),s("p",[t._v("如："),s("code",[t._v("usermod -u 1024 -g group2 -G root lusifer")])]),t._v(" "),s("p",[t._v("将 lusifer 用户 uid 修改为 1024，默认组改为系统中已经存在的 group2，并且加入到系统管理员组")]),t._v(" "),s("h3",{attrs:{id:"删除用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除用户"}},[t._v("#")]),t._v(" 删除用户")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("userdel 用户名 (删除用户账号)\nuserdel -r 删除账号时同时删除目录\n")])])]),s("p",[t._v("如："),s("code",[t._v("userdel -r lusifer")])]),t._v(" "),s("p",[t._v("删除用户名为 lusifer 的账户并同时删除 lusifer 的用户目录")]),t._v(" "),s("h3",{attrs:{id:"组账户维护"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组账户维护"}},[t._v("#")]),t._v(" 组账户维护")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("groupadd 组账户名 (创建新组)\ngroupadd -g 指定组GID\ngroupmod -g 更改组的GID\ngroupmod -n 更改组账户名\ngroupdel 组账户名 (删除指定组账户)\n")])])]),s("h3",{attrs:{id:"口令维护"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#口令维护"}},[t._v("#")]),t._v(" 口令维护")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("passwd 用户账户名 (设置用户口令)\npasswd -l 用户账户名 (锁定用户账户)\npasswd -u 用户账户名 (解锁用户账户)\npasswd -d 用户账户名 (删除账户口令)\ngpasswd -a 用户账户名 组账户名 (将指定用户添加到指定组)\ngpasswd -d 用户账户名 组账户名 (将用户从指定组中删除)\ngpasswd -A 用户账户名 组账户名 (将用户指定为组的管理员)\n")])])]),s("h3",{attrs:{id:"用户和组状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户和组状态"}},[t._v("#")]),t._v(" 用户和组状态")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("su 用户名(切换用户账户)\nid 用户名(显示用户的UID，GID)\nwhoami (显示当前用户名称)\ngroups (显示用户所属组)\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);