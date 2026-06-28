import { LightbulbIcon } from "lucide-react";

export default function GuideBox() {
    const guidelines = [
        "Search first. Ensure your topic hasn't been covered recently to avoid duplicate discussions.",
        "Stay respectful. Adhere to our community code of conduct and maintain a professional tone.",
        "Be descriptive. The more context you provide in the body, the better answers you'll receive.",
        "Use categories. Tagging your post helps experts find and reply to it faster.",
    ];

    return (
        <div className="lg:my-0 my-5 mx-5 h-fit lg:-w-fit rounded-lg border border-gray-200 bg-indigo-50 p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2 border-b border-indigo-200 pb-3">
                <LightbulbIcon size={30} />
                <h2 className="text-xl font-semibold text-gray-900">
                    Posting Guidelines
                </h2>
            </div>

            <div className="space-y-4 text-md leading-6 text-gray-700">
                {guidelines.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-start gap-3"
                    >
                        <span className="mt-1 text-lg font-bold">•</span>
                        <p>{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}