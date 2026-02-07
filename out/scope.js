"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getScopeData = getScopeData;
function getScopeData(text, cursor) {
    function reverseString(str) {
        return str.split("").reverse().join("");
    }
    function findNextSymbol(text, cursor = 0) {
        return text.slice(cursor).search(/\|(?!\\)|\{(?!\\)|\}(?!\\)/) + cursor;
    }
    let depth = 0;
    let position = -1;
    let argumentIndex = 0;
    const reversedText = reverseString(text.slice(0, cursor));
    while (depth >= 0) {
        const nextSymbolIndex = findNextSymbol(reversedText, position + 1);
        if (nextSymbolIndex !== -1) {
            const nextSymbol = reversedText[nextSymbolIndex];
            switch (nextSymbol) {
                case "}":
                    depth++;
                    break;
                case "{":
                    depth--;
                    break;
                case "|":
                    if (depth === 0) {
                        argumentIndex++;
                    }
                    break;
            }
        }
        else {
            return {
                "subTagName": "",
                "isJsonProperty": false,
                "argumentIndex": 0
            };
        }
        position = nextSymbolIndex;
    }
    const splitterFunctionPosition = reversedText.lastIndexOf(":", position);
    let subTagName = reverseString(reversedText.slice(splitterFunctionPosition, position).slice(1)).trim();
    let isJsonProperty = false;
    if (subTagName.startsWith('"') && subTagName.endsWith('"')) {
        isJsonProperty = true;
        subTagName = subTagName.slice(1, -1);
    }
    return {
        subTagName, isJsonProperty, argumentIndex
    };
}
// console.log(getScopeData(text,position));
//# sourceMappingURL=scope.js.map