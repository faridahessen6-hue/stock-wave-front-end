import loadHeader from "/components/header/header.js";
import loadFooter from "/components/footer/footer.js";
import { getCompanyDetailsBySymbol } from "/api/companies-api.js";

loadHeader();

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('company-details-root');
    const symbol = sessionStorage.getItem('selectedCompanySymbol');
    if (!symbol) return;
    const company = getCompanyDetailsBySymbol(symbol);

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
    ticker.textContent = company.symbol;

    const sector = document.createElement('p');
    sector.className = 'company-sector contrast-text';
    sector.textContent = company.sector;

    basic.appendChild(name);
    basic.appendChild(ticker);
    basic.appendChild(sector);

    logoSection.appendChild(logoWrap);
    logoSection.appendChild(basic);

    const metrics = document.createElement('div');
    metrics.className = 'company-metrics';

    const m1 = document.createElement('div');
    m1.className = 'metric-card';
    const m1Label = document.createElement('span');
    m1Label.className = 'metric-label contrast-text';
    m1Label.textContent = 'Symbol';
    const m1Value = document.createElement('span');
    m1Value.className = 'metric-value contrast-text';
    m1Value.textContent = company.symbol;
    m1.appendChild(m1Label);
    m1.appendChild(m1Value);

    const m2 = document.createElement('div');
    m2.className = 'metric-card';
    const m2Label = document.createElement('span');
    m2Label.className = 'metric-label contrast-text';
    m2Label.textContent = 'Sector';
    const m2Value = document.createElement('span');
    m2Value.className = 'metric-value contrast-text';
    m2Value.textContent = company.sector;
    m2.appendChild(m2Label);
    m2.appendChild(m2Value);

    const m3 = document.createElement('div');
    m3.className = 'metric-card';
    const m3Label = document.createElement('span');
    m3Label.className = 'metric-label contrast-text';
    m3Label.textContent = 'Company';
    const m3Value = document.createElement('span');
    m3Value.className = 'metric-value contrast-text';
    m3Value.textContent = company.name;
    m3.appendChild(m3Label);
    m3.appendChild(m3Value);

    metrics.appendChild(m1);
    metrics.appendChild(m2);
    metrics.appendChild(m3);

    headerSection.appendChild(logoSection);
    headerSection.appendChild(metrics);

    const aboutSection = document.createElement('section');
    aboutSection.className = 'company-description glass-panel';

    const aboutTitle = document.createElement('h2');
    aboutTitle.className = 'section-title gradient-header';
    aboutTitle.textContent = `About ${company.name}`;

    const aboutText = document.createElement('p');
    aboutText.className = 'description-text contrast-text';
    aboutText.textContent = 'This is a demo details page. When you connect the real backend, you can show more fields here.';

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
        alert(`Chart page for ${company.symbol} will be added later.`);
    });

    actions.appendChild(back);
    actions.appendChild(watch);
    actions.appendChild(chart);

    container.appendChild(headerSection);
    container.appendChild(aboutSection);
    container.appendChild(actions);

    page.appendChild(container);
    root.appendChild(page);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            window.location.href = '/pages/companies/companies.html';
        }
    });

    loadFooter();
});