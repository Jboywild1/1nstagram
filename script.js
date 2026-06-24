'use stritct';


const email = document.getElementById("email");
const password = document.getElementById("password");
const forgetPass = document.querySelector(".fp");

forgetPass.addEventListener("click", switch);

function switch(){
    window.location.href = "fordetten-password.html";
}

