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
    footerLogo.style.width = '50px';
    footerLogo.style.height = '50px';

    const brandName = document.createElement('h3');
    brandName.textContent = 'Stock Waves';

    const tagline = document.createElement('p');
    tagline.className = 'footer-tagline';
    tagline.textContent = 'Smart Investment Platform';

    brandCol.appendChild(footerLogo);
    brandCol.appendChild(brandName);
    brandCol.appendChild(tagline);

    // Navigation column
    const navCol = document.createElement('div');
    navCol.className = 'footer-column';

    const navTitle = document.createElement('h4');
    navTitle.textContent = 'Navigation';
    navCol.appendChild(navTitle);

    const navLinks = [
        { text: 'Home', href: '/pages/home/home.html' },
        { text: 'Companies', href: '/pages/companies/companies.html' },
        { text: 'Sectors', href: '/pages/sector/sector.html' },
        { text: 'News', href: '/pages/news/news.html' }
    ];

    navLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text;
        a.className = 'footer-link';
        navCol.appendChild(a);
    });

    // Services column
    const servicesCol = document.createElement('div');
    servicesCol.className = 'footer-column';

    const servicesTitle = document.createElement('h4');
    servicesTitle.textContent = 'Services';
    servicesCol.appendChild(servicesTitle);

    const services = ['Market Analysis', 'Portfolio Tracking', 'Real-time Data', 'Investment Tools'];
    services.forEach(text => {
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = text;
        a.className = 'footer-link';
        servicesCol.appendChild(a);
    });

    // Legal column
    const legalCol = document.createElement('div');
    legalCol.className = 'footer-column';

    const legalTitle = document.createElement('h4');
    legalTitle.textContent = 'Legal';
    legalCol.appendChild(legalTitle);

    const legalLinks = ['Terms of Service', 'Privacy Policy', 'Cookie Policy'];
    legalLinks.forEach(text => {
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = text;
        a.className = 'footer-link';
        legalCol.appendChild(a);
    });

    // Contact column
    const contactCol = document.createElement('div');
    contactCol.className = 'footer-column';

    const contactTitle = document.createElement('h4');
    contactTitle.textContent = 'Contact';
    contactCol.appendChild(contactTitle);

    const email = document.createElement('a');
    email.href = 'mailto:info@stockwaves.com';
    email.textContent = 'info@stockwaves.com';
    email.className = 'footer-link';

    const phone = document.createElement('p');
    phone.className = 'footer-contact';
    phone.textContent = '+1 (555) 123-4567';

    contactCol.appendChild(email);
    contactCol.appendChild(phone);

    // Social media section
    const socialCol = document.createElement('div');
    socialCol.className = 'footer-column social-column';

    const socialTitle = document.createElement('h4');
    socialTitle.textContent = 'Follow Us';
    socialCol.appendChild(socialTitle);

    const socialLinks = document.createElement('div');
    socialLinks.className = 'social-links';

    const socialIcons = [
        { name: 'Twitter', icon: '🐦' },
        { name: 'LinkedIn', icon: '💼' },
        { name: 'Facebook', icon: '📘' }
    ];

    socialIcons.forEach(social => {
        const a = document.createElement('a');
        a.href = '#';
        a.className = 'social-link';
        a.textContent = social.icon;
        a.title = social.name;
        socialLinks.appendChild(a);
    });

    socialCol.appendChild(socialTitle);
    socialCol.appendChild(socialLinks);

    // Copyright section
    const copyright = document.createElement('div');
    copyright.className = 'footer-copyright';
    copyright.innerHTML = `&copy; ${new Date().getFullYear()} Stock Waves. All rights reserved.`;

    // Add all sections
    footer.appendChild(brandCol);
    footer.appendChild(navCol);
    footer.appendChild(servicesCol);
    footer.appendChild(legalCol);
    footer.appendChild(contactCol);
    footer.appendChild(socialCol);
    footer.appendChild(copyright);

    document.body.appendChild(footer);
}