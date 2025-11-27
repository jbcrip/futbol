import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navegacion from './components/navegacion'
import Home from './pages/Home'
import Login from './pages/Login'
import { Ligas, DetalleLiga } from './pages/Ligas'
import { Equipos, DetalleEquipo } from './pages/Equipos'
import './App.css'

function App() {
    return (
        <Router>
            <div className="app">
                <Navegacion />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    {/* Rutas futuras */}
                    <Route path="/ligas" element={<Ligas />} />
                    <Route path="/ligas/:id" element={<DetalleLiga />} />
                    <Route path="/equipos" element={<Equipos />} />
                    <Route path="/equipos/:id" element={<DetalleEquipo />} />
                    <Route path="/torneos" element={<div className="coming-soon">🎯 Torneos - Próximamente</div>} />
                    <Route path="/partidos" element={<div className="coming-soon">⚽ Partidos - Próximamente</div>} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
