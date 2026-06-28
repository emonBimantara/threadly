import CommentCard from "@/components/threads/comment-card";
import CommentForm from "@/components/threads/comment-form";
import DetailCard from "@/components/threads/detail-card";
import Navbar from "@/components/ui/navbar";

import { getDetailThread } from "@/service/thread";

interface ThreadDetailProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function ThreadDetail({ params }: ThreadDetailProps) {
    const { id } = await params;
    const thread = await getDetailThread(id);

    return (
        <div className="min-h-screen bg-[#F9F9FF]">
            <Navbar />

            <div className="flex flex-col gap-3">
                <DetailCard threadDetail={thread} />
                <CommentForm threadId={thread.id} />
                <div className="">
                    <h1 className="border-b border-gray-300 px-5 pb-4 text-2xl font-bold">
                        Comments ({thread.comments.length})
                    </h1>
                    { }
                    {thread.comments.map((comment) => (
                        <CommentCard
                            key={comment.id}
                            comment={comment}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}