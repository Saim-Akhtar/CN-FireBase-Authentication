function signMeOut(){
    const auth= firebase.auth();
    auth.signOut().then(function() {
        // Sign-out successful.
        window.location="index.html"
      }).catch(function(error) {
        // An error happened.
        console.log(error.message)
      });
    
}
(function(){
  
  firebase.auth().onAuthStateChanged(function(user) {
    
    if (user) {
      // User is signed in.
      console.log("UserSigned In: " + user.displayName)
      
    } else {
      // No user is signed in.
        window.location="index.html"
      console.log("redirect");
      
      
    }
  });
})()
