var content0 = $resource.content;
var para = decodeURIComponent($resource.link);
var type0 = Type_Check(content0);
var Pemoji = para.indexOf("emoji=") != -1 ? para.split("#")[1].split("emoji=")[1].split("&")[0].split("+") : null;

if (type0 == "Vmess") {
    total = V2QX(content0);
    flag = 1;
} else if (type0 == "QuanX") {
    total = content0.split("\n");
    flag = 1;
} else if (type0 == "SSR") {
    total = SSR2QX(content0);
    flag = 1;
} else if (type0 == "Trojan") {
    total = TJ2QX(content0);
    flag = 1;
} else if (type0 == "SS") {
    total = SS2QX(content0);
    flag = 1;
} else {
    $notify("👻 该解析器暂未支持您的订阅格式", "😭 太难写了", "stay tuned");
    flag = 0;
    $done({ content: content0 });
}

if (flag == 1) {
    if (Pemoji) {
        $notify("🏳️‍🌈 开始更改旗帜 emoji", "清除 emoji 请用参数 -1, 国行设备添加 emoji 请使用参数 2", "你当前所用的参数为 emoji=" + Pemoji);
        total = emoji_handle(total, Pemoji);
    }
    $done({ content: total.join("\n") });
}

// 判断订阅类型
function Type_Check(subs) {
    var type = "";
    if (subs.indexOf("dm1lc3M6Ly") != -1) {
        type = "Vmess";
    } else if (subs.indexOf("tag") != -1) {
        type = "QuanX";
    } else if (subs.indexOf("c3NyOi8v") != -1) {
        type = "SSR";
    } else if (subs.indexOf("dHJvamFu") != -1) {
        type = "Trojan";
    } else if (subs.indexOf("c3M6Ly") != -1) {
        type = "SS";
    }
    return type;
}

// V2RayN 订阅转换成 QUANX 格式
function V2QX(subs) {
    const $base64 = new Base64();
    var list0 = $base64.decode(subs).split("\n");
    var QXList = [];
    for (var i = 0; i < list0.length; i++) {
        if (list0[i].trim() != "") {
            var server = String($base64.decode(list0[i].replace("vmess://", "")).trim()).split("\u0000")[0];
            var nss = [];
            if (server != "") {
                ss = JSON.parse(server);
                ip = "vmess=" + ss.add + ":" + ss.port;
                pwd = "password=" + ss.id;
                mtd = "method=aes-128-gcm";
                tag = "tag=" + decodeURIComponent(ss.ps);
                QX = [ip, mtd, pwd, tag].join(", ");
                QXList.push(QX);
            }
        }
    }
    return QXList;
}

// SSR 转换 QUANX 格式
function SSR2QX(subs) {
    const $base64 = new Base64();
    var list0 = $base64.decode(subs).split("\n");
    var QXList = [];
    for (var i = 0; i < list0.length; i++) {
        if (list0[i].indexOf("ssr://") != -1) {
            var nssr = [];
            var cnt = $base64.decode(list0[i].split("ssr://")[1].replace(/-/g, "+").replace(/_/g, "/")).split("\u0000")[0];
            if (cnt.split(":").length <= 6) { // 排除难搞的 ipv6 节点
                type = "shadowsocks=";
                ip = cnt.split(":")[0] + ":" + cnt.split(":")[1];
                pwd = "password=" + $base64.decode(cnt.split("/?")[0].split(":")[5].replace(/-/g, "+").replace(/_/g, "/")).split("\u0000")[0];
                mtd = "method=" + cnt.split(":")[3];
                tag = "tag=" + ($base64.decode(cnt.split("remarks=")[1].split("&")[0].replace(/-/g, "+").replace(/_/g, "/"))).split("\u0000")[0];
                nssr.push(type + ip, pwd, mtd, tag);
                QXList.push(nssr.join(", "));
            }
        }
    }
    return QXList;
}

// Trojan 类型转换成 QX
function TJ2QX(subs) {
    const $base64 = new Base64();
    var list0 = $base64.decode(subs).split("\n");
    var QXList = [];
    for (var i = 0; i < list0.length; i++) {
        if (list0[i].indexOf("trojan://") != -1) {
            var ntrojan = [];
            var cnt = list0[i].split("trojan://")[1];
            type = "trojan=";
            ip = cnt.split("@")[1].split("?")[0];
            pwd = "password=" + cnt.split("@")[0];
            obfs = "over-tls=true";
            tag = "tag=" + decodeURIComponent(cnt.split("#")[1]);
            ntrojan.push(type + ip, pwd, obfs, tag);
            QXList.push(ntrojan.join(", "));
        }
    }
    return QXList;
}

// SS 转换 QUANX 格式
function SS2QX(subs) {
    const $base64 = new Base64();
    var list0 = $base64.decode(subs).split("\n");
    var QXList = [];
    for (var i = 0; i < list0.length; i++) {
        if (list0[i].indexOf("ss://") != -1) {
            var nssr = [];
            var cnt = list0[i].split("ss://")[1];
            if (cnt.split(":").length <= 6) { // 排除难搞的 ipv6 节点
                type = "shadowsocks=";
                ip = cnt.split("@")[1].split("/")[0];
                pwdmtd = $base64.decode(cnt.split("@")[0].replace(/-/g, "+").replace(/_/g, "/")).split("\u0000")[0].split(":");
                pwd = "password=" + pwdmtd[1];
                mtd = "method=" + pwdmtd[0];
                tag = "tag=" + decodeURIComponent(cnt.split("#")[1]);
                nssr.push(type + ip, pwd, mtd, tag);
                QXList.push(nssr.join(", "));
            }
        }
    }
    return QXList;
}
