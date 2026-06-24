'use stritct';

const backBtn = document.getElementById("backBtn");
const email = document.getElementById("email");
const password = document.getElementById("password");
const forgetPass = document.querySelector(".fp");
const fp2 = document.querySelector(".fp2");
const phoneChange = document.getElementById("phoneChange");
const emailAdd = document.getElementById("emailAdd");
const emailChange = document.getElementById("emailChange");

forgetPass.addEventListener("click", switch);

function switch(){
    window.location.href = "fordetten-password.html";
}

fp2.onclick = function (){
    phoneChange.textContent = "Enter your Username or email address";
    emailAdd.placeholder = "Username or Email address";
    emailChange.textContent = "Find by Mobile number instead";
}

