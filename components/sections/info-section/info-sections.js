export function createAllSections() {
    // Ensure CSS is loaded
    if (!document.querySelector('link[href*="info-sections"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/components/sections/info-section/info-sections.css';
        document.head.appendChild(link);
    }

    const sections = [];

    // Section 1: Real-time Data
    const section1 = document.createElement('div');
    section1.className = 'homediv';

    const title1 = document.createElement('h3');
    title1.className = 'section-title';
    title1.textContent = 'Real-time Data';

    const desc1 = document.createElement('p');
    desc1.className = 'homediv-title';
    desc1.textContent = 'Get up-to-the-second market data and live price updates for all your favorite stocks.';

    const btn1 = document.createElement('button');
    btn1.className = 'learn-more-button';
    btn1.textContent = 'Learn More';

    section1.appendChild(title1);
    section1.appendChild(desc1);
    section1.appendChild(btn1);
    sections.push(section1);

    // Section 2: Market Analysis
    const section2 = document.createElement('div');
    section2.className = 'homediv';

    const title2 = document.createElement('h3');
    title2.className = 'section-title';
    title2.textContent = 'Market Analysis';

    const desc2 = document.createElement('p');
    desc2.className = 'homediv-title';
    desc2.textContent = 'In-depth analysis and expert insights to help you identify the best investment opportunities.';

    const btn2 = document.createElement('button');
    btn2.className = 'learn-more-button';
    btn2.textContent = 'Learn More';

    section2.appendChild(title2);
    section2.appendChild(desc2);
    section2.appendChild(btn2);
    sections.push(section2);

    // Section 3: Portfolio Tools
    const section3 = document.createElement('div');
    section3.className = 'homediv';

    const title3 = document.createElement('h3');
    title3.className = 'section-title';
    title3.textContent = 'Portfolio Tools';

    const desc3 = document.createElement('p');
    desc3.className = 'homediv-title';
    desc3.textContent = 'Advanced tools to track, manage, and optimize your investment portfolio performance.';

    const btn3 = document.createElement('button');
    btn3.className = 'learn-more-button';
    btn3.textContent = 'Learn More';

    section3.appendChild(title3);
    section3.appendChild(desc3);
    section3.appendChild(btn3);
    sections.push(section3);

    return sections;
}
