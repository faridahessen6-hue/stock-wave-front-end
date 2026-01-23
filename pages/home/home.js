import loadHeader from '../../components/header/header.js';
import { createAllSections } from '../../components/card/div.js';
import advantagesContainer from '../../components/card/advantages.js';

loadHeader();

const homeContainer = document.createElement("div");
homeContainer.className = "home-container";

const homeForm = document.createElement("form");
homeForm.className = "home-form";

const homeHeader = document.createElement("h1");
homeHeader.className = "home-header";
homeHeader.textContent = "Home";

const homeSubHeader = document.createElement("h2");
homeSubHeader.className = "home-sub-header";
homeSubHeader.textContent = " Explore With landing page ";

const homeSubHeader2 = document.createElement("h2");
homeSubHeader2.className = "home-sub-header";
homeSubHeader2.textContent = "Invest your money instead of hoarding it under the floor tiles😉";

const homeDescription = document.createElement("p");
homeDescription.className = "home-description";
homeDescription.textContent = "We help brands grow, connect, and stand out in the digital world. Our marketing solutions combine creativity, strategy, and data to build strong online presence.";

const homeDescription2 = document.createElement("p");
homeDescription2.className = "home-description";
homeDescription2.textContent = "Increase engagement, and drive real results. From social media management to content creation and digital campaigns, we turn ideas into impact.";

const homeButton = document.createElement("button");
homeButton.className = "home-button";
homeButton.textContent = "More details";

const homeButtonContainer = document.createElement("button");
homeButtonContainer.className = "our-companies-button";
homeButtonContainer.textContent = "Our companies";

// Enhanced background image container
const imgContainer = document.createElement("div");
imgContainer.classList.add('img-container');

const bgImage = document.createElement('img');
bgImage.src = 'home-bg.png';
bgImage.style.cursor = 'pointer';
bgImage.style.width = '100%';
bgImage.style.height = '100vh';
bgImage.style.objectFit = 'cover';
bgImage.alt = 'Background Image';

// Create sections container
const sectionsContainer = document.createElement("div");
sectionsContainer.className = "sections-grid";

// Get all sections from div.js
const sections = createAllSections();

// Add all sections to container
sections.forEach(section => {
    sectionsContainer.appendChild(section);
});

// Append elements in correct order
homeContainer.appendChild(homeForm);
homeForm.appendChild(homeHeader);
homeForm.appendChild(homeSubHeader);
homeForm.appendChild(homeSubHeader2);
homeForm.appendChild(homeDescription);
homeForm.appendChild(homeDescription2);
homeForm.appendChild(homeButton);
homeForm.appendChild(homeButtonContainer);

// Add background image, home container, sections and advantages to body
imgContainer.appendChild(bgImage);
document.body.appendChild(imgContainer);
document.body.appendChild(homeContainer);
document.body.appendChild(sectionsContainer);
document.body.appendChild(advantagesContainer);

