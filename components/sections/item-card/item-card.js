export default function createCard(titleText = "Card", subtitleText = "text", yearText = "2025", uiverseLabel = "UIverse", cardLabel = "card") {
    // Ensure CSS is loaded
    if (!document.querySelector('link[href*="item-card"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/components/item-card/item-card.css';
        document.head.appendChild(link);
    }

    // Create main container
    const container = document.createElement('div');
    container.className = 'animated-card-container';

    // Create background overlay with gradient
    const bgOverlay = document.createElement('div');
    bgOverlay.className = 'bg-overlay';
    const cardBackground = document.createElement('div');
    cardBackground.className = 'card-background';
    bgOverlay.appendChild(cardBackground);
    container.appendChild(bgOverlay);

    // Create card content with spinning element
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';
    const spinningElement = document.createElement('div');
    spinningElement.className = 'spinning-element';
    cardContent.appendChild(spinningElement);
    container.appendChild(cardContent);

    // Create info section
    const infoSection = document.createElement('div');
    infoSection.className = 'info-section';

    // Left panel
    const leftPanel = document.createElement('div');
    leftPanel.className = 'left-panel';
    const title = document.createElement('span');
    title.className = 'title';
    title.textContent = titleText;
    const subtitle = document.createElement('span');
    subtitle.className = 'subtitle';
    subtitle.textContent = subtitleText;
    const year = document.createElement('div');
    year.className = 'year';
    year.textContent = yearText;

    leftPanel.appendChild(title);
    leftPanel.appendChild(subtitle);
    leftPanel.appendChild(year);

    // Right panel
    const rightPanel = document.createElement('div');
    rightPanel.className = 'right-panel';
    const uiLabel = document.createElement('span');
    uiLabel.className = 'ui-label';
    uiLabel.textContent = uiverseLabel;
    const cardLabelElement = document.createElement('span');
    cardLabelElement.className = 'label';
    cardLabelElement.textContent = cardLabel;

    // Icon container
    const iconContainer = document.createElement('div');
    iconContainer.className = 'icon-container';

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

    const arrowIcon = document.createElement('span');
    arrowIcon.className = 'arrow-icon';
    arrowIcon.appendChild(svg);
    iconContainer.appendChild(arrowIcon);

    rightPanel.appendChild(uiLabel);
    rightPanel.appendChild(cardLabelElement);
    rightPanel.appendChild(iconContainer);

    infoSection.appendChild(leftPanel);
    infoSection.appendChild(rightPanel);
    container.appendChild(infoSection);

    return container;
}
