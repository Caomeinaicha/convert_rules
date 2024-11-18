
/**
 * Quantumult X 资源解析器 - 删除节点名内地区旗帜
 * 使用说明：
 * 在订阅链接后添加 #=0 即可实现删除节点名内地区旗帜的功能。
 */

// 解析输入的资源链接
let [link0, content0] = [$resource.link, $resource.content];

// 检查参数是否为 #=0，用于标记需要删除地区旗帜
let param = /#=0/.test(link0) ? true : false;

// 删除节点名中的地区旗帜的函数
function removeFlags(content) {
    return content
        .split("\n")
        .map((line) => {
            // 匹配并删除节点名中的地区旗帜，例如 "🇭🇰 香港节点" -> "香港节点"
            if (/tag=/.test(line)) {
                let tagIndex = line.indexOf("tag=");
                let tagContent = line.slice(tagIndex + 4); // 获取节点名部分
                let modifiedTag = tagContent.replace(/🇦🇫|🇦🇱|🇦🇷|🇦🇺|🇧🇪|🇨🇦|🇨🇳|🇩🇪|🇭🇰|🇯🇵|🇺🇸|🇬🇧/g, "").trim(); // 删除常见旗帜
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
