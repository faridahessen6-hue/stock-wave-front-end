export default function loadHeader() {
    if (!document.querySelector('link[href*="bootstrap-icons"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css';
        link.crossOrigin = 'anonymous';
        link.referrerPolicy = 'no-referrer';
        document.head.appendChild(link);
    }

    if (!document.querySelector('link[href*="global.css"]')) {
        const globalLink = document.createElement('link');
        globalLink.rel = 'stylesheet';
        globalLink.href = '/assets/css/global.css';
        document.head.appendChild(globalLink);
    }

    if (!document.querySelector('link[href*="header"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/components/header/header.css';
        document.head.appendChild(link);
    }

    const header = document.createElement('header');

    const logoContainer = document.createElement('div');
    logoContainer.className = 'logo-container';

    const logo = document.createElement('img');
    logo.src = '/assets/images/logo.png';
    logo.alt = 'Stock Waves Logo';
    logo.style.cursor = 'pointer';
    logo.style.width = '60px';
    logo.style.height = '60px';
    logo.style.marginRight = '20px';

    logo.onclick = function () {
        window.location.href = '/pages/home/home.html';
    };

    logoContainer.appendChild(logo);

    const nav = document.createElement('nav');

    const askBtn = document.createElement('button');
    askBtn.className = 'header-link-btn';
    askBtn.textContent = 'ask';
    askBtn.onclick = function () {
        window.location.href = '/pages/ask/ask.html';
    };

    const companiesBtn = document.createElement('button');
    companiesBtn.className = 'header-link-btn';
    companiesBtn.textContent = 'Companies';
    companiesBtn.onclick = function () {
        window.location.href = '/pages/companies/companies.html';
    };

    const sectorBtn = document.createElement('button');
    sectorBtn.className = 'header-link-btn';
    sectorBtn.textContent = 'Sectors';
    sectorBtn.onclick = function () {
        window.location.href = '/pages/sector/sector.html';
    };

    const signBtn = document.createElement('button');
    signBtn.className = 'sign-btn';
    signBtn.textContent = 'Sign Up';
    signBtn.onclick = function () {
        window.location.href = '/pages/register/register.html';
    };

    nav.appendChild(askBtn);
    nav.appendChild(companiesBtn);
    nav.appendChild(sectorBtn);

    header.appendChild(logoContainer);
    header.appendChild(nav);
    header.appendChild(signBtn);

    document.body.prepend(header);
}
