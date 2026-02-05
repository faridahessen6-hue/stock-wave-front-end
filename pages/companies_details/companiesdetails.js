import loadHeader from "/components/header/header.js";
import loadFooter from "/components/footer/footer.js";
import { getCompanyDetailsById } from "/api/companies-api.js";

loadHeader();

document.addEventListener('DOMContentLoaded', async () => {
    const root = document.getElementById('company-details-root');
    const companyId = sessionStorage.getItem('selectedCompanyid');
    if (!companyId) return;
    const company = await getCompanyDetailsById(companyId);

    if (!root) return;
    root.innerHTML = '';

    if (!company) {
        const page = document.createElement('div');
        page.className = 'page-container';

        const panel = document.createElement('div');
        panel.className = 'glass-panel';

        const title = document.createElement('h2');
        title.className = 'gradient-header';
        title.textContent = 'No company selected';

        const text = document.createElement('p');
        text.className = 'contrast-text';
        text.textContent = 'Go back to Companies and click a company card.';

        const backBtn = document.createElement('button');
        backBtn.className = 'secondary-button';
        backBtn.textContent = 'Back to Companies';
        backBtn.addEventListener('click', () => {
            window.location.href = '/pages/companies/companies.html';
        });

        panel.appendChild(title);
        panel.appendChild(text);
        panel.appendChild(backBtn);
        page.appendChild(panel);
        root.appendChild(page);

        loadFooter();
        return;
    }

    const page = document.createElement('div');
    page.className = 'page-container';

    const container = document.createElement('div');
    container.className = 'company-details-container';

    const headerSection = document.createElement('section');
    headerSection.className = 'company-header glass-panel';

    const logoSection = document.createElement('div');
    logoSection.className = 'company-logo-section';

    const logoWrap = document.createElement('div');
    logoWrap.className = 'company-logo';

    const logo = document.createElement('img');
    logo.className = 'logo-img';
    logo.src = 'https://picsum.photos/seed/company-logo/120/120.jpg';
    logo.alt = 'Company Logo';
    logoWrap.appendChild(logo);

    const basic = document.createElement('div');
    basic.className = 'company-basic-info';

    const name = document.createElement('h1');
    name.className = 'company-name gradient-header';
    name.textContent = company.name;

    const ticker = document.createElement('p');
    ticker.className = 'company-ticker contrast-text';
    ticker.textContent = `Ticker: ${company.ticker}`;

    const sector = document.createElement('p');
    sector.className = 'company-sector contrast-text';
    sector.textContent = `Sector ID: ${company.sector_id || company.sectorId}`;

    basic.appendChild(name);
    basic.appendChild(ticker);
    basic.appendChild(sector);

    logoSection.appendChild(logoWrap);
    logoSection.appendChild(basic);

    const metrics = document.createElement('div');
    metrics.className = 'company-metrics';

    const createMetricCard = (label, value) => {
        const div = document.createElement('div');
        div.className = 'metric-card';
        const l = document.createElement('span');
        l.className = 'metric-label contrast-text';
        l.textContent = label;
        const v = document.createElement('span');
        v.className = 'metric-value contrast-text';
        v.textContent = value || 'N/A';
        div.appendChild(l);
        div.appendChild(v);
        return div;
    };

    metrics.appendChild(createMetricCard('Ticker', company.ticker));
    metrics.appendChild(createMetricCard('Share Price', company.share_price ? `$${company.share_price}` : 'N/A'));
    metrics.appendChild(createMetricCard('Market Cap', company.market_cap));
    metrics.appendChild(createMetricCard('Growth Rate', company.growth_rate));
    metrics.appendChild(createMetricCard('Sector ID', company.sector_id || company.sectorId));

    headerSection.appendChild(logoSection);
    headerSection.appendChild(metrics);

    const aboutSection = document.createElement('section');
    aboutSection.className = 'company-description glass-panel';

    const aboutTitle = document.createElement('h2');
    aboutTitle.className = 'section-title gradient-header';
    aboutTitle.textContent = `About ${company.name}`;

    const aboutText = document.createElement('p');
    aboutText.className = 'description-text contrast-text';
    aboutText.textContent = company.description || 'No description available for this company.';

    aboutSection.appendChild(aboutTitle);
    aboutSection.appendChild(aboutText);

    const actions = document.createElement('div');
    actions.className = 'action-buttons';

    const back = document.createElement('button');
    back.className = 'secondary-button';
    back.textContent = 'Back to Companies';
    back.addEventListener('click', () => {
        window.location.href = '/pages/companies/companies.html';
    });

    const watch = document.createElement('button');
    watch.className = 'secondary-button';
    watch.textContent = 'Add to Watchlist';
    watch.addEventListener('click', () => {
        watch.textContent = 'Added';
        setTimeout(() => {
            watch.textContent = 'Add to Watchlist';
        }, 1200);
    });

    const chart = document.createElement('button');
    chart.className = 'secondary-button';
    chart.textContent = 'buy';
    chart.addEventListener('click', () => {
        alert(`Chart page for ${company.ticker} will be added later.`);
    });

    actions.appendChild(back);
    actions.appendChild(watch);
    actions.appendChild(chart);

    container.appendChild(headerSection);
    container.appendChild(aboutSection);
    container.appendChild(actions);

    page.appendChild(container);
    root.appendChild(page);

    loadFooter();
});