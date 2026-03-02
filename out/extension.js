"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = __importStar(require("vscode"));
// Lista de comandos disponibles en NotSoBot TagScript
const tags_1 = require("./const/tags");
const scope_1 = require("./scope");
const parse_1 = require("./parse");
class NSBTagCompletionItemProvider {
    provideCompletionItems(document, position, token, context) {
        // // Obtener la línea actual
        // const linePrefix = document.lineAt(position).text.substring(0, position.character);
        // // Verificar si estamos dentro de un tag {
        // const tagMatch = linePrefix.match(/\{([^}"]*)$/);
        // if (!tagMatch) {
        //   return undefined;
        // }
        // const typed = tagMatch[1];
        // Crear CompletionItems
        return Object.entries(tags_1.StringToTagFunction).map(cmd => {
            const item = new vscode.CompletionItem(cmd[0], vscode.CompletionItemKind.Function);
            item.insertText = cmd[0];
            item.detail = cmd[1];
            return item;
        });
    }
}
class NSBCompletionItemProvider {
    provideCompletionItems(document, position, token, context) {
        const textBefore = document.getText(new vscode.Range(new vscode.Position(0, 0), position.translate(0, 1)));
        const cursor = document.offsetAt(position);
        const scopeData = (0, scope_1.getScopeData)(textBefore, cursor);
        const subTagCommand = tags_1.StringToTagFunction[scopeData.subTagName].toUpperCase();
        switch (subTagCommand) {
            case tags_1.TagFunctions.LOGICAL_IF:
                if (scopeData.argumentIndex > 2) {
                    const thenScope = new vscode.CompletionItem("then", vscode.CompletionItemKind.Function);
                    thenScope.insertText = "then:";
                    const elseScope = new vscode.CompletionItem("else", vscode.CompletionItemKind.Function);
                    elseScope.insertText = "else:";
                    const finallyScope = new vscode.CompletionItem("finally", vscode.CompletionItemKind.Function);
                    finallyScope.insertText = "finally:";
                    return [
                        thenScope, elseScope, finallyScope
                    ];
                }
                else if (scopeData.argumentIndex === 1) {
                    return Object.entries(tags_1.TagIfComparisons).map(cmd => {
                        const item = new vscode.CompletionItem(cmd[1], vscode.CompletionItemKind.Operator);
                        item.insertText = cmd[1];
                        item.detail = cmd[0];
                        return item;
                    });
                }
                else {
                    break;
                }
            case tags_1.TagFunctions.TYPE:
                if (scopeData.argumentIndex === 0) {
                    const numberScope = new vscode.CompletionItem("number", vscode.CompletionItemKind.Function);
                    numberScope.insertText = "number|";
                    numberScope.detail = "Integer Number";
                    const floatScope = new vscode.CompletionItem("float", vscode.CompletionItemKind.Function);
                    floatScope.insertText = "float|";
                    floatScope.detail = "Float Number";
                    return [
                        numberScope, floatScope
                    ];
                }
            case tags_1.TagFunctions.STRING_REPLACE:
                if (scopeData.argumentIndex > 0) {
                    const withScope = new vscode.CompletionItem("with", vscode.CompletionItemKind.Function);
                    withScope.insertText = "with:";
                    const inScope = new vscode.CompletionItem("in", vscode.CompletionItemKind.Function);
                    inScope.insertText = "in:";
                    return [
                        withScope, inScope
                    ];
                }
            case tags_1.TagFunctions.STRING_MARKUP_TIME:
                if (scopeData.argumentIndex > 0) {
                    return ["BOTH_LONG", "BOTH_SHORT", "DATE_LONG", "DATE_SHORT", "RELATIVE", "TIME_LONG", "TIME_SHORT"].map(cmd => {
                        const item = new vscode.CompletionItem(cmd, vscode.CompletionItemKind.Function);
                        item.insertText = cmd;
                        return item;
                    });
                }
            case tags_1.TagFunctions.LOGICAL_GET:
                const wholeCode = document.getText();
                const variables = (0, parse_1.scanForVariables)(wholeCode).variables;
                return variables.map(cmd => {
                    const item = cmd.startsWith("__")
                        ? new vscode.CompletionItem(cmd, vscode.CompletionItemKind.Constant)
                        : new vscode.CompletionItem(cmd, vscode.CompletionItemKind.Variable);
                    item.insertText = cmd;
                    item.detail = cmd.startsWith("__")
                        ? "(private) set " + cmd
                        : "set " + cmd;
                    return item;
                });
            default:
                break;
        }
        // const subTag = getSubTagName(document.lineAtosition).text, position.character);
        // vscode.window.showInformationMessage("You are on: "+subTag);
        // vscode.window.showInformationMessage();
        return [];
    }
}
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    // Registrar el proveedor de completado
    const provider = new NSBTagCompletionItemProvider();
    const disposable = vscode.languages.registerCompletionItemProvider('nsb', provider, '{');
    context.subscriptions.push(disposable);
    console.log('NotSoBot TagScript Tag completion provider activated');
    // Registrar el otro proveedor de completado
    const provider2 = new NSBCompletionItemProvider();
    const disposable2 = vscode.languages.registerCompletionItemProvider('nsb', provider2, ':', '|');
    context.subscriptions.push(disposable2);
    console.log('NotSoBot TagScript completion provider activated');
    // // Use the console to output diagnostic information (console.log) and errors (console.error)
    // // This line of code will only be executed once when your extension is activated
    // console.log('Congratulations, your extension "notsobot-tagscript" is now active!');
    // // The command has been defined in the package.json file
    // // Now provide the implementation of the command with registerCommand
    // // The commandId parameter must match the command field in package.json
    // const disposable = vscode.commands.registerCommand('notsobot-tagscript.helloWorld', () => {
    // 	// The code you place here will be executed every time your command is executed
    // 	// Display a message box to the user
    // 	vscode.window.showInformationMessage('Hello World from notsobot-tagscript!');
    // });
    // context.subscriptions.push(disposable);
}
// This method is called when your extension is deactivated
function deactivate() { }
//# sourceMappingURL=extension.js.map