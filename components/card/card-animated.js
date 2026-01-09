// Helper function to create elements
function createElement(tag, className = '', textContent = '') {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    return element;
}

export default function createAnimatedCard(titleText = "Card", subtitleText = "text", yearText = "2025", uiverseLabel = "UIverse", cardLabel = "card") {
    // Ensure CSS is loaded
    if (!document.querySelector('link[href*="card-animated"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/components/card/card-animated.css';
        document.head.appendChild(link);
    }

    // Create the main container
    const container = createElement('div', 'animated-card-container');

    // Create background overlay with gradient
    const bgOverlay = createElement('div', 'bg-overlay');
    const cardBackground = createElement('div', 'card-background');
    bgOverlay.appendChild(cardBackground);
    container.appendChild(bgOverlay);

    // Create the card content with spinning element
    const cardContent = createElement('div', 'card-content');
    const spinningElement = createElement('div', 'spinning-element');
    cardContent.appendChild(spinningElement);
    container.appendChild(cardContent);

    // Create the info section
    const infoSection = createElement('div', 'info-section');

    // Left panel
    const leftPanel = createElement('div', 'left-panel');
    const title = createElement('span', 'title', titleText);
    const subtitle = createElement('span', 'subtitle', subtitleText);
    const year = createElement('div', 'year', yearText);
    
    leftPanel.appendChild(title);
    leftPanel.appendChild(subtitle);
    leftPanel.appendChild(year);

    // Right panel
    const rightPanel = createElement('div', 'right-panel');
    const uiLabel = createElement('span', 'ui-label', uiverseLabel);
    const cardLabelElement = createElement('span', 'label', cardLabel);

    // Icon container
    const iconContainer = createElement('div', 'icon-container');
    
    // Create SVG for arrow icon
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("xmlns", svgNS);
    svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.setAttribute("viewBox", "0 0 12 12");
    svg.setAttribute("class", "w-4 h-4");

    const g = document.createElementNS(svgNS, "g");
    g.setAttribute("fill", "none");

    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", "M4.646 2.146a.5.5 0 0 0 0 .708L7.793 6L4.646 9.146a.5.5 0 1 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z");
    path.setAttribute("fill", "currentColor");

    g.appendChild(path);
    svg.appendChild(g);
    
    const arrowIcon = createElement('span', 'arrow-icon');
    arrowIcon.appendChild(svg);
    iconContainer.appendChild(arrowIcon);

    rightPanel.appendChild(uiLabel);
    rightPanel.appendChild(cardLabelElement);
    rightPanel.appendChild(iconContainer);

    infoSection.appendChild(leftPanel);
    infoSection.appendChild(rightPanel);
    container.appendChild(infoSection);

    // Add hover effect to icon
    iconContainer.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });

    iconContainer.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });

    return container;
}