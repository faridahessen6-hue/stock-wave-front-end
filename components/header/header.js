export default function loadHeader() {
    // Ensure Bootstrap Icons are loaded
    if (!document.querySelector('link[href*="bootstrap-icons"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css';
        link.crossOrigin = 'anonymous';
        link.referrerPolicy = 'no-referrer';
        document.head.appendChild(link);
    }

    // Ensure global CSS is loaded
    if (!document.querySelector('link[href*="global.css"]')) {
        const globalLink = document.createElement('link');
        globalLink.rel = 'stylesheet';
        globalLink.href = '/assets/css/global.css';
        document.head.appendChild(globalLink);
    }

    // Ensure css are loaded
    if (!document.querySelector('link[href*="header"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/components/header/header.css';
        document.head.appendChild(link);
    }

    const header = document.createElement('header');

    // Logo
    const logoContainer = document.createElement('div');
    logoContainer.className = 'logo-container';

    const logo = document.createElement('img');
    logo.src = '/assets/images/logo.png';
    logo.alt = 'Stock Waves Logo';
    logo.style.cursor = 'pointer';
    logo.style.width = '60px'; // Reduced size to match footer
    logo.style.height = '60px';
    logo.style.marginRight = '20px';

    logo.onclick = function () {
        window.location.href = '/pages/Ask/ask.html';
    };

    logoContainer.appendChild(logo);

    // Navigation
    const nav = document.createElement('nav');

    // ask Link
    const askBtn = document.createElement('button');
    askBtn.className = 'header-link-btn';
    askBtn.textContent = 'ask';
    askBtn.onclick = function () {
        window.location.href = '/pages/ask/ask.html';
    };

    // Companies Link
    const companiesBtn = document.createElement('button');
    companiesBtn.className = 'header-link-btn';
    companiesBtn.textContent = 'Companies';
    companiesBtn.onclick = function () {
        window.location.href = '/pages/companies/companies.html';
    };

    // Sectors Link
    const sectorBtn = document.createElement('button');
    sectorBtn.className = 'header-link-btn';
    sectorBtn.textContent = 'Sectors';
    sectorBtn.onclick = function () {
        window.location.href = '/pages/sector/sector.html';
    };

    // Sign Up Button
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
