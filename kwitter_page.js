const firebaseConfig = {
      apiKey: "AIzaSyDhS5U0atFntmkgIR47xpCvx_iALgPDlo8",
      authDomain: "ociales-28fdb.firebaseapp.com",
      databaseURL: "https://ociales-28fdb-default-rtdb.firebaseio.com",
      projectId: "ociales-28fdb",
      storageBucket: "ociales-28fdb.appspot.com",
      messagingSenderId: "23676696954",
      appId: "1:23676696954:web:7e4aa0ff37f57022fc7ec3"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
 
      } });  }); }
getData();

function send()
{
      msg = document.getElementById8("msg").value;
      firebase.database(). ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value="";
}