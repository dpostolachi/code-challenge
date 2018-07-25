const cacheable = [
  '/public/vendor.js',
  '/public/client.js',
  '/'
]

this.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('v0').then((cache) => {
            return cache.addAll(cacheable)
        }).catch((e) => {
            console.log('Cache fail', e)
        })
    )
})

this.addEventListener('fetch', (evt) => {

    const request = evt.request

    if ( request.method === 'GET' && (
            request.url.indexOf('https://rest.bandsintown.com/') > -1 ||
            request.url.indexOf('amazonaws.com') > -1
        )
    ) {
        evt.respondWith(
            caches.match( evt.request )
            .then( ( resp ) => {

				const newRequest = fetch( request ).then( resp => {
					caches.open("v0").then(cache => {
						cache.put(request, resp.clone());
						return;
					});
					return resp.clone();
				})

                if ( resp ) {
					// It it's in cache, return from cache and update cache
                    return resp
                } else {
                    // If it's not fetch and cache it
                    return newRequest
                }
            } )
        )
    } else {
        return
    }
})
