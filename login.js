function openSignUpForm(){
    window.open('signup.html','-blank');
    }
    function openSignIn(){
        window.open('landing.html');
    }
    
    

    function validateName(){
    let nameError = document.getElementById("username-error");
    let uName = document.getElementById("username");
    console.log(uName.value);
       
    if(uName.value.trim()== ''){
        nameError.innerHTML ='Username cannot be blank'
        return false
    }
    else if(uName.value.length<5){
        nameError.innerHTML = 'username must not be less than 5 characters'
        return false
    }
    else{
        nameError.innerHTML=''
        return true
    }
}

function validateEmail(){
    let email=document.getElementById("email");
    let emailError=document.getElementById("email-error");

    let regEx= /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/g
   
    if(email.value.trim()==''){
        emailError.innerHTML="Email cannot be blank"
        return false
    }
    
    else if(!email.value.match(regEx)){
        emailError.innerHTML="Email not in a global format"
        return false
    }
    else{
        emailError.innerHTML=''
        return true
    }
}


function validatePassword(){
    let password = document.getElementById("password");
    let pError = document.getElementById("password-error");
    let specialCharacterPattern = /[!@#$%^&*(),.?":{}|<>]/;
    let uppercaseLetterPattern = /[A-Z]/;
    let lowercaseLetterPattern = /[a-z]/;
    let div =document.getElementById("pass");
    if(password.value.trim()==''){
        pError.innerHTML = 'password cannot be blank'
        return false
    }else if (password.value.length<6 || password.value.length>20){
        pError.innerHTML = 'password length cannot be less than 6 characters or more than 20 characters'
        return false
        
    }
    else if(!(password.value.match( specialCharacterPattern )&& password.value.match(uppercaseLetterPattern) && password.value.match(lowercaseLetterPattern ))){
        pError.innerHTML = "password must contain a special character, uppercase letter and lowercase letter"
        
return false
    }
     else{
        pError.innerHTML = ''
        return true
    }
}

function validateRepassword(){
    let repassword = document.getElementById("repassword");
    let repdError =document.getElementById("repassword-error");
    let password = document.getElementById("password");

    if(password.value != repassword.value){
        repdError.innerHTML = 'password mismatch'
        return false
    }else if(password.value != repassword.value){
        repdError.innerHTML ="enter correct password"
        return false
    }
    
    else{
        repdError.innerHTML =''
        return true
    }


}

function submitButton(){
    let vaEmail = validateEmail();
    let vaname = validateName();
    let vapass =validatePassword();
    let varep = validateRepassword();
    if(vaEmail &&  vaname &&vapass &&  varep){
        return true
    }else{
        return false
    }
}
function signInBtn(){
    if(validationSucs()){
        redirecteNextPage();
    }
}

function validationSucs(){
    let isEmail = validateEmail();
    let isPass =validatePassword();
    if(isEmail && isPass){
        return true
    }else{
        return false
    }
}

function redirecteNextPage(){
    window.open("landing.html");
}


function subBtn(){
    if(submitButton()){
        redirectBack();
    }
}

function redirectBack(){
    window.open("index.html");
}

function goBack(){
    window.open("index.html");
}