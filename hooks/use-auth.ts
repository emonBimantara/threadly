import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { login, register } from '@/service/auth'

export function useAuth() {
    const router = useRouter()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [isLoading, setIsLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')

    const handleRegister = async (callbackSuccess: () => void) => {
        setIsLoading(true);
        setErrorMsg("");
        setSuccessMsg("");

        try {
            await register({
                name: username,
                email,
                password,
            });

            setSuccessMsg("Account created successfully. Please sign in to continue.");

            setUsername("");
            setEmail("");
            setPassword("");

            callbackSuccess();
        } catch (error) {
            if (error instanceof Error) {
                if (error instanceof Error) {
                    const message = error.message.toLowerCase();

                    if (message.includes("email") && message.includes("taken")) {
                        setErrorMsg("This email is already registered.");
                    } else {
                        setErrorMsg(error.message);
                    }
                } else {
                    setErrorMsg("An unexpected error occurred.");
                }
            } else {
                setErrorMsg("An unexpected error occurred.");
            }

            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogin = async () => {
        setIsLoading(true)
        setErrorMsg('')
        setSuccessMsg('')

        try {
            const respData = await login({ email, password })
            if (respData.data.token) {
                localStorage.setItem("accessToken", respData.data.token);
            }

            router.push('/Threads')
            router.refresh()
        } catch (error) {
            if (error instanceof Error) {
                setErrorMsg(error.message);
            } else {
                setErrorMsg("An unexpected error occurred.");
            }

            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("accessToken");

        router.push("/Login");
        router.refresh();
    };

    return {
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
        handleLogout
    }
}