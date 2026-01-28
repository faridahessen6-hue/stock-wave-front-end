import loadHeader from '/components/header/header.js';
import { createAllSections } from '/components/sections/info-section/info-sections.js';
import advantagesContainer from '/components/sections/advanteges-list/advantages-list.js';
import loadFooter from '/components/footer/footer.js';

// Load the header
loadHeader();

// --- 1. Create Main Container ---
const homeContainer = document.createElement("div");
homeContainer.className = "home-container";

// --- 2. Create Home Form Section ---
const homeForm = document.createElement("form");
homeForm.className = "home-form glass-panel";

// Header
const homeHeader = document.createElement("h1");
homeHeader.className = "home-header gradient-header";
homeHeader.textContent = "Home";

// Sub-headers
const homeSubHeader = document.createElement("h2");
homeSubHeader.className = "home-sub-header contrast-text";
homeSubHeader.textContent = "Start Your Investment Journey";

const homeSubHeader2 = document.createElement("h2");
homeSubHeader2.className = "home-sub-header contrast-text";
homeSubHeader2.textContent = "Invest your money wisely in the stock market";

// Descriptions
const homeDescription = document.createElement("p");
homeDescription.className = "home-description contrast-text";
homeDescription.textContent = "Access real-time stock prices, company profiles, and market insights. Our platform provides everything you need to make informed investment decisions.";

const homeDescription2 = document.createElement("p");
homeDescription2.className = "home-description contrast-text";
homeDescription2.textContent = "Track your portfolio, analyze market trends, and discover new investment opportunities with our comprehensive stock trading platform.";

// Buttons
const homeButton = document.createElement("button");
homeButton.className = "home-button";
homeButton.textContent = "More details";
homeButton.type = "button"; // Prevent form submission

const companiesButton = document.createElement("button");
companiesButton.className = "our-companies-button";
companiesButton.textContent = "Our companies";
companiesButton.type = "button";
companiesButton.onclick = function () {
    window.location.href = '/pages/companies/companies.html';
};

// Append everything to the form
homeForm.appendChild(homeHeader);
homeForm.appendChild(homeSubHeader);
homeForm.appendChild(homeSubHeader2);
homeForm.appendChild(homeDescription);
homeForm.appendChild(homeDescription2);
homeForm.appendChild(homeButton);
homeForm.appendChild(companiesButton);

homeContainer.appendChild(homeForm);

// --- 3. Create Background Image ---
const imgContainer = document.createElement("div");
imgContainer.className = "img-container";

const bgImage = document.createElement("img");
bgImage.className = "bg-image";
bgImage.src = "/assets/images/home-bg.png";
bgImage.alt = "Background Image";

imgContainer.appendChild(bgImage);


// --- 4. Create Sections ---
const sectionsContainer = document.createElement("div");
sectionsContainer.className = "sections-grid";

const sections = createAllSections();
sections.forEach(function (section) {
    sectionsContainer.appendChild(section);
});


// --- 5. Assemble the Page ---
document.body.appendChild(homeContainer);
document.body.appendChild(imgContainer);
document.body.appendChild(sectionsContainer);
document.body.appendChild(advantagesContainer);

// Load footer
loadFooter();
