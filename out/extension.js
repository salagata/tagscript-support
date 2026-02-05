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
const commands = {
    "IGNORE": ["ignore"],
    "NOTE": ["note"],
    "AI": ["ai"],
    "API_CREATE_REMINDER": ["api.create.reminder"],
    "API_SEARCH_DUCKDUCKGO_IMAGES": ["api.search.duckduckgo.images"],
    "API_SEARCH_IMGUR": ["api.search.imgur"],
    "API_UTILITIES_LOCATIONS": ["api.utilities.locations"],
    "API_UTILITIES_WEATHER": ["api.utilities.weather"],
    "ARG": ["arg"],
    "ARG_SAFE": ["argsafe"],
    "ARGS": ["args"],
    "ARGS_LEN": ["argslen"],
    "ARGS_SAFE": ["argssafe"],
    "ATTACHMENT": ["attachment", "attach", "file"],
    "ATTACHMENT_LAST": [
        "last_attachment",
        "lastattachment",
        "lattachment",
        "lattach"
    ],
    "ATTACHMENT_SPOILER": ["attachmentspoiler", "attachspoiler", "filespoiler"],
    "ATTACHMENT_TEXT": ["attachmenttext", "attachtext", "filetext"],
    "ATTACHMENT_VOICE": ["attachmentvoice", "attachvoice", "filevoice"],
    "AVATAR": ["avatar"],
    "CHANNEL": ["channel"],
    "CHANNEL_ID": ["channelid"],
    "CHANNEL_MENTION": ["channelmention"],
    "CHANNEL_RANDOM": ["randchannel"],
    "CHANNEL_RANDOM_ID": ["randchannelid"],
    "CHANNEL_RANDOM_MENTION": ["randchannelmention"],
    "COMPONENT_JSON": ["componentjson"],
    "COMPONENTS_ON_TIMEOUT": ["componentsontimeout"],
    "DISCORD": ["discord"],
    "EMBED_JSON": ["embedjson"],
    "EVAL": ["eval"],
    "EVAL_SILENT": ["evalsilent"],
    "EXIT": ["exit"],
    "EXIT_SILENT": ["exitsilent"],
    "GUILD": ["guild", "server"],
    "GUILD_COUNT": ["guildcount", "membercount", "servercount"],
    "GUILD_ID": ["guildid", "serverid", "sid", "gid"],
    "HASTEBIN": ["hastebin", "haste"],
    "IMAGE_INTERROGATE": ["identify", "interrogate"],
    "IMAGE_OCR": ["ocr"],
    "INSERT_BRACKET_LEFT": ["bracketleft"],
    "INSERT_BRACKET_RIGHT": ["bracketright"],
    "INSERT_NEWLINE": ["newline"],
    "INSERT_SPLITTER_ARGUMENT": ["splitterargument"],
    "INSERT_SPLITTER_FUNCTION": ["splitterfunction"],
    "JSON_CHANNEL": ["json.channel", "channeljson"],
    "JSON_GUILD": ["json.guild"],
    "JSON_MEMBER": ["json.member"],
    "JSON_MEMBER_OR_USER": ["json.memberoruser"],
    "JSON_MESSAGE": ["json.message"],
    "JSON_MESSAGE_REPLY": ["json.messagereply"],
    "JSON_USER": ["json.user", "userjson"],
    "LOGICAL_AND": ["and"],
    "LOGICAL_DELETE": ["delete"],
    "LOGICAL_DELETE_CHANNEL": ["deletechannel"],
    "LOGICAL_DELETE_SERVER": ["deleteserver"],
    "LOGICAL_DELETE_USER": ["deleteuser"],
    "LOGICAL_FOR_EACH": ["foreach"],
    "LOGICAL_GET": ["get"],
    "LOGICAL_GET_CHANNEL": ["getchannel"],
    "LOGICAL_GET_GLOBAL": ["getglobal"],
    "LOGICAL_GET_SERVER": ["getserver"],
    "LOGICAL_GET_USER": ["getuser"],
    "LOGICAL_IF": ["if"],
    "LOGICAL_IF_ERROR": ["iferror"],
    "LOGICAL_IS_FROM_AI": ["isfromai"],
    "LOGICAL_IS_FROM_COMPONENT": ["isfromcomponent"],
    "LOGICAL_IS_MAIN_TAG": ["ismaintag"],
    "LOGICAL_OR": ["or"],
    "LOGICAL_SET": ["set"],
    "LOGICAL_SET_CHANNEL": ["setchannel"],
    "LOGICAL_SET_GLOBAL": ["setglobal"],
    "LOGICAL_SET_SERVER": ["setserver"],
    "LOGICAL_SET_USER": ["setuser"],
    "MATH": ["math"],
    "MATH_ABS": ["abs"],
    "MATH_COS": ["cos"],
    "MATH_E": ["e"],
    "MATH_MAX": ["max"],
    "MATH_MIN": ["min"],
    "MATH_PI": ["pi"],
    "MATH_SIN": ["sin"],
    "MATH_TAN": ["tan"],
    "MEDIA": ["media"],
    "MEDIA_AUDIO": ["audio"],
    "MEDIA_AUDIO_OR_VIDEO": ["av"],
    "MEDIA_IMAGE": ["image"],
    "MEDIA_IMAGE_EDIT": ["edit"],
    "MEDIA_IMAGE_EDIT_URL": ["editurl"],
    "MEDIA_IMAGE_IMAGINE": ["imagine"],
    "MEDIA_IMAGE_IMAGINE_URL": ["imagineurl"],
    "MEDIA_IMAGE_OR_VIDEO": ["iv"],
    "MEDIASCRIPT": ["mediascript", "mscript", "imagescript", "iscript"],
    "MEDIASCRIPT_MAYBE_URL": [
        "mediascriptmaybeurl",
        "mscriptmaybeurl",
        "imagescriptmaybeurl",
        "iscriptmaybeurl"
    ],
    "MEDIASCRIPT_URL": [
        "mediascripturl",
        "mscripturl",
        "imagescripturl",
        "iscripturl"
    ],
    "MEDIA_VIDEO": ["video"],
    "MESSAGE_CONTENT": ["messagecontent"],
    "MESSAGE_LAST_ID": ["messagelastid"],
    "MESSAGE_RANDOM_ID": ["randmessageid"],
    "MESSAGE_USER_ID": ["messageuserid"],
    "NSFW": ["nsfw"],
    "NSFW_FILTER": ["nsfwfilter"],
    "PAGE_JSON": ["pagejson"],
    "PREFIX": ["prefix"],
    "REPLY_CONTENT": ["replycontent"],
    "REPLY_USER_ID": ["replyuserid"],
    "REQUEST": ["request"],
    "RNG_CHOOSE": ["choose"],
    "RNG_RANGE": ["range", "random", "rnd"],
    "SEARCH_DUCKDUCKGO_IMAGES": [
        "search.duckduckgo.images",
        "search.ddg.images",
        "s.duckduckgo.images",
        "s.ddg.images"
    ],
    "SEARCH_GOOGLE_IMAGES": [
        "search.google.images",
        "search.g.images",
        "s.google.images",
        "s.g.images"
    ],
    "SEARCH_YOUTUBE": ["search.youtube", "search.yt", "s.youtube", "s.yt"],
    "SETTINGS": ["settings"],
    "STRING_INDEX_OF": ["indexof"],
    "STRING_JSONIFY": ["jsonify"],
    "STRING_LENGTH": ["len", "length"],
    "STRING_LOWER": ["lower"],
    "STRING_MARKUP_BOLD": ["markupbold"],
    "STRING_MARKUP_CODEBLOCK": ["code", "markupcodeblock"],
    "STRING_MARKUP_CODESTRING": ["markupcodestring"],
    "STRING_MARKUP_ESCAPE": ["markupescape"],
    "STRING_MARKUP_HEADER_BIG": ["markupheaderbig"],
    "STRING_MARKUP_HEADER_MEDIUM": ["markupheadermedium"],
    "STRING_MARKUP_HEADER_SMALL": ["markupheadersmall"],
    "STRING_MARKUP_ITALICS": ["markupitalics"],
    "STRING_MARKUP_LIST_DOTTED": ["markuplistdotted"],
    "STRING_MARKUP_LIST_NUMBERED": ["markuplistnumbered"],
    "STRING_MARKUP_QUOTE": ["markupquote"],
    "STRING_MARKUP_SPOILER": ["markupspoiler"],
    "STRING_MARKUP_STRIKE": ["markupstrike"],
    "STRING_MARKUP_SUBTEXT": ["markupsubtext"],
    "STRING_MARKUP_TIME": ["markuptime"],
    "STRING_MARKUP_UNDERLINE": ["markupunderline"],
    "STRING_MARKUP_URL": ["markupurl"],
    "STRING_ONE_OF": ["oneof"],
    "STRING_REPEAT": ["repeat"],
    "STRING_REPLACE": ["replace", "replaceregex"],
    "STRING_REVERSE": ["reverse"],
    "STRING_SUB": ["substring"],
    "STRING_TRANSLATE": ["translate"],
    "STRING_UPPER": ["upper"],
    "STRING_URL_ENCODE": ["url", "urlencode"],
    "TAG": ["tag"],
    "TAG_ID": ["tagid"],
    "TAG_NAME": ["tagname"],
    "TAG_OWNER_ID": ["tagownerid"],
    "TEXT": ["download", "text"],
    "TEXT_FROM_HTML": ["downloadfromhtml", "textfromhtml"],
    "TIME_UNIX": ["unix"],
    "TIME_UNIX_FROM_SNOWFLAKE": ["unixsnowflake"],
    "TIME_UNIX_SECONDS": ["unixs"],
    "TRANSCRIBE": ["transcribe"],
    "TRAVERSE_JSON": ["traversejson"],
    "TYPE": ["type"],
    "USER_AVATAR": ["useravatar"],
    "USER_DISCRIMINATOR": ["discrim"],
    "USER_ID": ["id", "userid"],
    "USER_MENTION": ["mention"],
    "USER_NAME": ["name", "user"],
    "USER_NICK": ["nick"],
    "USER_RANDOM": ["randuser"],
    "USER_RANDOM_ID": ["randuserid"],
    "USER_RANDOM_ONLINE": ["randonline"],
    "USER_RANDOM_ONLINE_ID": ["randonlineid"],
    "USER_RANDOM_ONLINE_TAG": ["randonlinetag"],
    "USER_RANDOM_TAG": ["randusertag"],
    "USER_TAG": ["usertag"],
    "VARIABLES": ["variables"],
    "VARIABLES_CHANNEL": ["variableschannel"],
    "VARIABLES_GLOBAL": ["variablesglobal"],
    "VARIABLES_SERVER": ["variablesserver"],
    "VARIABLES_USER": ["variablesuser"]
};
const subtag_1 = require("./subtag");
const completionsArray = {};
for (const commandName in commands) {
    if (!Object.hasOwn(commands, commandName)) {
        continue;
    }
    ;
    const command = commands[commandName];
    const commandNameNew = commandName.split("_").map(s => s[0].toUpperCase() + s.slice(1).toLowerCase()).join(" ");
    for (const c of command) {
        completionsArray[c] = commandNameNew;
    }
}
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
        return Object.entries(completionsArray).map(cmd => {
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
        const subTag = (0, subtag_1.getSubTagName)(textBefore, cursor);
        // const subTag = getSubTagName(document.lineAtosition).text, position.character);
        vscode.window.showInformationMessage("You are on: " + subTag);
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
    console.log('NotSoBot TagScript completion provider activated');
    // Registrar el otro proveedor de completado
    const provider2 = new NSBCompletionItemProvider();
    const disposable2 = vscode.languages.registerCompletionItemProvider('nsb', provider2, ':', '|');
    context.subscriptions.push(disposable2);
    console.log('NotSoBot TagScript Tag completion provider activated');
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