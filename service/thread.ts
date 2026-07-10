import { Thread, ThreadDetail } from "@/types/thread";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getAllThread(): Promise<Thread[]> {
    try {
        const resp = await fetch(`${BASE_URL}/threads`, {
            method: "GET",
            cache: "no-store",
            headers: {
                Accept: 'application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
            }
        })

        if (!resp.ok) {
            throw new Error(`HTTP Error: ${resp.status}`);
        }

        const respData = await resp.json()
        return respData.data.threads
    } catch (error) {
        console.error("Failed to fetch threads:", error);
        throw error;
    }
}

export async function getDetailThread(threadId: string): Promise<ThreadDetail> {
    try {
        const resp = await fetch(`${BASE_URL}/threads/${threadId}`, {
            method: "GET",
            cache: "no-store",
            headers: {
                Accept: 'application/json',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
            }
        })

        if (!resp.ok) {
            throw new Error(`HTTP Error: ${resp.status}`);
        }

        const respData = await resp.json()
        return respData.data.detailThread
    } catch (error) {
        console.error("Failed to fetch threads:", error);
        throw error;
    }
}

export async function createThread(
    title: string,
    body: string,
    category?: string
): Promise<Thread> {
    const token = localStorage.getItem("accessToken");
    try {
        const resp = await fetch(`${BASE_URL}/threads`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
            },
            body: JSON.stringify({ title, body, category })
        })

        const respData = await resp.json();
        if (!resp.ok) {
            throw new Error(respData.message);
        }

        return respData.data.thread;
    } catch (error) {
        console.error("Failed to post threads:", error);
        throw error;
    }
}

export async function createComment(
    threadId: string,
    content: string
): Promise<Thread> {
    const token = localStorage.getItem("accessToken");
    try {
        const resp = await fetch(`${BASE_URL}/threads/${threadId}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
            },
            body: JSON.stringify({ content })
        })

        const respData = await resp.json();
        if (!resp.ok) {
            throw new Error(respData.message);
        }

        return respData.data.comment;
    } catch (error: any) {
        console.error(error);
        console.error("Failed to post comment:", error);
        throw error;
    }
}