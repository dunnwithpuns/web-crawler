export { normalizeURL, getURLsFromHTML };
import { URL } from 'node:url';
import { JSDOM } from 'jsdom';

function normalizeURL(URLstring) {


	const fullURL = new URL(URLstring);

	if (fullURL.pathname.endsWith('/')) {
		fullURL.pathname = fullURL.pathname.replace(/\/+$/, '');
	}

	return (fullURL.hostname + fullURL.pathname)

}

function getURLsFromHTML(htmlBody, baseURL) {

	const domObj = new JSDOM(htmlBody, {
		url: baseURL,
	})
	const anchors = domObj.window.document.querySelectorAll('a')
	
	const links = []
	for (let anchor of anchors) {
		const search = anchor.search
		const href = anchor.getAttribute('href')
		links.push(`${baseURL}${href}`)
	}
	
	return links
}

function crawlPage(baseURL) {
	const response = await fetch(baseURL, settings)
}
