import { normalizeURL } from './crawl.js'
import { test, expect } from '@jest/globals'

test('inputs 4 different paths, should equal same normalized path', () => {

	const input = [
		'https://blog.boot.dev/path/',
		'https://blog.boot.dev/path',
		'http://blog.boot.dev/path/',
		'http://blog.boot.dev/path',
	]

	const actual = []

	for (let i of input) {

		let result = normalizeURL(i)

		if (actual.includes(result)) {
			continue
		}

		actual.push(result)
	}

	const expected = ['blog.boot.dev/path']
	expect(actual).toEqual(expected);
})

test('test if invalid URL error is throwing correctly', () => {

	const input = '.blog.boot.dev/path'
	expect(() => normalizeURL(input)).toThrow()
})
