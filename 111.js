/**
 * Quantumult X 资源解析器 - 删除节点名内地区旗帜1
 * 使用说明：
 * 在订阅链接后添加 #=0 即可实现删除节点名内地区旗帜的功能。
 */

// 解析输入的资源链接
let link0 = $resource.link; // 获取链接
let content0 = $resource.content; // 获取内容

// 检查参数是否为 #=0，用于标记需要删除地区旗帜
let param = link0.includes('#=0'); // 简化判断方式

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
                let modifiedTag = tagContent.replace(/(?:[\u2B50\u2194\u2705\u2600-\u26FF\u2300-\u23FF\u1F300-\u1F5FF\u1F600-\u1F64F]|🇦🇫|🇦🇱|🇦🇷|🇦🇺|🇧🇪|🇨🇦|🇨🇳|🇩🇪|🇭🇰|🇯🇵|🇺🇸|🇬🇧)/g, "").trim();
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

// 返回解析后的内容
$done({ content: content0 });
