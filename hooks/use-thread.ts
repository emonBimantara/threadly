import { createComment, createThread } from "@/service/thread";
import { downVoteThread, neutralVoteThread, upVoteThread } from "@/service/vote";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { threadId } from "worker_threads";

export function useThread() {
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [body, setBody] = useState("");

    const [content, setContent] = useState("")

    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handlePostThread = async () => {
        setIsLoading(true);
        setErrorMsg("");

        try {
            await createThread(title, body, category);
            router.push("/Threads");
            router.refresh();
        } catch (error) {
            setErrorMsg("Failed to publish thread.");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleComment = async (threadId: string) => {
        setIsLoading(true);
        setErrorMsg("");

        try {
            await createComment(threadId, content)
            setContent("");
            router.refresh();
        } catch (error) {
            setErrorMsg("Failed to post comment.");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleUpVote = async (threadId: string) => {
        setIsLoading(true);
        setErrorMsg("");

        try {
            await upVoteThread(threadId)
            router.refresh();
        } catch (error) {
            setErrorMsg("Failed to up vote thread.");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleDownVote = async (threadId: string) => {
        setIsLoading(true);
        setErrorMsg("");

        try {
            await downVoteThread(threadId)
            router.refresh();
        } catch (error) {
            setErrorMsg("Failed to down vote thread.");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }


    return {
        title,
        setTitle,
        category,
        setCategory,
        body,
        setBody,
        content,
        setContent,
        isLoading,
        errorMsg,
        handlePostThread,
        handleComment,
        handleUpVote,
        handleDownVote
    };
}