const BASE_URL = 'http://localhost:5000';

export async function login(email, password) {

    try {
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
}



export async function Register(userData) {

    try {
        const response = await fetch(`${BASE_URL}/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        console.log(response);
        const data = await response.json();
        console.log(data);
        return data;

    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}





export async function getUsers() {

    try {
        const response = await fetch(`${BASE_URL}/users`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();

        return data.map(item => ({
            id: item.id,
            name: item.name,
            role: item.role,
            age: item.age,
            email: item.email,
            password: item.password,
            birthday: item.birthday,
            phone: item.phone,
            ssn: item.ssn,

        }));
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}