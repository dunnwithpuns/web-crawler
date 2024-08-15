export { normalizeURL };

function normalizeURL(URLstring) {

	let URL = URLstring


	if (URL.endsWith('/')) {
		URL = URL.slice(0, -1)
	}

	if (URL.startsWith('https://')) {
		URL = URL.slice(8)

	} else if (URL.startsWith('http://')) {
		URL = URL.slice(7)

	} else {
		throw Error('Not a valid http or https link')
	}

	return URL
}

