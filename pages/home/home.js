import loadHeader from '../../components/header/header.js';
import { createAllSections } from '../../components/sections/info-section/info-sections.js';
import advantagesContainer from '../../components/sections/advanteges-list/advantages-list.js';
import loadFooter from '../../components/footer/footer.js';

const baseUrl = new URL('.', import.meta.url);
const bgImageUrl = new URL('../../assets/images/b2.png', baseUrl).href;

loadHeader();

const homeContainer = document.createElement("div");
homeContainer.className = "home-container";

const homeForm = document.createElement("form");
homeForm.className = "home-form glass-panel";

const homeHeader = document.createElement("h1");
homeHeader.className = "home-header gradient-header";
homeHeader.textContent = "Home";

const homeSubHeader = document.createElement("h2");
homeSubHeader.className = "home-sub-header contrast-text";
homeSubHeader.textContent = "Start Your Investment Journey";

const homeSubHeader2 = document.createElement("h2");
homeSubHeader2.className = "home-sub-header contrast-text";
homeSubHeader2.textContent = "Invest your money wisely in the stock market";

const homeDescription = document.createElement("p");
homeDescription.className = "home-description contrast-text";
homeDescription.textContent = "Access real-time stock prices, company profiles, and market insights. Our platform provides everything you need to make informed investment decisions.";

const homeDescription2 = document.createElement("p");
homeDescription2.className = "home-description contrast-text";
homeDescription2.textContent = "Track your portfolio, analyze market trends, and discover new investment opportunities with our comprehensive stock trading platform.";

const homeButton = document.createElement("button");
homeButton.className = "home-button";
homeButton.textContent = "More details";
homeButton.type = "button";

const companiesButton = document.createElement("button");
companiesButton.className = "our-companies-button";
companiesButton.textContent = "Our companies";
companiesButton.type = "button";
companiesButton.onclick = function () {
    window.location.href = '../companies/companies.html';
};

homeForm.appendChild(homeHeader);
homeForm.appendChild(homeSubHeader);
homeForm.appendChild(homeSubHeader2);
homeForm.appendChild(homeDescription);
homeForm.appendChild(homeDescription2);
homeForm.appendChild(homeButton);
homeForm.appendChild(companiesButton);

homeContainer.appendChild(homeForm);

const imgContainer = document.createElement("div");
imgContainer.className = "img-container";

const bgImage = document.createElement("img");
bgImage.className = "bg-image";
bgImage.src = bgImageUrl;
bgImage.alt = "Background Image";

imgContainer.appendChild(bgImage);

const sectionsContainer = document.createElement("div");
sectionsContainer.className = "sections-grid";

const sections = createAllSections();
sections.forEach(function (section) {
    sectionsContainer.appendChild(section);
});

document.body.appendChild(homeContainer);
document.body.appendChild(imgContainer);
document.body.appendChild(sectionsContainer);
document.body.appendChild(advantagesContainer);

loadFooter();
