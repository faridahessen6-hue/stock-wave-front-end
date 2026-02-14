const BASE_URL = 'http://localhost:5000';

export async function createOrder(orderData) {
    try {
        const response = await fetch(`${BASE_URL}/order`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error creating order:", error);
        throw error;
    }
}
export async function getUserOrders(userId) {
    try {
        const response = await fetch(`${BASE_URL}/orders/user/${userId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching orders for user ${userId}:`, error);
        return [];
    }
}
