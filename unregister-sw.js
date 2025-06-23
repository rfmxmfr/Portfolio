// Unregister all service workers
navigator.serviceWorker.getRegistrations().then(registrations => {
  for (const registration of registrations) {
    registration.unregister();
    console.log('Unregistered service worker:', registration);
  }
  
  // Clear all caches
  caches.keys().then(cacheNames => {
    for (const cacheName of cacheNames) {
      caches.delete(cacheName);
      console.log('Deleted cache:', cacheName);
    }
  });
  
  // Force reload the page
  window.location.reload(true);
});
