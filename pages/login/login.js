
import loadHeader from "../../components/header/header.js";
loadHeader();

const loginContainer = document.createElement("div");
loginContainer.className = "login-container";

const loginForm = document.createElement("form");
loginForm.className = "login-form glass-panel";

const loginHeader = document.createElement("h1");
loginHeader.className = "login-header gradient-header";
loginHeader.textContent = "Login";

const loginSubHeader = document.createElement("h2");
loginSubHeader.className = "login-subheader contrast-text";
loginSubHeader.textContent = "welcome back! please enter your details";



const emailLabel = document.createElement("label");
emailLabel.className = "email-label";
emailLabel.textContent = "Email";

const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.id = "email";
emailInput.className = "email-input";
emailInput.placeholder = "Enter your email";

const passwordLabel = document.createElement("label");
passwordLabel.className = "password-label";
passwordLabel.textContent = "Password";


const passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.id = "password";
passwordInput.className = "password-input";
passwordInput.placeholder = "Enter your password";

const loginButton = document.createElement("button");
loginButton.className = "login-button";
loginButton.type = "submit";
loginButton.textContent = "Login";


const redirecToRegisterButton = document.createElement("button");
redirecToRegisterButton.textContent = "Do Not Have An Account?! Register";
redirecToRegisterButton.className = "secondary-button";
redirecToRegisterButton.type = "button";
redirecToRegisterButton.onclick = function () {
    window.location.href = "/pages/register/register.html";
};


loginContainer.appendChild(loginForm);
loginForm.appendChild(loginHeader);
loginForm.appendChild(loginSubHeader);
loginForm.appendChild(emailLabel);
loginForm.appendChild(emailInput);
loginForm.appendChild(passwordLabel);
loginForm.appendChild(passwordInput);
loginForm.appendChild(loginButton);
loginForm.appendChild(redirecToRegisterButton)
document.body.appendChild(loginContainer);