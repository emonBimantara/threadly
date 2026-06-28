import GuideBox from "@/components/threads/guide-box";
import PostCard from "@/components/threads/post-card";
import Navbar from "@/components/ui/navbar";

export default function CreateThread(){
    return(
        <div className="min-h-screen bg-[#F9F9FF]">
            <Navbar />

            <div className="flex flex-col gap-2 px-5 py-3 mb-5">
                <h1 className="font-medium text-3xl">Start a New Discussion</h1>
                <p className="text-gray-400 text-lg">Share your insights, ask questions, and engage with the community.</p>
            </div>

            <div className="lg:flex">
                <PostCard />
                <GuideBox />
            </div>
        </div>
    )
}