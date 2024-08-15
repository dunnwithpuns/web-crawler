import { normalizeURL } from './crawl.js'
import { test, expect } from '@jest/globals'

test('inputs 4 different paths, should equal same normalized path', () => {

	const input = 'https://blog.boot.dev/path/'
	const result = normalizeURL(input)
	const expected = 'blog.boot.dev/path'
	expect(result).toEqual(expected);
})
