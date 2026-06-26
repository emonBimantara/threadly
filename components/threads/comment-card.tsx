import { Comment } from "@/types/comment";
import { formatDate, getRelativeTime } from "@/utils/date";
import { ArrowDown, ArrowUp, User } from "lucide-react";

interface CommentProps {
    comment: Comment
}

export default function CommentCard({ comment }: CommentProps) {
    return (
        <div className="p-3">
            <div className="flex gap-4 rounded-md border border-gray-300 bg-white p-5">
                <img
                    src={comment.owner.avatar}
                    alt={comment.owner.name}
                    className="w-10 h-10 rounded-full object-cover"
                />

                <div className="flex-1">
                    <div className="mb-3 flex items-center gap-2">
                        <p className="text-lg font-semibold">{comment.owner.name}</p>
                        <p className="text-gray-400">{formatDate(comment.createdAt)}</p>
                    </div>

                    <p className="mb-4 text-[#464555]">{comment.content}</p>

                    <button className="flex items-center gap-3 rounded-md bg-indigo-100 px-3 py-2 transition hover:bg-indigo-200">
                        <ArrowUp size={18} className="text-gray-700 hover:text-green-600" />
                        <span className="font-semibold text-black">0</span>
                        <ArrowDown size={18} className="text-gray-700 hover:text-red-600" />
                    </button>
                </div>
            </div>
        </div>
    )
}