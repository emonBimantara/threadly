"use client"

import { useThread } from "@/hooks/use-thread";
import { Comment } from "@/types/comment";
import { getRelativeTime } from "@/utils/date";
import { ArrowDown, ArrowUp } from "lucide-react";

interface CommentProps {
    comment: Comment;
    threadId: string
}

export default function CommentCard({ comment, threadId }: CommentProps) {
    const { 
        handleUpComment, 
        handleDownComment
    } = useThread();

    const voteCount = comment.upVotesBy.length

    return (
        <div className="px-3 py-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
                <div className="flex items-start gap-4">
                    <img
                        src={comment.owner.avatar}
                        alt={comment.owner.name}
                        className="h-11 w-11 rounded-full object-cover"
                    />

                    <div className="flex-1">
                        <div className="mb-4 flex items-center justify-between">
                            <div>
                                <h2 className="font-semibold text-gray-900">
                                    {comment.owner.name}
                                </h2>

                                <p className="text-sm text-gray-500">
                                    {getRelativeTime(comment.createdAt)}
                                </p>
                            </div>
                        </div>

                        <p className="whitespace-pre-line leading-7 text-gray-700">
                            {comment.content}
                        </p>

                        <hr className="my-5 border-gray-100" />

                        <div className="flex items-center gap-2">
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    handleUpComment(threadId, comment.id);
                                }}
                                className="rounded-full p-2 transition hover:bg-green-50 disabled:opacity-50"
                                aria-label="Upvote"
                            >
                                <ArrowUp
                                    size={18}
                                    className="text-gray-500 hover:text-green-600"
                                />
                            </button>

                            <span className="min-w-6 text-center font-medium text-gray-700">
                                {voteCount}
                            </span>

                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    handleDownComment(threadId, comment.id);
                                }}
                                className="rounded-full p-2 transition hover:bg-red-50 disabled:opacity-50"
                                aria-label="Downvote"
                            >
                                <ArrowDown
                                    size={18}
                                    className="text-gray-500 hover:text-red-600"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}