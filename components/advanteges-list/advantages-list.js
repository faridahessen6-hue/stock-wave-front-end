// Create main advantages wrapper
const advantagesWrapper = document.createElement("section");
advantagesWrapper.className = "advantages-wrapper";

// Create advantages image with enhanced styling
const advantagesImg = document.createElement("img");
advantagesImg.className = "advantages-img";
advantagesImg.src = "/assets/images/advantages.png";
advantagesImg.alt = "Stock Market Advantages";
advantagesImg.loading = "lazy";

// Create main advantages container
const advantagesContainer = document.createElement("div");
advantagesContainer.className = "advantages-container glass-panel";

// Create header section
const headerSection = document.createElement("div");
headerSection.className = "advantages-header-section";

const advantagesHeader = document.createElement("h2");
advantagesHeader.className = "advantages-header gradient-header";
advantagesHeader.textContent = "Platform Advantages";

const advantagesSubtitle = document.createElement("p");
advantagesSubtitle.className = "advantages-subtitle";
advantagesSubtitle.textContent = "Everything you need for successful investing";

headerSection.appendChild(advantagesHeader);
headerSection.appendChild(advantagesSubtitle);

// Create advantages grid
const advantagesGrid = document.createElement("div");
advantagesGrid.className = "advantages-grid";

// Enhanced advantages data with categories
const advantageCategories = [
    {
        title: "Market Data",
        icon: "📊",
        items: [
            "Real-time stock prices tracking",
            "Live market updates",
            "Historical data analysis"
        ]
    },
    {
        title: "Company Insights", 
        icon: "🏢",
        items: [
            "Company profiles and financial data",
            "Executive information",
            "Industry comparisons"
        ]
    },
    {
        title: "News & Analysis",
        icon: "📰", 
        items: [
            "Market news and updates",
            "Expert analysis and insights",
            "Economic indicators"
        ]
    },
    {
        title: "Portfolio Tools",
        icon: "💼",
        items: [
            "Portfolio management tools",
            "Performance tracking",
            "Risk assessment"
        ]
    },
    {
        title: "Education",
        icon: "📚",
        items: [
            "Educational resources for investors",
            "Trading tutorials",
            "Investment guides"
        ]
    },
    {
        title: "Advanced Features",
        icon: "⚡",
        items: [
            "Lightning-fast trade execution",
            "Custom alerts",
            "API access"
        ]
    }
];

// Create category cards
advantageCategories.forEach(function (category, categoryIndex) {
    const categoryCard = document.createElement("div");
    categoryCard.className = "advantage-category";
    categoryCard.style.animationDelay = `${categoryIndex * 0.15}s`;
    
    const categoryHeader = document.createElement("div");
    categoryHeader.className = "category-header";
    
    const categoryIcon = document.createElement("div");
    categoryIcon.className = "category-icon";
    categoryIcon.textContent = category.icon;
    
    const categoryTitle = document.createElement("h3");
    categoryTitle.className = "category-title";
    categoryTitle.textContent = category.title;
    
    categoryHeader.appendChild(categoryIcon);
    categoryHeader.appendChild(categoryTitle);
    
    const categoryItems = document.createElement("ul");
    categoryItems.className = "category-items";
    
    category.items.forEach(function (item, itemIndex) {
        const listItem = document.createElement("li");
        listItem.className = "category-item";
        listItem.style.animationDelay = `${categoryIndex * 0.15 + itemIndex * 0.05}s`;
        listItem.textContent = item;
        categoryItems.appendChild(listItem);
    });
    
    categoryCard.appendChild(categoryHeader);
    categoryCard.appendChild(categoryItems);
    advantagesGrid.appendChild(categoryCard);
});

// Create call-to-action section
const ctaSection = document.createElement("div");
ctaSection.className = "advantages-cta";

const ctaText = document.createElement("p");
ctaText.className = "cta-text";
ctaText.textContent = "Ready to transform your investment journey?";

const ctaButton = document.createElement("button");
ctaButton.className = "cta-button";
ctaButton.textContent = "Get Started Today";
ctaButton.type = "button";

ctaSection.appendChild(ctaText);
ctaSection.appendChild(ctaButton);

// Assemble the container
advantagesContainer.appendChild(headerSection);
advantagesContainer.appendChild(advantagesGrid);
advantagesContainer.appendChild(ctaSection);

// Assemble the wrapper
advantagesWrapper.appendChild(advantagesImg);
advantagesWrapper.appendChild(advantagesContainer);

export default advantagesWrapper;