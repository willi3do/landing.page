" use strict"

<<<<<<< HEAD
// const signUpButton = document.querySelector("#sign-up_Button");
// signUpButton.addEventListener("submit", function(event){
//     alert("what is your Username? :");
//     // console.log(event.target);
//     // console.log(event.type);
//     console.log("event.signUpButton");
// });
=======
buttonOne = document.querySelector("#sign-up_button");
buttonTwo = document.querySelector("#CTA-button");

//     document.addEventListener("click", function(event) {
//     if (event.target === event || event.target === buttonTwo) {
//     console.log("Button clicked:", event.target.id);
//     console.log("Event type:", event.type);
//     window.open = ("/sign-up/sign-up.html", "blank");
//     }
// });

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Select all buttons with data-href attribute
    const buttons = document.querySelectorAll('button');

    // Add click event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const url = button.dataset.href; // Get URL from data-href
            console.log(`Button clicked: ${button.id}, opening: ${url}`);
            window.open("/sign-up/sign-up.html", '_blank'); // Open URL in new tab
        });
    });
});
>>>>>>> f741bbc4b4bb8cf910e6c343fe92af09e95054ae

const  signUpBtn= document.getElementById("sing-up_button");
    signUpBtn.onclick = function signUpPage(){
        window.open("/landing.page/sign-up/sign-up.html", "_blank");
    }

<<<<<<< HEAD
    signUpBtn()
=======



// const signUpButton = document.querySelector("#sign-up_Button");
// signUpButton.addEventListener("submit", function(event){
//     alert("what is your Username? :");
//     // console.log(event.target);
//     // console.log(event.type);
//     console.log("event.signUpButton");
// });


/* commit changes and then make a new folder for the sign-up section  with 
>>>>>>> f741bbc4b4bb8cf910e6c343fe92af09e95054ae

const ctaBtn = document.getElementById("CTA-button");
    ctaBtn.onclick = function signUpPage(){
        window.open("/landing.page/sign-up/sign-up.html", "_blank");
    }

    ctaBtn()