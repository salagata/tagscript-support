const vscode = require('vscode');

// Lista de comandos disponibles en NotSoBot TagScript
const commands = require("./tags.json");
const completionsArray = {};
for (const commandName in commands) {
  if (!Object.hasOwn(commands, commandName)) continue;
  const command = commands[commandName];
  const commandNameNew = commandName.split("_").map(s => s[0].toUpperCase() + s.slice(1).toLowerCase()).join(" ")
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

  resolveCompletionItem(item, token) {
    return item;
  }
}

function activate(context) {
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

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
