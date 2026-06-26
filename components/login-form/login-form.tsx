'use client'

import { useState } from "react"
import { useAuth } from "@/hooks/use-auth"

import { Button } from "@/components/ui/button"
import { ArrowRight, Eye, EyeOff } from "lucide-react"

export default function LoginForm() {
    const [isLogin, setIsLogin] = useState(true)
    const [showPassword, setShowPassword] = useState(false)

    const {
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        isLoading,
        errorMsg,
        successMsg,
        handleRegister,
        handleLogin,
    } = useAuth()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (isLogin) {
            handleLogin()
        } else {
            handleRegister(() => setIsLogin(true))
        }
    }

    const switchMode = (loginMode: boolean) => {
        setIsLogin(loginMode)
        setShowPassword(false)

        setUsername("")
        setEmail("")
        setPassword("")
    }

    return (
        <div>
            <div className="mb-5 flex flex-col gap-2">
                <h2 className="text-2xl font-bold text-black">
                    {isLogin ? "Welcome Back" : "Create an Account"}
                </h2>

                <p className="text-lg text-gray-400">
                    {isLogin
                        ? "Please enter your details to access your dashboard"
                        : "Join us today and start your journey"}
                </p>
            </div>

            {successMsg && (
                <div className="mb-4 rounded-md border border-green-200 bg-green-50 p-3 text-sm font-medium text-green-600">
                    {successMsg}
                </div>
            )}

            {errorMsg && (
                <div className="mb-4 rounded-md border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-600">
                    {errorMsg}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <div className="mb-3 flex flex-col gap-1">
                        <label className="font-medium text-black">
                            Username
                        </label>

                        <input
                            type="text"
                            placeholder="chimaKeraz"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            disabled={isLoading}
                            required
                            className="mt-1 w-full rounded-md border border-[#E5E7EB] bg-[#F9F9FF] px-3 py-2 text-md text-gray-900 placeholder:text-gray-400 focus:border-[#2A14B4] focus:outline-none focus:ring-2 focus:ring-[#2A14B4]/20"
                        />
                    </div>
                )}

                <div className="mb-3 flex flex-col gap-1">
                    <label className="font-medium text-black">
                        Email
                    </label>

                    <input
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                        required
                        className="mt-1 w-full rounded-md border border-[#E5E7EB] bg-[#F9F9FF] px-3 py-2 text-md text-gray-900 placeholder:text-gray-400 focus:border-[#2A14B4] focus:outline-none focus:ring-2 focus:ring-[#2A14B4]/20"
                    />
                </div>

                <div className="mb-3 flex flex-col gap-1">
                    <label className="font-medium text-black">
                        Password
                    </label>

                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={isLoading}
                            required
                            className="mt-1 w-full rounded-md border border-[#E5E7EB] bg-[#F9F9FF] px-3 py-2 pr-10 text-md text-gray-900 placeholder:text-gray-400 focus:border-[#2A14B4] focus:outline-none focus:ring-2 focus:ring-[#2A14B4]/20"
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                        >
                            {showPassword ? (
                                <EyeOff size={18} />
                            ) : (
                                <Eye size={18} />
                            )}
                        </button>
                    </div>
                </div>

                <Button
                    type="submit"
                    disabled={isLoading}
                    className="my-2 flex w-full items-center justify-center gap-2 py-5 text-md"
                >
                    {isLoading ? (
                        <>
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            {isLogin ? "Signing In..." : "Creating Account..."}
                        </>
                    ) : (
                        <>
                            {isLogin ? "Sign In" : "Create Account"}
                            <ArrowRight size={20} />
                        </>
                    )}
                </Button>

                <p className="text-center text-md text-gray-600">
                    {isLogin ? (
                        <>
                            Don't have an account?{" "}
                            <span
                                onClick={() => switchMode(false)}
                                className="cursor-pointer font-semibold text-black hover:underline"
                            >
                                Sign Up
                            </span>
                        </>
                    ) : (
                        <>
                            Already have an account?{" "}
                            <span
                                onClick={() => switchMode(true)}
                                className="cursor-pointer font-semibold text-black hover:underline"
                            >
                                Sign In
                            </span>
                        </>
                    )}
                </p>
            </form>
        </div>
    )
}