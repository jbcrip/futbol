import { useState } from 'react'
import './Login.css'

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [isLogin, setIsLogin] = useState(true)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // Aquí irá la lógica de autenticación
    }

    return (
        <div className="login-page">
            <div className="login-container">
                {/* Left Side - Branding */}
                <div className="login-branding">
                    <div className="branding-content">
                        <div className="brand-logo">
                            <span className="brand-icon">⚽</span>
                            <h1 className="brand-name">Futsala</h1>
                        </div>
                        <p className="brand-tagline">
                            La plataforma definitiva para gestión de torneos de fútbol sala
                        </p>
                        <div className="brand-features">
                            <div className="feature-item">
                                <span className="feature-icon">✓</span>
                                <span>Gestiona tus torneos</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">✓</span>
                                <span>Organiza equipos</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">✓</span>
                                <span>Sigue estadísticas</span>
                            </div>
                        </div>
                    </div>
                    <div className="branding-decoration">
                        <div className="floating-ball-1">⚽</div>
                        <div className="floating-ball-2">🏆</div>
                    </div>
                </div>

                {/* Right Side - Login Form */}
                <div className="login-form-section">
                    <div className="form-wrapper">
                        <div className="form-header">
                            <h2 className="form-title">
                                {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
                            </h2>
                            <p className="form-subtitle">
                                {isLogin
                                    ? 'Bienvenido de nuevo a Futsala'
                                    : 'Únete a la comunidad de Futsala'}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="login-form">
                            {!isLogin && (
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">
                                        <span className="label-icon">👤</span>
                                        Nombre Completo
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-input"
                                        placeholder="Juan Pérez"
                                        required={!isLogin}
                                    />
                                </div>
                            )}

                            <div className="form-group">
                                <label htmlFor="email" className="form-label">
                                    <span className="label-icon">📧</span>
                                    Correo Electrónico
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-input"
                                    placeholder="tu@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password" className="form-label">
                                    <span className="label-icon">🔒</span>
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-input"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {isLogin && (
                                <div className="form-options">
                                    <label className="checkbox-label">
                                        <input type="checkbox" />
                                        <span>Recordarme</span>
                                    </label>
                                    <a href="#" className="forgot-password">
                                        ¿Olvidaste tu contraseña?
                                    </a>
                                </div>
                            )}

                            <button type="submit" className="submit-btn">
                                {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
                            </button>

                            <div className="form-divider">
                                <span>o continúa con</span>
                            </div>

                            <div className="social-login">
                                <button type="button" className="social-btn google">
                                    <span className="social-icon">G</span>
                                    Google
                                </button>
                                <button type="button" className="social-btn facebook">
                                    <span className="social-icon">f</span>
                                    Facebook
                                </button>
                            </div>

                            <div className="form-footer">
                                <p>
                                    {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}
                                    {' '}
                                    <button
                                        type="button"
                                        className="toggle-form-btn"
                                        onClick={() => setIsLogin(!isLogin)}
                                    >
                                        {isLogin ? 'Regístrate' : 'Inicia Sesión'}
                                    </button>
                                </p>
                            </div>
                        </form>

                        <a href="/" className="back-home">
                            ← Volver al inicio
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
