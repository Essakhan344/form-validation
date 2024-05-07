let form = document.querySelector("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");
let btn = document.querySelector("button");
let msgsucces = document.getElementsByClassName("fa-circle-check");
let msgerror = document.getElementsByClassName("fa-circle-exclamation");


let small = document.getElementsByTagName("small");

form.addEventListener('click', function(e){
    e.preventDefault();
});

btn.addEventListener("click", function validname(){
    if(username.value == ""){
        username.style.borderColor = "red";
        msgerror[0].style.visibility = "visible"
        small[0].style.visibility = "visible";
        small[0].innerText = "please enter valid name";
    }
   else if(username.value.length < 5){
        username.style.borderColor = "red";
        msgerror[0].style.visibility = "visible"
    }else{
        username.style.borderColor = "lightgreen";
        small[0].innerText = "";
        msgsucces[0].style.visibility = "visible";
        msgerror[0].style.visibility = "hidden";
    }
});

btn.addEventListener("click", function validemail(){
    if(email.value == ""){
        email.style.borderColor = "red";
        msgerror[1].style.visibility = "visible"
        small[1].style.visibility = "visible";
        small[1].innerText = "please enter valid email";
    }
    else if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        email.style.borderColor = "red";
        msgerror[1].style.visibility = "visible"
        msgsucces[1].style.visibility = "hidden"
    }else{
        email.style.borderColor = "lightgreen";
        small[1].innerText = "";
        msgsucces[1].style.visibility = "visible";
        msgerror[1].style.visibility = "hidden";
    }
});

btn.addEventListener("click", function validpassword(){
    if(password.value == ""){
        password.style.borderColor = "red";
        msgerror[2].style.visibility = "visible"
        msgsucces[2].style.visibility = "hidden";
        small[2].style.visibility = "visible";
        small[2].innerText = "please enter valid password";
    }
   else if(password.value.length < 6){
        password.style.borderColor = "red";
        msgerror[2].style.visibility = "visible"
    }else{
        password.style.borderColor = "lightgreen";
        small[2].innerText = "";
        msgsucces[2].style.visibility = "visible";
        msgerror[2].style.visibility = "hidden";
    }
});

btn.addEventListener("click", function validpassword2(){
    if(password2.value == ""){
        password2.style.borderColor = "red";
        msgerror[3].style.visibility = "visible"
        small[3].style.visibility = "visible";
        small[3].innerText = "please enter valid password";
    }
    if(password2.value.length < 6){
        password2.style.borderColor = "red";
        msgerror[3].style.visibility = "visible";
    }else{
        password2.style.borderColor = "lightgreen";
        small[3].innerText = "";
        msgsucces[3].style.visibility = "visible";
        msgerror[3].style.visibility = "hidden";
    }
    if(password.value !== password2.value){
        password.style.borderColor = "red";
        password2.style.borderColor = "red";
        msgsucces[2].style.visibility = "hidden";
        msgerror[2].style.visibility = "visible";
        msgerror[3].style.visibility = "visible";
        msgsucces[3].style.visibility = "hidden";
        small[2].innerText = "password must be same";
        small[3].innerText = "password must be same";
       msgerror[3].style.visibility = "visible";
       msgsucces[3].style.visibility = "hidden";
    }
});
