import * as assert from "assert";
import { getScopeData } from "../scope";

describe("Get Sub-tag name Tests", () => {
	it("should return void values when no opening brace found", () => {
		const cursor = "&";
		const text = "Here is your video";
		const position = text.indexOf(cursor);

		assert.deepStrictEqual(getScopeData(text,position),{
			"subTagName": "",
			"isJsonProperty": false,
			"argumentIndex": 0
		});
	});

	it("should extract subtag name from valid syntax", () => {
		const cursor = "&";
		const text = "{reverse: Reverse number lore&}";
		const position = text.indexOf(cursor);

		assert.deepStrictEqual(getScopeData(text,position),{
			"subTagName": "reverse",
			"isJsonProperty": false,
			"argumentIndex": 0
		});
	});

	
	it("should specify if it's in a JSON property (quoted)", () => {
		const cursor = "&";
		const text = `{ "title": ":warning: & Command Error" }`;
		const position = text.indexOf(cursor);

		assert.deepStrictEqual(getScopeData(text,position),{
			"subTagName": "title",
			"isJsonProperty": true,
			"argumentIndex": 0
		});
	});

	it("should return nothing if no colon found", () => {
		const cursor = "&";
		const text = `{user&}`;
		const position = text.indexOf(cursor);

		assert.deepStrictEqual(getScopeData(text,position),{
			"subTagName": "",
			"isJsonProperty": false,
			"argumentIndex": 0
		});
	});

	it("should handle nested braces correctly", () => {
		const cursor = "&";
		const text = `{math: {args} + &1}`;
		const position = text.indexOf(cursor);

		assert.deepStrictEqual(getScopeData(text,position),{
			"subTagName": "math",
			"isJsonProperty": false,
			"argumentIndex": 0
		});
	});

	it("should handle nested braces correctly #2", () => {
		const cursor = "&";
		const text = `{math: {args:&0} + 1}`;
		const position = text.indexOf(cursor);

		assert.deepStrictEqual(getScopeData(text,position),{
			"subTagName": "args",
			"isJsonProperty": false,
			"argumentIndex": 0
		});
	});

	it("should handle whitespace correctly", () => {
		const cursor = "&";
		const text = `{     	user 		 : cakedan& }`; 
		const position = text.indexOf(cursor);

		assert.deepStrictEqual(getScopeData(text,position),{
			"subTagName": "user",
			"isJsonProperty": false,
			"argumentIndex": 0
		});
	});
	
	it("should ignore escape characters", () => {
		const cursor = "&";
		const text = `{indexof: \\{user: & }`; 
		const position = text.indexOf(cursor);

		assert.deepStrictEqual(getScopeData(text,position),{
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

		assert.deepStrictEqual(getScopeData(text,position),{
			"subTagName": "indexof",
			"isJsonProperty": false,
			"argumentIndex": 1
		});
	});

	it("should extract arguments index from valid syntax #2", () => {
		const cursor = "&";
		const text = "{indexof: cake& |cakedan }";
		const position = text.indexOf(cursor);

		assert.deepStrictEqual(getScopeData(text,position),{
			"subTagName": "indexof",
			"isJsonProperty": false,
			"argumentIndex": 0
		});
	});
	
	it("should ignore escaped characters", () => {
		const cursor = "&";
		const text = "{substring: some\\|thing& |4 }";
		const position = text.indexOf(cursor);

		assert.deepStrictEqual(getScopeData(text,position),{
			"subTagName": "substring",
			"isJsonProperty": false,
			"argumentIndex": 0
		});
	});
	
	it("should ignore escaped characters #2", () => {
		const cursor = "&";
		const text = "{substring: some\\|thing |&4}";
		const position = text.indexOf(cursor);

		assert.deepStrictEqual(getScopeData(text,position),{
			"subTagName": "substring",
			"isJsonProperty": false,
			"argumentIndex": 1
		});
	});
	
	it("should ignore the subtags", () => {
		const cursor = "&";
		const text = "{if:{id}|=&|12450435489798456992|then:}";
		const position = text.indexOf(cursor);

		assert.deepStrictEqual(getScopeData(text,position),{
			"subTagName": "if",
			"isJsonProperty": false,
			"argumentIndex": 1
		});
	});
});

