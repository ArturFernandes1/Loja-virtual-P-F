import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Empresa from './pages/empresa'
import Portfolio from './pages/portfolio'
import Orcamento from './pages/orcamento'
import Contato from './pages/contato'




function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="Empresa" element={<Empresa/>} />
            <Route path="contato" element={<Contato />} />
            <Route path="Orcamento" element={<Orcamento />} />
        </Routes>
    </BrowserRouter>
  )
}
export default App
