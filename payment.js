setTimeout(() => {
    document.getElementById('msg').style.display = "none"
}, 3000)


const firebaseConfig = {
    apiKey: "AIzaSyD3LvpZfVRwq1TAhAmEjExYxL8CyZ98I78",
    authDomain: "school-website-623f0.firebaseapp.com",
    databaseURL: "https://school-website-623f0-default-rtdb.firebaseio.com",
    projectId: "school-website-623f0",
    storageBucket: "school-website-623f0.appspot.com",
    messagingSenderId: "662922151031",
    appId: "1:662922151031:web:ef232cfb22dff56a873272"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database
var database = firebase.database();


let admissionFormRef = firebase.database().ref('admissionForm');

admissionFormRef.orderByChild("timestamp").limitToLast(1).on("child_added", function (snapshot) {
    var admissionFormData = snapshot.val();

    document.getElementById('name').value = admissionFormData.name;
    console.log(admissionFormData.name);
    document.getElementById('email').value = admissionFormData.email;
    document.getElementById('phone').value = admissionFormData.number;
});


document.querySelector('.paynow').addEventListener('click', ()=>{
    window.location.href = "succesful-payment-message.html"
})