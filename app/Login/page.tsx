import LoginForm from "@/components/login-form/login-form"

export default function Login() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <nav className="flex lg:hidden items-center gap-2 border-b border-gray-300 p-5">
                <img
                    src="/icon.png"
                    alt="Threadly"
                    width={30}
                />
                <h1 className="text-3xl font-bold text-black">
                    Threadly
                </h1>
            </nav>

            <main className="flex-1 flex lg:flex-row">
                <section className="hidden lg:flex w-1/2 flex-col justify-center bg-black p-12">
                    <div className="flex items-center gap-2 mb-10">
                        <img
                            src="/icon.png"
                            alt="Threadly"
                            width={30}
                            className="invert"
                        />
                        <h1 className="text-3xl font-bold text-white">
                            Threadly
                        </h1>
                    </div>

                    <h1 className="text-5xl font-bold text-white leading-tight">
                        Connect with the brightest minds in tech.
                    </h1>

                    <p className="mt-6 text-lg text-gray-400">
                        Join the premier network for industry professionals to share
                        insights, collaborate on projects, and advance their careers.
                    </p>
                </section>

                <section className="flex w-full lg:w-1/2 items-center justify-center px-6 py-10">
                    <div className="w-full max-w-md">
                        <LoginForm />
                    </div>
                </section>
            </main>
        </div>
    )
}