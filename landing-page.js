" use strict"

// const signUpButton = document.querySelector("#sign-up_Button");
// signUpButton.addEventListener("submit", function(event){
//     alert("what is your Username? :");
//     // console.log(event.target);
//     // console.log(event.type);
//     console.log("event.signUpButton");
// });

const  signUpBtn= document.getElementById("sing-up_button");
    signUpBtn.onclick = function signUpPage(){
        window.open("/landing.page/sign-up/sign-up.html", "_blank");
    }

    signUpBtn()

const ctaBtn = document.getElementById("CTA-button");
    ctaBtn.onclick = function signUpPage(){
        window.open("/landing.page/sign-up/sign-up.html", "_blank");
    }

    ctaBtn()