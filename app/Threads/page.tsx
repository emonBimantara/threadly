import ThreadCard from "@/components/threads/thread-card";
import Navbar from "@/components/ui/navbar";
import SearchBar from "@/components/ui/search-bar";

import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import CategoryBox from "@/components/threads/category-box";

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

    const categories = [...new Set(threads.map((thread) => thread.category))];

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
                <aside className="w-100">
                    <Link href="/Threads/create">
                        <Button className="w-100 min-h-12 rounded-md text-base mb-5 cursor-pointer">
                            <CirclePlus size={20} />
                            Create New Thread
                        </Button>
                    </Link>

                    <CategoryBox categories={categories} />
                </aside>

                <main className="flex-1 min-w-0">
                    <div className="mb-5">
                        <h1 className="text-2xl font-bold">
                            Latest Discussions
                        </h1>
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

            <Link
                href="/Threads/create"
                className="fixed bottom-6 right-6 z-50 lg:hidden"
            >
                <Button
                    size="icon"
                    className="h-14 w-14 rounded-full shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
                >
                    <span className="text-3xl font-light leading-none">+</span>
                </Button>
            </Link>
        </div>
    );
}