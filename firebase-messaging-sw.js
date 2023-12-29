import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getMessaging, onBackgroundMessage } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-messaging.js';

// Your Firebase project configuration
const firebaseApp = initializeApp({
  apiKey: "AIzaSyC5oq9fyPeoo8jVU-N07gYhjt2kFEBGqA8",
  authDomain: "arc-by-insight.firebaseapp.com",
  projectId: "arc-by-insight",
  storageBucket: "arc-by-insight.appspot.com",
  messagingSenderId: "1073428960179",
  appId: "1:1073428960179:web:c61897786f1d2ba05131c6",
  measurementId: "G-47T814R2SK"
});

// Initialize Firebase with the configuration
const messaging = getMessaging(firebaseApp);
onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.data.displayName + ' in ' + payload.data.channel_name;
  const notificationOptions = {
    body: payload.data.content,  // Replace 'content' with the actual content variable
    fcm_options: {
      link: "https://jcamille2023.github.io/arc/channel?channel_id=" + payload.data.channelId,
    },
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
