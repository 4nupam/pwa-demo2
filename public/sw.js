let cacheData = "appV1";

// Install event: Cache essential assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      return cache.addAll([
        "/", // Root
        "/index.html",
        "/logo192.png",
        "/offline.html", // Optional: Fallback page
      ]);
    })
  );
});

// Fetch event: Intercept requests
self.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    // If offline and specific script is being requested
    if (event.request.url.includes("main.chunk.js")) {
      event.waitUntil(
        self.registration.showNotification("Internet Issue", {
          body: "Internet not working. You are viewing cached version.",
          icon: "/logo192.png",
        })
      );
    }

    // Serve from cache when offline
    event.respondWith(
      caches.match(event.request).then((cachedRes) => {
        if (cachedRes) {
          return cachedRes;
        }

        // If not found in cache, try to fetch from network
        return fetch(event.request).catch(() => {
          // Optionally show fallback page for navigations
          if (event.request.mode === "navigate") {
            return caches.match("/offline.html");
          }
        });
      })
    );
  }
});
