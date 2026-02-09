"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getScopeData = getScopeData;
const tags_1 = require("./const/tags");
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
                case tags_1.TagSymbols.BRACKET_RIGHT:
                    depth++;
                    break;
                case tags_1.TagSymbols.BRACKET_LEFT:
                    depth--;
                    break;
                case tags_1.TagSymbols.SPLITTER_ARGUMENT:
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
    const splitterFunctionPosition = reversedText.lastIndexOf(tags_1.TagSymbols.SPLITTER_FUNCTION, position);
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