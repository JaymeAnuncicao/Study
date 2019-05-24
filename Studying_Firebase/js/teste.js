var mainApp = {};

(function () {
  var firebase = app_fireBase;
  const nameElement = document.querySelector("#nameElement")

  firebase.auth().onAuthStateChanged(function(user) {
    var uid = null
    
    if (user) {
      // User is signed in.
      uid = user.uid;
      uemail = user.email;
      nameElement.innerHTML = uemail ;
    }else{
        uid = null; 
        window.location.replace("index.html")
    }
  });

  function logout() {
      firebase.auth().signOut()
  }

  mainApp.logout = logout;

})()