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
    
    const registerName = document.querySelector("#registerName")
    const registeremail = document.querySelector("#registeremail");
    const registerpassword = document.querySelector("#registerpassword");

    // const loginName = document.querySelector("#loginName")
    // const loginemail = document.querySelector("#loginmail");
    // const loginpassword = document.querySelector("#loginpassword");

    const btnSave = document.querySelector("#btnSave");
    // const btnLogin = document.querySelector("#btnLogin");
    // const btnLogout = document.querySelector("#btnLogout");
    var name = registerName.value;
   
    const docRef = firestore.collection("samples").doc();


    // btnLogin.addEventListener("click", e => {
    //     const remail = loginemail.value;
    //     const rpass = loginpassword.value;
    //     // const rname = loginName.value;
    //     const auth = firebase.auth();
    //     const promise = auth.signInWithEmailAndPassword(remail, rpass);
    //     promise
    //     .then(
    //         console.log("You are logged!") , 
    //         alert(rpass)
    //         // window.location ="adm.html"
    //     )
    //     .catch(e => console.log(e.message));
        
    // });


    btnSave.addEventListener("click", e => {
        const lemail = registeremail.value;
        const lpass = registerpassword.value;
        const lname = registerName.value;
        docRef.set({
            Name: lname,
            Email: lemail,
            Password: lpass
            
        }).then(function () {
            console.log("User saved!!");
        }).catch(function (error) {
            console.log("Got an error: ", error);
        });
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(lemail, lpass);
        promise.catch(e => console.log(e.message));
    });

    // btnLogout.addEventListener("click", e=> {
    //     firebase.auth().signOut();
    // });


    // firebase.auth().onAuthStateChanged(firebaseUser =>{
    //     if(firebaseUser){
    //         console.log(firebaseUser);
    //         btnLogout.classList.remove("d-none");
    //     }else{
    //         console.log("not logged in");
    //         btnLogout.classList.add("d-none")
    //     }
    // });
    // var user = firebase.auth().currentUser();   

    // if(user){
    //     console.log(firebaseUser);
    //     btnLogout.classList.remove("d-none");
    // }else{
    //     console.log("not logged in");
    //     btnLogout.classList.add("d-none")
    // }




}());
