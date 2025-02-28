function LandingPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <header className="bg-sky-500 w-full p-4 text-white text-center">
                <h1 className="text-3xl">Bienvenido a Nuestra Aplicación</h1>
            </header>
            <main className="flex-1 flex flex-col items-center justify-center">
                <p className="text-xl text-rose-500 mb-4">
                    Esta es una pequeña landing page utilizando nuestra paleta de colores.
                </p>
                <a href="/login" className="bg-mint-500 text-white p-2 rounded">
                    Ir al Login
                </a>
            </main>
            <footer className="bg-sky-500 w-full p-4 text-white text-center">
                <p>&copy; 2023 Nuestra Aplicación</p>
            </footer>
        </div>
    )
}

export default LandingPage
