(function () {
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
    const firestore = firebase.firestore();
    
    const docRef = firestore.doc("samples/users");
    const txtName = document.querySelector("#latestName")
    const txtemail = document.querySelector("#latestemail");
    const txtpassword = document.querySelector("#latestpassword");
    const btnSave = document.querySelector("#btnSave");
    const btnLogin = document.querySelector("#btnLogin");
    const btnLogout = document.querySelector("#btnLogout");


    btnLogin.addEventListener("click", e => {
        const email = txtemail.value;
        const pass = txtpassword.value;
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise
        .then(console.log("You are logged!"))
        .catch(e => console.log(e.message));
    });


    btnSave.addEventListener("click", e => {
        const email = txtemail.value;
        const pass = txtpassword.value;
        const name = txtName.value;
        docRef.set({
            Name: name,
            Email: email,
            Password: pass
            
        }).then(function () {
            console.log("User saved!!");
        }).catch(function (error) {
            console.log("Got an error: ", error);
        });
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });

    btnLogout.addEventListener("click", e=> {
        firebase.auth().signOut();
    });


    firebase.auth().onAuthStateChanged(firebaseUser =>{
        if(firebaseUser){
            console.log(firebaseUser);
            btnLogout.classList.remove("d-none");
        }else{
            console.log("not logged in");
            btnLogout.classList.add("d-none")
        }
    });




}());


