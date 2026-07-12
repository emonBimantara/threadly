"use client"

import { useThread } from "@/hooks/use-thread";
import { ThreadDetail } from "@/types/thread";
import { getRelativeTime } from "@/utils/date";
import { ArrowDown, ArrowUp } from "lucide-react";

interface DetailCardProps {
    threadDetail: ThreadDetail
}

export default function DetailCard({ threadDetail }: DetailCardProps) {
    const {
        handleUpVote,
        handleDownVote,
    } = useThread();
    
    return (
        <div className="py-5 px-3">
            <div className=" flex flex-col gap-4 p-5 border border-gray-300 bg-white rounded-md">
                <div className="flex justify-between items-center">

                    <div className="flex gap-2 items-center">
                        <img
                            src={threadDetail.owner.avatar}
                            alt={threadDetail.owner.name}
                            className="w-10 h-10 rounded-full object-cover"
                        />

                        <div>
                            <p className="font-medium">{threadDetail.owner.name}</p>
                            <p className="text-gray-400">{getRelativeTime(threadDetail.createdAt)}</p>
                        </div>
                    </div>


                    <div className="rounded-sm bg-indigo-100 text-indigo-700 px-2 py-1 text-sm font-medium">
                        {threadDetail.category}
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h1 className="font-semibold text-2xl">{threadDetail.title}</h1>
                    <p className="text-[#464555] text-md">{threadDetail.body}</p>
                    <hr />
                </div>

                <div>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleUpVote(threadDetail.id);
                        }}
                        className="rounded p-1 transition hover:bg-indigo-200"
                    >
                        <ArrowUp
                            size={18}
                            className="text-gray-700 hover:text-green-600"
                        />
                    </button>

                    <span className="px-2 font-semibold text-black">
                        {threadDetail.upVotesBy.length}
                    </span>

                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleDownVote(threadDetail.id);
                        }}
                        className="rounded p-1 transition hover:bg-indigo-200"
                    >
                        <ArrowDown
                            size={18}
                            className="text-gray-700 hover:text-red-600"
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}