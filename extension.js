const vscode = require('vscode');

// Lista de comandos disponibles en NotSoBot TagScript
const commands = [
  'ai', 'edit', 'editurl', 'imagine', 'imagineurl', 'identify', 'ocr', 'transcribe', 'translate', 
  'nsfwfilter', 'api.create.reminder', 'api.utilities.locations', 'api.utilities.weather',
  'api.search.duckduckgo.images', 'api.search.imgur', 'search.duckduckgo.images', 
  'search.google.images', 'search.youtube', 'arg', 'argsafe', 'args', 'argslen', 
  'argssafe', 'attachment', 'last_attachment', 'attachmentspoiler', 'attachmenttext', 
  'attachmentvoice', 'discord', 'componentjson', 'componentsontimeout', 'embedjson', 
  'pagejson', 'download', 'downloadfromhtml', 'request', 'hastebin', 'ignore', 'note', 
  'eval', 'evalsilent', 'exit', 'mediascript', 'mediascriptmaybeurl', 'mediascripturl', 
  'guild', 'guildcount', 'guildid', 'prefix', 'avatar', 'useravatar', 'discrim', 'id', 
  'mention', 'name', 'nick', 'randuser', 'randuserid', 'randonline', 'randonlineid', 
  'randonlinetag', 'randusertag', 'usertag', 'channel', 'channelid', 'channelmention', 
  'randchannel', 'randchannelid', 'randchannelmention', 'messagecontent', 'messagelastid', 
  'randmessageid', 'messageuserid', 'replycontent', 'replyuserid', 'json.channel', 
  'json.guild', 'json.member', 'json.memberoruser', 'json.message', 'json.messagereply', 
  'json.user', 'and', 'or', 'delete', 'deletechannel', 'deleteserver', 'deleteuser', 'get', 
  'getchannel', 'getglobal', 'getserver', 'getuser', 'set', 'setchannel', 'setglobal', 
  'setserver', 'setuser', 'foreach', 'if', 'iferror', 'math', 'abs', 'cos', 'e', 'max', 'min', 
  'pi', 'sin', 'tan', 'media', 'audio', 'av', 'image', 'iv', 'video', 'nsfw', 'settings', 
  'choose', 'range', 'indexof', 'jsonify', 'len', 'lower', 'code', 'markuptime', 'newline', 
  'oneof', 'repeat', 'replace', 'reverse', 'substring', 'upper', 'url', 'traversejson', 'type', 
  'bracketleft', 'bracketright', 'splitterargument', 'splitterfunction', 'tag', 'tagid', 
  'tagname', 'tagownerid', 'ismaintag', 'isfromai', 'isfromcomponent', 'unix', 'unixsnowflake', 'unixs'
];

class NSBCompletionItemProvider {
  provideCompletionItems(document, position, token, context) {
    // Obtener la línea actual
    const linePrefix = document.lineAt(position).text.substring(0, position.character);
    
    // Verificar si estamos dentro de un tag {
    const tagMatch = linePrefix.match(/\{([^}]*)$/);
    if (!tagMatch) {
      return undefined;
    }

    const typed = tagMatch[1];
    
    // Filtrar comandos que coincidan con lo que se ha escrito
    const filtered = commands.filter(cmd => 
      cmd.toLowerCase().startsWith(typed.toLowerCase())
    );

    // Crear CompletionItems
    return filtered.map(cmd => {
      const item = new vscode.CompletionItem(cmd, vscode.CompletionItemKind.Function);
      item.insertText = cmd;
      item.detail = 'NotSoBot TagScript command';
      item.range = new vscode.Range(
        new vscode.Position(position.line, position.character - typed.length),
        position
      );
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
