import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
import { getDatabase, set, ref, onValue, get, child } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";

 const firebaseConfig = {
    apiKey: "AIzaSyCqUDOyX-OrrrncNv5uABW8hiLndPsMDMg",
    authDomain: "insight-34bc8.firebaseapp.com",
    projectId: "insight-34bc8",
    storageBucket: "insight-34bc8.appspot.com",
    messagingSenderId: "652635905647",
    appId: "1:652635905647:web:05a5378b1f51f58a6d779a"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

function logout() {
  signOut(auth).then(() => {
  console.log("User is signed out.");
  window.location.href = "login.html";
  }).catch((error) => {
  // An error happened.
  });
}
window.logout = logout;
var table = document.getElementById("time-table");
console.log(table);
function add_times_to_table() {
var am_or_pm;
var b;
for(let n = 5; n < 23; n++) {
  // create the row
  let tr = document.createElement("tr");
  // create the cell
  let td = document.createElement("td");
  // convert n to a string for the id purposes
  
  // set the id
  td.setAttribute("id", b + "00");
  // set the contents of the cell to the time
  let p = document.createElement("p");
  if(n < 12) {
    am_or_pm = "am";
    b = n.toString();
  }
  else {
  	am_or_pm = "pm";
    if (n == 12) {
    b = n.toString();
    }
    else {
    n = n - 12;
    b = n.toString();
    }
  }
  
  p.textContent = b + ":00" + am_or_pm;
  td.appendChild(p);
  // Add the cell to the row
  tr.appendChild(td);
  // Add the row to the table
  
  table.appendChild("tr");
  
  // create the row
  let tr_2 = document.createElement("tr");
  // create the cell
	let td_2 = document.createElement("td");
  // convert n to a string for the id purposes
  
  // set the id
  td_2.setAttribute("id", b + "10");
  // set the contents of the cell to the time
  let p_2 = document.createElement("p");
  
  p_2.textContent = b + ":10" + am_or_pm;
  td_2.appendChild(p);
  // Add the cell to the row
  tr_2.appendChild(td);
  // Add the row to the table
  table.appendChild("tr_2");
  
  // create the row
  let tr_3 = document.createElement("tr");
  // create the cell
	let td_3 = document.createElement("td");
  // convert n to a string for the id purposes
  
  // set the id
  td_3.setAttribute("id", b + "20");
  // set the contents of the cell to the time
  let p_3 = document.createElement("p");
  
  p_3.textContent = b + ":20" + am_or_pm;
  td_3.appendChild(p);
  // Add the cell to the row
  tr_3.appendChild(td);
  // Add the row to the table
  table.appendChild("tr_3");

 // create the row
  let tr_4 = document.createElement("tr");
  // create the cell
	let td_4 = document.createElement("td");
  // convert n to a string for the id purposes
  
  // set the id
  td_4.setAttribute("id", b + "30");
  // set the contents of the cell to the time
  let p_4 = document.createElement("p");
  
  p_4.textContent = b + ":30" + am_or_pm;
  td_4.appendChild(p);
  // Add the cell to the row
  tr_4.appendChild(td);
  // Add the row to the table
  table.appendChild("tr_4");
  
  // create the row
  let tr_5 = document.createElement("tr");
  // create the cell
	let td_5 = document.createElement("td");
  // convert n to a string for the id purposes
  
  // set the id
  td_5.setAttribute("id", b + "40");
  // set the contents of the cell to the time
  let p_5 = document.createElement("p");
  
  p_5.textContent = b + ":40" + am_or_pm;
  td_5.appendChild(p);
  // Add the cell to the row
  tr_5.appendChild(td);
  // Add the row to the table
  table.appendChild("tr_5");
  
  // create the row
  let tr_6 = document.createElement("tr");
  // create the cell
	let td_6 = document.createElement("td");
  // convert n to a string for the id purposes
  
  // set the id
  td_6.setAttribute("id", b + "50");
  // set the contents of the cell to the time
  let p_6 = document.createElement("p");
  
  p_6.textContent = b + ":50" + am_or_pm;
  td_6.appendChild(p);
  // Add the cell to the row
  tr_6.appendChild(td);
  // Add the row to the table
  table.appendChild("tr_4");
}

}
window.add_times_to_table = add_times_to_table;
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    console.log(user);
    const uid = user.uid;
    document.getElementById("username").innerHTML = user.displayName;
    document.getElementById("user-greeting").innerHTML = "Hi, " + user.displayName + "!";
    add_times_to_table();

    
    
    // ...
  } else {
    window.location.href = "index.html";
    // ...
  }
});

