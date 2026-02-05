const BASE_URL = 'http://localhost:5000';

export async function getCompanies() {
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
        console.error("Error fetching companies:", error);
        return [];
    }
}

export async function getCompanyDetailsById(id) {
    try {
        const response = await fetch(`${BASE_URL}/company/${id}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error(`Error fetching company ${id}:`, error);
        return null;
    }
}




export async function getCopmaniesBysector(sectorId) {
    try {
        const response = await fetch(`${BASE_URL}/company/sector/${sectorId}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error(`Error fetching companies by sector ${sectorId}:`, error);
        return [];
    }
}
