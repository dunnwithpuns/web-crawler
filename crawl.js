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

}
