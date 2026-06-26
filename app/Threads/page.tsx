import ThreadCard from "@/components/threads/thread-card";
import Navbar from "@/components/ui/navbar";
import SearchBar from "@/components/ui/search-bar";

import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import CategoryBox from "@/components/threads/category-box";
import Footer from "@/components/ui/footer";

import { getAllThread } from "@/service/thread";
import { getAllUser } from "@/service/user";
import Link from "next/link";

export default async function Threads() {
    const threads = await getAllThread()
    const users = await getAllUser()

    const threadWithOwner = threads.map((thread) => ({
        ...thread,
        owner: users.find((user) => user.id === thread.ownerId)
    }))

    return (
        <div className="min-h-screen bg-[#F9F9FF]">
            <Navbar />

            <div className="lg:hidden p-2">
                <div className="mb-4">
                    <SearchBar />
                </div>

                <div className="space-y-4 cursor-pointer">
                    {threadWithOwner.length > 0 ? (
                        threadWithOwner.map((thread: any) => (
                            <Link key={thread.id} href={`/Threads/${thread.id}`}>
                                <ThreadCard threadsData={thread} />
                            </Link>
                        ))
                    ) : (
                        <p className="text-gray-500">
                            No threads yet. Go create your thread.
                        </p>
                    )}
                </div>
            </div>

            <div className="hidden lg:flex gap-6 p-6">
                <aside className="w-100 space-y-5">
                    <Button className="w-100 min-h-12 rounded-md text-base">
                        <CirclePlus size={20} />
                        Create New Thread
                    </Button>
                    <CategoryBox />
                </aside>

                <main className="flex-1 min-w-0">
                    <div className="mb-5 flex items-center justify-between">
                        <h1 className="text-2xl font-bold">
                            Latest Discussions
                        </h1>

                        <div className="flex gap-2">
                            <span className="cursor-pointer rounded-md bg-indigo-100 px-3 py-1 text-sm text-indigo-700">
                                New
                            </span>

                            <span className="cursor-pointer rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-700">
                                Old
                            </span>
                        </div>
                    </div>

                    <div className="space-y-4 cursor-pointer">
                        {threadWithOwner.length > 0 ? (
                            threadWithOwner.map((thread: any) => (
                                <Link key={thread.id} href={`/Threads/${thread.id}`}>
                                    <ThreadCard threadsData={thread} />
                                </Link>
                            ))
                        ) : (
                            <p className="text-gray-500">
                                No threads yet. Go create your thread.
                            </p>
                        )}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}