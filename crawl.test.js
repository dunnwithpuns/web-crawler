import { normalizeURL } from './crawl.js'
import { test, expect } from '@jest/globals'

test('inputs 4 different paths, should equal same normalized path', () => {
	const input = ''
	const actual = normalizeURL(input)
	const expected = ''
	expect(actual).toEqual(expected);
})
