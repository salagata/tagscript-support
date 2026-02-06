import * as assert from "assert";
import { getSubTagName } from "../subtag";

describe("getSubTagName Tests", () => {
	it("should return empty string for cursor out of bounds", () => {
		const result: string = getSubTagName("test", -1);
		assert.strictEqual(result, "");
	});

	it("should return empty string when no opening brace found", () => {
		const result: string = getSubTagName("no braces here", 5);
		assert.strictEqual(result, "");
	});

	it("should extract subtag name from valid syntax", () => {
		const text: string = "{mySubtag: value}";
		const result: string = getSubTagName(text, 10);
		assert.strictEqual(result, "mySubtag");
	});

	it("should return empty string for JSON property (quoted)", () => {
		const text: string = '{"property": value}';
		const result: string = getSubTagName(text, 10);
		assert.strictEqual(result, "");
	});

	it("should return empty string when no colon found", () => {
		const text: string = "{noColon}";
		const result: string = getSubTagName(text, 5);
		assert.strictEqual(result, "");
	});

	it("should handle nested braces correctly", () => {
		const text: string = "{outer: {inner: val} outer}";
		const result: string = getSubTagName(text, 20);
		assert.strictEqual(result, "outer");
	});

	it("should handle whitespace correctly", () => {
		const text: string = "{  myTag  : value}";
		const result: string = getSubTagName(text, 10);
		assert.strictEqual(result, "myTag");
	});
	
	it("should handle whitespace correctly", () => {
		const text: string = "{  myTag  : value}";
		const result: string = getSubTagName(text, 10);
		assert.strictEqual(result, "myTag");
	});
});

