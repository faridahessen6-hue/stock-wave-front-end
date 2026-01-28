const advantagesContainer = document.createElement("div");
advantagesContainer.className = "advantages-container glass-panel";

const advantagesImg = document.createElement("img");
advantagesImg.className = "advantages-img";
advantagesImg.src = "/assets/images/advantages.png";
advantagesImg.alt = "Stock Market Advantages";

// Create content wrapper for header and list
const advantagesContent = document.createElement("div");
advantagesContent.className = "advantages-content";

const advantagesHeader = document.createElement("h2");
advantagesHeader.className = "advantages-header gradient-header";
advantagesHeader.textContent = "Advantages of Our Platform";

// Create list container
const advantagesList = document.createElement("div");
advantagesList.className = "advantages-list";

const advantages = [
    "Real-time stock prices tracking",
    "Company profiles and financial data",
    "Market news and updates",
    "Portfolio management tools",
    "Educational resources for investors",
    "Daily market summary",
    "Expert analysis and insights"
];

// Create advantage items
advantages.forEach(function (text) {
    const item = document.createElement("p");
    item.className = "advantage-item contrast-text";
    item.textContent = text;
    advantagesList.appendChild(item);
});

// Build structure
advantagesContent.appendChild(advantagesHeader);
advantagesContent.appendChild(advantagesList);

advantagesContainer.appendChild(advantagesImg);
advantagesContainer.appendChild(advantagesContent);

export default advantagesContainer;