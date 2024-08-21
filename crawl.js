export { normalizeURL, getURLsFromHTML, crawlPage };
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
		const href = anchor.getAttribute('href')

		if (href.includes(http)) {
			links.push(href)
		} else {
			links.push(`${baseURL}${href}`)
		}
	}

	return links
}

function crawlPage(baseURL) {

	try {
		fetch(baseURL)

			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error ${response.status}`);
				}
				return response.text
			})

			.then((text) => {
				htmlBody = text
			})
			.catch((error) => {
				throw new Error(`error fetching body: ${error}`)
			})
	} catch (err) {
		console.log(err.message)
	}
}
