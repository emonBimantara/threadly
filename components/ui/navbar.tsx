"use client"

import { User, MenuIcon, X } from "lucide-react"
import { useState } from "react"
import SearchBar from "./search-bar"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="flex px-6 py-4 lg:py-2 justify-between items-center border-b-4 border-gray-100 bg-white">
            <div className="flex gap-2 items-center">
                <img
                    src="/icon.png"
                    alt="Threadly"
                    width={30}
                />
                <h1 className="text-2xl font-bold text-black">
                    Threadly
                </h1>
            </div>

            <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden"
            >
                <MenuIcon size={30} />
            </button>

            <div className="hidden lg:block lg:flex items-center gap-7 text-lg cursor-pointer">
                <p>Threads</p>
                <p>Leaderboards</p>
                <p>Users</p>
            </div>

            <div className="hidden lg:flex items-center gap-2">
                <SearchBar />

                <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500">
                    <User size={30} />
                </div>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <div className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex justify-between items-center p-5 border-b">
                    <h2 className="font-bold text-xl">Menu</h2>
                    <button onClick={() => setIsOpen(false)}><X /></button>
                </div>

                <div className="flex flex-col p-5 gap-5 text-lg">
                    <p>Threads</p>
                    <p>Leaderboards</p>
                    <p>Users</p>
                </div>
            </div>
        </nav>
    )
}