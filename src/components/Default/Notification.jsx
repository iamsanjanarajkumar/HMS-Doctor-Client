import React,{ useEffect } from 'react'

const Notification = () => {
    useEffect(() => {
        async function subscribeToPushNotifications() {
          try {
            const registration = await navigator.serviceWorker.register('/service-worker.js');
            const subscription = await registration.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: 'BCbsyUcnfCel5E3m4UEW7-GOIZZsUdVLJPvQg1OvmCADpPFMROU4h25Uu-nVnL_bJwaJPPNFBEG_bu-97C8qUjs'
            });
    
            // Send subscription data to server
            await sendSubscriptionToServer(subscription);
            
            console.log('Subscribed to push notifications successfully!');
          } catch (error) {
            console.error('Error subscribing to push notifications:', error);
          }
        }
    
        subscribeToPushNotifications();
      }, []);
    
      async function sendSubscriptionToServer(subscription) {
        try {
          const response = await fetch('/subscribe', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(subscription),
          });
    
          if (!response.ok) {
            console.error('Failed to send subscription data to server:', response.statusText);
          }
        } catch (error) {
          console.error('Error sending subscription data to server:', error);
        }
      }
      
    
      return (
        <div className="App">
          <h1>Doctor Appointment Booking App</h1>
          {/* Your app content */}
        </div>
      );
    }

export default Notification
