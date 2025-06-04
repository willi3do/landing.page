" use strict"


//     document.addEventListener("click", function(event) {
//     if (event.target === event || event.target === buttonTwo) {
//     console.log("Button clicked:", event.target.id);
//     console.log("Event type:", event.type);
//     window.open = ("/sign-up/sign-up.html", "blank");
//     }
// });


    // Add click event listener to each button

const signUpBtn = document.getElementById("sign-up_button");

    signUpBtn.onclick = function signUpPage(click){
        window.open("/landing.page/sign-up/sign-up.html", "_blank");

         signUpBtn()
    }

   
    
    
const ctaBtn = document.getElementById("CTA-button");

    ctaBtn.onclick = function signUpPage(click){
        window.open("/landing.page/sign-up/sign-up.html", "_blank");

           ctaBtn()
    }

 
