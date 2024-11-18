⚠️ ☞ "你的订阅连接#emoji=1&tfo=1&in=香港+台湾"
❖ 本地资源片段引用, 请将参数如 "#in=xxx&out=yyy" 填入资源片段的第 ① 行
❖ 🚦 支持中文, "操作" 以下特殊字符时请先替换(URL-Encode) 🚦
  ∎ "+"⇒"%2B", 空格⇒"%20", "@"⇒"%40", "&"⇒"%26", "."⇒"\.", ","⇒"%2C"

1️⃣ ⟦𝐬𝐞𝐫𝐯𝐞𝐫 节点⟧ ➠ 参数说明:
⦿ emoji=1(国行设备用2)/-1, 添加/删除节点名内地区旗帜;
⦿ udp=1/-1, tfo=1/-1, 分别强制开启(关闭) 𝐮𝐝𝐩-𝐫𝐞𝐥𝐚𝐲/𝐟𝐚𝐬𝐭-𝐨𝐩𝐞𝐧;
⦿ uot=1, 开启 udp-over-tcp=true选项（仅限SS(R)）
⦿ cert=1/-1, 分别开启/关闭 𝐭𝐥𝐬 证书验证(默认关闭);
  ❖ csha/psha, tls-cert-sha256 以及 tls-pubkey-sha256 参数
  ❖ alpn, 指定over-tls类型节点的alpn参数
⦿ in, out, regex, regout 分别为 保留、删除、正则保留、正则删除 节点;
  ❖ in/out 仅对节点名匹配生效, 多参数(逻辑"或")用 "+", 逻辑"与"用 "." 表示;
  ❖ regex/regout 对节点的完整信息进行匹配(类型、端口、加密等);
  ❖ 示范: "in=香港.0\.2倍率+台湾&out=BGP&regex=iplc"
⦿ rename 重命名, "旧名@新名", "前缀@", "@后缀", 用 "+" 连接多个参数;
  ❖ 删除字段: "字段1.字段2☠️", 想删除 "." 时用 "\." 替代
  ❖ 示范: "rename=香港@𝐇𝐊+[𝐒𝐒]@+@[1𝐗]+流量.0\.2☠️"
  ❖ 默认 emoji 先生效, 如想调换顺序, 请用 rrname 参数
⦿ replace 正则替换节点中字段, 可用于重命名/更改加密方式等
  ❖ replace=regex1@𝘀𝘁𝗿1+regex2@𝘀𝘁𝗿2
⦿ ptn/npt=1-8, 将节点名英文/数字替换成样式 ⇒ 🅰/🄰/𝐀/𝗮/𝔸/𝕒/ᵃ/ᴬ, ①\❶\⓵\𝟙\¹\₁\𝟏\𝟷
⦿ delreg, 利用正则表达式来删除 "节点名" 中的字段(⚠️ 慎用)
⦿ aead=-1, 关闭 Vmess 的 AEAD 参数
⦿ host=xxx, 修改已有 host , 如要增加host，请用☠️结尾
⦿ obfs=vhttp/shttp, 指定 obfs=shadowsocks-http 或 obfs=vmess-http 的特殊需求
⦿ tsession=0/1/2, 0/1 代表关闭 tls-session-ticket/reuse，2 表示全部关闭
⦿ checkurl=xxx , 指定 server_check_url 参数
⦿ sort=1/-1/x/参数规则, 按节点名 正/逆/随机/参数规则 排序
  ❖ 参数规则是正则表达式或简单关键词, 用"<" 或 ">" 连接
  ❖ sort=🇭🇰>🇸🇬>🇯🇵>🇺🇸 , 靠前排序
  ❖ sort=IEPL<IPLC<BGP , 靠后排序
⦿ info=1, 开启通知提示机场 ✈️ 流量信息(如有提供);
⦿ flow=2022-06-02:1000:54, 订阅到期时间:总流量:已用流量
⦿ 占位符，可用于 rename/replace 等操作
  ❖ $type0/1/2/3/4/5/6/7 占位符，将节点类型(ss/ssr/vmess 等)作为可操作参数，如
    ∎ rename=@|$type2
    ∎ 样式分别为 "𝐬𝐬","𝐒𝐒","🅢🅢","🆂🆂","ⓢⓢ","🅂🅂","𝕊𝕊","ˢˢ"
  ❖ $index0/1/2/3/4/5/6/7/8 占位符，将节点的序号作为可操作参数，如
    ∎ rename=@「$index1」
    ∎ 样式分别为 1\①\❶\⓵\𝟙\¹\₁\𝟏\𝟷
  ❖ $emoji1/2 占位符, 将emoji(🇭🇰 等)作为可操作参数
    ∎ rename=@「$emoji1」
  ❖ $tag 占位符，将订阅的 tag 作为可操作参数，如
    ∎ 可接数字以单独给 tag 添加字母/数字样式
    ∎ rename=@「$tag34」, 样式同下边的 ptn/npt
⦿ ⟦进阶参数⟧: 𝘀𝗳𝗶𝗹𝘁𝗲𝗿/𝘀𝗿𝗲𝗻𝗮𝗺𝗲, 传入一段 base64 编码的脚本, 可用于更为复杂的[过滤/重命名] 需求
  ❖ 说明: https://github.com/KOP-XIAO/QuantumultX/pull/9

2⃣️ ⟦𝐫𝐞𝐰𝐫𝐢𝐭𝐞 重写⟧/⟦𝐟𝐢𝐥𝐭𝐞𝐫 分流⟧ ➠ 参数说明:
⦿ in, out, 根据关键词 保留/禁用 相关分流、重写规则;
⦿ inhn, outhn, “保留/删除”主机名(𝒉𝒐𝒔𝒕𝒏𝒂𝒎𝒆);
  ❖ 示范: 禁用 "淘宝比价" 及 "weibo" 的 js 同主机名
  𝐡𝐭𝐭𝐩𝐬://𝐦𝐲𝐥𝐢𝐬𝐭#out=tb_price.js+wb_ad.js&outhn=weibo
⦿ regex/regout, 正则保留/删除, 请自行折腾正则表达式;
  ❖ 可与 in(hn)/out(hn) 一起使用，in(hn)/out(hn) 会优先执行;
  ❖ 对 𝒉𝒐𝒔𝒕𝒏𝒂𝒎𝒆 & 𝐫𝐞𝐰𝐫𝐢𝐭𝐞/𝐟𝐢𝐥𝐭𝐞𝐫 同时生效(⚠️ 慎用)
⦿ policy 参数, 用于直接指定策略组，或为 𝐒𝐮𝐫𝐠𝐞 类型 𝗿𝘂𝗹𝗲-𝘀𝗲𝘁 生成策略组(默认"𝐒𝐡𝐚𝐰𝐧"策略组);
⦿ pset=regex1@policy1+regex2@policy2, 为同一分流规则中不同关键词(允许正则表达式)指定不同策略组;
⦿ replace 参数, 正则替换 𝐟𝐢𝐥𝐭𝐞𝐫/𝐫𝐞𝐰𝐫𝐢𝐭𝐞 内容, regex@newregex;
  ❖ 将淘宝比价中脚本替换成 lite 版本(如有此版本的脚本)
    ∎ replace=(price)(.*)@$1_lite$2
⦿ dst=rewrite/filter，分别为将 𝐦𝐨𝐝𝐮𝐥𝐞&𝗿𝘂𝗹𝗲-𝘀𝗲𝘁 转换成 重写/分流;
  ❖ ⚠️ 默认将 𝐦𝐨𝐝𝐮𝐥𝐞 转换到重写, 𝗿𝘂𝗹𝗲-𝘀𝗲𝘁 转成分流
  ❖ ⚠️ 把 𝗿𝘂𝗹𝗲-𝘀𝗲𝘁 中 url-regex 转成重写时, 必须要加 dst=rewrite;
  ❖ ⚠️ 把 𝐦𝐨𝐝𝐮𝐥𝐞 中的分流规则转换时, 必须要加 dst=filter
⦿ cdn=1, 将 github 脚本的地址转换成免翻墙 fastly.jsdelivr.net/gh
⦿ fcr=1/2/3, 为分流规则添加 force-cellular/multi-interface/multi-interface-balance 参数，强制移动数据/混合数据/负载均衡
⦿ via=接口, 为分流规则添加 via-interface 参数, 0 表示 via-interface=%TUN%
⦿ relay=目标策略名, 批量将节点订阅转换为ip/host规则，用于实现代理链

3⃣️ 其他参数
⦿ 通知参数 ntf=0/1, 用于 关闭/打开 资源解析器的提示通知
  ❖ 𝗿𝗲𝘄𝗿𝗶𝘁𝗲/𝗳𝗶𝗹𝘁𝗲𝗿 默认“开启”通知提示, 以防规则误删除
  ❖ 𝘀𝗲𝗿𝘃𝗲𝗿 资源解析则默认”关闭“通知提示
⦿ 类型参数 type=domain-set/rule/module/list/nodes
  ❖ 当解析器未能正确识别类型时, 可尝试使用此参数强制指定
⦿ 隐藏参数 hide=0, 禁用筛除的分流/重写，默认方式为删除
⦿ profile=111 , URL-Scheme 添加 QuanX 类型配置中远程资源
----------------------------------------------------------
*/

/**
* 使用说明，
0️⃣ 在QuantumultX 配置文件中[general] 部分，加入 
resource_parser_url = https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/resource-parser.js
⚠️⚠️如提示"没有自定义解析器"，请长按右下角图标后点击左侧刷新按钮，更新资源，后台退出 app，直到出现解析器说明

------------------------------
*/
var Pemoji = mark0 && para1.indexOf("emoji=") != -1 ? para1.split("emoji=")[1].split("&")[0] : null;
var Pdbg = mark0 && para1.indexOf("dbg=") != -1 ? para1.split("dbg=")[1].split("&")[0] : null;
var Pudp0 = mark0 && para1.indexOf("udp=") != -1 ? para1.split("udp=")[1].split("&")[0] : 0;
var Ptfo0 = mark0 && para1.indexOf("tfo=") != -1 ? para1.split("tfo=")[1].split("&")[0] : 0;
//var Prname = mark0 && para1.indexOf("rename=") != -1 ? para1.split("rename=")[1].split("&")[0].split("+") : null;
var Prname = mark0 && /(^|\&)rename=/.test(para1) ? para1.split(/(^|\&)rename\=/)[2].split("&")[0].split("+") : null;
var Psrename = mark0 && para1.indexOf("srename=") != -1 ? Base64.decode(para1.split("srename=")[1].split("&")[0]) : null; // script rename
var Prrname = mark0 && para1.indexOf("rrname=") != -1 ? para1.split("rrname=")[1].split("&")[0].split("+") : null;
var Psuffix = mark0 && para1.indexOf("suffix=") != -1 ? para1.split("suffix=")[1].split("&")[0] : 0;
var Ppolicy = mark0 && para1.indexOf("policy=") != -1 ? decodeURIComponent(para1.split("policy=")[1].split("&")[0]) : "Shawn";
var Ppolicyset = mark0 && para1.indexOf("pset=") != -1 ? decodeURIComponent(para1.split("pset=")[1].split("&")[0]) : "";
var Pcert0 = mark0 && para1.indexOf("cert=") != -1 ? para1.split("cert=")[1].split("&")[0] : 0;
var Psort0 = mark0 && para1.indexOf("sort=") != -1 ? para1.split("sort=")[1].split("&")[0] : 0;
var PsortX = mark0 && para1.indexOf("sortx=") != -1 ? para1.split("sortx=")[1].split("&")[0] : 0;
var PTls13 = mark0 && para1.indexOf("tls13=") != -1 ? para1.split("tls13=")[1].split("&")[0] : 0;
var Pntf0 = mark0 && para1.indexOf("ntf=") != -1 ? para1.split("ntf=")[1].split("&")[0] : 2;
var Phide = mark0 && para1.indexOf("hide=") != -1 ? para1.split("hide=")[1].split("&")[0] : 1;
var Pb64 = mark0 && para1.indexOf("b64=") != -1 ? para1.split("b64=")[1].split("&")[0] : 0;
var emojino = [" 0️⃣ ", " 1⃣️ ", " 2⃣️ ", " 3⃣️ ", " 4⃣️ ", " 5⃣️ ", " 6⃣️ ", " 7⃣️ ", " 8⃣️ ", " 9⃣️ ", " 🔟 "]
var pfi = mark0 &&Pin0 ? "in=" + Pin0.join(", ") + ",  " : ""
var pfo = mark0 &&Pout0 ? "out=" + Pout0.join(", ") : ""
var pfihn = mark0 &&Phin0 ? "inhn=" + Phin0.join(", ") + ",  " : ""
var pfohn = mark0 &&Phout0 ? "outhn=" + Phout0.join(", ") : ""
var Pcnt =  mark0 &&para1.indexOf("cnt=") != -1 ? para1.split("cnt=")[1].split("&")[0] : 0;
var Pcap = mark0 &&para1.indexOf("cap=") != -1 ? para1.split("cap=")[1].split("&")[0] : "";
var Pptn = mark0 &&para1.indexOf("ptn=") != -1 ? para1.split("ptn=")[1].split("&")[0] : ""; //花式英文字符
var Pnptn = mark0 &&para1.indexOf("npt=") != -1 ? para1.split("npt=")[1].split("&")[0] : ""; //花式数字
var Pcdn = mark0 &&para1.indexOf("cdn=") != -1 ? para1.split("cdn=")[1].split("&")[0] : "";
let [flow, exptime, errornode, total] = "";
var Pdel = mark0 && para1.indexOf("del=") != -1 ? para1.split("del=")[1].split("&")[0] : 0; //删除重复节点
var typeU = mark0 && para1.indexOf("type=") != -1 ? para1.split("type=")[1].split("&")[0] : "";
var Pfcr = mark0 && para1.indexOf("fcr=") != -1 ? para1.split("fcr=")[1].split("&")[0] : ""; // force-cellular 等参数
var Pvia = mark0 && para1.indexOf("via=") != -1 ? para1.split("via=")[1].split("&")[0] : ""; // via-interface 参数
var Paead = mark0 && para1.indexOf("aead=") != -1 ? para1.split("aead=")[1].split("&")[0] : ""; // vmess aead 参数
var Phost = mark0 && ( para.indexOf("#host=") != -1 || para.indexOf("&host=") != -1) ? (para.indexOf("#host=")!=-1? para.split("#host="): para.split("&host="))[1].split("&")[0] : ""; // host 混淆参数
var Pcsha256 = mark0 && para1.indexOf("csha=") != -1 && version >= 646? para1.split("csha=")[1].split("&")[0] : ""; // cert-sha256 混淆参数
var Ppsha256 = mark0 && para1.indexOf("psha=") != -1 && version >= 646? para1.split("psha=")[1].split("&")[0] : ""; // pubkey-sha256 混淆参数
var typeQ = $resource.type? $resource.type:"unsupported"   //返回 field 类型参数
var PRelay =mark0 && para1.indexOf("relay=") != -1 ? decodeURIComponent(para1.split("relay=")[1].split("&")[0]) : ""; // 节点 relay 参数, 用于实现代理链功能
var PUOT = mark0 && para1.indexOf("uot=") != -1 && version >= 665? para1.split("uot=")[1].split("&")[0] : ""; // 节点 udp-over-tcp 开启
var PcheckU = mark0 && para1.indexOf("checkurl=") != -1 ? decodeURIComponent(para1.split("checkurl=")[1].split("&")[0]) : ""; // 节点 server_check_url 参数
typeQ = PRelay!=""? "server":typeQ
var typec="" //check result type
var Pflow=mark0 && para1.indexOf("flow=") != -1 ? para1.split("flow=")[1].split("&")[0] : 0; // 流量时间等参数
var PProfile = mark0 && para1.indexOf("profile=") != -1 ? para1.split("profile=")[1].split("&")[0] : 0; // 通过URL-Scheme导入完整配置参数
var Palpn = mark0 && para1.indexOf("alpn=") != -1 && version >= 712? para1.split("alpn=")[1].split("&")[0] : ""; // over-tls 类型，alpn参数
var Pobfs = mark0 && para1.indexOf("obfs=") != -1 && version >= 770? para1.split("obfs=")[1].split("&")[0] : ""; // 指定特殊情况下的 obfs=xx-http 类型
var Psession =  mark0 && para1.indexOf("tsession=") != -1 && version >= 771? para1.split("tsession=")[1].split("&")[0] : "";//tls-no-session-ticket and tls-no-session-reuse
// 0/1 代表关闭 session-ticket/reuse，2 表示全部关闭。

var RegoutList= [] ;//用于 regout参数删选提醒
// URL-Scheme 增加配置
var ADDres = `quantumult-x:///add-resource?remote-resource=url-encoded-json`
var RLink = `{
  "server_remote": [
    sremoteposition
  ],
  "filter_remote": [
    fremoteposition
  ],
  "rewrite_remote": [
    rremoteposition
  ]
}`

var ProfileInfo = {
  "server":"",
  "filter":"",
  "rewrite":""
}
  return  cnts
  }
    return fn();
  } catch (error) {
    return defaultVaule;
  }
  return total
  
}
    return type
}
    return Nlist
}
  return cnt
}
    return " " + cnt + " "
  }
    return cnt
  }
  return cnt 
}
  return cnt
}
  }    return newStr.join(" ");
}
    return [[item.split("tag=")[0]+
      "tag=", tp, item.split("tag=")[1]].join(" ")].join(" ")
  }
    return [item, tp].join(" ")
  }
    return tp
  }
  return item
}
  return items
}
  return item
}
    return get_emoji(ind,item.split("tag=")[1])[1]
  }
  return item
}
  return cnt0
}
  return rsts.join("\n")
  
}
    return cnt.replace(/(.*js-file-line\"\>)(.*?)(\<\/td\>)/g,"$2").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").trim()
  }
  return cnt
}
  return "wrong-link"
}
  return cnt
}
  return cnt
}
  return cnt
}
  return cnt
}
  return cnt
}
  return cnt
}
        return row.replace(/ /g, "").split("data=")[0].split("data-type=")[0] + " url " + "reject-dict"
    } else if (/array/i.test(filename)) {
        return row.replace(/ /g, "").split("data=")[0].split("data-type=")[0] + " url " + "reject-array"
    } else if (/(txt|html)/i.test(filename) || filename==null) {
        return row.replace(/ /g, "").split("data=")[0].split("data-type=")[0] + " url " + "reject-200"
    } else if (/(png|jpg|gif)/i.test(filename)) {
        return row.replace(/ /g, "").split("data=")[0].split("data-type=")[0] + " url " + "reject-img"
    } else {
        return row.replace(/ /g, "").split("data=")[0].split("data-type=")[0] + " url " + "reject"
    }
    return nrw
}
  return nrw
}
    return nrwt
}
    return Nlist
}
    return hname
}
        return flag
    } else { //if param
        return 2
    } //无参数
}
        //return nlist;
    } else if (Tin != "" && Tin != null) { //if Tout
        var dlist = [];
        for (var i = 0; i < cnt.length; i++) {
            cc = cnt[i].replace(/^\s*\-\s/g,"").trim()
            const RuleCheck = (item) => cc.indexOf(item) != -1; //无视注释行
            const CommentCheck = (item) => cc.toLowerCase().indexOf(item) == 0; //无视注释行
            if (!RuleK.some(CommentCheck) && cc) { //if Pout.some, 不操作注释项
                dd = Rule_Policy(cc);
                const include = (item) => dd.indexOf(item) != -1; // 保留项
                if (Tin.some(include)) {
                    nlist.push(dd);
                } else { dlist.push("-" + dd) }
            }
      //return nlist;
    } else {  //if Tin
      nlist = cnt.map(Rule_Policy)
        //return cnt.map(Rule_Policy)
    }
  return nlist
}
            return ""
        } else { return "" }
        if (cnt[0].indexOf("URL-REGEX") != -1 || cnt[0].indexOf("PROCESS") != -1) {
            nn = ""
        } else { nn = nn.replace("IP-CIDR6", "ip6-cidr") }
        return nn
    } else if (cnt.length == 1 && !RuleK.some(RuleCheck) && cnt[0]!="" && cnt[0].indexOf("payload:")==-1 && cnt[0].indexOf("=")==-1 && cnt[0].trim()!="https:") { // 纯域名/ip 列表
      //$notify("LIST-HANDLE")
      return rule_list_handle(cnt[0])
    } else { 
      //$notify("Nothing")
      return "" }//if RuleK1 check 
}
  return cnt
}
    return nlist.join("\n")
}
  return cnt
  console.log(cnt)
}
    return cnt.join(",")
  }
    return cnt0//.split("\n")
}
    return QXlist;
}
  return cnt
}
  return cnt
}
  return cnt
}
  return nodes.join("\n")
  //console.log(nodes)
}
    return QX
}
  return node
}
  return node
}
  return QX
}
  return QX
}
    return obfsi.join(", ")
  } else if (jsonl.net == "ws") {
    obfs0 = "obfs=ws";
    uri0 = jsonl.path && jsonl.path != "" ? "obfs-uri=" + jsonl.path : "obfs-uri=/";
    uri0 = uri0.indexOf("uri=/")!=-1 ? uri0:uri0.replace("uri=","uri=/")
    host0 = jsonl.host && jsonl.host != "" ? "obfs-host=" + jsonl.host + ", " : "";
    obfsi.push(obfs0, host0 + uri0);
    return obfsi.join(", ")
  } else if (jsonl.tls == "tls" && (jsonl.net == "tcp" || jsonl.net == "none")) { // 过滤掉 h2/http 等类型 
    obfs0 = "obfs=over-tls, " + tcert + ", " + tls13;
    uri0 = jsonl.path && jsonl.path != "" ? "obfs-uri=" + jsonl.path : "";
    uri0 = uri0.indexOf("uri=/")!=-1 ? uri0:uri0.replace("uri=","uri=/")
    host0 = jsonl.host && jsonl.host != "" ? ", obfs-host=" + jsonl.host : "";
    obfsi.push(obfs0 + host0)
    return obfsi.join(", ")
  } else if ((jsonl.net == "tcp" || jsonl.net == "none") && jsonl.type == "http"){
    obfs0 = "obfs=http";
    uri0 = jsonl.path && jsonl.path != "" ? "obfs-uri=" + jsonl.path : "obfs-uri=/";
    uri0 = uri0.indexOf("uri=/")!=-1 ? uri0:uri0.replace("uri=","uri=/")
    host0 = jsonl.host && jsonl.host != "" ? "obfs-host=" + jsonl.host + ", " : "";
    obfsi.push(obfs0, host0 + uri0);
    return obfsi.join(", ")
  } else if (jsonl.net !="tcp" && jsonl.net !="none" &&  jsonl.net != undefined){ // 过滤掉 h2/http 等类型
    Perror = 1
    $notify("⚠️ Quantumult X 不支持该类型节点", "vmess + " + jsonl.net, JSON.stringify(jsonl))
    return "NOT-SUPPORTTED"
  } else if ((jsonl.net == "tcp" || jsonl.net == "none") && jsonl.type != undefined && jsonl.type != "none" && jsonl.type != "" && jsonl.type != "vmess") {
    return "NOT-SUPPORTTED"
  } else {return ""}
}
    return cnt
}
    return cnt
}
        return content
    }
    return content
  } else {
    RegoutList.push(cnt)
  }
        return flag
    } else { //if param
        return 2
    }
    return Nlist
}
        return res;
    } catch (err) {
        $notify("❌ 脚本筛选出现错误", "", err);
        return servers;
    }
    return QX;
}
  return QX
}
    return QX;
}
  return total+":"+item
}
  return QX;
}
    return QX;
}
  return cntii
} catch (err) {
  if(Perror == 0) {
  $notify("❌ 解析出现错误,已忽略该条目", "⚠️ 请点击通知，发送订阅链接进行反馈", cntf+"\n"+ err, bug_link);
}
  return ""
}
   return nlist
}
  return cnt0
}
        return nlist.sort(ToTag)
    } else if (para == -1) {
        return nlist.sort(ToTagR)
    } else if(para == "x") {
        return shuffle(nlist)
    } else if(para == "0") {
        return nlist
    } else {
      return Sort_KWD (nlist,para) //关键词排序
    }
    return res
}
    return res
}
    return input;
}
  return newarr
}
  return cnt0
}
    return cnt
}
      return nserver
    } else {
      return server
    }
        return servers.map((s, i) => s.split("tag=")[0] + "tag=" + newNames[i]);
    } catch (err) {
        $notify("❌ 脚本重命名出现错误", "", err);
        return servers;
    }
    return str.replace(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/g, "").trim();//unescape(escape(str).replace(/\%uD.{3}/g, ''));
}
                return [nname,key]
            }
    if (flag == 0) { return ["🏴‍☠️ " + sname.replace(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/g, "").trim(), "🏴‍☠️"] }
}
function emoji_handle(servers, Pemoji) {
    var nlist = []
    var ser0 = servers

    for (var i = 0; i < ser0.length; i++) {
        if (ser0[i].indexOf("tag=") != -1) {
            var oname = ser0[i].split("tag=")[1].trim();
            var hd = ser0[i].split("tag=")[0];
            var nname = oname;//emoji_del(oname);
            // Code: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2, Emoji: https://emojipedia.org/flags/
            if (Pemoji == 1) {
                var nname = get_emoji(1, nname)[0]
            } else if (Pemoji == 2) {
                var nname = get_emoji(2, nname)[0]
            } else if (Pemoji == -1) {
                nname = emoji_del(oname);
            }
    return nlist
}
  return (Nlist)
}
    return nserver
}
    return nserver
}
    return nserver
}
        return content
    }
    return "false"
  } else {
      //console.log(para)
    return content.split(para+"=")[1].split(",")[0].trim()
  }
  return nserver
}
  return nserver
}
  return nserver
}
  return node
}
  return node
}
  return node
}
  return node
}
  return cnt
}
    return cnt
  }
  return nodelist.join("\n")
}
  return node
}
  return node
}
  return node
}
  return node

}
    return node
}
    return node
}
  return cnt0
}
    return cnt0
}
  return cnt
}
        return t;
    }(b64chars);
    var fromCharCode = String.fromCharCode;
    // encoder stuff
    var cb_utob = function (c) {
        if (c.length < 2) {
            var cc = c.charCodeAt(0);
            return cc < 0x80 ? c
                : cc < 0x800 ? (fromCharCode(0xc0 | (cc >>> 6))
                    + fromCharCode(0x80 | (cc & 0x3f)))
                    : (fromCharCode(0xe0 | ((cc >>> 12) & 0x0f))
                        + fromCharCode(0x80 | ((cc >>> 6) & 0x3f))
                        + fromCharCode(0x80 | (cc & 0x3f)));
        } else {
            var cc = 0x10000
                + (c.charCodeAt(0) - 0xD800) * 0x400
                + (c.charCodeAt(1) - 0xDC00);
            return (fromCharCode(0xf0 | ((cc >>> 18) & 0x07))
                + fromCharCode(0x80 | ((cc >>> 12) & 0x3f))
                + fromCharCode(0x80 | ((cc >>> 6) & 0x3f))
                + fromCharCode(0x80 | (cc & 0x3f)));
        }
        return u.replace(re_utob, cb_utob);
    };
    var cb_encode = function (ccc) {
        var padlen = [0, 2, 1][ccc.length % 3],
            ord = ccc.charCodeAt(0) << 16
                | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
                | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0)),
            chars = [
                b64chars.charAt(ord >>> 18),
                b64chars.charAt((ord >>> 12) & 63),
                padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
                padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
            ];
        return chars.join('');
    };
    var btoa = function (b) {
        return b.replace(/[\s\S]{1,3}/g, cb_encode);
    };
    // var _encode = function(u) {
    //  var isUint8Array = Object.prototype.toString.call(u) === '[object Uint8Array]';
    //  return isUint8Array ? u.toString('base64')
    //    : btoa(utob(String(u)));
    // }
    this.encode = function (u) {
        var isUint8Array = Object.prototype.toString.call(u) === '[object Uint8Array]';
        return isUint8Array ? u.toString('base64')
            : btoa(utob(String(u)));
    }
        return !urisafe
            ? _encode(u)
            : _encode(String(u)).replace(/[+\/]/g, function (m0) {
                return m0 == '+' ? '-' : '_';
            }).replace(/=/g, '');
    };
    var encodeURI = function (u) { return uriencode(u, true) };
    // decoder stuff
    var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
    var cb_btou = function (cccc) {
        switch (cccc.length) {
            case 4:
                var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
                    | ((0x3f & cccc.charCodeAt(1)) << 12)
                    | ((0x3f & cccc.charCodeAt(2)) << 6)
                    | (0x3f & cccc.charCodeAt(3)),
                    offset = cp - 0x10000;
                return (fromCharCode((offset >>> 10) + 0xD800)
                    + fromCharCode((offset & 0x3FF) + 0xDC00));
            case 3:
                return fromCharCode(
                    ((0x0f & cccc.charCodeAt(0)) << 12)
                    | ((0x3f & cccc.charCodeAt(1)) << 6)
                    | (0x3f & cccc.charCodeAt(2))
                );
            default:
                return fromCharCode(
                    ((0x1f & cccc.charCodeAt(0)) << 6)
                    | (0x3f & cccc.charCodeAt(1))
                );
        }
        return b.replace(re_btou, cb_btou);
    };
    var cb_decode = function (cccc) {
        var len = cccc.length,
            padlen = len % 4,
            n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0)
                | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0)
                | (len > 2 ? b64tab[cccc.charAt(2)] << 6 : 0)
                | (len > 3 ? b64tab[cccc.charAt(3)] : 0),
            chars = [
                fromCharCode(n >>> 16),
                fromCharCode((n >>> 8) & 0xff),
                fromCharCode(n & 0xff)
            ];
        chars.length -= [0, 0, 2, 1][padlen];
        return chars.join('');
    };
    var _atob = function (a) {
        return a.replace(/\S{1,4}/g, cb_decode);
    };
    var atob = function (a) {
        return _atob(String(a).replace(/[^A-Za-z0-9\+\/]/g, ''));
    };
    // var _decode = buffer ?
    //  buffer.from && Uint8Array && buffer.from !== Uint8Array.from
    //  ? function(a) {
    //    return (a.constructor === buffer.constructor
    //        ? a : buffer.from(a, 'base64')).toString();
    //  }
    //  : function(a) {
    //    return (a.constructor === buffer.constructor
    //        ? a : new buffer(a, 'base64')).toString();
    //  }
    //  : function(a) { return btou(_atob(a)) };
    var _decode = function (u) {
        return btou(_atob(u))
    }
        return _decode(
            String(a).replace(/[-_]/g, function (m0) { return m0 == '-' ? '+' : '/' })
                .replace(/[^A-Za-z0-9\+\/]/g, '')
        ).replace(/&gt;/g, ">").replace(/&lt;/g, "<");
    };
}
                return {
                        /* The block's parent */
                        parent: null,
                        /* Number of children */
                        length: 0,
                        /* Block's level */
                        level: lvl,
                        /* Lines of code to process */
                        lines: [],
                        /* Blocks with greater level */
                        children : [],
                        /* Add a block to the children collection */
                        addChild : function(obj) {
                                this.children.push(obj);
                                obj.parent = this;
                                ++this.length;
                        }
                                        return;
                                }
                return result;
        }
                        return true;
                } else if(val == 'false') {
                        return false;
                } else if(val == '.NaN') {
                        return Number.NaN;
                } else if(val == 'null') {
                        return null;
                } else if(val == '.inf') {
                        return Number.POSITIVE_INFINITY;
                } else if(val == '-.inf') {
                        return Number.NEGATIVE_INFINITY;
                } else if(m = val.match(regex["dashesString"])) {
                        return m[1];
                } else if(m = val.match(regex["quotesString"])) {
                        return m[1];
                } else if(m = val.match(regex["float"])) {
                        return parseFloat(m[0]);
                } else if(m = val.match(regex["integer"])) {
                        return parseInt(m[0]);
                } else if( !isNaN(m = Date.parse(val))) {
                        return new Date(m);
                } else if(m = val.match(regex["single_key_value"])) {
                        var res = {};
                        res[m[1]] = processValue(m[2]);
                        return res;
                } else if(m = val.match(regex["array"])){
                        var count = 0, c = ' ';
                        var res = [];
                        var content = "";
                        var str = false;
                        for(var j = 0, lenJ = m[1].length; j < lenJ; ++j) {
                                c = m[1][j];
                                if(c == '\'' || c == '"') {
                                        if(str === false) {
                                                str = c;
                                                content += c;
                                                continue;
                                        } else if((c == '\'' && str == '\'') || (c == '"' && str == '"')) {
                                                str = false;
                                                content += c;
                                                continue;
                                        }
                        return res;
                } else if(m = val.match(regex["map"])){
                        var count = 0, c = ' ';
                        var res = [];
                        var content = "";
                        var str = false;
                        for(var j = 0, lenJ = m[1].length; j < lenJ; ++j) {
                                c = m[1][j];
                                if(c == '\'' || c == '"') {
                                        if(str === false) {
                                                str = c;
                                                content += c;
                                                continue;
                                        } else if((c == '\'' && str == '\'') || (c == '"' && str == '"')) {
                                                str = false;
                                                content += c;
                                                continue;
                                        }
                        return newRes;
                } else 
                        return val;
        }
                return chunks.join("\n");
        }
                return str;
        }
                return res;
        }
                return res;
        }
                return lines.join("\n");
        }
                return res;
        }
        return regex.reduce((a, expr) => OR(a, src.map(item => expr.test(item))), initial)
    }
            return src.map(item => item.replace(old, now));
        },

        delete: (src, ...args) => {
            return src.map(item => args.reduce((now, expr) => now.replace(expr, ''), item));
        },

        trim: (src) => {
            return src.map(item => item.trim().replace(/[^\S\r\n]{2,}/g, ' '));
        }
                return type ? type[1] : 'unknown';
            })
        };
        return nodes;
    }
    return {
        filter, rename, getNodeInfo
    }
    return args.reduce((a, b) => a.map((c, i) => b[i] && c));
}
    return args.reduce((a, b) => a.map((c, i) => b[i] || c))
}
    return array.map(c => !c);
}
