(function () {

    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // var Lemail = document.querySelector("#loginmail").value;
    // var Lpass = document.querySelector("#loginpassword").value;
    // const btnLogin = document.querySelector("#btnLogin");
    // const promise  = firebase.auth();
    
    var uiConfig = {
        callbacks: {
          signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
          },
          uiShown: function() {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
          }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: './adm.html',
        signInOptions: [
        //   // Leave the lines as is for the providers you want to offer your users.
        //   firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        //   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        //   firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        //   firebase.auth.GithubAuthProvider.PROVIDER_ID,
        //   firebase.auth.PhoneAuthProvider.PROVIDER_ID
          firebase.auth.EmailAuthProvider.PROVIDER_ID
          // btnLogin.addEventListener("click", e =>{
          //   promise.signInWithEmailAndPassword(Lemail, Lpass).then(
          //     function() {
          //       console.log("Login done!!")
          //     }
          //   ).catch( e => console.log(e.message)) 
          // })
        ],
        // Terms of service url.
        tosUrl: './adm.html',
        // Privacy policy url.
        // privacyPolicyUrl: '<your-privacy-policy-url>'
      };
      ui.start('#firebaseui-auth-container', uiConfig);


}());


