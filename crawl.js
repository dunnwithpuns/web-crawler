export { normalizeURL };

function normalizeURL(URLstring) {

	let URL = URLstring


	if (URL.endsWith('/')) {
		URL = URL.slice(0, -1)
		console.log(URL)
	}

	if (URL.startsWith('https://')) {
		URL = URL.slice(8)
		console.log(URL)

	} else if (URL.startsWith('http://')) {
		URL = URL.slice(7)
		console.log(URL)
	}

	return URL
}

