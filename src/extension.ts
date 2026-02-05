// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// Lista de comandos disponibles en NotSoBot TagScript
import * as commands from "./tags.json";

import { getSubTagName } from "./subtag";


const completionsArray: Record<string,string> = {};

for (const commandName in commands) {
  if (!Object.hasOwn(commands, commandName)) continue;
  const command: string[] = (commands as Record<string,string[]>)[commandName];
  const commandNameNew: string = commandName.split("_").map(s => s[0].toUpperCase() + s.slice(1).toLowerCase()).join(" ")
  for (const c of command) {
	(completionsArray as Record<string,string>)[c] = commandNameNew;
  }
}

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
	const subTag = getSubTagName(document.lineAt(position).text, position.character);
	console.log(subTag);
	return Object.entries(completionsArray).map(cmd => {
	  const item: vscode.CompletionItem = new vscode.CompletionItem(cmd[0], vscode.CompletionItemKind.Function);
	  item.insertText = cmd[0];
	  item.detail = cmd[1];
	  return item;
	});
  }
}
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
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
export function deactivate() {}
