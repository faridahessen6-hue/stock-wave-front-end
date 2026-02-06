import loadHeader from '/components/header/header.js';
import { createAllSections } from '/components/sections/info-section/info-sections.js';
import advantagesContainer from '/components/sections/advanteges-list/advantages-list.js';
import loadFooter from '/components/footer/footer.js';

// Load the header
loadHeader();

const homePage = document.getElementById('home-page') || document.body;

// --- 1. Create Main Container ---
const homeContainer = document.createElement("div");
homeContainer.className = "home-container";

// --- 2. Create Hero Section with Cards ---
const heroSection = document.createElement("section");
heroSection.className = "hero-section";

// Main hero card
const heroCard = document.createElement("div");
heroCard.className = "hero-card glass-panel";

// Header
const homeHeader = document.createElement("h1");
homeHeader.className = "home-header gradient-header";
homeHeader.textContent = "Stock Waves";

// Sub-header
const homeSubHeader = document.createElement("h2");
homeSubHeader.className = "home-sub-header contrast-text";
homeSubHeader.textContent = "Navigate Your Investment Journey";

// Description cards container
const descriptionCards = document.createElement("div");
descriptionCards.className = "description-cards";

// Feature card 1
const featureCard1 = document.createElement("div");
featureCard1.className = "feature-card";
const featureCard1Title = document.createElement("h3");
featureCard1Title.className = "feature-title";
featureCard1Title.textContent = "Real-Time Insights";
const featureCard1Desc = document.createElement("p");
featureCard1Desc.className = "feature-description";
featureCard1Desc.textContent = "Access live stock prices and market data instantly";
featureCard1.appendChild(featureCard1Title);
featureCard1.appendChild(featureCard1Desc);

// Feature card 2
const featureCard2 = document.createElement("div");
featureCard2.className = "feature-card";
const featureCard2Title = document.createElement("h3");
featureCard2Title.className = "feature-title";
featureCard2Title.textContent = "Smart Analytics";
const featureCard2Desc = document.createElement("p");
featureCard2Desc.className = "feature-description";
featureCard2Desc.textContent = "Track portfolio performance with advanced tools";
featureCard2.appendChild(featureCard2Title);
featureCard2.appendChild(featureCard2Desc);

// Feature card 3
const featureCard3 = document.createElement("div");
featureCard3.className = "feature-card";
const featureCard3Title = document.createElement("h3");
featureCard3Title.className = "feature-title";
featureCard3Title.textContent = "Expert Guidance";
const featureCard3Desc = document.createElement("p");
featureCard3Desc.className = "feature-description";
featureCard3Desc.textContent = "Get professional analysis and investment recommendations";
featureCard3.appendChild(featureCard3Title);
featureCard3.appendChild(featureCard3Desc);

descriptionCards.appendChild(featureCard1);
descriptionCards.appendChild(featureCard2);
descriptionCards.appendChild(featureCard3);

// Buttons
const homeButton = document.createElement("button");
homeButton.className = "home-button";
homeButton.textContent = "Explore Features";
homeButton.type = "button";

const companiesButton = document.createElement("button");
companiesButton.className = "our-companies-button";
companiesButton.textContent = "View News";
companiesButton.type = "button";
companiesButton.onclick = function () {
    window.location.href = '/pages/news/news.html';
};

const buttonContainer = document.createElement("div");
buttonContainer.className = "button-container";
buttonContainer.appendChild(homeButton);
buttonContainer.appendChild(companiesButton);

// Assemble hero card
heroCard.appendChild(homeHeader);
heroCard.appendChild(homeSubHeader);
heroCard.appendChild(descriptionCards);
heroCard.appendChild(buttonContainer);

heroSection.appendChild(heroCard);

homeContainer.appendChild(heroSection);

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
homePage.appendChild(homeContainer);
homePage.appendChild(imgContainer);
homePage.appendChild(sectionsContainer);
homePage.appendChild(advantagesContainer);

// Load footer
loadFooter();
