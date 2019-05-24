var mainApp = {};

(function () {
    var firebase = app_fireBase;
    const nameElement = document.querySelector("#nameElement")
    var Lemail = document.querySelector("#loginmail").value;
    var Lpass = document.querySelector("#loginpassword").value;
    const btnLogin = document.querySelector("#btnLogin");



    btnLogin.addEventListener("click", e => {
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(Lemail, Lpass);
        promise.then(
            console.log("Login done!!"),
            window.location.replace("adm.html")
        ).catch(e => {
            console.log(e.message);
        })
    })

    // firebase.auth().onAuthStateChanged(function(user) {
    //     var uid = null
        
    //     if (user) {
    //       // User is signed in.
    //       uid = user.uid;
    //       uemail = user.email;
    //       nameElement.innerHTML = uemail ;
    //     }else{
    //         uid = null; 
    //         window.location.replace("index.html")
    //     }
    // });

    // function logout() {
    //     firebase.auth().signOut()
    // }

    // mainApp.logout = logout;

})()