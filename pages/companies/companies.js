import loadHeader from "/components/header/header.js";
import createCard from "/components/item-card/item-card.js";
import { getCompanies } from "/api/companies-api.js";
import loadFooter from "/components/footer/footer.js";

loadHeader();

const pageHeader = document.createElement('div');
pageHeader.className = 'page-header glass-panel';

const pageTitle = document.createElement('h1');
pageTitle.className = 'page-title gradient-header';
pageTitle.textContent = 'Companies';

const pageSubtitle = document.createElement('p');
pageSubtitle.className = 'page-subtitle contrast-text';
pageSubtitle.textContent = 'Explore our featured companies and their performance';

pageHeader.appendChild(pageTitle);
pageHeader.appendChild(pageSubtitle);

const cardsContainer = document.createElement('div');
cardsContainer.className = 'companies-container';

// Load companies from API
function loadCompanies() {
    const companies = getCompanies();

    companies.forEach(company => {
        const card = createCard(company.name, company.sector, "2024", "NASDAQ", company.symbol);
        card.addEventListener('click', () => {
            sessionStorage.setItem('selectedCompanySymbol', company.symbol);
            window.location.href = '/pages/companies_details/companiesdetails.html';
        });
        cardsContainer.appendChild(card);
    });
}

document.body.appendChild(pageHeader);
document.body.appendChild(cardsContainer);

loadCompanies();
loadFooter();