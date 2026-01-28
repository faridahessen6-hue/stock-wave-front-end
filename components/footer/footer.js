export default function loadFooter() {
    // Ensure CSS is loaded
    if (!document.querySelector('link[href*="footer.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/components/footer/footer.css';
        document.head.appendChild(link);
    }

    const footer = document.createElement('footer');
    footer.className = 'footer';

    // Brand column
    const brandCol = document.createElement('div');
    brandCol.className = 'footer-column';

    const footerLogo = document.createElement('img');
    footerLogo.src = '/assets/images/logo.png';
    footerLogo.alt = 'Stock Waves Logo';
    footerLogo.className = 'footer-logo';
    footerLogo.style.width = '60px';
    footerLogo.style.height = '60px'; // Keep aspect ratio
    footerLogo.style.marginBottom = '10px';

    const brandName = document.createElement('h3');
    brandName.textContent = 'Stock Waves';

    const tagline = document.createElement('p');
    tagline.className = 'footer-tagline';
    tagline.textContent = 'Your gateway to smart investing';

    brandCol.appendChild(footerLogo); // Add logo
    brandCol.appendChild(brandName);
    brandCol.appendChild(tagline);

    // Quick Links column
    const linksCol = document.createElement('div');
    linksCol.className = 'footer-column';

    const linksTitle = document.createElement('h4');
    linksTitle.textContent = 'Quick Links';
    linksCol.appendChild(linksTitle);

    const links = [
        { text: 'Home', href: '/pages/home/home.html' },
        { text: 'Companies', href: '/pages/companies/companies.html' },
        { text: 'Sectors', href: '/pages/sector/sector.html' }
    ];

    links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text;
        a.className = 'footer-link';
        linksCol.appendChild(a);
    });

    // Resources column
    const resourcesCol = document.createElement('div');
    resourcesCol.className = 'footer-column';

    const resourcesTitle = document.createElement('h4');
    resourcesTitle.textContent = 'Resources';
    resourcesCol.appendChild(resourcesTitle);

    const resources = ['Help Center', 'Terms of Service', 'Privacy Policy'];
    resources.forEach(text => {
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = text;
        a.className = 'footer-link';
        resourcesCol.appendChild(a);
    });

    // Contact column
    const contactCol = document.createElement('div');
    contactCol.className = 'footer-column';

    const contactTitle = document.createElement('h4');
    contactTitle.textContent = 'Contact';
    contactCol.appendChild(contactTitle);

    const email = document.createElement('a');
    email.href = 'mailto:support@stockwaves.com';
    email.textContent = 'support@stockwaves.com';
    email.className = 'footer-link';
    contactCol.appendChild(email);

    // Add all columns
    footer.appendChild(brandCol);
    footer.appendChild(linksCol);
    footer.appendChild(resourcesCol);
    footer.appendChild(contactCol);

    // Removed Copyright bar as requested

    document.body.appendChild(footer);
}
