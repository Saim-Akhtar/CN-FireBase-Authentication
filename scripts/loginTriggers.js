(function(){
    var GoToSignup=document.getElementById("gotoSignUp")
    var BackToLogin=document.getElementById("backToLogin")

    GoToSignup.addEventListener('click',toggleLoginArea)
    BackToLogin.addEventListener('click',toggleLoginArea)
    
    function toggleLoginArea(){
        document.getElementById("loginForm").classList.toggle("hide")
        document.getElementById("signupForm").classList.toggle("hide")
    }

})()