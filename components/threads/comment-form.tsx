"use client";

import { useThread } from "@/hooks/use-thread";
import { Button } from "../ui/button";

interface CommentFormProps {
    threadId: string;
}

export default function CommentForm({ threadId }: CommentFormProps) {
    const {
        content,
        setContent,
        isLoading,
        errorMsg,
        handleComment,
    } = useThread();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await handleComment(threadId);
    };

    return (
        <div className="px-3 py-5">
            <div className="flex flex-col gap-4 border border-gray-300 bg-[#F1F3FF] p-5">
                <h1 className="text-2xl font-semibold">
                    Add a Comment
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >
                    <textarea
                        rows={5}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Share your insights..."
                        className="w-full rounded-md border border-gray-300 bg-white p-3 focus:border-[#2A14B4] focus:outline-none focus:ring-2 focus:ring-[#2A14B4]/20"
                    />

                    {errorMsg && (
                        <p className="text-sm text-red-500">
                            {errorMsg}
                        </p>
                    )}

                    <div className="flex justify-end">
                        <Button
                            type="submit"
                            disabled={isLoading || !content.trim()}
                            className="w-full p-5 text-md md:w-auto"
                        >
                            {isLoading ? "Sending..." : "Send Comment"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}