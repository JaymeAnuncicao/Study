var mainApp = {};

var mainStore = {};

(function () {
    var firebase = app_fireBase;
    var firestore = app_firestore;

    const nameElement = document.querySelector("#nameElement");

    const docData = firestore.doc("users");

    firebase.auth().onAuthStateChanged(function(user){
        docData.get().then(function (doc){
            if(doc && doc.exists){
                const myData = doc.data()
                return myData.Email; 
            }
        } 
        ).catch(e => console.log(e.message))
        if(user){
            // console.log(user);
            var emailUser = user.email
            if(emailUser.localeCompare(myData.Email)){
                nameElement.innerHTML = myData.Name;
            }
            
        }else{
            window.location.replace("index.html")
        }
    });

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

    function logout() {
        firebase.auth().signOut()
    }

    mainApp.logout = logout;

})()