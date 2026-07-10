"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import SearchBar from "./search-bar";
import { User } from "@/types/user";
import { getOwnProfile } from "@/service/user";

export default function Navbar() {
    const [userIcon, setUserIcon] = useState<User | null>(null);


    useEffect(() => {
        getOwnProfile()
            .then(setUserIcon)
            .catch(console.error);
    }, []);

    return (
        <nav className="flex justify-between items-center border-b-4 border-gray-100 bg-white px-6 py-4 lg:py-2">
            <Link
                href="/"
                className="flex items-center gap-2"
            >
                <img
                    src="/icon.png"
                    alt="Threadly"
                    width={30}
                />
                <h1 className="text-2xl font-bold text-black">
                    Threadly
                </h1>
            </Link>

            <div className="hidden lg:flex items-center gap-2">
                <SearchBar />

                {userIcon ? (
                    <img
                        src={userIcon.avatar}
                        alt={userIcon.name}
                        className="h-10 w-10 rounded-full object-cover"
                    />
                ) : (
                    <div className="h-10 w-10 rounded-full bg-gray-200 animate-pulse" />
                )}
            </div>
        </nav>
    );
}