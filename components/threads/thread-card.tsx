import {
    User,
    EllipsisVertical,
    ArrowUp,
    ArrowDown,
    MessageSquare,
} from "lucide-react";

export default function ThreadCard() {
    return (
        <div className="rounded-md border border-gray-300 bg-white p-4 transition-all hover:border-gray-400 hover:shadow-sm">
            <div>
                <div className="flex items-start justify-between gap-3">
                    <h1 className="flex-1 text-xl font-bold text-black line-clamp-2">
                        Strategies for scaling React applications in enterprise
                        environments
                    </h1>

                    <button className="rounded-md p-1 text-gray-500 transition hover:bg-gray-100 hover:text-black">
                        <EllipsisVertical size={18} />
                    </button>
                </div>

                <div className="w-[70%]">
                    <p className="hidden lg:block truncate text-gray-400">
                        We've reached a point where our monolith frontend is becoming unwieldy. I'm looking for practical advice
                        on breaking down a large React application into manageable pieces. Module federation seems promising,
                    </p>
                </div>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-3">
                <div className="flex flex-wrap gap-2">
                    <span className="rounded-md bg-indigo-100 px-2 py-1 text-sm font-medium text-indigo-700">
                        React
                    </span>

                    <span className="rounded-md bg-indigo-100 px-2 py-1 text-sm font-medium text-indigo-700">
                        Architecture
                    </span>
                </div>

                <span className="text-sm text-gray-500">2 hours ago</span>
            </div>

            <div className="my-4 border-t border-gray-200" />

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <User size={18} />

                    <p className="font-medium text-gray-800">
                        Febriane Valentina
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-3 rounded-md bg-indigo-100 px-3 py-2 transition hover:bg-indigo-200">
                        <ArrowUp
                            size={18}
                            className="text-gray-700 hover:text-green-600"
                        />

                        <span className="font-semibold text-black">
                            342
                        </span>

                        <ArrowDown
                            size={18}
                            className="text-gray-700 hover:text-red-600"
                        />
                    </button>

                    <button className="flex items-center gap-2 rounded-md px-3 py-2 transition hover:bg-gray-100">
                        <MessageSquare size={18} />
                        <span className="font-medium">89</span>
                    </button>
                </div>
            </div>
        </div>
    );
}