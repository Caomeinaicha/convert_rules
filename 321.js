/** 
#Quantumult X 节点资源解析器
本资源解析器作者: Shawn (@XIAO_KOP) , 有问题请反馈:@Shawn_KOP_bot
#tag 2020-04-25: 11:50
功能：将不同格式订阅转换成 Quantumult X，并支持简单的节点过滤/emoji添加删除，udp/tfo 的开启.
- 目前支持 V2RayN/SSR/Trojan/Quanx 格式写法的节点引用；
1⃣️ 过滤参数为 in,out, 分别为保留与排除，多个参数间用+号连接, 可直接使用中文(如 in=香港+台湾)
2⃣️ emoji 参数为 emoji=1,2 或-1，为添加或删除节点名中的emoji旗帜（国行设备请用 emoji=2）
3⃣️ udp=1，tfo=1 参数开启 udp-relay 及fast-open
 */
var content0=$resource.content;
var para=decodeURIComponent($resource.link);
var type0=Type_Check(content0);
var Pin0=para.indexOf("in=")!=-1? para.split("#")[1].split("in=")[1].split("&")[0].split("+"):null;
var Pout0=para.indexOf("out=")!=-1? para.split("#")[1].split("out=")[1].split("&")[0].split("+"):null;
var Pemoji=para.indexOf("emoji=")!=-1? para.split("#")[1].split("emoji=")[1].split("&")[0].split("+"):null;
var Pudp0=para.indexOf("udp=")!=-1? para.split("#")[1].split("udp=")[1].split("&")[0].split("+"):0;
var Ptfo0=para.indexOf("tfo=")!=-1? para.split("#")[1].split("tfo=")[1].split("&")[0].split("+"):0;
if(type0=="Vmess"){
	total=V2QX(content0,Pudp0,Ptfo0);
	flag=1;
}else if(type0=="QuanX"){
	total=content0.split("\n");
	flag=1;
}else if(type0=="SSR")
	total=SSR2QX(content0,Pudp0,Ptfo0);
	flag=1;
}else if(type0=="Trojan"){
	total=TJ2QX(content0,Pudp0,Ptfo0);
	flag=1;
}else{
	$notify("👻该解析器暂未支持您的订阅格式","😭太难写了", "stay tuned");
	flag=0;
	$done({content : content0});
}

if(flag==1){$notify("👥 开始转换节点，类型："+type0,"🐶 您已添加节点筛选参数，如下","👍️ 保留的关键字："+Pin0+"\n👎️ 排除的关键字："+Pout0);
                    total=filter(total,Pin0,Pout0)
					} else {
		$notify("🐷 开始转换节点，类型："+type0,"🐼️ 如需筛选节点请使用in/out及其他参数，可参考此示范:","👉 https://t.me/QuanXNews/110");
	}
	if(Pemoji){
		$notify("🏳️‍🌈 开始更改旗帜 emoji","清除emoji请用参数 -1, 国行设备添加emoji请使用参数 2","你当前所用的参数为 emoji="+Pemoji);
		total=emoji_handle(total,Pemoji);
		$done({content : total.join("\n")});	
}


//判断订阅类型
function Type_Check(subs){
	var type=""
	if (subs.indexOf("dm1lc3M6Ly")!= -1){
		type="Vmess"
	} else if (subs.indexOf("tag")!=-1){
		type="QuanX"
	} else if (subs.indexOf("c3NyOi8v")!= -1){
		type="SSR"
	} else if (subs.indexOf("dHJvamFu")!= -1){
		type="Trojan"
	}
	return type
}

//V2RayN 订阅转换成 QUANX 格式
function V2QX(subs,Pudp,Ptfo){
	const $base64 = new Base64()
	var list0=$base64.decode(subs).split("\n");
	var QXList=[]
	for(var i=0;i<list0.length; i++){
		if(list0[i].trim()!=""){
		var server=String($base64.decode(list0[i].replace("vmess://","")).trim()).split("\u0000")[0];
		var nss=[];
		if(server!=""){
			ss=JSON.parse(server);
			ip="vmess="+ss.add+":"+ss.port;
			pwd="password="+ss.id;
			mtd="method=aes-128-gcm"
			tag="tag="+decodeURIComponent(ss.ps);
			udp= Pudp==1? "udp-relay=true":"udp-relay=false";
			tfo= Ptfo==1? "fast-open=true":"fast-open=false";
			obfs=Pobfs(ss);
			if(obfs==""){
				nss.push(ip,mtd,pwd,tfo,udp,tag)
			}else {
				nss.push(ip,mtd,pwd,obfs,tfo,udp,tag);}
			QX=nss.join(", ");
			//$notify("Lists","check",QX)
			QXList.push(QX)
		}
	}
}
		return QXList
}

//节点过滤，使用+连接多个关键词:in 为保留，out 为排除
function filter(Servers,Pin,Pout){
	var NList=[];
	for(var i=0;i<Servers.length; i++){
		if(Servers[i].indexOf("tag")!=-1){
			name=Servers[i].split("tag=")[1]
			const include = (item) => name.indexOf(item) != -1;
			const exclude = (item) => name.indexOf(item) != -1;
			if(Pin){
				if(Pin.some(include)&&Pout){
					if(!Pout.some(exclude)){
					NList.push(Servers[i])
					}
				} else if(Pin.some(include)&&!Pout) {NList.push(Servers[i])}
			} else{
				if(!Pout.some(exclude)){
				NList.push(Servers[i])
				}
			}		
		}
			}
	return NList
}

// Vmess obfs 参数
function Pobfs(jsonl){
	var obfsi=[]
	if(jsonl.net=="ws" && jsonl.tls=="tls"){
		obfs0="obfs=wss, ";
		uri0=jsonl.path!=""? "obfs-uri="+jsonl.path:"obfs-uri=/";
		host0= jsonl.host!=""? "obfs-host="+jsonl.host+",":"";
		obfsi.push(obfs0+host0+uri0)
		return obfsi.join(", ")
	}else if(jsonl.net=="ws"){
		obfs0="obfs=ws";
		uri0=jsonl.path!=""? "obfs-uri="+jsonl.path:"obfs-uri=/";
		obfsi.push(obfs0,uri0)
		return obfsi.join(", ")
	}else if(jsonl.tls=="tls"){
		obfs0="obfs=over-tls";
		uri0=jsonl.path!=""? "obfs-uri="+jsonl.path:"";
		host0=jsonl.host!=""? "obfs-host="+jsonl.host:"";
		obfsi.push(obfs0+host0)
		return obfsi.join(", ")
	}
}

//SSR 转换 quanx 格式
function SSR2QX(subs,Pudp,Ptfo){
	const $base64 = new Base64()
	var list0=$base64.decode(subs).split("\n");
	var QXList=[];
	for(var i=0;i<list0.length; i++){
		if(list0[i].indexOf("ssr://")!=-1){
			var nssr=[]
			var cnt=$base64.decode(list0[i].split("ssr://")[1].replace(/-/g,"+").replace(/_/g,"/"))
			console.log(cnt)
			type="shadowsocks=";
			ip=cnt.split(":")[0]+":"+cnt.split(":")[1];
			pwd="password="+$base64.decode(cnt.split("/?")[0].split(":")[5].replace(/-/g,"+").replace(/_/g,"/")).split("\u0000")[0];
			mtd="method="+cnt.split(":")[3];
			obfs="obfs="+cnt.split(":")[4]+", ";
			ssrp="ssr-protocol="+cnt.split(":")[2];
			if(cnt.indexOf("obfsparam=")!=-1){
				obfshost=cnt.split("obfsparam=")[1].split("&")[0]!=""? "obfs-host="+$base64.decode(cnt.split("obfsparam=")[1].split("&")[0].replace(/-/g,"+").replace(/_/g,"/")).split(",")[0].split("\u0000")[0]+", ":""
			}
			if(cnt.indexOf("protoparam=")!=-1){
				oparam=cnt.split("protoparam=")[1].split("&")[0]!=""? "ssr-protocol-param="+$base64.decode(cnt.split("protoparam=")[1].split("&")[0].replace(/-/g,"+").replace(/_/g,"/")).split(",")[0].split("\u0000")[0]+", ":""
			}
			tag="tag="+($base64.decode(cnt.split("remarks=")[1].split("&")[0].replace(/-/g,"+").replace(/_/g,"/"))).split("\u0000")[0]
			//console.log($base64.decode(cnt.split("remarks=")[1].split("&")[0].replace(/-/g,"+").replace(/_/g,"/")))
			pudp= Pudp==1? "udp-relay=true":"udp-relay=false";
			ptfo= Ptfo==1? "fast-open=true":"fast-open=false";
			nssr.push(type+ip,pwd,mtd,obfs+obfshost+oparam+ssrp,pudp,ptfo,tag)
			QX=nssr.join(", ")
			QXList.push(QX);
		}
	} 
	return QXList;
}

//Trojan 类型转换成 QX
function TJ2QX(subs,Pudp,Ptfo){
	const $base64 = new Base64()
	var list0=$base64.decode(subs).split("\n");
	var QXList=[];
	for(var i=0;i<list0.length; i++){
		if(list0[i].indexOf("trojan://")!=-1){
			var ntrojan=[]
			var cnt=list0[i].split("trojan://")[1]
			type="trojan=";
			ip=cnt.split("@")[1].split("?")[0];
			pwd="password="+cnt.split("@")[0];
			obfs="over-tls=true";
			pcert= cnt.indexOf("allowInsecure=0")!= -1? "tls-verification=true":"tls-verification=false";	
			pudp= Pudp==1? "udp-relay=true":"udp-relay=false";
			ptfo= Ptfo==1? "fast-open=true":"fast-open=false";
			tag="tag="+decodeURIComponent(cnt.split("#")[1])
				// private method for UTF-8 decoding
	_utf8_decode = function (utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;
		while (i < utftext.length) {
			c = utftext.charCodeAt(i);
			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			} else if ((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i + 1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			} else {
				c2 = utftext.charCodeAt(i + 1);
				c3 = utftext.charCodeAt(i + 2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}
		}
		return string;
	}
}