var content0 = $resource.content;
var para = decodeURIComponent($resource.link);
var Pemoji = para.indexOf("emoji=") != -1 ? para.split("#")[1].split("emoji=")[1].split("&")[0].split("+") : null;

if (Pemoji) {
    $notify("🏳️‍🌈 开始更改节点标签 Emoji", "清除 Emoji 请用参数 -1, 添加或修改 Emoji 请用参数 emoji=<值>", "当前使用的参数为 emoji=" + Pemoji);
    content0 = emoji_handle(content0.split("\n"), Pemoji).join("\n");
}

$done({ content: content0 });

// 处理 Emoji 的函数
function emoji_handle(lines, emojiList) {
    if (!emojiList || emojiList.length === 0) return lines;
    let updated = lines.map(line => {
        if (line.trim() !== "" && line.indexOf("tag=") !== -1) {
            let parts = line.split(",");
            let tagIndex = parts.findIndex(part => part.trim().startsWith("tag="));
            if (tagIndex !== -1) {
                let tagValue = parts[tagIndex].split("=")[1].trim();
                let newTag = emojiList[0] === "-1" ? tagValue.replace(/[\uD83C-\uDBFF\uDC00-\uDFFF]+/g, "") : emojiList.join("") + " " + tagValue;
                parts[tagIndex] = "tag=" + newTag.trim();
            }
            return parts.join(", ");
        }
        return line;
    });
    return updated;
}
