import * as vscode from "vscode";

// Lista de comandos disponibles en NotSoBot TagScript
import * as commands from "./tags.json";



const completionsArray: Record<string,string> = {};

for (const commandName in commands) {
  if (!Object.hasOwn(commands, commandName)) continue;
  const command: string[] = (commands as Record<string,string[]>)[commandName];
  const commandNameNew: string = commandName.split("_").map(s => s[0].toUpperCase() + s.slice(1).toLowerCase()).join(" ")
  for (const c of command) {
    (completionsArray as Record<string,string>)[c] = commandNameNew;
  }
}

console.log(completionsArray);

class NSBCompletionItemProvider implements vscode.CompletionItemProvider {
  public provideCompletionItems(
    document: vscode.TextDocument, 
    position: vscode.Position, 
    token: vscode.CancellationToken, 
    context: vscode.CompletionContext): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
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
      const item: vscode.CompletionItem = new vscode.CompletionItem(cmd[0], vscode.CompletionItemKind.Function);
      item.insertText = cmd[0];
      item.detail = cmd[1];
      return item;
    });
  }
}

export function activate(context: vscode.ExtensionContext) {
  // Registrar el proveedor de completado
  const provider = new NSBCompletionItemProvider();
  const disposable = vscode.languages.registerCompletionItemProvider(
    'nsb',
    provider,
    '{'
  );

  context.subscriptions.push(disposable);
  console.log('NotSoBot TagScript completion provider activated');
}

export function deactivate() {}