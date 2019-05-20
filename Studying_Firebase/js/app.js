
// codigo do projeto: teste-mei
// codigo do documento: 7lMLHmuHzZVRkb1BSl3w

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyByLAxX2J-c4RkbBQmMIwTxCXKSFMV9wlc",
    authDomain: "teste-mei.firebaseapp.com",
    databaseURL: "https://teste-mei.firebaseio.com",
    projectId: "teste-mei",
    storageBucket: "teste-mei.appspot.com",
    messagingSenderId: "252021094868",
    appId: "1:252021094868:web:bbe8d510f990b383"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();


const docRef = firestore.doc("samples/names");
const outputheader = document.querySelector("#nameOutput");
const inputTextField = document.querySelector("#latestName");
const saveButton  = document.querySelector("#saveButton");
const loadButton = document.querySelector("#loadButton");

saveButton.addEventListener("click", function () {
    const textToSave = inputTextField.value;
    console.log("The name saved is " + textToSave + " to firestore");
    docRef.set({
        SaveYourName: textToSave
    }).then(function () {
        console.log("Name saved!!");
    }).catch(function (error) {
        console.log("Got an error: ", error);
    });
})

loadButton.addEventListener("click", function () {
    docRef.get().then(function (doc) {
        if(doc && doc.exists){
            const myData = doc.data();
            outputheader.innerHTML = "Name saved: " + myData.SaveYourName;
        }
    }).catch(function (error){
        console.log("Got a error on print: ", error);
    });
});

getRealTimeUpdates = function () {
    docRef.onSnapshot(function (doc) {
        if(doc && doc.exists){
            const myData = doc.data();
            outputheader.innerHTML = "Name saved: " + myData.SaveYourName;
        }
    });
}

getRealTimeUpdates();