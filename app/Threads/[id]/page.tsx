import CommentCard from "@/components/threads/comment-card";
import CommentForm from "@/components/threads/comment-form";
import DetailCard from "@/components/threads/detail-card";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";

import { getDetailThread } from "@/service/thread";

interface ThreadDetailProps {
    params: { id: string }
}

export default async function ThreadDetail({ params }: ThreadDetailProps) {
    const thread = await getDetailThread(params.id);

    return (
        <div className="min-h-screen bg-[#F9F9FF]">
            <Navbar />

            <div className="flex flex-col gap-3">
                <DetailCard thread={thread}/>
                <CommentForm />
                <div className="">
                    <h1 className="border-b border-gray-300 px-5 pb-4 text-2xl font-bold">Comments (3)</h1>
                    <CommentCard />
                    <CommentCard />
                </div>
            </div>

            <Footer />
        </div>
    )
}