// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// Lista de comandos disponibles en NotSoBot TagScript
import { TagFunctions, TagFunctionsToString, StringToTagFunction, TagIfComparisons } from './const/tags';
import { getScopeData } from "./scope";
import { scanForVariables } from './parse';

class NSBTagCompletionItemProvider implements vscode.CompletionItemProvider {
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
	return Object.entries(StringToTagFunction).map(cmd => {
	  const item: vscode.CompletionItem = new vscode.CompletionItem(cmd[0], vscode.CompletionItemKind.Function);
	  item.insertText = cmd[0];
	  item.detail = cmd[1];
	  return item;
	});
  }
}

class NSBCompletionItemProvider implements vscode.CompletionItemProvider {
	public provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList<vscode.CompletionItem>> {

		const textBefore = document.getText(new vscode.Range(new vscode.Position(0,0), position.translate(0,1)));
		const cursor = document.offsetAt(position);
		
		
		const scopeData = getScopeData(textBefore, cursor);
		const subTagCommand: string = (StringToTagFunction as any)[scopeData.subTagName].toUpperCase();
		
		switch (subTagCommand) {
			case TagFunctions.LOGICAL_IF:
				if(scopeData.argumentIndex > 2) {
					const thenScope = new vscode.CompletionItem("then", vscode.CompletionItemKind.Function);	
					thenScope.insertText = "then:";
					const elseScope = new vscode.CompletionItem("else", vscode.CompletionItemKind.Function);	
					elseScope.insertText = "else:";
					const finallyScope = new vscode.CompletionItem("finally", vscode.CompletionItemKind.Function);	
					finallyScope.insertText = "finally:";
					return [
						thenScope,elseScope,finallyScope
					];
				} else if(scopeData.argumentIndex === 1) {
					return Object.entries(TagIfComparisons).map(cmd => {
						const item: vscode.CompletionItem = new vscode.CompletionItem(cmd[1], vscode.CompletionItemKind.Operator);
						item.insertText = cmd[1];
						item.detail = cmd[0];
						return item;
					});
				} else {
					break;
				}
			case TagFunctions.TYPE:
				if(scopeData.argumentIndex === 0) {
					const numberScope = new vscode.CompletionItem("number", vscode.CompletionItemKind.Function);	
					numberScope.insertText = "number|";
					numberScope.detail = "Integer Number";
					const floatScope = new vscode.CompletionItem("float", vscode.CompletionItemKind.Function);	
					floatScope.insertText = "float|";
					floatScope.detail = "Float Number";
					return [
						numberScope,floatScope
					];
				} 
			case TagFunctions.STRING_REPLACE:
				if(scopeData.argumentIndex > 0) {
					const withScope = new vscode.CompletionItem("with", vscode.CompletionItemKind.Function);	
					withScope.insertText = "with:";
					const inScope = new vscode.CompletionItem("in", vscode.CompletionItemKind.Function);	
					inScope.insertText = "in:";
					return [
						withScope,inScope
					];
				} 
			case TagFunctions.STRING_MARKUP_TIME:
				if(scopeData.argumentIndex > 0) {
					return ["BOTH_LONG","BOTH_SHORT","DATE_LONG","DATE_SHORT","RELATIVE","TIME_LONG","TIME_SHORT"].map(cmd => {
						const item: vscode.CompletionItem = new vscode.CompletionItem(cmd, vscode.CompletionItemKind.Function);
						item.insertText = cmd;
						return item;
					});
				} 
			case TagFunctions.LOGICAL_GET:
				const wholeCode = document.getText();
				const variables = scanForVariables(wholeCode).variables;
				return variables.map(cmd => {
					const item = cmd.startsWith("__")
						? new vscode.CompletionItem(cmd,vscode.CompletionItemKind.Constant)
						: new vscode.CompletionItem(cmd,vscode.CompletionItemKind.Variable);
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
export function activate(context: vscode.ExtensionContext) {

	// Registrar el proveedor de completado
	const provider = new NSBTagCompletionItemProvider();
	const disposable = vscode.languages.registerCompletionItemProvider(
		'nsb',
		provider,
		'{'
	);

	context.subscriptions.push(disposable);
	console.log('NotSoBot TagScript Tag completion provider activated');

	
	// Registrar el otro proveedor de completado
	const provider2 = new NSBCompletionItemProvider();
	const disposable2 = vscode.languages.registerCompletionItemProvider(
		'nsb',
		provider2,
		':','|'
	);

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
export function deactivate() {}
