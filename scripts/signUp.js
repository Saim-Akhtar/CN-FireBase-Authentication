function signMeUp(){
    const auth=firebase.auth()
    const email=document.getElementById("userEmail").value
    const password=document.getElementById("userPWD").value
    auth.createUserWithEmailAndPassword(email,password).catch( e => 
      
        alert(e.message)
        )
    
}