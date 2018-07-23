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
