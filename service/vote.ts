const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const token = localStorage.getItem("accessToken");

export async function upVoteThread(threadId: string) {
    try {
        const resp = await fetch(`${BASE_URL}/threads/${threadId}/up-vote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
            }
        })

        const respData = await resp.json()
        if (!resp.ok) {
            throw new Error(respData.message);
        }

        return respData.data.vote
    } catch (error) {
        console.error("Failed to up vote threads:", error);
        throw error;
    }
}

export async function downVoteThread(threadId: string) {
    try {
        const resp = await fetch(`${BASE_URL}/threads/${threadId}/down-vote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
            }
        })

        const respData = await resp.json()
        if (!resp.ok) {
            throw new Error(respData.message);
        }

        return respData.data.vote
    } catch (error) {
        console.error("Failed to down vote threads:", error);
        throw error;
    }
}

export async function neutralVoteThread(threadId: string) {
    try {
        const resp = await fetch(`${BASE_URL}/threads/${threadId}/neutral-vote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
            }
        })

        const respData = await resp.json()
        if (!resp.ok) {
            throw new Error(respData.message);
        }

        return respData.data.vote
    } catch (error) {
        console.error("Failed to netural vote threads:", error);
        throw error;
    }
}