import { ArrowDown, ArrowUp, User } from "lucide-react";

export default function CommentCard() {
    return (
        <div className="p-3">
            <div className="flex gap-4 rounded-md border border-gray-300 bg-white p-5">
                <User
                    size={30}
                    className="mt-1 shrink-0"
                />

                <div className="flex-1">
                    <div className="mb-3 flex items-center gap-2">
                        <p className="text-lg font-semibold">Emon Dipentara</p>
                        <p className="text-gray-400">Oct 24, 11:15 AM</p>
                    </div>

                    <p className="mb-4 text-[#464555]">
                        We've been using this exact stack (Kafka + Postgres) for two years. Snapshotting is crucial. Don't wait until performance degrades; implement a snapshot strategy from day one. We snapshot every 1000 events.
                    </p>

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