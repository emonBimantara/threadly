interface CategoryBoxProps {
    categories: string[];
}

export default function CategoryBox({
    categories,
}: CategoryBoxProps) {
    return (
        <div className="rounded-md border border-gray-300 bg-white p-4">
            <h2 className="mb-4 text-lg font-bold">
               Trending Categories
            </h2>

            <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                    <span
                        key={category}
                        className="rounded-sm bg-indigo-100 px-2 py-1 text-sm font-medium text-indigo-700"
                    >
                        {category}
                    </span>
                ))}
            </div>
        </div>
    );
}