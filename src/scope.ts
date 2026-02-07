export function getScopeData(text: string, cursor: number): { subTagName: string, isJsonProperty: boolean, argumentIndex: number} {
    function reverseString(str: string): string {
        return str.split("").reverse().join("");
    }

    function findNextSymbol(text: string, cursor: number = 0): number {
        return text.slice(cursor).search(/\|(?!\\)|\{(?!\\)|\}(?!\\)/) + cursor;
    }


    let depth = 0;
    let position = -1;
    let argumentIndex = 0;
    const reversedText = reverseString(text.slice(0,cursor));
    
    while(depth >= 0) {
        const nextSymbolIndex = findNextSymbol(reversedText, position + 1);
        if(nextSymbolIndex !== -1) {
            const nextSymbol = reversedText[nextSymbolIndex];
            switch (nextSymbol) {
                case "}":
                    depth++;
                    break;
            
                case "{":
                    depth--;
                    break;
                    
                case "|":
                    if(depth === 0) {
                        argumentIndex++;
                    }
                    break;
            }
        } else {
            return {
                "subTagName": "",
                "isJsonProperty": false,
                "argumentIndex": 0
            };
        }
        position = nextSymbolIndex;
        
    }
    const splitterFunctionPosition = reversedText.lastIndexOf(":",position);
    let subTagName = reverseString(reversedText.slice(splitterFunctionPosition,position).slice(1)).trim();
    let isJsonProperty = false;
    if(subTagName.startsWith('"') && subTagName.endsWith('"')) {
        isJsonProperty = true;
        subTagName = subTagName.slice(1,-1);
    }
    return {
        subTagName, isJsonProperty, argumentIndex
    };
}
// console.log(getScopeData(text,position));
