const row_1 = [0,1,2];
const row_2 = [0,1,2];
const row_3 = [0,1,2];
var turn_counter = 0;


function play_again() {
  location.reload();
}

function checkWin() {
  if (row_1[0] == "X" && row_1[1] == "X" && row_1[2] == "X") {
    var display_win = document.getElementById("game_winner");
    display_win.innerHTML = "X wins";
    play_again_button = document.getElementById("play_again");
    play_again_button.setAttribute("style","display: visible;");
  } 
  
  
  else if (row_2[0] == "X" && row_2[1] == "X" && row_2[2] == "X") {
    display_win = document.getElementById("game_winner");
    display_win.innerHTML = "X wins"; 
    play_again_button = document.getElementById("play_again");
    play_again_button.setAttribute("style","display: visible;");
  } 
  else if (row_3[0] == "X" && row_3[1] == "X" && row_3[2] == "X") {
    display_win = document.getElementById("game_winner");
    display_win.innerHTML = "X wins"; 
    play_again_button = document.getElementById("play_again");
    play_again_button.setAttribute("style","display: visible;");
  } 
  
  
  else if (row_1[0] == "X" && row_2[0] == "X" && row_3[0] == "X") {
    display_win = document.getElementById("game_winner");
    display_win.innerHTML = "X wins"; 
    play_again_button = document.getElementById("play_again");
    play_again_button.setAttribute("style","display: visible;");
  } 
  
  else if (row_1[1] == "X" && row_2[1] == "X" && row_3[1] == "X") {
    display_win = document.getElementById("game_winner");
    display_win.innerHTML = "X wins"; 
    play_again_button = document.getElementById("play_again");
    play_again_button.setAttribute("style","display: visible;");
  }
  else if (row_1[2] == "X" && row_2[2] == "X" && row_3[2] == "X") {
    display_win = document.getElementById("game_winner");
    display_win.innerHTML = "X wins"; 
    play_again_button = document.getElementById("play_again");
    play_again_button.setAttribute("style","display: visible;");
  }
  else if (row_1[0] == "X" && row_2[1] == "X" && row_3[2] == "X") {
    display_win = document.getElementById("game_winner");
    display_win.innerHTML = "X wins"; 
    play_again_button = document.getElementById("play_again");
    play_again_button.setAttribute("style","display: visible;");
  }
  else if (row_3[2] == "X" && row_2[1] == "X" && row_1[0] == "X") {
    display_win = document.getElementById("game_winner");
    display_win.innerHTML = "X wins";
    play_again_button = document.getElementById("play_again");
    play_again_button.setAttribute("style","display: visible;");
  }
  else if (row_1[0] == "O" && row_1[1] == "O" && row_1[2] == "O") {
    display_win = document.getElementById("game_winner");
    display_win.innerHTML = "O wins";
    play_again_button = document.getElementById("play_again");
    play_again_button.setAttribute("style","display: visible;");
  }
  else if (row_2[0] == "O" && row_2[1] == "O" && row_2[2] == "O") {
    display_win = document.getElementById("game_winner");
    display_win.innerHTML = "O wins"; 
    play_again_button = document.getElementById("play_again");
    play_again_button.setAttribute("style","display: visible;");
  }
  else if (row_3[0] == "O" && row_3[1] == "O" && row_3[2] == "O") {
    display_win = document.getElementById("game_winner");
    display_win.innerHTML = "O wins"; 
    play_again_button = document.getElementById("play_again");
    play_again_button.setAttribute("style","display: visible;");
  }
  else if (row_1[0] == "O" && row_2[0] == "O" && row_3[0] == "O") {
    display_win = document.getElementById("game_winner");
    display_win.innerHTML = "O wins"; 
    play_again_button = document.getElementById("play_again");
    play_again_button.setAttribute("style","display: visible;");
  }
  else if (row_1[1] == "O" && row_2[1] == "O" && row_3[1] == "O") {
    display_win = document.getElementById("game_winner");
    display_win.innerHTML = "O wins";
    play_again_button = document.getElementById("play_again");
    play_again_button.setAttribute("style","display: visible;");
  }
  else if (row_1[2] == "O" && row_2[2] == "O" && row_3[2] == "O") {
    display_win = document.getElementById("game_winner");
    display_win.innerHTML = "O wins";
    play_again_button = document.getElementById("play_again");
    play_again_button.setAttribute("style","display: visible;");
  }
  else if (row_1[0] == "O" && row_2[1] == "O" && row_3[2] == "O") {
    display_win = document.getElementById("game_winner");
    display_win.innerHTML = "O wins";
    play_again_button = document.getElementById("play_again");
    play_again_button.setAttribute("style","display: visible;");
  }
  else if (row_3[2] == "O" && row_2[1] == "O" && row_1[0] == "O") {
    display_win = document.getElementById("game_winner");
    display_win.innerHTML = "O wins";
    play_again_button = document.getElementById("play_again");
    play_again_button.setAttribute("style","display: visible;");
  }
    
  else {
    
    turn_counter = turn_counter + 1;
    
    if (turn_counter == 9) {
      display_win = document.getElementById("game_winner");
      display_win.innerHTML = "Tie";
      play_again_button = document.getElementById("play_again");
      play_again_button.setAttribute("style","display: visible;");
      
    }
    
    
  }

  
  
  
  
}
function move(a) {
  var message_to_user = document.getElementById("user_turn");
  var user_turn = message_to_user.innerHTML;
  console.log("");
  var turn = user_turn.slice(0,1);
  if (a > 0 && a < 4) {
    row_1[a-1] = turn;
  }
  if (a > 3 && a < 7)  {
    row_2[a-4] = turn;
  }
  if (a > 6 && a < 10)  {
    row_3[a-7] = turn;
  }
  if (turn == "X") {
    user_turn = "O's turn";
    message_to_user.innerHTML =  user_turn; 
  }
  else {
    user_turn = "X's turn";
    message_to_user.innerHTML =  user_turn; 
  }
  button_id = "button_" + a.toString();
  position_selected = document.getElementById(button_id);
  position_selected.innerHTML = turn;
  console.log(row_1);
  console.log(row_2);
  console.log(row_3);
  checkWin();
  
  
  
    
  
}
 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAuth, onAuthStateChanged, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
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
  onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log("User is signed in");
    console.log(uid);
    // ...
  } else {
    console.log("User is signed out");
    // User is signed out
    // ...
  }
});

signInAnonymously(auth)
  .then(() => {
    // Signed in..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });


  
  
