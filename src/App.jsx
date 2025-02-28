import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import LandingPage from './components/LandingPage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
