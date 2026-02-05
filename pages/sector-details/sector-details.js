import loadHeader from "/components/header/header.js";
import loadFooter from "/components/footer/footer.js";
import createCard from "/components/item-card/item-card.js";
import { getSectorDetailsById } from "/api/sector-api.js";
import { getCopmaniesBysector } from "/api/companies-api.js";

loadHeader();

document.addEventListener('DOMContentLoaded', async () => {
    const root = document.getElementById('sector-details-root');
    const sectorId = sessionStorage.getItem('selectedSectorid');
    if (!root) return;

    const sector = await getSectorDetailsById(sectorId);
    if (!sector) {
        root.innerHTML = `<h2 class="contrast-text" style="text-align:center; margin-top:100px">Sector not found.</h2>`;
        loadFooter();
        return;
    }

    root.innerHTML = `
        <div class="sector-details-full-container" style="padding: 20px 40px">
            <div class="page-header glass-panel" style="margin-bottom: 30px">
                <h1 class="page-title gradient-header">${sector.name} Sector</h1>
                <p class="page-subtitle contrast-text">Explore performance metrics and member companies within this sector</p>
            </div>

            <div class="sector-info-section glass-panel" style="margin-bottom: 30px">
                <h2 class="gradient-header" style="font-size: 1.8rem; margin-bottom: 25px">Sector Performance Overview</h2>
                <div class="metrics-grid">
                    <div class="metric-card">
                        <p class="metric-label contrast-text">Annual Growth</p>
                        <h3 class="metric-value contrast-text">${sector.growth_rate}</h3>
                    </div>
                    <div class="metric-card">
                        <p class="metric-label contrast-text">Market Valuation</p>
                        <h3 class="metric-value contrast-text">${sector.market_cap}</h3>
                    </div>
                    <div class="metric-card">
                        <p class="metric-label contrast-text">Active Companies</p>
                        <h3 class="metric-value contrast-text">${sector.number_of_companies}</h3>
                    </div>
                </div>
            </div>

            <h2 class="section-title gradient-header" style="text-align: center; margin-top: 50px">Member Companies</h2>
            <div class="companies-container" id="cards-container-mount"></div>
        </div>
    `;

    const cardsContainer = document.getElementById('cards-container-mount');
    try {
        const sectorCompanies = await getCopmaniesBysector(sectorId);

        sectorCompanies.forEach(company => {
            const card = createCard(
                company.name,
                company.share_price ? `$${company.share_price}` : "N/A",
                "2024",
                sector.name,
                company.symbol
            );
            card.style.cursor = "pointer";
            card.onclick = () => {
                sessionStorage.setItem('selectedCompanyid', company.id);
                window.location.href = `/pages/companies_details/companiesdetails.html?id=${company.id}`;
            };
            cardsContainer.appendChild(card);
        });
    } catch (error) {
        console.error("Error loading sector companies:", error);
    }

    loadFooter();
});
