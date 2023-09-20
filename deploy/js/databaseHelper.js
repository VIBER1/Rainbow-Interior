const firebaseConfig = {
    apiKey: "AIzaSyA7pRoMu6RP9PpMXevUY6DcdY_Nn4f4oXo",
    authDomain: "rainbow-interior.firebaseapp.com",
    databaseURL: "https://rainbow-interior-default-rtdb.firebaseio.com",
    projectId: "rainbow-interior",
    storageBucket: "rainbow-interior.appspot.com",
    messagingSenderId: "802481004092",
    appId: "1:802481004092:web:e50642797b5f8fd63e6d39"
  };

//initialise firebase
  firebase.initializeApp(firebaseConfig);


  // reference


 var ContactFormdb =  firebase.database().ref('ContactForm');

 document.getElementById('contactForm').addEventListener('submit',subitForm);


 function subitForm(e){
  e.preventDefault();

  var name = getElementVal("name");
  var phone = getElementVal("phone");
  var email = getElementVal("email");
  var msg = getElementVal("msg")

saveContact(name,phone,email,msg);

// enable alert

document.getElementById('alert').style.display = "block";


// remove the alert 
setTimeout(() =>{
    document.getElementById('alert').style.display = "none"; 
}, 10000 );

document.getElementById('contactForm').reset();

 } 

 const saveContact = (name,phone,email,msg) =>{
    var newContactForm = ContactFormdb.push();

    newContactForm.set({

         name: name,
         phone:phone,
         email: email,
         msg : msg,

    });
 }


 const getElementVal = (id) =>{
    return document.getElementById(id).value;
 }