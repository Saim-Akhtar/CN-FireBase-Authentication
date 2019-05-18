function signIn(){
    const auth= firebase.auth();
    const email=document.getElementById("Email").value
    const pwd=document.getElementById("PWD").value
    auth.signInWithEmailAndPassword(email,pwd).catch( e => 
      
      
      alert(e.message)
      )
    
    
}
(function(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      
      
        window.location="mainPage.html"
        console.log("User Signed In")
      
    } else {
      // No user is signed in.
      
      console.log("No user Signed In");
      
      
    }
  });
})()
