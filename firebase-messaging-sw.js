importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging-compat.js');

// Your Firebase project configuration
firebase.initializeApp({
  apiKey: "AIzaSyC5oq9fyPeoo8jVU-N07gYhjt2kFEBGqA8",
  authDomain: "arc-by-insight.firebaseapp.com",
  projectId: "arc-by-insight",
  storageBucket: "arc-by-insight.appspot.com",
  messagingSenderId: "1073428960179",
  appId: "1:1073428960179:web:c61897786f1d2ba05131c6",
  measurementId: "G-47T814R2SK"
});

// Initialize Firebase with the configuration
const messaging = firebase.messaging();
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.data.displayName + ' in ' + payload.data.channel_name;
  const notificationOptions = {
    body: content,
    fcm_options: {
      link: "https://jcamille2023.github.io/arc/channel?channel_id=" + payload.data.channelId,
    },
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
