"use client"

import { Search } from "lucide-react"

export default function SearchBar() {
    return (
        <div className="flex items-center gap-2 border border-gray-400 rounded-md p-3 my-3">
            <Search size={20} className="text-gray-600" />

            <input
                type="text"
                placeholder="Search threads..."
                className="flex-1 outline-none"
            />
        </div>
    )
}