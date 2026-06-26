export default function CategoryBox() {
    return (
        <div className="rounded-md border border-gray-300 bg-white p-4">
            <h2 className="mb-4 text-lg font-bold">
                Categories
            </h2>

            <div className="flex flex-wrap gap-2">
                <span className="rounded-sm bg-indigo-100 px-2 py-1 text-sm font-medium text-indigo-700">
                    React
                </span>

                <span className="rounded-sm bg-indigo-100 px-2 py-1 text-sm font-medium text-indigo-700">
                    Architecture
                </span>

                <span className="rounded-sm bg-indigo-100 px-2 py-1 text-sm font-medium text-indigo-700">
                    Architecture
                </span>

                <span className="rounded-sm bg-indigo-100 px-2 py-1 text-sm font-medium text-indigo-700">
                    Architecture
                </span>

                <span className="rounded-sm bg-indigo-100 px-2 py-1 text-sm font-medium text-indigo-700">
                    Architecture
                </span>
            </div>
        </div>
    )
}