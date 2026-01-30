// Companies API - Simple and readable

// Get all companies
export function getCompanies() {
    // TODO: Replace with real API call when backend is ready
    // Example: return fetch('/api/companies').then(res => res.json());

    // Mock data for now
    return [
        { name: 'Apple Inc.', sector: 'Technology', symbol: 'AAPL' },
        { name: 'Microsoft', sector: 'Software', symbol: 'MSFT' },
        { name: 'Amazon', sector: 'E-Commerce', symbol: 'AMZN' },
        { name: 'Tesla Inc.', sector: 'Automotive', symbol: 'TSLA' },
        { name: 'Google', sector: 'Technology', symbol: 'GOOGL' },
        { name: 'Meta', sector: 'Social Media', symbol: 'META' }
    ];
}

export function getCompanyDetailsBySymbol(symbol) {
    const companies = getCompanies();
    return companies.find(c => c.symbol === symbol) || null;
}