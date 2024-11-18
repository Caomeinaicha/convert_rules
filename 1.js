/**
 * @fileoverview Example to remove country flags from node names in the Quantumult X resource.
 *
 * @supported Quantumult X (v1.0.8-build253)
 */

// 获取资源的链接和内容
let link0 = $resource.link;
let content0 = $resource.content;

// 输出调试信息，检查获取的链接和内容
console.log("资源链接: ", link0);
console.log("资源内容: ", content0);

// 检查链接是否包含 #=0，用于标记需要删除地区旗帜
let param = link0.includes('#=0');

// 删除节点名中的地区旗帜的函数
function removeFlags(content) {
    return content
        .split("\n")
        .map((line) => {
            // 匹配并删除节点名中的地区旗帜，例如 "🇭🇰 香港节点" -> "香港节点"
            if (/tag=/.test(line)) {
                let tagIndex = line.indexOf("tag=");
                let tagContent = line.slice(tagIndex + 4); // 获取节点名部分
                // 匹配并移除所有的地区旗帜符号
                let modifiedTag = tagContent.replace(/(?:🇦🇫|🇦🇱|🇦🇷|🇦🇺|🇧🇪|🇨🇦|🇨🇳|🇩🇪|🇭🇰|🇯🇵|🇺🇸|🇬🇧)/g, "").trim();
                return line.slice(0, tagIndex + 4) + modifiedTag; // 拼接修改后的节点名
            }
            return line; // 保留不含 tag 的行
        })
        .join("\n");
}

// 如果参数标记为删除地区旗帜，则处理内容
if (param) {
    content0 = removeFlags(content0);
}

// 返回修改后的内容
$done({content: content0});
