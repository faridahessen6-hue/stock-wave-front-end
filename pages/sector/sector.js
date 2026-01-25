import loadHeader from "../../components/header/header.js";
import createCard from "../../components/card/card.js";

loadHeader();

// Create page header
const pageHeader = document.createElement('div');
pageHeader.className = 'page-header';

const pageTitle = document.createElement('h1');
pageTitle.className = 'page-title';
pageTitle.textContent = 'Companies';

const pageSubtitle = document.createElement('p');
pageSubtitle.className = 'page-subtitle';
pageSubtitle.textContent = 'Explore our featured companies and their performance';

pageHeader.appendChild(pageTitle);
pageHeader.appendChild(pageSubtitle);

// Create filter section
const filterSection = document.createElement('div');
filterSection.className = 'filter-section';

const searchInput = document.createElement('input');
searchInput.className = 'filter-input';
searchInput.type = 'text';
searchInput.placeholder = 'Search companies...';

const filterButton = document.createElement('button');
filterButton.className = 'filter-button';
filterButton.textContent = 'Filter';

filterSection.appendChild(searchInput);
filterSection.appendChild(filterButton);

// Create a container for cards with grid layout
const cardsContainer = document.createElement('div');
cardsContainer.className = 'companies-container';

// Create multiple cards with realistic company data
const cards = [
    createCard("Apple Inc.", "Technology", "2024", "NASDAQ", "AAPL"),
    createCard("Microsoft", "Software", "2023", "NASDAQ", "MSFT"),
    createCard("Amazon", "E-Commerce", "2025", "NASDAQ", "AMZN"),
    createCard("Tesla Inc.", "Automotive", "2022", "NASDAQ", "TSLA"),
    createCard("Google", "Technology", "2024", "NASDAQ", "GOOGL"),
    createCard("Meta", "Social Media", "2023", "NASDAQ", "META")
];

// Add cards to container
cards.forEach(card => {
    cardsContainer.appendChild(card);
});

// Add all elements to body
document.body.appendChild(pageHeader);
document.body.appendChild(filterSection);
document.body.appendChild(cardsContainer);