const firebaseConfig = {
    apiKey: "AIzaSyD3LvpZfVRwq1TAhAmEjExYxL8CyZ98I78",
    authDomain: "school-website-623f0.firebaseapp.com",
    databaseURL: "https://school-website-623f0-default-rtdb.firebaseio.com",
    projectId: "school-website-623f0",
    storageBucket: "school-website-623f0.appspot.com",
    messagingSenderId: "662922151031",
    appId: "1:662922151031:web:ef232cfb22dff56a873272"
  };


//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your DB
const admissionFormDB = firebase.database().ref("contactUsForm")

document.getElementById('contact-form').addEventListener('submit', submitForm)

var feedbackMsg = document.getElementById('feedback-msg')


function submitForm(e) {

    e.preventDefault();

    

    var name = getElementVal('name');
    if(numberIsPresent(name)){
        alert('name cannot contain number');
        return;
    }

    var email = getElementVal('email');

    var subject = getElementVal('subject');
    if(numberIsPresent(subject)){
        alert('subject cannot contain number');
        return;
    }

    var message = getElementVal('message');

    feedbackMsg.style.display = "block"
    
    setTimeout(()=>{
        feedbackMsg.style.display = "none"
    }, 3333)

    writeOnDB(name, email, subject, message)   

}

const writeOnDB = (name, email, subject, message) => {

    var newAdmmissionForm = admissionFormDB.push();

    newAdmmissionForm.set({
        name: name,
        email: email,
        subject: subject,
        message: message
    })
}

//   function store in variable
const getElementVal = (id) => {
    return document.getElementById(id).value;
}

function numberIsPresent(value){
    var hasNumber = /\d/;

    return hasNumber.test(value);
}