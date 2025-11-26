import { useState } from 'react'
import './Navegacion.css'

export default function Navegacion() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <div className="navbar-logo">
                    <span className="logo-text">Liga Central</span>
                </div>

                {/* Menu Toggle (Mobile) */}
                <button
                    className={`menu-toggle ${menuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Navigation Links */}
                <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
                    <li className="navbar-item">
                        <a href="/" className="navbar-link active">
                            Inicio
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a href="/ligas" className="navbar-link">
                            Ligas
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a href="/equipos" className="navbar-link">
                            Equipos
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a href="/torneos" className="navbar-link">
                            Torneos
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a href="/partidos" className="navbar-link">
                            Partidos
                        </a>
                    </li>

                    {/* Login Button (Inside Menu for Mobile) */}
                    <li className="navbar-item login-item">
                        <a href="/login" className="login-btn">
                            <span className="login-icon">👤</span>
                            Iniciar Sesión
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
