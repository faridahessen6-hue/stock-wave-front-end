const BASE_URL = 'http://localhost:5000';

// Development mode flag - set to true to use mock data, false to use real API
const USE_MOCK_DATA = true;

// Mock data for development when backend is not available
const mockCompanies = [
    {
        id: 1,
        name: "Apple Inc.",
        sector_id: 1,
        market_cap: "2.8T",
        growth_rate: "15.2%",
        share_price: 178.50,
        ticker: "AAPL",
        description: "Technology company that designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories."
    },
    {
        id: 2,
        name: "Microsoft Corporation",
        sector_id: 1,
        market_cap: "2.5T",
        growth_rate: "12.8%",
        share_price: 378.90,
        ticker: "MSFT",
        description: "Technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services."
    },
    {
        id: 3,
        name: "Tesla, Inc.",
        sector_id: 2,
        market_cap: "800B",
        growth_rate: "45.3%",
        share_price: 242.80,
        ticker: "TSLA",
        description: "Electric vehicle and clean energy company that designs, manufactures, and sells electric cars, battery energy storage, and related products."
    },
    {
        id: 4,
        name: "Amazon.com, Inc.",
        sector_id: 3,
        market_cap: "1.6T",
        growth_rate: "18.7%",
        share_price: 145.30,
        ticker: "AMZN",
        description: "Multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence."
    },
    {
        id: 5,
        name: "NVIDIA Corporation",
        sector_id: 1,
        market_cap: "1.2T",
        growth_rate: "68.9%",
        share_price: 495.60,
        ticker: "NVDA",
        description: "Technology company that designs graphics processing units for the gaming and professional markets, as well as system on a chip units for the mobile computing and automotive market."
    },
    {
        id: 6,
        name: "Meta Platforms, Inc.",
        sector_id: 4,
        market_cap: "900B",
        growth_rate: "22.4%",
        share_price: 325.40,
        ticker: "META",
        description: "Technology company that builds social media applications and technology platforms for people to connect and share."
    }
];

export async function getCompanies() {
    if (USE_MOCK_DATA) {
        console.log("Using mock companies data");
        return mockCompanies;
    }

    try {
        const response = await fetch(`${BASE_URL}/companies`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();

        return data.map(item => ({
            id: item.id,
            name: item.name,
            sector_id: item.sector_id,
            market_cap: item.market_cap,
            growth_rate: item.growth_rate,
            share_price: item.share_price,
            ticker: item.ticker,
            description: item.description
        }));
    } catch (error) {
        console.warn("Backend not available, using mock data:", error.message);
        return mockCompanies;
    }
}

export async function getCompanyDetailsById(id) {
    if (USE_MOCK_DATA) {
        console.log(`Using mock company data for ID ${id}`);
        return mockCompanies.find(company => company.id === parseInt(id)) || null;
    }

    try {
        const response = await fetch(`${BASE_URL}/company/${id}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.warn(`Backend not available, using mock company ${id}:`, error.message);
        return mockCompanies.find(company => company.id === parseInt(id)) || null;
    }
}

export async function getCopmaniesBysector(sectorId) {
    if (USE_MOCK_DATA) {
        console.log(`Using mock companies data for sector ${sectorId}`);
        return mockCompanies.filter(company => company.sector_id === parseInt(sectorId));
    }

    try {
        const response = await fetch(`${BASE_URL}/company/sector/${sectorId}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.warn(`Backend not available, using mock companies for sector ${sectorId}:`, error.message);
        return mockCompanies.filter(company => company.sector_id === parseInt(sectorId));
    }
}
