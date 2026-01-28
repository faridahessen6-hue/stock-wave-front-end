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
export function register(userData) {
    // TODO: Replace with real API call when backend is ready
    // Example: return fetch('/api/auth/register', {
    //     method: 'POST',
    //     body: JSON.stringify(userData)
    // }).then(res => res.json());

    // Mock response for now
    console.log('Register attempt:', userData.email);
    return { success: true, token: 'mock-token-67890' };
}
