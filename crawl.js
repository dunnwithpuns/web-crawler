export { normalizeURL };
import { URL } from 'node:url';

function normalizeURL(URLstring) {


	const fullURL = new URL(URLstring);

	if (fullURL.pathname.endsWith('/')) {
		fullURL.pathname = fullURL.pathname.replace(/\/+$/, '');
	}

	return (fullURL.hostname + fullURL.pathname)

}

