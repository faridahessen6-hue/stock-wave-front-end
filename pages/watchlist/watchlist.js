import loadHeader from '/components/header/header.js';
import loadFooter from '/components/footer/footer.js';

// Load the header
loadHeader();

const watchlistPage = document.getElementById('watchlist-page') || document.body;

// Sample watchlist data
let watchlist = [
    {
        id: 1,
        symbol: 'AAPL',
        name: 'Apple Inc.',
        price: 178.45,
        change: 2.34,
        changePercent: 1.33,
        volume: '52.3M'
    },
    {
        id: 2,
        symbol: 'GOOGL',
        name: 'Alphabet Inc.',
        price: 142.67,
        change: -0.89,
        changePercent: -0.62,
        volume: '28.1M'
    },
    {
        id: 3,
        symbol: 'MSFT',
        name: 'Microsoft Corporation',
        price: 378.92,
        change: 5.23,
        changePercent: 1.40,
        volume: '21.5M'
    }
];

// Create page header
function createHeader() {
    const headerSection = document.createElement('div');
    headerSection.className = 'watchlist-header';

    const title = document.createElement('h1');
    title.className = 'page-title';
    title.textContent = 'My Watchlist';

    const subtitle = document.createElement('p');
    subtitle.className = 'page-subtitle';
    subtitle.textContent = 'Track your favorite stocks and monitor their performance';

    headerSection.appendChild(title);
    headerSection.appendChild(subtitle);

    return headerSection;
}

// Create controls section
function createControls() {
    const controlsSection = document.createElement('div');
    controlsSection.className = 'watchlist-controls';

    // Search container
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.className = 'search-input';
    searchInput.placeholder = 'Search stocks to add...';

    searchContainer.appendChild(searchInput);

    // Control buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'control-buttons';

    const addButton = document.createElement('button');
    addButton.className = 'btn btn-add';
    addButton.textContent = 'Add Stock';
    addButton.onclick = handleAddStock;

    const clearButton = document.createElement('button');
    clearButton.className = 'btn btn-clear';
    clearButton.textContent = 'Clear All';
    clearButton.onclick = handleClearWatchlist;

    buttonContainer.appendChild(addButton);
    buttonContainer.appendChild(clearButton);

    controlsSection.appendChild(searchContainer);
    controlsSection.appendChild(buttonContainer);

    return controlsSection;
}

// Create watchlist item
function createWatchlistItem(stock) {
    const item = document.createElement('div');
    item.className = 'watchlist-item';
    item.dataset.id = stock.id;

    // Item header
    const itemHeader = document.createElement('div');
    itemHeader.className = 'item-header';

    const companyInfo = document.createElement('div');
    
    const companyName = document.createElement('h3');
    companyName.className = 'company-name';
    companyName.textContent = stock.name;

    const stockSymbol = document.createElement('span');
    stockSymbol.className = 'stock-symbol';
    stockSymbol.textContent = stock.symbol;

    companyInfo.appendChild(companyName);
    companyInfo.appendChild(stockSymbol);

    // Remove button
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.innerHTML = '×';
    removeBtn.onclick = () => handleRemoveStock(stock.id);

    itemHeader.appendChild(companyInfo);
    itemHeader.appendChild(removeBtn);

    // Stock info grid
    const stockInfo = document.createElement('div');
    stockInfo.className = 'stock-info';

    // Price info
    const priceInfo = document.createElement('div');
    priceInfo.className = 'info-item';

    const priceLabel = document.createElement('span');
    priceLabel.className = 'info-label';
    priceLabel.textContent = 'Current Price';

    const priceValue = document.createElement('span');
    priceValue.className = `info-value ${stock.change >= 0 ? 'price-positive' : stock.change < 0 ? 'price-negative' : 'price-neutral'}`;
    priceValue.textContent = `$${stock.price.toFixed(2)}`;

    priceInfo.appendChild(priceLabel);
    priceInfo.appendChild(priceValue);

    // Change info
    const changeInfo = document.createElement('div');
    changeInfo.className = 'info-item';

    const changeLabel = document.createElement('span');
    changeLabel.className = 'info-label';
    changeLabel.textContent = 'Daily Change';

    const changeValue = document.createElement('span');
    changeValue.className = `info-value ${stock.change >= 0 ? 'price-positive' : stock.change < 0 ? 'price-negative' : 'price-neutral'}`;
    changeValue.textContent = `${stock.change >= 0 ? '+' : ''}${stock.change.toFixed(2)} (${stock.changePercent >= 0 ? '+' : ''}${stock.changePercent.toFixed(2)}%)`;

    changeInfo.appendChild(changeLabel);
    changeInfo.appendChild(changeValue);

    // Volume info
    const volumeInfo = document.createElement('div');
    volumeInfo.className = 'info-item';

    const volumeLabel = document.createElement('span');
    volumeLabel.className = 'info-label';
    volumeLabel.textContent = 'Volume';

    const volumeValue = document.createElement('span');
    volumeValue.className = 'info-value';
    volumeValue.textContent = stock.volume;

    volumeInfo.appendChild(volumeLabel);
    volumeInfo.appendChild(volumeValue);

    stockInfo.appendChild(priceInfo);
    stockInfo.appendChild(changeInfo);
    stockInfo.appendChild(volumeInfo);

    item.appendChild(itemHeader);
    item.appendChild(stockInfo);

    return item;
}

// Create empty state
function createEmptyState() {
    const emptyState = document.createElement('div');
    emptyState.className = 'empty-state';

    const emptyIcon = document.createElement('div');
    emptyIcon.className = 'empty-icon';
    emptyIcon.textContent = '📊';

    const emptyTitle = document.createElement('h3');
    emptyTitle.className = 'empty-title';
    emptyTitle.textContent = 'Your Watchlist is Empty';

    const emptyText = document.createElement('p');
    emptyText.className = 'empty-text';
    emptyText.textContent = 'Start adding stocks to track their performance and receive real-time updates. Use the search bar above to find and add your favorite stocks.';

    emptyState.appendChild(emptyIcon);
    emptyState.appendChild(emptyTitle);
    emptyState.appendChild(emptyText);

    return emptyState;
}

// Render watchlist
function renderWatchlist() {
    // Clear existing content
    watchlistPage.innerHTML = '';

    // Create and append header
    const header = createHeader();
    watchlistPage.appendChild(header);

    // Create and append controls
    const controls = createControls();
    watchlistPage.appendChild(controls);

    // Create watchlist grid
    const watchlistGrid = document.createElement('div');
    watchlistGrid.className = 'watchlist-grid';

    if (watchlist.length === 0) {
        const emptyState = createEmptyState();
        watchlistPage.appendChild(emptyState);
    } else {
        watchlist.forEach(stock => {
            const item = createWatchlistItem(stock);
            watchlistGrid.appendChild(item);
        });
        watchlistPage.appendChild(watchlistGrid);
    }
}

// Handle adding stock
function handleAddStock() {
    const searchInput = document.querySelector('.search-input');
    const symbol = searchInput.value.trim().toUpperCase();

    if (!symbol) {
        alert('Please enter a stock symbol');
        return;
    }

    // Check if stock already exists
    if (watchlist.some(stock => stock.symbol === symbol)) {
        alert(`${symbol} is already in your watchlist`);
        searchInput.value = '';
        return;
    }

    // Add new stock (in real app, this would fetch from API)
    const newStock = {
        id: Date.now(),
        symbol: symbol,
        name: `${symbol} Corporation`,
        price: Math.random() * 500 + 50,
        change: (Math.random() - 0.5) * 10,
        changePercent: (Math.random() - 0.5) * 5,
        volume: `${Math.floor(Math.random() * 100)}M`
    };

    watchlist.push(newStock);
    searchInput.value = '';
    renderWatchlist();
}

// Handle removing stock
function handleRemoveStock(stockId) {
    watchlist = watchlist.filter(stock => stock.id !== stockId);
    renderWatchlist();
}

// Handle clearing watchlist
function handleClearWatchlist() {
    if (watchlist.length === 0) {
        alert('Your watchlist is already empty');
        return;
    }

    if (confirm('Are you sure you want to clear your entire watchlist?')) {
        watchlist = [];
        renderWatchlist();
    }
}

// Handle search input
function handleSearchInput(event) {
    const searchTerm = event.target.value.toLowerCase();
    const allItems = document.querySelectorAll('.watchlist-item');

    allItems.forEach(item => {
        const stockName = item.querySelector('.company-name').textContent.toLowerCase();
        const stockSymbol = item.querySelector('.stock-symbol').textContent.toLowerCase();

        if (stockName.includes(searchTerm) || stockSymbol.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Initialize the page
function init() {
    renderWatchlist();

    // Add search input listener
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearchInput);
        searchInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                handleAddStock();
            }
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);

// Load footer
loadFooter();
