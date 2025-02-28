function LandingPage() {
    return (
        <div className="flex flex-col items-center justify-center flex-grow bg-gray-100">
            <main className="flex-1 flex flex-col items-center justify-center">
                <p className="text-xl text-rose-500 mb-4">
                    Esta es una pequeña landing page utilizando nuestra paleta de colores.
                </p>
                <a href="/login" className="bg-mint-500 text-white p-2 rounded">
                    Ir al Login
                </a>
            </main>
        </div>
    )
}

export default LandingPage
