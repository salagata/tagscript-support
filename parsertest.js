const entry = "{command:  something| sscope }"
const cursor = 24;

function getTagName(entry,cursor) {
    const until = entry.slice(0,cursor).split("").reverse().join("");
    const bracket = until;
    return bracket 
}


console.log(getTagName(entry,cursor));