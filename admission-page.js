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
const admissionFormDB = firebase.database().ref("admissionForm")

document.getElementById('admission-form').addEventListener('submit', submitForm)



function submitForm(e) {

    e.preventDefault();

    var name = getElementVal('name');
    if (numberIsPresent(name)) {
        displayError(0, 'name')
        return
    }

    var number = getElementVal('number');
    var email = getElementVal('email');
    var aadharCard = getElementVal('aadhar-card');
    var previousYearGrade = getElementVal('previousYearGrade');
    var gender = getRadioButtonValue('gender')
    var bloodGroup = getElementVal('bloodGroup');
    var address = getElementVal('address');
    var DOB = getElementVal('date-of-birth');
    var religion = getElementVal('religion');

    var caste = getElementVal('caste');
    if (numberIsPresent(caste)) {
        displayError(1, 'caste')
        return
    }

    var nationality = getElementVal('nationality')
    if (numberIsPresent(nationality)) {
        displayError(2, 'nationality')
        return
    }

    var placeOfBirth = getElementVal('place-of-birth');
    if (numberIsPresent(placeOfBirth)) {
        displayError(3, 'place-of-birth')
        return
    }

    var addmissionClass = getElementVal('addmissionClass');

    var date = new Date()
    var time = date.toLocaleString().toLocaleUpperCase();

    writeOnDB(name, number, email, aadharCard, previousYearGrade, gender, bloodGroup, address, DOB, religion, caste, nationality, placeOfBirth, addmissionClass, time)

    generatePDF(name, number, email, aadharCard, previousYearGrade, gender, bloodGroup, address, DOB, religion, caste, nationality, placeOfBirth, addmissionClass)

    window.location.href = 'payment.html';


}

const writeOnDB = (name, number, email, aadharCard, previousYearGrade, gender, bloodGroup, address, DOB, religion, caste, nationality, placeOfBirth, addmissionClass, time) => {

    var newAdmmissionForm = admissionFormDB.push();

    newAdmmissionForm.set({
        name: name,
        number: number,
        email: email,
        aadharCard: aadharCard,
        previousYearGrade: previousYearGrade,
        gender: gender,
        bloodGroup: bloodGroup,
        address: address,
        DOB: DOB,
        religion: religion,
        caste: caste,
        nationality: nationality,
        placeOfBirth: placeOfBirth,
        addmissionClass: addmissionClass,
        time: time
    })

}

//   function store in variable
const getElementVal = (id) => {
    return document.getElementById(id).value;
}

function getRadioButtonValue(name) {

    var radios = document.getElementsByName(name);

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
}

function numberIsPresent(value) {
    var hasNumber = /\d/;
    return hasNumber.test(value);
}


function getUserId() {
    const dbRef = firebase.database().ref("admissionForm");

    dbRef.orderByKey().limitToLast(1).on("child_added", function (snapshot) {
        const userId = snapshot.key;
        return userId;
    });

}

function displayError(index, id) {
    document.getElementsByClassName('error')[index].style.display = "block"
    document.getElementById(id).focus()

    setTimeout(() => {
        document.getElementsByClassName('error')[index].style.display = "none"
    }, 3000)
}



function generatePDF(name, number, email, aadharCard, previousYearGrade, gender, bloodGroup, address, DOB, religion, caste, nationality, placeOfBirth, addmissionClass) {

    // Create the PDF
    const pdf = new jsPDF();

    pdf.text(`Name: ${name}\n\nNumber: ${number}\n\nEmail: ${email}\n\nAadharCard: ${aadharCard}\n\nPreviousYearGrade: ${previousYearGrade}\n\nGender: ${gender}\n\nBloodGroup: ${bloodGroup}\n\nAddress: ${address}\n\nDOB: ${DOB}\n\nReligion: ${religion}\n\nCaste: ${caste}\n\nNationality: ${nationality}\n\nPlaceOfBirth: ${placeOfBirth}\n\nAddmissionClass: ${addmissionClass}`, 10, 10);

    var date = currentDate()

    // Download the PDF
    pdf.save('NG_School_admission_form_'+date+'.pdf');
}

function currentDate() {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const year = today.getFullYear().toString();
    const currentDate = `${day}-${month}-${year}`;
    return currentDate
}