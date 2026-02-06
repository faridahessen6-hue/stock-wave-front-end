const BASE_URL = 'http://localhost:5000';

// Development mode flag - set to true to use mock data, false to use real API
const USE_MOCK_DATA = true;

// Mock data for development when backend is not available
const mockSectors = [
    {
        id: 1,
        name: "Technology",
        number_of_companies: 3,
        growth_rate: "32.3%",
        market_cap: "6.5T"
    },
    {
        id: 2,
        name: "Electric Vehicles",
        number_of_companies: 1,
        growth_rate: "45.3%",
        market_cap: "800B"
    },
    {
        id: 3,
        name: "E-commerce",
        number_of_companies: 1,
        growth_rate: "18.7%",
        market_cap: "1.6T"
    },
    {
        id: 4,
        name: "Social Media",
        number_of_companies: 1,
        growth_rate: "22.4%",
        market_cap: "900B"
    },
    {
        id: 5,
        name: "Healthcare",
        number_of_companies: 2,
        growth_rate: "12.8%",
        market_cap: "2.1T"
    },
    {
        id: 6,
        name: "Financial Services",
        number_of_companies: 4,
        growth_rate: "8.5%",
        market_cap: "3.2T"
    }
];

export async function getSectors() {
    if (USE_MOCK_DATA) {
        console.log("Using mock sectors data");
        return mockSectors;
    }

    try {
        const response = await fetch(`${BASE_URL}/sectors`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();

        const sectorsList = data.map(item => ({
            id: item.id,
            name: item.name,
            number_of_companies: item.number_of_companies || 0,
            growth_rate: item.growth_rate || '0%',
            market_cap: item.market_cap || '0'
        }));

        return sectorsList;
    } catch (error) {
        console.warn("Backend not available, using mock sectors data:", error.message);
        return mockSectors;
    }
}

export async function getSectorDetailsById(id) {
    try {
        const sectors = await getSectors();
        return sectors.find(s => s.id === parseInt(id)) || null;
    } catch (error) {
        console.error(`Error fetching sector ${id}:`, error);
        return null;
    }
}




