// Ensure Bootstrap Icons are loaded
if (!document.querySelector('link[href*="bootstrap-icons"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css';
    document.head.appendChild(link);
}

// Create first section - Money section
const divElement1 = document.createElement('div');
divElement1.className = "homediv";

const sectionTitle1 = document.createElement("h2");
sectionTitle1.className = "section-title";
sectionTitle1.innerHTML = '<i class="bi bi-currency-dollar"></i> Money section';

const homediv1 = document.createElement("h1");
homediv1.className = "homediv-title";
homediv1.textContent = "Invest with us safely and learn about the different payment options.";

const buyButton1 = document.createElement("button");
buyButton1.className = "learn-more-button";
buyButton1.innerHTML = 'learn more <i class="bi bi-arrow-right"></i>';

const img1 = document.createElement('img');
img1.src = 'money.png';
img1.className = "section-image";
img1.alt = "Money Investment";

// Create second section - How to invest
const divElement2 = document.createElement('div');
divElement2.className = "homediv";

const sectionTitle2 = document.createElement("h2");
sectionTitle2.className = "section-title";
sectionTitle2.innerHTML = '<i class="bi bi-graph-up-arrow"></i> How to invest';

const homediv2 = document.createElement("h1");
homediv2.className = "homediv-title";
homediv2.textContent = "How to invest";

const buyButton2 = document.createElement("button");
buyButton2.className = "learn-more-button";
buyButton2.innerHTML = 'learn more <i class="bi bi-arrow-right"></i>';

const img2 = document.createElement('img');
img2.src = 'invest.png';
img2.className = "section-image";
img2.alt = "Investment Guide";

// Create third section - I am Investor
const divElement3 = document.createElement('div');
divElement3.className = "homediv";

const sectionTitle3 = document.createElement("h2");
sectionTitle3.className = "section-title";
sectionTitle3.innerHTML = '<i class="bi bi-person-badge"></i> I am Investor';

const homediv3 = document.createElement("h1");
homediv3.className = "homediv-title";
homediv3.textContent = "I am Investor";

const buyButton3 = document.createElement("button");
buyButton3.className = "learn-more-button";
buyButton3.innerHTML = 'learn more <i class="bi bi-arrow-right"></i>';

const img3 = document.createElement('img');
img3.src = 'invest.png';
img3.className = "section-image";
img3.alt = "Investor Portal";

// Append elements to first section
divElement1.appendChild(sectionTitle1);
divElement1.appendChild(homediv1);
divElement1.appendChild(buyButton1);
divElement1.appendChild(img1);

// Append elements to second section
divElement2.appendChild(sectionTitle2);
divElement2.appendChild(homediv2);
divElement2.appendChild(buyButton2);
divElement2.appendChild(img2);

// Append elements to third section
divElement3.appendChild(sectionTitle3);
divElement3.appendChild(homediv3);
divElement3.appendChild(buyButton3);
divElement3.appendChild(img3);

// Export functions to create sections
export function createMoneySection() {
    return divElement1;
}

export function createInvestSection() {
    return divElement2;
}

export function createInvestorSection() {
    return divElement3;
}

// Export all sections as array
export function createAllSections() {
    return [divElement1, divElement2, divElement3];
}