import loadHeader from "/components/header/header.js";
import createCard from "/components/item-card/item-card.js";
import { getSectors } from "/api/sector-api.js";
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
pageSubtitle.textContent = 'Browse different market sectors and their performance';

pageHeader.appendChild(pageTitle);
pageHeader.appendChild(pageSubtitle);

const cardsContainer = document.createElement('div');
cardsContainer.className = 'companies-container';

async function loadSectors() {
    try {
        const sectors = await getSectors();

        if (Array.isArray(sectors)) {
            sectors.forEach(sector => {
                const card = createCard(sector.name, sector.growth_rate, sector.number_of_companies + " Companies", sector.market_cap, "Sector");

                card.style.cursor = "pointer";
                card.onclick = () => {
                    sessionStorage.setItem('selectedSectorid', sector.id);
                    window.location.href = `/pages/sector-details/sector-details.html?id=${sector.id}`;
                };

                cardsContainer.appendChild(card);
            });
        }
    } catch (error) {
        console.error("Error loading sectors:", error);
    }
}

document.body.appendChild(pageHeader);
document.body.appendChild(cardsContainer);

loadSectors();

loadFooter();