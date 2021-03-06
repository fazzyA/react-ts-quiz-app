let cacheData = "appV1";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/main.chunk.js',
                '/static/js/0.chunk.js',
                '/static/js/main.0520266b.chunk.js',
                '/static/js/1.chunk.js',
                '/static/js/bundle.js',
                '/static/css/main.chunk.css',
                '/bootstrap.min.css',
                'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple',
                'https://fonts.googleapis.com/css2?family=Catamaran:wght@700&family=Fascinate+Inline&display=swap',
                '/index.html',
                '/'
            ])
        })
    )
})
this.addEventListener("fetch", (event) => {


     console.warn("url",event.request.url)

     if (event.request.url === "http://localhost:3000/" && navigator.onLine) {
      event.waitUntil(
          this.registration.showNotification("Internet", {
              body: "application is working in online mode",
          })
      )
  }

    if (!navigator.onLine) {
        if (event.request.url === "http://localhost:3000/") {
            event.waitUntil(
                this.registration.showNotification("Internet", {
                    body: "application is working in offline mode",
                })
            )
        }
        event.respondWith(
            caches.match(event.request).then((resp) => {
                if (resp) {
                    return resp
                }
                let requestUrl = event.request.clone();
                fetch(requestUrl)
            })
        )
    }
}) 