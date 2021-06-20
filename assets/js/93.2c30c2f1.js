(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{614:function(a,t,e){"use strict";e.r(t);var s=e(26),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"docker-常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-常用命令"}},[a._v("#")]),a._v(" Docker 常用命令")]),a._v(" "),e("h2",{attrs:{id:"查看-docker-版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看-docker-版本"}},[a._v("#")]),a._v(" 查看 Docker 版本")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker version\n")])])]),e("h2",{attrs:{id:"从-docker-文件构建-docker-映像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从-docker-文件构建-docker-映像"}},[a._v("#")]),a._v(" 从 Docker 文件构建 Docker 映像")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker build -t image-name docker-file-location\n")])])]),e("h2",{attrs:{id:"运行-docker-映像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行-docker-映像"}},[a._v("#")]),a._v(" 运行 Docker 映像")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker run -d image-name\n")])])]),e("h2",{attrs:{id:"查看可用的-docker-映像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看可用的-docker-映像"}},[a._v("#")]),a._v(" 查看可用的 Docker 映像")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker images\n")])])]),e("h2",{attrs:{id:"查看最近的运行容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看最近的运行容器"}},[a._v("#")]),a._v(" 查看最近的运行容器")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker ps -l\n")])])]),e("h2",{attrs:{id:"查看所有正在运行的容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看所有正在运行的容器"}},[a._v("#")]),a._v(" 查看所有正在运行的容器")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker ps -a\n")])])]),e("h2",{attrs:{id:"停止运行容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#停止运行容器"}},[a._v("#")]),a._v(" 停止运行容器")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker stop container_id\n")])])]),e("h2",{attrs:{id:"删除一个镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除一个镜像"}},[a._v("#")]),a._v(" 删除一个镜像")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker rmi image-name\n")])])]),e("h2",{attrs:{id:"删除所有镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除所有镜像"}},[a._v("#")]),a._v(" 删除所有镜像")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker rmi $(docker images -q)\n")])])]),e("h2",{attrs:{id:"强制删除所有镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强制删除所有镜像"}},[a._v("#")]),a._v(" 强制删除所有镜像")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker rmi -r $(docker images -q)\n")])])]),e("h2",{attrs:{id:"删除所有虚悬镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除所有虚悬镜像"}},[a._v("#")]),a._v(" 删除所有虚悬镜像")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker rmi $(docker images -q -f dangling=true)\n")])])]),e("h2",{attrs:{id:"删除所有容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除所有容器"}},[a._v("#")]),a._v(" 删除所有容器")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker rm $(docker ps -a -q)\n")])])]),e("h2",{attrs:{id:"进入-docker-容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进入-docker-容器"}},[a._v("#")]),a._v(" 进入 Docker 容器")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker exec -it container-id /bin/bash\n")])])]),e("h2",{attrs:{id:"查看所有数据卷"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看所有数据卷"}},[a._v("#")]),a._v(" 查看所有数据卷")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker volume ls\n")])])]),e("h2",{attrs:{id:"删除指定数据卷"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除指定数据卷"}},[a._v("#")]),a._v(" 删除指定数据卷")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker volume rm [volume_name]\n")])])]),e("h2",{attrs:{id:"删除所有未关联的数据卷"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除所有未关联的数据卷"}},[a._v("#")]),a._v(" 删除所有未关联的数据卷")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker volume rm $(docker volume ls -qf dangling=true)\n")])])]),e("h2",{attrs:{id:"从主机复制文件到容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从主机复制文件到容器"}},[a._v("#")]),a._v(" 从主机复制文件到容器")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("sudo docker cp host_path containerID:container_path\n")])])]),e("h2",{attrs:{id:"从容器复制文件到主机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从容器复制文件到主机"}},[a._v("#")]),a._v(" 从容器复制文件到主机")]),a._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("sudo docker cp containerID:container_path host_path\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);