import { test, expect } from "@jest/globals";
import { normalizeURL } from "./crawl.js";

test('inputs 4 different paths, should equal same normalized path', () => {
	expect(normalizeURL('http://blog.boot.dev/path')).toBe('blog.boot.dev/path');
})
