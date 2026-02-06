import loadHeader from '/components/header/header.js';
import loadFooter from '/components/footer/footer.js';

loadHeader();

const newsRoot = document.getElementById('news-root') || document.body;

// Create floating particles for special effect
function createFloatingParticles() {
    const particleCount = 15;
    const colors = ['#A5AE9E', '#ffffff', 'rgba(255, 255, 255, 0.5)'];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: fixed;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 4 + 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
            z-index: 0;
        `;
        document.body.appendChild(particle);
    }
}

// Create page header with special effects
const pageHeader = document.createElement('div');
pageHeader.className = 'page-header glass-panel';

const pageTitle = document.createElement('h1');
pageTitle.className = 'page-title gradient-header';
pageTitle.textContent = 'Market News & Insights';

const pageSubtitle = document.createElement('p');
pageSubtitle.className = 'page-subtitle contrast-text';
pageSubtitle.textContent = 'Stay updated with the latest market trends, company news, and investment insights';

pageHeader.appendChild(pageTitle);
pageHeader.appendChild(pageSubtitle);

// Create news container
const newsContainer = document.createElement('div');
newsContainer.className = 'news-container';

// Featured news section with enhanced content
const featuredSection = document.createElement('div');
featuredSection.className = 'featured-section';

const featuredNews = document.createElement('div');
featuredNews.className = 'featured-news glass-panel';

const featuredTitle = document.createElement('h2');
featuredTitle.className = 'featured-title';
featuredTitle.textContent = '🚀 Breaking: Tech Stocks Rally on AI Innovation Surge';

const featuredDescription = document.createElement('p');
featuredDescription.className = 'featured-description contrast-text';
featuredDescription.textContent = 'Major technology companies see significant gains as artificial intelligence advancements drive investor confidence. Market analysts predict continued growth in the sector through 2024 with unprecedented investment flows.';

const featuredMeta = document.createElement('div');
featuredMeta.className = 'featured-meta contrast-text';
featuredMeta.innerHTML = `
    <span class="news-source">📊 Reuters</span>
    <span class="news-time">⏰ 2 hours ago</span>
`;

featuredNews.appendChild(featuredTitle);
featuredNews.appendChild(featuredDescription);
featuredNews.appendChild(featuredMeta);
featuredSection.appendChild(featuredNews);

// Enhanced news grid with special content
const newsGrid = document.createElement('div');
newsGrid.className = 'news-grid';

// Enhanced news data with emojis and special formatting
const newsData = [
    {
        category: '📈 Shares',
        title: '🍎 Apple Shares Hit Record High After Q4 Earnings Beat',
        source: 'Bloomberg',
        time: '4 hours ago',
        description: 'Apple Inc. shares surged to an all-time high following better-than-expected quarterly earnings. The company reported strong iPhone sales and growing services revenue, exceeding analyst predictions.',
        tags: ['AAPL', 'Earnings', 'Technology'],
        special: true
    },
    {
        category: '🏢 Companies',
        title: '🚗 Tesla Announces New Gigafactory in Mexico',
        source: 'CNBC',
        time: '6 hours ago',
        description: 'Tesla reveals plans for a new manufacturing facility in Mexico, aiming to boost production capacity for its electric vehicles and reduce delivery times across North America.',
        tags: ['TSLA', 'Expansion', 'EV'],
        special: false
    },
    {
        category: '📊 Shares',
        title: '☁️ Microsoft Cloud Revenue Drives Stock Higher',
        source: 'Wall Street Journal',
        time: '8 hours ago',
        description: 'Microsoft shares climbed as the company reported strong cloud computing growth, with Azure revenue exceeding analyst expectations by 15% in the latest quarter.',
        tags: ['MSFT', 'Cloud', 'Software'],
        special: true
    },
    {
        category: '🏭 Companies',
        title: '🏥 Amazon Expands Healthcare Division with New Acquisition',
        source: 'Financial Times',
        time: '10 hours ago',
        description: 'Amazon continues its push into healthcare with the acquisition of a primary care provider, marking its biggest healthcare investment to date.',
        tags: ['AMZN', 'Healthcare', 'M&A'],
        special: false
    },
    {
        category: '📈 Shares',
        title: '🎮 NVIDIA Stock Soars on AI Chip Demand',
        source: 'Reuters',
        time: '12 hours ago',
        description: 'NVIDIA shares jumped 12% after reporting unprecedented demand for its AI processors, with orders extending through 2024 and beyond.',
        tags: ['NVDA', 'AI', 'Semiconductors'],
        special: true
    },
    {
        category: '🌐 Companies',
        title: '🥽 Meta Unveils New VR Headset for Business',
        source: 'TechCrunch',
        time: '14 hours ago',
        description: 'Meta Platforms launches a new virtual reality headset specifically designed for business applications and remote collaboration.',
        tags: ['META', 'VR', 'Innovation'],
        special: false
    }
];

// Create enhanced news cards with special effects
newsData.forEach((news, index) => {
    const newsCard = document.createElement('div');
    newsCard.className = `news-card glass-panel ${news.special ? 'special-card' : ''}`;
    newsCard.style.animationDelay = `${index * 0.15}s`;

    const category = document.createElement('span');
    category.className = 'news-category';
    category.textContent = news.category;

    const title = document.createElement('h3');
    title.className = 'news-title';
    title.textContent = news.title;

    const meta = document.createElement('div');
    meta.className = 'news-meta contrast-text';
    meta.innerHTML = `
        <span class="news-source">${news.source}</span>
        <span class="news-time">${news.time}</span>
    `;

    const description = document.createElement('p');
    description.className = 'news-description';
    description.textContent = news.description;

    const tags = document.createElement('div');
    tags.className = 'news-tags';
    
    news.tags.forEach(tagItem => {
        const tag = document.createElement('span');
        tag.className = 'news-tag';
        tag.textContent = tagItem;
        tags.appendChild(tag);
    });

    const readMoreBtn = document.createElement('a');
    readMoreBtn.className = 'read-more-btn';
    readMoreBtn.href = '#';
    readMoreBtn.textContent = '📖 Read More';
    readMoreBtn.onclick = (e) => {
        e.preventDefault();
        // Special effect on click
        newsCard.style.transform = 'scale(0.95)';
        setTimeout(() => {
            newsCard.style.transform = '';
            console.log(`📰 Reading article: ${news.title}`);
        }, 200);
    };

    newsCard.appendChild(category);
    newsCard.appendChild(title);
    newsCard.appendChild(meta);
    newsCard.appendChild(description);
    newsCard.appendChild(tags);
    newsCard.appendChild(readMoreBtn);

    // Add special hover effect for important news
    if (news.special) {
        newsCard.addEventListener('mouseenter', () => {
            newsCard.style.boxShadow = '0 25px 50px rgba(165, 174, 158, 0.4), 0 0 30px rgba(165, 174, 158, 0.3)';
        });
        
        newsCard.addEventListener('mouseleave', () => {
            newsCard.style.boxShadow = '';
        });
    }

    newsGrid.appendChild(newsCard);
});

// Add special CSS for special cards
const specialStyle = document.createElement('style');
specialStyle.textContent = `
    .special-card {
        border: 2px solid rgba(165, 174, 158, 0.4) !important;
        background: linear-gradient(135deg, rgba(165, 174, 158, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%) !important;
    }
    
    .special-card::before {
        background: linear-gradient(90deg, #A5AE9E, #ffffff, #A5AE9E, #ffffff, #A5AE9E) !important;
        background-size: 300% 100% !important;
    }
    
    .special-card:hover {
        transform: translateY(-15px) rotateX(3deg) scale(1.02) !important;
    }
`;
document.head.appendChild(specialStyle);

// Assemble the page
newsContainer.appendChild(featuredSection);
newsContainer.appendChild(newsGrid);

// Add to DOM
newsRoot.appendChild(pageHeader);
newsRoot.appendChild(newsContainer);

// Initialize floating particles
createFloatingParticles();

// Add interactive background effect
newsRoot.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    document.documentElement.style.setProperty('--mouse-x', x);
    document.documentElement.style.setProperty('--mouse-y', y);
});

// Load footer
loadFooter();
