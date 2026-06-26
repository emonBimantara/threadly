export default function Footer() {
    return (
        <footer className="mt-10 border-t border-gray-200 bg-white">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-500 md:flex-row">
                <div className="flex items-center gap-3">
                    <img
                        src="/icon.png"
                        alt="InsightForum"
                        className="h-9 w-9"
                    />

                    <div>
                        <h2 className="font-semibold text-gray-900">
                            InsightForum
                        </h2>

                        <p className="text-xs text-gray-500">
                            Professional Network
                        </p>
                    </div>
                </div>

                <p className="text-center text-xs leading-5 md:text-right">
                    © 2026 InsightForum Professional Network.
                    <br className="md:hidden" />
                    {" "}All rights reserved.
                </p>
            </div>
        </footer>
    );
}