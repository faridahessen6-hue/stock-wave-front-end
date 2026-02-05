const BASE_URL = 'http://localhost:5000';


export async function getSectors() {
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
        console.error("Error fetching sectors:", error);
        return [];
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




