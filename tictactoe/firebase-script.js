  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDkf2Xme8vIYwSjNgpikMPlHETkteqEsfI",
    authDomain: "tic-tac-toe-online-108ca.firebaseapp.com",
    databaseURL: "https://tic-tac-toe-online-108ca-default-rtdb.firebaseio.com",
    projectId: "tic-tac-toe-online-108ca",
    storageBucket: "tic-tac-toe-online-108ca.appspot.com",
    messagingSenderId: "971654471519",
    appId: "1:971654471519:web:3e05a829c5db81a4f920ea"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);