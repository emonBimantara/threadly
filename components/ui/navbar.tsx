"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, User, X } from "lucide-react";
import { useState } from "react";
import SearchBar from "./search-bar";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navItem = (href: string) =>
        `relative pb-2 text-gray-700 transition-colors duration-300 hover:text-black
    after:absolute after:left-0 after:bottom-0 after:h-[2px]
    after:bg-black after:transition-all after:duration-300 after:content-['']
    ${pathname === href
            ? "after:w-full text-black"
            : "after:w-0 hover:after:w-full"
        }`;

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

            <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden"
            >
                <MenuIcon size={30} />
            </button>

            <div className="hidden lg:flex items-center gap-7 text-lg">
                <Link
                    href="/Threads"
                    className={navItem("/Threads")}
                >
                    Threads
                </Link>

                <Link
                    href="/leaderboards"
                    className={navItem("/leaderboards")}
                >
                    Leaderboards
                </Link>

                <Link
                    href="/users"
                    className={navItem("/users")}
                >
                    Users
                </Link>
            </div>

            <div className="hidden lg:flex items-center gap-2">
                <SearchBar />

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 bg-gray-50 text-gray-500">
                    <User size={30} />
                </div>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <div
                className={`fixed top-0 right-0 z-50 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between border-b p-5">
                    <h2 className="text-xl font-bold">Menu</h2>

                    <button onClick={() => setIsOpen(false)}>
                        <X />
                    </button>
                </div>

                <div className="flex flex-col gap-5 p-5 text-lg">
                    <Link
                        href="/Threads"
                        onClick={() => setIsOpen(false)}
                        className={
                            pathname === "/Threads"
                                ? "font-semibold text-indigo-600"
                                : "hover:text-indigo-600"
                        }
                    >
                        Threads
                    </Link>

                    <Link
                        href="/leaderboards"
                        onClick={() => setIsOpen(false)}
                        className={
                            pathname === "/leaderboards"
                                ? "font-semibold text-indigo-600"
                                : "hover:text-indigo-600"
                        }
                    >
                        Leaderboards
                    </Link>

                    <Link
                        href="/users"
                        onClick={() => setIsOpen(false)}
                        className={
                            pathname === "/users"
                                ? "font-semibold text-indigo-600"
                                : "hover:text-indigo-600"
                        }
                    >
                        Users
                    </Link>
                </div>
            </div>
        </nav>
    );
}