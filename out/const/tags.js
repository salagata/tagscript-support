"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringToTagFunction = exports.TagFunctionsToString = exports.TagFunctions = exports.TagIfComparisons = exports.TagSymbols = void 0;
exports.TagSymbols = Object.freeze({
    BRACKET_LEFT: '{',
    BRACKET_RIGHT: '}',
    IGNORE: '\\',
    SPLITTER_ARGUMENT: '|',
    SPLITTER_FUNCTION: ':',
});
var TagIfComparisons;
(function (TagIfComparisons) {
    TagIfComparisons["EQUAL"] = "=";
    TagIfComparisons["EQUAL_NOT"] = "!=";
    TagIfComparisons["GREATER_THAN"] = ">";
    TagIfComparisons["GREATER_THAN_OR_EQUAL"] = ">=";
    TagIfComparisons["LESS_THAN"] = "<";
    TagIfComparisons["LESS_THAN_OR_EQUAL"] = "<=";
    TagIfComparisons["TILDE"] = "~";
})(TagIfComparisons || (exports.TagIfComparisons = TagIfComparisons = {}));
var TagFunctions;
(function (TagFunctions) {
    TagFunctions["AI"] = "AI";
    TagFunctions["API_CREATE_REMINDER"] = "API_CREATE_REMINDER";
    TagFunctions["API_SEARCH_DUCKDUCKGO_IMAGES"] = "API_SEARCH_DUCKDUCKGO_IMAGES";
    TagFunctions["API_SEARCH_IMGUR"] = "API_SEARCH_IMGUR";
    TagFunctions["API_UTILITIES_LOCATIONS"] = "API_UTILITIES_LOCATIONS";
    TagFunctions["API_UTILITIES_WEATHER"] = "API_UTILITIES_WEATHER";
    TagFunctions["ARG"] = "ARG";
    TagFunctions["ARG_SAFE"] = "ARG_SAFE";
    TagFunctions["ARGS"] = "ARGS";
    TagFunctions["ARGS_LEN"] = "ARGS_LEN";
    TagFunctions["ARGS_SAFE"] = "ARGS_SAFE";
    TagFunctions["ATTACHMENT"] = "ATTACHMENT";
    TagFunctions["ATTACHMENT_LAST"] = "ATTACHMENT_LAST";
    TagFunctions["ATTACHMENT_SPOILER"] = "ATTACHMENT_SPOILER";
    TagFunctions["ATTACHMENT_TEXT"] = "ATTACHMENT_TEXT";
    TagFunctions["ATTACHMENT_VOICE"] = "ATTACHMENT_VOICE";
    TagFunctions["AVATAR"] = "AVATAR";
    TagFunctions["CHANNEL"] = "CHANNEL";
    TagFunctions["CHANNEL_ID"] = "CHANNEL_ID";
    TagFunctions["CHANNEL_MENTION"] = "CHANNEL_MENTION";
    TagFunctions["CHANNEL_RANDOM"] = "CHANNEL_RANDOM";
    TagFunctions["CHANNEL_RANDOM_ID"] = "CHANNEL_RANDOM_ID";
    TagFunctions["CHANNEL_RANDOM_MENTION"] = "CHANNEL_RANDOM_MENTION";
    TagFunctions["COMPONENT_JSON"] = "COMPONENT_JSON";
    TagFunctions["COMPONENTS_ON_TIMEOUT"] = "COMPONENTS_ON_TIMEOUT";
    TagFunctions["DISCORD"] = "DISCORD";
    TagFunctions["EMBED_JSON"] = "EMBED_JSON";
    TagFunctions["EVAL"] = "EVAL";
    TagFunctions["EVAL_SILENT"] = "EVAL_SILENT";
    TagFunctions["EXIT"] = "EXIT";
    TagFunctions["EXIT_SILENT"] = "EXIT_SILENT";
    TagFunctions["GUILD"] = "GUILD";
    TagFunctions["GUILD_COUNT"] = "GUILD_COUNT";
    TagFunctions["GUILD_ID"] = "GUILD_ID";
    TagFunctions["HASTEBIN"] = "HASTEBIN";
    TagFunctions["IMAGE_INTERROGATE"] = "IMAGE_INTERROGATE";
    TagFunctions["IMAGE_OCR"] = "IMAGE_OCR";
    TagFunctions["INSERT_BRACKET_LEFT"] = "INSERT_BRACKET_LEFT";
    TagFunctions["INSERT_BRACKET_RIGHT"] = "INSERT_BRACKET_RIGHT";
    TagFunctions["INSERT_NEWLINE"] = "INSERT_NEWLINE";
    TagFunctions["INSERT_SPLITTER_ARGUMENT"] = "INSERT_SPLITTER_ARGUMENT";
    TagFunctions["INSERT_SPLITTER_FUNCTION"] = "INSERT_SPLITTER_FUNCTION";
    TagFunctions["JSON_CHANNEL"] = "JSON_CHANNEL";
    TagFunctions["JSON_GUILD"] = "JSON_GUILD";
    TagFunctions["JSON_MEMBER"] = "JSON_MEMBER";
    TagFunctions["JSON_MEMBER_OR_USER"] = "JSON_MEMBER_OR_USER";
    TagFunctions["JSON_MESSAGE"] = "JSON_MESSAGE";
    TagFunctions["JSON_MESSAGE_REPLY"] = "JSON_MESSAGE_REPLY";
    TagFunctions["JSON_USER"] = "JSON_USER";
    TagFunctions["LOGICAL_AND"] = "LOGICAL_AND";
    TagFunctions["LOGICAL_DELETE"] = "LOGICAL_DELETE";
    TagFunctions["LOGICAL_DELETE_CHANNEL"] = "LOGICAL_DELETE_CHANNEL";
    TagFunctions["LOGICAL_DELETE_SERVER"] = "LOGICAL_DELETE_SERVER";
    TagFunctions["LOGICAL_DELETE_USER"] = "LOGICAL_DELETE_USER";
    TagFunctions["LOGICAL_FOR_EACH"] = "LOGICAL_FOR_EACH";
    TagFunctions["LOGICAL_GET"] = "LOGICAL_GET";
    TagFunctions["LOGICAL_GET_CHANNEL"] = "LOGICAL_GET_CHANNEL";
    TagFunctions["LOGICAL_GET_GLOBAL"] = "LOGICAL_GET_GLOBAL";
    TagFunctions["LOGICAL_GET_SERVER"] = "LOGICAL_GET_SERVER";
    TagFunctions["LOGICAL_GET_USER"] = "LOGICAL_GET_USER";
    TagFunctions["LOGICAL_IF"] = "LOGICAL_IF";
    TagFunctions["LOGICAL_IF_ERROR"] = "LOGICAL_IF_ERROR";
    TagFunctions["LOGICAL_IS_FROM_AI"] = "LOGICAL_IS_FROM_AI";
    TagFunctions["LOGICAL_IS_FROM_COMPONENT"] = "LOGICAL_IS_FROM_COMPONENT";
    TagFunctions["LOGICAL_IS_MAIN_TAG"] = "LOGICAL_IS_MAIN_TAG";
    TagFunctions["LOGICAL_OR"] = "LOGICAL_OR";
    TagFunctions["LOGICAL_SET"] = "LOGICAL_SET";
    TagFunctions["LOGICAL_SET_CHANNEL"] = "LOGICAL_SET_CHANNEL";
    TagFunctions["LOGICAL_SET_GLOBAL"] = "LOGICAL_SET_GLOBAL";
    TagFunctions["LOGICAL_SET_SERVER"] = "LOGICAL_SET_SERVER";
    TagFunctions["LOGICAL_SET_USER"] = "LOGICAL_SET_USER";
    TagFunctions["MATH"] = "MATH";
    TagFunctions["MATH_ABS"] = "MATH_ABS";
    TagFunctions["MATH_COS"] = "MATH_COS";
    TagFunctions["MATH_E"] = "MATH_E";
    TagFunctions["MATH_MAX"] = "MATH_MAX";
    TagFunctions["MATH_MIN"] = "MATH_MIN";
    TagFunctions["MATH_PI"] = "MATH_PI";
    TagFunctions["MATH_SIN"] = "MATH_SIN";
    TagFunctions["MATH_TAN"] = "MATH_TAN";
    TagFunctions["MEDIA"] = "MEDIA";
    TagFunctions["MEDIA_AUDIO"] = "MEDIA_AUDIO";
    TagFunctions["MEDIA_AUDIO_OR_VIDEO"] = "MEDIA_AUDIO_OR_VIDEO";
    TagFunctions["MEDIA_IMAGE"] = "MEDIA_IMAGE";
    TagFunctions["MEDIA_IMAGE_EDIT"] = "MEDIA_IMAGE_EDIT";
    TagFunctions["MEDIA_IMAGE_EDIT_URL"] = "MEDIA_IMAGE_EDIT_URL";
    TagFunctions["MEDIA_IMAGE_IMAGINE"] = "MEDIA_IMAGE_IMAGINE";
    TagFunctions["MEDIA_IMAGE_IMAGINE_URL"] = "MEDIA_IMAGE_IMAGINE_URL";
    TagFunctions["MEDIA_IMAGE_OR_VIDEO"] = "MEDIA_IMAGE_OR_VIDEO";
    TagFunctions["MEDIA_VIDEO"] = "MEDIA_VIDEO";
    TagFunctions["MEDIASCRIPT"] = "MEDIASCRIPT";
    TagFunctions["MEDIASCRIPT_MAYBE_URL"] = "MEDIASCRIPT_MAYBE_URL";
    TagFunctions["MEDIASCRIPT_URL"] = "MEDIASCRIPT_URL";
    TagFunctions["MESSAGE_CONTENT"] = "MESSAGE_CONTENT";
    TagFunctions["MESSAGE_LAST_ID"] = "MESSAGE_LAST_ID";
    TagFunctions["MESSAGE_RANDOM_ID"] = "MESSAGE_RANDOM_ID";
    TagFunctions["MESSAGE_USER_ID"] = "MESSAGE_USER_ID";
    TagFunctions["NSFW"] = "NSFW";
    TagFunctions["NSFW_FILTER"] = "NSFW_FILTER";
    TagFunctions["PAGE_JSON"] = "PAGE_JSON";
    TagFunctions["PREFIX"] = "PREFIX";
    TagFunctions["REPLY_CONTENT"] = "REPLY_CONTENT";
    TagFunctions["REPLY_USER_ID"] = "REPLY_USER_ID";
    TagFunctions["REQUEST"] = "REQUEST";
    TagFunctions["RNG_CHOOSE"] = "RNG_CHOOSE";
    TagFunctions["RNG_RANGE"] = "RNG_RANGE";
    TagFunctions["SEARCH_DUCKDUCKGO_IMAGES"] = "SEARCH_DUCKDUCKGO_IMAGES";
    TagFunctions["SEARCH_GOOGLE_IMAGES"] = "SEARCH_GOOGLE_IMAGES";
    TagFunctions["SEARCH_YOUTUBE"] = "SEARCH_YOUTUBE";
    TagFunctions["SETTINGS"] = "SETTINGS";
    TagFunctions["STRING_INDEX_OF"] = "STRING_INDEX_OF";
    TagFunctions["STRING_JSONIFY"] = "STRING_JSONIFY";
    TagFunctions["STRING_LENGTH"] = "STRING_LENGTH";
    TagFunctions["STRING_LOWER"] = "STRING_LOWER";
    TagFunctions["STRING_MARKUP_BOLD"] = "STRING_MARKUP_BOLD";
    TagFunctions["STRING_MARKUP_CODEBLOCK"] = "STRING_MARKUP_CODEBLOCK";
    TagFunctions["STRING_MARKUP_CODESTRING"] = "STRING_MARKUP_CODESTRING";
    TagFunctions["STRING_MARKUP_ESCAPE"] = "STRING_MARKUP_ESCAPE";
    TagFunctions["STRING_MARKUP_HEADER_BIG"] = "STRING_MARKUP_HEADER_BIG";
    TagFunctions["STRING_MARKUP_HEADER_MEDIUM"] = "STRING_MARKUP_HEADER_MEDIUM";
    TagFunctions["STRING_MARKUP_HEADER_SMALL"] = "STRING_MARKUP_HEADER_SMALL";
    TagFunctions["STRING_MARKUP_ITALICS"] = "STRING_MARKUP_ITALICS";
    TagFunctions["STRING_MARKUP_LIST_DOTTED"] = "STRING_MARKUP_LIST_DOTTED";
    TagFunctions["STRING_MARKUP_LIST_NUMBERED"] = "STRING_MARKUP_LIST_NUMBERED";
    TagFunctions["STRING_MARKUP_QUOTE"] = "STRING_MARKUP_QUOTE";
    TagFunctions["STRING_MARKUP_SPOILER"] = "STRING_MARKUP_SPOILER";
    TagFunctions["STRING_MARKUP_STRIKE"] = "STRING_MARKUP_STRIKE";
    TagFunctions["STRING_MARKUP_SUBTEXT"] = "STRING_MARKUP_SUBTEXT";
    TagFunctions["STRING_MARKUP_TIME"] = "STRING_MARKUP_TIME";
    TagFunctions["STRING_MARKUP_UNDERLINE"] = "STRING_MARKUP_UNDERLINE";
    TagFunctions["STRING_MARKUP_URL"] = "STRING_MARKUP_URL";
    TagFunctions["STRING_ONE_OF"] = "STRING_ONE_OF";
    TagFunctions["STRING_REPEAT"] = "STRING_REPEAT";
    TagFunctions["STRING_REPLACE"] = "STRING_REPLACE";
    TagFunctions["STRING_REVERSE"] = "STRING_REVERSE";
    TagFunctions["STRING_SUB"] = "STRING_SUB";
    TagFunctions["STRING_TRANSLATE"] = "STRING_TRANSLATE";
    TagFunctions["STRING_UPPER"] = "STRING_UPPER";
    TagFunctions["STRING_URL_ENCODE"] = "STRING_URL_ENCODE";
    TagFunctions["TAG"] = "TAG";
    TagFunctions["TAG_ID"] = "TAG_ID";
    TagFunctions["TAG_NAME"] = "TAG_NAME";
    TagFunctions["TAG_OWNER_ID"] = "TAG_OWNER_ID";
    TagFunctions["TEXT"] = "TEXT";
    TagFunctions["TEXT_FROM_HTML"] = "TEXT_FROM_HTML";
    TagFunctions["TIME_UNIX"] = "TIME_UNIX";
    TagFunctions["TIME_UNIX_FROM_SNOWFLAKE"] = "TIME_UNIX_FROM_SNOWFLAKE";
    TagFunctions["TIME_UNIX_SECONDS"] = "TIME_UNIX_SECONDS";
    TagFunctions["TRANSCRIBE"] = "TRANSCRIBE";
    TagFunctions["TRAVERSE_JSON"] = "TRAVERSE_JSON";
    TagFunctions["TYPE"] = "TYPE";
    TagFunctions["USER_AVATAR"] = "USER_AVATAR";
    TagFunctions["USER_DISCRIMINATOR"] = "USER_DISCRIMINATOR";
    TagFunctions["USER_ID"] = "USER_ID";
    TagFunctions["USER_MENTION"] = "USER_MENTION";
    TagFunctions["USER_NAME"] = "USER_NAME";
    TagFunctions["USER_NICK"] = "USER_NICK";
    TagFunctions["USER_RANDOM"] = "USER_RANDOM";
    TagFunctions["USER_RANDOM_ID"] = "USER_RANDOM_ID";
    TagFunctions["USER_RANDOM_ONLINE"] = "USER_RANDOM_ONLINE";
    TagFunctions["USER_RANDOM_ONLINE_ID"] = "USER_RANDOM_ONLINE_ID";
    TagFunctions["USER_RANDOM_ONLINE_TAG"] = "USER_RANDOM_ONLINE_TAG";
    TagFunctions["USER_RANDOM_TAG"] = "USER_RANDOM_TAG";
    TagFunctions["USER_TAG"] = "USER_TAG";
    TagFunctions["VARIABLES"] = "VARIABLES";
    TagFunctions["VARIABLES_CHANNEL"] = "VARIABLES_CHANNEL";
    TagFunctions["VARIABLES_GLOBAL"] = "VARIABLES_GLOBAL";
    TagFunctions["VARIABLES_SERVER"] = "VARIABLES_SERVER";
    TagFunctions["VARIABLES_USER"] = "VARIABLES_USER";
})(TagFunctions || (exports.TagFunctions = TagFunctions = {}));
;
exports.TagFunctionsToString = Object.freeze({
    IGNORE: ['ignore'],
    NOTE: ['note'],
    [TagFunctions.AI]: ['ai'],
    [TagFunctions.API_CREATE_REMINDER]: ['api.create.reminder'],
    [TagFunctions.API_SEARCH_DUCKDUCKGO_IMAGES]: ['api.search.duckduckgo.images'],
    [TagFunctions.API_SEARCH_IMGUR]: ['api.search.imgur'],
    [TagFunctions.API_UTILITIES_LOCATIONS]: ['api.utilities.locations'],
    [TagFunctions.API_UTILITIES_WEATHER]: ['api.utilities.weather'],
    [TagFunctions.ARG]: ['arg'],
    [TagFunctions.ARG_SAFE]: ['argsafe'],
    [TagFunctions.ARGS]: ['args'],
    [TagFunctions.ARGS_LEN]: ['argslen'],
    [TagFunctions.ARGS_SAFE]: ['argssafe'],
    [TagFunctions.ATTACHMENT]: ['attachment', 'attach', 'file'],
    [TagFunctions.ATTACHMENT_LAST]: ['last_attachment', 'lastattachment', 'lattachment', 'lattach'],
    [TagFunctions.ATTACHMENT_SPOILER]: ['attachmentspoiler', 'attachspoiler', 'filespoiler'],
    [TagFunctions.ATTACHMENT_TEXT]: ['attachmenttext', 'attachtext', 'filetext'],
    [TagFunctions.ATTACHMENT_VOICE]: ['attachmentvoice', 'attachvoice', 'filevoice'],
    [TagFunctions.AVATAR]: ['avatar'],
    [TagFunctions.CHANNEL]: ['channel'],
    [TagFunctions.CHANNEL_ID]: ['channelid'],
    [TagFunctions.CHANNEL_MENTION]: ['channelmention'],
    [TagFunctions.CHANNEL_RANDOM]: ['randchannel'],
    [TagFunctions.CHANNEL_RANDOM_ID]: ['randchannelid'],
    [TagFunctions.CHANNEL_RANDOM_MENTION]: ['randchannelmention'],
    [TagFunctions.COMPONENT_JSON]: ['componentjson'],
    [TagFunctions.COMPONENTS_ON_TIMEOUT]: ['componentsontimeout'],
    [TagFunctions.DISCORD]: ['discord'],
    [TagFunctions.EMBED_JSON]: ['embedjson'],
    [TagFunctions.EVAL]: ['eval'],
    [TagFunctions.EVAL_SILENT]: ['evalsilent'],
    [TagFunctions.EXIT]: ['exit'],
    [TagFunctions.EXIT_SILENT]: ['exitsilent'],
    [TagFunctions.GUILD]: ['guild', 'server'],
    [TagFunctions.GUILD_COUNT]: ['guildcount', 'membercount', 'servercount'],
    [TagFunctions.GUILD_ID]: ['guildid', 'serverid', 'sid', 'gid'],
    [TagFunctions.HASTEBIN]: ['hastebin', 'haste'],
    [TagFunctions.IMAGE_INTERROGATE]: ['identify', 'interrogate'],
    [TagFunctions.IMAGE_OCR]: ['ocr'],
    [TagFunctions.INSERT_BRACKET_LEFT]: ['bracketleft'],
    [TagFunctions.INSERT_BRACKET_RIGHT]: ['bracketright'],
    [TagFunctions.INSERT_NEWLINE]: ['newline'],
    [TagFunctions.INSERT_SPLITTER_ARGUMENT]: ['splitterargument'],
    [TagFunctions.INSERT_SPLITTER_FUNCTION]: ['splitterfunction'],
    [TagFunctions.JSON_CHANNEL]: ['json.channel', 'channeljson'],
    [TagFunctions.JSON_GUILD]: ['json.guild'],
    [TagFunctions.JSON_MEMBER]: ['json.member'],
    [TagFunctions.JSON_MEMBER_OR_USER]: ['json.memberoruser'],
    [TagFunctions.JSON_MESSAGE]: ['json.message'],
    [TagFunctions.JSON_MESSAGE_REPLY]: ['json.messagereply'],
    [TagFunctions.JSON_USER]: ['json.user', 'userjson'],
    [TagFunctions.LOGICAL_AND]: ['and'],
    [TagFunctions.LOGICAL_DELETE]: ['delete'],
    [TagFunctions.LOGICAL_DELETE_CHANNEL]: ['deletechannel'],
    [TagFunctions.LOGICAL_DELETE_SERVER]: ['deleteserver'],
    [TagFunctions.LOGICAL_DELETE_USER]: ['deleteuser'],
    [TagFunctions.LOGICAL_FOR_EACH]: ['foreach'],
    [TagFunctions.LOGICAL_GET]: ['get'],
    [TagFunctions.LOGICAL_GET_CHANNEL]: ['getchannel'],
    [TagFunctions.LOGICAL_GET_GLOBAL]: ['getglobal'],
    [TagFunctions.LOGICAL_GET_SERVER]: ['getserver'],
    [TagFunctions.LOGICAL_GET_USER]: ['getuser'],
    [TagFunctions.LOGICAL_IF]: ['if'],
    [TagFunctions.LOGICAL_IF_ERROR]: ['iferror'],
    [TagFunctions.LOGICAL_IS_FROM_AI]: ['isfromai'],
    [TagFunctions.LOGICAL_IS_FROM_COMPONENT]: ['isfromcomponent'],
    [TagFunctions.LOGICAL_IS_MAIN_TAG]: ['ismaintag'],
    [TagFunctions.LOGICAL_OR]: ['or'],
    [TagFunctions.LOGICAL_SET]: ['set'],
    [TagFunctions.LOGICAL_SET_CHANNEL]: ['setchannel'],
    [TagFunctions.LOGICAL_SET_GLOBAL]: ['setglobal'],
    [TagFunctions.LOGICAL_SET_SERVER]: ['setserver'],
    [TagFunctions.LOGICAL_SET_USER]: ['setuser'],
    [TagFunctions.MATH]: ['math'],
    [TagFunctions.MATH_ABS]: ['abs'],
    [TagFunctions.MATH_COS]: ['cos'],
    [TagFunctions.MATH_E]: ['e'],
    [TagFunctions.MATH_MAX]: ['max'],
    [TagFunctions.MATH_MIN]: ['min'],
    [TagFunctions.MATH_PI]: ['pi'],
    [TagFunctions.MATH_SIN]: ['sin'],
    [TagFunctions.MATH_TAN]: ['tan'],
    [TagFunctions.MEDIA]: ['media'],
    [TagFunctions.MEDIA_AUDIO]: ['audio'],
    [TagFunctions.MEDIA_AUDIO_OR_VIDEO]: ['av'],
    [TagFunctions.MEDIA_IMAGE]: ['image'],
    [TagFunctions.MEDIA_IMAGE_EDIT]: ['edit'],
    [TagFunctions.MEDIA_IMAGE_EDIT_URL]: ['editurl'],
    [TagFunctions.MEDIA_IMAGE_IMAGINE]: ['imagine'],
    [TagFunctions.MEDIA_IMAGE_IMAGINE_URL]: ['imagineurl'],
    [TagFunctions.MEDIA_IMAGE_OR_VIDEO]: ['iv'],
    [TagFunctions.MEDIASCRIPT]: ['mediascript', 'mscript', 'imagescript', 'iscript'],
    [TagFunctions.MEDIASCRIPT_MAYBE_URL]: ['mediascriptmaybeurl', 'mscriptmaybeurl', 'imagescriptmaybeurl', 'iscriptmaybeurl'],
    [TagFunctions.MEDIASCRIPT_URL]: ['mediascripturl', 'mscripturl', 'imagescripturl', 'iscripturl'],
    [TagFunctions.MEDIA_VIDEO]: ['video'],
    [TagFunctions.MESSAGE_CONTENT]: ['messagecontent'],
    [TagFunctions.MESSAGE_LAST_ID]: ['messagelastid'],
    [TagFunctions.MESSAGE_RANDOM_ID]: ['randmessageid'],
    [TagFunctions.MESSAGE_USER_ID]: ['messageuserid'],
    [TagFunctions.NSFW]: ['nsfw'],
    [TagFunctions.NSFW_FILTER]: ['nsfwfilter'],
    [TagFunctions.PAGE_JSON]: ['pagejson'],
    [TagFunctions.PREFIX]: ['prefix'],
    [TagFunctions.REPLY_CONTENT]: ['replycontent'],
    [TagFunctions.REPLY_USER_ID]: ['replyuserid'],
    [TagFunctions.REQUEST]: ['request'],
    [TagFunctions.RNG_CHOOSE]: ['choose'],
    [TagFunctions.RNG_RANGE]: ['range', 'random', 'rnd'],
    [TagFunctions.SEARCH_DUCKDUCKGO_IMAGES]: ['search.duckduckgo.images', 'search.ddg.images', 's.duckduckgo.images', 's.ddg.images'],
    [TagFunctions.SEARCH_GOOGLE_IMAGES]: ['search.google.images', 'search.g.images', 's.google.images', 's.g.images'],
    [TagFunctions.SEARCH_YOUTUBE]: ['search.youtube', 'search.yt', 's.youtube', 's.yt'],
    [TagFunctions.SETTINGS]: ['settings'],
    [TagFunctions.STRING_INDEX_OF]: ['indexof'],
    [TagFunctions.STRING_JSONIFY]: ['jsonify'],
    [TagFunctions.STRING_LENGTH]: ['len', 'length'],
    [TagFunctions.STRING_LOWER]: ['lower'],
    [TagFunctions.STRING_MARKUP_BOLD]: ['markupbold'],
    [TagFunctions.STRING_MARKUP_CODEBLOCK]: ['code', 'markupcodeblock'],
    [TagFunctions.STRING_MARKUP_CODESTRING]: ['markupcodestring'],
    [TagFunctions.STRING_MARKUP_ESCAPE]: ['markupescape'],
    [TagFunctions.STRING_MARKUP_HEADER_BIG]: ['markupheaderbig'],
    [TagFunctions.STRING_MARKUP_HEADER_MEDIUM]: ['markupheadermedium'],
    [TagFunctions.STRING_MARKUP_HEADER_SMALL]: ['markupheadersmall'],
    [TagFunctions.STRING_MARKUP_ITALICS]: ['markupitalics'],
    [TagFunctions.STRING_MARKUP_LIST_DOTTED]: ['markuplistdotted'],
    [TagFunctions.STRING_MARKUP_LIST_NUMBERED]: ['markuplistnumbered'],
    [TagFunctions.STRING_MARKUP_QUOTE]: ['markupquote'],
    [TagFunctions.STRING_MARKUP_SPOILER]: ['markupspoiler'],
    [TagFunctions.STRING_MARKUP_STRIKE]: ['markupstrike'],
    [TagFunctions.STRING_MARKUP_SUBTEXT]: ['markupsubtext'],
    [TagFunctions.STRING_MARKUP_TIME]: ['markuptime'],
    [TagFunctions.STRING_MARKUP_UNDERLINE]: ['markupunderline'],
    [TagFunctions.STRING_MARKUP_URL]: ['markupurl'],
    [TagFunctions.STRING_ONE_OF]: ['oneof'],
    [TagFunctions.STRING_REPEAT]: ['repeat'],
    [TagFunctions.STRING_REPLACE]: ['replace', 'replaceregex'],
    [TagFunctions.STRING_REVERSE]: ['reverse'],
    [TagFunctions.STRING_SUB]: ['substring'],
    [TagFunctions.STRING_TRANSLATE]: ['translate'],
    [TagFunctions.STRING_UPPER]: ['upper'],
    [TagFunctions.STRING_URL_ENCODE]: ['url', 'urlencode'],
    [TagFunctions.TAG]: ['tag'],
    [TagFunctions.TAG_ID]: ['tagid'],
    [TagFunctions.TAG_NAME]: ['tagname'],
    [TagFunctions.TAG_OWNER_ID]: ['tagownerid'],
    [TagFunctions.TEXT]: ['download', 'text'],
    [TagFunctions.TEXT_FROM_HTML]: ['downloadfromhtml', 'textfromhtml'],
    [TagFunctions.TIME_UNIX]: ['unix'],
    [TagFunctions.TIME_UNIX_FROM_SNOWFLAKE]: ['unixsnowflake'],
    [TagFunctions.TIME_UNIX_SECONDS]: ['unixs'],
    [TagFunctions.TRANSCRIBE]: ['transcribe'],
    [TagFunctions.TRAVERSE_JSON]: ['traversejson'],
    [TagFunctions.TYPE]: ['type'],
    [TagFunctions.USER_AVATAR]: ['useravatar'],
    [TagFunctions.USER_DISCRIMINATOR]: ['discrim'],
    [TagFunctions.USER_ID]: ['id', 'userid'],
    [TagFunctions.USER_MENTION]: ['mention'],
    [TagFunctions.USER_NAME]: ['name', 'user'],
    [TagFunctions.USER_NICK]: ['nick'],
    [TagFunctions.USER_RANDOM]: ['randuser'],
    [TagFunctions.USER_RANDOM_ID]: ['randuserid'],
    [TagFunctions.USER_RANDOM_ONLINE]: ['randonline'],
    [TagFunctions.USER_RANDOM_ONLINE_ID]: ['randonlineid'],
    [TagFunctions.USER_RANDOM_ONLINE_TAG]: ['randonlinetag'],
    [TagFunctions.USER_RANDOM_TAG]: ['randusertag'],
    [TagFunctions.USER_TAG]: ['usertag'],
    [TagFunctions.VARIABLES]: ['variables'],
    [TagFunctions.VARIABLES_CHANNEL]: ['variableschannel'],
    [TagFunctions.VARIABLES_GLOBAL]: ['variablesglobal'],
    [TagFunctions.VARIABLES_SERVER]: ['variablesserver'],
    [TagFunctions.VARIABLES_USER]: ['variablesuser'],
});
exports.StringToTagFunction = Object.freeze({
    "ignore": "IGNORE",
    "note": "NOTE",
    "ai": TagFunctions.AI,
    "api.create.reminder": TagFunctions.API_CREATE_REMINDER,
    "api.search.duckduckgo.images": TagFunctions.API_SEARCH_DUCKDUCKGO_IMAGES,
    "api.search.imgur": TagFunctions.API_SEARCH_IMGUR,
    "api.utilities.locations": TagFunctions.API_UTILITIES_LOCATIONS,
    "api.utilities.weather": TagFunctions.API_UTILITIES_WEATHER,
    "arg": TagFunctions.ARG,
    "argsafe": TagFunctions.ARG_SAFE,
    "args": TagFunctions.ARGS,
    "argslen": TagFunctions.ARGS_LEN,
    "argssafe": TagFunctions.ARGS_SAFE,
    "attachment": TagFunctions.ATTACHMENT,
    "attach": TagFunctions.ATTACHMENT,
    "file": TagFunctions.ATTACHMENT,
    "last_attachment": TagFunctions.ATTACHMENT_LAST,
    "lastattachment": TagFunctions.ATTACHMENT_LAST,
    "lattachment": TagFunctions.ATTACHMENT_LAST,
    "lattach": TagFunctions.ATTACHMENT_LAST,
    "attachmentspoiler": TagFunctions.ATTACHMENT_SPOILER,
    "attachspoiler": TagFunctions.ATTACHMENT_SPOILER,
    "filespoiler": TagFunctions.ATTACHMENT_SPOILER,
    "attachmenttext": TagFunctions.ATTACHMENT_TEXT,
    "attachtext": TagFunctions.ATTACHMENT_TEXT,
    "filetext": TagFunctions.ATTACHMENT_TEXT,
    "attachmentvoice": TagFunctions.ATTACHMENT_VOICE,
    "attachvoice": TagFunctions.ATTACHMENT_VOICE,
    "filevoice": TagFunctions.ATTACHMENT_VOICE,
    "avatar": TagFunctions.AVATAR,
    "channel": TagFunctions.CHANNEL,
    "channelid": TagFunctions.CHANNEL_ID,
    "channelmention": TagFunctions.CHANNEL_MENTION,
    "randchannel": TagFunctions.CHANNEL_RANDOM,
    "randchannelid": TagFunctions.CHANNEL_RANDOM_ID,
    "randchannelmention": TagFunctions.CHANNEL_RANDOM_MENTION,
    "componentjson": TagFunctions.COMPONENT_JSON,
    "componentsontimeout": TagFunctions.COMPONENTS_ON_TIMEOUT,
    "discord": TagFunctions.DISCORD,
    "embedjson": TagFunctions.EMBED_JSON,
    "eval": TagFunctions.EVAL,
    "evalsilent": TagFunctions.EVAL_SILENT,
    "exit": TagFunctions.EXIT,
    "exitsilent": TagFunctions.EXIT_SILENT,
    "guild": TagFunctions.GUILD,
    "server": TagFunctions.GUILD,
    "guildcount": TagFunctions.GUILD_COUNT,
    "membercount": TagFunctions.GUILD_COUNT,
    "servercount": TagFunctions.GUILD_COUNT,
    "guildid": TagFunctions.GUILD_ID,
    "serverid": TagFunctions.GUILD_ID,
    "sid": TagFunctions.GUILD_ID,
    "gid": TagFunctions.GUILD_ID,
    "hastebin": TagFunctions.HASTEBIN,
    "haste": TagFunctions.HASTEBIN,
    "identify": TagFunctions.IMAGE_INTERROGATE,
    "interrogate": TagFunctions.IMAGE_INTERROGATE,
    "ocr": TagFunctions.IMAGE_OCR,
    "bracketleft": TagFunctions.INSERT_BRACKET_LEFT,
    "bracketright": TagFunctions.INSERT_BRACKET_RIGHT,
    "newline": TagFunctions.INSERT_NEWLINE,
    "splitterargument": TagFunctions.INSERT_SPLITTER_ARGUMENT,
    "splitterfunction": TagFunctions.INSERT_SPLITTER_FUNCTION,
    "json.channel": TagFunctions.JSON_CHANNEL,
    "channeljson": TagFunctions.JSON_CHANNEL,
    "json.guild": TagFunctions.JSON_GUILD,
    "json.member": TagFunctions.JSON_MEMBER,
    "json.memberoruser": TagFunctions.JSON_MEMBER_OR_USER,
    "json.message": TagFunctions.JSON_MESSAGE,
    "json.messagereply": TagFunctions.JSON_MESSAGE_REPLY,
    "json.user": TagFunctions.JSON_USER,
    "userjson": TagFunctions.JSON_USER,
    "and": TagFunctions.LOGICAL_AND,
    "delete": TagFunctions.LOGICAL_DELETE,
    "deletechannel": TagFunctions.LOGICAL_DELETE_CHANNEL,
    "deleteserver": TagFunctions.LOGICAL_DELETE_SERVER,
    "deleteuser": TagFunctions.LOGICAL_DELETE_USER,
    "foreach": TagFunctions.LOGICAL_FOR_EACH,
    "get": TagFunctions.LOGICAL_GET,
    "getchannel": TagFunctions.LOGICAL_GET_CHANNEL,
    "getglobal": TagFunctions.LOGICAL_GET_GLOBAL,
    "getserver": TagFunctions.LOGICAL_GET_SERVER,
    "getuser": TagFunctions.LOGICAL_GET_USER,
    "if": TagFunctions.LOGICAL_IF,
    "iferror": TagFunctions.LOGICAL_IF_ERROR,
    "isfromai": TagFunctions.LOGICAL_IS_FROM_AI,
    "isfromcomponent": TagFunctions.LOGICAL_IS_FROM_COMPONENT,
    "ismaintag": TagFunctions.LOGICAL_IS_MAIN_TAG,
    "or": TagFunctions.LOGICAL_OR,
    "set": TagFunctions.LOGICAL_SET,
    "setchannel": TagFunctions.LOGICAL_SET_CHANNEL,
    "setglobal": TagFunctions.LOGICAL_SET_GLOBAL,
    "setserver": TagFunctions.LOGICAL_SET_SERVER,
    "setuser": TagFunctions.LOGICAL_SET_USER,
    "math": TagFunctions.MATH,
    "abs": TagFunctions.MATH_ABS,
    "cos": TagFunctions.MATH_COS,
    "e": TagFunctions.MATH_E,
    "max": TagFunctions.MATH_MAX,
    "min": TagFunctions.MATH_MIN,
    "pi": TagFunctions.MATH_PI,
    "sin": TagFunctions.MATH_SIN,
    "tan": TagFunctions.MATH_TAN,
    "media": TagFunctions.MEDIA,
    "audio": TagFunctions.MEDIA_AUDIO,
    "av": TagFunctions.MEDIA_AUDIO_OR_VIDEO,
    "image": TagFunctions.MEDIA_IMAGE,
    "edit": TagFunctions.MEDIA_IMAGE_EDIT,
    "editurl": TagFunctions.MEDIA_IMAGE_EDIT_URL,
    "imagine": TagFunctions.MEDIA_IMAGE_IMAGINE,
    "imagineurl": TagFunctions.MEDIA_IMAGE_IMAGINE_URL,
    "iv": TagFunctions.MEDIA_IMAGE_OR_VIDEO,
    "mediascript": TagFunctions.MEDIASCRIPT,
    "mscript": TagFunctions.MEDIASCRIPT,
    "imagescript": TagFunctions.MEDIASCRIPT,
    "iscript": TagFunctions.MEDIASCRIPT,
    "mediascriptmaybeurl": TagFunctions.MEDIASCRIPT_MAYBE_URL,
    "mscriptmaybeurl": TagFunctions.MEDIASCRIPT_MAYBE_URL,
    "imagescriptmaybeurl": TagFunctions.MEDIASCRIPT_MAYBE_URL,
    "iscriptmaybeurl": TagFunctions.MEDIASCRIPT_MAYBE_URL,
    "mediascripturl": TagFunctions.MEDIASCRIPT_URL,
    "mscripturl": TagFunctions.MEDIASCRIPT_URL,
    "imagescripturl": TagFunctions.MEDIASCRIPT_URL,
    "iscripturl": TagFunctions.MEDIASCRIPT_URL,
    "video": TagFunctions.MEDIA_VIDEO,
    "messagecontent": TagFunctions.MESSAGE_CONTENT,
    "messagelastid": TagFunctions.MESSAGE_LAST_ID,
    "randmessageid": TagFunctions.MESSAGE_RANDOM_ID,
    "messageuserid": TagFunctions.MESSAGE_USER_ID,
    "nsfw": TagFunctions.NSFW,
    "nsfwfilter": TagFunctions.NSFW_FILTER,
    "pagejson": TagFunctions.PAGE_JSON,
    "prefix": TagFunctions.PREFIX,
    "replycontent": TagFunctions.REPLY_CONTENT,
    "replyuserid": TagFunctions.REPLY_USER_ID,
    "request": TagFunctions.REQUEST,
    "choose": TagFunctions.RNG_CHOOSE,
    "range": TagFunctions.RNG_RANGE,
    "random": TagFunctions.RNG_RANGE,
    "rnd": TagFunctions.RNG_RANGE,
    "search.duckduckgo.images": TagFunctions.SEARCH_DUCKDUCKGO_IMAGES,
    "search.ddg.images": TagFunctions.SEARCH_DUCKDUCKGO_IMAGES,
    "s.duckduckgo.images": TagFunctions.SEARCH_DUCKDUCKGO_IMAGES,
    "s.ddg.images": TagFunctions.SEARCH_DUCKDUCKGO_IMAGES,
    "search.google.images": TagFunctions.SEARCH_GOOGLE_IMAGES,
    "search.g.images": TagFunctions.SEARCH_GOOGLE_IMAGES,
    "s.google.images": TagFunctions.SEARCH_GOOGLE_IMAGES,
    "s.g.images": TagFunctions.SEARCH_GOOGLE_IMAGES,
    "search.youtube": TagFunctions.SEARCH_YOUTUBE,
    "search.yt": TagFunctions.SEARCH_YOUTUBE,
    "s.youtube": TagFunctions.SEARCH_YOUTUBE,
    "s.yt": TagFunctions.SEARCH_YOUTUBE,
    "settings": TagFunctions.SETTINGS,
    "indexof": TagFunctions.STRING_INDEX_OF,
    "jsonify": TagFunctions.STRING_JSONIFY,
    "len": TagFunctions.STRING_LENGTH,
    "length": TagFunctions.STRING_LENGTH,
    "lower": TagFunctions.STRING_LOWER,
    "markupbold": TagFunctions.STRING_MARKUP_BOLD,
    "code": TagFunctions.STRING_MARKUP_CODEBLOCK,
    "markupcodeblock": TagFunctions.STRING_MARKUP_CODEBLOCK,
    "markupcodestring": TagFunctions.STRING_MARKUP_CODESTRING,
    "markupescape": TagFunctions.STRING_MARKUP_ESCAPE,
    "markupheaderbig": TagFunctions.STRING_MARKUP_HEADER_BIG,
    "markupheadermedium": TagFunctions.STRING_MARKUP_HEADER_MEDIUM,
    "markupheadersmall": TagFunctions.STRING_MARKUP_HEADER_SMALL,
    "markupitalics": TagFunctions.STRING_MARKUP_ITALICS,
    "markuplistdotted": TagFunctions.STRING_MARKUP_LIST_DOTTED,
    "markuplistnumbered": TagFunctions.STRING_MARKUP_LIST_NUMBERED,
    "markupquote": TagFunctions.STRING_MARKUP_QUOTE,
    "markupspoiler": TagFunctions.STRING_MARKUP_SPOILER,
    "markupstrike": TagFunctions.STRING_MARKUP_STRIKE,
    "markupsubtext": TagFunctions.STRING_MARKUP_SUBTEXT,
    "markuptime": TagFunctions.STRING_MARKUP_TIME,
    "markupunderline": TagFunctions.STRING_MARKUP_UNDERLINE,
    "markupurl": TagFunctions.STRING_MARKUP_URL,
    "oneof": TagFunctions.STRING_ONE_OF,
    "repeat": TagFunctions.STRING_REPEAT,
    "replace": TagFunctions.STRING_REPLACE,
    "replaceregex": TagFunctions.STRING_REPLACE,
    "reverse": TagFunctions.STRING_REVERSE,
    "substring": TagFunctions.STRING_SUB,
    "translate": TagFunctions.STRING_TRANSLATE,
    "upper": TagFunctions.STRING_UPPER,
    "url": TagFunctions.STRING_URL_ENCODE,
    "urlencode": TagFunctions.STRING_URL_ENCODE,
    "tag": TagFunctions.TAG,
    "tagid": TagFunctions.TAG_ID,
    "tagname": TagFunctions.TAG_NAME,
    "tagownerid": TagFunctions.TAG_OWNER_ID,
    "download": TagFunctions.TEXT,
    "text": TagFunctions.TEXT,
    "downloadfromhtml": TagFunctions.TEXT_FROM_HTML,
    "textfromhtml": TagFunctions.TEXT_FROM_HTML,
    "unix": TagFunctions.TIME_UNIX,
    "unixsnowflake": TagFunctions.TIME_UNIX_FROM_SNOWFLAKE,
    "unixs": TagFunctions.TIME_UNIX_SECONDS,
    "transcribe": TagFunctions.TRANSCRIBE,
    "traversejson": TagFunctions.TRAVERSE_JSON,
    "type": TagFunctions.TYPE,
    "useravatar": TagFunctions.USER_AVATAR,
    "discrim": TagFunctions.USER_DISCRIMINATOR,
    "id": TagFunctions.USER_ID,
    "userid": TagFunctions.USER_ID,
    "mention": TagFunctions.USER_MENTION,
    "name": TagFunctions.USER_NAME,
    "user": TagFunctions.USER_NAME,
    "nick": TagFunctions.USER_NICK,
    "randuser": TagFunctions.USER_RANDOM,
    "randuserid": TagFunctions.USER_RANDOM_ID,
    "randonline": TagFunctions.USER_RANDOM_ONLINE,
    "randonlineid": TagFunctions.USER_RANDOM_ONLINE_ID,
    "randonlinetag": TagFunctions.USER_RANDOM_ONLINE_TAG,
    "randusertag": TagFunctions.USER_RANDOM_TAG,
    "usertag": TagFunctions.USER_TAG,
    "variables": TagFunctions.VARIABLES,
    "variableschannel": TagFunctions.VARIABLES_CHANNEL,
    "variablesglobal": TagFunctions.VARIABLES_GLOBAL,
    "variablesserver": TagFunctions.VARIABLES_SERVER,
    "variablesuser": TagFunctions.VARIABLES_USER
});
//# sourceMappingURL=tags.js.map