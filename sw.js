self.addEventListener('push', (event) => {
  console.log("push received.", event.data.text());
    event.waitUntil(self.registration.showNotification('Hello world!', {}));
});
