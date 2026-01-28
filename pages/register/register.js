
import loadHeader from "../../components/header/header.js";
loadHeader();

const registerContainer = document.createElement("div");
registerContainer.className = "register-container";

const registerForm = document.createElement("form");
registerForm.className = "register-form glass-panel";

const registerHeader = document.createElement("h1");
registerHeader.className = "register-header gradient-header";
registerHeader.textContent = "Register";

const registerSubHeader = document.createElement("h2");
registerSubHeader.className = "register-subheader contrast-text";
registerSubHeader.textContent = "create a new account";



const nameLabel = document.createElement("label");
nameLabel.className = "label";
nameLabel.textContent = "Name";

const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.id = "name";
nameInput.className = "input";
nameInput.placeholder = "Enter your fullname";

const phoneLabel = document.createElement("label")
phoneLabel.className = "label"
phoneLabel.textContent = "Phone"

const phoneInput = document.createElement("input")
phoneInput.type = "number"
phoneInput.id = "phone"
phoneInput.className = "input"
phoneInput.placeholder = "Enter your phone number"


const emailLabel = document.createElement("label");
emailLabel.className = "label";
emailLabel.textContent = "Email";

const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.id = "email";
emailInput.className = "input";
emailInput.placeholder = "Enter your email";


const ageLabel = document.createElement("label")
ageLabel.type = "number"
ageLabel.id = "age"
ageLabel.className = "label"
ageLabel.textContent = "Age"
ageLabel.placeholder = "Enter your age"

const ageInput = document.createElement("input")
ageInput.type = "number"
ageInput.id = "age"
ageInput.className = "input"
ageInput.placeholder = "Enter your age"


const birthdaylabel = document.createElement("label")
birthdaylabel.className = "label"
birthdaylabel.textContent = "Birthday"

const birthdayInput = document.createElement("input")
birthdayInput.type = "date"
birthdayInput.id = "birthday"
birthdayInput.className = "input"
birthdayInput.placeholder = "Enter your birthday"



const ssnlabel = document.createElement("label")
ssnlabel.className = "label"
ssnlabel.textContent = "SSN"


const ssnInput = document.createElement("input")
ssnInput.type = "number"
ssnInput.id = "ssn"
ssnInput.className = "input"
ssnInput.placeholder = "Enter your ssn"


const passwordLabel = document.createElement("label");
passwordLabel.className = "label";
passwordLabel.textContent = "Password";


const passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.id = "password";
passwordInput.className = "input";
passwordInput.placeholder = "Enter your password";

const registerButton = document.createElement("button");
registerButton.className = "register-button";
registerButton.type = "submit";
registerButton.textContent = "register";


const redirectToLoginButton = document.createElement("button");
redirectToLoginButton.className = "secondary-button";
redirectToLoginButton.textContent = "Have An Account?! Log In";
redirectToLoginButton.type = "button";
redirectToLoginButton.onclick = function () {
    window.location.href = "/pages/login/login.html";
};



registerContainer.appendChild(registerForm);
registerForm.appendChild(registerHeader);
registerForm.appendChild(registerSubHeader);
registerForm.appendChild(nameLabel)
registerForm.appendChild(nameInput)
registerForm.appendChild(emailLabel);
registerForm.appendChild(emailInput);
registerForm.appendChild(ageLabel);
registerForm.appendChild(ageInput);
registerForm.appendChild(phoneLabel);
registerForm.appendChild(phoneInput);
registerForm.appendChild(birthdaylabel);
registerForm.appendChild(birthdayInput);
registerForm.appendChild(ssnlabel);
registerForm.appendChild(ssnInput);
registerForm.appendChild(passwordLabel);
registerForm.appendChild(passwordInput);
registerForm.appendChild(registerButton);
registerForm.appendChild(redirectToLoginButton)
document.body.appendChild(registerContainer);