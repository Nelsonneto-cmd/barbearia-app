import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Servicos from './components/pages/Servicos'
import Marcar from './components/pages/Marcar'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/marcar" element={<Marcar />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
