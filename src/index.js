//http://localhost:8080/

import "./styles.css";

const form = document.querySelector("form");
const email = document.getElementById("email");
const zipCode = document.getElementById("zipCode");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

function showError(){
    email.setCustomValidity("");
    zipCode.setCustomValidity("");
    password.setCustomValidity("");
    confirmPassword.setCustomValidity("");

    if(email.validity.valueMissing){
        email.setCustomValidity("Enter an email address");
    }
    else if(email.validity.typeMismatch){
        email.setCustomValidity("Enter a valid email address");
    }
    else if(zipCode.validity.valueMissing){
        zipCode.setCustomValidity("Enter a zip code");
    }
    else if(zipCode.validity.patternMismatch){
        zipCode.setCustomValidity("Enter a valid zip code");
    }
    else if(password.validity.valueMissing){
        password.setCustomValidity("Enter a password");
    }
    else if(password.validity.tooShort){
        password.setCustomValidity("Password must be at least 8 characters");
    }
    else if(confirmPassword.validity.valueMissing){
        confirmPassword.setCustomValidity("Confirm your password");
    }
    else if(confirmPassword.value !== password.value){
        confirmPassword.setCustomValidity("Passwords do not match");
    }

    email.reportValidity();
    zipCode.reportValidity();
    password.reportValidity();
    confirmPassword.reportValidity();
        

}

form.addEventListener("submit", (event)=>{
    if(!email.validity.valid || !zipCode.validity.valid || !password.validity.valid || !confirmPassword.validity.valid){
        showError();
        event.preventDefault();
    }
    else{
        alert("Form submitted");
    }
}
);

email.addEventListener("input", () => {
    email.setCustomValidity("");
    email.reportValidity();
    if(email.validity.valueMissing){
        email.setCustomValidity("Enter an email address");
    }
    else if(email.validity.typeMismatch){
        email.setCustomValidity("Enter a valid email address");
    }
});

zipCode.addEventListener("input", () => {
    zipCode.setCustomValidity("");
    zipCode.reportValidity();
    if(zipCode.validity.valueMissing){
        zipCode.setCustomValidity("Enter a zip code");
    }
    else if(zipCode.validity.patternMismatch){
        zipCode.setCustomValidity("Enter a valid zip code");
    }
});

password.addEventListener("input", () => {
    password.setCustomValidity("");
    password.reportValidity();
    if(password.validity.valueMissing){
        password.setCustomValidity("Enter a password");
    }
    else if(password.validity.tooShort){
        password.setCustomValidity("Password must be at least 8 characters");
    }
});

confirmPassword.addEventListener("input", () => {
    confirmPassword.setCustomValidity("");
    confirmPassword.reportValidity();
    if(confirmPassword.validity.valueMissing){
        confirmPassword.setCustomValidity("Confirm your password");
    }
    else if(confirmPassword.value !== password.value){
        confirmPassword.setCustomValidity("Passwords do not match");
    }
});

