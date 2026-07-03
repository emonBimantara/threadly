const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function upVoteThread(threadId: string) {
    const token = localStorage.getItem("accessToken");
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
        console.error("Failed to upvote threads:", error);
        throw error;
    }
}