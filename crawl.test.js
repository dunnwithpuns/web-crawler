import { normalizeURL, getURLsFromHTML } from './crawl.js'
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

test('test if whole url can be normalized', () => {

	const input = 'https://user:pass@blog.boot.dev/path?query=string#hash'
	const result = normalizeURL(input)
	const expected = 'blog.boot.dev/path'
	expect(result).toEqual(expected)
})

test('test that the relative URLs are converted to absolute URLs', () => {

	const baseURL = 'https://boot.dev'
	const baseHTML = '<html>\n<body>\n<a href="/xyz"><span>Learn xyz</span></a>\n</body>\n</html>'
	const result = getURLsFromHTML(baseHTML, baseURL)
	const expected = ['https://boot.dev/xyz']
	expect(result).toEqual(expected)
})

test('test to find *all* the anchor elements in a body of HTML', () => {

	const baseURL = 'http://boot.dev'
	const baseHTML = '<html>\n<body>\n<div><a href="/xyz"><span>practice reference url line</span></a></div><div><a href="/abc"></a></div>'
	const result = getURLsFromHTML(baseHTML, baseURL)
	const expected = ['http://boot.dev/xyz', 'http://boot.dev/abc']
	expect(result).toEqual(expected)
})

test('test absolute URLs as href elements', () => {

})
