import { useParams, useNavigate } from 'react-router-dom'
import { ligasData } from '../../data/ligas'
import './DetalleLiga.css'

export default function DetalleLiga() {
    const { id } = useParams()
    const navigate = useNavigate()

    const liga = ligasData.find(l => l.id === parseInt(id))

    if (!liga) {
        return (
            <div className="liga-not-found">
                <h2>Liga no encontrada</h2>
                <button onClick={() => navigate('/ligas')}>Volver a Ligas</button>
            </div>
        )
    }

    return (
        <div className="detalle-liga-page fade-in">
            {/* Header con Banner */}
            <div className="detalle-header" style={{ '--liga-color': liga.color }}>
                <div className="container">
                    <button className="back-btn" onClick={() => navigate(-1)}>← Volver</button>
                    <div className="header-content">
                        <div className="header-icon">🏆</div>
                        <div className="header-info">
                            <span className={`liga-status-badge ${liga.status.toLowerCase().replace(' ', '-')}`}>
                                {liga.status}
                            </span>
                            <h1>{liga.name}</h1>
                            <p>{liga.description}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container content-grid">
                {/* Columna Principal */}
                <div className="main-column">
                    {/* Sección de Equipos / Tabla */}
                    <section className="detalle-section">
                        <h2>Tabla de Posiciones</h2>
                        {liga.equipos && liga.equipos.length > 0 ? (
                            <div className="tabla-responsive">
                                <table className="tabla-posiciones">
                                    <thead>
                                        <tr>
                                            <th>Pos</th>
                                            <th>Equipo</th>
                                            <th>PJ</th>
                                            <th>G</th>
                                            <th>E</th>
                                            <th>P</th>
                                            <th>Pts</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {liga.equipos.sort((a, b) => b.puntos - a.puntos).map((equipo, index) => (
                                            <tr key={equipo.id}>
                                                <td>{index + 1}</td>
                                                <td className="equipo-cell">
                                                    <span className="equipo-icon">🛡️</span>
                                                    {equipo.nombre}
                                                </td>
                                                <td>{equipo.jugados}</td>
                                                <td>{equipo.ganados}</td>
                                                <td>{equipo.empatados}</td>
                                                <td>{equipo.perdidos}</td>
                                                <td className="puntos-cell">{equipo.puntos}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="empty-state">
                                <p>Aún no hay equipos registrados o el torneo no ha iniciado.</p>
                            </div>
                        )}
                    </section>

                    {/* Próximos Partidos (Placeholder) */}
                    <section className="detalle-section">
                        <h2>Próxima Jornada</h2>
                        <div className="partidos-list">
                            <div className="partido-card">
                                <div className="equipo-local">Los Tigres</div>
                                <div className="vs">VS</div>
                                <div className="equipo-visitante">Águilas FC</div>
                                <div className="partido-info">Sáb 18:00 - Cancha 1</div>
                            </div>
                            <div className="partido-card">
                                <div className="equipo-local">Dep. Central</div>
                                <div className="vs">VS</div>
                                <div className="equipo-visitante">Atl. Norte</div>
                                <div className="partido-info">Dom 10:00 - Cancha 2</div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Sidebar con Info */}
                <aside className="sidebar-info">
                    <div className="info-card">
                        <h3>Información del Torneo</h3>
                        <ul className="info-list">
                            <li>
                                <span className="label">Equipos:</span>
                                <span className="value">{liga.teams}</span>
                            </li>
                            <li>
                                <span className="label">Jornadas Totales:</span>
                                <span className="value">{liga.jornadasTotales}</span>
                            </li>
                            <li>
                                <span className="label">Jornada Actual:</span>
                                <span className="value">{liga.jornadaActual}</span>
                            </li>
                            <li>
                                <span className="label">Formato:</span>
                                <span className="value">Liga Regular + Liguilla</span>
                            </li>
                        </ul>
                    </div>

                    <div className="info-card">
                        <h3>Administración</h3>
                        <p>Contacta al administrador para inscripciones o dudas.</p>
                        <button className="contact-btn">Contactar Admin</button>
                    </div>
                </aside>
            </div>
        </div>
    )
}
