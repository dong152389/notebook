(window.webpackJsonp=window.webpackJsonp||[]).push([[292],{1125:function(t,s,n){"use strict";n.r(s);var a=n(26),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"使用-kubeadm-搭建-kubernetes-集群"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-kubeadm-搭建-kubernetes-集群"}},[t._v("#")]),t._v(" 使用 kubeadm 搭建 kubernetes 集群")]),t._v(" "),n("h2",{attrs:{id:"安装-kubernetes-主节点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装-kubernetes-主节点"}},[t._v("#")]),t._v(" 安装 kubernetes 主节点")]),t._v(" "),n("p",[t._v("执行以下命令初始化主节点，该命令指定了初始化时需要使用的配置文件，其中添加 "),n("code",[t._v("--experimental-upload-certs")]),t._v(" 参数可以在后续执行加入节点时自动分发证书文件。追加的 "),n("code",[t._v("tee kubeadm-init.log")]),t._v(" 用以输出日志。")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("kubeadm init --config"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("kubeadm.yml --experimental-upload-certs "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" kubeadm-init.log\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装成功则会有如下输出")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("init"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using Kubernetes version: v1.14.1\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("preflight"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Running pre-flight checks\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("WARNING IsDockerSystemdCheck"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(": detected "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cgroupfs"')]),t._v(" as the Docker cgroup driver. The recommended driver is "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"systemd"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" Please follow the guide at https://kubernetes.io/docs/setup/cri/\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("preflight"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Pulling images required "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" setting up a Kubernetes cluster\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("preflight"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" This might take a minute or two, depending on the speed of your internet connection\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("preflight"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" You can also perform this action "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" beforehand using "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kubeadm config images pull'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("kubelet-start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Writing kubelet environment "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" with flags to "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/var/lib/kubelet/kubeadm-flags.env"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("kubelet-start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Writing kubelet configuration to "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/var/lib/kubelet/config.yaml"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("kubelet-start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Activating the kubelet "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("certs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using certificateDir folder "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/kubernetes/pki"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("certs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Generating "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ca"')]),t._v(" certificate and key\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("certs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Generating "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"apiserver"')]),t._v(" certificate and key\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("certs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" apiserver serving cert is signed "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" DNS names "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("kubernetes-master kubernetes kubernetes.default kubernetes.default.svc kubernetes.default.svc.cluster.local"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" and IPs "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.96")]),t._v(".0.1 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".141.130"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("certs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Generating "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"apiserver-kubelet-client"')]),t._v(" certificate and key\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("certs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Generating "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"front-proxy-ca"')]),t._v(" certificate and key\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("certs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Generating "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"front-proxy-client"')]),t._v(" certificate and key\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("certs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Generating "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"etcd/ca"')]),t._v(" certificate and key\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("certs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Generating "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"etcd/peer"')]),t._v(" certificate and key\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("certs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" etcd/peer serving cert is signed "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" DNS names "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("kubernetes-master localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" and IPs "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".141.130 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 ::1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("certs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Generating "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"etcd/server"')]),t._v(" certificate and key\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("certs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" etcd/server serving cert is signed "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" DNS names "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("kubernetes-master localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" and IPs "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".141.130 "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 ::1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("certs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Generating "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"etcd/healthcheck-client"')]),t._v(" certificate and key\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("certs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Generating "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"apiserver-etcd-client"')]),t._v(" certificate and key\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("certs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Generating "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sa"')]),t._v(" key and public key\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("kubeconfig"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using kubeconfig folder "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/kubernetes"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("kubeconfig"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Writing "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin.conf"')]),t._v(" kubeconfig "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("kubeconfig"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Writing "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kubelet.conf"')]),t._v(" kubeconfig "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("kubeconfig"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Writing "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"controller-manager.conf"')]),t._v(" kubeconfig "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("kubeconfig"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Writing "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scheduler.conf"')]),t._v(" kubeconfig "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("control-plane"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using manifest folder "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/kubernetes/manifests"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("control-plane"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Creating static Pod manifest "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kube-apiserver"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("control-plane"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Creating static Pod manifest "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kube-controller-manager"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("control-plane"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Creating static Pod manifest "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kube-scheduler"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("etcd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Creating static Pod manifest "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" etcd "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/kubernetes/manifests"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("wait-control-plane"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Waiting "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the kubelet to boot up the control plane as static Pods from directory "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/kubernetes/manifests"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" This can take up to 4m0s\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("apiclient"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" All control plane components are healthy after "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20.003326")]),t._v(" seconds\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("upload-config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" storing the configuration used "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" ConfigMap "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kubeadm-config"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" the "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kube-system"')]),t._v(" Namespace\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("kubelet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Creating a ConfigMap "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kubelet-config-1.14"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" namespace kube-system with the configuration "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the kubelets "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" the cluster\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("upload-certs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Storing the certificates "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" ConfigMap "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kubeadm-certs"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" the "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kube-system"')]),t._v(" Namespace\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("upload-certs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using certificate key:\n2cd5b86c4905c54d68cc7dfecc2bf87195e9d5d90b4fff9832d9b22fc5e73f96\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mark-control-plane"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Marking the node kubernetes-master as control-plane by adding the label "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"node-role.kubernetes.io/master=''\"")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mark-control-plane"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Marking the node kubernetes-master as control-plane by adding the taints "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("node-role.kubernetes.io/master:NoSchedule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("bootstrap-token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using token: abcdef.0123456789abcdef\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("bootstrap-token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Configuring bootstrap tokens, cluster-info ConfigMap, RBAC Roles\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("bootstrap-token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" configured RBAC rules to allow Node Bootstrap tokens to post CSRs "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" order "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" nodes to get long term certificate credentials\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("bootstrap-token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" configured RBAC rules to allow the csrapprover controller automatically approve CSRs from a Node Bootstrap Token\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("bootstrap-token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" configured RBAC rules to allow certificate rotation "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" all node client certificates "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" the cluster\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("bootstrap-token"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" creating the "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cluster-info"')]),t._v(" ConfigMap "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" the "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kube-public"')]),t._v(" namespace\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("addons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Applied essential addon: CoreDNS\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("addons"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Applied essential addon: kube-proxy\n\nYour Kubernetes control-plane has initialized successfully"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n\nTo start using your cluster, you need to run the following as a regular user:\n\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/.kube\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" -i /etc/kubernetes/admin.conf "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/.kube/config\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" -u"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" -g"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/.kube/config\n\nYou should now deploy a pod network to the cluster.\nRun "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kubectl apply -f [podnetwork].yaml"')]),t._v(" with one of the options listed at:\n  https://kubernetes.io/docs/concepts/cluster-administration/addons/\n\nThen you can "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),t._v(" any number of worker nodes by running the following on each as root:\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 后面子节点加入需要如下命令")]),t._v("\nkubeadm "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".141.130:6443 --token abcdef.0123456789abcdef "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --discovery-token-ca-cert-hash sha256:cab7c86212535adde6b8d1c7415e81847715cfc8629bb1d270b601744d662515\n")])])]),n("blockquote",[n("p",[t._v("注意：如果安装 kubernetes 版本和下载的镜像版本不统一则会出现 "),n("code",[t._v("timed out waiting for the condition")]),t._v(" 错误。中途失败或是想修改配置可以使用 "),n("code",[t._v("kubeadm reset")]),t._v(" 命令重置配置，再做初始化操作即可。")])]),t._v(" "),n("h2",{attrs:{id:"配置-kubectl"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置-kubectl"}},[t._v("#")]),t._v(" 配置 kubectl")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/.kube\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" -i /etc/kubernetes/admin.conf "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/.kube/config\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 非 ROOT 用户执行")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" -u"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" -g"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/.kube/config\n")])])]),n("h2",{attrs:{id:"验证是否成功"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#验证是否成功"}},[t._v("#")]),t._v(" 验证是否成功")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("kubectl get node\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 能够打印出节点信息即表示成功")]),t._v("\nNAME                STATUS     ROLES    AGE     VERSION\nkubernetes-master   NotReady   master   8m40s   v1.14.1\n")])])]),n("p",[t._v("至此主节点配置完成")]),t._v(" "),n("h2",{attrs:{id:"kubeadm-init-的执行过程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kubeadm-init-的执行过程"}},[t._v("#")]),t._v(" kubeadm init 的执行过程")]),t._v(" "),n("ul",[n("li",[t._v("init：指定版本进行初始化操作")]),t._v(" "),n("li",[t._v("preflight：初始化前的检查和下载所需要的 Docker 镜像文件")]),t._v(" "),n("li",[t._v("kubelet-start：生成 kubelet 的配置文件 "),n("code",[t._v("var/lib/kubelet/config.yaml")]),t._v("，没有这个文件 kubelet 无法启动，所以初始化之前的 kubelet 实际上启动不会成功")]),t._v(" "),n("li",[t._v("certificates：生成 Kubernetes 使用的证书，存放在 "),n("code",[t._v("/etc/kubernetes/pki")]),t._v(" 目录中")]),t._v(" "),n("li",[t._v("kubeconfig：生成 KubeConfig 文件，存放在 "),n("code",[t._v("/etc/kubernetes")]),t._v(" 目录中，组件之间通信需要使用对应文件")]),t._v(" "),n("li",[t._v("control-plane：使用 "),n("code",[t._v("/etc/kubernetes/manifest")]),t._v(" 目录下的 YAML 文件，安装 Master 组件")]),t._v(" "),n("li",[t._v("etcd：使用 "),n("code",[t._v("/etc/kubernetes/manifest/etcd.yaml")]),t._v(" 安装 Etcd 服务")]),t._v(" "),n("li",[t._v("wait-control-plane：等待 control-plan 部署的 Master 组件启动")]),t._v(" "),n("li",[t._v("apiclient：检查 Master 组件服务状态。")]),t._v(" "),n("li",[t._v("uploadconfig：更新配置")]),t._v(" "),n("li",[t._v("kubelet：使用 configMap 配置 kubelet")]),t._v(" "),n("li",[t._v("patchnode：更新 CNI 信息到 Node 上，通过注释的方式记录")]),t._v(" "),n("li",[t._v("mark-control-plane：为当前节点打标签，打了角色 Master，和不可调度标签，这样默认就不会使用 Master 节点来运行 Pod")]),t._v(" "),n("li",[t._v("bootstrap-token：生成 token 记录下来，后边使用 "),n("code",[t._v("kubeadm join")]),t._v(" 往集群中添加节点时会用到")]),t._v(" "),n("li",[t._v("addons：安装附加组件 CoreDNS 和 kube-proxy")])])])}),[],!1,null,null,null);s.default=e.exports}}]);