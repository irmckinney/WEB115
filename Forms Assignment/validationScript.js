// JavaScript code for form validation
// Prevent form from submitting
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("myForm");

    form.addEventListener("submit", function (event) {

// Retrieve the input field value
        const inputValue = document.getElementById("inputField").value;

// Regular expression pattern for alphanumeric input
        const alphanumericPattern = /^[a-zA-Z0-9]+$/;

// Check if the input value matches the pattern
        if (alphanumericPattern.test(inputValue)) {

// Valid input: display confirmation
            alert("Success! Form submitted correctly.");

        } else {

// Invalid input: display error message
            alert("Error: Input must contain only letters and numbers.");


            event.preventDefault();
        }

    });

});