import {
    LoginRequest,
    LoginResponse,
    RegisterRequest,
    RegisterResponse,
} from "@/types/auth";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function register(data: RegisterRequest): Promise<RegisterResponse> {
    try {
        const resp = await fetch(`${BASE_URL}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })

        const respData: RegisterResponse = await resp.json();

        if (!resp.ok || respData.status !== 'success') {
            throw new Error(respData.message || 'Registration failed. Please try again.');
        }

        return respData;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export async function login(data: LoginRequest): Promise<LoginResponse> {
    try {
        const resp = await fetch(`${BASE_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        const respData: LoginResponse = await resp.json();

        if (!resp.ok || respData.status !== 'success') {
            throw new Error(respData.message || 'Login failed. Please try again.');
        }

        return respData;
    } catch (error) {
        console.log(error)
        throw error;
    }
}