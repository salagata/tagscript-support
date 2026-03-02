"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REGEX_ARGUMENT_SPLITTER_ESCAPE_REPLACEMENT = exports.REGEX_ARGUMENT_SPLITTER = void 0;
exports.removeComments = removeComments;
exports.scanForVariables = scanForVariables;
const tags_1 = require("./const/tags");
exports.REGEX_ARGUMENT_SPLITTER = new RegExp(`(?<!\\\\)[${tags_1.TagSymbols.SPLITTER_ARGUMENT}]`, 'g');
exports.REGEX_ARGUMENT_SPLITTER_ESCAPE_REPLACEMENT = new RegExp(`\\\\\\${tags_1.TagSymbols.SPLITTER_ARGUMENT}`, 'g');
function split(value, amount = 0) {
    if (!value.includes(tags_1.TagSymbols.SPLITTER_ARGUMENT)) {
        return [value];
    }
    let depth = 0;
    let position = 0;
    let text = '';
    const args = [];
    while (position < value.length) {
        if (amount && amount <= args.length) {
            if (args.length) {
                args[args.length - 1] += value.slice(position - 1);
            }
            break;
        }
        if (depth === 0 && !text) {
            // find next left bracket
            const nextLeftBracket = value.indexOf(tags_1.TagSymbols.BRACKET_LEFT, position);
            if (nextLeftBracket === -1) {
                // no script tags found inside, so we have no splitters to ignore
                for (let x of value.slice(position).split(exports.REGEX_ARGUMENT_SPLITTER)) {
                    x = x.replace(exports.REGEX_ARGUMENT_SPLITTER_ESCAPE_REPLACEMENT, tags_1.TagSymbols.SPLITTER_ARGUMENT);
                    args.push(x);
                }
                position = value.length;
                continue;
            }
        }
        let result = value.slice(position, ++position);
        text += result;
        switch (result) {
            case tags_1.TagSymbols.SPLITTER_ARGUMENT:
                {
                    if (depth <= 0) {
                        // use the arg, we arent in the function anymore
                        args.push(text.slice(0, -1));
                        text = '';
                    }
                }
                ;
                break;
            case tags_1.TagSymbols.IGNORE:
                {
                    const nextValue = value.slice(position, position + 1);
                    if (nextValue === tags_1.TagSymbols.BRACKET_LEFT) {
                        depth--;
                    }
                    else if (nextValue === tags_1.TagSymbols.BRACKET_RIGHT) {
                        depth++;
                    }
                    else if (nextValue === tags_1.TagSymbols.SPLITTER_ARGUMENT) {
                        position++;
                    }
                }
                ;
                break;
            case tags_1.TagSymbols.BRACKET_LEFT:
                {
                    // start of the script
                    depth++;
                }
                ;
                break;
            case tags_1.TagSymbols.BRACKET_RIGHT:
                {
                    // end of the script
                    depth--;
                }
                ;
                break;
        }
    }
    if (text) {
        args.push(text);
    }
    return args;
}
function parseInnerScript(value, shouldTrim = true) {
    let scriptName;
    let arg;
    // remove the brackets from both sides of the value
    value = value.slice(1, value.length - 1);
    if (shouldTrim) {
        value = value.trim();
    }
    const firstSplitter = value.indexOf(tags_1.TagSymbols.SPLITTER_FUNCTION);
    if (firstSplitter === -1) {
        scriptName = value;
        arg = '';
    }
    else {
        scriptName = value.slice(0, firstSplitter);
        arg = value.slice(firstSplitter + 1);
    }
    return [scriptName.toLowerCase(), arg];
}
function removeComments(value, shouldTrim = true) {
    let isFirstParse = true;
    const tag = { text: "" };
    let depth = 0;
    let scriptBuffer = '';
    let position = 0;
    while (position < value.length) {
        if (depth === 0) {
            // find next left bracket
            const nextLeftBracket = value.indexOf(tags_1.TagSymbols.BRACKET_LEFT, position);
            if (nextLeftBracket === -1) {
                tag.text += value.slice(position);
                position = value.length;
                continue;
            }
            tag.text += value.slice(position, nextLeftBracket);
            position = nextLeftBracket;
        }
        // add network checks
        let result = value.slice(position, ++position);
        scriptBuffer += result;
        switch (result) {
            case tags_1.TagSymbols.IGNORE:
                {
                    const nextValue = value.slice(position, position + 1);
                    if (nextValue === tags_1.TagSymbols.BRACKET_LEFT) {
                        depth--;
                    }
                    else if (nextValue === tags_1.TagSymbols.BRACKET_RIGHT) {
                        depth++;
                    }
                }
                ;
                break;
            case tags_1.TagSymbols.BRACKET_LEFT:
                {
                    // start of the script
                    depth++;
                }
                ;
                break;
            case tags_1.TagSymbols.BRACKET_RIGHT:
                {
                    // end of the script
                    depth--;
                    if (depth <= 0) {
                        let [scriptName, arg] = parseInnerScript(scriptBuffer, shouldTrim);
                        if (tags_1.TagFunctionsToString.NOTE.includes(scriptName)) {
                            // do nothing
                        }
                        else {
                            tag.text += arg;
                        }
                        scriptBuffer = '';
                    }
                }
                ;
                break;
        }
    }
    tag.text = (tag.text + scriptBuffer);
    return tag;
}
function scanForVariables(value, shouldTrim = true) {
    let isFirstParse = true;
    const tag = { text: "", variables: [
            "__iterationsRemaining", "__argsString", "__args", "__aiExecutions", "__apiManipulation", "__componentExecutions",
            "__fileSize", "__isFromChildParsing", "__networkRequest", "__networkRequestsML", "__networkRequestOpenAI",
            "__parentTagId", "__results", "__settings", "__tagExecutions"
        ] };
    let depth = 0;
    let scriptBuffer = '';
    let position = 0;
    while (position < value.length) {
        if (depth === 0) {
            // find next left bracket
            const nextLeftBracket = value.indexOf(tags_1.TagSymbols.BRACKET_LEFT, position);
            if (nextLeftBracket === -1) {
                tag.text += value.slice(position);
                position = value.length;
                continue;
            }
            tag.text += value.slice(position, nextLeftBracket);
            position = nextLeftBracket;
        }
        // add network checks
        let result = value.slice(position, ++position);
        scriptBuffer += result;
        switch (result) {
            case tags_1.TagSymbols.IGNORE:
                {
                    const nextValue = value.slice(position, position + 1);
                    if (nextValue === tags_1.TagSymbols.BRACKET_LEFT) {
                        depth--;
                    }
                    else if (nextValue === tags_1.TagSymbols.BRACKET_RIGHT) {
                        depth++;
                    }
                }
                ;
                break;
            case tags_1.TagSymbols.BRACKET_LEFT:
                {
                    // start of the script
                    depth++;
                }
                ;
                break;
            case tags_1.TagSymbols.BRACKET_RIGHT:
                {
                    // end of the script
                    depth--;
                    if (depth <= 0) {
                        let [scriptName, arg] = parseInnerScript(scriptBuffer, shouldTrim);
                        if (tags_1.TagFunctionsToString.NOTE.includes(scriptName)) {
                            // do nothing
                        }
                        else if (tags_1.TagFunctionsToString.LOGICAL_SET.includes(scriptName)) {
                            let [key, value] = split(arg, 2);
                            tag.variables.push(key);
                        }
                        else {
                            tag.text += arg;
                        }
                        scriptBuffer = '';
                    }
                }
                ;
                break;
        }
    }
    tag.text = (tag.text + scriptBuffer);
    return tag;
}
console.log(JSON.stringify(scanForVariables("{note: a comment} {set:a|1} {set:b|2} more")));
// function findNextSymbol(text: string, cursor: number = 0): number {
//     return text.slice(cursor).search(/(?!\\)\||(?!\\)\{|(?!\\)\}/) + cursor;
// }
// let depth = 0;
// let position = -1;
// let argumentIndex = 0;
// let inComment = false;
// let inCommentDepth = 0;
// while(position < text.length) {
//     if(depth === 0) {
//         const nextSymbolIndex = text.indexOf(TagSymbols.BRACKET_LEFT, position + 1);
//         if(nextSymbolIndex !== -1) {
//             const nextSymbol = text[nextSymbolIndex];
//             switch (nextSymbol) {
//                 case TagSymbols.BRACKET_RIGHT:
//                     depth--;
//                     if(inComment) {
//                         inCommentDepth--;
//                     }
//                     if(inCommentDepth < 0) {
//                         inComment = false;
//                     }
//                     break;
//                 case TagSymbols.BRACKET_LEFT:
//                     depth++;
//                     if(inComment) {
//                         inCommentDepth++;
//                     }
//                     if(depth <= 0) {
//                         const nextBracket = text.indexOf(TagSymbols.SPLITTER_FUNCTION, position);
//                         const scriptName = text.slice(position,nextBracket);
//                         if(scriptName === "note") {
//                             inComment = true;
//                         } else if(scriptName === "set") {}
//                     }
//                     break;
//                 case TagSymbols.SPLITTER_ARGUMENT:
//                     if(depth === 0) {
//                         argumentIndex++;
//                     }
//                     break;
//             }
//         } 
//     }
// }
// function scanForVariables(text: string): string[] {
//     const regex = /\{\s*set\s*:((?:\\\||[^|])*)/gi;  // Just looking for the {set:var|
//     // TODO: Ignore the {get} inside comments,
//     // Reset `lastIndex` if this regex is defined globally
//     // regex.lastIndex = 0;
//     let matches;
//     let variables: string[] = [];
//     while ((matches = regex.exec(text)) !== null) {
//         // This is necessary to avoid infinite loops with zero-width matches
//         if (matches.index === regex.lastIndex) {
//             regex.lastIndex++;
//         }
//         // The result can be accessed through the `m`-variable.
//         matches.forEach((match, groupIndex) => {
//             if(groupIndex === 1) {
//                 variables.push(match);
//             }
//         });
//     }
//     return variables;
// }
// scanForVariables(`{set:lib.util|1}
// {set:lib.\|baaren|1}
// {set:lib.set()|1}
// {set:lib2.elCargoso()|1}`);
//# sourceMappingURL=parse.js.map