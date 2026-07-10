"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import SearchBar from "./search-bar";
import { User } from "@/types/user";
import { getOwnProfile } from "@/service/user";
import { useAuth } from "@/hooks/use-auth";

export default function Navbar() {
    const [userIcon, setUserIcon] = useState<User | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    const { handleLogout } = useAuth();

    useEffect(() => {
        getOwnProfile()
            .then(setUserIcon)
            .catch(console.error);
    }, []);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="border-b-4 border-gray-100 bg-white">
            <div className="flex items-center justify-between px-6 py-4 lg:py-2">

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

                    {userIcon && (
                        <div
                            ref={dropdownRef}
                            className="relative"
                        >
                            <button
                                onClick={() => setIsOpen(prev => !prev)}
                                className="rounded-full"
                            >
                                <img
                                    src={userIcon.avatar}
                                    alt={userIcon.name}
                                    className="h-10 w-10 rounded-full object-cover"
                                />
                            </button>

                            {isOpen && (
                                <div className="absolute right-0 mt-2 w-52 rounded-lg border bg-white shadow-lg z-50">
                                    <div className="border-b px-4 py-3">
                                        <p className="font-semibold">
                                            {userIcon.name}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {userIcon.email}
                                        </p>
                                    </div>

                                    <button
                                        onClick={handleLogout}
                                        className="w-full px-4 py-3 text-left hover:bg-gray-100"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div className="lg:hidden">
                    {userIcon && (
                        <div
                            ref={dropdownRef}
                            className="relative"
                        >
                            <button
                                onClick={() => setIsOpen(prev => !prev)}
                                className="rounded-full"
                            >
                                <img
                                    src={userIcon.avatar}
                                    alt={userIcon.name}
                                    className="h-10 w-10 rounded-full object-cover"
                                />
                            </button>

                            {isOpen && (
                                <div className="absolute right-0 mt-2 w-52 rounded-lg border bg-white shadow-lg z-50">
                                    <div className="border-b px-4 py-3">
                                        <p className="font-semibold">
                                            {userIcon.name}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {userIcon.email}
                                        </p>
                                    </div>

                                    <button
                                        onClick={handleLogout}
                                        className="w-full px-4 py-3 text-left hover:bg-gray-100"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <div className="px-6 pb-4 lg:hidden">
                <SearchBar />
            </div>
        </nav>
    );
}