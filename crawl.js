export { normalizeURL };

function normalizeURL(URLstring) {

	let URL = URLstring


	if (
		URL.startsWith('http:///') ||
		URL.startsWith('https:///') ||
		URL.startsWith('http://.') ||
		URL.startsWith('https://.') ||
		URL.startsWith('http://,') ||
		URL.startsWith('https://,')
	) {
		throw new Error('invalid http/https URL')
	}
	if (URL.startsWith('https://')) {
		URL = URL.slice(8)

	} else if (URL.startsWith('http://')) {
		URL = URL.slice(7)

	} else {
		throw new Error('URL is already normalized')
	}

	if (URL.endsWith('/')) {
		URL = URL.replace(/\/+$/, '')
	}

	if (URL === '') {
		throw new Error('invalid URL: scheme only')
	}

	return URL
}

