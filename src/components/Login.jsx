import { useState } from 'react'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // Aquí puedes manejar la lógica de inicio de sesión
        console.log('Email:', email)
        console.log('Password:', password)
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <h2 className="text-2xl mb-4 text-sky-500">Login</h2>
                <div className="mb-4">
                    <label className="block mb-1 text-rose-500">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1 text-rose-500">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-mint-500 text-white p-2 rounded">
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login
