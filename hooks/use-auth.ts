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
        setIsLoading(true)
        setErrorMsg('')
        setSuccessMsg('')

        try {
            await register(username, email, password);

            setSuccessMsg('Account created successfully. Please sign in to continue.');

            setUsername('')
            setEmail('')
            setPassword('')

            callbackSuccess()

        } catch (error) {
            setErrorMsg('An error occurred during registration.')
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleLogin = async () => {
        setIsLoading(true)
        setErrorMsg('')
        setSuccessMsg('')

        try {
            const respData = await login(email, password)
            if (respData && respData.token) {
                localStorage.setItem('accessToken', respData.token);
            }

            router.push('/Threads')
            router.refresh()
        } catch (error) {
            setErrorMsg('Network error occurred while logging in. Please try again.')
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

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
        handleLogin
    }
}