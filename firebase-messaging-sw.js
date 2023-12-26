import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js';
import { getMessaging, onBackgroundMessage, onMessage } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-messaging-sw.js';

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5oq9fyPeoo8jVU-N07gYhjt2kFEBGqA8",
  authDomain: "arc-by-insight.firebaseapp.com",
  projectId: "arc-by-insight",
  storageBucket: "arc-by-insight.appspot.com",
  messagingSenderId: "1073428960179",
  appId: "1:1073428960179:web:c61897786f1d2ba05131c6",
  measurementId: "G-47T814R2SK"
};

// Initialize Firebase with the configuration
const app = initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging
const messaging = getMessaging(app);

onMessage(messaging, (payload) => {
  console.log('Foreground message received:', payload);

  // Customize the way you handle the message when the app is in the foreground
  // For example, display a notification, update UI, etc.
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'icon.png', // Customize with the path to your app's icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Event listener for handling background messages
onBackgroundMessage(messaging, (payload) => {
  console.log('[firebase-messaging-sw.js] Received background message:', payload);

  // Customize the notification options
  const notificationTitle = 'New message';
  const notificationOptions = {
    body: payload.data.body,
    icon: 'icon.png', // Customize with the path to your app's icon
  };

  // Show the notification
  return self.registration.showNotification(notificationTitle, notificationOptions);
});
