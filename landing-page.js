" use strict"

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





// const signUpButton = document.querySelector("#sign-up_Button");
// signUpButton.addEventListener("submit", function(event){
//     alert("what is your Username? :");
//     // console.log(event.target);
//     // console.log(event.type);
//     console.log("event.signUpButton");
// });


/* commit changes and then make a new folder for the sign-up section  with 

/signup folder
├── signup.html
├── signup.css
└── signup.js
*/