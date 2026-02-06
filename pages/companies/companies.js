import loadHeader from "/components/header/header.js";
// import createCard from "/components/item-card/item-card.js";
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

async function loadCompanies() {
    try {
        const companies = await getCompanies();
        if (Array.isArray(companies)) {
            companies.forEach(company => {
                // const card = createCard(company.name, company.sector || company.ticker, "2024", "NASDAQ", company.symbol || company.ticker);
                // card.addEventListener('click', () => {
                //     sessionStorage.setItem('selectedCompanyid', company.id || company.ticker);
                //     window.location.href = '/pages/companies_details/companiesdetails.html?id=' + (company.id || company.ticker);
                // });
                // cardsContainer.appendChild(card);
            });
        }
    } catch (error) {
        console.error("Error loading companies:", error);
    }
}

document.body.appendChild(pageHeader);
document.body.appendChild(cardsContainer);

loadCompanies();
loadFooter();