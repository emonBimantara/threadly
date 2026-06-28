import { createThread } from "@/service/thread";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function useThread() {
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [body, setBody] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handlePostThread = async () => {
        setIsLoading(true);
        setErrorMsg("");

        try {
            await createThread(title, body, category);
            router.push("/Threads");
        } catch (error) {
            setErrorMsg("Failed to publish thread.");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        title,
        setTitle,
        category,
        setCategory,
        body,
        setBody,
        isLoading,
        errorMsg,
        handlePostThread,
    };
}