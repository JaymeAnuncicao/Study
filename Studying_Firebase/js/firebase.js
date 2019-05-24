var app_fireBase = {};
(function () {
    var firebaseConfig = {
        apiKey: "AIzaSyByLAxX2J-c4RkbBQmMIwTxCXKSFMV9wlc",
        authDomain: "teste-mei.firebaseapp.com",
        databaseURL: "https://teste-mei.firebaseio.com",
        projectId: "teste-mei",
        storageBucket: "teste-mei.appspot.com",
        messagingSenderId: "252021094868",
        appId: "1:252021094868:web:bbe8d510f990b383"
    };

    firebase.initializeApp(firebaseConfig);
    
    app_fireBase = firebase;
})()