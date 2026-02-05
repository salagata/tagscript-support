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
const vscode = __importStar(require("vscode"));
// Lista de comandos disponibles en NotSoBot TagScript
const commands = __importStar(require("./tags.json"));
const completionsArray = {};
for (const commandName in commands) {
    if (!Object.hasOwn(commands, commandName))
        continue;
    const command = commands[commandName];
    const commandNameNew = commandName.split("_").map(s => s[0].toUpperCase() + s.slice(1).toLowerCase()).join(" ");
    for (const c of command) {
        completionsArray[c] = commandNameNew;
    }
}
console.log(completionsArray);
class NSBCompletionItemProvider {
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
        return Object.entries(completionsArray).map(cmd => {
            const item = new vscode.CompletionItem(cmd[0], vscode.CompletionItemKind.Function);
            item.insertText = cmd[0];
            item.detail = cmd[1];
            return item;
        });
    }
}
function activate(context) {
    // Registrar el proveedor de completado
    const provider = new NSBCompletionItemProvider();
    const disposable = vscode.languages.registerCompletionItemProvider('nsb', provider, '{');
    context.subscriptions.push(disposable);
    console.log('NotSoBot TagScript completion provider activated');
}
function deactivate() { }
//# sourceMappingURL=extension.js.map