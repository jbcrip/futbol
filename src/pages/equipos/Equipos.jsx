import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { equiposData } from '../../data/equipos'
import { ligasData } from '../../data/ligas'
import './Equipos.css'

export default function Equipos() {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState('')

    // Agrupar equipos por liga
    const equiposPorLiga = ligasData.map(liga => {
        const equipos = equiposData.filter(e => e.ligaId === liga.id)
        return {
            ...liga,
            equipos
        }
    }).filter(liga => liga.equipos.length > 0) // Solo mostrar ligas con equipos

    // Filtrar equipos si hay búsqueda
    const filteredLigas = equiposPorLiga.map(liga => ({
        ...liga,
        equipos: liga.equipos.filter(e =>
            e.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })).filter(liga => liga.equipos.length > 0)

    return (
        <div className="equipos-page fade-in">
            <div className="container">
                <header className="equipos-header">
                    <h1 className="page-title">Equipos</h1>
                    <p className="page-subtitle">Conoce a los protagonistas de cada torneo</p>

                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Buscar equipo..."
                            className="search-input"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <span className="search-icon">🔍</span>
                    </div>
                </header>

                <div className="ligas-list">
                    {filteredLigas.length > 0 ? (
                        filteredLigas.map(liga => (
                            <section key={liga.id} className="liga-section">
                                <div className="liga-section-header">
                                    <h2 style={{ borderLeftColor: liga.color }}>{liga.name}</h2>
                                    <span className="liga-badge">{liga.status}</span>
                                </div>

                                <div className="equipos-grid">
                                    {liga.equipos.map(equipo => (
                                        <div
                                            key={equipo.id}
                                            className="equipo-card"
                                            onClick={() => navigate(`/equipos/${equipo.id}`)}
                                        >
                                            <div className="equipo-escudo">{equipo.escudo}</div>
                                            <div className="equipo-info">
                                                <h3>{equipo.nombre}</h3>
                                                <p className="equipo-estadio">📍 {equipo.estadio}</p>
                                            </div>
                                            <div className="equipo-arrow">→</div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ))
                    ) : (
                        <div className="no-results">
                            <p>No se encontraron equipos que coincidan con tu búsqueda.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
