const BASE_URL = 'http://localhost:5000';

export async function getSectors() {
    try {
        const response = await fetch(`${BASE_URL}/sectors`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        return data.map(item => ({
            id: item.id,
            name: item.name,
            number_of_companies: item.number_of_companies || 0,
            growth_rate: item.growth_rate || '0%',
            market_cap: item.market_cap || '0'
        }));
    } catch (error) {
        console.error("Error fetching sectors:", error);
        return [];
    }
}

export async function getSectorDetailsById(id) {
    try {
        const response = await fetch(`${BASE_URL}/sector/${id}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        return {
            id: data.id,
            name: data.name,
            number_of_companies: data.number_of_companies || 0,
            growth_rate: data.growth_rate || '0%',
            market_cap: data.market_cap || '0'
        };
    } catch (error) {
        console.error(`Error fetching sector ${id}:`, error);
        return null;
    }
}
