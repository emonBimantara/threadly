const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getAllThread() {
    try {
        const resp = await fetch(`${BASE_URL}/threads`, {
            method: "GET",
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