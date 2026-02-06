const BASE_URL = 'http://localhost:5000';
// Authentication API - Simple and readable


// Login user
export function login(email, password) {
    // TODO: Replace with real API call when backend is ready
    // Example: return fetch('/api/auth/login', {
    //     method: 'POST',
    //     body: JSON.stringify({ email, password })
    // }).then(res => res.json());

    // Mock response for now
    console.log('Login attempt:', email);
    return { success: true, token: 'mock-token-12345' };
}

// Register user
export async function Register(){

      try {
        const response = await fetch(`/user`);
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
        console.error("Error registering user:", error);
        return [];
    }
}

// Get users
export async function getUsers (){

    try {
        const response = await fetch(`/user`);
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