import loadHeader from "/components/header/header.js";
import createCard from "/components/item-card/item-card.js";
import { getCompanies } from "/api/companies-api.js";
import loadFooter from "/components/footer/footer.js";

loadHeader();

// Create page header
const pageHeader = document.createElement('div');
pageHeader.className = 'page-header glass-panel';

const pageTitle = document.createElement('h1');
pageTitle.className = 'page-title gradient-header';
pageTitle.textContent = 'Sectors';

const pageSubtitle = document.createElement('p');
pageSubtitle.className = 'page-subtitle contrast-text';
pageSubtitle.textContent = 'Browse different market sectors and their top companies';

pageHeader.appendChild(pageTitle);
pageHeader.appendChild(pageSubtitle);

// Create a container for cards with grid layout
const cardsContainer = document.createElement('div');
cardsContainer.className = 'companies-container';

// Load companies from API
function loadCompanies() {
    const companies = getCompanies();

    companies.forEach(company => {
        const card = createCard(company.name, company.sector, "2024", "NASDAQ", company.symbol);
        cardsContainer.appendChild(card);
    });
}

// Add elements to body
document.body.appendChild(pageHeader);
document.body.appendChild(cardsContainer);

// Load data
loadCompanies();

// Load footer
loadFooter();