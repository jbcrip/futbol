import { useParams, useNavigate } from 'react-router-dom'
import { equiposData } from '../../data/equipos'
import { ligasData } from '../../data/ligas'
import './DetalleEquipo.css'

export default function DetalleEquipo() {
    const { id } = useParams()
    const navigate = useNavigate()

    const equipo = equiposData.find(e => e.id === parseInt(id))

    if (!equipo) {
        return (
            <div className="equipo-not-found">
                <h2>Equipo no encontrado</h2>
                <button onClick={() => navigate('/equipos')}>Volver a Equipos</button>
            </div>
        )
    }

    const liga = ligasData.find(l => l.id === equipo.ligaId)

    return (
        <div className="detalle-equipo-page fade-in">
            {/* Header del Equipo */}
            <div className="equipo-header" style={{ '--equipo-color': equipo.color }}>
                <div className="container">
                    <button className="back-btn" onClick={() => navigate(-1)}>← Volver</button>

                    <div className="equipo-profile">
                        <div className="equipo-logo-large">{equipo.escudo}</div>
                        <div className="equipo-title">
                            <span className="liga-tag" onClick={() => navigate(`/ligas/${liga.id}`)}>
                                {liga?.name}
                            </span>
                            <h1>{equipo.nombre}</h1>
                            <div className="equipo-meta">
                                <span>📍 {equipo.estadio}</span>
                                <span>📅 Fundado: {equipo.fundacion}</span>
                                <span>👔 DT: {equipo.entrenador}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container content-grid-equipo">
                {/* Columna Principal: Plantilla */}
                <div className="main-column">
                    <section className="equipo-section">
                        <h2>Plantilla de Jugadores</h2>
                        <div className="jugadores-list">
                            {equipo.jugadores && equipo.jugadores.length > 0 ? (
                                <table className="tabla-jugadores">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Jugador</th>
                                            <th>Posición</th>
                                            <th className="stat-col">⚽</th>
                                            <th className="stat-col">🟨</th>
                                            <th className="stat-col">🟥</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {equipo.jugadores.map(jugador => (
                                            <tr key={jugador.id}>
                                                <td className="dorsal-cell">{jugador.dorsal}</td>
                                                <td className="jugador-cell">
                                                    <span className="jugador-foto">{jugador.foto}</span>
                                                    <div className="jugador-info">
                                                        <span className="jugador-nombre">{jugador.nombre}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className={`posicion-badge ${jugador.posicion.toLowerCase()}`}>
                                                        {jugador.posicion}
                                                    </span>
                                                </td>
                                                <td className="stat-col">{jugador.goles}</td>
                                                <td className="stat-col">{jugador.tarjetasA}</td>
                                                <td className="stat-col">{jugador.tarjetasR}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <p className="empty-msg">No hay jugadores registrados aún.</p>
                            )}
                        </div>
                    </section>
                </div>

                {/* Sidebar: Estadísticas */}
                <aside className="sidebar-stats">
                    <div className="stats-card">
                        <h3>Estadísticas de Temporada</h3>
                        <div className="stats-grid">
                            <div className="stat-box">
                                <span className="stat-num">{equipo.estadisticas.jugados}</span>
                                <span className="stat-txt">Jugados</span>
                            </div>
                            <div className="stat-box highlight">
                                <span className="stat-num">{equipo.estadisticas.puntos}</span>
                                <span className="stat-txt">Puntos</span>
                            </div>
                            <div className="stat-box success">
                                <span className="stat-num">{equipo.estadisticas.ganados}</span>
                                <span className="stat-txt">Ganados</span>
                            </div>
                            <div className="stat-box danger">
                                <span className="stat-num">{equipo.estadisticas.perdidos}</span>
                                <span className="stat-txt">Perdidos</span>
                            </div>
                            <div className="stat-box info">
                                <span className="stat-num">{equipo.estadisticas.golesFavor}</span>
                                <span className="stat-txt">Goles A Favor</span>
                            </div>
                            <div className="stat-box warning">
                                <span className="stat-num">{equipo.estadisticas.golesContra}</span>
                                <span className="stat-txt">Goles En Contra</span>
                            </div>
                        </div>
                    </div>

                    <div className="description-card">
                        <h3>Sobre el Equipo</h3>
                        <p>{equipo.descripcion}</p>
                    </div>
                </aside>
            </div>
        </div>
    )
}
