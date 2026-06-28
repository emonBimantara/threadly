"use client"

import { Button } from "../ui/button"

export default function CommentForm() {
    return (
        <div className="py-5 px-3">
            <div className="bg-[#F1F3FF] p-5 flex flex-col gap-3 border border-gray-300">
                <h1 className="font-semibold text-2xl">Add a Comment</h1>
                <textarea
                    rows={5}
                    className="p-2 bg-white border border-gray-300 rounded-sm"
                    placeholder="Share your insights"
                />
                <div className="flex justify-end">
                    <Button className="w-full p-5 text-md md:w-auto">
                        Send Comment
                    </Button>
                </div>
            </div>
        </div>
    )
}