const BASE_URL = 'http://localhost:5000';

export async function getStockHistoryByCompanyId(companyId) {
    try {
        const response = await fetch(`${BASE_URL}/stocks/company/${companyId}`);
        if (!response.ok) {
            if (response.status === 404) {
                return generateMockData(companyId);
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching stock history for company ${companyId}:`, error);
        return generateMockData(companyId);
    }
}

function generateMockData(companyId) {
    const data = [];
    const today = new Date();
    let price = 150 + (Math.random() * 50);

    for (let i = 30; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);

        const change = (Math.random() - 0.5) * 5;
        price += change;

        data.push({
            id: i,
            company_id: companyId,
            price: Math.max(0, price).toFixed(2),
            timestamp: date.toISOString()
        });
    }
    return data;
}
