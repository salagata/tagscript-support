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
const assert = __importStar(require("assert"));
const scope_1 = require("../scope");
describe("Get Sub-tag name Tests", () => {
    it("should return void values when no opening brace found", () => {
        const cursor = "&";
        const text = "Here is your video";
        const position = text.indexOf(cursor);
        assert.deepStrictEqual((0, scope_1.getScopeData)(text, position), {
            "subTagName": "",
            "isJsonProperty": false,
            "argumentIndex": 0
        });
    });
    it("should extract subtag name from valid syntax", () => {
        const cursor = "&";
        const text = "{reverse: Reverse number lore&}";
        const position = text.indexOf(cursor);
        assert.deepStrictEqual((0, scope_1.getScopeData)(text, position), {
            "subTagName": "reverse",
            "isJsonProperty": false,
            "argumentIndex": 0
        });
    });
    it("should specify if it's in a JSON property (quoted)", () => {
        const cursor = "&";
        const text = `{ "title": ":warning: & Command Error" }`;
        const position = text.indexOf(cursor);
        assert.deepStrictEqual((0, scope_1.getScopeData)(text, position), {
            "subTagName": "title",
            "isJsonProperty": true,
            "argumentIndex": 0
        });
    });
    it("should return nothing if no colon found", () => {
        const cursor = "&";
        const text = `{user&}`;
        const position = text.indexOf(cursor);
        assert.deepStrictEqual((0, scope_1.getScopeData)(text, position), {
            "subTagName": "",
            "isJsonProperty": false,
            "argumentIndex": 0
        });
    });
    it("should handle nested braces correctly", () => {
        const cursor = "&";
        const text = `{math: {args} + &1}`;
        const position = text.indexOf(cursor);
        assert.deepStrictEqual((0, scope_1.getScopeData)(text, position), {
            "subTagName": "math",
            "isJsonProperty": false,
            "argumentIndex": 0
        });
    });
    it("should handle nested braces correctly #2", () => {
        const cursor = "&";
        const text = `{math: {args:&0} + 1}`;
        const position = text.indexOf(cursor);
        assert.deepStrictEqual((0, scope_1.getScopeData)(text, position), {
            "subTagName": "args",
            "isJsonProperty": false,
            "argumentIndex": 0
        });
    });
    it("should handle whitespace correctly", () => {
        const cursor = "&";
        const text = `{     	user 		 : cakedan& }`;
        const position = text.indexOf(cursor);
        assert.deepStrictEqual((0, scope_1.getScopeData)(text, position), {
            "subTagName": "user",
            "isJsonProperty": false,
            "argumentIndex": 0
        });
    });
    it("should ignore escape characters", () => {
        const cursor = "&";
        const text = `{indexof: \\{user: & }`;
        const position = text.indexOf(cursor);
        assert.deepStrictEqual((0, scope_1.getScopeData)(text, position), {
            "subTagName": "indexof",
            "isJsonProperty": false,
            "argumentIndex": 0
        });
    });
});
describe("Get Arguments-Index Tests", () => {
    it("should extract arguments index from valid syntax", () => {
        const cursor = "&";
        const text = "{indexof: cake | &cakedan }";
        const position = text.indexOf(cursor);
        assert.deepStrictEqual((0, scope_1.getScopeData)(text, position), {
            "subTagName": "indexof",
            "isJsonProperty": false,
            "argumentIndex": 1
        });
    });
    it("should extract arguments index from valid syntax #2", () => {
        const cursor = "&";
        const text = "{indexof: cake& |cakedan }";
        const position = text.indexOf(cursor);
        assert.deepStrictEqual((0, scope_1.getScopeData)(text, position), {
            "subTagName": "indexof",
            "isJsonProperty": false,
            "argumentIndex": 0
        });
    });
    it("should ignore escaped characters", () => {
        const cursor = "&";
        const text = "{substring: some\\|thing& |4 }";
        const position = text.indexOf(cursor);
        assert.deepStrictEqual((0, scope_1.getScopeData)(text, position), {
            "subTagName": "substring",
            "isJsonProperty": false,
            "argumentIndex": 0
        });
    });
    it("should ignore escaped characters #2", () => {
        const cursor = "&";
        const text = "{substring: some\\|thing |&4}";
        const position = text.indexOf(cursor);
        assert.deepStrictEqual((0, scope_1.getScopeData)(text, position), {
            "subTagName": "substring",
            "isJsonProperty": false,
            "argumentIndex": 1
        });
    });
    it("should ignore the subtags", () => {
        const cursor = "&";
        const text = "{if:{id}|=&|12450435489798456992|then:}";
        const position = text.indexOf(cursor);
        assert.deepStrictEqual((0, scope_1.getScopeData)(text, position), {
            "subTagName": "if",
            "isJsonProperty": false,
            "argumentIndex": 1
        });
    });
});
//# sourceMappingURL=scope.test.js.map