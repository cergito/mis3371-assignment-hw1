/*
    Program name: hw1.js
    Author: Cergio Manuel A Batang
    Date Created: Feb 27, 2026
    Date last edited: Feb 27, 2026
    Version: 1.0
    Description: JS external file for patient form
*/

// Dynamic Date Display
// Gets todays date and display it on header

const d = new Date();
let text = d.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
});
document.getElementById("today").innerHTML = text;


// Range Slider Live Value 
// Updates displayed number next to the slider as the user drags it

let slider = document.getElementById("range");
let output = document.getElementById("range-slider");

// Set initial display value when page loads
output.innerHTML = slider.value;

// Update displayed value whenever slider moves
slider.oninput = function () {
    output.innerHTML = this.value;
};


// Password Match Validation

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    let pass1 = document.getElementById("pword").value;
    let pass2 = document.getElementById("pword2").value;

    if (pass1 !== pass2) {
        // Stop form from submitting if passwords don't match
        event.preventDefault();
        alert("Passwords do not match. Please re-enter your password.");
        document.getElementById("pword2").focus();
    }
});

