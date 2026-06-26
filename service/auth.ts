const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function register(name: string, email: string, password: string) {
    try {
        const resp = await fetch(`${BASE_URL}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password })
        })

        const respData = await resp.json();

        if (!resp.ok || respData.status !== 'success') {
            throw new Error(respData.message || 'Registration failed. Please try again.');
        }

        return respData;
    } catch (error) {
        console.log(error)
    }
}

export async function login(email: string, password: string) {
    try {
        const resp = await fetch(`${BASE_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const respData = await resp.json();

        if (!resp.ok || respData.status !== 'success') {
            throw new Error(respData.message || 'Login failed. Please try again.');
        }

        return respData.data;
    } catch (error) {
        console.log(error)
    }
}