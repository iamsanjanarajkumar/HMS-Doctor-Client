console.log('Service Worker Loaded...');

 self.addEventListener('push', e=>{
    const data = e.data.json();
    console.log('Push Received')
    self.registration.showNotification(data.title,{
        body: 'Your appointment is coming up soon!',
        icon: 'https://example.com/icon.png'
    })

})
