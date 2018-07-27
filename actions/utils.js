import fetch from 'node-fetch'

// A bit of curry to enable caching.

export const get = ( url ) => {
	return fetch( url, {
		cache: 'force-cache',
		mode: 'cors',
	} )
}
