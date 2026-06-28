import { Button } from "../ui/button";

export default function PostCard() {
    return (
        <div className="rounded-md border border-gray-300 bg-white p-4 transition-all hover:border-gray-400 hover:shadow-sm mx-5 flex flex-col gap-5 w-[90%]">
            <div className="flex flex-col gap-2">
                <label className="font-medium text-lg">Title</label>
                <input
                    type="text"
                    placeholder="Be specific and clear"
                    required
                    className="mt-1 w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-md text-gray-900 focus:border-[#2A14B4] focus:outline-none focus:ring-2 focus:ring-[#2A14B4]/20 text-md"
                />
                <p className="text-gray-400 text-sm">Keep it concise. A good title helps people quickly understand your topic.</p>
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-medium text-lg">Category (Optional)</label>
                <input
                    type="text"
                    placeholder="e.g. Technical, General, Feedback"
                    required
                    className="mt-1 w-full rounded-sm border border-[#E5E7EB] px-3 py-2 text-md text-gray-900 focus:border-[#2A14B4] focus:outline-none focus:ring-2 focus:ring-[#2A14B4]/20 text-md"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-medium text-lg">Title</label>
                <textarea
                    rows={5}
                    className="p-2 bg-white border border-gray-300 rounded-sm"
                    placeholder="Provide background, context, or your main question here..."
                />
            </div>

            <div className="flex justify-end">
                <Button className="w-full p-5 text-md md:w-auto">
                    Publish Thread
                </Button>
            </div>
        </div>
    )
}